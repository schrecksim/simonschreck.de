import { t, type Dictionary } from "intlayer";

const dataEngineeringContent = {
    key: "data_engineering",

    content: {
        h1: t({
            en: "Data Engineering",
            de: "Data Engineering",
            ja: "データエンジニアリング",
        }),

        def: t({
            en: "Data Engineering involves the design, construction, and maintenance of data architectures and pipelines that enable reliable, scalable, and efficient data processing. It forms the foundation for analytics, machine learning, and business intelligence.",
            de: "Data Engineering umfasst den Entwurf, den Aufbau und die Wartung von Datenarchitekturen und -pipelines, die eine zuverlässige, skalierbare und effiziente Datenverarbeitung ermöglichen. Es bildet die Grundlage für Analysen, maschinelles Lernen und Business Intelligence.",
            ja: "データエンジニアリングとは、信頼性が高く、スケーラブルで効率的なデータ処理を可能にするデータアーキテクチャやパイプラインの設計、構築、および保守を行う分野です。これは、アナリティクス、機械学習、ビジネスインテリジェンスの基盤を形成します。",
        }),

        h_why: t({
            en: "Why Data Engineering?",
            de: "Warum Data Engineering?",
            ja: "なぜデータエンジニアリングが重要ですか？",
        }),
        why: t({
            en: "In a data-driven organization, Data Engineering ensures that high-quality data is available, accessible, and actionable. It eliminates data silos, improves data integrity, and enables real-time processing, allowing businesses to respond quickly to market changes and customer needs.",
            de: "In einem datengetriebenen Unternehmen stellt Data Engineering sicher, dass hochwertige Daten verfügbar, zugänglich und nutzbar sind. Es beseitigt Datensilos, verbessert die Datenintegrität und ermöglicht die Echtzeitverarbeitung, sodass Unternehmen schnell auf Marktveränderungen und Kundenbedürfnisse reagieren können.",
            ja: "データ駆動型の組織において、データエンジニアリングは、高品質なデータが利用可能で、アクセスしやすく、実行可能であることを保証します。データサイロを排除し、データの完全性を向上させ、リアルタイム処理を可能にすることで、企業は市場の変化や顧客のニーズに迅速に対応できるようになります。",
        }),

        h_prerequisites: t({
            en: "Prerequisites for Data Engineering",
            de: "Voraussetzungen für Data Engineering",
            ja: "データエンジニアリングに必要な前提条件",
        }),
        prerequisites: t({
            en: "To implement Data Engineering successfully, your organization should have a clear data strategy, scalable storage solutions (e.g., data lakes or warehouses), and a culture that values data quality and governance. Additionally, cross-functional collaboration between IT, data teams, and business units is essential to align technical solutions with business goals.",
            de: "Für die erfolgreiche Umsetzung von Data Engineering sollte Ihr Unternehmen eine klare Datenstrategie, skalierbare Speicherlösungen (z. B. Data Lakes oder Data Warehouses) sowie eine Unternehmenskultur vorweisen, die Datenqualität und -governance schätzt. Zudem ist die interdisziplinäre Zusammenarbeit zwischen IT, Datenteams und Fachabteilungen entscheidend, um technische Lösungen mit den Unternehmenszielen in Einklang zu bringen.",
            ja: "データエンジニアリングを成功裏に導入するためには、明確なデータ戦略、スケーラブルなストレージソリューション（データレークやデータウェアハウスなど）、およびデータの品質とガバナンスを重視する企業文化が必要です。さらに、IT、データチーム、ビジネス部門間のクロスファンクショナルな協力が不可欠であり、技術的ソリューションをビジネス目標と整合させる必要があります。",
        }),

        h_offer: t({
            en: "My offer for Data Engineering",
            de: "Mein Angebot für Data Engineering",
            ja: "私のデータエンジニアリングコンサルティング提案",
        }),
        offer: t({
            en: "As a Data & Business Consultant, I help you build a robust and scalable data infrastructure that powers your analytics and AI initiatives.",
            de: "Als Data & Business Consultant unterstütze ich Sie beim Aufbau einer robusten und skalierbaren Dateninfrastruktur, die Ihre Analysen und KI-Initiativen vorantreibt.",
            ja: "データ＆ビジネスコンサルタントとして、アナリティクスやAIイニシアチブを支える堅牢でスケーラブルなデータインフラの構築をサポートします。",
        }),
        offer_li1: t({
            en: "I design and implement scalable data pipelines (batch and real-time) to ensure seamless data flow from source to destination.",
            de: "Ich entwerfe und implementiere skalierbare Datenpipelines (Batch und Echtzeit), um einen nahtlosen Datenfluss von der Quelle zum Ziel zu gewährleisten.",
            ja: "スケーラブルなデータパイプライン（バッチおよびリアルタイム）を設計・実装し、ソースからターゲットへのシームレスなデータフローを確保します。",
        }),
        offer_li2: t({
            en: "I optimize your data storage solutions (e.g., data lakes, warehouses) for performance, cost-efficiency, and ease of access.",
            de: "Ich optimiere Ihre Datenspeicherlösungen (z. B. Data Lakes, Data Warehouses) in Bezug auf Leistung, Kosteneffizienz und Zugriffsfreundlichkeit.",
            ja: "データレークやデータウェアハウスなどのストレージソリューションを、パフォーマンス、コスト効率、アクセスのしやすさの面で最適化します。",
        }),
        offer_li3: t({
            en: "I ensure data quality, consistency, and governance through automated validation, monitoring, and metadata management.",
            de: "Ich sorge für Datenqualität, -konsistenz und -governance durch automatisierte Validierung, Überwachung und Metadatenverwaltung.",
            ja: "自動化されたバリデーション、モニタリング、メタデータ管理を通じて、データの品質、整合性、ガバナンスを確保します。",
        }),
        offer_li4: t({
            en: "I integrate disparate data sources into a unified architecture, breaking down silos and enabling holistic insights.",
            de: "Ich integriere verteilte Datenquellen in eine einheitliche Architektur, um Datensilos abzubauen und ganzheitliche Erkenntnisse zu ermöglichen.",
            ja: "分散したデータソースを統合アーキテクチャに統合し、データサイロを解消して包括的な洞察を可能にします。",
        }),

        cta: t({
            en: "Your data infrastructure is the backbone of your business—let’s build it to scale and drive innovation together!",
            de: "Ihre Dateninfrastruktur ist das Rückgrat Ihres Unternehmens – lassen Sie uns gemeinsam eine skalierbare und innovativen Lösungen aufbauen!",
            ja: "お客様のデータインフラはビジネスの根幹です。スケール可能でイノベーションを駆動するインフラを、ぜひ一緒に構築しましょう！",
        }),
    },
} satisfies Dictionary;

export default dataEngineeringContent;
