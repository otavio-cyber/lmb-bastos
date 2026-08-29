import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/auth';
import { UPLOAD_DIR, deleteFile } from '@/lib/upload';
import pool from '@/lib/db';
import path from 'path';

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
  }

  const { id } = await params;
  const result = await pool.query('SELECT filename FROM documentos WHERE id = $1', [id]);

  if (result.rows.length === 0) {
    return NextResponse.json({ error: 'Não encontrado' }, { status: 404 });
  }

  const { filename } = result.rows[0];
  deleteFile(path.join(UPLOAD_DIR, 'documentos', filename));
  await pool.query('DELETE FROM documentos WHERE id = $1', [id]);

  return NextResponse.json({ ok: true });
}
