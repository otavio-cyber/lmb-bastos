import type { Metadata } from "next";
import { FileText, Download } from "lucide-react";

export const metadata: Metadata = { title: "Transparência | Legião Mirim de Bastos" };

// Dados de exemplo — em produção virão do banco/painel admin
const documentosInst = [
  { nome: "Estatuto Social", data: "2002", tipo: "PDF" },
  { nome: "Ata de Eleição da Diretoria 2026/2027", data: "Jun/2026", tipo: "PDF" },
];

const convenios = [
  { nome: "Subvenção Municipal — Prefeitura de Bastos", data: "2026", tipo: "PDF" },
  { nome: "Emenda Impositiva", data: "2026", tipo: "PDF" },
];

const relatorios = [
  { nome: "Relatório Financeiro — Janeiro 2026", mes: "Jan/2026" },
  { nome: "Relatório Financeiro — Fevereiro 2026", mes: "Fev/2026" },
  { nome: "Relatório Financeiro — Março 2026", mes: "Mar/2026" },
];

function DocCard({ nome, info }: { nome: string; info: string }) {
  return (
    <div className="flex items-center justify-between gap-4 bg-white rounded-sm p-4 border border-gray-100 hover:border-blue-200 transition-colors group">
      <div className="flex items-center gap-3">
        <FileText size={18} className="shrink-0" style={{ color: "var(--color-azul)" }} />
        <div>
          <p className="font-body text-sm font-medium" style={{ color: "var(--color-azul-escuro)" }}>{nome}</p>
          <p className="font-body text-xs text-gray-400">{info}</p>
        </div>
      </div>
      <button
        className="flex items-center gap-1.5 text-xs font-body px-3 py-1.5 rounded-sm transition-colors opacity-0 group-hover:opacity-100"
        style={{ backgroundColor: "var(--color-azul)", color: "white" }}
        title="Baixar documento"
      >
        <Download size={12} /> Baixar
      </button>
    </div>
  );
}

export default function Transparencia() {
  return (
    <>
      <section style={{ backgroundColor: "var(--color-azul-escuro)" }} className="py-16 px-4 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-2" style={{ backgroundColor: "var(--color-amarelo)" }} aria-hidden="true" />
        <div className="max-w-4xl mx-auto">
          <p className="font-display font-semibold text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "var(--color-amarelo)" }}>Prestação de contas</p>
          <h1 className="font-display font-black text-white leading-tight" style={{ fontSize: "clamp(36px, 6vw, 72px)" }}>Transparência</h1>
          <p className="font-body text-white/60 mt-4 max-w-xl">
            Acreditamos que a transparência é um compromisso com a comunidade e com os órgãos públicos que nos apoiam. Aqui você encontra nossos documentos institucionais e relatórios financeiros.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-14">

          <div>
            <h2 className="font-display font-black text-2xl mb-6" style={{ color: "var(--color-azul-escuro)" }}>Documentos Institucionais</h2>
            <div className="space-y-3">
              {documentosInst.map(d => <DocCard key={d.nome} nome={d.nome} info={d.data} />)}
            </div>
          </div>

          <div>
            <h2 className="font-display font-black text-2xl mb-6" style={{ color: "var(--color-azul-escuro)" }}>Convênios e Contratos</h2>
            <div className="space-y-3">
              {convenios.map(d => <DocCard key={d.nome} nome={d.nome} info={d.data} />)}
            </div>
          </div>

          <div>
            <h2 className="font-display font-black text-2xl mb-2" style={{ color: "var(--color-azul-escuro)" }}>Relatórios Financeiros</h2>
            <p className="font-body text-sm text-gray-400 mb-6">Atualizados mensalmente pela equipe administrativa</p>
            <div className="space-y-3">
              {relatorios.map(d => <DocCard key={d.nome} nome={d.nome} info={d.mes} />)}
            </div>
            {relatorios.length === 0 && (
              <div className="text-center py-12 font-body text-sm text-gray-400">
                Nenhum relatório publicado ainda.
              </div>
            )}
          </div>

        </div>
      </section>
    </>
  );
}
