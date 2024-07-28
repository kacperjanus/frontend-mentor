import type { Metadata } from "next";
import "./globals.css";
import {barlow, barlowCondensed, bellefair} from "@/app/fonts";
import React from "react";

export const metadata: Metadata = {
  title: "Space Tourism Website",
  description: "Solution to Frontend Mentor challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${barlow.variable} ${bellefair.variable} ${barlowCondensed.variable}`}>
        {children}
    </body>
    </html>
);
}


