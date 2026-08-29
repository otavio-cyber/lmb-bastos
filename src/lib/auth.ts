import { NextRequest } from 'next/server';

const SESSION_TOKEN = 'lmb_session';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'lmb2024admin';
const SECRET = process.env.SESSION_SECRET || 'lmb-secret-key-change-in-prod';

export function checkPassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}

export function createSessionCookie(value: string): string {
  const maxAge = 60 * 60 * 8; // 8 horas
  return `${SESSION_TOKEN}=${value}; HttpOnly; Path=/; Max-Age=${maxAge}; SameSite=Strict`;
}

export function clearSessionCookie(): string {
  return `${SESSION_TOKEN}=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict`;
}

export function isAuthenticated(req: NextRequest): boolean {
  const cookie = req.cookies.get(SESSION_TOKEN);
  return cookie?.value === SECRET;
}

export function getSessionValue(): string {
  return SECRET;
}
