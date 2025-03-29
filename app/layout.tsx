import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Providers from "./providers";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-poppins",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Tabir LGAT Mock Test",
    description: "Generated by mock AI Test",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link rel="icon" type="image/png" href="/favicon-32x32.png" />
        </head>
        <body
            className={` ${poppins.variable} antialiased bg-white min-h-screen flex flex-col items-center`}
        >
        <header className="w-full max-w-6xl p-6 sm:p-12 flex justify-start">
            <Link href="/">
                <Image src="/new-tabir-logo.png" alt="Tabir Logo" width={200} height={60} />
            </Link>
        </header>
        <Providers> <main className="w-full flex-1 flex flex-col items-center">{children}</main></Providers>
        </body>
        </html>
    );
}
