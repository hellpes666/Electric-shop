import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/header";

const nunito = Nunito({
    subsets: ["cyrillic"],
    variable: "--font-nunito",
    weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "Electronic Shop",
    description: "Магазин по продаже электротоваров",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={nunito.className}>
                <main className="min-h-screen">
                    <Header></Header>
                    {children}
                </main>
            </body>
        </html>
    );
}
