import type { Metadata } from "next";
import {
  Playfair_Display,
  Cormorant_Garamond,
  EB_Garamond,
  Inter,
} from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-accent",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: [
      { url: "/logo.webp", type: "image/webp" },
    ],
    apple: "/logo.webp",
  },
  title: {
    default: "La Mirande — Hôtel 5 Étoiles Avignon | Site Officiel",
    template: "%s | La Mirande",
  },
  description:
    "Ancien palais de cardinal au pied du Palais des Papes. 26 chambres uniques, restaurant étoilé Michelin, école de cuisine, jardin secret. 700 ans d'histoire et d'art de vivre.",
  openGraph: {
    title: "La Mirande — Hôtel particulier 5★ à Avignon",
    description:
      "700 ans d'histoire au pied du Palais des Papes. 26 chambres uniques, restaurant étoilé Michelin, école de cuisine Le Marmiton.",
    type: "website",
    locale: "fr_FR",
    siteName: "La Mirande",
    images: [
      {
        url: "https://www.la-mirande.fr/_novaimg/4661000-1432381_0_0_3712_2474_2000_1333.webp",
        width: 1200,
        height: 630,
        alt: "La Mirande — Hôtel particulier à Avignon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Mirande — Hôtel particulier 5★ à Avignon",
    description:
      "700 ans d'histoire au pied du Palais des Papes. Restaurant étoilé Michelin, 26 chambres uniques.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${cormorant.variable} ${ebGaramond.variable} ${inter.variable}`}
    >
      <body className="antialiased overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
