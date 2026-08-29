import Link from "next/link";
import { ArrowRight, Users, Building2, GraduationCap, Heart } from "lucide-react";

const numeros = [
  { valor: "22", label: "anos de história" },
  { valor: "13", label: "empresas parceiras" },
  { valor: "1.282h", label: "de formação por turma" },
  { valor: "15–24", label: "anos, sua faixa de impacto" },
];

const valores = [
  {
    icon: Heart,
    titulo: "Missão",
    texto: "Resgatar adolescentes em situação de vulnerabilidade social, fortalecendo relações familiares e comunitárias e garantindo a efetivação de seus direitos e da cidadania.",
  },
  {
    icon: GraduationCap,
    titulo: "Visão",
    texto: "Ser reconhecida pela excelência no serviço sócio-assistencial e educativo prestado à comunidade de Bastos e região.",
  },
  {
    icon: Users,
    titulo: "Valores",
    texto: "Valorização do ser humano, responsabilidade, comprometimento e ética como pilares de cada ação que realizamos.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden min-h-[88vh] flex items-center"
        style={{
          backgroundImage: "url('/lmb-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay azul escuro */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(13, 36, 96, 0.82)" }}
          aria-hidden="true"
        />

        {/* Número gigante de fundo — assinatura visual */}
        <span
          className="font-display font-black absolute top-1/2 -translate-y-1/2 select-none pointer-events-none leading-none"
          style={{
            fontSize: "clamp(180px, 28vw, 340px)",
            color: "rgba(255,255,255,0.04)",
            lineHeight: 1,
            right: "-2vw",
          }}
          aria-hidden="true"
        >
          22
        </span>

        {/* Faixa amarela vertical */}
        <div
          style={{ backgroundColor: "var(--color-amarelo)" }}
          className="absolute left-0 top-0 bottom-0 w-1.5"
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto px-6 py-20 sm:py-28">
          <p
            className="font-display font-semibold text-sm tracking-[0.2em] uppercase mb-4 fade-up"
            style={{ color: "var(--color-amarelo)" }}
          >
            Bastos/SP · Desde 2002
          </p>

          <h1
            className="font-display font-black text-white leading-[0.92] mb-6 fade-up fade-up-delay-1"
            style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
          >
            Transformando<br />
            <span style={{ color: "var(--color-amarelo)" }}>jovens,</span><br />
            construindo<br />
            futuros.
          </h1>

          <p className="font-body text-white/70 text-lg max-w-xl mb-10 leading-relaxed fade-up fade-up-delay-2">
            A Legião Mirim de Bastos prepara adolescentes e jovens de 15 a 24 anos para o mercado de trabalho por meio do Programa de Aprendizagem Profissional.
          </p>

          <div className="flex flex-wrap gap-3 fade-up fade-up-delay-3">
            <Link
              href="/programa"
              className="inline-flex items-center gap-2 px-6 py-3 font-display font-bold text-base rounded-sm transition-all hover:gap-3"
              style={{ backgroundColor: "var(--color-amarelo)", color: "var(--color-azul-escuro)" }}
            >
              Conheça o Programa <ArrowRight size={16} />
            </Link>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-6 py-3 font-display font-bold text-base rounded-sm border border-white/30 text-white transition-all hover:bg-white/10"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>

      {/* ── NÚMEROS ── */}
      <section style={{ backgroundColor: "var(--color-amarelo)" }}>
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {numeros.map(({ valor, label }) => (
            <div key={label} className="text-center">
              <p
                className="font-display font-black leading-none"
                style={{ fontSize: "clamp(32px, 5vw, 52px)", color: "var(--color-azul-escuro)" }}
              >
                {valor}
              </p>
              <p className="font-body text-sm mt-1" style={{ color: "var(--color-azul)" }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MISSÃO / VISÃO / VALORES ── */}
      <section style={{ backgroundColor: "var(--color-cinza-claro)" }} className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <p
            className="font-display font-bold text-xs tracking-[0.2em] uppercase mb-2"
            style={{ color: "var(--color-amarelo-claro)", backgroundColor: "var(--color-azul)", display: "inline-block", padding: "2px 10px" }}
          >
            Nossa identidade
          </p>
          <h2
            className="font-display font-black mt-3 mb-12"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "var(--color-azul-escuro)" }}
          >
            O que nos move
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valores.map(({ icon: Icon, titulo, texto }) => (
              <div
                key={titulo}
                className="bg-white rounded-sm p-8 border-t-4"
                style={{ borderColor: "var(--color-azul)" }}
              >
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center mb-4"
                  style={{ backgroundColor: "var(--color-amarelo)" }}
                >
                  <Icon size={20} style={{ color: "var(--color-azul-escuro)" }} />
                </div>
                <h3
                  className="font-display font-bold text-xl mb-3"
                  style={{ color: "var(--color-azul-escuro)" }}
                >
                  {titulo}
                </h3>
                <p className="font-body text-sm leading-relaxed text-gray-600">{texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENSAGEM DA PRESIDENTE ── */}
      <section style={{ backgroundColor: "var(--color-azul)" }} className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span
            className="font-display font-black text-8xl block leading-none mb-6 opacity-20 text-white select-none"
            aria-hidden="true"
          >
            "
          </span>
          <blockquote
            className="font-display font-semibold text-white leading-snug mb-8"
            style={{ fontSize: "clamp(20px, 3vw, 32px)" }}
          >
            Há mais de 22 anos, a Legião Mirim de Bastos abre portas para jovens que precisam de uma chance. Nossa missão vai além de ensinar uma profissão — acreditamos que cada adolescente que passa por aqui leva consigo valores, confiança e um futuro mais digno.
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-px" style={{ backgroundColor: "var(--color-amarelo)" }} />
            <p className="font-body text-sm" style={{ color: "var(--color-amarelo)" }}>
              Magda Vieira dos Santos — Presidente
            </p>
            <div className="w-10 h-px" style={{ backgroundColor: "var(--color-amarelo)" }} />
          </div>
        </div>
      </section>

      {/* ── O QUE DESENVOLVEMOS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="font-display font-bold text-xs tracking-[0.2em] uppercase mb-2"
              style={{ color: "var(--color-azul)", display: "inline-block" }}
            >
              Programa de Aprendizagem
            </p>
            <h2
              className="font-display font-black mt-2 mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "var(--color-azul-escuro)" }}
            >
              Do primeiro emprego<br />à carreira.
            </h2>
            <p className="font-body text-gray-600 leading-relaxed mb-4">
              O Programa de Aprendizagem Profissional da Legião Mirim capacita adolescentes e jovens com formação teórica e prática nas empresas parceiras, conforme as diretrizes do Ministério do Trabalho e Emprego.
            </p>
            <p className="font-body text-gray-600 leading-relaxed mb-8">
              São 1.282 horas de formação, carteira assinada, direitos trabalhistas garantidos e a experiência real que abre portas.
            </p>
            <Link
              href="/programa"
              className="inline-flex items-center gap-2 px-6 py-3 font-display font-bold text-base rounded-sm transition-all hover:gap-3"
              style={{ backgroundColor: "var(--color-azul)", color: "white" }}
            >
              Ver o programa completo <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: GraduationCap, tit: "Formação teórica", sub: "402 horas em sala de aula" },
              { icon: Building2, tit: "Prática na empresa", sub: "880 horas com CTPS assinada" },
              { icon: Users, tit: "13 cursos/CBO", sub: "Assistente, Almoxarife e mais" },
              { icon: Heart, tit: "Inclusão social", sub: "Cidadania e valores éticos" },
            ].map(({ icon: Icon, tit, sub }) => (
              <div
                key={tit}
                className="p-5 rounded-sm border"
                style={{ borderColor: "var(--color-cinza-claro)", backgroundColor: "var(--color-cinza-claro)" }}
              >
                <Icon size={22} className="mb-3" style={{ color: "var(--color-azul)" }} />
                <p className="font-display font-bold text-sm mb-1" style={{ color: "var(--color-azul-escuro)" }}>{tit}</p>
                <p className="font-body text-xs text-gray-500">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{ backgroundColor: "var(--color-amarelo)" }} className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2
            className="font-display font-black mb-4"
            style={{ fontSize: "clamp(28px, 5vw, 56px)", color: "var(--color-azul-escuro)" }}
          >
            Seu primeiro passo começa aqui.
          </h2>
          <p
            className="font-body mb-8 text-lg"
            style={{ color: "var(--color-azul)" }}
          >
            Tem entre 15 e 24 anos? Venha conhecer o programa e garantir sua vaga.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 px-8 py-4 font-display font-bold text-lg rounded-sm transition-all hover:gap-3"
            style={{ backgroundColor: "var(--color-azul-escuro)", color: "white" }}
          >
            Entre em contato <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}