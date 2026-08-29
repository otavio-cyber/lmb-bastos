import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/auth';
import { ensureDir } from '@/lib/upload';
import pool, { initDb } from '@/lib/db';
import path from 'path';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
  await initDb();
  const result = await pool.query(
    'SELECT * FROM documentos ORDER BY created_at DESC'
  );
  return NextResponse.json(result.rows);
}

export async function POST(req: NextRequest) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
  }

  await initDb();

  const formData = await req.formData();
  const file = formData.get('file') as File;
  const nome = formData.get('nome') as string;
  const categoria = formData.get('categoria') as string;
  const mes_ano = formData.get('mes_ano') as string;

  if (!file || !nome || !categoria) {
    return NextResponse.json({ error: 'Campos obrigatórios faltando' }, { status: 400 });
  }

  if (file.type !== 'application/pdf') {
    return NextResponse.json({ error: 'Apenas PDFs são aceitos' }, { status: 400 });
  }

  const dir = ensureDir('documentos');
  const ext = path.extname(file.name);
  const filename = `${uuidv4()}${ext}`;
  const filepath = path.join(dir, filename);

  const buffer = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(filepath, buffer);

  await pool.query(
    'INSERT INTO documentos (nome, categoria, mes_ano, filename) VALUES ($1, $2, $3, $4)',
    [nome, categoria, mes_ano || null, filename]
  );

  return NextResponse.json({ ok: true });
}
