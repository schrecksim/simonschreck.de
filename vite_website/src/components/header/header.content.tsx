import { t, type Dictionary } from "intlayer";
//import { type ReactNode } from "react";

const headerContent = {
  key: "header",

  content: {
    l_home: t({
      en: "return to home page",
      de: "zurück zur Startseite",
      ja: "トップページに戻る",
    }),
  },
} satisfies Dictionary;

export default headerContent;
