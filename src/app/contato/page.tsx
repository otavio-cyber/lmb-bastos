import type { Metadata } from "next";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

export const metadata: Metadata = { title: "Contato | Legião Mirim de Bastos" };

export default function Contato() {
  return (
    <>
      <section style={{ backgroundColor: "var(--color-azul-escuro)" }} className="py-16 px-4 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-2" style={{ backgroundColor: "var(--color-amarelo)" }} aria-hidden="true" />
        <div className="max-w-4xl mx-auto">
          <p className="font-display font-semibold text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "var(--color-amarelo)" }}>Fale com a gente</p>
          <h1 className="font-display font-black text-white leading-tight" style={{ fontSize: "clamp(36px, 6vw, 72px)" }}>Contato</h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12">

          <div className="space-y-8">
            <div>
              <h2 className="font-display font-black text-2xl mb-6" style={{ color: "var(--color-azul-escuro)" }}>Onde estamos</h2>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "var(--color-amarelo)" }}>
                    <MapPin size={16} style={{ color: "var(--color-azul-escuro)" }} />
                  </div>
                  <div>
                    <p className="font-body text-xs text-gray-400 uppercase tracking-wide mb-1">Endereço</p>
                    <p className="font-body text-sm text-gray-700">Rua Yoshiharu Haru, 85<br />Jardim Pitangueiras — Bastos/SP<br />CEP 17.694-414</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--color-amarelo)" }}>
                    <Phone size={16} style={{ color: "var(--color-azul-escuro)" }} />
                  </div>
                  <div>
                    <p className="font-body text-xs text-gray-400 uppercase tracking-wide mb-1">Telefone</p>
                    <a href="tel:14997384210" className="font-body text-sm text-gray-700 hover:underline">(14) 99738-4210</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--color-amarelo)" }}>
                    <Mail size={16} style={{ color: "var(--color-azul-escuro)" }} />
                  </div>
                  <div>
                    <p className="font-body text-xs text-gray-400 uppercase tracking-wide mb-1">E-mail</p>
                    <a href="mailto:legiaomirimdebastos@gmail.com" className="font-body text-sm text-gray-700 hover:underline block">legiaomirimdebastos@gmail.com</a>
                    <a href="mailto:legiaomirimadm@gmail.com" className="font-body text-sm text-gray-700 hover:underline block">legiaomirimadm@gmail.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--color-amarelo)" }}>
                    <ExternalLink size={16} style={{ color: "var(--color-azul-escuro)" }} />
                  </div>
                  <div>
                    <p className="font-body text-xs text-gray-400 uppercase tracking-wide mb-1">Instagram</p>
                    <a href="https://instagram.com/legiaomirimdebastos" target="_blank" rel="noreferrer" className="font-body text-sm text-gray-700 hover:underline">@legiaomirimdebastos</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Mapa embed */}
          <div className="rounded-sm overflow-hidden border border-gray-100 min-h-72">
            <iframe
              title="Localização Legião Mirim de Bastos"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.0!2d-50.7320!3d-21.7240!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQzJzI2LjQiUyA1MMKwNDMnNTUuMiJX!5e0!3m2!1spt!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>

      {/* Horário */}
      <section style={{ backgroundColor: "var(--color-cinza-claro)" }} className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display font-black text-xl mb-6" style={{ color: "var(--color-azul-escuro)" }}>Horário de funcionamento</h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-md">
            {[
              { dia: "Segunda a Sexta", hora: "08h00 às 17h00" },
              { dia: "Sábado e Domingo", hora: "Fechado" },
            ].map(({ dia, hora }) => (
              <div key={dia} className="bg-white rounded-sm p-4">
                <p className="font-body text-xs text-gray-400 mb-1">{dia}</p>
                <p className="font-display font-bold text-base" style={{ color: "var(--color-azul-escuro)" }}>{hora}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
