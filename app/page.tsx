import Link from "next/link";
import Image from "next/image";
import { produtos, categorias } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SweepDivider from "@/components/SweepDivider";

export default function HomePage() {
  const destaques = produtos.filter((p) => p.destaque);

  return (
    <>
      {/* Hero — macro escuro, no espírito das fotos de lançamento da Pontual */}
      <section className="relative bg-carvao text-osso overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36 relative z-10">
          <p className="text-dourado text-xs uppercase tracking-wider2 mb-6">
            Caruaru-PE · Loja e assistência de relógios
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] max-w-2xl">
            Em todos os seus encontros, seja Pontual.
          </h1>
          <p className="mt-6 max-w-md text-osso/70 font-sans">
            Relógios automáticos, femininos, masculinos e digitais. Peças que
            atravessam o tempo — e ficam na memória.
          </p>
          <Link
            href="/catalogo"
            className="inline-block mt-10 border border-dourado text-dourado px-8 py-3 text-xs uppercase tracking-wider2 hover:bg-dourado hover:text-carvao transition-colors"
          >
            Ver catálogo completo
          </Link>
        </div>
        {/* textura sutil de mostrador ao fundo */}
        <div
          aria-hidden
          className="absolute -right-24 top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-dourado/10"
        />
        <div
          aria-hidden
          className="absolute -right-24 top-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-dourado/20"
        />
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
          <div className="aspect-video bg-carvao rounded-sm border border-dourado/20" />
        </div>
      </section>
    </>
  );
}
