import Link from "next/link";
import { ExternalLink, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-azul-escuro)" }} className="text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-3 gap-10">

        {/* Marca */}
        <div>
          <p className="font-display font-bold text-xl mb-1">Legião Mirim de Bastos</p>
          <p style={{ color: "var(--color-amarelo)" }} className="font-display text-sm font-semibold mb-3">
            CNPJ 05.298.119/0001-06 · Desde 2002
          </p>
          <p className="text-sm text-white/60 leading-relaxed">
            Associação de caráter assistencial, educacional e filantrópico.<br />
            Mantenedor: Lions Clube de Bastos Solidariedade.
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="font-display font-semibold text-base mb-3 text-white/80 uppercase tracking-wide text-sm">Navegação</p>
          <ul className="space-y-1.5 text-sm text-white/60">
            {[
              ["/", "Início"],
              ["/quem-somos", "Quem Somos"],
              ["/programa", "Programa de Aprendizagem"],
              ["/transparencia", "Transparência"],
              ["/galeria", "Galeria"],
              ["/contato", "Contato"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="hover:text-white transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div>
          <p className="font-display font-semibold text-base mb-3 text-white/80 uppercase tracking-wide text-sm">Contato</p>
          <ul className="space-y-2.5 text-sm text-white/60">
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0 text-white/40" />
              Rua Yoshiharu Haru, 85 – Jd. Pitangueiras<br />Bastos/SP – CEP 17.694-414
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} className="shrink-0 text-white/40" />
              <a href="tel:14997384210" className="hover:text-white transition-colors">(14) 99738-4210</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="shrink-0 text-white/40" />
              <a href="mailto:legiaomirimdebastos@gmail.com" className="hover:text-white transition-colors">legiaomirimdebastos@gmail.com</a>
            </li>
            <li className="flex items-center gap-2">
              <ExternalLink size={14} className="shrink-0 text-white/40" />
              <a href="https://instagram.com/legiaomirimdebastos" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">@legiaomirimdebastos</a>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ borderColor: "var(--color-azul)" }} className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/30">
          <span>© {new Date().getFullYear()} Legião Mirim de Bastos. Todos os direitos reservados.</span>
          <span>Desenvolvido por <span className="text-white/50 font-medium">DUO Comunicação e Marketing</span></span>
        </div>
      </div>
    </footer>
  );
}
