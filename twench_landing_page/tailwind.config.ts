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
        primary: "var(--primary)",
      },
      screens: {
        xs: "456px",
        "424": "424px",
        "552": "552px",
        "664": "664px",
        "768": "768px",
        "844": "844px",
        "902": "902px",
        "1100": "1100px",
        "1430": "1430px",
        "1680": "1680px",
      },
    },
  },
  plugins: [textShadowPlugin],
};
export default config;
