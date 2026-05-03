import { t, type Dictionary } from "intlayer";
//import { type ReactNode } from "react";

const glossaryContent = {
    key: "glossary",

    content: {
        t_data_consulting: t({
            en: "Data Consulting",
            de: "Datenberatung",
            ja: "データコンサルティング",
        }),
        d_data_consulting: t({
            en: "The process of analyzing, interpreting, and providing insights from data to help businesses make informed decisions.",
            de: "Der Prozess der Analyse, Interpretation und Gewinnung von Erkenntnissen aus Daten, um Unternehmen dabei zu unterstützen, fundierte Entscheidungen zu treffen.",
            ja: "データを分析・解釈し, そこから得られた知見を提供することで, 企業が情報に基づいた意思決定を行えるようにするプロセス.",
        }),
        t_business_consulting: t({
            en: "Business Consulting",
            de: "Unternehmensberatung",
            ja: "経営コンサルティング",
        }),
        d_business_consulting: t({
            en: "Advisory services provided by experts or firms to help organizations improve their performance, efficiency, and profitability through strategic planning, optimization, and problem-solving.",
            de: "Beratungsdienstleistungen, die von Experten oder Unternehmen erbracht werden, um Organisationen dabei zu unterstützen, ihre Leistung, Effizienz und Rentabilität durch strategische Planung, Optimierung und Problemlösung zu verbessern.",
            ja: "専門家や企業が提供するコンサルティングサービス. 戦略的計画策定、業務の最適化, 問題解決を通じて, 組織の業績、効率性, 収益性の向上を支援するものである.",
        }),
    },
} satisfies Dictionary;

export default glossaryContent;