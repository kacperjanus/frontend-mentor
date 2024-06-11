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
        "very-dark-navy": "#0B0D17",
        "light-blue": "#D0D6F9",
      },
      fontFamily: {
        barlow: ['var(--font-barlow)'],
        bellefair: ['var(--font-bellefair)'],
      },
      screens: {
        "mobile": "375px",
        "tablet": "768px",
        "desktop": "1024px"
      },
      backgroundImage: {
        "home-mobile": "url('/home/background-home-mobile.jpg')",
        "home-tablet": "url('/home/background-home-tablet.jpg')",
        "home-desktop": "url('/home/background-home-desktop.jpg')",
      }
    },
  },
  plugins: [],
};
export default config;
