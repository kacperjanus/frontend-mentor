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
        "earthy": "#D87D4A",
        "earthy-light": "#FBAF85",
        "black-light": "#101010",
        "white-dark": "#FAFAFA",
        "grey": "#F1F1F1",
      },
      fontFamily: {
        manrope: ['var(--font-manrope)'],
      }
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        'h1': {
          '@apply text-[56px] font-[700] uppercase leading-[58px] tracking-[2px]': {},
        },
        'h2': {
          '@apply text-[40px] font-[700] uppercase leading-[44px] tracking-[1.5px]': {},
        },
        'h3': {
          '@apply text-[32px] font-[700] uppercase leading-[36px] tracking-[1.15px]': {},
        },
        'h4': {
          '@apply text-[28px] font-[700] uppercase leading-[38px] tracking-[2px]': {},
        },
        'h5': {
          '@apply text-[24px] uppercase font-[700] leading-[33px] tracking-[1.7px]': {},
        },
        'h6': {
          '@apply text-[18px] font-[700] uppercase leading-[24px] tracking-[1.3px]': {},
        },
        'p': {
          '@apply text-[15px] leading-[25px]': {}
        },
      });
    },
  ],
};
export default config;