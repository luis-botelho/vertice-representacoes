import { NextResponse } from 'next/server';
import { QuoteSubmitSchema } from '@/lib/validation/schemas';
import { readJson, writeJson } from '@/lib/storage/jsonRepo';
import { v4 as uuidv4 } from 'uuid';
import { sendEmail } from '@/lib/email/adapter';
import { buildQuoteEmail } from '@/lib/email/templates';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = QuoteSubmitSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Dados inválidos', details: parsed.error.flatten() }, { status: 400 });
    }

    const data = parsed.data;
    const quotes = await readJson<any[]>('quotes.json', []);
    
    const quote: any = {
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      status: 'new',
      contactName: data.contactName,
      companyName: data.companyName,
      role: data.role,
      email: data.email,
      phone: data.phone,
      city: data.city,
      state: data.state,
      cnpj: data.cnpj || '',
      items: data.items.map(i => ({
        productId: i.productId,
        nameSnapshot: i.name,
        skuSnapshot: i.sku,
        brandSnapshot: i.brand,
        unitSnapshot: i.unit,
        quantity: i.quantity,
      })),
      desiredDeadline: data.desiredDeadline,
      deliveryDestination: data.deliveryDestination,
      paymentCondition: data.paymentCondition,
      message: data.message,
      sourcePage: data.sourcePage || req.headers.get('referer') || '/',
      privacyNoticeVersion: data.privacyNoticeVersion,
      consentMarketing: data.consentMarketing,
      internalNotes: '',
      notificationStatus: 'pending',
    };

    // Persistir lead ANTES de tentar enviar email
    quotes.push(quote);
    await writeJson('quotes.json', quotes);

    // Tentar enviar email
    const to = process.env.QUOTE_NOTIFICATION_EMAIL;
    if (to) {
      const appBaseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';
      const { html, text, subject } = buildQuoteEmail(quote, appBaseUrl);
      const result = await sendEmail({ to, subject, html, text });
      if (result.success) {
        quote.notificationStatus = 'sent';
        quote.emailSentAt = new Date().toISOString();
        // Update in array
        const idx = quotes.findIndex((q: any) => q.id === quote.id);
        if (idx >= 0) quotes[idx] = quote;
        await writeJson('quotes.json', quotes);
      } else {
        quote.notificationStatus = 'failed';
        const idx = quotes.findIndex((q: any) => q.id === quote.id);
        if (idx >= 0) quotes[idx] = quote;
        await writeJson('quotes.json', quotes);
      }
    } else {
      quote.notificationStatus = 'failed';
      const idx = quotes.findIndex((q: any) => q.id === quote.id);
      if (idx >= 0) quotes[idx] = quote;
      await writeJson('quotes.json', quotes);
    }

    return NextResponse.json({ success: true, id: quote.id });
  } catch (e: any) {
    return NextResponse.json({ error: 'Erro ao processar cotação' }, { status: 500 });
  }
}
