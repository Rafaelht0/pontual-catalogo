# Pontual — Catálogo

Boilerplate do catálogo online da Pontual Relógios e Acessórios (Caruaru-PE).
Next.js 14 (App Router) + TypeScript + Tailwind. Sem backend — todo o
"pedido" acontece via WhatsApp (`wa.me`).

## Rodando localmente

```bash
npm install
cp .env.example .env.local   # coloque o número real do WhatsApp
npm run dev
```

## O que já está pronto

- `app/page.tsx` — Home com hero, categorias e lançamentos
- `app/catalogo/page.tsx` — Catálogo com filtro por categoria, marca e busca (tudo client-side)
- `app/catalogo/[slug]/page.tsx` — Página de produto com ficha técnica e CTA de WhatsApp
- `app/revitalizacao/page.tsx` — Página do serviço de assistência técnica
- `data/products.ts` — **é aqui que você cadastra o catálogo real**, sem precisar de banco de dados
- `lib/whatsapp.ts` — monta o link `wa.me` com a mensagem já preenchida com o nome do produto

## Antes de publicar

1. **Fotos reais**: colocar em `/public/produtos/` e apontar em `imagens: []` de cada produto em `data/products.ts`. Hoje os caminhos são placeholders.
2. **Número do WhatsApp**: preencher `NEXT_PUBLIC_WHATSAPP_NUMERO` no `.env.local` com o número real (ex: `5581999999999`).
3. **Preço**: se não quiser mostrar valor de algum modelo, é só remover o campo `preco` do produto — o card mostra "Sob consulta" automaticamente.
4. **Logo**: hoje o header usa o nome em texto (`Pontual`). Se quiser o ícone/símbolo da marca, salve o SVG/PNG em `/public/logo.svg` e troque no `components/Header.tsx`.

## Deploy

Mesmo fluxo do projeto da joalheria: `vercel --prod` ou conectar o repo do
GitHub direto no dashboard da Vercel. Free tier resolve.

## Adicionando um produto novo

```ts
{
  slug: "novo-modelo",
  nome: "Nome do Relógio",
  marca: "Orient",
  categoria: "masculino", // "automatico" | "feminino" | "masculino" | "digital"
  preco: 999, // ou remova para "Sob consulta"
  imagens: ["/produtos/novo-modelo-1.jpg"],
  descricao: "...",
  ficha: { mecanismo: "Quartzo", caixa: "Aço, 38mm", pulseira: "Aço", resistenciaAgua: "5 ATM" },
}
```
