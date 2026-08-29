import type { Metadata } from "next";
import { ImageIcon } from "lucide-react";

export const metadata: Metadata = { title: "Galeria | Legião Mirim de Bastos" };

const albuns = [
  {
    titulo: "Conheça a Entidade",
    desc: "Nosso espaço físico — salas de aula, refeitório, coordenação e estrutura completa.",
    fotos: 13,
    capa: null,
  },
  {
    titulo: "Atividades",
    desc: "Palestras, reuniões, eventos e momentos do dia a dia do programa.",
    fotos: 0,
    capa: null,
  },
];

export default function Galeria() {
  return (
    <>
      <section style={{ backgroundColor: "var(--color-azul-escuro)" }} className="py-16 px-4 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-2" style={{ backgroundColor: "var(--color-amarelo)" }} aria-hidden="true" />
        <div className="max-w-4xl mx-auto pl-6">
          <p className="font-display font-semibold text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "var(--color-amarelo)" }}>Fotos e momentos</p>
          <h1 className="font-display font-black text-white leading-tight" style={{ fontSize: "clamp(36px, 6vw, 72px)" }}>Galeria</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-6">
            {albuns.map(({ titulo, desc, fotos }) => (
              <div
                key={titulo}
                className="rounded-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer group"
              >
                {/* Placeholder da capa */}
                <div
                  className="h-48 flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-cinza-claro)" }}
                >
                  <ImageIcon size={40} style={{ color: "var(--color-azul)" }} className="opacity-30 group-hover:opacity-60 transition-opacity" />
                </div>
                <div className="p-6">
                  <h2 className="font-display font-black text-xl mb-1" style={{ color: "var(--color-azul-escuro)" }}>{titulo}</h2>
                  <p className="font-body text-sm text-gray-500 mb-3">{desc}</p>
                  <p className="font-body text-xs text-gray-400">{fotos > 0 ? `${fotos} fotos` : "Em breve"}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
