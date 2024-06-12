import {Barlow, Barlow_Condensed, Bellefair} from "next/font/google";

export const bellefair = Bellefair({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
    variable: "--font-bellefair"
});

export const barlow = Barlow({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
    variable: "--font-barlow"
});

export const barlowCondensed = Barlow_Condensed({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
    variable: "--font-barlow-condensed"
});