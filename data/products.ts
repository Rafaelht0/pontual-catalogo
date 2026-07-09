export type Categoria = "automatico" | "feminino" | "masculino" | "digital";

export type Produto = {
  slug: string;
  nome: string;
  marca: string;
  categoria: Categoria;
  preco?: number; // deixe undefined para exibir "Sob consulta"
  imagens: string[]; // caminhos em /public/produtos/...
  descricao: string;
  ficha: {
    mecanismo?: string;
    caixa?: string;
    pulseira?: string;
    resistenciaAgua?: string;
  };
  destaque?: boolean;
};

// Dados de exemplo com base nos lançamentos reais do Instagram da Pontual.
// Troque as imagens em /public/produtos e ajuste conforme o estoque real.
export const produtos: Produto[] = [
  {
    slug: "orient-automatic-special-calibers",
    nome: "Orient Automatic Special Calibers",
    marca: "Orient",
    categoria: "automatico",
    preco: 1899,
    imagens: ["/produtos/orient-special-calibers-1.png"],
    descricao:
      "Mostrador em algarismos romanos, pulseira em couro legítimo e movimento automático à vista nos ponteiros. Tradição da relojoaria com elegância atemporal.",
    ficha: {
      mecanismo: "Automático",
      caixa: "Aço, 40mm",
      pulseira: "Couro legítimo",
      resistenciaAgua: "5 ATM",
    },
    destaque: true,
  },
  {
    slug: "orient-automatic-prata",
    nome: "Orient Automatic Prateado",
    marca: "Orient",
    categoria: "automatico",
    preco: 1699,
    imagens: ["/produtos/orient-prata-1.jpg"],
    descricao:
      "Mostrador limpo em prata, numerais romanos e pulseira em couro. Uma peça clássica pensada para durar gerações.",
    ficha: {
      mecanismo: "Automático",
      caixa: "Aço, 40mm",
      pulseira: "Couro legítimo",
      resistenciaAgua: "5 ATM",
    },
  },
  {
    slug: "orient-solartech",
    nome: "Orient SolarTech",
    marca: "Orient",
    categoria: "masculino",
    preco: 1299,
    imagens: ["/produtos/orient-solartech-1.png"],
    descricao:
      "Tecnologia solar: sem preocupação com troca de bateria, com visual que impressiona em qualquer ocasião. Disponível em preto e azul.",
    ficha: {
      mecanismo: "Solar (quartzo)",
      caixa: "Aço inoxidável",
      pulseira: "Aço inoxidável",
      resistenciaAgua: "10 ATM",
    },
    destaque: true,
  },
  {
    slug: "champion-dourado-cristais",
    nome: "Champion Dourado com Cristais",
    marca: "Champion",
    categoria: "feminino",
    preco: 899,
    imagens: ["/produtos/champion-dourado-1.png"],
    descricao:
      "O presente perfeito: caixa dourada cravejada, mostrador madrepérola. Peça que marca os momentos que importam.",
    ficha: {
      mecanismo: "Quartzo",
      caixa: "Aço dourado, cravejada",
      pulseira: "Aço dourado",
      resistenciaAgua: "3 ATM",
    },
    destaque: true,
  },
  {
    slug: "orient-feminino-rose",
    nome: "Orient Feminino Rosé",
    marca: "Orient",
    categoria: "feminino",
    preco: 799,
    imagens: ["/produtos/orient-rose-1.jpg"],
    descricao: "Mostrador rosé delicado com pulseira em aço, para o dia a dia com sofisticação.",
    ficha: {
      mecanismo: "Quartzo",
      caixa: "Aço, 32mm",
      pulseira: "Aço inoxidável",
      resistenciaAgua: "3 ATM",
    },
  },
  {
    slug: "orient-masculino-preto-prateado",
    nome: "Orient Steel Preto",
    marca: "Orient",
    categoria: "masculino",
    preco: 749,
    imagens: ["/produtos/orient-preto-1.jpg"],
    descricao: "Visual clássico e versátil, mostrador preto com numerais aplicados e pulseira em aço.",
    ficha: {
      mecanismo: "Quartzo",
      caixa: "Aço, 38mm",
      pulseira: "Aço inoxidável",
      resistenciaAgua: "5 ATM",
    },
  },
  {
    slug: "casio-digital-classico",
    nome: "Casio Digital Clássico",
    marca: "Casio",
    categoria: "digital",
    preco: 249,
    imagens: ["/produtos/casio-digital-1.jpg"],
    descricao: "O digital de sempre: leve, resistente e prático para o dia a dia.",
    ficha: {
      mecanismo: "Digital",
      caixa: "Resina",
      pulseira: "Resina",
      resistenciaAgua: "5 ATM",
    },
  },
];

export const categorias: { valor: Categoria; label: string }[] = [
  { valor: "automatico", label: "Automáticos" },
  { valor: "feminino", label: "Femininos" },
  { valor: "masculino", label: "Masculinos" },
  { valor: "digital", label: "Digitais" },
];

export const marcas = Array.from(new Set(produtos.map((p) => p.marca))).sort();
