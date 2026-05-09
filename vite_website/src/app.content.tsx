import { t, type Dictionary } from "intlayer";
//import { type ReactNode } from "react";

const appContent = {
  key: "app",

  content: {
    h1: t({
      en: "Landingpage",
      de: "Startseite",
      ja: "ホーム",
    }),
  },
} satisfies Dictionary;

export default appContent;
