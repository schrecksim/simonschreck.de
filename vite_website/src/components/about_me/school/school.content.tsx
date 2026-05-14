import { t, type Dictionary } from "intlayer";
//import { type ReactNode } from "react";

const aboutmeContent = {
  key: "schools",

  content: {
    h_school: t({
      en: "Education",
      de: "Bildung",
      ja: "教育",
    }),

    bachelor_title: t({
      en: "B.A. Finance & Banking",
      de: "B.A. Finance & Banking",
      ja: "金融・銀行学 学士号",
    }),
    fom: "FOM Hochschule für Oekonomie & Management",
    start_bachelor: "2023/09",
    end_bachelor: "2027/02",

    betriebswirt: t({
      en: "Business administrator",
      de: "Betriebswirt",
      ja: "経営学士",
    }),
    wa: "WA Pfalz",
    start_betriebswirt: "2019/09",
    end_betriebswirt: "2022/11",

    fhr: t({
      en: "University of Applied Sciences Entrance Qualification",
      de: "Fachhochschulreife (Technik)",
      ja: "高等専門学校入学資格",
    }),
    start_fhr: "2017/09",
    end_fhr: "2019/07",

    efs: t({
      en: "Technical College Entrance Qualification (Electrical Engineering)",
      de: "Fachschulreife (Elektrotechnik)",
      ja: "専門学校入学資格（電気工学）",
    }),
    gsw: "Gewerbliche Schulen Waldshut",
    start_efs: "2015/09",
    end_efs: "2017/07",
  },
} satisfies Dictionary;

export default aboutmeContent;
