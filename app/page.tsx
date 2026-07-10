import Link from "next/link";
import Image from "next/image";
import { produtos, categorias } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SweepDivider from "@/components/SweepDivider";

export default function HomePage() {
  const destaques = produtos.filter((p) => p.destaque);

  return (
    <>
      {/* Hero — fotos reais dos relógios, crop dedicado pra desktop e mobile */}
      <section className="relative bg-carvao text-osso overflow-hidden min-h-[560px] md:min-h-[640px]">
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
        <div className="relative z-10 h-full mx-auto max-w-6xl px-6 py-28 md:py-36 flex flex-col justify-center [text-shadow:0_2px_8px_rgba(0,0,0,0.65)]">
          <p className="text-dourado text-xs uppercase tracking-wider2 mb-6">
            Caruaru-PE · Loja e assistência de relógios
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] max-w-2xl">
            Em todos os seus encontros, seja Pontual.
          </h1>
          <p className="mt-6 max-w-[260px] md:max-w-md text-osso/80 font-sans">
            Relógios automáticos, femininos, masculinos e digitais. Peças que
            atravessam o tempo — e ficam na memória.
          </p>
          <Link
            href="/catalogo"
            className="inline-block mt-10 border border-dourado text-dourado px-8 py-3 text-xs uppercase tracking-wider2 hover:bg-dourado hover:text-carvao transition-colors w-fit"
          >
            Ver catálogo completo
          </Link>
        </div>
      </section>

      {/* Categorias — espelham os destaques reais do Instagram */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-2xl mb-8">Categorias</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categorias.map((c) => (
            <Link
              key={c.valor}
              href={`/catalogo?categoria=${c.valor}`}
              className="border border-carvao/10 hover:border-dourado py-8 text-center uppercase text-xs tracking-wider2 transition-colors"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <SweepDivider />
      </div>

      {/* Destaques */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-2xl mb-8">Lançamentos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {destaques.map((produto) => (
            <ProductCard key={produto.slug} produto={produto} />
          ))}
        </div>
      </section>

      {/* Revitalização — serviço real da loja */}
      <section className="bg-carvao-suave text-osso">
        <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-dourado text-xs uppercase tracking-wider2 mb-4">Assistência técnica</p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              Seu relógio de sempre, com o brilho de novo.
            </h2>
            <p className="mt-4 text-osso/70">
              Troca de bateria, pulseiras, vidros e revitalização completa.
              Nossa equipe cuida da peça que já faz parte da sua história.
            </p>
            <Link
              href="/revitalizacao"
              className="inline-block mt-8 border border-dourado text-dourado px-6 py-3 text-xs uppercase tracking-wider2 hover:bg-dourado hover:text-carvao transition-colors"
            >
              Saiba como funciona
            </Link>
          </div>
          <div className="relative aspect-[4/5] md:aspect-square rounded-sm border border-dourado/20 overflow-hidden">
            <Image
              src="/servicos/revitalizacao-1.png"
              alt="Processo de revitalização de relógio: antes, durante e depois"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
