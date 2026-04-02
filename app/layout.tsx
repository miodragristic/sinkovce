import type { Metadata } from 'next';
import Script from 'next/script';
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
  description: "Zvanična stranica FK Gornje Sinkovce - Crno-beli ponos Gornjeg Sinkovca od 1980. godine",
  keywords: ["FK Gornje Sinkovce", "fudbal Leskovac", "Gornje Sinkovce", "gradska liga", "crno-beli", "fudbalski klub"],
  
  openGraph: {
    title: "FK Gornje Sinkovce",
    description: "Zvanična stranica FK Gornje Sinkovcea",
    url: "https://www.fkgs.rs",                    // promeni kasnije ako imaš pravi domen
    siteName: "FK Gornje Sinkovce",
    images: [
      {
        url: "/og-image.jpg",                       // ← Glavna OG slika (1200x630)
        width: 80,
        height: 8,
        alt: "FK Gornje Sinkovce - Crno-beli ponos Gornjeg Sinkovca",
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
    apple: "/apple-touch-icon.png",   // možeš dodati kasnije
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <Navbar />

        <main className="flex-grow pt-20 min-h-[calc(100vh-80px)]">
          {children}
        </main>

        <Footer />

         
      
      </body>
    </html>
  );
}