import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mariage de Basile & Zineb",
  description:
    "Invitation au mariage de Zineb Lahjouji et Basile Piquard - 10 Octobre 2026",
  icons: {
    icon: [{ url: "/zineb-basile-transparent.svg", type: "image/svg+xml" }],
    shortcut: "/zineb-basile-transparent.png",
    apple: [
      {
        url: "/zineb-basile-transparent.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",
  themeColor: "#c5a059",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Mariage B&Z",
  },
  openGraph: {
    title: "Mariage de Basile & Zineb",
    description:
      "Invitation au mariage de Basile Piquard et Zineb Lahjouji - 10 Octobre 2026",
    images: [
      {
        url: "/zineb-basile-transparent.png",
        width: 1200,
        height: 630,
        alt: "Mariage Basile & Zineb",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mariage de Basile & Zineb",
    description:
      "Invitation au mariage de Basile Piquard et Zineb Lahjouji - 10 Octobre 2026",
    images: ["/zineb-basile-transparent.png"],
  },
  robots: {
    index: false,
    follow: false,
  },
};

import { Envelope } from "@/components/Envelope";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
      >
        <Envelope>{children}</Envelope>
      </body>
    </html>
  );
}
