"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const nav = [
  { href: "/", label: "Início" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/programa", label: "Programa" },
  { href: "/transparencia", label: "Transparência" },
  { href: "/galeria", label: "Galeria" },
  { href: "/contato", label: "Contato" },
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
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-3 py-1.5 text-sm font-body text-white/80 hover:text-white rounded transition-colors hover:bg-white/10"
            >
              {label}
            </Link>
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
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm font-body text-white border-b border-white/10"
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
