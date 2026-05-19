import {t, type Dictionary, enu} from "intlayer";

const availabilityContent = {
  key: "availability",

  content: {
    h_availability: t({
      en: "Availability",
      de: "Verfügbarkeit",
      ja: "入手可能性",
    }),
    t_availability: t({
      en: "For inquiries regarding availability, please use the contact details below. Generally speaking, I cover Germany, Switzerland, and Austria.",
      de: "Für Anfragen zur Verfügbarkeit nutzen Sie bitte die untenstehenden Kontaktmöglichkeiten. Grundsätzlich befindet sich mein Einzugsgebiet im DACH-Raum.",
      ja: "空き状況に関するお問い合わせは、以下の連絡先までお願いいたします。基本的には、ドイツ、スイス、オーストリアを対応エリアとしています。",
    }),
    disclaimer: t({
      en: "Enquiries regarding other countries may, of course, be made. Please note, however, that there are restrictions regarding the USA and Canada for insurance reasons.",
      de: "Anfragen außerhalb können selbstverständlich gestellt werden. Beachten Sie jedoch Einschränkungen hinsichtlich USA & Kanada aus versicherungstechnischen Gründen.",
      ja: "もちろん, その他の地域からのご依頼も承っております。ただし, 保険上の理由により, 米国およびカナダに関しては制限がございますのでご注意ください。",
    })
  },
} satisfies Dictionary;

export default availabilityContent;
