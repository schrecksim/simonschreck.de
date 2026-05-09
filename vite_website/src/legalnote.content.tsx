import { t, type Dictionary } from "intlayer";
//import { type ReactNode } from "react";

const legalnoteContent = {
  key: "legalnote",

  content: {
    h1: t({
      en: "Legal Note",
      de: "Impressum",
      ja: "サイト運営者情報",
    }),
    h_bin: t({
      en: "Business Identification Number",
      de: "Wirtschaftsidentifikationsnummer",
      ja: "事業者登録番号",
    }),
    bin_num: "DE450193152",
    h_insurance: t({
      en: "Professional liability insurance",
      de: "Berufshaftpflichtversicherung",
      ja: "職業賠償責任保険",
    }),
    t1_insurance: t({
      en: "Name and registered office of the insurer:",
      de: "Name und Sitz des Versicherers:",
      ja: "保険会社の名称および所在地:",
    }),
    insurance_name: "Insify B.V.",
    insurance_address: "Platz der Einheit 2, 60327 Frankfurt am Main",
    insurance_cover: t({
      en: "Scope of cover: worldwide (excluding the USA and Canada)",
      de: "Geltungsraum der Versicherung: weltweit (Ausnahme USA & Kanada)",
      ja: "保険の適用範囲: 全世界（米国およびカナダを除く）",
    }),
    h_consumer: t({
      en: "Consumer dispute resolution | Universal Mediation Service",
      de: "Verbraucherstreitbeilegung | Universalschlichtungsstelle",
      ja: "消費者紛争解決 | 総合調停機関",
    }),
    consumer: t({
      en: "We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.",
      de: "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
      ja: "当社は, 消費者調停機関における紛争解決手続きに参加する意思も義務も負いません.",
    }),
  },
} satisfies Dictionary;

export default legalnoteContent;
