import { Suspense } from "react";
import CatalogGrid from "@/components/CatalogGrid";

export const metadata = {
  title: "Catálogo | Pontual Relógios e Acessórios",
};

export default function CatalogoPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-4xl mb-2">Catálogo</h1>
      <p className="text-carvao/60 mb-10">Automáticos, femininos, masculinos e digitais.</p>
      <Suspense fallback={<p>Carregando...</p>}>
        <CatalogGrid />
      </Suspense>
    </section>
  );
}
