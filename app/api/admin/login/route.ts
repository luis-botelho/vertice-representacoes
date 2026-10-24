import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { createSessionToken, setSessionCookie } from '@/lib/auth/session';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminHash = process.env.ADMIN_PASSWORD_HASH;

    if (!adminEmail || !adminHash) {
      return NextResponse.json({ error: 'Admin não configurado' }, { status: 503 });
    }

    if (email !== adminEmail) {
      return NextResponse.json({ error: 'Credenciais inválidas' }, { status: 401 });
    }

    const valid = await bcrypt.compare(password, adminHash);
    if (!valid) {
      return NextResponse.json({ error: 'Credenciais inválidas' }, { status: 401 });
    }

    const token = createSessionToken({ email });
    const res = NextResponse.json({ success: true });
    setSessionCookie(res, token);
    return res;
  } catch (e) {
    return NextResponse.json({ error: 'Erro' }, { status: 500 });
  }
}
