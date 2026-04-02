import type { Metadata } from 'next';
import Script from 'next/script';
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";   // ← Nova komponenta

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "FK Gornje Sinkovce",
    template: "%s | FK Gornje Sinkovce",
  },
  description: "Zvanična stranica FK Gornje Sinkovce - Crno-beli ponos Gornjeg Sinkovca od 1980. godine. Pratite vesti, utakmice, prvi tim i sve informacije o klubu sa stadiona Omladinac.",
  
  keywords: [
    "FK Gornje Sinkovce", 
    "Gornje Sinkovce", 
    "fudbal Leskovac", 
    "gradska liga Leskovac", 
    "stadion Omladinac", 
    "crno-beli", 
    "fudbalski klub"
  ],
  
  openGraph: {
    title: "FK Gornje Sinkovce",
    description: "Zvanična stranica FK Gornje Sinkovce - Crno-beli ponos Gornjeg Sinkovca od 1980. godine",
    url: "https://www.fkgs.rs",
    siteName: "FK Gornje Sinkovce",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FK Gornje Sinkovce - Stadion Omladinac",
      },
    ],
    locale: "sr_RS",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "FK Gornje Sinkovce",
    description: "Zvanična stranica FK Gornje Sinkovce - Crno-beli ponos Gornjeg Sinkovca",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr">
      <head>
        {/* Cookiebot - GDPR Cookie Consent (Manual mode) */}
        <Script 
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="482623d0-f805-4f44-a8ce-cf508821d662"
          data-blockingmode="manual"           // ← Važno za Next.js
          type="text/javascript"
          async
          strategy="afterInteractive"
        />
      </head>

      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <Navbar />

        <main className="flex-grow pt-20 min-h-[calc(100vh-80px)]">
          {children}
        </main>

        <Footer />

        {/* Cookie Consent Banner */}
        <CookieBanner />
      </body>
    </html>
  );
}