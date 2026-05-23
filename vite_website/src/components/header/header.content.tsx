import { t, type Dictionary } from "intlayer";

const headerContent = {
  key: "header",

  content: {
    l_home: t({
      en: "to home page",
      de: "zur Startseite",
      ja: "トップページに戻る",
    }),
    l_glossary: t({
      en: "to glossary page",
      de: "zur Glossarseite",
      ja: "用語集ページへ",
    }),
    slogan: "Data & Business Consultant"
  },
} satisfies Dictionary;

export default headerContent;
