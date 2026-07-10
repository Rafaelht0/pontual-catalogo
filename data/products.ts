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
    imagens: ["/produtos/orient-prata-1.png"],
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
    slug: "champion-feminino-rose",
    nome: "Champion Rosé",
    marca: "Champion",
    categoria: "feminino",
    preco: 799,
    imagens: ["/produtos/champion-rose-1.png"],
    descricao: "Mostrador lilás delicado com pulseira em aço, para o dia a dia com sofisticação.",
    ficha: {
      mecanismo: "Quartzo",
      caixa: "Aço, 32mm",
      pulseira: "Aço inoxidável",
      resistenciaAgua: "3 ATM",
    },
  },
  {
    slug: "orient-heritage",
    nome: "Orient Heritage",
    marca: "Orient",
    categoria: "masculino",
    preco: 1499,
    imagens: ["/produtos/orient-heritage-1.png"],
    descricao:
      "Visual retrô com caixa bicolor aço e dourado, mostrador texturizado e calendário duplo (dia/data). Movimento automático à vista no fundo do case.",
    ficha: {
      mecanismo: "Automático",
      caixa: "Aço e dourado, 41mm",
      pulseira: "Aço inoxidável",
      resistenciaAgua: "3 ATM",
    },
  },
  {
    slug: "casio-vintage-dourado",
    nome: "Casio Vintage Dourado",
    marca: "Casio",
    categoria: "digital",
    preco: 349,
    imagens: ["/produtos/casio-vintage-dourado-1.png"],
    descricao:
      "O clássico anadigi da Casio, banhado a dourado: mostrador analógico com visor digital integrado. Retrô e atemporal.",
    ficha: {
      mecanismo: "Quartzo (analógico-digital)",
      caixa: "Aço dourado",
      pulseira: "Aço dourado",
      resistenciaAgua: "3 ATM",
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
