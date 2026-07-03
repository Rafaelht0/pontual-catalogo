import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // paleta extraída do feed real da Pontual: macro escuro dos relógios,
        // dourado do metal, fundo cru das campanhas, aço das pulseiras.
        carvao: "#14120F",
        "carvao-suave": "#201D18",
        osso: "#F3EDE3",
        dourado: "#B08D57",
        "dourado-claro": "#D4B483",
        aco: "#8B9199",
      },
      fontFamily: {
        // serifa fina para títulos, ecoa o wordmark "Pontual" e os overlays de campanha
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        wider2: "0.18em",
      },
      keyframes: {
        sweep: {
          "0%": { transform: "scaleX(0)", transformOrigin: "left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
      },
      animation: {
        sweep: "sweep 1.1s cubic-bezier(0.65, 0, 0.35, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
