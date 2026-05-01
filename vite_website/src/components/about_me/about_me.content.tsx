import { t, type Dictionary } from "intlayer";
//import { type ReactNode } from "react";

const aboutmeContent = {
  key: "about_me",

  content: {
    h_about_me: t({
      en: "About me",
      de: "Über mich",
      ja: "私について",
    }),
  },
} satisfies Dictionary;

export default aboutmeContent;
