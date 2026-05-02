import type { Metadata } from 'next';
import Script from 'next/script';
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
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

  verification: {
    google: "_SiQgprNJyVnLozxbjDOooPVyTIUguaKR5i_EcgPPGI",
  },

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
        {/* === COOKIEBOT - VAŽNO: beforeInteractive + manual mode === */}
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="482623d0-f805-4f44-a8ce-cf508821d662"
          data-blockingmode="manual"
          strategy="beforeInteractive"
          type="text/javascript"
        />

        {/* === GOOGLE ANALYTICS 4 === */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-F2SRVWCS19"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              // Default consent - sve je denied dok korisnik ne prihvati
              gtag('consent', 'default', {
                analytics_storage: 'denied',
                ad_storage: 'denied',
                functionality_storage: 'denied',
                personalization_storage: 'denied',
                security_storage: 'granted'
              });

              gtag('config', 'G-F2SRVWCS19', {
                page_path: window.location.pathname,
              });
            `,
          }}
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