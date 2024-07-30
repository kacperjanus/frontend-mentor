import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-lavender": "#633CFF",
        "lavender": "#BEADFF",
        "light-lavender": "#EFEBFF",
        "disabled-lavender": "#D3CAF9",
        "dark-gray": "#333",
        "gray": "#737373",
        "light-gray": "#D9D9D9",
        "off-white": "#FAFAFA",
        "white": "#FFF",
        "tomato": "#FF3939",
      },
      screens: {
        "mobile": "375px",
        "tablet": "768px",
        "desktop": "1024px"
      }
    },
  },
  plugins: [],
};
export default config;
