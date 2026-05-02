import { t, type Dictionary } from "intlayer";
//import { type ReactNode } from "react";

const glossaryContent = {
    key: "glossary",

    content: {
        t_data_consulting: t({
            en: "Data Consulting",
            de: "...",
            ja: "...",
        }),
        d_data_consulting: t({
            en: "The process of analyzing, interpreting, and providing insights from data to help businesses make informed decisions.",
            de: "...",
            ja: "...",
        }),
        t_business_consulting: t({
            en: "Business Consulting",
            de: "...",
            ja: "...",
        }),
        d_business_consulting: t({
            en: "Advisory services provided by experts or firms to help organizations improve their performance, efficiency, and profitability through strategic planning, optimization, and problem-solving.",
            de: "...",
            ja: "...",
        }),
    },
} satisfies Dictionary;

export default glossaryContent;