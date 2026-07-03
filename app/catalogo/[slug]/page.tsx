import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { produtos } from "@/data/products";
import { linkWhatsappProduto } from "@/lib/whatsapp";

export function generateStaticParams() {
  return produtos.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const produto = produtos.find((p) => p.slug === params.slug);
  if (!produto) return {};
  return {
    title: `${produto.nome} | Pontual`,
    description: produto.descricao,
    openGraph: { images: produto.imagens },
  };
}

function formatarPreco(preco?: number) {
  if (!preco) return "Sob consulta";
  return preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function ProdutoPage({ params }: { params: { slug: string } }) {
  const produto = produtos.find((p) => p.slug === params.slug);
  if (!produto) notFound();

  const ficha = Object.entries(produto.ficha).filter(([, v]) => v);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Link href="/catalogo" className="text-xs uppercase tracking-wider2 text-aco hover:text-dourado">
        ← Voltar ao catálogo
      </Link>

      <div className="grid md:grid-cols-2 gap-12 mt-8">
        <div className="relative aspect-square bg-carvao/5">
          <Image src={produto.imagens[0]} alt={produto.nome} fill className="object-cover" />
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider2 text-aco">{produto.marca}</p>
          <h1 className="font-display text-4xl mt-2">{produto.nome}</h1>
          <p className="font-mono text-xl mt-4 text-carvao/80">{formatarPreco(produto.preco)}</p>

          <p className="mt-6 text-carvao/70 leading-relaxed">{produto.descricao}</p>

          {ficha.length > 0 && (
            <dl className="mt-8 border-t border-carvao/10 divide-y divide-carvao/10 font-mono text-sm">
              {ficha.map(([chave, valor]) => (
                <div key={chave} className="flex justify-between py-3">
                  <dt className="capitalize text-aco">{chave}</dt>
                  <dd>{valor}</dd>
                </div>
              ))}
            </dl>
          )}

          <a
            href={linkWhatsappProduto(produto)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 block text-center bg-carvao text-osso py-4 text-xs uppercase tracking-wider2 hover:bg-dourado hover:text-carvao transition-colors"
          >
            Consultar este modelo no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
