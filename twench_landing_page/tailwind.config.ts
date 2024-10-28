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
      },
      textShadow: {
        DEFAULT: "1px",
        sm: "2px",
        md: "3px",
        lg: "4px",
        xl: "5px",
      },
    },
  },
  plugins: [textShadowPlugin],
};
export default config;
