import { NextRequest, NextResponse } from 'next/server';
import { checkPassword, createSessionCookie, clearSessionCookie, getSessionValue } from '@/lib/auth';

export async function POST(req: NextRequest) {
  const { password } = await req.json();

  if (!checkPassword(password)) {
    return NextResponse.json({ error: 'Senha incorreta' }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.headers.set('Set-Cookie', createSessionCookie(getSessionValue()));
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.headers.set('Set-Cookie', clearSessionCookie());
  return res;
}
