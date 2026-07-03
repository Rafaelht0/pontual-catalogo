import { Produto } from "@/data/products";

// Troque pelo número real da loja (com DDI 55 + DDD + número, só dígitos).
// Ex.: 5581999999999
export const WHATSAPP_NUMERO = process.env.NEXT_PUBLIC_WHATSAPP_NUMERO ?? "5581900000000";

export function linkWhatsappGenerico(mensagemExtra?: string) {
  const base = "Olá! Vim pelo site da Pontual e gostaria de saber mais sobre os relógios.";
  const texto = mensagemExtra ? `${base}\n\n${mensagemExtra}` : base;
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;
}

export function linkWhatsappProduto(produto: Produto, mensagemExtra?: string) {
  const base = `Olá! Tenho interesse no relógio *${produto.nome}* (${produto.marca}).`;
  const texto = mensagemExtra ? `${base}\n\n${mensagemExtra}` : base;
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;
}
