import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elias Kleinlein – Resume",
  description: "Lebenslauf von Elias Kleinlein – Maschinenbautechniker und Software Engineering & AI",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
