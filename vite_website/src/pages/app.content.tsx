import { t, type Dictionary } from "intlayer";

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
    }),
    about_me_link: t({
      en: "more about me",
      de: "mehr über mich",
      ja: "私のことについて",
    }),
  },
} satisfies Dictionary;

export default appContent;
