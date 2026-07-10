import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

// Se NEXT_PUBLIC_SITE_URL não estiver setada, cai pra URL que a própria
// Vercel injeta automaticamente no build (sem precisar configurar nada);
// em domínio próprio, defina NEXT_PUBLIC_SITE_URL pra sobrescrever.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Pontual Relógios e Acessórios | Caruaru-PE",
  description:
    "Loja e assistência de relógios em Caruaru-PE. Automáticos, femininos, masculinos e digitais. Em todos os seus encontros, seja Pontual.",
  openGraph: {
    title: "Pontual Relógios e Acessórios",
    description: "Em todos os seus encontros, seja Pontual.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} font-sans bg-osso text-carvao antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
