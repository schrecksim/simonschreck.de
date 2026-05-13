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
    glossary_link: t({
      en: "Click here to find out more",
      de: "Hier klicken und mehr entdecken",
      ja: "ここをクリックして、さらに詳しく見る",
    })
  },
} satisfies Dictionary;

export default appContent;
