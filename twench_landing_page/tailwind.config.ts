import type { Config } from "tailwindcss";
import textShadowPlugin from "./plugins/text-shadow";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#394b37",
      },
      screens: {
        xs: "456px",
      },
    },
  },
  plugins: [textShadowPlugin],
};
export default config;
