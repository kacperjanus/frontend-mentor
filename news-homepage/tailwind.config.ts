import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "soft-orange": 'hsl(35, 77%, 62%)',
        "soft-red": '#f15e50',
        "off-white": 'hsl(36, 100%, 99%)',
        "grayish-blue": 'hsl(233, 8%, 79%)',
        "dark-grayish-blue": 'hsl(236, 13%, 42%)',
        "very-dark-blue": 'hsl(240, 100%, 5%)'
},
      screens: {
        "lg": "1100px"
      }
    },
  },
  plugins: [],
};
export default config;
