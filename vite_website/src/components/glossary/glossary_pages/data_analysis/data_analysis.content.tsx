import { t, type Dictionary } from "intlayer";

const dataAnalysisContent = {
    key: "data_analysis",

    content: {
        h1: t({
            en: "Data Analysis",
            de: "Data Analysis",
            ja: "データ分析",
        }),

        def: t({
            en: "Data Analysis involves examining, cleaning, transforming, and modeling data to discover useful information, draw conclusions, and support decision-making. It turns raw data into actionable insights that drive business strategies and operational improvements.",
            de: "Data Analysis umfasst die Untersuchung, Bereinigung, Transformation und Modellierung von Daten, um nützliche Informationen zu entdecken, Schlussfolgerungen zu ziehen und Entscheidungsfindungen zu unterstützen. Sie verwandelt Rohdaten in umsetzbare Erkenntnisse, die Geschäftsstrategien und operative Verbesserungen vorantreiben.",
            ja: "データ分析とは、データを検証、クレンジング、変換、モデリングすることで、有用な情報を発見し、結論を導き出し、意思決定を支援するプロセスです。生データをビジネス戦略や業務改善を推進する実行可能な洞察に変換します。",
        }),

        h_why: t({
            en: "Why Data Analysis?",
            de: "Warum Data Analysis?",
            ja: "なぜデータ分析が重要ですか？",
        }),
        why: t({
            en: "Data Analysis empowers organizations to understand past performance, identify current trends, and predict future outcomes. By uncovering patterns and correlations in data, businesses can optimize processes, reduce costs, and enhance customer experiences, leading to competitive advantages.",
            de: "Data Analysis befähigt Unternehmen, vergangene Leistungen zu verstehen, aktuelle Trends zu erkennen und zukünftige Ergebnisse vorherzusagen. Durch das Aufdecken von Mustern und Korrelationen in Daten können Unternehmen Prozesse optimieren, Kosten senken und Kundenerlebnisse verbessern, was zu Wettbewerbsvorteilen führt.",
            ja: "データ分析は、組織が過去のパフォーマンスを理解し、現在のトレンドを特定し、将来の結果を予測する力を与えます。データ内のパターンや相関関係を明らかにすることで、企業はプロセスを最適化し、コストを削減し、顧客体験を向上させ、競争優位性を獲得することができます。",
        }),

        h_prerequisites: t({
            en: "Prerequisites for Data Analysis",
            de: "Voraussetzungen für Data Analysis",
            ja: "データ分析に必要な前提条件",
        }),
        prerequisites: t({
            en: "To perform effective Data Analysis, your organization needs access to reliable and well-structured data, analytical tools (e.g., Python, R, SQL), and a team with statistical and domain expertise. A data-driven mindset across departments ensures that insights are acted upon and aligned with business objectives.",
            de: "Für eine effektive Data Analysis benötigt Ihr Unternehmen Zugang zu zuverlässigen und gut strukturierten Daten, analytische Tools (z. B. Python, R, SQL) sowie ein Team mit statistischem und fachlichem Know-how. Eine datengetriebene Denkweise in allen Abteilungen stellt sicher, dass Erkenntnisse umgesetzt und mit den Unternehmenszielen abgestimmt werden.",
            ja: "効果的なデータ分析を行うためには、信頼性が高くよく構造化されたデータへのアクセス、分析ツール（Python、R、SQLなど）、および統計学とドメインの専門知識を持つチームが必要です。部門横断的なデータ駆動型のマインドセットは、洞察が実行され、ビジネス目標と整合されることを保証します。",
        }),

        h_offer: t({
            en: "My offer for Data Analysis",
            de: "Mein Angebot für Data Analysis",
            ja: "私のデータ分析コンサルティング提案",
        }),
        offer: t({
            en: "As a Data & Business Consultant, I turn your raw data into clear, actionable insights that drive smarter business decisions.",
            de: "Als Data & Business Consultant verwandle ich Ihre Rohdaten in klare, umsetzbare Erkenntnisse, die intelligentere Geschäftsentscheidungen ermöglichen.",
            ja: "データ＆ビジネスコンサルタントとして、お客様の生データを、より賢明なビジネス意思決定を推進する明確で実行可能な洞察に変換します。",
        }),
        offer_li1: t({
            en: "I clean, preprocess, and structure your data to ensure accuracy and consistency for analysis.",
            de: "Ich bereinige, vorbereite und strukturiere Ihre Daten, um Genauigkeit und Konsistenz für die Analyse zu gewährleisten.",
            ja: "お客様のデータをクレンジング、前処理、構造化し、分析の正確性と整合性を確保します。",
        }),
        offer_li2: t({
            en: "I perform exploratory and statistical analysis to uncover hidden patterns, trends, and correlations in your data.",
            de: "Ich führe explorative und statistische Analysen durch, um verborgene Muster, Trends und Korrelationen in Ihren Daten aufzudecken.",
            ja: "探索的および統計的分析を実施し、データ内に隠れたパターン、トレンド、相関関係を明らかにします。",
        }),
        offer_li3: t({
            en: "I develop predictive models to forecast key metrics and support proactive decision-making.",
            de: "Ich entwickle präskriptive Modelle, um wichtige Kennzahlen vorherzusagen und proaktive Entscheidungsfindungen zu unterstützen.",
            ja: "主要な指標を予測し、プロアクティブな意思決定を支援するための予測モデルを開発します。",
        }),
        offer_li4: t({
            en: "I create visualizations and reports that communicate insights effectively to stakeholders at all levels.",
            de: "Ich erstelle Visualisierungen und Berichte, die Erkenntnisse allen Stakeholdern verständlich vermitteln.",
            ja: "洞察をすべてのレベルの関係者に効果的に伝えるビジュアライゼーションやレポートを作成します。",
        }),

        cta: t({
            en: "Your data tells a story—let’s uncover it and turn insights into action together!",
            de: "Ihre Daten erzählen eine Geschichte – lassen Sie uns gemeinsam die Erkenntnisse freilegen und in Handlungen umsetzen!",
            ja: "お客様のデータには物語があります。それを一緒に明らかにし、洞察を行動に変えていきましょう！",
        }),
    },
} satisfies Dictionary;

export default dataAnalysisContent;
