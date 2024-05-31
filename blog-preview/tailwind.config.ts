import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow": "hsl(47, 88%, 63%)",
        "grey": "hsl(0, 0%, 50%)",
        "black": "hsl(0, 0%, 7%)"
      }
    },
  },
  plugins: [],
};
export default config;
