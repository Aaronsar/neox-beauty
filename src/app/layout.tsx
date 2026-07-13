import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Neox Beauty — Institut de beauté à Levallois & Saint-Brice",
  description:
    "Neox Beauty, votre institut de beauté à Levallois-Perret et Saint-Brice-sous-Forêt. Manucure, semi-permanent, soins du visage, épilation. Prenez rendez-vous en ligne.",
  keywords: [
    "institut beauté",
    "manucure",
    "semi-permanent",
    "Levallois-Perret",
    "Saint-Brice-sous-Forêt",
    "Neox Beauty",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
