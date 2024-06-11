import type { Metadata } from "next";
import "./globals.css";
import {barlow, bellefair} from "@/app/fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${bellefair.variable}`}>{children}</body>
    </html>
  );
}
