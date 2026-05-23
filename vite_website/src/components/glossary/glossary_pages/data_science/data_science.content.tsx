import { t, type Dictionary } from "intlayer";

const dataScienceContent = {
    key: "data_science",

    content: {
        h1: t({
            en: "Data Science",
            de: "Data Science",
            ja: "データサイエンス",
        }),

        def: t({
            en: "Data Science combines statistical analysis, machine learning, and domain expertise to extract meaningful insights from structured and unstructured data. It enables organizations to predict trends, automate decisions, and innovate products and services based on data-driven evidence.",
            de: "Data Science verbindet statistische Analysen, maschinelles Lernen und Fachwissen, um aussagekräftige Erkenntnisse aus strukturierten und unstrukturierten Daten zu gewinnen. Sie ermöglicht es Unternehmen, Trends vorherzusagen, Entscheidungen zu automatisieren und Produkte sowie Dienstleistungen auf Basis datengetriebener Beweise zu innovieren.",
            ja: "データサイエンスとは、構造化データおよび非構造化データから有意義な洞察を引き出すために、統計分析、機械学習、ドメインの専門知識を組み合わせる分野です。これにより、企業はトレンドを予測し、意思決定を自動化し、データに基づく証拠に基づいて製品やサービスをイノベーションすることができます。",
        }),

        h_why: t({
            en: "Why Data Science?",
            de: "Warum Data Science?",
            ja: "なぜデータサイエンスが重要ですか？",
        }),
        why: t({
            en: "Data Science helps organizations move beyond traditional analytics by leveraging advanced techniques like machine learning and AI. It unlocks the potential of big data, enabling personalized customer experiences, automated workflows, and the development of intelligent systems that learn and adapt over time.",
            de: "Data Science hilft Unternehmen, über traditionelle Analysen hinauszugehen, indem sie fortschrittliche Techniken wie maschinelles Lernen und KI nutzt. Sie erschließt das Potenzial von Big Data und ermöglicht personalisierte Kundenerlebnisse, automatisierte Workflows sowie die Entwicklung intelligenter Systeme, die lernen und sich im Laufe der Zeit anpassen.",
            ja: "データサイエンスは、機械学習やAIなどの高度なテクニックを活用することで、企業が従来のアナリティクスを超えて進化するのを支援します。ビッグデータの可能性を解き放ち、パーソナライズされた顧客体験、自動化されたワークフロー、そして時間の経過とともに学習し適応するインテリジェントシステムの開発を可能にします。",
        }),

        h_prerequisites: t({
            en: "Prerequisites for Data Science",
            de: "Voraussetzungen für Data Science",
            ja: "データサイエンスに必要な前提条件",
        }),
        prerequisites: t({
            en: "To implement Data Science effectively, your organization should have a strong data foundation (clean, well-organized data), access to advanced analytical tools and frameworks (e.g., TensorFlow, PyTorch), and a culture that embraces experimentation and innovation. Collaboration between data scientists, engineers, and business stakeholders is key to aligning models with real-world applications.",
            de: "Für die effektive Umsetzung von Data Science sollte Ihr Unternehmen eine solide Datenbasis (saubere, gut organisierte Daten), Zugang zu fortschrittlichen Analyse-Tools und -Frameworks (z. B. TensorFlow, PyTorch) sowie eine Kultur vorweisen, die Experimente und Innovation fördert. Die Zusammenarbeit zwischen Data Scientists, Ingenieuren und Fachabteilungen ist entscheidend, um Modelle mit realen Anwendungen in Einklang zu bringen.",
            ja: "データサイエンスを効果的に導入するためには、強固なデータ基盤（クリーンで整理されたデータ）、高度な分析ツールやフレームワーク（TensorFlow、PyTorchなど）へのアクセス、および実験とイノベーションを受け入れる企業文化が必要です。データサイエンティスト、エンジニア、ビジネス関係者間の協力が、モデルを実世界のアプリケーションと整合させるための鍵となります。",
        }),

        h_offer: t({
            en: "My offer for Data Science",
            de: "Mein Angebot für Data Science",
            ja: "私のデータサイエンスコンサルティング提案",
        }),
        offer: t({
            en: "As a Data & Business Consultant, I help you harness the power of Data Science to solve complex problems and create intelligent, data-driven solutions.",
            de: "Als Data & Business Consultant unterstütze ich Sie dabei, die Kraft von Data Science zu nutzen, um komplexe Probleme zu lösen und intelligente, datengetriebene Lösungen zu entwickeln.",
            ja: "データ＆ビジネスコンサルタントとして、複雑な問題を解決し、インテリジェントでデータ駆動型のソリューションを作成するために、データサイエンスの力を活用するお手伝いをします。",
        }),
        offer_li1: t({
            en: "I develop machine learning models tailored to your business needs, from recommendation systems to predictive maintenance.",
            de: "Ich entwickle auf Ihre Geschäftsbedürfnisse zugeschnittene Machine-Learning-Modelle – von Empfehlungssystemen bis hin zu präventiver Wartung.",
            ja: "お客様のビジネスニーズに合わせた機械学習モデル（レコメンドシステムから予知保全まで）を開発します。",
        }),
        offer_li2: t({
            en: "I implement natural language processing (NLP) solutions to extract insights from text data, such as customer feedback or documents.",
            de: "Ich implementiere Natural-Language-Processing-Lösungen (NLP), um Erkenntnisse aus Textdaten wie Kundenfeedback oder Dokumenten zu gewinnen.",
            ja: "テキストデータ（顧客フィードバックや文書など）から洞察を引き出すための自然言語処理（NLP）ソリューションを実装します。",
        }),
        offer_li3: t({
            en: "I design and deploy AI-driven automation to streamline operations, reduce human error, and improve efficiency.",
            de: "Ich entwerfe und setze KI-gestützte Automatisierungen ein, um Prozesse zu optimieren, menschliche Fehler zu reduzieren und die Effizienz zu steigern.",
            ja: "プロセスを合理化し、ヒューマンエラーを削減し、効率を向上させるためのAI駆動の自動化を設計・展開します。",
        }),
        offer_li4: t({
            en: "I provide end-to-end Data Science solutions, from data preparation to model deployment and monitoring in production.",
            de: "Ich biete End-to-End-Data-Science-Lösungen an – von der Datenaufbereitung bis hin zum Einsatz und Monitoring von Modellen in der Produktion.",
            ja: "データ準備からモデルの展開、本番環境でのモニタリングまで、エンドツーエンドのデータサイエンスソリューションを提供します。",
        }),

        cta: t({
            en: "The future is data-driven—let’s build intelligent solutions that transform your business!",
            de: "Die Zukunft ist datengetrieben – lassen Sie uns intelligente Lösungen entwickeln, die Ihr Unternehmen verändern!",
            ja: "未来はデータ駆動型です。ビジネスを変革するインテリジェントなソリューションを、ぜひ一緒に構築しましょう！",
        }),
    },
} satisfies Dictionary;

export default dataScienceContent;
