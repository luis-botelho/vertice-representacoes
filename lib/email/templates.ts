import { QuoteRequestSchema } from '@/lib/validation/schemas';
import { z } from 'zod';

type Quote = z.infer<typeof QuoteRequestSchema>;

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c] || c));
}

export function buildQuoteEmail(quote: Quote, appBaseUrl: string) {
  const itemsHtml = quote.items.map(item => {
    const link = item.productId ? `<a href="${appBaseUrl}/catalogo/${item.productId}">Ver item</a>` : '';
    return `<li><strong>${escapeHtml(item.nameSnapshot)}</strong> ${item.skuSnapshot ? '(SKU: ' + escapeHtml(item.skuSnapshot) + ')' : ''} - Qtd: ${item.quantity} ${item.unitSnapshot ? escapeHtml(item.unitSnapshot) : ''} ${link}</li>`;
  }).join('');

  const html = `
    <html><body>
      <h2>Nova solicitação de cotação - Vértice</h2>
      <p><strong>Data:</strong> ${quote.createdAt}</p>
      <p><strong>Contato:</strong> ${escapeHtml(quote.contactName)} (${escapeHtml(quote.role || '-')})</p>
      <p><strong>Empresa:</strong> ${escapeHtml(quote.companyName)}</p>
      <p><strong>E-mail:</strong> ${escapeHtml(quote.email)}</p>
      <p><strong>Telefone/WhatsApp:</strong> ${escapeHtml(quote.phone)}</p>
      <p><strong>Cidade/UF:</strong> ${escapeHtml(quote.city)}/${escapeHtml(quote.state)}</p>
      ${quote.cnpj ? `<p><strong>CNPJ:</strong> ${escapeHtml(quote.cnpj)}</p>` : ''}
      ${quote.deliveryDestination ? `<p><strong>Destino:</strong> ${escapeHtml(quote.deliveryDestination)}</p>` : ''}
      ${quote.desiredDeadline ? `<p><strong>Prazo desejado:</strong> ${escapeHtml(quote.desiredDeadline)}</p>` : ''}
      ${quote.paymentCondition ? `<p><strong>Condição de pagamento:</strong> ${escapeHtml(quote.paymentCondition)}</p>` : ''}
      <h3>Itens</h3>
      <ul>${itemsHtml}</ul>
      ${quote.message ? `<p><strong>Mensagem:</strong><br/>${escapeHtml(quote.message).replace(/\n/g, '<br/>')}</p>` : ''}
      <p><strong>Página de origem:</strong> ${escapeHtml(quote.sourcePage)}</p>
      <p><strong>Consentimento marketing:</strong> ${quote.consentMarketing ? 'Sim' : 'Não'}</p>
    </body></html>
  `;

  const text = `
Nova solicitação de cotação - Vértice
Data: ${quote.createdAt}
Contato: ${quote.contactName} (${quote.role || '-'})
Empresa: ${quote.companyName}
E-mail: ${quote.email}
Telefone/WhatsApp: ${quote.phone}
Cidade/UF: ${quote.city}/${quote.state}
${quote.cnpj ? 'CNPJ: ' + quote.cnpj : ''}
${quote.deliveryDestination ? 'Destino: ' + quote.deliveryDestination : ''}
${quote.desiredDeadline ? 'Prazo desejado: ' + quote.desiredDeadline : ''}
${quote.paymentCondition ? 'Condição de pagamento: ' + quote.paymentCondition : ''}
Itens:
${quote.items.map(i => `- ${i.nameSnapshot} ${i.skuSnapshot ? '(SKU:' + i.skuSnapshot + ')' : ''} Qtd:${i.quantity} ${i.unitSnapshot || ''}`).join('\n')}
${quote.message ? '\nMensagem:\n' + quote.message : ''}
Página de origem: ${quote.sourcePage}
Consentimento marketing: ${quote.consentMarketing ? 'Sim' : 'Não'}
  `;

  return { html, text, subject: `Cotação - ${quote.companyName}` };
}
