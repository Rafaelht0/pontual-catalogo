import Link from "next/link";
import { linkWhatsappGenerico } from "@/lib/whatsapp";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-osso/90 backdrop-blur border-b border-carvao/10">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl tracking-wide text-carvao">
          Pontual
          <span className="block text-[0.6rem] font-sans tracking-wider2 text-aco uppercase -mt-1">
            Relógios &amp; Acessórios
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-sans text-sm uppercase tracking-wider2 text-carvao/80">
          <Link href="/catalogo" className="hover:text-dourado transition-colors">
            Catálogo
          </Link>
          <Link href="/catalogo?categoria=automatico" className="hover:text-dourado transition-colors">
            Automáticos
          </Link>
          <Link href="/revitalizacao" className="hover:text-dourado transition-colors">
            Revitalização
          </Link>
        </nav>

        <a
          href={linkWhatsappGenerico()}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-carvao text-osso text-xs uppercase tracking-wider2 px-5 py-2.5 hover:bg-dourado hover:text-carvao transition-colors"
        >
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
}
