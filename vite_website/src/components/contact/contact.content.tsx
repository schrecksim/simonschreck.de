import { t, type Dictionary } from "intlayer";
//import { type ReactNode } from "react";

const contactContent = {
  key: "contact",

  content: {
    h_contact: t({
      en: "Contact me",
      de: "Kontakt",
      ja: "連絡してください",
    }),
    phone: t({
      en: "Phone: ",
      de: "Tel.: ",
      ja: "電話番号: ",
    }),
    phone_number: "+4916091011347",
    email: t({
      en: "E-Mail: ",
      de: "E-Mail: ",
      ja: "電子メール: ",
    }),
    email_adress: t({
      en: "request@simonschreck.de",
      de: "anfrage@simonschreck.de",
      ja: "otaiawase@simonschreck.de",
    }),
    cta: t({
      en: "Reach out by one of the following options:",
      de: "Nehmen Sie über einen der folgenden Wege Kontakt auf:",
      ja: "以下のいずれかの方法でご連絡ください:",
    }),
    name: "Simon Schreck",
    street: "Im Asemwald 32",
    area: "70599 Stuttgart",
    country: t({
      en: "Germany",
      de: "Deutschland",
      ja: "ドイツ",
    }),
  },
} satisfies Dictionary;

export default contactContent;
