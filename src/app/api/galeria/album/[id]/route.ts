import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/auth';
import { UPLOAD_DIR } from '@/lib/upload';
import pool, { initDb } from '@/lib/db';
import path from 'path';
import fs from 'fs';

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: 'Nao autorizado' }, { status: 401 });
  }

  await initDb();
  const { id } = await params;

  const fotos = await pool.query('SELECT filename FROM fotos WHERE album_id = $1', [id]);

  for (const foto of fotos.rows) {
    const filepath = path.join(UPLOAD_DIR, 'galeria', id, foto.filename);
    if (fs.existsSync(filepath)) fs.unlinkSync(filepath);
  }

  const albumDir = path.join(UPLOAD_DIR, 'galeria', id);
  if (fs.existsSync(albumDir)) fs.rmSync(albumDir, { recursive: true, force: true });

  await pool.query('DELETE FROM fotos WHERE album_id = $1', [id]);
  await pool.query('DELETE FROM albuns WHERE id = $1', [id]);

  return NextResponse.json({ ok: true });
}
