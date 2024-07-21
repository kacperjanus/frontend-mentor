import type {Config} from "tailwindcss";

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
                "dark-grey": "#7D7D7D"
            },
            fontFamily: {
                manrope: ['var(--font-manrope)'],
            },
            screens: {
                "mobile": "375px",
                "tablet": "768px",
                "desktop": "1024px"
            },
        },
    },
};
export default config;