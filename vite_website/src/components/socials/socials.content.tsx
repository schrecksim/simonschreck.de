import {t, type Dictionary, enu} from "intlayer";

const socialsContent = {
  key: "socials",

  content: {
    h_socials: t({
      en: "Socials and Platforms",
      de: "Soziale Medien und Plattformen",
      ja: "ソーシャルメディアとプラットフォーム",
    }),
    disclaimer: t({
      en: "Not all socials and platforms are available everywhere. Please therefore note the following list. If you think a platform is missing, please feel free to contact me by email.",
      de: "Nicht alle sozialen Netzwerke und Plattformen sind überall verfügbar. Bitte beachten Sie daher die folgende Liste. Falls Sie der Meinung sind, dass eine Plattform fehlt, können Sie mich gerne per E-Mail kontaktieren.",
      ja: "すべてのソーシャルメディアやプラットフォームが、すべての地域で利用できるわけではありません。そのため、以下のリストをご確認ください。もし掲載されていないプラットフォームがあると思われる場合は、お気軽にメールにてご連絡ください。",
    }),
    h_international: t({
      en: "International",
      de: "International",
      ja: "国際",
    }),
    h_europe: t({
      en: "European",
      de: "Europäisch",
      ja: "ヨーロッパの",
    }),
    h_dach: t({
      en: "Germany, Austria & Switzerland",
      de: "DACH-Raum",
      ja: "ドイツ、オーストリア、スイス",
    }),
  },
} satisfies Dictionary;

export default socialsContent;
