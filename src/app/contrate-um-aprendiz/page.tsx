import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";

export const metadata: Metadata = { title: "Contrate um Aprendiz | Legião Mirim de Bastos" };

const beneficios = [
  "Desenvolver talentos alinhados à cultura da sua empresa",
  "Obter incentivos fiscais — alíquota reduzida do FGTS (2%)",
  "Renovar e diversificar a força de trabalho",
  "Cumprir a cota legal de aprendizes (Lei 10.097/2000 — ECA)",
  "Obter vantagem competitiva com mão de obra qualificada",
  "Contribuir para uma sociedade mais inclusiva e próspera",
  "Responsabilidade social e fortalecimento do ESG",
];

const etapas = [
  { num: "01", titulo: "Entre em contato", desc: "Ligue ou envie mensagem para a Legião Mirim de Bastos e informe o número de vagas disponíveis." },
  { num: "02", titulo: "Definição do perfil", desc: "Nossa equipe apresenta os cursos disponíveis e ajuda a escolher o CBO mais adequado para a sua empresa." },
  { num: "03", titulo: "Seleção do aprendiz", desc: "Realizamos a triagem e encaminhamos candidatos alinhados ao perfil da vaga." },
  { num: "04", titulo: "Contrato de aprendizagem", desc: "Formalizamos o contrato com CTPS assinada, garantindo todos os direitos trabalhistas." },
  { num: "05", titulo: "Início das atividades", desc: "O aprendiz começa a formação teórica conosco e a prática na sua empresa simultaneamente." },
];

export default function ContrateUmAprendiz() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "var(--color-azul-escuro)" }} className="py-16 px-4 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-2" style={{ backgroundColor: "var(--color-amarelo)" }} aria-hidden="true" />
        <div className="max-w-4xl mx-auto pl-6">
          <p className="font-display font-semibold text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "var(--color-amarelo)" }}>Para empresas parceiras</p>
          <h1 className="font-display font-black text-white leading-tight" style={{ fontSize: "clamp(36px, 6vw, 72px)" }}>
            Contrate um<br />
            <span style={{ color: "var(--color-amarelo)" }}>Aprendiz!</span>
          </h1>
          <p className="font-body text-white/70 mt-4 max-w-xl text-lg leading-relaxed">
            A contratação de aprendizes pode ser uma estratégia altamente benéfica para empresas que buscam desenvolver talentos, obter incentivos fiscais, renovar sua força de trabalho e cumprir responsabilidades sociais.
          </p>
        </div>
      </section>

      {/* Chamada principal */}
      <section style={{ backgroundColor: "var(--color-amarelo)" }} className="py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-display font-black" style={{ fontSize: "clamp(28px, 5vw, 56px)", color: "var(--color-azul-escuro)" }}>
            Torne-se um de nossos parceiros!
          </p>
          <p className="font-body mt-3 text-lg" style={{ color: "var(--color-azul)" }}>
            Uma prática que não só contribui para o sucesso organizacional, mas também para o desenvolvimento de uma sociedade mais inclusiva e próspera.
          </p>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display font-black mb-10" style={{ fontSize: "clamp(24px, 4vw, 40px)", color: "var(--color-azul-escuro)" }}>
            Por que contratar um aprendiz?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {beneficios.map((b) => (
              <div key={b} className="flex items-start gap-3 p-4 rounded-sm" style={{ backgroundColor: "var(--color-cinza-claro)" }}>
                <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: "var(--color-azul)" }} />
                <p className="font-body text-sm text-gray-700 leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section style={{ backgroundColor: "var(--color-cinza-claro)" }} className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display font-black mb-10" style={{ fontSize: "clamp(24px, 4vw, 40px)", color: "var(--color-azul-escuro)" }}>
            Como funciona a parceria?
          </h2>
          <div className="space-y-4">
            {etapas.map(({ num, titulo, desc }) => (
              <div key={num} className="flex gap-5 bg-white rounded-sm p-6 border-l-4" style={{ borderColor: "var(--color-amarelo)" }}>
                <p className="font-display font-black text-3xl shrink-0" style={{ color: "var(--color-amarelo)" }}>{num}</p>
                <div>
                  <p className="font-display font-bold text-base mb-1" style={{ color: "var(--color-azul-escuro)" }}>{titulo}</p>
                  <p className="font-body text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que a empresa precisa saber */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display font-black mb-6" style={{ fontSize: "clamp(22px, 3vw, 36px)", color: "var(--color-azul-escuro)" }}>
            O que a empresa precisa saber
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { tit: "Carga horária", desc: "Máximo de 6h diárias para aprendizes que ainda cursam o ensino médio, ou 8h para os que já concluíram." },
              { tit: "Salário", desc: "Equivalente ao salário mínimo hora, calculado sobre as horas trabalhadas na empresa." },
              { tit: "FGTS reduzido", desc: "A alíquota do FGTS para o aprendiz é de 2%, bem inferior aos 8% da contratação regular." },
            ].map(({ tit, desc }) => (
              <div key={tit} className="p-6 rounded-sm border-t-4" style={{ borderColor: "var(--color-azul)", backgroundColor: "var(--color-cinza-claro)" }}>
                <p className="font-display font-bold text-base mb-2" style={{ color: "var(--color-azul-escuro)" }}>{tit}</p>
                <p className="font-body text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-azul)" }} className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display font-black text-white mb-4" style={{ fontSize: "clamp(24px, 4vw, 48px)" }}>
            Pronto para fazer a diferença?
          </h2>
          <p className="font-body text-white/70 mb-8 text-lg">
            Entre em contato com a Legião Mirim de Bastos e saiba como abrir uma vaga de aprendiz na sua empresa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5514997384210?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20contratação%20de%20aprendizes."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 font-display font-bold text-lg rounded-sm transition-all hover:gap-3"
              style={{ backgroundColor: "#25D366", color: "white" }}
            >
              <Phone size={18} /> Falar pelo WhatsApp
            </a>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-8 py-4 font-display font-bold text-lg rounded-sm border border-white/30 text-white transition-all hover:bg-white/10"
            >
              Ver outras formas de contato <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
