import type { Metadata } from "next";
import { FileText, Download } from "lucide-react";
import pool, { initDb } from "@/lib/db";

export const metadata: Metadata = { title: "Transparência | Legião Mirim de Bastos" };
export const revalidate = 60; // revalida a cada 60s

async function getDocumentos() {
  try {
    await initDb();
    const result = await pool.query("SELECT * FROM documentos ORDER BY created_at DESC");
    return result.rows;
  } catch {
    return [];
  }
}

const CATEGORIAS_ORDEM = ["Estatuto Social", "Ata de Eleição", "Convênio", "Relatório Financeiro", "Outro"];

export default async function Transparencia() {
  const docs = await getDocumentos();

  const porCategoria = CATEGORIAS_ORDEM.reduce((acc, cat) => {
    const items = docs.filter((d: { categoria: string }) => d.categoria === cat);
    if (items.length > 0) acc[cat] = items;
    return acc;
  }, {} as Record<string, typeof docs>);

  return (
    <>
      <section style={{ backgroundColor: "var(--color-azul-escuro)" }} className="py-16 px-4 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-2" style={{ backgroundColor: "var(--color-amarelo)" }} aria-hidden="true" />
        <div className="max-w-4xl mx-auto">
          <p className="font-display font-semibold text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "var(--color-amarelo)" }}>Prestação de contas</p>
          <h1 className="font-display font-black text-white leading-tight" style={{ fontSize: "clamp(36px, 6vw, 72px)" }}>Transparência</h1>
          <p className="font-body text-white/60 mt-4 max-w-xl">
            Acreditamos que a transparência é um compromisso com a comunidade e com os órgãos públicos que nos apoiam.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          {Object.keys(porCategoria).length === 0 ? (
            <p className="text-center font-body text-gray-400 py-16">Nenhum documento publicado ainda.</p>
          ) : (
            Object.entries(porCategoria).map(([categoria, items]) => (
              <div key={categoria}>
                <h2 className="font-display font-black text-2xl mb-6" style={{ color: "var(--color-azul-escuro)" }}>{categoria}</h2>
                <div className="space-y-3">
                  {items.map((d: { id: string; nome: string; mes_ano: string; filename: string }) => (
                    <div key={d.id} className="flex items-center justify-between gap-4 bg-white rounded-sm p-4 border border-gray-100 hover:border-blue-200 transition-colors group">
                      <div className="flex items-center gap-3">
                        <FileText size={18} className="shrink-0" style={{ color: "var(--color-azul)" }} />
                        <div>
                          <p className="font-body text-sm font-medium" style={{ color: "var(--color-azul-escuro)" }}>{d.nome}</p>
                          {d.mes_ano && <p className="font-body text-xs text-gray-400">{d.mes_ano}</p>}
                        </div>
                      </div>
                      <a
                        href={`/api/files/documentos/${d.filename}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs font-body px-3 py-1.5 rounded-sm transition-colors opacity-0 group-hover:opacity-100"
                        style={{ backgroundColor: "var(--color-azul)", color: "white" }}
                      >
                        <Download size={12} /> Baixar
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}
