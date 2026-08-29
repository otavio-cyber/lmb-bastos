import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = { title: "Programa de Aprendizagem | Legião Mirim de Bastos" };

const cursos = [
  { cbo: "411010", titulo: "Assistente Administrativo", modulos: ["Princípios de Administração","Faturamento Financeiro","Recursos Humanos","Processos Administrativos","Fundamentos de Marketing","Gestão de Arquivos Virtuais","Fundamentos de Logística"] },
  { cbo: "414105", titulo: "Almoxarife", modulos: ["Fundamentos de Administração","Administração de Materiais","Manuseio de Planilhas Eletrônicas","Leiaute de Almoxarifado","Recebimento de Materiais","Gestão de Almoxarifado","Qualidade, Segurança e Saúde"] },
  { cbo: "521125", titulo: "Repositor de Mercadorias", modulos: ["Introdução","Habilidades Necessárias","Processo de Reposição","Organização e Estocagem","Segurança no Manuseio","Higiene e Saúde","Atendimento ao Cliente","Desenvolvimento Profissional"] },
  { cbo: "784105", titulo: "Embalador à Mão", modulos: ["Introdução","Noções Básicas","Tipos de Produção","Profissionalização","Biosseguridade","Histórico do Setor","Práticas em Granja"] },
];

const beneficiosAprendiz = [
  "Carteira de trabalho assinada (CTPS)",
  "Garantia dos direitos trabalhistas",
  "Conquista do primeiro emprego",
  "Formação profissional teórica e prática",
  "Experiência real no mercado",
  "Conquista da própria renda",
];

const beneficiosEmpresa = [
  "Mão de obra qualificada conforme necessidade da empresa",
  "Cumprimento da cota legal de aprendizes (ECA, 1990)",
  "Redução de tributos sobre a folha do aprendiz",
  "Formação de profissional alinhado à cultura da empresa",
  "Responsabilidade social e ESG",
];

export default function Programa() {
  return (
    <>
      <section style={{ backgroundColor: "var(--color-azul-escuro)" }} className="py-16 px-4 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-2" style={{ backgroundColor: "var(--color-amarelo)" }} aria-hidden="true" />
        <div className="max-w-4xl mx-auto pl-6">
          <p className="font-display font-semibold text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "var(--color-amarelo)" }}>Inclusão profissional</p>
          <h1 className="font-display font-black text-white leading-tight" style={{ fontSize: "clamp(36px, 6vw, 72px)" }}>
            Programa de<br />Aprendizagem
          </h1>
        </div>
      </section>

      {/* O que é */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display font-black mb-6" style={{ fontSize: "clamp(24px, 4vw, 40px)", color: "var(--color-azul-escuro)" }}>O que desenvolvemos</h2>
          <div className="grid md:grid-cols-2 gap-8 font-body text-gray-600 leading-relaxed">
            <p>O Programa de Aprendizagem Profissional da Legião Mirim é voltado à inclusão, desenvolvimento pessoal e profissional de adolescentes e jovens. Tem como objetivo capacitá-los com as ferramentas necessárias para ingressar no mercado de trabalho de forma adequada e responsável.</p>
            <p>O programa visa desenvolver habilidades práticas e teóricas, promovendo a inclusão social e a cidadania, incentivando valores éticos que permitam aos participantes contribuir positivamente para a sociedade e para as empresas onde atuam.</p>
          </div>

          {/* Carga horária */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: "402h", label: "Formação teórica", desc: "Realizada na Legião Mirim de Bastos, de seg. a sex." },
              { val: "880h", label: "Prática na empresa", desc: "4h diárias na empresa parceira, durante 11 meses" },
              { val: "1.282h", label: "Total de formação", desc: "Carga horária completa por contrato de aprendizagem" },
            ].map(({ val, label, desc }) => (
              <div key={val} className="rounded-sm p-6 text-center" style={{ backgroundColor: "var(--color-azul)", color: "white" }}>
                <p className="font-display font-black text-5xl mb-1" style={{ color: "var(--color-amarelo)" }}>{val}</p>
                <p className="font-display font-bold text-base mb-2">{label}</p>
                <p className="font-body text-xs text-white/60">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cursos */}
      <section style={{ backgroundColor: "var(--color-cinza-claro)" }} className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display font-black mb-10" style={{ fontSize: "clamp(24px, 4vw, 40px)", color: "var(--color-azul-escuro)" }}>Cursos oferecidos</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {cursos.map(({ cbo, titulo, modulos }) => (
              <div key={cbo} className="bg-white rounded-sm p-6 border-t-4" style={{ borderColor: "var(--color-azul)" }}>
                <p className="font-body text-xs text-gray-400 mb-1">CBO {cbo}</p>
                <h3 className="font-display font-black text-xl mb-4" style={{ color: "var(--color-azul-escuro)" }}>{titulo}</h3>
                <ul className="space-y-1.5">
                  {modulos.map(m => (
                    <li key={m} className="flex items-center gap-2 font-body text-sm text-gray-600">
                      <CheckCircle size={14} style={{ color: "var(--color-azul)", flexShrink: 0 }} />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display font-black mb-6" style={{ fontSize: "clamp(22px, 3vw, 36px)", color: "var(--color-azul-escuro)" }}>Benefícios para o aprendiz</h2>
            <ul className="space-y-3">
              {beneficiosAprendiz.map(b => (
                <li key={b} className="flex items-start gap-3 font-body text-sm text-gray-600">
                  <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: "var(--color-amarelo)" }} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display font-black mb-6" style={{ fontSize: "clamp(22px, 3vw, 36px)", color: "var(--color-azul-escuro)" }}>Por que contratar um aprendiz?</h2>
            <ul className="space-y-3">
              {beneficiosEmpresa.map(b => (
                <li key={b} className="flex items-start gap-3 font-body text-sm text-gray-600">
                  <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: "var(--color-azul)" }} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Inscrição CTA */}
      <section style={{ backgroundColor: "var(--color-amarelo)" }} className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display font-black mb-4" style={{ fontSize: "clamp(24px, 4vw, 48px)", color: "var(--color-azul-escuro)" }}>
            Tem entre 15 e 24 anos?
          </h2>
          <p className="font-body text-base mb-8" style={{ color: "var(--color-azul)" }}>
            Elabore um currículo com foto e dados atualizados e encaminhe até a Legião Mirim de Bastos. Nossa equipe entrará em contato.
          </p>
          <Link href="/contato" className="inline-flex items-center gap-2 px-8 py-4 font-display font-bold text-lg rounded-sm hover:gap-3 transition-all" style={{ backgroundColor: "var(--color-azul-escuro)", color: "white" }}>
            Quero me inscrever <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
