import { cookies } from 'next/headers';
import { serialize, parse } from 'cookie';

const SESSION_COOKIE = 'vertice_session';
const SESSION_SECRET = process.env.SESSION_SECRET || '';

export function createSessionToken(payload: { email: string }) {
  // Simple token for MVP - in prod use proper signing
  const token = Buffer.from(JSON.stringify({ ...payload, exp: Date.now() + 86400000 })).toString('base64');
  return token;
}

export function verifySessionToken(token: string): { email: string } | null {
  try {
    const decoded = JSON.parse(Buffer.from(token, 'base64').toString('utf-8'));
    if (decoded.exp < Date.now()) return null;
    return { email: decoded.email };
  } catch {
    return null;
  }
}

export async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  return verifySessionToken(token);
}

export function setSessionCookie(res: Response, token: string) {
  const cookie = serialize(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24,
  });
  res.headers.append('Set-Cookie', cookie);
}

export function clearSessionCookie(res: Response) {
  const cookie = serialize(SESSION_COOKIE, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });
  res.headers.append('Set-Cookie', cookie);
}
