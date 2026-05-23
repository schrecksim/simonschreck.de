import { t, type Dictionary } from "intlayer";

const glossaryContent = {
    key: "glossary",

    content: {
        h1: t({
            en: "Glossary",
            de: "Glossar",
            ja: "用語集",
        }),
        intro: t({
            en: "Here you will find definitions of terms that I come across in my day-to-day consulting work. Please do not hesitate to contact me if you have any questions on topics not listed here.",
            de: "Hier finden Sie Definitionen zu Begriffen die mir ein meinem Beratungsalltag begegnen. Zögern Sie nicht mich zu kontaktieren, falls Sie Themen haben, die hier nicht aufgeführt sind.",
            ja: "ここでは、私が日々のコンサルティング業務でよく目にする用語の定義を掲載しています。ここに記載されていないテーマについてご質問がある場合は、お気軽に連絡ください。",
        }),


        t_data_consulting: t({
            en: "Data Consulting",
            de: "Datenberatung",
            ja: "データコンサルティング",
        }),
        d_data_consulting: t({
            en: "Data Consulting helps companies leverage data as a strategic success factor. The aim is to transform unstructured or scattered data into actionable insights, enabling well-informed decisions and unlocking new potential.",
            de: "Data Consulting unterstützt Unternehmen dabei, Daten als strategischen Erfolgsfaktor zu nutzen. Es geht darum, unstrukturierte oder verstreute Daten in handlungsrelevante Erkenntnisse zu verwandeln, um fundierte Entscheidungen zu treffen und neue Potenziale zu erschließen.",
            ja: "データコンサルティングは、企業がデータを戦略的な成功要因として活用できるよう支援します。その目的は、構造化されていないデータや散在するデータを、実務に役立つ知見へと変換し、確かな根拠に基づいた意思決定を行い、新たな可能性を切り拓くことにあります。",
        }),
        h_problems_data: t({
            en: "Challenges for your business:",
            de: "Herausforderungen für Ihr Unternehmen:",
            ja: "貴社が直面する課題：",
        }),
        l1b_problems_data: t({
            en: "Data chaos: ",
            de: "Datenchaos: ",
            ja: "データの混乱：",
        }),
        l1_problems_data: t({
            en: "Outdated systems, inconsistent data sources and a lack of standardisation hinder analysis and lead to inefficiencies and poor decision-making.",
            de: "Veraltete Systeme, inkonsistente Datenquellen und fehlende Harmonisierung behindern die Analyse und führen zu Ineffizienzen und Fehlentscheidungen.",
            ja: "旧式のシステム、一貫性のないデータソース、そして標準化の欠如は、分析の妨げとなり、非効率や誤った意思決定を招いています。",
        }),
        l2b_problems_data: t({
            en: "Lack of data transparency: ",
            de: "Fehlende Datentransparenz: ",
            ja: "データの透明性の欠如：",
        }),
        l2_problems_data: t({
            en: "decisions are based on gut feeling rather than facts – with risks for costs, quality and competitiveness.",
            de: "Entscheidungen basieren auf Bauchgefühl statt auf Fakten – mit Risiken für Kosten, Qualität und Wettbewerbsfähigkeit.",
            ja: "意思決定が事実ではなく直感に基づいて行われ、コスト、品質、競争力にリスクをもたらしている。",
        }),
        l3b_problems_data: t({
            en: "Limitations of scalability: ",
            de: "Skalierungsgrenzen: ",
            ja: "スケーラビリティの限界：",
        }),
        l3_problems_data: t({
            en: "Manual processes and rigid data architectures hinder growth and prevent the use of AI or advanced analytics.",
            de: "Manuelle Prozesse und starre Datenarchitekturen bremsen das Wachstum und verhindern die Nutzung von KI oder Advanced Analytics.",
            ja: "手作業によるプロセスや柔軟性に欠けるデータアーキテクチャは、成長を阻害し、AIや高度な分析技術の活用を妨げている。",
        }),

        t_business_consulting: t({
            en: "Business Consulting",
            de: "Unternehmensberatung",
            ja: "経営コンサルティング",
        }),
        d_business_consulting: t({
            en: "Business consulting aims to design strategies, processes and structures in such a way that companies remain agile, competitive and future-proof. The focus is on adapting to market changes and optimising operational efficiency.",
            de: "Business Consulting zielt darauf ab, Strategien, Prozesse und Strukturen so zu gestalten, dass Unternehmen agil, wettbewerbsfähig und zukunftssicher bleiben. Im Fokus stehen die Anpassung an Marktveränderungen und die Optimierung der operativen Effizienz.",
            ja: "ビジネスコンサルティングは、企業が俊敏性を保ち、競争力を維持し、将来にわたって持続可能な状態を維持できるよう、戦略、プロセス、組織体制を構築することを目的としています。その焦点は、市場の変化への適応と、業務効率の最適化にあります。",
        }),
        h_problems_business: t({
            en: "Challenges for your business:",
            de: "Herausforderungen für Ihr Unternehmen:",
            ja: "貴社が直面する課題：",
        }),
        l1b_problems_business: t({
            en: "Strategic gaps: ",
            de: "Strategische Lücken: ",
            ja: "戦略上の課題：",
        }),
        l1_problems_business: t({
            en: "Failure to adapt to market changes leads to a decline in turnover and margins.",
            de: "Fehlende Anpassung an Marktveränderungen führt zu Umsatz- und Margenverlusten.",
            ja: "市場の変化への対応不足は、売上高と利益率の低下を招く。",
        }),
        l2b_problems_business: t({
            en: "Process inefficiencies: ",
            de: "Prozessineffizienzen: ",
            ja: "プロセスの非効率性：",
        }),
        l2_problems_business: t({
            en: "Manual workflows, siloed systems and a lack of digitalisation drive up costs and hamper productivity.",
            de: "Manuelle Abläufe, Insellösungen und mangelnde Digitalisierung treiben Kosten hoch und bremsen die Produktivität.",
            ja: "手作業による業務、孤立したシステム、デジタル化の遅れがコストを押し上げ、生産性を低下させている。",
        }),
        l3b_problems_business: t({
            en: "Technological hurdles: ",
            de: "Technologische Hürden: ",
            ja: "技術的な障壁：",
        }),
        l3_problems_business: t({
            en: "Outdated systems or a lack of tools hinder collaboration, scalability and innovation.",
            de: "Veraltete Systeme oder fehlende Tools behindern die Zusammenarbeit, Skalierung und Innovation.",
            ja: "旧式のシステムやツールの不足が、連携、拡張、そしてイノベーションの妨げとなっている。",
        }),

        h_specific_topics: t({
            en: "Specific topics: ",
            de: "Spezifische Themen: ",
            ja: "具体的なテーマ：",
        }),
    },
} satisfies Dictionary;

export default glossaryContent;