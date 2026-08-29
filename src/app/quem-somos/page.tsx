import type { Metadata } from "next";

export const metadata: Metadata = { title: "Quem Somos | Legião Mirim de Bastos" };

const diretoria = [
  { cargo: "Presidente", nome: "Magda Vieira dos Santos" },
  { cargo: "1ª Diretora Presidente", nome: "Janaine Luiz Rosa Freitas Pereira Guanais" },
  { cargo: "2ª Diretora Presidente", nome: "Alessandra de Oliveira Segura Pereira" },
  { cargo: "Diretora Tesoureira", nome: "Cássia Tanaka" },
  { cargo: "1ª Diretora Tesoureira", nome: "Karina Frederico da Silva" },
  { cargo: "1º Diretor Secretário", nome: "Edilson Borghi" },
  { cargo: "2ª Diretora Secretária", nome: "Juliana Pereira Guanais Fernandes" },
];

export default function QuemSomos() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "var(--color-azul-escuro)" }} className="py-16 px-4 relative overflow-hidden">
        <div
          className="absolute right-0 top-0 bottom-0 w-2"
          style={{ backgroundColor: "var(--color-amarelo)" }}
          aria-hidden="true"
        />
        <div className="max-w-4xl mx-auto">
          <p className="font-display font-semibold text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "var(--color-amarelo)" }}>
            Nossa história
          </p>
          <h1
            className="font-display font-black text-white leading-tight"
            style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
          >
            Quem Somos
          </h1>
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
              <p className="font-display font-black text-5xl mb-1" style={{ color: "var(--color-azul-escuro)" }}>+22</p>
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

      {/* Diretoria */}
      <section style={{ backgroundColor: "var(--color-cinza-claro)" }} className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2
            className="font-display font-black mb-2"
            style={{ fontSize: "clamp(24px, 4vw, 40px)", color: "var(--color-azul-escuro)" }}
          >
            Diretoria Executiva
          </h2>
          <p className="font-body text-sm text-gray-500 mb-10">Gestão 2026 / 2027</p>
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
