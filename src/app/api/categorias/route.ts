import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/auth';
import pool, { initDb } from '@/lib/db';

export async function GET() {
  await initDb();
  const result = await pool.query('SELECT * FROM categorias_doc ORDER BY ordem ASC, nome ASC');
  return NextResponse.json(result.rows);
}

export async function POST(req: NextRequest) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
  }

  const { nome } = await req.json();
  if (!nome?.trim()) {
    return NextResponse.json({ error: 'Nome obrigatório' }, { status: 400 });
  }

  try {
    const result = await pool.query(
      'INSERT INTO categorias_doc (nome) VALUES ($1) RETURNING *',
      [nome.trim()]
    );
    return NextResponse.json(result.rows[0]);
  } catch {
    return NextResponse.json({ error: 'Categoria já existe' }, { status: 409 });
  }
}
