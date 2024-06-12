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
        "grey": "#85868A"
      },
      fontFamily: {
        barlow: ['var(--font-barlow)'],
        bellefair: ['var(--font-bellefair)'],
        barlowcondensed: ['var(--font-barlow-condensed)'],
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
        "destination-mobile": "url('/destination/background-destination-mobile.jpg')",
        "destination-tablet": "url('/destination/background-destination-tablet.jpg')",
        "destination-desktop": "url('/destination/background-destination-desktop.jpg')",
      }
    },
  },
  plugins: [],
};
export default config;
