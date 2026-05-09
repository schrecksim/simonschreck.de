import {t, type Dictionary, enu} from "intlayer";
//import { type ReactNode } from "react";

const availabilityContent = {
  key: "availability",

  content: {
    h_availability: t({
      en: "Availability",
      de: "Verfügbarkeit",
      ja: "入手可能性",
    }),
    t_availability: t({
      en: "I'm currently available:",
      de: "Ich bin aktuell verfügbar:",
      ja: "入手可能性",
    }),
    availability: "100%",
    main_area: t({
      "de": "im DACH-RAUM",
      "en": "in Germany, Switzerland & Austria",
      "ja": "ドイツ、スイス、オーストリア"
    }),
    disclaimer: t({
      "de": "Anfragen außerhalb können selbstverständlich gestellt werden. Beachten Sie jedoch Einschränkungen hinsichtlich USA & Kanada aus versicherungstechnischen Gründen.",
      "en": "Enquiries regarding other countries may, of course, be made. Please note, however, that there are restrictions regarding the USA and Canada for insurance reasons.",
      "ja": "もちろん, その他の地域からのご依頼も承っております. ただし, 保険上の理由により, 米国およびカナダに関しては制限がございますのでご注意ください.",
    })
  },
} satisfies Dictionary;

export default availabilityContent;
