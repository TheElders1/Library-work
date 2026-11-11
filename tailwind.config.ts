import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { navy: { DEFAULT: "#0B2545", 700: "#13315C", 500: "#1D4478" }, gold: { DEFAULT: "#B8955A", soft: "#E9DCC2" }, paper: "#F5F6F8" },
    fontFamily: { serif: ["Iowan Old Style", "Palatino Linotype", "Palatino", "Georgia", "serif"], sans: ["Inter", "Segoe UI", "system-ui", "sans-serif"] },
  } },
  plugins: [],
};
export default config;
