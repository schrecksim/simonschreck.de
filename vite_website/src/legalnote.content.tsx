import { t, type Dictionary } from "intlayer";
//import { type ReactNode } from "react";

const legalnoteContent = {
  key: "legalnote",

  content: {
    h1: t({
      en: "Legal Note",
      de: "Impressum",
      ja: "ホーム",
    }),
  },
} satisfies Dictionary;

export default legalnoteContent;
