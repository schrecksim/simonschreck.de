import { t, type Dictionary } from "intlayer";

const projectContent = {
  key: "projects",

  content: {
    h_projects: t({
      en: "Projects",
      de: "Projekte",
      ja: "プロジェクト",
    }),

    // --- 1. Google Ads Strategy ---
    project_google_ads_title: t({
      en: "Building Google Ads Strategy",
      de: "Aufbau Google Ads Strategie",
      ja: "Google Ads 戦略の構築",
    }),
    project_google_ads_start: "05/2026",
    project_google_ads_end: "current",
    project_google_ads_industry: t({
      en: "Manufacturing",
      de: "produzierendes Gewerbe",
      ja: "製造業",
    }),
    project_google_ads_customer: t({
      en: "Small manufacturing company",
      de: "kleines Unternehmen",
      ja: "小規模製造業",
    }),
    project_google_ads_role: t({
      en: "Business Consultant",
      de: "Business Consultant",
      ja: "ビジネスコンサルタント",
    }),
    project_google_ads_language: t({
      en: "German",
      de: "DE",
      ja: "ドイツ語",
    }),
    project_google_ads_background: t({
      en: "The client wanted to present themselves to a larger target audience online. Google Ads was to be used to generate attention for their website.",
      de: "Der Kunde möchte sich online einer größeren Zielgruppe präsentieren. Dafür soll Google Ads eingesetzt werden, um Aufmerksamkeit für seine Webseite zu generieren.",
      ja: "顧客はオンラインでより広いターゲット層に自社をアピールしたいと考えていました。そのため、Google Adsを使用してウェブサイトへのアクセスを増やすことが目標でした。",
    }),
    project_google_ads_tasks: t({
      en: "The client wanted to present themselves to a larger target audience online. Google Ads was to be used to generate attention for their website.",
      de: "Der Kunde möchte sich online einer größeren Zielgruppe präsentieren. Dafür soll Google Ads eingesetzt werden, um Aufmerksamkeit für seine Webseite zu generieren.",
      ja: "顧客はオンラインでより広いターゲット層に自社をアピールしたいと考えていました。そのため、Google Adsを使用してウェブサイトへのアクセスを増やすことが目標でした。",
    }),
    project_google_ads_subtasks: t({
      en: "Strategic analysis of the client's company and market, management consulting, setting up Google Ads campaigns and monitoring, strategy adjustment in coordination with management.",
      de: "Strategische Erfassung des Kundenunternehmens und dessen Marktes, Managementberatung, Aufsetzen der Google Ads Kampagne und Monitorring, Strategieanpassung in Absprache mit dem Management",
      ja: "顧客企業とその市場の戦略的分析、経営コンサルティング、Google Ads キャンペーンの設定とモニタリング、経営陣との調整による戦略調整",
    }),
    desc_google_ads_li1b: t({
      en: "Requirements Analysis & Campaign Setup",
      de: "Anforderungsanalyse & Kampagnenaufbau",
      ja: "要件分析とキャンペーンの設定",
    }),
    desc_google_ads_li1: t({
      en: "Recording requirements according to CPRE, setting up Google Ads account, creating a Performance Max campaign.",
      de: "Erfassung der Anforderungen nach CPRE, Aufsetzen des Google Ads Accounts, Erstellung einer Performance Max Kampagne.",
      ja: "CPREに基づく要件の記録、Google Ads アカウントの設定、パフォーマンスMaxキャンペーンの作成",
    }),
    desc_google_ads_li1_topics: t({
      en: "CPRE, Google Ads, Performance Max Campaigns, Account Setup, Marketing Strategy",
      de: "CPRE, Google Ads, Performance Max Kampagnen, Account-Einrichtung, Marketingstrategie",
      ja: "CPRE、Google Ads、パフォーマンスMaxキャンペーン、アカウント設定、マーケティング戦略",
    }),
    desc_google_ads_li2b: t({
      en: "Monitoring & Optimization",
      de: "Monitoring & Optimierung",
      ja: "モニタリングと最適化",
    }),
    desc_google_ads_li2: t({
      en: "Monitoring results in Google Ads Center, creating the main campaign, strategy adjustment.",
      de: "Monitorring der Ergebnisse im Google Ads Center, Erstellung der Hauptkampagne, Strategieanpassung.",
      ja: "Google Ads センターでの結果モニタリング、メインキャンペーンの作成、戦略調整",
    }),
    desc_google_ads_li2_topics: t({
      en: "Google Ads Center, Campaign Monitoring, Performance Analysis, Strategy Adjustment",
      de: "Google Ads Center, Kampagnen-Monitoring, Performance-Analyse, Strategieanpassung",
      ja: "Google Ads センター、キャンペーンモニタリング、パフォーマンス分析、戦略調整",
    }),

    // --- 2. Business Analytics & Turnaround Management ---
    project_business_analytics_title: t({
      en: "Business Analytics and Turnaround Management",
      de: "Business Analytics und Turnaround Management",
      ja: "ビジネスアナリティクスとターンアラウンドマネジメント",
    }),
    project_business_analytics_start: "11/2025",
    project_business_analytics_end: "04/2026",
    project_business_analytics_industry: t({
      en: "Manufacturing",
      de: "produzierendes Gewerbe",
      ja: "製造業",
    }),
    project_business_analytics_customer: t({
      en: "Small to medium-sized manufacturing company",
      de: "kleiner Mittelstand",
      ja: "中小規模製造業",
    }),
    project_business_analytics_role: t({
      en: "Business Consultant",
      de: "Business Consultant",
      ja: "ビジネスコンサルタント",
    }),
    project_business_analytics_language: t({
      en: "English",
      de: "EN",
      ja: "英語",
    }),
    project_business_analytics_background: t({
      en: "The client wanted to better adapt to changing market conditions at a strategic and operational level. Regular management assessments were to be conducted, and an early warning system was to be established.",
      de: "Der Kunde möchte sich auf strategischer und operativer Ebene besser an sich ändernde Marktbedingungen aufstellen. Hierbei werden in regelmäßigen Abständen Management Assessments durchgeführt werden. Zudem soll ein Frühwarnsystem etabliert werden.",
      ja: "顧客は戦略的および運用レベルで変化する市場状況によりよく適応したいと考えていました。定期的に経営アセスメントを実施し、早期警告システムを確立する予定でした。",
    }),
    project_business_analytics_tasks: t({
      en: "The client wanted to better adapt to changing market conditions at a strategic and operational level. Regular management assessments were to be conducted, and an early warning system was to be established.",
      de: "Der Kunde möchte sich auf strategischer und operativer Ebene besser an sich ändernde Marktbedingungen aufstellen. Hierbei werden in regelmäßigen Abständen Management Assessments durchgeführt werden. Zudem soll ein Frühwarnsystem etabliert werden.",
      ja: "顧客は戦略的および運用レベルで変化する市場状況によりよく適応したいと考えていました。定期的に経営アセスメントを実施し、早期警告システムを確立する予定でした。",
    }),
    project_business_analytics_subtasks: t({
      en: "Strategic analysis of the client's company and market, data and process modeling, management consulting, conducting assessments accompanied by building a document system, monitoring as BI dashboards.",
      de: "Strategische Erfassung des Kundenunternehmens und dessen Marktes, Daten- und Prozessmodellierung, Managementberatung, Durchführung von Assessments begleitet durch Aufbau eines Dokumentensystems, Monitoring als BI Dashboards",
      ja: "顧客企業とその市場の戦略的分析、データとプロセスのモデリング、経営コンサルティング、ドキュメントシステムの構築を伴うアセスメントの実施、BIダッシュボードとしてのモニタリング",
    }),
    desc_business_analytics_li1b: t({
      en: "Process Modeling & Documentation",
      de: "Prozessmodellierung & Dokumentation",
      ja: "プロセスモデリングと文書化",
    }),
    desc_business_analytics_li1: t({
      en: "Process modeling according to BPMN 2.0, checking existing hardware and software with subsequent new procurement.",
      de: "Prozessmodellierung nach BPMN 2.0, Überprüfung vorhandener Hard- und Software, mit anschließender Neubeschaffung",
      ja: "BPMN 2.0に基づくプロセスモデリング、既存のハードウェアとソフトウェアのチェックとその後の新規調達",
    }),
    desc_business_analytics_li1_topics: t({
      en: "BPMN 2.0, Hardware/Software Audit, Procurement, Process Optimization",
      de: "BPMN 2.0, Hard- und Software-Prüfung, Neubeschaffung, Prozessoptimierung",
      ja: "BPMN 2.0、ハードウェア/ソフトウェア監査、調達、プロセス最適化",
    }),
    desc_business_analytics_li2b: t({
      en: "Tool Introduction & Data Consolidation",
      de: "Tool-Einführung & Datenzusammenführung",
      ja: "ツール導入とデータ統合",
    }),
    desc_business_analytics_li2: t({
      en: "Introduction of GIT for versioned document handling, introduction of Confluence, consolidation of existing data, introduction of Docker/Podman for containerization of applications in microservices.",
      de: "Einführung von GIT zur versionierten Dokumenthandhabung, Einführung von Confluence, Zusammenziehen vorhandener Daten, Einführung von Docker/Podman zur Containerisierung von Anwendungen in Microservices",
      ja: "バージョン管理されたドキュメント処理のためのGITの導入、Confluenceの導入、既存データの統合、マイクロサービスにおけるアプリケーションのコンテナ化のためのDocker/Podmanの導入",
    }),
    desc_business_analytics_li2_topics: t({
      en: "GIT, Confluence, Docker, Podman, Microservices, Data Consolidation",
      de: "GIT, Confluence, Docker, Podman, Microservices, Datenzusammenführung",
      ja: "GIT、Confluence、Docker、Podman、マイクロサービス、データ統合",
    }),
    desc_business_analytics_li3b: t({
      en: "BI Dashboard Development",
      de: "BI-Dashboard-Entwicklung",
      ja: "BIダッシュボード開発",
    }),
    desc_business_analytics_li3: t({
      en: "Technical design of BI dashboards with Power BI & Zoho Analytics, container orchestration with Docker/Podman Compose, test operation and implementation in production systems.",
      de: "Technische Ausgestaltung von BI Dashboards mit PowerBI & Zoho Analytics, Containerorchestration mit Docker/Podman Compose, Testbetrieb und Umsetzung in Produktivsysteme",
      ja: "Power BI & Zoho Analyticsを用いたBIダッシュボードの技術的設計、Docker/Podman Composeを用いたコンテナオーケストレーション、テスト運用と本番システムへの実装",
    }),
    desc_business_analytics_li3_topics: t({
      en: "Power BI, Zoho Analytics, Docker Compose, Container Orchestration, Testing, Production Deployment",
      de: "Power BI, Zoho Analytics, Docker Compose, Container-Orchestrierung, Testbetrieb, Produktivsetzung",
      ja: "Power BI、Zoho Analytics、Docker Compose、コンテナオーケストレーション、テスト、本番展開",
    }),

    // --- 3. SAP Fiori Migration ---
    project_sap_fiori_title: t({
      en: "Migration from SAP GUI to SAP Fiori",
      de: "Umstellung von SAP GUI nach SAP Fiori",
      ja: "SAP GUIからSAP Fioriへの移行",
    }),
    project_sap_fiori_start: "01/2025",
    project_sap_fiori_end: "05/2025",
    project_sap_fiori_industry: t({
      en: "Manufacturing",
      de: "produzierendes Gewerbe",
      ja: "製造業",
    }),
    project_sap_fiori_customer: t({
      en: "Medium-sized industrial company",
      de: "mittelständisches Industrieunternehmen",
      ja: "中規模工業会社",
    }),
    project_sap_fiori_role: t({
      en: "SAP Consultant",
      de: "SAP Consultant",
      ja: "SAPコンサルタント",
    }),
    project_sap_fiori_language: t({
      en: "German, English",
      de: "DE, EN",
      ja: "ドイツ語、英語",
    }),
    project_sap_fiori_background: t({
      en: "The client switched user interfaces from SAP GUI to SAP Fiori, so employees needed to become familiar with the new interface. In my role as SAP Consultant, I supported the transition at the client's site.",
      de: "Der Kunde wechselte die Benutzeroberflächen von SAP GUI zu SAP Fiori, weshalb die Mitarbeiter mit der neuen Oberfläche vertraut gemacht werden mussten. In meiner Rolle als SAP Consultant begleitete ich die Umstellung beim Kunden.",
      ja: "顧客はSAP GUIからSAP Fioriへユーザーインターフェースを切り替えたため、従業員が新しいインターフェースに慣れる必要がありました。SAPコンサルタントとして、私は顧客先で移行をサポートしました。",
    }),
    project_sap_fiori_tasks: t({
      en: "The client switched user interfaces from SAP GUI to SAP Fiori, so employees needed to become familiar with the new interface.",
      de: "Der Kunde wechselte die Benutzeroberflächen von SAP GUI zu SAP Fiori, weshalb die Mitarbeiter mit der neuen Oberfläche vertraut gemacht werden mussten.",
      ja: "顧客はSAP GUIからSAP Fioriへユーザーインターフェースを切り替えたため、従業員が新しいインターフェースに慣れる必要がありました。",
    }),
    project_sap_fiori_subtasks: t({
      en: "Data and process modeling, management consulting, work in the client's SAP system, conducting workshops.",
      de: "Daten- und Prozessmodellierung, Managementberatung, Arbeit im SAP System des Kunden, Durchführung von Workshops",
      ja: "データとプロセスのモデリング、経営コンサルティング、顧客のSAPシステムでの作業、ワークショップの実施",
    }),
    desc_sap_fiori_li1b: t({
      en: "System Analysis & Roadmapping",
      de: "Systemanalyse & Roadmap-Erstellung",
      ja: "システム分析とロードマップ作成",
    }),
    desc_sap_fiori_li1: t({
      en: "Data and process analysis, as well as determining the knowledge level of the teams, management consulting regarding remaining structures in SAP GUI and setting up a roadmap for future implementation.",
      de: "Daten- & Prozessanalyse, sowie Wissensstand der Teams in Erfahrung bringen, Managementberatung hinsichtlich verbleibender Strukturen in SAP GUI und Aufsetzen einer Roadmap zur zukünftigen Implementierung",
      ja: "データとプロセスの分析、およびチームの知識レベルの把握、SAP GUIにおける残存構造に関する経営コンサルティングと将来の実装のためのロードマップの策定",
    }),
    desc_sap_fiori_li1_topics: t({
      en: "SAP Fiori, SAP GUI, System Analysis, Knowledge Assessment, Roadmap Creation, Change Management",
      de: "SAP Fiori, SAP GUI, Systemanalyse, Wissensstandsanalyse, Roadmap-Erstellung, Change Management",
      ja: "SAP Fiori、SAP GUI、システム分析、知識評価、ロードマップ作成、チェンジマネジメント",
    }),
    desc_sap_fiori_li2b: t({
      en: "Initial Setup & User Training",
      de: "Initiale Einrichtung & Benutzerschulung",
      ja: "初期設定とユーザートレーニング",
    }),
    desc_sap_fiori_li2: t({
      en: "Initial setup of structures and overlays in SAP Fiori, workshops for employees to master the transition from GUI to Fiori.",
      de: "Initiales Aufsetzen von Strukturen und Overlays in SAP Fiori, Workshops für Mitarbeiter, damit diese den Umstieg von GUI auf Fiori meistern",
      ja: "SAP Fioriにおける構造とオーバーレイの初期設定、GUIからFioriへの移行をマスターするための従業員向けワークショップ",
    }),
    desc_sap_fiori_li2_topics: t({
      en: "SAP Fiori Configuration, Overlays, Employee Workshops, Transition Management",
      de: "SAP Fiori-Konfiguration, Overlays, Mitarbeiter-Workshops, Übergangsmanagement",
      ja: "SAP Fiori設定、オーバーレイ、従業員ワークショップ、移行管理",
    }),

    // --- 4. Market Analysis Switzerland ---
    project_market_analysis_title: t({
      en: "Market Analysis of Swiss Municipalities",
      de: "Marktanalyse Gemeinden in der Schweiz",
      ja: "スイスの自治体に関する市場分析",
    }),
    project_market_analysis_start: "05/2024",
    project_market_analysis_end: "07/2024",
    project_market_analysis_industry: t({
      en: "Consulting",
      de: "Consulting",
      ja: "コンサルティング",
    }),
    project_market_analysis_customer: t({
      en: "tuteco GmbH",
      de: "tuteco GmbH",
      ja: "tuteco GmbH",
    }),
    project_market_analysis_role: t({
      en: "Data Analyst",
      de: "Data Analyst",
      ja: "データアナリスト",
    }),
    project_market_analysis_language: t({
      en: "German",
      de: "DE",
      ja: "ドイツ語",
    }),
    project_market_analysis_background: t({
      en: "Creation of a marketing plan and data analysis for the executive board as a decision basis for a potential business expansion.",
      de: "Anfertigung eines Marketingplans, sowie einer Datenanalyse für die Geschäftsführung als Entscheidungsgrundlage für eine potentielle Geschäftserweiterung.",
      ja: "経営陣のためのマーケティングプランとデータ分析の作成、潜在的な事業拡大のための意思決定基盤として。",
    }),
    project_market_analysis_tasks: t({
      en: "Creation of a marketing plan and data analysis for the executive board as a decision basis for a potential business expansion.",
      de: "Anfertigung eines Marketingplans, sowie einer Datenanalyse für die Geschäftsführung als Entscheidungsgrundlage für eine potentielle Geschäftserweiterung.",
      ja: "経営陣のためのマーケティングプランとデータ分析の作成、潜在的な事業拡大のための意思決定基盤として。",
    }),
    project_market_analysis_subtasks: t({
      en: "Creation of a marketing plan, data analysis in R using Tidyverse and Shiny packages for better understanding of potential customers (including classification).",
      de: "Anfertigung eines Marketingplans, Datenanalyse in R mit den Paketen Tidyverse und Shiny zum besseren Verständnis der potentiellen Kunden (inkl. Klassifikation)",
      ja: "マーケティングプランの作成、Rを用いたTidyverseおよびShinyパッケージによるデータ分析（分類を含む）、潜在顧客の理解を深めるため",
    }),
    desc_market_analysis_li1b: t({
      en: "Marketing Plan Creation",
      de: "Erstellung des Marketingplans",
      ja: "マーケティングプランの作成",
    }),
    desc_market_analysis_li1: t({
      en: "Creation of the marketing plan with LaTeX, including: Environmental analysis (STEP/PEST analysis), market demarcation, participants, competitors, analysis of the company using SWOT, resource description, definition of core competencies, definition of goals (economic & psychological), creation of a marketing strategy, definition of instruments and strategic/operational controls.",
      de: "Erstellung des Marketingplans mit LaTex mit folgenden Inhalten: Umweltanalyse (STEP/PEST-Analyse), Marktabgrenzung, -teilnehmer, Wettbewerber, Analyse des eigenen Unternehmens mit SWOT, Ressourcenbeschreibung und Festlegung der Kernkompetenzen, Definition von Zielen (ökonomisch & psychologisch), Erstellung einer Marketingstrategie, Definition der Instrumente und strategischen, sowie operativen Kontrollen.",
      ja: "LaTeXを用いたマーケティングプランの作成：環境分析（STEP/PEST分析）、市場区分、参加者、競合他社、SWOTを用いた自社分析、リソースの説明、コアコンピタンシーの特定、目標の定義（経済的・心理的）、マーケティング戦略の策定、ツールと戦略的・運用的コントロールの定義",
    }),
    desc_market_analysis_li1_topics: t({
      en: "LaTeX, STEP Analysis, PEST Analysis, SWOT Analysis, Market Strategy, Resource Management, Goal Setting, Marketing Instruments",
      de: "LaTeX, STEP-Analyse, PEST-Analyse, SWOT-Analyse, Marketingstrategie, Ressourcenmanagement, Zielsetzung, Marketinginstrumente",
      ja: "LaTeX、STEP分析、PEST分析、SWOT分析、マーケティング戦略、リソース管理、目標設定、マーケティングツール",
    }),
    desc_market_analysis_li2b: t({
      en: "Data Analysis with R",
      de: "Datenanalyse mit R",
      ja: "Rを用いたデータ分析",
    }),
    desc_market_analysis_li2: t({
      en: "Use of R in market analysis (including data engineering with Tidyverse, web scraping, language recognition, and creation of a report with R Markdown, dashboard in Shiny).",
      de: "Verwendung von R in der Marktanalyse (inklusive Data-Engineering mit Tidyverse, Web-Scraping, Spracherkennung und Erstellung eines Reports mit R-Markdown, Dashboard in Shiny).",
      ja: "市場分析におけるRの使用（Tidyverseを用いたデータエンジニアリング、ウェブスクレイピング、言語認識、R Markdownによるレポート作成、Shinyダッシュボードを含む）",
    }),
    desc_market_analysis_li2_topics: t({
      en: "R, Tidyverse, Web Scraping, Language Recognition, R Markdown, Shiny, Data Engineering, Classification",
      de: "R, Tidyverse, Web-Scraping, Spracherkennung, R Markdown, Shiny, Data Engineering, Klassifikation",
      ja: "R、Tidyverse、ウェブスクレイピング、言語認識、R Markdown、Shiny、データエンジニアリング、分類",
    }),

    // --- 5. Musicbrainz Database Analysis ---
    project_musicbrainz_title: t({
      en: "Musicbrainz Database Analysis",
      de: "Musicbrainz Datenbankanalyse",
      ja: "Musicbrainz データベース分析",
    }),
    project_musicbrainz_start: "05/2024",
    project_musicbrainz_end: "05/2024",
    project_musicbrainz_industry: t({
      en: "Consulting",
      de: "Consulting",
      ja: "コンサルティング",
    }),
    project_musicbrainz_customer: t({
      en: "tuteco GmbH",
      de: "tuteco GmbH",
      ja: "tuteco GmbH",
    }),
    project_musicbrainz_role: t({
      en: "Data Analyst",
      de: "Data Analyst",
      ja: "データアナリスト",
    }),
    project_musicbrainz_language: t({
      en: "German",
      de: "DE",
      ja: "ドイツ語",
    }),
    project_musicbrainz_background: t({
      en: "Analysis of the Musicbrainz database to decide whether the contained data can be used in product development.",
      de: "Analyse der Musicbrainz-Datenbank zur Entscheidungsfindung, ob die enthaltenen Daten in der Produktentwicklung genutzt werden können.",
      ja: "製品開発でデータを使用できるかを決定するためのMusicbrainzデータベースの分析",
    }),
    project_musicbrainz_tasks: t({
      en: "Analysis of the Musicbrainz database to decide whether the contained data can be used in product development.",
      de: "Analyse der Musicbrainz-Datenbank zur Entscheidungsfindung, ob die enthaltenen Daten in der Produktentwicklung genutzt werden können.",
      ja: "製品開発でデータを使用できるかを決定するためのMusicbrainzデータベースの分析",
    }),
    project_musicbrainz_subtasks: t({
      en: "Data query and meta-analysis, as well as checking available alternatives.",
      de: "Datenabfrage und Metaanalyse, sowie die Prüfung verfügbarer Alternativen",
      ja: "データクエリとメタ分析、および利用可能な代替手段の検討",
    }),
    desc_musicbrainz_li1b: t({
      en: "Data Query & Exploration",
      de: "Datenabfrage & -exploration",
      ja: "データクエリと探索",
    }),
    desc_musicbrainz_li1: t({
      en: "Data query via Musicbrainz website as PostgreSQL dump, use of Flask and FastAPI in the query.",
      de: "Datenabfrage über Musicbrainz Webseite als PostgreSQL dump, Einsatz von Flask und FastAPI in der Abfrage",
      ja: "Musicbrainzウェブサイトを介したPostgreSQLダンプとしてのデータクエリ、クエリにおけるFlaskとFastAPIの使用",
    }),
    desc_musicbrainz_li1_topics: t({
      en: "Musicbrainz, PostgreSQL, Flask, FastAPI, Data Query, REST APIs",
      de: "Musicbrainz, PostgreSQL, Flask, FastAPI, Datenabfrage, REST-APIs",
      ja: "Musicbrainz、PostgreSQL、Flask、FastAPI、データクエリ、REST API",
    }),
    desc_musicbrainz_li2b: t({
      en: "Data Modeling & Presentation",
      de: "Datenmodellierung & Präsentation",
      ja: "データモデリングとプレゼンテーション",
    }),
    desc_musicbrainz_li2: t({
      en: "Data exploration using the provided documentation, creation of SQL views for independent data structuring, consultation with management including presentation.",
      de: "Datenexploration mit Hilfe der bereitgestellten Dokumentation, Erstellung von SQL Views zur eigenständigen Gliederung der Daten, Rücksprache mit Geschäftsführung inklusive Präsentation",
      ja: "提供されたドキュメントを用いたデータ探索、独立したデータ構造化のためのSQLビューの作成、経営陣との相談（プレゼンテーションを含む）",
    }),
    desc_musicbrainz_li2_topics: t({
      en: "SQL, Data Exploration, SQL Views, Documentation, Management Consultation, Presentation",
      de: "SQL, Datenexploration, SQL Views, Dokumentation, Rücksprache mit Geschäftsführung, Präsentation",
      ja: "SQL、データ探索、SQLビュー、ドキュメント、経営相談、プレゼンテーション",
    }),

    // --- 6. Metadata App Documentation ---
    project_metadata_doc_title: t({
      en: "Final Documentation for Metadata Application",
      de: "Abschlussdokumentation Metadaten-Applikation",
      ja: "メタデータアプリケーションの最終文書化",
    }),
    project_metadata_doc_start: "04/2024",
    project_metadata_doc_end: "04/2024",
    project_metadata_doc_industry: t({
      en: "Automotive Data Distribution",
      de: "Internet Automobildatendistributor",
      ja: "自動車データ配布",
    }),
    project_metadata_doc_customer: t({
      en: "Automotive data distributor",
      de: "Internet Automobildatendistributor",
      ja: "自動車データ配布業者",
    }),
    project_metadata_doc_role: t({
      en: "IT Consultant",
      de: "IT-Consultant",
      ja: "ITコンサルタント",
    }),
    project_metadata_doc_language: t({
      en: "German, English",
      de: "DE, ENG",
      ja: "ドイツ語、英語",
    }),
    project_metadata_doc_background: t({
      en: "For handover to client-side colleagues, documentation in code and external systems was to be consistently implemented and completed.",
      de: "Zur Übergabe an kundenseitige Kollegen soll die Dokumentation im Code und in externen Systemen konsistent umgesetzt und fertiggestellt werden.",
      ja: "顧客側の同僚への引き継ぎのため、コードと外部システムにおける文書化を一貫して実装し、完了させる必要がありました。",
    }),
    project_metadata_doc_tasks: t({
      en: "For handover to client-side colleagues, documentation in code and external systems was to be consistently implemented and completed.",
      de: "Zur Übergabe an kundenseitige Kollegen soll die Dokumentation im Code und in externen Systemen konsistent umgesetzt und fertiggestellt werden.",
      ja: "顧客側の同僚への引き継ぎのため、コードと外部システムにおける文書化を一貫して実装し、完了させる必要がありました。",
    }),
    project_metadata_doc_subtasks: t({
      en: "Code documentation application, description in Confluence with instructions, data model documentation, versioning of codebase and documentation with GIT.",
      de: "Code Dokumentation Applikation, Beschreibung in Confluence mit Anleitung, Datenmodell dokumentieren, Versionierung der Codebasis und Dokumentation mit GIT",
      ja: "コード文書化アプリケーション、Confluenceでの説明（指示を含む）、データモデルの文書化、GITを用いたコードベースと文書化のバージョン管理",
    }),
    desc_metadata_doc_li1b: t({
      en: "Code Documentation & Comments",
      de: "Code-Dokumentation & Kommentare",
      ja: "コード文書化とコメント",
    }),
    desc_metadata_doc_li1: t({
      en: "Adding comments in the code to describe functions and relationships.",
      de: "Hinzufügen von Kommentaren im Code zur Beschreibung von Funktionen und Zusammenhängen",
      ja: "関数と関連性を説明するためのコードへのコメント追加",
    }),
    desc_metadata_doc_li1_topics: t({
      en: "Code Comments, Function Documentation, Code Relationships",
      de: "Code-Kommentare, Funktionsdokumentation, Code-Zusammenhänge",
      ja: "コードコメント、関数文書化、コードの関連性",
    }),
    desc_metadata_doc_li2b: t({
      en: "Documentation Export & Team Handover",
      de: "Dokumentationsexport & Team-Übergabe",
      ja: "文書化エクスポートとチーム引き継ぎ",
    }),
    desc_metadata_doc_li2: t({
      en: "Export of documentation as an interactive website with mkdocs, creation of entry documentation in Confluence with overview of accessibility, environments, deployment, coordination with client employees for personal handover and presentation of documentation.",
      de: "Export der Dokumentation als interaktive Webseite mit mkdocs, Einstiegsdokumentation in Confluence mit Überblick zur Erreichbarkeit, Umgebungen, Deployment, Absprache mit Kundenmitarbeitern zur persönlichen Übergabe und Vorstellung der Dokumentation",
      ja: "mkdocsを用いたインタラクティブなウェブサイトとしての文書化エクスポート、Confluenceにおけるエントリ文書化（アクセシビリティ、環境、デプロイメントの概要を含む）、顧客従業員との調整による個人的な引き継ぎと文書化のプレゼンテーション",
    }),
    desc_metadata_doc_li2_topics: t({
      en: "mkdocs, Interactive Documentation, Confluence, Accessibility, Deployment, Team Coordination",
      de: "mkdocs, Interaktive Dokumentation, Confluence, Erreichbarkeit, Deployment, Teamkoordination",
      ja: "mkdocs、インタラクティブな文書化、Confluence、アクセシビリティ、デプロイメント、チーム調整",
    }),

    // --- 7. Metadata Mapping V2 ---
    project_metadata_v2_title: t({
      en: "Metadata Mapping Application V2",
      de: "Webservice Metadaten-Mapping-Applikation V2",
      ja: "メタデータマッピングアプリケーション V2",
    }),
    project_metadata_v2_start: "11/2023",
    project_metadata_v2_end: "03/2024",
    project_metadata_v2_industry: t({
      en: "Automotive Data Distribution",
      de: "Internet Automobildatendistributor",
      ja: "自動車データ配布",
    }),
    project_metadata_v2_customer: t({
      en: "Automotive data distributor",
      de: "Internet Automobildatendistributor",
      ja: "自動車データ配布業者",
    }),
    project_metadata_v2_role: t({
      en: "IT Consultant",
      de: "IT-Consultant",
      ja: "ITコンサルタント",
    }),
    project_metadata_v2_language: t({
      en: "German, English",
      de: "DE, ENG",
      ja: "ドイツ語、英語",
    }),
    project_metadata_v2_background: t({
      en: "Introduction and support of architecture changes so that the application can describe and generate itself.",
      de: "Architekturänderung einführen und betreuen, sodass die Applikation mit sich selbst beschrieben und generiert werden kann.",
      ja: "アプリケーションが自らを記述し生成できるようにするためのアーキテクチャ変更の導入とサポート",
    }),
    project_metadata_v2_tasks: t({
      en: "Introduction and support of architecture changes so that the application can describe and generate itself.",
      de: "Architekturänderung einführen und betreuen, sodass die Applikation mit sich selbst beschrieben und generiert werden kann.",
      ja: "アプリケーションが自らを記述し生成できるようにするためのアーキテクチャ変更の導入とサポート",
    }),
    project_metadata_v2_subtasks: t({
      en: "Mapping architecture changes in data structure, implementing initial project code changes with Python, setting up database script generation.",
      de: "Architekturänderung in Datenstruktur abbilden, initiale Projektcode-Änderungen mit Python umsetzten, Datenbankscript-Generierung aufsetzten",
      ja: "データ構造におけるアーキテクチャ変更のマッピング、Pythonを用いた初期プロジェクトコード変更の実装、データベーススクリプト生成のセットアップ",
    }),
    desc_metadata_v2_li1b: t({
      en: "Database & Data Structure",
      de: "Datenbank & Datenstruktur",
      ja: "データベースとデータ構造",
    }),
    desc_metadata_v2_li1: t({
      en: "Expanding the data structure of the Mappingtool database (PostgreSQL), database connection via Flask, handling and structuring of Master & Meta Data.",
      de: "Datenstruktur der Mappingtool-Datenbank (PostgreSQL) erweitern, Datenbankverbindung über Flask, Umgang, sowie Strukturierung von Master- & Meta Data",
      ja: "マッピングツールデータベース（PostgreSQL）のデータ構造の拡張、Flaskを介したデータベース接続、マスターおよびメタデータの取り扱いと構造化",
    }),
    desc_metadata_v2_li1_topics: t({
      en: "PostgreSQL, Database Structure, Flask, Master Data, Meta Data, Data Modeling",
      de: "PostgreSQL, Datenbankstruktur, Flask, Masterdaten, Metadaten, Datenmodellierung",
      ja: "PostgreSQL、データベース構造、Flask、マスターデータ、メタデータ、データモデリング",
    }),
    desc_metadata_v2_li2b: t({
      en: "Code Generation & Deployment",
      de: "Code-Generierung & Bereitstellung",
      ja: "コード生成とデプロイメント",
    }),
    desc_metadata_v2_li2: t({
      en: "Python code cleanup in the Mapping Tool project, improving code consistency (to enable code generation), code generation based on the structure described in the data, linking application versioning with containerization using Docker, and providing the code.",
      de: "Python code cleanup im Projekt des Mapping-Tools, Code Konsistenz verbessern (um Code Generierung zu ermöglichen), Code-Generierung anhand des in den eigenen Daten beschrieben Aufbaus, Verknüpfung der Applikations-Versionierung mit der Containerisierung mit Docker und Bereitstellung des Codes",
      ja: "マッピングツールプロジェクトにおけるPythonコードのクリーンアップ、コードの一貫性向上（コード生成を可能にするため）、データに記述された構造に基づくコード生成、Dockerを用いたコンテナ化によるアプリケーションのバージョン管理との連携、コードの提供",
    }),
    desc_metadata_v2_li2_topics: t({
      en: "Python, Code Cleanup, Code Consistency, Code Generation, Docker, Containerization, Version Control",
      de: "Python, Code-Bereinigung, Code-Konsistenz, Code-Generierung, Docker, Containerisierung, Versionskontrolle",
      ja: "Python、コードクリーンアップ、コードの一貫性、コード生成、Docker、コンテナ化、バージョン管理",
    }),
    desc_metadata_v2_li3b: t({
      en: "Documentation & Versioning",
      de: "Dokumentation & Versionierung",
      ja: "文書化とバージョン管理",
    }),
    desc_metadata_v2_li3: t({
      en: "Revising documentation in Confluence, versioning the codebase with GIT.",
      de: "Überarbeitung der Dokumentation in Confluence, Versionierung der Codebasis mit GIT",
      ja: "Confluenceにおける文書化の改訂、GITを用いたコードベースのバージョン管理",
    }),
    desc_metadata_v2_li3_topics: t({
      en: "Confluence, Documentation, GIT, Version Control",
      de: "Confluence, Dokumentation, GIT, Versionskontrolle",
      ja: "Confluence、文書化、GIT、バージョン管理",
    }),

    // --- 8. Portfolio Management (Markowitz) ---
    project_portfolio_title: t({
      en: "Portfolio Management according to Markowitz",
      de: "Portfoliomanagement nach Markowitz",
      ja: "マークウィッツに基づくポートフォリオ管理",
    }),
    project_portfolio_start: "03/2023",
    project_portfolio_end: "03/2023",
    project_portfolio_industry: t({
      en: "Consulting",
      de: "Consulting",
      ja: "コンサルティング",
    }),
    project_portfolio_customer: t({
      en: "Own use",
      de: "eigene Verwendung",
      ja: "自社利用",
    }),
    project_portfolio_role: t({
      en: "Data Scientist",
      de: "Data Scientist",
      ja: "データサイエンティスト",
    }),
    project_portfolio_language: t({
      en: "English",
      de: "ENG",
      ja: "英語",
    }),
    project_portfolio_background: t({
      en: "Querying financial data via the Yahoo! Finance API. This is followed by data preparation, correlation analysis, the creation of a benchmark portfolio, and two portfolios that differ in their machine learning algorithms. A comparison with graphical preparation should show how the results have developed in terms of risk and return.",
      de: "Abfrage der Finanzdaten über die Yahoo! Finance API. Es folgen Datenaufbereitung, Korrelationsanalyse, die Bildung eines Benchmark-Portfolios und zwei, sich in ihren Machine-Learning-Algorithmen unterscheidende Portfolios. Ein Vergleich mit grafischer Aufbereitung soll zeigen, wie sich die Ergebnisse im Hinblick auf Risiko und Rendite entwickelt haben.",
      ja: "Yahoo! Finance APIを通じた金融データのクエリ。その後、データ準備、相関分析、ベンチマークポートフォリオの作成、および機械学習アルゴリズムが異なる2つのポートフォリオが続きます。グラフによる比較は、リスクとリターンの観点から結果がどのように発展したかを示すものです。",
    }),
    project_portfolio_tasks: t({
      en: "Querying financial data via the Yahoo! Finance API. This is followed by data preparation, correlation analysis, the creation of a benchmark portfolio, and two portfolios that differ in their machine learning algorithms.",
      de: "Abfrage der Finanzdaten über die Yahoo! Finance API. Es folgen Datenaufbereitung, Korrelationsanalyse, die Bildung eines Benchmark-Portfolios und zwei, sich in ihren Machine-Learning-Algorithmen unterscheidende Portfolios.",
      ja: "Yahoo! Finance APIを通じた金融データのクエリ。その後、データ準備、相関分析、ベンチマークポートフォリオの作成、および機械学習アルゴリズムが異なる2つのポートフォリオが続きます。",
    }),
    project_portfolio_subtasks: t({
      en: "Checking the retrievable data on Yahoo! Finance, setting up R project, conducting analyses, versioning the codebase with GIT, continuing and expanding the project to this day.",
      de: "Prüfung der abrufbaren Daten auf Yahoo! Finance, Aufsetzten R-Projekt, Durchführung von Analysen, Versionierung der Codebasis mit GIT, Weiterführung und Ausbau des Projektes bis heute",
      ja: "Yahoo! Financeで取得可能なデータのチェック、Rプロジェクトのセットアップ、分析の実施、GITを用いたコードベースのバージョン管理、プロジェクトの継続と今日までの拡張",
    }),
    desc_portfolio_li1b: t({
      en: "Data Preparation & Analysis",
      de: "Datenaufbereitung & Analyse",
      ja: "データ準備と分析",
    }),
    desc_portfolio_li1: t({
      en: "Creation of a list of symbols as examples, creation of the R project and use of Portfolio Management and common Tidyverse packages (dplyr, tidyr, stringr), querying and preparing data, calculating daily returns, mapping correlations.",
      de: "Erstellung einer Liste von Symbolen als Beispiele, Erstellung des R-Projekts und Verwendung des Porfolio Management und gängiger Tidyverse packages (dplyr, tidyr, stringr), Abfrage und Aufbereitung der Daten, Berechnung der täglichen Renditen, Abbildung der Korrelation",
      ja: "例としてのシンボルリストの作成、Rプロジェクトの作成とポートフォリオ管理および一般的なTidyverseパッケージ（dplyr、tidyr、stringr）の使用、データのクエリと準備、日次リターンの計算、相関のマッピング",
    }),
    desc_portfolio_li1_topics: t({
      en: "Yahoo Finance API, R, Tidyverse, dplyr, tidyr, stringr, Data Query, Data Preparation, Daily Returns, Correlation Analysis",
      de: "Yahoo Finance API, R, Tidyverse, dplyr, tidyr, stringr, Datenabfrage, Datenaufbereitung, Tagesrenditen, Korrelationsanalyse",
      ja: "Yahoo Finance API、R、Tidyverse、dplyr、tidyr、stringr、データクエリ、データ準備、日次リターン、相関分析",
    }),
    desc_portfolio_li2b: t({
      en: "Portfolio Creation & Optimization",
      de: "Portfolioerstellung & Optimierung",
      ja: "ポートフォリオ作成と最適化",
    }),
    desc_portfolio_li2: t({
      en: "Creation of an example portfolio that is equally weighted during rebalancing, creation of two individual portfolios with differences in risk metrics (Standard Deviation, Expected Shortfall), portfolio optimization including rebalancing, graphical preparation of results.",
      de: "Erstellung eines Beispielportfolios welches bei dem Rebalancing jeweils gleich gewichtet, Erstellung von zwei individuellen Portfolios mit Unterschied in den Risikokennzahlen (Standard Deviation, Expected Shortfall), Portfolio-Optimierung inkl. Rebalancing, Grafische Aufbereitung der Ergebnisse",
      ja: "リバランス時に等しくウェイト付けされた例ポートフォリオの作成、リスク指標（標準偏差、期待ショートフォール）の違いによる2つの個別ポートフォリオの作成、リバランスを含むポートフォリオ最適化、結果のグラフ化",
    }),
    desc_portfolio_li2_topics: t({
      en: "Portfolio Management, Rebalancing, Risk Metrics, Standard Deviation, Expected Shortfall, Portfolio Optimization, Graphical Visualization",
      de: "Portfoliomanagement, Rebalancing, Risikokennzahlen, Standardabweichung, Expected Shortfall, Portfolio-Optimierung, Grafische Aufbereitung",
      ja: "ポートフォリオ管理、リバランス、リスク指標、標準偏差、期待ショートフォール、ポートフォリオ最適化、グラフィカルな可視化",
    }),

    // --- 9. Metadata Mapping Extensions ---
    project_metadata_ext_title: t({
      en: "Metadata Mapping Application Extensions",
      de: "Webservice Metadaten-Mapping-Applikation Erweiterungen",
      ja: "メタデータマッピングアプリケーションの拡張",
    }),
    project_metadata_ext_start: "10/2022",
    project_metadata_ext_end: "10/2023",
    project_metadata_ext_industry: t({
      en: "Automotive Data Distribution",
      de: "Internet Automobildatendistributor",
      ja: "自動車データ配布",
    }),
    project_metadata_ext_customer: t({
      en: "Automotive data distributor",
      de: "Internet Automobildatendistributor",
      ja: "自動車データ配布業者",
    }),
    project_metadata_ext_role: t({
      en: "IT Consultant",
      de: "IT-Consultant",
      ja: "ITコンサルタント",
    }),
    project_metadata_ext_language: t({
      en: "German, English",
      de: "DE, ENG",
      ja: "ドイツ語、英語",
    }),
    project_metadata_ext_background: t({
      en: "Expansion of the mapped data from legacy systems and harmonization through mapping in the application by expanding it.",
      de: "Erweiterung der abgebildeten Daten aus den Altsystemen und Harmonisierung durch Mapping in der Applikation, durch Erweiterung dieser.",
      ja: "レガシシステムからマッピングされたデータの拡張と、アプリケーションの拡張によるマッピングを通じた調和",
    }),
    project_metadata_ext_tasks: t({
      en: "Expansion of the mapped data from legacy systems and harmonization through mapping in the application by expanding it.",
      de: "Erweiterung der abgebildeten Daten aus den Altsystemen und Harmonisierung durch Mapping in der Applikation, durch Erweiterung dieser.",
      ja: "レガシシステムからマッピングされたデータの拡張と、アプリケーションの拡張によるマッピングを通じた調和",
    }),
    project_metadata_ext_subtasks: t({
      en: "Use documentation of legacy systems to create metadata descriptions in the mapping tool, enable access for the data expert team and introduce their users to the tool.",
      de: "Dokmentation der Altsysteme nutzen, um Meta-Beschreibung in Mapping Tool zu erstellen, Zugriff für Daten-Expertenteam ermöglichen und deren Nutzer in das Tool einführen.",
      ja: "レガシシステムのドキュメントを利用してマッピングツールにメタデータの説明を作成し、データ専門家チームのアクセスを可能にし、ユーザーをツールに導入する",
    }),
    desc_metadata_ext_li1b: t({
      en: "Legacy System Documentation",
      de: "Dokumentation der Altsysteme",
      ja: "レガシシステムの文書化",
    }),
    desc_metadata_ext_li1: t({
      en: "Identifying data areas in modeling, loading data assets from databases (Oracle, Microsoft Postgres) of legacy systems, mapping metadata structures in the application.",
      de: "Datenbereiche in der Modellierung identifizieren, Datenbestände aus Datenbanken (Oracle, Microsoft Postgres) der Altsystemen laden, Metadatenstrukturen in der Applikation abbilden",
      ja: "モデリングにおけるデータ領域の特定、レガシシステムのデータベース（Oracle、Microsoft Postgres）からのデータ資産のロード、アプリケーションにおけるメタデータ構造のマッピング",
    }),
    desc_metadata_ext_li1_topics: t({
      en: "Data Modeling, Oracle, Microsoft PostgreSQL, Legacy Systems, Metadata Mapping",
      de: "Datenmodellierung, Oracle, Microsoft PostgreSQL, Altsysteme, Metadaten-Mapping",
      ja: "データモデリング、Oracle、Microsoft PostgreSQL、レガシシステム、メタデータマッピング",
    }),
    desc_metadata_ext_li2b: t({
      en: "Deployment & Versioning",
      de: "Bereitstellung & Versionierung",
      ja: "デプロイメントとバージョン管理",
    }),
    desc_metadata_ext_li2: t({
      en: "Making database adjustments to represent application changes, providing the application as a Docker container in AWS ECR, adapting data modeling in UML over time, versioning the codebase with GIT.",
      de: "Datenbankanpassungen zur Abbildung der Applikationsänderungen vornehmen, Bereitstellung der Applikation als Docker Container in AWS ECR, Daten-Modellierung in UML über die Zeit Anpassen, Versionierung der Codebasis mit GIT",
      ja: "アプリケーションの変更を反映させるためのデータベース調整、AWS ECRにおけるDockerコンテナとしてのアプリケーションの提供、時間をかけてUMLにおけるデータモデリングの適応、GITを用いたコードベースのバージョン管理",
    }),
    desc_metadata_ext_li2_topics: t({
      en: "Database Adjustments, Docker, AWS ECR, UML, Data Modeling, GIT, Version Control",
      de: "Datenbankanpassungen, Docker, AWS ECR, UML, Datenmodellierung, GIT, Versionskontrolle",
      ja: "データベース調整、Docker、AWS ECR、UML、データモデリング、GIT、バージョン管理",
    }),

    // --- 10. Azure DevOps Backlog ---
    project_azure_devops_title: t({
      en: "Backlog Restructuring (Adjustments in Azure DevOps)",
      de: "Backlog-Restrukturierung (Anpassungen in Azure Devops)",
      ja: "Azure DevOpsにおけるバックログの再構築",
    }),
    project_azure_devops_start: "08/2022",
    project_azure_devops_end: "08/2022",
    project_azure_devops_industry: t({
      en: "Automotive Data Distribution",
      de: "Internet Automobildatendistributor",
      ja: "自動車データ配布",
    }),
    project_azure_devops_customer: t({
      en: "Automotive data distributor",
      de: "Internet Automobildatendistributor",
      ja: "自動車データ配布業者",
    }),
    project_azure_devops_role: t({
      en: "IT Consultant",
      de: "IT-Consultant",
      ja: "ITコンサルタント",
    }),
    project_azure_devops_language: t({
      en: "German, English",
      de: "DE, ENG",
      ja: "ドイツ語、英語",
    }),
    project_azure_devops_background: t({
      en: "Restructuring the backlog and redesigning task templates within Azure DevOps to adapt to the team's workflow.",
      de: "Restrukturierung des Backlogs und Umgestaltung der Task-Templates innerhalb von Azure Devops zur Anpassung an Arbeitsweise des Teams.",
      ja: "チームのワークフローに適応するためのAzure DevOpsにおけるバックログの再構築とタスクテンプレートの再設計",
    }),
    project_azure_devops_tasks: t({
      en: "Restructuring the backlog and redesigning task templates within Azure DevOps to adapt to the team's workflow.",
      de: "Restrukturierung des Backlogs und Umgestaltung der Task-Templates innerhalb von Azure Devops zur Anpassung an Arbeitsweise des Teams.",
      ja: "チームのワークフローに適応するためのAzure DevOpsにおけるバックログの再構築とタスクテンプレートの再設計",
    }),
    project_azure_devops_subtasks: t({
      en: "Conducting team workshops for requirements analysis, modifying the Kanban model in Azure DevOps, adapting task templates.",
      de: "Team-Workshops zur Anforderungsanalyse durchführen, Kanban-Modell in Azure DevOps abändern, Aufgaben-Templates anpassen",
      ja: "要件分析のためのチームワークショップの実施、Azure DevOpsにおけるカンバンモデルの変更、タスクテンプレートの適応",
    }),
    desc_azure_devops_li1b: t({
      en: "Permissions & Board Adjustment",
      de: "Berechtigungen & Board-Anpassung",
      ja: "権限とボードの調整",
    }),
    desc_azure_devops_li1: t({
      en: "Taking over permissions for Azure DevOps in the client's partial area, adjusting the Kanban board.",
      de: "Berechtigungen für Azure Devops im Teilbereich des Kunden übernehmen, Anpassung des Kanban-Boards",
      ja: "顧客の部分的な領域におけるAzure DevOpsの権限を引き継ぐ、カンバンボードの調整",
    }),
    desc_azure_devops_li1_topics: t({
      en: "Azure DevOps, Permissions, Kanban Board, Agile Workflows",
      de: "Azure DevOps, Berechtigungen, Kanban-Board, Agile Workflows",
      ja: "Azure DevOps、権限、カンバンボード、アジャイルワークフロー",
    }),
    desc_azure_devops_li2b: t({
      en: "Templates & Team Introduction",
      de: "Vorlagen & Team-Einführung",
      ja: "テンプレートとチーム紹介",
    }),
    desc_azure_devops_li2: t({
      en: "Revising task card templates, documentation in Confluence, introduction for the supported team.",
      de: "Templates der Arbeitskarten überarbeiten, Dokumentation in Confluence, Einführung für das betreute Team",
      ja: "タスクカードテンプレートの改訂、Confluenceにおける文書化、サポートチームへの紹介",
    }),
    desc_azure_devops_li2_topics: t({
      en: "Task Templates, Confluence, Team Training, Process Documentation",
      de: "Aufgabenvorlagen, Confluence, Teamschulung, Prozessdokumentation",
      ja: "タスクテンプレート、Confluence、チームトレーニング、プロセス文書化",
    }),

    // --- 11. Wikimedia API Query ---
    project_wikimedia_title: t({
      en: "Programmatic Query of Wikimedia API",
      de: "Programmatische Abfrage Wikimedia API",
      ja: "Wikimedia APIのプログラムによるクエリ",
    }),
    project_wikimedia_start: "06/2021",
    project_wikimedia_end: "07/2021",
    project_wikimedia_industry: t({
      en: "Consulting",
      de: "Consulting",
      ja: "コンサルティング",
    }),
    project_wikimedia_customer: t({
      en: "tuteco GmbH",
      de: "tuteco GmbH",
      ja: "tuteco GmbH",
    }),
    project_wikimedia_role: t({
      en: "Data Engineer",
      de: "Data Engineer",
      ja: "データエンジニア",
    }),
    project_wikimedia_language: t({
      en: "German",
      de: "DE",
      ja: "ドイツ語",
    }),
    project_wikimedia_background: t({
      en: "For further purposes, the Wikimedia API was to be queried in a first step and the responses processed.",
      de: "Für weitere Zwecke soll in einem ersten Schritt die Wikimedia API abgerufen werden und die Antworten aufbereitet werden.",
      ja: "さらなる目的のために、第一段階としてWikimedia APIをクエリし、レスポンスを処理する予定でした。",
    }),
    project_wikimedia_tasks: t({
      en: "For further purposes, the Wikimedia API was to be queried in a first step and the responses processed.",
      de: "Für weitere Zwecke soll in einem ersten Schritt die Wikimedia API abgerufen werden und die Antworten aufbereitet werden.",
      ja: "さらなる目的のために、第一段階としてWikimedia APIをクエリし、レスポンスを処理する予定でした。",
    }),
    project_wikimedia_subtasks: t({
      en: "Setting up a project in R, getting to know the Wikimedia data model, creating a script to query the API, testing and documenting, versioning the codebase and documentation with GIT.",
      de: "Aufsetzung eines Projekts in R, Kennenlernen des Datenmodells von Wikimedia, Skript zur Abfrage der API erstellen, testen und dokumentieren, Versionierung der Codebasis und Dokumentation mit GIT",
      ja: "Rにおけるプロジェクトのセットアップ、Wikimediaのデータモデルの理解、APIクエリのためのスクリプト作成、テストと文書化、GITを用いたコードベースと文書化のバージョン管理",
    }),
    desc_wikimedia_li1b: t({
      en: "Project Setup & API Scripting",
      de: "Projektaufbau & API-Skripting",
      ja: "プロジェクトセットアップとAPIスクリプティング",
    }),
    desc_wikimedia_li1: t({
      en: "Setting up a project in R, getting to know the Wikimedia data model, creating a script to query the API.",
      de: "Aufsetzung eines Projekts in R, Kennenlernen des Datenmodells von Wikimedia, Skript zur Abfrage der API erstellen",
      ja: "Rにおけるプロジェクトのセットアップ、Wikimediaのデータモデルの理解、APIクエリのためのスクリプト作成",
    }),
    desc_wikimedia_li1_topics: t({
      en: "R, Project Setup, Data Models, API Scripting, REST API",
      de: "R, Projekteinrichtung, Datenmodelle, API-Skripting, REST-API",
      ja: "R、プロジェクトセットアップ、データモデル、APIスクリプティング、REST API",
    }),
    desc_wikimedia_li2b: t({
      en: "Testing & Versioning",
      de: "Testen & Versionierung",
      ja: "テストとバージョン管理",
    }),
    desc_wikimedia_li2: t({
      en: "Testing and documenting the script, versioning the codebase and documentation with GIT.",
      de: "Skript testen und dokumentieren, Versionierung der Codebasis und Dokumentation mit GIT",
      ja: "スクリプトのテストと文書化、GITを用いたコードベースと文書化のバージョン管理",
    }),
    desc_wikimedia_li2_topics: t({
      en: "Testing, Documentation, GIT, Version Control, GitHub",
      de: "Testen, Dokumentation, GIT, Versionskontrolle, GitHub",
      ja: "テスト、文書化、GIT、バージョン管理、GitHub",
    }),

    // --- 12. Metadata Mapping V1 ---
    project_metadata_v1_title: t({
      en: "Metadata Mapping Application V1",
      de: "Webservice Metadaten-Mapping-Applikation V1",
      ja: "メタデータマッピングアプリケーション V1",
    }),
    project_metadata_v1_start: "09/2020",
    project_metadata_v1_end: "09/2022",
    project_metadata_v1_industry: t({
      en: "Automotive Data Distribution",
      de: "Internet Automobildatendistributor",
      ja: "自動車データ配布",
    }),
    project_metadata_v1_customer: t({
      en: "Automotive data distributor",
      de: "Internet Automobildatendistributor",
      ja: "自動車データ配布業者",
    }),
    project_metadata_v1_role: t({
      en: "IT Consultant",
      de: "IT-Consultant",
      ja: "ITコンサルタント",
    }),
    project_metadata_v1_language: t({
      en: "German, English",
      de: "DE, ENG",
      ja: "ドイツ語、英語",
    }),
    project_metadata_v1_background: t({
      en: "Mapping metadata from various systems within a Python application. Data analyses on the databases of the mapped systems, as well as the metadata mapping database. In addition, data engineering to adapt the database and improve deployment.",
      de: "Abbildung der Metadaten verschiedener Systeme innerhalb einer Python-Applikation. Datenanalysen auf den Datenbanken der abgebildeten Systeme, sowie der Datenbank zum Metadatenmapping. Darüber hinaus Data Engineering zur Anpassung der Datenbank und Verbesserung des Deployments.",
      ja: "Pythonアプリケーション内でさまざまなシステムからのメタデータをマッピング。マッピングされたシステムのデータベースおよびメタデータマッピングデータベースでのデータ分析。また、データベースの適応とデプロイメントの改善のためのデータエンジニアリング。",
    }),
    project_metadata_v1_tasks: t({
      en: "Mapping metadata from various systems within a Python application. Data analyses on the databases of the mapped systems, as well as the metadata mapping database.",
      de: "Abbildung der Metadaten verschiedener Systeme innerhalb einer Python-Applikation. Datenanalysen auf den Datenbanken der abgebildeten Systeme, sowie der Datenbank zum Metadatenmapping.",
      ja: "Pythonアプリケーション内でさまざまなシステムからのメタデータをマッピング。マッピングされたシステムのデータベースおよびメタデータマッピングデータベースでのデータ分析。",
    }),
    project_metadata_v1_subtasks: t({
      en: "Data modeling and documentation, further development of the metadata application due to additional data areas.",
      de: "Datenmodellierung und Dokumentation, Weiterentwicklung der Metadaten-Applikation aufgrund zusätzlicher Datenbereiche",
      ja: "データモデリングと文書化、追加のデータ領域によるメタデータアプリケーションのさらなる開発",
    }),
    desc_metadata_v1_li1b: t({
      en: "Database Analysis & Verification",
      de: "Datenbankanalyse & Überprüfung",
      ja: "データベース分析と検証",
    }),
    desc_metadata_v1_li1: t({
      en: "Reviewing data in databases of legacy systems (Oracle SQL, Microsoft SQL, PostgreSQL), database connection via Flask.",
      de: "Überprüfung der Daten in Datenbanken der Altsysteme (Oracle SQL, Microsoft SQL, PostgreSQL), Datenbankverbindung über Flask",
      ja: "レガシシステムのデータベース（Oracle SQL、Microsoft SQL、PostgreSQL）におけるデータのレビュー、Flaskを介したデータベース接続",
    }),
    desc_metadata_v1_li1_topics: t({
      en: "Oracle SQL, Microsoft SQL, PostgreSQL, Database Review, Flask, Legacy Systems",
      de: "Oracle SQL, Microsoft SQL, PostgreSQL, Datenbankprüfung, Flask, Altsysteme",
      ja: "Oracle SQL、Microsoft SQL、PostgreSQL、データベースレビュー、Flask、レガシシステム",
    }),
    desc_metadata_v1_li2b: t({
      en: "Application Development & Deployment",
      de: "Anwendungsentwicklung & Bereitstellung",
      ja: "アプリケーション開発とデプロイメント",
    }),
    desc_metadata_v1_li2: t({
      en: "Python programming of the application, providing the application as a Docker container in AWS ECR, version control via Git and project organization in Azure DevOps, data engineering and analytics for necessary database adaptation.",
      de: "Python Programmierung der Applikation, Bereitstellung der Applikation als Docker Container in AWS ECR, Versionsverwaltung über Git und Projektorganisation in Azure DevOps, Data Engineering und Analytics zur notwendigen Anpassung der verbundenen Datenbank",
      ja: "アプリケーションのPythonプログラミング、AWS ECRにおけるDockerコンテナとしてのアプリケーションの提供、Gitを介したバージョン管理とAzure DevOpsにおけるプロジェクト組織、必要なデータベース適応のためのデータエンジニアリングと分析",
    }),
    desc_metadata_v1_li2_topics: t({
      en: "Python, Docker, AWS ECR, GIT, Azure DevOps, Data Engineering, Data Analytics, Database Adaptation",
      de: "Python, Docker, AWS ECR, GIT, Azure DevOps, Data Engineering, Datenanalyse, Datenbankanpassung",
      ja: "Python、Docker、AWS ECR、GIT、Azure DevOps、データエンジニアリング、データ分析、データベース適応",
    }),
    desc_metadata_v1_li3b: t({
      en: "Data Modeling & Documentation",
      de: "Datenmodellierung & Dokumentation",
      ja: "データモデリングと文書化",
    }),
    desc_metadata_v1_li3: t({
      en: "Data modeling in UML, documentation of data structures in Confluence for non-technical users including management.",
      de: "Datenmodellierung in UML, Dokumentation der Datenstrukturen in Confluence für nicht-technische Benutzer inklusive Management",
      ja: "UMLを用いたデータモデリング、管理を含む非技術ユーザー向けのConfluenceにおけるデータ構造の文書化",
    }),
    desc_metadata_v1_li3_topics: t({
      en: "UML, Data Modeling, Confluence, Non-Technical Documentation, Management Reporting",
      de: "UML, Datenmodellierung, Confluence, Nicht-technische Dokumentation, Management-Berichte",
      ja: "UML、データモデリング、Confluence、非技術的文書化、経営報告",
    }),

    // --- 13. VBA Metadata Mapping ---
    project_vba_metadata_title: t({
      en: "VBA Program for Metadata Mapping",
      de: "VBA-Programm für das Mapping von Metadaten",
      ja: "メタデータマッピングのためのVBAプログラム",
    }),
    project_vba_metadata_start: "05/2020",
    project_vba_metadata_end: "08/2020",
    project_vba_metadata_industry: t({
      en: "Automotive Data Distribution",
      de: "Internet Automobildatendistributor",
      ja: "自動車データ配布",
    }),
    project_vba_metadata_customer: t({
      en: "Automotive data distributor",
      de: "Internet Automobildatendistributor",
      ja: "自動車データ配布業者",
    }),
    project_vba_metadata_role: t({
      en: "IT Consultant",
      de: "IT-Consultant",
      ja: "ITコンサルタント",
    }),
    project_vba_metadata_language: t({
      en: "German",
      de: "DE",
      ja: "ドイツ語",
    }),
    project_vba_metadata_background: t({
      en: "Mapping metadata from various systems within an Excel file. VBA programming to interact with this data.",
      de: "Abbildung der Metadaten verschiedener Systeme innerhalb einer Excel-Datei. VBA-Programmierung zur Interaktion mit diesen Daten.",
      ja: "Excelファイル内でさまざまなシステムからのメタデータをマッピング。このデータとのやり取りのためのVBAプログラミング。",
    }),
    project_vba_metadata_tasks: t({
      en: "Mapping metadata from various systems within an Excel file. VBA programming to interact with this data.",
      de: "Abbildung der Metadaten verschiedener Systeme innerhalb einer Excel-Datei. VBA-Programmierung zur Interaktion mit diesen Daten.",
      ja: "Excelファイル内でさまざまなシステムからのメタデータをマッピング。このデータとのやり取りのためのVBAプログラミング。",
    }),
    project_vba_metadata_subtasks: t({
      en: "Creating an interactive VBA program in which data areas are listed and can be connected via a mapping.",
      de: "VBA-Programm zur interaktiven Bedienung schaffen, in welchem die Datenbereiche aufgeführt und über ein Mapping verbunden werden können",
      ja: "データ領域がリストされ、マッピングを通じて接続できる対話型VBAプログラムの作成",
    }),
    desc_vba_metadata_li1b: t({
      en: "Excel Setup & Data Loading",
      de: "Excel-Einrichtung & Datenladen",
      ja: "Excelのセットアップとデータロード",
    }),
    desc_vba_metadata_li1: t({
      en: "Creating Excel file, initially loading and structuring data, handling and structuring of Master & Meta Data.",
      de: "Excel-Datei erstellen, Daten initial laden und strukturieren, Umgang, sowie Strukturierung von Master- & Meta Data",
      ja: "Excelファイルの作成、データの初期ロードと構造化、マスターおよびメタデータの取り扱いと構造化",
    }),
    desc_vba_metadata_li1_topics: t({
      en: "Excel, Data Loading, Data Structuring, Master Data, Meta Data",
      de: "Excel, Datenladen, Datenstrukturierung, Masterdaten, Metadaten",
      ja: "Excel、データロード、データ構造化、マスターデータ、メタデータ",
    }),
    desc_vba_metadata_li2b: t({
      en: "VBA Programming & Interaction",
      de: "VBA-Programmierung & Interaktion",
      ja: "VBAプログラミングとインタラクション",
    }),
    desc_vba_metadata_li2: t({
      en: "Setting up mapping sheets, VBA programming to enable interaction.",
      de: "Mapping-Sheets aufsetzten, VBA-Programmierung zur Ermöglichung von Interaktion",
      ja: "マッピングシートのセットアップ、インタラクションを可能にするためのVBAプログラミング",
    }),
    desc_vba_metadata_li2_topics: t({
      en: "VBA, Mapping Sheets, Interactive Programming, User Interaction",
      de: "VBA, Mapping-Sheets, Interaktive Programmierung, Benutzerinteraktion",
      ja: "VBA、マッピングシート、インタラクティブプログラミング、ユーザーインタラクション",
    }),
    desc_vba_metadata_li3b: t({
      en: "Data Exploration",
      de: "Datenexploration",
      ja: "データ探索",
    }),
    desc_vba_metadata_li3: t({
      en: "Data exploration in databases of legacy systems (Oracle SQL, Microsoft SQL, PostgreSQL).",
      de: "Datenexploration in Datenbanken der Altsysteme (Oracle SQL, Microsoft SQL, PostgreSQL)",
      ja: "レガシシステムのデータベース（Oracle SQL、Microsoft SQL、PostgreSQL）におけるデータ探索",
    }),
    desc_vba_metadata_li3_topics: t({
      en: "Oracle SQL, Microsoft SQL, PostgreSQL, Legacy Systems, Data Exploration",
      de: "Oracle SQL, Microsoft SQL, PostgreSQL, Altsysteme, Datenexploration",
      ja: "Oracle SQL、Microsoft SQL、PostgreSQL、レガシシステム、データ探索",
    }),

    // --- 14. Enterprise Architect Replacement ---
    project_ea_replacement_title: t({
      en: "Replacement of Enterprise Architect",
      de: "Ablösung von Enterprise Architect",
      ja: "Enterprise Architectの置き換え",
    }),
    project_ea_replacement_start: "01/2020",
    project_ea_replacement_end: "04/2020",
    project_ea_replacement_industry: t({
      en: "Automotive Data Distribution",
      de: "Internet Automobildatendistributor",
      ja: "自動車データ配布",
    }),
    project_ea_replacement_customer: t({
      en: "Automotive data distributor",
      de: "Internet Automobildatendistributor",
      ja: "自動車データ配布業者",
    }),
    project_ea_replacement_role: t({
      en: "IT Consultant",
      de: "IT-Consultant",
      ja: "ITコンサルタント",
    }),
    project_ea_replacement_language: t({
      en: "German",
      de: "DE",
      ja: "ドイツ語",
    }),
    project_ea_replacement_background: t({
      en: "Building knowledge structures for the core data team and transferring existing information from Enterprise Architect to Confluence.",
      de: "Aufbau von Wissensstrukturen für das Kerndatenteam und Überführung der vorhandenen Informationen innerhalb Enterprise Architects nach Confluence.",
      ja: "コアデータチームのための知識構造の構築と、Enterprise Architect内の既存情報をConfluenceに移行。",
    }),
    project_ea_replacement_tasks: t({
      en: "Building knowledge structures for the core data team and transferring existing information from Enterprise Architect to Confluence.",
      de: "Aufbau von Wissensstrukturen für das Kerndatenteam und Überführung der vorhandenen Informationen innerhalb Enterprise Architects nach Confluence.",
      ja: "コアデータチームのための知識構造の構築と、Enterprise Architect内の既存情報をConfluenceに移行。",
    }),
    project_ea_replacement_subtasks: t({
      en: "Recording data models in Enterprise Architect, building knowledge structure in Confluence, transferring information.",
      de: "Erfassung der Datenmodelle in Enterprise Architect, Aufbau der Wissenstruktur in Confluence, Übertragung der Informationen",
      ja: "Enterprise Architectにおけるデータモデルの記録、Confluenceにおける知識構造の構築、情報の移行",
    }),
    desc_ea_replacement_li1b: t({
      en: "Confluence Administration",
      de: "Confluence-Administration",
      ja: "Confluence管理",
    }),
    desc_ea_replacement_li1: t({
      en: "Administering the team Confluence space, setting up page structures.",
      de: "Administration des Team-Confluence-Space, Seitenstrukturen aufsetzen",
      ja: "チームConfluenceスペースの管理、ページ構造のセットアップ",
    }),
    desc_ea_replacement_li1_topics: t({
      en: "Confluence, Space Administration, Page Structures, Knowledge Management",
      de: "Confluence, Space-Verwaltung, Seitenstrukturen, Wissensmanagement",
      ja: "Confluence、スペース管理、ページ構造、知識管理",
    }),
    desc_ea_replacement_li2b: t({
      en: "Data Model Documentation",
      de: "Dokumentation des Datenmodells",
      ja: "データモデルの文書化",
    }),
    desc_ea_replacement_li2: t({
      en: "Creating and filling pages to transfer the information contained in Enterprise Architect, documenting the data model for team members.",
      de: "Seitenerstellung und -befüllung zur Übertragung der in Enterprise Architect enthaltenen Information, Dokumentation des Datenmodells für Teammitglieder",
      ja: "Enterprise Architectに含まれる情報を移行するためのページ作成と充実、チームメンバーのためのデータモデルの文書化",
    }),
    desc_ea_replacement_li2_topics: t({
      en: "Enterprise Architect, Information Transfer, Data Model Documentation, Team Documentation",
      de: "Enterprise Architect, Informationsübertragung, Datenmodell-Dokumentation, Teamdokumentation",
      ja: "Enterprise Architect、情報移行、データモデル文書化、チーム文書化",
    }),

    // --- 15. Microsoft Office Introduction ---
    project_office_title: t({
      en: "Introduction of Microsoft Office",
      de: "Einführung von Microsoft Office",
      ja: "Microsoft Officeの導入",
    }),
    project_office_start: "08/2019",
    project_office_end: "12/2019",
    project_office_industry: t({
      en: "Education",
      de: "Bildung",
      ja: "教育",
    }),
    project_office_customer: t({
      en: "Private educational institution",
      de: "privates Bildungsunternehmen",
      ja: "民間教育機関",
    }),
    project_office_role: t({
      en: "IT Consultant",
      de: "IT-Consultant",
      ja: "ITコンサルタント",
    }),
    project_office_language: t({
      en: "German",
      de: "DE",
      ja: "ドイツ語",
    }),
    project_office_background: t({
      en: "Switching to Microsoft Office and providing licenses for administration, teaching staff, and learners.",
      de: "Umstieg auf Microsoft Office und zur Verfügungsstellung von Lizenzen für Administration, Lehrpersonal und Lernende.",
      ja: "Microsoft Officeへの移行と、管理職、教員、学習者向けのライセンス提供。",
    }),
    project_office_tasks: t({
      en: "Switching to Microsoft Office and providing licenses for administration, teaching staff, and learners.",
      de: "Umstieg auf Microsoft Office und zur Verfügungsstellung von Lizenzen für Administration, Lehrpersonal und Lernende.",
      ja: "Microsoft Officeへの移行と、管理職、教員、学習者向けのライセンス提供。",
    }),
    project_office_subtasks: t({
      en: "Certification as Microsoft Education Partner, procurement of licenses, setup of Microsoft environment.",
      de: "Zertifizierung als Microsoft Education Partner, Beschaffung der Lizenzen, Einrichtung der Microsoft-Umgebung",
      ja: "Microsoft Education Partnerとしての認証、ライセンスの調達、Microsoft環境のセットアップ",
    }),
    desc_office_li1b: t({
      en: "License & Certification",
      de: "Lizenzen & Zertifizierung",
      ja: "ライセンスと認証",
    }),
    desc_office_li1: t({
      en: "Certification as Microsoft Education Partner, procurement of licenses.",
      de: "Zertifizierung als Microsoft Education Partner, Beschaffung der Lizenzen",
      ja: "Microsoft Education Partnerとしての認証、ライセンスの調達",
    }),
    desc_office_li1_topics: t({
      en: "Microsoft Education Partner, License Procurement, Education Licenses",
      de: "Microsoft Education Partner, Lizenzbeschaffung, Bildungslizenzen",
      ja: "Microsoft Education Partner、ライセンス調達、教育ライセンス",
    }),
    desc_office_li2b: t({
      en: "User & Environment Setup",
      de: "Benutzer & Umgebungs-Einrichtung",
      ja: "ユーザーと環境のセットアップ",
    }),
    desc_office_li2: t({
      en: "Setting up new user accounts for employees in Office including Outlook, creating teacher and student accounts, managing the organization and implementing rules.",
      de: "Einrichtung neuer Benutzerkonten für die Mitarbeiter in Office inklusive Outlook, Anlegung der Dozenten- und Schülerkonten, Verwaltung der Organisation und Implementierung der Regeln",
      ja: "Office（Outlookを含む）における従業員向けの新しいユーザーアカウントのセットアップ、教員と学生のアカウント作成、組織の管理とルールの実装",
    }),
    desc_office_li2_topics: t({
      en: "Microsoft Office, Outlook, User Accounts, Teacher Accounts, Student Accounts, Organization Management",
      de: "Microsoft Office, Outlook, Benutzerkonten, Dozentenkonten, Schülerkonten, Organisationsverwaltung",
      ja: "Microsoft Office、Outlook、ユーザーアカウント、教員アカウント、学生アカウント、組織管理",
    }),
  },
} satisfies Dictionary;

export default projectContent;