import { linkWhatsappGenerico } from "@/lib/whatsapp";

export const metadata = {
  title: "Revitalização de Relógios | Pontual",
  description: "Troca de bateria, pulseiras, vidros e revitalização completa em Caruaru-PE.",
};

const servicos = [
  { nome: "Troca de bateria", desc: "Substituição rápida, com teste de estanqueidade quando aplicável." },
  { nome: "Troca de pulseira", desc: "Couro, aço ou borracha — ajuste no tamanho do seu pulso." },
  { nome: "Troca de vidro", desc: "Reposição de vidros riscados ou trincados." },
  { nome: "Revitalização completa", desc: "Limpeza interna, lubrificação e regulagem do mecanismo." },
];

export default function RevitalizacaoPage() {
  return (
    <>
      <section className="bg-carvao text-osso">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-dourado text-xs uppercase tracking-wider2 mb-4">Assistência técnica</p>
          <h1 className="font-display text-5xl max-w-xl leading-tight">
            Seu relógio de sempre, com o brilho de novo.
          </h1>
          <p className="mt-6 max-w-md text-osso/70">
            Cuidamos da peça que já faz parte da sua história — na loja, com quem entende do assunto.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {servicos.map((s) => (
            <div key={s.nome} className="border border-carvao/10 p-6">
              <h3 className="font-display text-2xl">{s.nome}</h3>
              <p className="mt-2 text-carvao/60 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={linkWhatsappGenerico("Gostaria de saber mais sobre revitalização de relógio.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-carvao text-osso px-8 py-4 text-xs uppercase tracking-wider2 hover:bg-dourado hover:text-carvao transition-colors"
          >
            Falar com a assistência técnica
          </a>
        </div>
      </section>
    </>
  );
}
