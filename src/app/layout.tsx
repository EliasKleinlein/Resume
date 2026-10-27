import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const headline = Space_Grotesk({ subsets: ["latin"], variable: "--font-headline", display: "swap" });
const text = Inter({ subsets: ["latin"], variable: "--font-text", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Elias Kleinlein – Resume",
  description: "Lebenslauf von Elias Kleinlein – Maschinenbautechniker und Software Engineering & AI",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" className={`${headline.variable} ${text.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
