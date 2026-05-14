import { t, type Dictionary } from "intlayer";
//import { type ReactNode } from "react";

const aboutmeContent = {
  key: "about_me",

  content: {
    h_about_me: t({
      en: "About me",
      de: "Über mich",
      ja: "私について",
    }),
    h_intro: t({
      en: "Introduction",
      de: "Einleitung",
      ja: "はじめに",
    }),
    intro: t({
      en: "My name is Simon Schreck and I combine data consulting and business consulting into a holistic approach. As a bridge-builder between IT and management, I translate complex data into clear recommendations for action and turn strategic goals into practical solutions.",
      de: "Mein Name ist Simon Schreck und ich verbinde Data Consulting und Business Consulting zu einem ganzheitlichen Ansatz. Als Brückenbauer zwischen IT und Management übersetze ich komplexe Daten in klare Handlungsempfehlungen und setze strategische Ziele in praktische Lösungen um.",
      ja: "私の名前はSimon Schreck。データコンサルティングとビジネスコンサルティングを融合させ、包括的なアプローチを提供しています。IT部門と経営陣の架け橋として、複雑なデータを明確な行動指針へと変換し、戦略的な目標を実践的なソリューションへと具現化します。",
    }),
    h_why_me: t({
      en: "Why you should choose me:",
      de: "Warum Sie sich für mich entscheiden sollten:",
      ja: "私を選んでいただくべき理由:",
    }),
    reason: t({
      en: "My work is characterised by extensive project experience since 2019, during which I have specialised in data analysis, modelling and process optimisation. In this role, I have successfully implemented both technically challenging solutions – such as the development of a metadata mapping application for automotive data – and strategic projects, such as business analytics for international SMEs. Clients and employers particularly value my solution-oriented approach, reliability and ability to seamlessly combine technical and business requirements – a combination that sets me apart as a trusted partner for data-driven and strategic challenges.",
      de: "Meine Arbeit zeichnet umfassende Projekterfahrung seit 2019 aus, in denen ich mich auf die Datenanalyse, -modellierung und Prozessoptimierung spezialisiert habe. Dabei habe ich sowohl technisch anspruchsvolle Lösungen wie die Entwicklung einer Metadaten-Mapping-Applikation für Automobildaten als auch strategische Projekte wie Business Analytics für internationale Mittelständler erfolgreich umgesetzt. Kunden und Arbeitgeber schätzen besonders meine lösungsorientierte Herangehensweise, Zuverlässigkeit und die Fähigkeit, technische und betriebswirtschaftliche Anforderungen nahtlos zu verbinden – eine Kombination, die mich als vertrauenswürdigen Partner für datengetriebene und strategische Herausforderungen auszeichnet.",
      ja: "2019年以降、データ分析、モデリング、プロセス最適化を専門とする幅広いプロジェクト経験を積んできました。その過程で、自動車データ向けのメタデータマッピングアプリケーションの開発といった技術的に高度なソリューションから、国際的な中堅企業向けのビジネスアナリティクスといった戦略的プロジェクトまで、様々な案件を成功裏に遂行してきました。クライアントや雇用主からは、特に私のソリューション志向のアプローチ、信頼性、そして技術的要件と経営的要件をシームレスに結びつける能力が高く評価されています。こうした資質の組み合わせが、データ駆動型および戦略的な課題において、私を信頼できるパートナーとして際立たせているのです。",
    }),
    about_me_link: t({
      en: "more about me",
      de: "mehr über mich",
      ja: "私のことについて",
    }),
  },
} satisfies Dictionary;

export default aboutmeContent;
