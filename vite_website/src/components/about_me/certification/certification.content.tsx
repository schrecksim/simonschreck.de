import { t, type Dictionary } from "intlayer";
//import { type ReactNode } from "react";

const certificationContent = {
  key: "certifications",

  content: {
    h_certification: t({
      en: "Certifications",
      de: "Zertifizierungen",
      ja: "認証",
    }),
    unlimited: t({
      en: "unlimited",
      de: "unbegrenzt",
      ja: "無制限",
    }),

    title_6: t({
      en: "Data Protection Officer (TÜV)",
      de: "Datenschutzbeauftragter (TÜV)",
      ja: "データ保護責任者 (TÜV)",
    }),
    institution_6: "TÜV Nord",
    date_6: "2025/06",
    valid_until_6: "2030/03",
    id_6: "44-02-10151105-27.06.2025-DE02-2215483",

    title_5: t({
      en: "SAP User FINANCIAL ACCOUNTING (UC_FI_S42023)",
      de: "SAP User FINANCIAL ACCOUNTING (UC_FI_S42023)",
      ja: "SAPユーザー：財務会計 (UC_FI_S42023)",
    }),
    date_5: "2025/03",
    valid_until_5: "2030/03",
    id_5: "294e35ae-e9a5-488f-9782-ea42c5a3a070",

    title_4: t({
      en: "SAP User FOUNDATION LEVEL (UC_FL_S42022)",
      de: "SAP User FOUNDATION LEVEL (UC_FL_S42022)",
      ja: "SAPユーザー 基礎レベル (UC_FL_S42022)",
    }),
    institution_sap: "SAP",
    date_4: "2025/02",
    valid_until_4: "2030/02",
    id_4: "e3bedd29-ed54-4cd1-9b6a-ea916afa8c31",

    title_3: t({
      en: "Data Literacy",
      de: "Data Literacy",
      ja: "データリテラシー",
    }),
    institution_datacamp: "Datacamp",
    date_3: "2024/11",
    id_3: "DL0037149470081",

    title_2: t({
      en: "Investment Management",
      de: "Investment Management",
      ja: "投資運用",
    }),
    institution_2: "University of Geneva",
    date_2: "2022/09",
    id_2: "SRPCB4GNTKJ9",

    title_1: t({
      en: "English Certificate",
      de: "Englisch Zertifikat",
      ja: "英語修了証",
    }),
    institution_1: "EF SET",
    date_1: "2022/03",
    id_1: "Ra4VBK",
  },
} satisfies Dictionary;

export default certificationContent;
