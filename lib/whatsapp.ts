import { Produto } from "@/data/products";

// Número real da loja (DDI 55 + DDD + número, só dígitos). Não é dado sensível
// — já fica exposto no próprio link do botão — por isso fica fixo aqui, sem
// depender de env var configurada no provedor de deploy.
export const WHATSAPP_NUMERO = process.env.NEXT_PUBLIC_WHATSAPP_NUMERO ?? "5581995491012";

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
