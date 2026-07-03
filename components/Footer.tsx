import { linkWhatsappGenerico } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-carvao text-osso mt-24">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">Pontual</p>
          <p className="text-osso/60 text-sm mt-2 italic font-display">
            Em todos os seus encontros, seja Pontual.
          </p>
        </div>

        <div className="text-sm text-osso/70 space-y-1">
          <p className="text-dourado uppercase tracking-wider2 text-xs mb-2">Loja matriz</p>
          <p>Rua Vigário Freire, 186</p>
          <p>Em frente ao Banco Itaú — Caruaru-PE</p>
        </div>

        <div className="text-sm text-osso/70 space-y-1">
          <p className="text-dourado uppercase tracking-wider2 text-xs mb-2">Filial</p>
          <p>Av. Rio Branco — Caruaru-PE</p>
          <a
            href={linkWhatsappGenerico()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-osso underline decoration-dourado underline-offset-4"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-osso/10 py-5 text-center text-xs text-osso/40">
        © {new Date().getFullYear()} Pontual Relógios e Acessórios. Caruaru-PE.
      </div>
    </footer>
  );
}
