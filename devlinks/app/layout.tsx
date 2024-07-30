import type {Metadata} from "next";
import {Instrument_Sans} from "next/font/google";
import "./globals.css";

const instrument = Instrument_Sans({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Devlinks",
    description: "Solution to Frontend Master challenge",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={instrument.className}>
        <div className="min-h-screen w-full tablet:flex tablet:items-center tablet:justify-center tablet:bg-off-white">
            {children}
        </div>
        </body>
        </html>
    );
}
