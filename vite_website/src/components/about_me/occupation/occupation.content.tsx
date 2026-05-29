import { t, type Dictionary } from "intlayer";

const occupationContent = {
  key: "occupations",

  content: {
    h_occupation: t({
      en: "Occupations",
      de: "Berufliche Stationen",
      ja: "職業",
    }),
    current: t({
      en: "current",
      de: "aktuell",
      ja: "現在の",
    }),

    // Self-employed (se)
    title_se: t({
      en: "Data & Businesss Consultant",
      de: "Daten- und Unternehmensberater",
      ja: "データ・ビジネスコンサルタント",
    }),
    se: t({
      en: "self-employed",
      de: "selbstständig",
      ja: "自営業",
    }),
    location_se: "Stuttgart",
    start_se: "2024/12",
    end_se: "",
    description_se: t({
      en: "As a self-employed Data & Business Consultant, I focus on helping companies leverage data-driven solutions to improve their market position and operational efficiency. My services include strategic business analytics, Google Ads campaign management, SAP Fiori migration support, and financial portfolio analysis. I combine technical expertise in data engineering with business acumen to deliver tailored solutions that drive measurable results.",
      de: "Als selbstständiger Daten- und Unternehmensberater konzentriere ich mich darauf, Unternehmen dabei zu unterstützen, datengetriebene Lösungen zu nutzen, um ihre Marktposition und operative Effizienz zu verbessern. Meine Dienstleistungen umfassen strategische Business Analytics, Google Ads Kampagnenmanagement, Unterstützung bei der SAP Fiori Migration und Finanzportfolioanalysen. Ich verbinde technisches Fachwissen im Bereich Data Engineering mit betriebswirtschaftlichem Verständnis, um maßgeschneiderte Lösungen zu liefern, die messbare Ergebnisse erzielen.",
      ja: "自営のデータ・ビジネスコンサルタントとして、企業がデータ駆動型ソリューションを活用して市場地位と運用効率を向上させる支援に重点を置いています。私のサービスには、戦略的なビジネスアナリティクス、Google Ads キャンペーン管理、SAP Fiori 移行支援、金融ポートフォリオ分析などが含まれます。データエンジニアリングの技術的専門知識とビジネスセンスを組み合わせ、測定可能な結果をもたらすカスタマイズされたソリューションを提供します。",
    }),
    desc_se_li1b: t({
      en: "Google Ads Strategy & Online Marketing",
      de: "Google Ads Strategie & Online-Marketing",
      ja: "Google Ads 戦略とオンラインマーケティング",
    }),
    desc_se_li1: t({
      en: "Development and implementation of Google Ads campaigns to increase brand awareness and online presence for small and medium-sized businesses.",
      de: "Entwicklung und Umsetzung von Google Ads Kampagnen zur Steigerung der Markenbekanntheit und Online-Präsenz für kleine und mittelständische Unternehmen.",
      ja: "中小企業のブランド認知度とオンラインプレゼンス向上のためのGoogle Ads キャンペーンの開発と実装。",
    }),
    desc_se_li1_topics: t({
      en: "Google Ads, Performance Max Campaigns, Online Marketing, Brand Awareness, Campaign Monitoring, Marketing Strategy",
      de: "Google Ads, Performance Max Kampagnen, Online-Marketing, Markenbekanntheit, Kampagnen-Monitoring, Marketingstrategie",
      ja: "Google Ads、パフォーマンスMaxキャンペーン、オンラインマーケティング、ブランド認知、キャンペーンモニタリング、マーケティング戦略",
    }),
    desc_se_li2b: t({
      en: "Business Analytics & Turnaround Management",
      de: "Business Analytics & Turnaround Management",
      ja: "ビジネスアナリティクスとターンアラウンドマネジメント",
    }),
    desc_se_li2: t({
      en: "Strategic and operational consulting to help companies adapt to changing market conditions, including management assessments and establishment of early warning systems.",
      de: "Strategische und operative Beratung zur Anpassung von Unternehmen an sich ändernde Marktbedingungen, inklusive Management-Assessments und Aufbau von Frühwarnsystemen.",
      ja: "企業が変化する市場状況に適応するための戦略的および運用的コンサルティング、マネジメントアセスメントや早期警告システムの構築を含む。",
    }),
    desc_se_li2_topics: t({
      en: "Management Consulting, Market Analysis, Strategic Planning, Early Warning Systems, BI Dashboards, Power BI, Zoho Analytics, Process Modeling, BPMN 2.0",
      de: "Managementberatung, Marktanalyse, Strategische Planung, Frühwarnsysteme, BI-Dashboards, Power BI, Zoho Analytics, Prozessmodellierung, BPMN 2.0",
      ja: "経営コンサルティング、市場分析、戦略的計画、早期警告システム、BIダッシュボード、Power BI、Zoho Analytics、プロセスモデリング、BPMN 2.0",
    }),
    desc_se_li3b: t({
      en: "SAP Fiori Migration Support",
      de: "SAP Fiori Migrationsunterstützung",
      ja: "SAP Fiori 移行支援",
    }),
    desc_se_li3: t({
      en: "Consulting and training for companies transitioning from SAP GUI to SAP Fiori, including system analysis, roadmap creation, and user workshops.",
      de: "Beratung und Schulung für Unternehmen beim Übergang von SAP GUI zu SAP Fiori, inklusive Systemanalyse, Erstellung von Roadmaps und Benutzer-Workshops.",
      ja: "SAP GUIからSAP Fioriへの移行におけるコンサルティングとトレーニング、システム分析、ロードマップ作成、ユーザーワークショップを含む。",
    }),
    desc_se_li3_topics: t({
      en: "SAP Fiori, SAP GUI, User Training, System Analysis, Migration Roadmaps, Change Management",
      de: "SAP Fiori, SAP GUI, Benutzerschulung, Systemanalyse, Migrations-Roadmaps, Change Management",
      ja: "SAP Fiori、SAP GUI、ユーザートレーニング、システム分析、移行ロードマップ、チェンジマネジメント",
    }),
    desc_se_li4b: t({
      en: "Financial Portfolio Analysis",
      de: "Finanzportfolioanalyse",
      ja: "金融ポートフォリオ分析",
    }),
    desc_se_li4: t({
      en: "Analysis of financial data using the Yahoo Finance API, including data preparation, correlation analysis, and portfolio optimization based on Markowitz models.",
      de: "Analyse von Finanzdaten unter Verwendung der Yahoo Finance API, inklusive Datenaufbereitung, Korrelationsanalyse und Portfolio-Optimierung basierend auf Markowitz-Modellen.",
      ja: "Yahoo Finance APIを使用した金融データの分析、データ準備、相関分析、Markowitzモデルに基づくポートフォリオ最適化を含む。",
    }),
    desc_se_li4_topics: t({
      en: "Yahoo Finance API, R, Tidyverse, Markowitz Portfolio Theory, Portfolio Optimization, Risk Management, Expected Shortfall, Standard Deviation",
      de: "Yahoo Finance API, R, Tidyverse, Markowitz-Portfolio-Theorie, Portfolio-Optimierung, Risikomanagement, Expected Shortfall, Standardabweichung",
      ja: "Yahoo Finance API、R、Tidyverse、Markowitzポートフォリオ理論、ポートフォリオ最適化、リスク管理、期待ショートフォール、標準偏差",
    }),

    // IT Consultant at tuteco
    title_tu_consultant: t({
      en: "IT Consultant",
      de: "IT Consultant",
      ja: "ITコンサルタント",
    }),
    employer_tu_consultant: "tuteco GmbH",
    location_tu_consultant: "Ludwigshafen am Rhein & Stuttgart",
    start_tu_consultant: "2022/09",
    end_tu_consultant: "2024/11",
    description_tu_consultant: t({
      en: "As an IT Consultant at tuteco GmbH, I specialized in data engineering, metadata management, and application development. My work included designing and implementing metadata mapping solutions, optimizing data processes, and developing Python-based applications to harmonize legacy systems. I also led projects in process modeling (BPMN 2.0, UML), database analysis (Oracle, PostgreSQL), and tool deployment (Docker, AWS ECR). My focus was on creating scalable, maintainable solutions for data integration and management in enterprise environments.",
      de: "Als IT-Berater bei der tuteco GmbH spezialisierte ich mich auf Data Engineering, Metadatenmanagement und Anwendungsentwicklung. Meine Arbeit umfasste die Konzeption und Implementierung von Metadaten-Mapping-Lösungen, die Optimierung von Datenprozessen sowie die Entwicklung Python-basierter Anwendungen zur Harmonisierung von Altsystemen. Zudem leitete ich Projekte in den Bereichen Prozessmodellierung (BPMN 2.0, UML), Datenbankanalyse (Oracle, PostgreSQL) und Tool-Bereitstellung (Docker, AWS ECR). Mein Fokus lag auf der Erstellung skalierbarer und wartbarer Lösungen für die Datenintegration und -verwaltung in Unternehmensumgebungen.",
      ja: "tuteco GmbHでのITコンサルタントとして、データエンジニアリング、メタデータ管理、アプリケーション開発を専門としていました。私の仕事には、メタデータマッピングソリューションの設計と実装、データプロセスの最適化、レガシーシステムの調和のためのPythonベースのアプリケーション開発が含まれていました。また、BPMN 2.0、UMLを用いたプロセスモデリング、データベース分析（Oracle、PostgreSQL）、ツールのデプロイメント（Docker、AWS ECR）などのプロジェクトを主導しました。私の焦点は、企業環境におけるデータ統合と管理のためのスケーラブルで保守可能なソリューションの作成にありました。",
    }),
    desc_tu_consultant_li1b: t({
      en: "Metadata Management & Mapping",
      de: "Metadatenmanagement & -mapping",
      ja: "メタデータ管理とマッピング",
    }),
    desc_tu_consultant_li1: t({
      en: "Development and maintenance of a Python application for mapping metadata from multiple legacy systems to harmonize data structures and enable efficient data integration.",
      de: "Entwicklung und Wartung einer Python-Anwendung zum Mapping von Metadaten aus mehreren Altsystemen, um Datenstrukturen zu harmonisieren und eine effiziente Datenintegration zu ermöglichen.",
      ja: "複数のレガシーシステムからのメタデータをマッピングするためのPythonアプリケーションの開発と保守。データ構造の調和と効率的なデータ統合を可能にします。",
    }),
    desc_tu_consultant_li1_topics: t({
      en: "Python, Flask, PostgreSQL, Oracle SQL, Microsoft SQL, Master Data, Meta Data, Data Integration, Docker, AWS ECR, UML",
      de: "Python, Flask, PostgreSQL, Oracle SQL, Microsoft SQL, Masterdaten, Metadaten, Datenintegration, Docker, AWS ECR, UML",
      ja: "Python、Flask、PostgreSQL、Oracle SQL、Microsoft SQL、マスターデータ、メタデータ、データ統合、Docker、AWS ECR、UML",
    }),
    desc_tu_consultant_li2b: t({
      en: "Application Development & Deployment",
      de: "Anwendungsentwicklung & Bereitstellung",
      ja: "アプリケーション開発とデプロイメント",
    }),
    desc_tu_consultant_li2: t({
      en: "Design and implementation of web services for metadata processing, including containerization and cloud deployment.",
      de: "Entwurf und Implementierung von Webservices zur Metadatenverarbeitung, inklusive Containerisierung und Cloud-Bereitstellung.",
      ja: "メタデータ処理のためのウェブサービスの設計と実装、コンテナ化とクラウド展開を含む。",
    }),
    desc_tu_consultant_li2_topics: t({
      en: "Web Services, REST APIs, Flask, Docker, Podman, Docker Compose, AWS ECR, CI/CD",
      de: "Webservices, REST-APIs, Flask, Docker, Podman, Docker Compose, AWS ECR, CI/CD",
      ja: "ウェブサービス、REST API、Flask、Docker、Podman、Docker Compose、AWS ECR、CI/CD",
    }),
    desc_tu_consultant_li3b: t({
      en: "Database Analysis & Modeling",
      de: "Datenbankanalyse & -modellierung",
      ja: "データベース分析とモデリング",
    }),
    desc_tu_consultant_li3: t({
      en: "Analysis of legacy system databases to identify data structures, relationships, and optimization potentials for migration and integration projects.",
      de: "Analyse von Datenbanken aus Altsystemen zur Identifizierung von Datenstrukturen, Beziehungen und Optimierungspotenzialen für Migrations- und Integrationsprojekte.",
      ja: "レガシーシステムのデータベース分析を通じて、データ構造、関係、最適化の可能性を特定し、移行および統合プロジェクトを支援。",
    }),
    desc_tu_consultant_li3_topics: t({
      en: "Oracle SQL, Microsoft SQL, PostgreSQL, Data Modeling, UML, ER Diagrams, Data Migration",
      de: "Oracle SQL, Microsoft SQL, PostgreSQL, Datenmodellierung, UML, ER-Diagramme, Datenmigration",
      ja: "Oracle SQL、Microsoft SQL、PostgreSQL、データモデリング、UML、ER図、データ移行",
    }),
    desc_tu_consultant_li4b: t({
      en: "Process Optimization & Tool Introduction",
      de: "Prozessoptimierung & Tool-Einführung",
      ja: "プロセス最適化とツール導入",
    }),
    desc_tu_consultant_li4: t({
      en: "Restructuring of backlogs and adaptation of task templates in Azure DevOps to align with team workflows and requirements.",
      de: "Restrukturierung von Backlogs und Anpassung von Aufgabenvorlagen in Azure DevOps, um sie an Team-Workflows und Anforderungen anzupassen.",
      ja: "Azure DevOpsにおけるバックログの再構築とタスクテンプレートの調整、チームのワークフローと要件に合わせる。",
    }),
    desc_tu_consultant_li4_topics: t({
      en: "Azure DevOps, Kanban, Agile Methodologies, Task Templates, Team Workshops, Process Documentation",
      de: "Azure DevOps, Kanban, Agile Methoden, Aufgabenvorlagen, Team-Workshops, Prozessdokumentation",
      ja: "Azure DevOps、カンバン、アジャイル手法、タスクテンプレート、チームワークショップ、プロセス文書化",
    }),

    // Vocational training (ausbildung)
    title_ausbildung: t({
      en: "Vocational training to become a computer scientist",
      de: "Ausbildung zum Informatiker",
      ja: "コンピュータ科学者になるための職業訓練",
    }),
    employer_ausbildung: "tuteco GmbH",
    location_ausbildung: "Ludwigshafen am Rhein",
    start_ausbildung: "2019/08",
    end_ausbildung: "2022/08",
    description_ausbildung: t({
      en: "The training was conducted as an extraordinary vocational apprenticeship in cooperation between tuteco GmbH in Lörrach and the Wirtschaftsakademie Pfalz (WA) in Ludwigshafen. The main motivation was to provide practical solutions for information processing in companies.",
      de: "Die Ausbildung erfolgte als außerordentliche Berufsausbildung in Kooperation zwischen der tuteco GmbH in Lörrach mit der Wirtschaftsakademie Pfalz (WA) in Ludwigshafen. Die Hauptmotivation war die praxisbezogene Vermittlung der Lösungskompetenz im Bereich Informationsverarbeitung in Unternehmen.",
      ja: "修士課程として、Lörrachのtuteco GmbHとLudwigshafenのPfalz経済大学で共同実施された特別職業教育です。主な目的は企業における情報処理に関する実践的な解決策を提供することでした。",
    }),
    desc_ausbildung_li1b: t({
      en: "Software Development",
      de: "Software Entwicklung",
      ja: "ソフトウェア開発",
    }),
    desc_ausbildung_li1: t({
      en: "Developing practical software solutions in information and knowledge management.",
      de: "Entwickeln von praxisorientierten Softwarelösungen im Informations- und Wissensmanagement.",
      ja: "情報および知識管理における実用的なソフトウェア解決策の開発",
    }),
    desc_ausbildung_li1_topics: t({
      en: "Programming languages Python and R, Version control, Object-oriented programming, Software package structuring, data source extraction, data preparation, building data structures, file formats in data processing, programmatic statistical analysis of data, programmatic information display.",
      de: "Programmiersprachen Python und R, Versionskontrolle, Objektorientierung, Strukturierung von Softwarepaketen, Datenquellen auslesen, Daten aufbereiten, Aufbau von Datenstrukturen, Dateiformate in der Datenverarbeitung, programmatische statistische Auswertung von Daten, programmatische Darstellung von Informationen",
      ja: "PythonおよびRのプログラミング言語、バージョン管理、オブジェクト指向プログラミング、ソフトウェアパッケージの構造化、データソースの抽出、データ準備、データ構造の構築、データ処理におけるファイル形式、データの統計的分析、情報のプログラムによる表示",
    }),
    desc_ausbildung_li2b: t({
      en: "Databases",
      de: "Datenbanken",
      ja: "データベース",
    }),
    desc_ausbildung_li2: t({
      en: "Fundamentals of relational and NoSQL databases.",
      de: "Grundlagen Relationale und NoSQL Datenbanken.",
      ja: "関係型およびNoSQLデータベースの基礎知識",
    }),
    desc_ausbildung_li2_topics: t({
      en: "Relational databases, NoSQL databases, data processing with SQL, database programming, data modeling.",
      de: "Relationale Datenbanken, NoSQL Datenbanken, Datenverarbeitung mit SQL, Datenbank Programmierung, Datenmodellierung",
      ja: "関係型データベース、NoSQLデータベース、SQLによるデータ処理、データベースプログラミング、データモデリング",
    }),
    desc_ausbildung_li3b: t({
      en: "Information Management",
      de: "Information Management",
      ja: "情報管理",
    }),
    desc_ausbildung_li3: t({
      en: "Practical application of information management.",
      de: "Praxisorientierte Anwendung Informationsmanagement",
      ja: "情報管理の実践的な応用",
    }),
    desc_ausbildung_li3_topics: t({
      en: "Determine information needs, planning information offerings, availability of information, quality of information, organization of information supply, information architectures, evaluation of IT solutions, strategic information management.",
      de: "Informationsbedarf ermitteln, Planung Informationsangebot, Verfügbarkeit von Informationen, Informationsqualität, Organisation der Informationsversorgung, Informationsarchitekturen, Bewertung Informationstechnischer Lösungen, strategisches Informationsmanagement",
      ja: "情報ニーズの把握、情報提供計画、情報の利用可能性、情報品質、情報供給組織化、情報アーキテクチャ、IT解決策の評価、戦略的な情報管理",
    }),
    desc_ausbildung_li4b: t({
      en: "Knowledge Management",
      de: "Wissensmanagement",
      ja: "知識管理",
    }),
    desc_ausbildung_li4: t({
      en: "Practical application of knowledge management.",
      de: "Praxisorientierte Anwendung Wissensmanagement",
      ja: "知識管理の実践的な応用",
    }),
    desc_ausbildung_li4_topics: t({
      en: "Types of knowledge, importance of knowledge for companies, determination and planning of knowledge needs, knowledge goals, knowledge acquisition, knowledge development, knowledge distribution, knowledge utilization, knowledge preservation, knowledge evaluation. Process-oriented approach in knowledge management.",
      de: "Arten von Wissen, Bedeutung Wissen für Unternehmen, Ermittlung und Planung Wissensbedarf, Wissensziele, Wissenserwerb, Wissensentwicklung, Wissensverteilung, Wissensnutzung, Wissensbewahrung, Wissensbewertung. Prozessorientierung im Wissensmanagement",
      ja: "知識の種類、企業における知識の重要性、知識ニーズの把握と計画、知識目標、知識獲得、知識開発、知識共有、知識活用、知識保存、知識評価。知識管理におけるプロセス指向的アプローチ",
    }),
    desc_ausbildung_li5b: t({
      en: "Cloud Computing",
      de: "Cloud Computing",
      ja: "クラウドコンピューティング",
    }),
    desc_ausbildung_li5: t({
      en: "Understand and apply modern cloud solution architectures. Learn about AWS components of the cloud architecture and use them in practical work.",
      de: "Grundlagen moderner Lösungsarchitekturen der Cloud verstehen und anwenden können. Anhand des Anbieters Amazon Web Services (AWS) die verschiedenen Komponenten der Cloud Architektur kennen lernen und sie in der praktischen Arbeit einsetzen können.",
      ja: "最新のクラウド解決策アーキテクチャを理解し、実装することができます。AWSによるクラウドアーキテクチャのコンポーネントを学び、実践的な作業で使用することができます。",
    }),
    desc_ausbildung_li6b: t({
      en: "Business Administration (WA)",
      de: "Betriebswirt (WA)",
      ja: "経営管理（WA）",
    }),
    desc_ausbildung_li6: t({
      en: "The knowledge for the business administration was acquired at Wirtschaftsakademie Pfalz and successfully completed with an exam and a cross-disciplinary project work in informatics and economics.",
      de: "Die Kenntnisse für den Betriebswirt wurden bei der Wirtschaftsakademie Pfalz erworben und mit einer Abschlussprüfung sowie einer fachbereichsübergreifenden Projektarbeit von Informatik und Betriebswirtschaft erfolgreich abgeschlossen.",
      ja: "経営管理に関する知識はPfalz経済大学で習得し、卒業試験および情報学と経営学の分野を横断したプロジェクト作業により成功させました。",
    }),
    desc_ausbildung_li7b: t({
      en: "Project Management (WA)",
      de: "Projektmanagement (WA)",
      ja: "プロジェクトマネジメント（WA）",
    }),
    desc_ausbildung_li7: t({
      en: "The basics of project management were completed at Wirtschaftsakademie Pfalz through the course 'Specialist for Multi-Project Management (WA-Pfalz)'. It was successfully concluded with an exam.",
      de: "Die Grundlagen des Projektmanagements wurden bei der Wirtschaftsakademie Pfalz durch den Kurs „Spezialist für Multi-Projektmanagement (WA-Pfalz)“ durchgeführt und mit einer Abschlussprüfung erfolgreich beendet.",
      ja: "プロジェクトマネジメントの基礎はPfalz経済大学で「マルチプロジェクト管理専門家（WA-Pfalz）」コースを通じて修了し、卒業試験により成功させました。",
    }),
    desc_ausbildung_li8b: t({
      en: "Own Project: Asset Weighting",
      de: "Eigenes Projekt: Wertpapierpreisgewichtung",
      ja: "自分のプロジェクト：セキュリティ重み付け",
    }),
    desc_ausbildung_li8: t({
      en: "On my own initiative, I have created an application for weighting stocks based on Yahoo Finance data series.",
      de: "Auf eigene Initiative habe ich eine Anwendung zur Gewichtung von Aktien auf Basis der Datenreihen von Yahoo Finance entwickelt.",
      ja: "私自身の発案で、Yahoo!ファイナンスのデータシリーズに基づいて株式のウェイト付けを行うアプリケーションを作成しました。",
    }),
    desc_ausbildung_li8_topics: t({
      en: "Retrieving data from APIs, Yahoo Finance API, R programming language, R Markdown, machine learning, portfolio management",
      de: "Daten von API abrufen, Yahoo Finance API, Programmiersprache R, R Markdown, Machine-Learning, Portfoliomanagement",
      ja: "APIからのデータ取得、Yahoo Finance API、プログラミング言語R、R Markdown、機械学習、ポートフォリオ管理",
    }),

    // Technical Journalist (junior)
    title_tu_journalist: t({
      en: "Technical Journalist (junior)",
      de: "Technischer Journalist (junior)",
      ja: "技術系ジャーナリスト（ジュニア）",
    }),
    employer_tu_journalist: "tuteco GmbH",
    location_tu_journalist: "Lörrach",
    start_tu_journalist: "2018/01",
    end_tu_journalist: "2019/07",
    description_tu_journalist: t({
      en: "",
      de: "",
      ja: "",
    }),
  },
} satisfies Dictionary;

export default occupationContent;