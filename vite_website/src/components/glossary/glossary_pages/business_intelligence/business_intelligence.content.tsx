import { t, type Dictionary } from "intlayer";

const biContent = {
    key: "business_intelligence",

    content: {
        h1: t({
            en: "Business Intelligence",
            de: "Business Intelligence (BI)",
            ja: "ビジネスインテリジェンス（BI）",
        }),

        def: t({
            en: "Business Intelligence refers to the technologies, practices, and processes used by organizations to collect, integrate, analyze, and visualize business data. It helps decision-makers gain insights into performance trends, customer behavior, and operational efficiency.",
            de: "Business Intelligence (BI) umfasst Technologien, Praktiken und Prozesse, die Unternehmen nutzen, um Geschäftsdaten zu sammeln, zu integrieren, zu analysieren und visuell darzustellen. Sie unterstützt Entscheidungsträger dabei, Trends in der Leistungserbringung, Kundenverhalten und operativer Effizienz zu erkennen.",
            ja: "ビジネスインテリジェンス（BI）とは、企業が収集・統合・分析・可視化するための技術や手法・プロセスのことです。これは、パフォーマンスのトレンド、顧客行動、運用効率に関する洞察を提供し、意思決定者に役立ちます。",
        }),

        h_why: t({
            en: "Why Business Intelligence?",
            de: "Warum Business Intelligence?",
            ja: "なぜビジネスインテリジェンスが重要ですか？",
        }),
        why: t({
            en: "In today’s data-driven world, Business Intelligence provides organizations with the tools to make informed decisions based on real-time and historical data. It reduces risks by identifying patterns in customer interactions, operational inefficiencies, and market trends, enabling proactive strategies for growth.",
            de: "In unserer datengetriebenen Welt bietet Business Intelligence Unternehmen die Werkzeuge, um fundierte Entscheidungen auf Basis von Echtzeit- und historischen Daten zu treffen. Es minimiert Risiken durch Erkennung von Mustern in Kundeninteraktionen, operativen Ineffizienzen und Markttrends und ermöglicht proaktive Strategien für Wachstum.",
            ja: "現代のデータ駆動型世界において、ビジネスインテリジェンスは企業に、実時および過去のデータを基にした情報に基づいた意思決定を行うためのツールを提供します。これは顧客インタラクションや運用効率、市場トレンドにおけるパターンを見つけ出し、成長のためのプロアクティブな戦略を可能にします。",
        }),

        h_prerequisites: t({
            en: "Prerequisites for Business Intelligence",
            de: "Voraussetzungen für Business Intelligence",
            ja: "ビジネスインテリジェンスに必要な前提条件",
        }),
        prerequisites: t({
            en: "To leverage Business Intelligence effectively, ensure you have robust data collection and storage systems, trained analysts or BI specialists, and clear business objectives. Integrating data from multiple sources (e.g., ERP, CRM) and using visualization tools like Tableau or Power BI will enhance your analytics capabilities.",
            de: "Um Business Intelligence effektiv nutzen zu können, sollten Sie robuste Systeme für Datenbeschaffung und -speicherung, geschulte Analysten oder BI-Spezialisten sowie klare Geschäftsziele vorliegen. Die Integration von Daten aus mehreren Quellen (z. B. ERP, CRM) und die Nutzung von Visualisierungstools wie Tableau oder Power BI verbessern Ihre analytischen Fähigkeiten.",
            ja: "ビジネスインテリジェンスを有効活用するためには、データ収集・保存システムの強化、BI専門家やトレーニングされたアナリストの確保、および明確なビジネス目標が必要です。複数のソースからのデータ統合（ERP、CRMなど）とTableau、Power BIなどの可視化ツールを利用することで、分析能力を向上させることができます。",
        }),

        h_offer: t({
            en: "My offer for Business Intelligence",
            de: "Mein Angebot für Business Intelligence",
            ja: "私のビジネスインテリジェンスコンサルティング提案",
        }),
        offer: t({
            en: "As a Data & Business Consultant, I transform your data into actionable business insights through BI solutions.",
            de: "Als Data & Business Consultant bringe ich Expertise in die Transformation Ihrer Daten in strategisch wertvolle Informationen ein.",
            ja: "データ＆ビジネスコンサルタントとして、BIソリューションを活用し、お客様のデータを実践的なビジネスインサイトへと変換します。",
        }),
        offer_li1: t({
            en: "I optimize your data infrastructure, ensuring clean ETL processes and high-quality data for BI tools like Power BI or Tableau.",
            de: "Ich unterstütze Sie bei der Optimierung Ihrer Dateninfrastruktur (z. B. ETL-Prozesse, Datenqualitätssicherung).",
            ja: "お客様のデータインフラを最適化し、Power BIやTableauなどのBIツール向けに、正確なETLプロセスと高品質なデータを確保します。",
        }),
        offer_li2: t({
            en: "I analyze key performance indicators (KPIs) and trends to enable data-driven decision-making across departments.",
            de: "Ich analysiere KPIs und Trends, um datengetriebene Entscheidungen zu ermöglichen – von Vertrieb bis Operations.",
            ja: "主要業績評価指標（KPI）や傾向を分析し、部門横断的なデータに基づく意思決定を可能にしています。",
        }),
        offer_li3: t({
            en: "I create intuitive dashboards and reports that make complex data accessible to non-technical stakeholders.",
            de: "Ich visualisiere komplexe Daten in Dashboards und Reports, die für Nicht-Techniker verständlich sind.",
            ja: "私は、技術的な知識のない関係者でも複雑なデータを理解しやすいように、直感的なダッシュボードやレポートを作成しています。",
        }),
        offer_li4: t({
            en: "I scale your BI solutions by automating workflows or leveraging cloud technologies for efficiency and scalability.",
            de: "Ich schaffe Skalierung Ihrer BI-Lösungen, z. B. durch Automatisierung oder Cloud-Optimierungen.",
            ja: "ワークフローの自動化やクラウド技術の活用を通じて、BIソリューションの効率化と拡張性を実現します。",
        }),

        cta: t({
            en: "Your data holds untapped potential—let’s explore how we can turn it into strategic insights together!",
            de: "Ihre Daten sind wertvoll, aber wie nutzen Sie sie wirklich? Lassen Sie uns in einem unverbindlichen Gespräch besprechen, wie wir Ihre Datenanalyse optimieren.",
            ja: "お客様のデータには、まだ活用されていない大きな可能性が秘められています。その可能性を戦略的な知見へと変える方法を、ぜひ一緒に探っていきましょう！",
        }),
    },
} satisfies Dictionary;

export default biContent;