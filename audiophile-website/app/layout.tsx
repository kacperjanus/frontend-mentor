import type {Metadata} from "next";
import {Manrope} from "next/font/google";
import "./globals.css";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import {CartProvider} from "@/app/_lib/contexts/CartContext";

const manrope = Manrope({subsets: ["latin"], variable: "--font-manrope"});

export const metadata: Metadata = {
    title: "Audiophile Website",
    description: "Frontend Mentor challenge solution",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={manrope.className}>
        <CartProvider>
            <Header/>
            {children}
            <Footer/>
        </CartProvider>
        </body>
        </html>
    );
}
