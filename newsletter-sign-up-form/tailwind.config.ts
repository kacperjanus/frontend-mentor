import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'darkslategray': 'hsl(234, 29%, 20%)',
      'charcoalgrey': 'hsl(235, 18%, 26%)',
      "grey": 'hsl(231, 7%, 60%)',
      "white": "hsl(0, 0%, 100%)",
      "tomato": "hsl(4, 100%, 67%)",
    },
    screens: {
      'sm': '480px'
    }
  },
  plugins: [],
};
export default config;
