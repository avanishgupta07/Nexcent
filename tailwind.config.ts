import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: "#4CAF50",
        ink: "#4D4D4D",
        muted: "#737373",
        page: "#F5F7F9"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.04)"
      }
    }
  },
  plugins: []
};

export default config;
