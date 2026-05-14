import { t, type Dictionary } from "intlayer";
//import { type ReactNode } from "react";

const occupationContent = {
  key: "occupations",

  content: {
    h_occupation: t({
      en: "Occupations",
      de: "Berufliche Stationen",
      ja: "職業",
    }),
    current: t({
      en: "current",
      de: "aktuell",
      ja: "現在の",
    }),

    title_se: t({
      en: "Data & Businesss Consultant",
      de: "Daten- und Unternehmensberater",
      ja: "データ・ビジネスコンサルタント",
    }),
    se: t({
      en: "self-employed",
      de: "selbstständig",
      ja: "自営業",
    }),
    location_se: "Stuttgart",
    start_se: "2024/12",
    description_se: t({
      en: "",
      de: "",
      ja: "",
    }),

    title_tu_consultant: t({
      en: "IT Consultant",
      de: "IT Consultant",
      ja: "ITコンサルタント",
    }),
    location_tu_consultant: "Ludwigshafen am Rhein & Stuttgart",
    start_tu_consultant: "2022/09",
    end_tu_consultant: "2024/11",
    description_tu_consultant: t({
      en: "",
      de: "",
      ja: "",
    }),

    title_ausbildung: t({
      en: "Vocational training to become a computer scientist",
      de: "Ausbildung zum Informatiker",
      ja: "コンピュータ科学者になるための職業訓練",
    }),
    location_ausbildung: "Ludwigshafen am Rhein",
    start_ausbildung: "2019/08",
    end_ausbildung: "2022/08",
    description_ausbildung: t({
      en: "",
      de: "",
      ja: "",
    }),

    title_tu_journalist: t({
      en: "Technical Journalist (junior)",
      de: "Technischer Journalist (junior)",
      ja: "技術系ジャーナリスト（ジュニア）",
    }),
    tuteco: "tuteco GmbH",
    location_tu_journalist: "Lörrach",
    start_tu_journalist: "2018/01",
    end_tu_journalist: "2019/07",
    description_tu_journalist: t({
      en: "",
      de: "",
      ja: "",
    }),
  },
} satisfies Dictionary;

export default occupationContent;
