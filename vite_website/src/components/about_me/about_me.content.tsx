import { t, type Dictionary } from "intlayer";
//import { type ReactNode } from "react";

const aboutmeContent = {
  key: "about_me_card",

  content: {
    h_about_me: t({
      en: "About me",
      de: "Über mich",
      ja: "私について",
    }),
    intro: t({
      en: "I'm an IT and management consultant specializing in data engineering, analysis and modeling. For over six years, I've been developing effective solutions and optimizing data processes in agile teams.",
      de: "Ich bin ein IT-Berater mit Schwerpunkt auf Data Engineering, Analyse und Modelling. Seit über sechs Jahren entwickle ich effektive Lösungen und optimiere Datenprozesse in agilen Teams.",
      ja: "私は IT および経営コンサルタントで、データエンジニアリング、分析、モデリングを専門としています。6 年以上にわたり、アジャイルなチームで効果的なソリューションを開発し、データプロセスを最適化してきました。",
    }),
    h_why_me: t({
      en: "Why you should choose me:",
      de: "Warum Sie sich für mich entscheiden sollten:",
      ja: "私を選んでいただくべき理由:",
    }),
    reason: t({
      en: "I combine technical expertise with business acumen, paired with the ability to listen, to leverage data-driven potential for your projects. My goal is to deliver customized and scalable solutions that meet your requirements and create real value.",
      de: "Ich kombiniere technisches Fachwissen mit betriebswirtschaftlichem Verständnis, gepaart mit der Fähigkeit zuzuhören, um datengetriebene Potenziale für Ihre Projekte zu nutzen. Mein Ziel ist es, maßgeschneiderte und skalierbare Lösungen zu liefern, die Ihre Anforderungen erfüllen und echten Mehrwert schaffen.",
      ja: "私は技術的な専門知識とビジネスの知識を組み合わせ, データ駆動型の可能性を活用するための聴く能力を備えています. 私の目標は、お客様の要件を満たし, 実現可能な価値を創造するカスタマイズ可能でスケーラブルなソリューションを提供することです.",
    }),
  },
} satisfies Dictionary;

export default aboutmeContent;
