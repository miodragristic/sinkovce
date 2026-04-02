'use client';

import { useEffect } from 'react';

export default function CookieBanner() {
  useEffect(() => {
    // Funkcija koja pokreće Cookiebot kada je spreman
    const initCookiebot = () => {
      if (typeof window !== 'undefined' && window.Cookiebot) {
        window.Cookiebot.run();
      }
    };

    // Proveravamo svakih 300ms da li je Cookiebot učitan
    const interval = setInterval(() => {
      if (window.Cookiebot) {
        initCookiebot();
        clearInterval(interval);
      }
    }, 300);

    // Sigurnosni timeout - ako se ne učita za 5 sekundi
    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return null;
}