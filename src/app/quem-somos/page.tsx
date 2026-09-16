import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Quem Somos | Legião Mirim de Bastos" };

const diretoria = [
  { cargo: "Diretora Presidente", nome: "Magda Vieira dos Santos" },
  { cargo: "1ª Diretora Presidente", nome: "Janaine Luiz" },
  { cargo: "2ª Diretora Presidente", nome: "Rosa Freitas Pereira Guanais" },
  { cargo: "Diretora Tesoureira Geral", nome: "Alessandra de Oliveira Segura Pereira" },
  { cargo: "1ª Diretora Tesoureira", nome: "Maria Silvania Batista de Almeida da Silva" },
  { cargo: "2ª Diretora Tesoureira", nome: "Karina Frederico da Silva" },
  { cargo: "Diretora Secretária Geral", nome: "Cássia Tanaka" },
  { cargo: "1º Diretor Secretário", nome: "Edilson Borghi" },
  { cargo: "2ª Diretora Secretária", nome: "Juliana Pereira Guanais Fernandes" },
];

export default function QuemSomos() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "var(--color-azul-escuro)" }} className="py-16 px-4 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-2" style={{ backgroundColor: "var(--color-amarelo)" }} aria-hidden="true" />
        <div className="max-w-4xl mx-auto">
          <p className="font-display font-semibold text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "var(--color-amarelo)" }}>Nossa história</p>
          <h1 className="font-display font-black text-white leading-tight" style={{ fontSize: "clamp(36px, 6vw, 72px)" }}>Quem Somos</h1>
        </div>
      </section>

      {/* Histórico */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3 space-y-5 font-body text-gray-600 leading-relaxed">
            <p>
              A <strong style={{ color: "var(--color-azul-escuro)" }}>Legião Mirim de Bastos</strong> foi fundada em <strong>24 de junho de 2002</strong>, por iniciativa do Lions Clube de Bastos Solidariedade, com o propósito de criar um canal permanente de desenvolvimento social e profissional para os adolescentes e jovens de Bastos e região.
            </p>
            <p>
              É uma associação de caráter assistencial, educacional, filantrópico e promocional, tendo por finalidade assistir socialmente, educar e encaminhar profissionalmente adolescentes e jovens ao mercado de trabalho, na condição de aprendiz, com faixa etária de 15 a 24 anos de idade.
            </p>
            <p>
              Desde sua implementação, o Programa de Aprendizagem Profissional tem gerado grandes impactos na comunidade. Muitos aprendizes conseguiram a efetivação em posições relevantes e promissoras. Além disso, o programa contribui para a redução da evasão escolar, pois a parceria entre a Legião Mirim e as escolas tem sido crucial, aumentando o senso de responsabilidade dos aprendizes.
            </p>
            <p>
              A Legião Mirim de Bastos continua comprometida com a missão de transformar vidas através da educação inclusiva e da capacitação profissional, resgatando a importância do investimento na juventude como caminho para um futuro mais promissor e equitativo.
            </p>
          </div>
          <div className="md:col-span-2">
            <div
              className="rounded-sm p-8 h-full"
              style={{ backgroundColor: "var(--color-cinza-claro)", borderLeft: "4px solid var(--color-amarelo)" }}
            >
              <p className="font-display font-black text-5xl mb-1" style={{ color: "var(--color-azul-escuro)" }}>2002</p>
              <p className="font-body text-sm text-gray-500 mb-6">Ano de fundação</p>
              <p className="font-display font-black text-5xl mb-1" style={{ color: "var(--color-azul-escuro)" }}>+24</p>
              <p className="font-body text-sm text-gray-500 mb-6">Anos de atuação</p>
              <p className="font-display font-black text-5xl mb-1" style={{ color: "var(--color-azul-escuro)" }}>13</p>
              <p className="font-body text-sm text-gray-500 mb-6">Empresas parceiras ativas</p>
              <p className="font-body text-xs text-gray-400 leading-relaxed">
                Mantenedor: Lions Clube de Bastos Solidariedade<br />
                CNPJ: 05.298.119/0001-06
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Palavra da Presidente + foto */}
      <section style={{ backgroundColor: "var(--color-azul)" }} className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <p className="font-display font-bold text-xs tracking-[0.2em] uppercase mb-6 text-center" style={{ color: "var(--color-amarelo)" }}>
            Palavra da Presidente
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-display font-black text-7xl block leading-none mb-4 opacity-20 text-white select-none" aria-hidden="true">"</span>
              <blockquote className="font-display font-semibold text-white leading-snug mb-8" style={{ fontSize: "clamp(18px, 2.5vw, 26px)" }}>
                Há mais de 24 anos, a Legião Mirim de Bastos abre portas para adolescentes que buscam uma oportunidade. Nossa missão vai além da formação profissional: acreditamos que cada jovem que passa por aqui leva consigo valores, confiança, autonomia e novas possibilidades para construir um futuro mais digno.
              </blockquote>
              <div style={{ borderTop: "1px solid rgba(245,200,0,0.3)" }} className="pt-5 space-y-1">
                <p className="font-display font-bold text-base" style={{ color: "var(--color-amarelo)" }}>Magda Vieira dos Santos</p>
                <p className="font-body text-sm text-white/60">Diretora Presidente · Gestão 2024/2027</p>
                <p className="font-body text-xs text-white/40">Membro do Lions Clube de Bastos Solidariedade</p>
              </div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} className="pt-4 mt-4 space-y-1">
                <p className="font-body text-sm text-white/80">Alessandra de Oliveira Segura Pereira</p>
                <p className="font-body text-xs text-white/40">Diretora Tesoureira Geral</p>
              </div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} className="pt-4 mt-2 space-y-1">
                <p className="font-body text-sm text-white/80">Cássia Tanaka</p>
                <p className="font-body text-xs text-white/40">Diretora Secretária Geral</p>
              </div>
            </div>
            <div className="rounded-sm overflow-hidden shadow-xl">
              <Image
                src="/diretoria.jpeg"
                alt="Diretoria da Legião Mirim de Bastos — Gestão 2024/2027"
                width={600}
                height={750}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diretoria */}
      <section style={{ backgroundColor: "var(--color-cinza-claro)" }} className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display font-black mb-2" style={{ fontSize: "clamp(24px, 4vw, 40px)", color: "var(--color-azul-escuro)" }}>
            Diretoria Executiva
          </h2>
          <p className="font-body text-sm text-gray-500 mb-10">Gestão 2024 / 2027</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {diretoria.map(({ cargo, nome }) => (
              <div
                key={nome}
                className="bg-white rounded-sm p-5 flex flex-col gap-1 border-l-4"
                style={{ borderColor: "var(--color-azul)" }}
              >
                <p className="font-body text-xs text-gray-400 uppercase tracking-wide">{cargo}</p>
                <p className="font-display font-bold text-base" style={{ color: "var(--color-azul-escuro)" }}>{nome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
