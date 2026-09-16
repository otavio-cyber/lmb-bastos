"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const nav = [
  { href: "/", label: "Início", destaque: false },
  { href: "/quem-somos", label: "Quem Somos", destaque: false },
  { href: "/programa", label: "Programa", destaque: false },
  { href: "/contrate-um-aprendiz", label: "Para Empresas", destaque: false },
  { href: "/transparencia", label: "Transparência", destaque: true },
  { href: "/galeria", label: "Galeria", destaque: true },
  { href: "/contato", label: "Contato", destaque: false },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header style={{ backgroundColor: "var(--color-azul-escuro)" }} className="sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">

        {/* Logo + nome */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/lmb-logo.png"
            alt="Logo Legião Mirim de Bastos"
            width={44}
            height={44}
            className="rounded-full"
            priority
          />
          <span className="font-display font-bold text-white text-lg leading-tight hidden sm:block">
            Legião Mirim<br />
            <span style={{ color: "var(--color-amarelo)" }}>de Bastos</span>
          </span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {nav.map(({ href, label, destaque }, i) => (
            <div key={href} className="flex items-center">
              {/* Divisor antes de Transparência */}
              {i === 4 && (
                <div className="w-px h-4 mx-2 bg-white/20" aria-hidden="true" />
              )}
              {/* Divisor depois de Galeria (antes de Contato) */}
              {i === 6 && (
                <div className="w-px h-4 mx-2 bg-white/20" aria-hidden="true" />
              )}
              <Link
                href={href}
                className="px-3 py-1.5 text-sm font-body rounded-sm transition-all hover:bg-white/10"
                style={destaque ? {
                  color: "var(--color-amarelo)",
                  fontWeight: 700,
                } : {
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                {label}
              </Link>
            </div>
          ))}
          <Link
            href="/admin"
            className="ml-2 px-3 py-1.5 text-xs font-body text-white/40 hover:text-white/70 transition-colors"
          >
            Admin
          </Link>
        </nav>

        {/* Hamburger mobile */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav style={{ backgroundColor: "var(--color-azul)" }} className="md:hidden px-4 pb-4 flex flex-col gap-1">
          {nav.map(({ href, label, destaque }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm font-body border-b border-white/10 flex items-center gap-2"
              style={destaque ? {
                color: "var(--color-amarelo)",
                fontWeight: 700,
              } : {
                color: "rgba(255,255,255,0.8)",
              }}
            >
              {destaque && (
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--color-amarelo)" }} />
              )}
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
