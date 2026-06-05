import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        denana: {
          cream: "#fbf7ef",
          gold: "#c49a4a",
          goldDark: "#9f7a36",
          ink: "#211c18",
          muted: "#766f68",
          line: "#eadfcc",
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(33, 28, 24, 0.08)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
