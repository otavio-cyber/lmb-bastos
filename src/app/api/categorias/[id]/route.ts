import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/auth';
import pool from '@/lib/db';

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
  }

  const { id } = await params;
  const { nome } = await req.json();

  if (!nome?.trim()) {
    return NextResponse.json({ error: 'Nome obrigatório' }, { status: 400 });
  }

  // Atualiza também os documentos existentes que usavam o nome antigo
  const antiga = await pool.query('SELECT nome FROM categorias_doc WHERE id = $1', [id]);
  if (antiga.rows.length === 0) {
    return NextResponse.json({ error: 'Não encontrada' }, { status: 404 });
  }

  const nomeAntigo = antiga.rows[0].nome;
  await pool.query('UPDATE categorias_doc SET nome = $1 WHERE id = $2', [nome.trim(), id]);
  await pool.query('UPDATE documentos SET categoria = $1 WHERE categoria = $2', [nome.trim(), nomeAntigo]);

  return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
  }

  const { id } = await params;

  // Verifica se há documentos usando esta categoria
  const cat = await pool.query('SELECT nome FROM categorias_doc WHERE id = $1', [id]);
  if (cat.rows.length === 0) {
    return NextResponse.json({ error: 'Não encontrada' }, { status: 404 });
  }

  const docsUsando = await pool.query(
    'SELECT COUNT(*) FROM documentos WHERE categoria = $1',
    [cat.rows[0].nome]
  );

  if (parseInt(docsUsando.rows[0].count) > 0) {
    return NextResponse.json(
      { error: `Existem ${docsUsando.rows[0].count} documento(s) nesta categoria. Mova-os antes de excluir.` },
      { status: 409 }
    );
  }

  await pool.query('DELETE FROM categorias_doc WHERE id = $1', [id]);
  return NextResponse.json({ ok: true });
}
