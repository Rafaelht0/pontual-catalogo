"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { produtos, categorias, marcas, Categoria } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function CatalogGrid() {
  const searchParams = useSearchParams();
  const categoriaInicial = searchParams.get("categoria") as Categoria | null;

  const [categoria, setCategoria] = useState<Categoria | "todas">(categoriaInicial ?? "todas");
  const [marca, setMarca] = useState<string>("todas");
  const [busca, setBusca] = useState("");

  const filtrados = useMemo(() => {
    return produtos.filter((p) => {
      if (categoria !== "todas" && p.categoria !== categoria) return false;
      if (marca !== "todas" && p.marca !== marca) return false;
      if (busca && !p.nome.toLowerCase().includes(busca.toLowerCase())) return false;
      return true;
    });
  }, [categoria, marca, busca]);

  return (
    <div>
      {/* Filtros */}
      <div className="flex flex-wrap gap-3 mb-10 items-center">
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value as Categoria | "todas")}
          className="border border-carvao/20 bg-white px-4 py-2 text-sm uppercase tracking-wide"
        >
          <option value="todas">Todas as categorias</option>
          {categorias.map((c) => (
            <option key={c.valor} value={c.valor}>
              {c.label}
            </option>
          ))}
        </select>

        <select
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
          className="border border-carvao/20 bg-white px-4 py-2 text-sm uppercase tracking-wide"
        >
          <option value="todas">Todas as marcas</option>
          {marcas.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Buscar modelo..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="border border-carvao/20 bg-white px-4 py-2 text-sm flex-1 min-w-[180px]"
        />
      </div>

      {filtrados.length === 0 ? (
        <p className="text-carvao/60 py-16 text-center">
          Nenhum modelo encontrado com esses filtros. Fale com a gente no WhatsApp — talvez
          tenhamos em estoque na loja.
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {filtrados.map((produto) => (
            <ProductCard key={produto.slug} produto={produto} />
          ))}
        </div>
      )}
    </div>
  );
}
