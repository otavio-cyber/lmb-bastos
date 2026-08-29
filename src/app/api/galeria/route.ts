import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/auth';
import { ensureDir } from '@/lib/upload';
import pool, { initDb } from '@/lib/db';
import path from 'path';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

// GET — lista todos os álbuns com suas fotos
export async function GET() {
  await initDb();
  const albuns = await pool.query('SELECT * FROM albuns ORDER BY created_at ASC');
  const fotos = await pool.query('SELECT * FROM fotos ORDER BY created_at DESC');

  const result = albuns.rows.map((album) => ({
    ...album,
    fotos: fotos.rows.filter((f) => f.album_id === album.id),
  }));

  return NextResponse.json(result);
}

// POST — upload de foto para um álbum
export async function POST(req: NextRequest) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
  }

  await initDb();

  const formData = await req.formData();
  const file = formData.get('file') as File;
  const album_id = formData.get('album_id') as string;
  const nome = formData.get('nome') as string;

  if (!file || !album_id) {
    return NextResponse.json({ error: 'Campos obrigatórios faltando' }, { status: 400 });
  }

  const allowed = ['image/jpeg', 'image/png', 'image/webp'];
  if (!allowed.includes(file.type)) {
    return NextResponse.json({ error: 'Apenas JPG, PNG ou WEBP são aceitos' }, { status: 400 });
  }

  const dir = ensureDir(`galeria/${album_id}`);
  const ext = path.extname(file.name) || '.jpg';
  const filename = `${uuidv4()}${ext}`;
  const filepath = path.join(dir, filename);

  const buffer = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(filepath, buffer);

  await pool.query(
    'INSERT INTO fotos (album_id, nome, filename) VALUES ($1, $2, $3)',
    [album_id, nome || file.name, filename]
  );

  return NextResponse.json({ ok: true });
}
