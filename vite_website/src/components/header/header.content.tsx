import { t, type Dictionary } from "intlayer";

const headerContent = {
  key: "header",

  content: {
    l_home: t({
      en: "to home page",
      de: "zur Startseite",
      ja: "トップページに戻る",
    }),
    slogan: "Data & Business Consultant"
  },
} satisfies Dictionary;

export default headerContent;
