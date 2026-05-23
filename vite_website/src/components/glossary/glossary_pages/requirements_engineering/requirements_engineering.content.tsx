import { t, type Dictionary } from "intlayer";

const reContent = {
    key: "requirements_engineering",

    content: {
        h1: t({
            en: "Requirements Engineering",
            de: "Anforderungemanagement (Requirements Engineering)",
            ja: "要求工学（リクエストエンジニアリング）",
        }),

        def: t({
            en: "Requirements Engineering is the systematic process of identifying, documenting, and managing stakeholder requirements to ensure they are met in software or system development. It bridges the gap between business needs and technical implementation.",
            de: "Anforderungemanagement ist der systematische Prozess zur Identifizierung, Dokumentation und Steuerung von Stakeholder-Anforderungen, um sicherzustellen, dass sie im Software- oder Systementwicklungsprozess erfüllt werden. Es verbindet Geschäftsanforderungen mit technischer Umsetzung.",
            ja: "要求工学は、利用者の要望を把握・記録・管理する手法で、ソフトウェアやシステム開発において必要な機能や仕様を明確にするプロセスです。ビジネスニーズと技術的実装の間を橋渡しします。",
        }),

        h_why: t({
            en: "Why Requirements Engineering?",
            de: "Warum Anforderungemanagement?",
            ja: "なぜ要求工学が重要ですか？",
        }),
        why: t({
            en: "Effective requirements management is crucial for delivering high-quality software that meets user needs and business objectives. Poorly defined or changing requirements can lead to costly rework, delays, and dissatisfaction among stakeholders.",
            de: "Effektives Anforderungemanagement ist entscheidend für die Lieferung hochwertiger Software, die Nutzerbedürfnisse und Geschäftsziele erfüllt. Unklar oder sich ändernde Anforderungen können zu teuren Nacharbeiten, Verzögerungen und Unzufriedenheit bei Stakeholdern führen.",
            ja: "要求管理が効果的に行われることは、ユーザーのニーズやビジネス目標に沿った高品質なソフトウェア開発を実現するために重要です。不明確で変化する要望は、コスト増加や遅延、利用者からの不満を招く可能性があります。",
        }),

        h_prerequisites: t({
            en: "Prerequisites for Requirements Engineering",
            de: "Voraussetzungen für Anforderungemanagement",
            ja: "要求工学に必要な前提条件",
        }),
        prerequisites: t({
            en: "To successfully implement Requirements Engineering, ensure you have clear stakeholder communication channels, documented processes for requirements gathering, and a structured methodology for prioritizing and validating requirements. Tools like Jira, Confluence, or Agile frameworks can support this process.",
            de: "Für eine erfolgreiche Umsetzung des Anforderungemanagements sind klare Kommunikationswege mit Stakeholdern, dokumentierte Prozesse zur Anforderungenbeschaffung sowie eine strukturierte Methodik zur Priorisierung und Validierung der Anforderungen erforderlich. Tools wie Jira, Confluence oder Agile-Frameworks können diesen Prozess unterstützen.",
            ja: "要求工学を成功させるためには、利用者との明確なコミュニケーションチャネル、要望収集のための文書化されたプロセス、および優先順位付けや検証に適した構造化された手法が必要です。Jira、Confluence、またはアジャイルフレームワークなどのツールを利用することで、このプロセスを支援できます。",
        }),

        h_offer: t({
            en: "My offer for Requirements Engineering",
            de: "Mein Angebot für Anforderungemanagement",
            ja: "私の要求工学コンサルティング提案",
        }),
        offer: t({
            en: "As a Data & Business Consultant, I provide structured support for defining and managing requirements across digital projects.",
            de: "Als Data & Business Consultant unterstütze ich Sie bei der systematischen Analyse und Definition von Anforderungen für digitale Lösungen.",
            ja: "データ＆ビジネスコンサルタントとして、デジタルプロジェクト全般における要件の定義と管理について、体系的なサポートを提供しています。",
        }),
        offer_li1: t({
            en: "I facilitate clear communication with stakeholders through use-case mapping or MoSCoW prioritization.",
            de: "Ich helfe Ihnen dabei, Stakeholder-Kommunikation zu strukturieren (z. B. durch Use-Case-Mapping oder Priorisierung nach MoSCoW-Methode).",
            ja: "ユースケースのマッピングやMoSCoWによる優先順位付けを通じて、ステークホルダーとの明確なコミュニケーションを促進します。",
        }),
        offer_li2: t({
            en: "I bridge the gap between technical and business requirements by creating clear documentation (e.g., requirements documents, user stories).",
            de: "Ich unterstütze Sie bei der Abgrenzung technischer und geschäftlicher Anforderungen und setze diese in verständliche Dokumente um.",
            ja: "私は、明確なドキュメント（要件定義書やユーザーストーリーなど）を作成することで、技術要件とビジネス要件の橋渡しを行います。",
        }),
        offer_li3: t({
            en: "I implement agile methodologies like Scrum or Kanban to enable iterative collaboration with customers and teams.",
            de: "Ich helfe Ihnen bei der Implementierung agiler Methoden wie Scrum oder Kanban für iteratives Arbeiten mit Kunden und Teams.",
            ja: "スクラムやカンバンといったアジャイル手法の導入を支援し、お客様やチームとの反復的な業務を実現します。",
        }),
        offer_li4: t({
            en: "I identify risks early through validation of requirements using prototypes or pilot projects.",
            de: "Ich erkenne Risiken frühzeitig, z. B. durch Validierung von Anforderungen mit Prototypen oder Pilotprojekten.",
            ja: "プロトタイプやパイロットプロジェクトを用いて要件検証を行うことで、リスクを早期に特定します。",
        }),

        cta: t({
            en: "Struggling to define clear and actionable requirements for your project? Let’s discuss how we can structure them together—without overwhelming you!",
            de: "Sie stehen vor der Herausforderung, klare und realistische Anforderungen für Ihr Projekt zu definieren? Melden Sie sich für eine unverbindliche Beratung an! Gemeinsam entwickeln wir einen maßgeschneiderten Ansatz.",
            ja: "プロジェクトの明確で実行可能な要件を定義するのに苦労していませんか？負担をかけすぎることなく、一緒に要件を整理する方法について話し合いましょう！",
        }),
    },
} satisfies Dictionary;

export default reContent;