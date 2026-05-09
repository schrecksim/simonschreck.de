import { t, type Dictionary } from "intlayer";
//import { type ReactNode } from "react";

const contactContent = {
  key: "footer",

  content: {
    impressum: t({
      en: "Legal notice",
      de: "Impressum",
      ja: "サイト運営者情報",
    }),
    datenschutz: t({
      en: "Privacy Policy",
      de: "Datenschutzerklärung",
      ja: "プライバシーポリシー",
    }),
    copyright: "© 2026 – Simon Schreck",
  },
} satisfies Dictionary;

export default contactContent;
