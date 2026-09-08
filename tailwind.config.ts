import type { Config } from "tailwindcss";

/**
 * Toner Abrica — Design tokens
 * Estilo: Corporate Modern / Flat Design con toques neomorficos soft.
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 1. Magenta principal (Marca / CTA)
        magenta: {
          DEFAULT: "#9B1B7D",
          50: "#FBF0F7",
          100: "#F6DCEC",
          200: "#EBB6D6",
          300: "#DE8BBD",
          400: "#C74F9C",
          500: "#9B1B7D",
          600: "#851569",
          700: "#6C1156",
          800: "#530D42",
          900: "#3B0930",
        },
        // 2. Azul marino (Tipografico / Corporativo principal)
        navy: {
          DEFAULT: "#101846",
          50: "#EAECF3",
          100: "#CDD2E3",
          200: "#9AA3C4",
          300: "#5D6A9C",
          400: "#2C3A72",
          500: "#101846",
          600: "#0D143A",
          700: "#0A102E",
          800: "#070B20",
          900: "#040614",
        },
        // 3. Azul periwinkle / lavanda (Secundario / Subtitulos)
        periwinkle: {
          DEFAULT: "#3D4C82",
          50: "#EEF0F7",
          100: "#D6DBEC",
          200: "#AEB7D6",
          300: "#8593BF",
          400: "#5C6CA1",
          500: "#3D4C82",
          600: "#313D69",
          700: "#252E4F",
          800: "#191F35",
          900: "#0D0F1B",
        },
        // 4. Cyan pastel / azul cielo (Accent / Fondos de seccion)
        cyan: {
          DEFAULT: "#93D5E1",
          50: "#F1FAFC",
          100: "#DFF3F7",
          200: "#C4E9F0",
          300: "#93D5E1",
          400: "#66BFD2",
          500: "#3FA4BC",
          600: "#2F849A",
          700: "#28697A",
          800: "#22525F",
          900: "#193C46",
        },
        // 5. Rosa claro pastel (Fondos neutros calidos / Complementario)
        blush: {
          DEFAULT: "#E8BACF",
          50: "#FCF5F9",
          100: "#F8E9F0",
          200: "#F1D4E1",
          300: "#E8BACF",
          400: "#DA94B4",
          500: "#C96D98",
          600: "#B24E7E",
          700: "#8E3C63",
          800: "#6A2C4A",
          900: "#461D31",
        },
        // 6. Fondos base de interfaz
        base: {
          white: "#FFFFFF",
          gray: "#F4F5F8",
        },
      },
      fontFamily: {
        display: ["var(--font-poppins)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        // Sombras suaves / neomorficas soft
        soft: "0 4px 20px -4px rgba(16, 24, 70, 0.10)",
        "soft-lg": "0 12px 40px -8px rgba(16, 24, 70, 0.14)",
        neu: "6px 6px 16px rgba(16, 24, 70, 0.08), -6px -6px 16px rgba(255, 255, 255, 0.9)",
        "neu-inset":
          "inset 4px 4px 10px rgba(16, 24, 70, 0.06), inset -4px -4px 10px rgba(255, 255, 255, 0.9)",
        cta: "0 8px 24px -6px rgba(155, 27, 125, 0.45)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      backgroundImage: {
        "hero-sky":
          "linear-gradient(180deg, #DFF3F7 0%, #93D5E1 45%, #C4E9F0 100%)",
        "magenta-cta":
          "linear-gradient(135deg, #9B1B7D 0%, #C74F9C 100%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        float: "float 6s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
