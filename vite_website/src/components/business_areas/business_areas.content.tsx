import { t, type Dictionary } from "intlayer";
//import { type ReactNode } from "react";

const businessareasContent = {
  key: "business_areas",

  content: {
    h_support: t({
      en: "What I can support you with",
      de: "Wobei ich Sie unterstützen kann",
      ja: "私がサポートできること",
    }),
  },
} satisfies Dictionary;

export default businessareasContent;
