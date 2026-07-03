"use client";

import { useState } from "react";
import Link from "next/link";
import { linkWhatsappGenerico } from "@/lib/whatsapp";

const links = [
  { href: "/catalogo", label: "Catálogo" },
  { href: "/catalogo?categoria=automatico", label: "Automáticos" },
  { href: "/revitalizacao", label: "Revitalização" },
];

export default function Header() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-osso/90 backdrop-blur border-b border-carvao/10">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl tracking-wide text-carvao" onClick={() => setAberto(false)}>
          Pontual
          <span className="block text-[0.6rem] font-sans tracking-wider2 text-aco uppercase -mt-1">
            Relógios &amp; Acessórios
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-sans text-sm uppercase tracking-wider2 text-carvao/80">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-dourado transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={linkWhatsappGenerico()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block rounded-full bg-carvao text-osso text-xs uppercase tracking-wider2 px-5 py-2.5 hover:bg-dourado hover:text-carvao transition-colors"
          >
            Falar no WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setAberto((v) => !v)}
            aria-expanded={aberto}
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            className="md:hidden flex flex-col justify-center gap-1.5 w-9 h-9 shrink-0"
          >
            <span
              className={`block h-px w-6 bg-carvao transition-transform ${aberto ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-carvao transition-transform ${aberto ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {aberto && (
        <nav className="md:hidden border-t border-carvao/10 bg-osso px-6 py-4 flex flex-col gap-4 font-sans text-sm uppercase tracking-wider2 text-carvao/80">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-dourado transition-colors"
              onClick={() => setAberto(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={linkWhatsappGenerico()}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden text-center rounded-full bg-carvao text-osso px-5 py-2.5 hover:bg-dourado hover:text-carvao transition-colors"
            onClick={() => setAberto(false)}
          >
            Falar no WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
