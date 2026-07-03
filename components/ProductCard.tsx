import Link from "next/link";
import Image from "next/image";
import { Produto } from "@/data/products";
import { linkWhatsappProduto } from "@/lib/whatsapp";

function formatarPreco(preco?: number) {
  if (!preco) return "Sob consulta";
  return preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function ProductCard({ produto }: { produto: Produto }) {
  return (
    <div className="group border border-carvao/10 hover:border-dourado transition-colors bg-white">
      <Link href={`/catalogo/${produto.slug}`} className="block">
        <div className="relative aspect-square bg-carvao/5 overflow-hidden">
          <Image
            src={produto.imagens[0]}
            alt={produto.nome}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>

      <div className="p-4">
        <p className="text-[0.65rem] uppercase tracking-wider2 text-aco">{produto.marca}</p>
        <Link href={`/catalogo/${produto.slug}`}>
          <h3 className="font-display text-xl mt-1 leading-snug hover:text-dourado transition-colors">
            {produto.nome}
          </h3>
        </Link>
        <p className="font-mono text-sm mt-2 text-carvao/80">{formatarPreco(produto.preco)}</p>

        <a
          href={linkWhatsappProduto(produto)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block text-center text-xs uppercase tracking-wider2 border border-carvao py-2.5 hover:bg-dourado hover:border-dourado hover:text-carvao transition-colors"
        >
          Consultar no WhatsApp
        </a>
      </div>
    </div>
  );
}
