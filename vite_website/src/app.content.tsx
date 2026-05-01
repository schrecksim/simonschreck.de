import { insert, t, type Dictionary } from "intlayer";
//import { type ReactNode } from "react";

const appContent = {
  key: "app",

  content: {
    h1: t({
      en: "Landingpage",
      de: "Startseite",
      ja: "ホーム",
    }),
    h_support: t({
      en: "What I can support you with",
      de: "Wobei ich Sie unterstützen kann",
      ja: "私がサポートできること",
    }),
    h_about_me: t({
      en: "About me",
      de: "Über mich",
      ja: "私について",
    }),
    h_availability: t({
      en: "Availability",
      de: "Verfügbarkeit",
      ja: "入手可能性",
    }),
    h_contact: t({
      en: "Contact me",
      de: "Kontakt",
      ja: "連絡してください",
    }),
  },
} satisfies Dictionary;

export default appContent;
