import { Suspense } from "react";
import Image from "next/image";
import CatalogGrid from "@/components/CatalogGrid";

export const metadata = {
  title: "Catálogo | Pontual Relógios e Acessórios",
};

export default function CatalogoPage() {
  return (
    <>
      <section className="relative bg-carvao text-osso overflow-hidden h-[360px] md:h-[440px]">
        <Image
          src="/banners/catalogo-mobile.png"
          alt=""
          fill
          priority
          className="object-cover object-[78%_center] md:hidden"
        />
        <Image
          src="/banners/catalogo-desktop.png"
          alt=""
          fill
          priority
          className="hidden md:block object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-carvao via-carvao/60 to-transparent" />
        <div className="relative z-10 h-full mx-auto max-w-6xl px-6 flex flex-col justify-center [text-shadow:0_2px_8px_rgba(0,0,0,0.65)]">
          <p className="text-dourado text-xs uppercase tracking-wider2 mb-4">
            Caruaru-PE · Loja e assistência de relógios
          </p>
          <h1 className="font-display text-4xl md:text-5xl max-w-md">Catálogo</h1>
          <p className="mt-4 max-w-[220px] md:max-w-sm text-osso/80">
            Automáticos, femininos, masculinos e digitais.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <Suspense fallback={<p>Carregando...</p>}>
          <CatalogGrid />
        </Suspense>
      </section>
    </>
  );
}
