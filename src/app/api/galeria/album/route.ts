import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/auth';
import pool from '@/lib/db';

export async function POST(req: NextRequest) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
  }

  const { nome } = await req.json();
  if (!nome) return NextResponse.json({ error: 'Nome obrigatório' }, { status: 400 });

  const result = await pool.query(
    'INSERT INTO albuns (nome) VALUES ($1) ON CONFLICT DO NOTHING RETURNING *',
    [nome]
  );

  return NextResponse.json(result.rows[0] || { error: 'Álbum já existe' });
}
