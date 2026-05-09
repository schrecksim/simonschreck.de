import { t, type Dictionary } from "intlayer";
//import { type ReactNode } from "react";

const headerContent = {
  key: "header",

  content: {
    l_home: t({
      en: "to home page",
      de: "zur Startseite",
      ja: "トップページに戻る",
    }),
  },
} satisfies Dictionary;

export default headerContent;
