import { t, type Dictionary } from "intlayer";

const aboutmeContent = {
  key: "general",

  content: {
    show_more: t({
      en: "Show more",
      de: "Mehr anzeigen",
      ja: "もっと見る",
    }),
    show_less: t({
      en: "Show less",
      de: "Weniger anzeigen",
      ja: "表示を少なくする",
    }),
  },
} satisfies Dictionary;

export default aboutmeContent;
