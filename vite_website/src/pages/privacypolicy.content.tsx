import {type Dictionary, t} from "intlayer";

const legalnoteContent = {
    key: "privacypolicy",

    content: {
        h1: t({
            en: "Privacy Policy",
            de: "Datenschutzerklärung",
            ja: "プライバシーポリシー",
        }),
        intro: t({
            en: "The following information provides a brief overview of what happens to your personal data when you visit this website. Personal data refers to any information that can be used to identify you personally. For detailed information on data protection, please refer to our privacy policy, which is set out below.",
            de: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.",
            ja: "以下の説明は、当ウェブサイトを訪問された際に、お客様の個人情報がどのように取り扱われるかについて、簡潔にまとめたものです。個人情報とは、お客様個人を特定できるあらゆる情報を指します。プライバシー保護に関する詳細については、本文の下部に掲載されているプライバシーポリシーをご覧ください。",
        }),

        h_collection: t({
            en: "Data collection on this website",
            de: "Datenerfassung auf dieser Webseite",
            ja: "当ウェブサイトにおけるデータ収集",
        }),
        t1_collection: t({
            en: "Data processing on this website is carried out by the website operator. Their contact details can be found in the section ‘Information on the data controller’ in this privacy policy.",
            de: "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.",
            ja: "本ウェブサイトにおけるデータ処理は、ウェブサイト運営者によって行われます。運営者の連絡先については、本プライバシーポリシーの「責任者に関する情報」の項をご参照ください。",
        }),
        t2_collection: t({
            en: "Your data is collected, on the one hand, when you provide it to us. This may include, for example, data that you enter into a contact form.",
            de: "Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.",
            ja: "お客様のデータは、まず、お客様が当社に提供されることによって収集されます。これには、例えば、お問い合わせフォームに入力されたデータなどが含まれます。",
        }),
        t3_collection: t({
            en: "Other data is collected automatically or with your consent by our IT systems when you visit the website. This consists primarily of technical data (e.g. internet browser, operating system or time of page view). This data is collected automatically as soon as you access this website.",
            de: "Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.",
            ja: "その他のデータは、当ウェブサイトにアクセスされた際、自動的に、またはお客様の同意を得て、当社のITシステムによって収集されます。これらは主に技術的なデータ（例：インターネットブラウザ、オペレーティングシステム、ページ閲覧時刻など）です。これらのデータの収集は、お客様が当ウェブサイトにアクセスした時点で自動的に行われます。",
        }),
        t4_collection: t({
            en: "Some of the data is collected to ensure the website functions correctly. Other data may be used to analyse your user behaviour. Where contracts can be concluded or initiated via the website, the data provided will also be processed for the purposes of contractual offers, orders or other enquiries.",
            de: "Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.",
            ja: "データの一部は、ウェブサイトを問題なく提供するために収集されます。その他のデータは、ユーザーの行動分析に使用される場合があります。ウェブサイトを通じて契約が締結または開始される可能性がある場合、送信されたデータは契約の提案、注文、その他の依頼に関する問い合わせにも利用されます。",
        }),
        t5_collection: t({
            en: "You have the right at any time to obtain, free of charge, information regarding the origin, recipients and purpose of your stored personal data. You also have the right to request the rectification or erasure of this data. If you have given your consent to data processing, you may withdraw this consent at any time with effect for the future. Furthermore, you have the right, under certain circumstances, to request the restriction of the processing of your personal data. Furthermore, you have the right to lodge a complaint with the relevant supervisory authority.",
            de: "Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Zudem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.",
            ja: "お客様は、保存されているご自身の個人データの出所、受領者、および利用目的について、いつでも無料で情報を得る権利を有します。また、これらのデータの訂正または削除を請求する権利も有します。データ処理への同意をすでに与えている場合、将来に向けていつでもその同意を取り消すことができます。さらに、特定の状況下において、ご自身の個人データの処理の制限を請求する権利も有します。さらに、お客様は管轄の監督当局に対して苦情を申し立てる権利を有します。",
        }),
        t6_collection: t({
            en: "You may contact us at any time regarding this matter or any other questions you may have about data protection.",
            de: "Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.",
            ja: "これに関するお問い合わせ、およびデータ保護に関するその他のご質問については、いつでも当社までご連絡ください。",
        }),

        h_hosting: t({
            en: "Hosting",
            de: "Hosting",
            ja: "ホスティング",
        }),
        t1_hosting: t({
            en: "This website is hosted externally. The personal data collected on this website is stored on the host’s servers. This may include, in particular, IP addresses, contact enquiries, metadata and communication data, contractual data, contact details, names, website visits and other data generated via a website.",
            de: "Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.",
            ja: "当ウェブサイトは外部ホスティングサービスを利用しています。当ウェブサイトで収集される個人データは、ホスティング事業者のサーバーに保存されます。これには、主にIPアドレス、お問い合わせ内容、メタデータおよび通信データ、契約データ、連絡先情報、氏名、ウェブサイトへのアクセス履歴、およびウェブサイトを通じて生成されるその他のデータが含まれます。",
        }),
        t2_hosting: t({
            en: "External hosting is carried out for the purpose of fulfilling our contractual obligations towards our potential and existing customers (Article 6(1)(b) of the GDPR) and in the interests of ensuring the secure, fast and efficient provision of our online services by a professional provider (Article 6(1)(f) of the GDPR). Where consent has been sought, processing takes place exclusively on the basis of Article 6(1)(a) of the GDPR and Section 25(1) of the TDDDG, insofar as the consent covers the storage of cookies or access to information on the user’s device (e.g. device fingerprinting) within the meaning of the TDDDG. Consent may be withdrawn at any time.",
            de: "Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.",
            ja: "外部ホスティングは、当社の見込み顧客および既存顧客に対する契約履行を目的として（GDPR第6条第1項b号）、また専門業者による安全かつ迅速で効率的なオンラインサービスの提供を図るために行われます（GDPR第6条第1項f号）。適切な同意が求められた場合、その同意がTDDDG（ドイツ電気通信データ保護法）の定義におけるクッキーの保存またはユーザーの端末情報へのアクセス（例：デバイスフィンガープリンティング）を含む限り、処理はGDPR第6条第1項(a)号およびTDDDG第25条第1項のみに基づいて行われます。同意はいつでも撤回可能です。",
        }),
        t3_hosting: t({
            en: "Our hosting provider(s) will only process your data to the extent necessary to fulfil their contractual obligations and will comply with our instructions regarding this data.",
            de: "Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist, und unsere Weisungen in Bezug auf diese Daten befolgen.",
            ja: "当社のホスティング事業者は、そのサービス提供義務を履行するために必要な範囲内でのみお客様のデータを処理し、当該データに関する当社の指示に従います。",
        }),
        t4_hosting: t({
            en: "We use the following hosting provider(s):",
            de: "Wir setzen folgende(n) Hoster ein:",
            ja: "弊社では以下のホスティングサービスを利用しています:",
        }),
        hoster_name: "TrafficPlex GmbH",
        hoster_adress: "Konsul-Smidt-Str. 90",
        hoster_area: "28217 Bremen",
        country: t({
            en: "Germany",
            de: "Deutschland",
            ja: "ドイツ",
        }),
        h_hosting_contract: t({
            en: "Data processing",
            de: "Auftragsverarbeitung",
            ja: "受託処理",
        }),
        t_hosting_contract: t({
            en: "We have entered into a data processing agreement (DPA) for the use of the aforementioned service. This is a contract required under data protection law, which ensures that the service provider processes the personal data of our website visitors only in accordance with our instructions and in compliance with the GDPR.",
            de: "Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.",
            ja: "当社は、上記のサービスを利用するために、データ処理委託契約（AVV）を締結しました。これは、データ保護法に基づき義務付けられている契約であり、当該サービス提供者が当社のウェブサイト訪問者の個人データを、当社の指示に従い、かつGDPRを遵守してのみ処理することを保証するものです。",
        }),

        h_general: t({
            en: "General information and mandatory details",
            de: "Allgemeine Hinweise und Pflichtinformationen",
            ja: "一般的な注意事項および必須情報",
        }),
        t1_general: t({
            en: "The operators of this website take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations and this privacy policy.",
            de: "Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.",
            ja: "当サイトの運営者は、お客様の個人情報の保護を極めて重要視しています。当社は、お客様の個人情報を機密情報として扱い、法的データ保護規定および本プライバシーポリシーに従って取り扱います。",
        }),
        t2_general: t({
            en: "When you use this website, various personal data is collected. Personal data is information that can be used to identify you personally. This privacy policy explains what data we collect and how we use it. It also explains how and for what purpose this is done.",
            de: "Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.",
            ja: "本ウェブサイトをご利用いただく際、さまざまな個人情報が収集されます。個人情報とは、お客様個人を特定できる情報を指します。本プライバシーポリシーでは、当社がどのような情報を収集し、それをどのような目的で利用するかについて説明しています。また、その収集方法や目的についても説明しています。",
        }),
        t3_general: t({
            en: "Please note that data transmission over the internet (e.g. when communicating by email) may be vulnerable to security breaches. It is not possible to guarantee complete protection of data against access by third parties.",
            de: "Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.",
            ja: "インターネット上でのデータ送信（Eメールによる通信など）には、セキュリティ上の脆弱性が存在する可能性があることにご留意ください。第三者によるアクセスからデータを完全に保護することは不可能です。",
        }),
        h_responsible: t({
            en: "Information regarding the data controller",
            de: "Hinweis zur verantwortlichen Stelle",
            ja: "責任部署に関するご案内",
        }),
        t1_responsible: t({
            en: "The data controller for this website is:",
            de: "Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:",
            ja: "本ウェブサイトにおけるデータ処理の責任者は以下の通りです:",
        }),
        t2_responsible: t({
            en: "The controller is the natural or legal person who, alone or jointly with others, determines the purposes and means of the processing of personal data (e.g. names, email addresses, etc.).",
            de: "Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.",
            ja: "「責任者」とは、個人データ（氏名、メールアドレスなど）の処理の目的および手段について、単独で、または他者と共同で決定する自然人または法人をいいます。",
        }),
        h_saving: t({
            en: "Retention period",
            de: "Speicherdauer",
            ja: "保存期間",
        }),
        t_saving: t({
            en: "Unless a more specific retention period is stated in this privacy policy, we will retain your personal data until the purpose for which it is processed no longer applies. If you submit a valid request for erasure or withdraw your consent to data processing, your data will be erased unless we have other legally permissible grounds for storing your personal data (e.g. retention periods under tax or commercial law); in the latter case, erasure will take place once these grounds no longer apply.",
            de: "Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.",
            ja: "本プライバシーポリシーにおいて、より具体的な保存期間が明記されていない限り、お客様の個人データは、データ処理の目的が消滅するまで当社に保存されます。お客様が正当な削除請求を行ったり、データ処理への同意を取り消したりした場合、当社がお客様の個人データを保存する他の法的に許容される理由（税法や商法上の保存期間など）がない限り、お客様のデータは削除されます。後者の場合、当該理由が消滅した後に削除が行われます。",
        }),
        h_legal_foundation: t({
            en: "General information on the legal basis for data processing on this website",
            de: "Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website",
            ja: "本ウェブサイトにおけるデータ処理の法的根拠に関する一般的な注意事項",
        }),
        t_legal_foundation: t({
            en: "Where you have consented to the processing of your data, we process your personal data on the basis of Article 6(1)(a) of the GDPR or Article 9(2)(a) of the GDPR, where special categories of data as defined in Article 9(1) of the GDPR are processed. In the event of explicit consent to the transfer of personal data to third countries, data processing is also carried out on the basis of Article 49(1)(a) of the GDPR. If you have consented to the storage of cookies or to access to information on your device (e.g. via device fingerprinting), data processing is additionally carried out on the basis of Section 25(1) of the TDDDG. Consent may be withdrawn at any time. If your data is required for the performance of a contract or for the implementation of pre-contractual measures, we process your data on the basis of Article 6(1)(b) of the GDPR. Furthermore, we process your data where this is necessary to comply with a legal obligation on the basis of Article 6(1)(c) of the GDPR. Data processing may also take place on the basis of our legitimate interest pursuant to Article 6(1)(f) of the GDPR. The relevant legal bases in each individual case are set out in the following sections of this privacy policy.",
            de: "Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.",
            ja: "お客様がデータ処理に同意された場合、当社は、GDPR第6条第1項(a)に基づき、また、GDPR第9条第1項に定める特別な種類のデータが処理される場合には、GDPR第9条第2項(a)に基づき、お客様の個人データを処理いたします。第三国への個人データの移転について明示的な同意をいただいた場合、データ処理はさらにGDPR第49条第1項(a)に基づき行われます。お客様がクッキーの保存またはお客様の端末内の情報へのアクセス（例：デバイスフィンガープリンティング）に同意された場合、データ処理はさらにドイツ電気通信データ保護法（TDDDG）第25条第1項に基づき行われます。同意はいつでも撤回可能です。お客様のデータが契約の履行または契約締結前の措置の実施に必要な場合、当社はGDPR第6条第1項b号に基づきお客様のデータを処理します。さらに、法的義務の履行に必要な場合、当社はGDPR第6条第1項c号に基づきお客様のデータを処理します。また、データ処理は、GDPR第6条第1項f号に基づく当社の正当な利益に基づいて行われる場合があります。個々のケースにおいて適用される法的根拠については、本プライバシーポリシーの以下の段落で説明しています。",
        }),
        h_reciever: t({
            en: "Recipients of personal data",
            de: "Empfänger von personenbezogenen Daten",
            ja: "個人データの受領者",
        }),
        t_reciever: t({
            en: "As part of our business activities, we work with various external parties. In some cases, this requires us to transfer personal data to these external parties. We only disclose personal data to external parties where this is necessary for the performance of a contract, where we are legally obliged to do so (e.g. disclosure of data to tax authorities), where we have a legitimate interest in the disclosure pursuant to Article 6(1)(f) of the GDPR, or where another legal basis permits the disclosure of data. When using data processors, we only pass on our customers’ personal data on the basis of a valid data processing agreement. In the case of joint processing, a joint processing agreement is concluded.",
            de: "Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.",
            ja: "当社は事業活動の一環として、様々な外部機関と連携しています。その際、これらの外部機関へ個人データを提供する必要が生じる場合があります。当社は、契約の履行に必要な場合、法律により義務付けられている場合（例：税務当局へのデータ提供）、GDPR第6条第1項(f)に基づく正当な利益がある場合、またはその他の法的根拠によりデータ提供が許可されている場合に限り、個人データを外部機関に提供します。委託処理業者を利用する場合、当社は有効な委託処理契約に基づき、お客様の個人データのみを開示します。共同処理が行われる場合は、共同処理契約を締結します。",
        }),
        h_withdrawal: t({
            en: "Withdrawal of your consent to data processing",
            de: "Widerruf Ihrer Einwilligung zur Datenverarbeitung",
            ja: "データ処理に関する同意の撤回",
        }),
        t_withdrawal: t({
            en: "Many data processing operations are only possible with your explicit consent. You may withdraw any consent you have already given at any time. The lawfulness of the data processing carried out prior to the withdrawal remains unaffected by the withdrawal.",
            de: "Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.",
            ja: "多くのデータ処理は、お客様の明示的な同意があって初めて可能となります。すでに与えられた同意は、いつでも撤回することができます。撤回が行われるまでのデータ処理の適法性については、撤回によって影響を受けることはありません。",
        }),
        h_right_to_object: t({
            en: "Right to object to data collection in specific cases and to direct marketing (Article 21 of the GDPR)",
            de: "Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)",
            ja: "特定のケースにおけるデータ収集およびダイレクトマーケティングに対する異議申立権（GDPR第21条）",
        }),
        t1_right_to_object: t({
            en: "IF DATA PROCESSING IS BASED ON ARTICLE 6(1)( E OR F OF THE GDPR, YOU HAVE THE RIGHT AT ANY TIME TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA ON GROUNDS RELATING TO YOUR PARTICULAR SITUATION; THIS ALSO APPLIES TO PROFILING BASED ON THESE PROVISIONS. YOU CAN FIND THE RELEVANT LEGAL BASIS ON WHICH PROCESSING IS BASED IN THIS PRIVACY POLICY. IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR PERSONAL DATA, UNLESS WE CAN DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING WHICH OVERRIDE YOUR INTERESTS, RIGHTS AND FREEDOMS, OR THE PROCESSING IS NECESSARY FOR THE ESTABLISHMENT, , exercise or defence of legal claims (objection under Article 21(1) of the GDPR).",
            de: "WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).",
            ja: "データ処理がGDPR第6条第1項(e)号または(f)号に基づき行われる場合、お客様は、ご自身の特別な状況に起因する理由がある限り、いつでも またはFに基づき行われる場合、お客様は、ご自身の特別な状況に起因する理由に基づき、いつでもご自身の個人データの処理に対して異議を申し立てる権利を有します。これには、当該規定に基づくプロファイリングも含まれます。処理の法的根拠については、本プライバシーポリシーをご参照ください。異議を申し立てた場合、当社はお客様の当該個人データをこれ以上処理いたしません。ただし、お客様の利益、権利、自由を上回る、処理を行うための正当かつやむを得ない理由を当社が証明できる場合、または当該処理が法的請求権の行使、 権利の行使、行使、または防御に資する場合を除き、当該個人データの処理を中止します（GDPR第21条第1項に基づく異議申立て）。",
        }),
        t2_right_to_object: t({
            en: "IF YOUR PERSONAL DATA IS BEING PROCESSED FOR THE PURPOSE OF DIRECT MARKETING, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF YOUR PERSONAL DATA FOR SUCH MARKETING PURPOSES; THIS ALSO APPLIES TO PROFILING, INSOFAR AS IT IS RELATED TO SUCH DIRECT MARKETING. IF YOU OBJECT, YOUR PERSONAL DATA WILL NO LONGER BE USED FOR DIRECT MARKETING PURPOSES (OBJECTION PURSUANT TO ART. 21(2) GDPR).",
            de: "WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).",
            ja: "お客様の個人データが、 ダイレクトマーケティングを行うために、お客様は、そのような広告を目的としたご自身の個人データの処理に対して、いつでも異議を申し立てる権利を有します。これは、当該ダイレクトマーケティングに関連するプロファイリングについても同様です。異議を申し立てた場合、お客様の個人データは、その後、ダイレクトマーケティングの目的で使用されることはなくなります（GDPR第21条第2項に基づく異議申立て）。",
        }),
        h_right_complaint: t({
            en: "Right to lodge a complaint with the relevant supervisory authority",
            de: "Beschwerderecht bei der zuständigen Aufsichtsbehörde",
            ja: "管轄の監督当局への不服申立て権",
        }),
        t_right_complaint: t({
            en: "In the event of infringements of the GDPR, data subjects have the right to lodge a complaint with a supervisory authority, in particular in the Member State of their habitual residence, their place of work or the place where the alleged infringement occurred. This right to lodge a complaint is without prejudice to any other administrative or judicial remedies.",
            de: "Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.",
            ja: "GDPRに違反した場合、データ主体は、特に通常の居住地、勤務地、または違反が疑われる場所を管轄する加盟国の監督当局に対し、苦情を申し立てる権利を有する。この苦情申立権は、その他の行政上または司法上の救済措置を妨げるものではない。",
        }),
        h_right_portabolity: t({
            en: "Right to data portability",
            de: "Recht auf Datenübertragbarkeit",
            ja: "データポータビリティの権利",
        }),
        t_right_portability: t({
            en: "You have the right to receive data that we process automatically on the basis of your consent or in fulfilment of a contract, either for yourself or for a third party, in a commonly used, machine-readable format. If you request the direct transfer of the data to another controller, this will only take place to the extent that it is technically feasible.",
            de: "Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.",
            ja: "お客様は、ご本人の同意に基づき、または契約の履行のために当社が自動処理しているデータを、一般的な機械可読形式で、ご自身または第三者に対して提供してもらう権利を有します。他の管理者へのデータの直接的な移転をご要望の場合、技術的に実行可能な範囲内でのみこれを行います。",
        }),
        h_are: t({
            en: "Access, rectification and erasure",
            de: "Auskunft, Berichtigung und Löschung",
            ja: "情報の開示、訂正、および削除",
        }),
        t_are: t({
            en: "In accordance with the applicable legal provisions, you have the right at any time to obtain, free of charge, information about your stored personal data, its source and recipients, and the purpose of the data processing, and, where applicable, the right to have this data corrected or erased. You may contact us at any time regarding this matter or any other questions you may have about personal data.",
            de: "Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.",
            ja: "適用される法的規定に基づき、お客様は、保存されているご自身の個人データ、その出所、受領者、およびデータ処理の目的に関して、いつでも無償で情報を開示する権利を有します。また、必要に応じて、当該データの訂正または削除を求める権利も有します。これに関するお問い合わせや、個人データに関するその他のご質問がございましたら、いつでも当社までご連絡ください。",
        }),
        h_restriction: t({
            en: "Right to restriction of processing",
            de: "Recht auf Einschränkung der Verarbeitung",
            ja: "処理の制限を受ける権利",
        }),
        t1_restriction: t({
            en: "You have the right to request that the processing of your personal data be restricted. You may contact us at any time to do so. The right to restriction of processing applies in the following cases:",
            de: "Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:",
            ja: "お客様は、ご自身の個人データの処理の制限を求める権利を有しています。これについては、いつでも当社までご連絡ください。処理の制限を求める権利は、以下の場合に認められます:",
        }),
        l1_restriction: t({
            en: "If you dispute the accuracy of your personal data held by us, we will generally need time to verify this. For the duration of this verification, you have the right to request that the processing of your personal data be restricted.",
            de: "Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.",
            ja: "当社が保管しているお客様の個人情報の正確性に異議がある場合、通常、その確認には時間を要します。確認が行われている間、お客様はご自身の個人情報の処理の制限を求める権利を有します。",
        }),
        l2_restriction: t({
            en: "If your personal data has been or is being processed unlawfully, you may request that the processing of your data be restricted instead of it being erased.",
            de: "Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.",
            ja: "お客様の個人データの処理が違法であった場合、または違法に行われている場合、削除の代わりにデータ処理の制限を求めることができます。",
        }),
        l3_restriction: t({
            en: "If we no longer require your personal data, but you need it to exercise, defend or assert legal claims, you have the right to request that the processing of your personal data be restricted instead of it being erased.",
            de: "Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.",
            ja: "当社がお客様の個人データを必要としなくなった場合でも、お客様が法的請求権の行使、防御、または主張のために当該データが必要な場合は、削除に代えて、個人データの処理の制限を求める権利を有します。",
        }),
        l4_restriction: t({
            en: "If you have lodged an objection under Article 21(1) of the GDPR, a balancing of interests between yours and ours must be carried out. Until it has been determined whose interests prevail, you have the right to request that the processing of your personal data be restricted.",
            de: "Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.",
            ja: "GDPR第21条第1項に基づき異議申し立てを行った場合、お客様と当社の利益の衡量が行われます。どちらの利益が優先されるかが確定するまでは、お客様はご自身の個人データの処理の制限を求める権利を有します。",
        }),
        t2_restriction: t({
            en: "If you have restricted the processing of your personal data, such data may – apart from storage – only be processed with your consent, or for the purpose of establishing, exercising or defending legal claims, or for the protection of the rights of another natural or legal person, or for reasons of an important public interest of the European Union or a Member State.",
            de: "Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.",
            ja: "個人データの処理を制限した場合、当該データは、保存を除き、ご本人の同意がある場合、または法的請求権の主張、行使、防御のため、あるいは他の自然人または法人の権利を保護するため、もしくは欧州連合または加盟国の重要な公益上の理由がある場合に限り、処理することができます。",
        }),
        h_encryption: t({
            en: "SSL or TLS encryption",
            de: "SSL- bzw. TLS-Verschlüsselung",
            ja: "SSLまたはTLS暗号化",
        }),
        t_encryption: t({
            en: "This website uses SSL or TLS encryption for security reasons and to protect the transmission of confidential information, such as orders or enquiries that you send to us as the website operator. You can recognise an encrypted connection by the fact that the address bar of your browser changes from “http://” to “https://” and by the padlock symbol in your browser bar. When SSL or TLS encryption is enabled, the data you transmit to us cannot be read by third parties.",
            de: "Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.",
            ja: "当サイトでは、セキュリティ上の理由および、お客様からサイト運営者である当社へ送信される注文やお問い合わせなどの機密情報の送信を保護するため、SSLまたはTLS暗号化を採用しています。暗号化された接続は、ブラウザのアドレスバーが「http://」から「https://」に変わる点、およびブラウザのアドレスバーに表示される鍵のアイコンによって確認できます。SSLまたはTLS暗号化が有効になっている場合、お客様が当社に送信するデータは第三者によって読み取られることはありません。",
        }),

        t1c_collection: t({
            en: "If you contact us by email, telephone or fax, your enquiry, including all personal data contained therein (name, enquiry), will be stored and processed by us for the purpose of dealing with your request. We will not pass on this data without your consent.",
            de: "Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.",
            ja: "Eメール、電話、またはFAXにてご連絡いただいた場合、お客様のお問い合わせ内容およびそれに含まれるすべての個人情報（氏名、お問い合わせ内容）は、お問い合わせへの対応を目的として、当社にて保存・処理されます。これらのデータは、お客様の同意なしに第三者に提供することはありません。",
        }),
        t2c_collection: t({
            en: "The processing of this data is based on Article 6(1)(b) of the GDPR, provided that your enquiry relates to the performance of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, processing is based on our legitimate interest in the effective handling of enquiries addressed to us (Article 6(1)(f) of the GDPR) or on your consent (Article 6(1)(a) of the GDPR) where this has been requested; consent may be withdrawn at any time.",
            de: "Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.",
            ja: "お客様のお問い合わせが契約の履行に関連する場合、または契約締結前の措置の実施に必要な場合、当該データの処理はGDPR第6条第1項(b)に基づき行われます。その他のすべての場合において、処理は、当社に寄せられたお問い合わせを効果的に処理するという当社の正当な利益（GDPR第6条第1項f号）に基づくか、または同意が求められた場合にはお客様の同意（GDPR第6条第1項a号）に基づきます。なお、同意はいつでも撤回可能です。",
        }),
        t3c_collection: t({
            en: "The data you send us via contact enquiries will be retained by us until you request its deletion, withdraw your consent to its storage, or the purpose for storing the data no longer applies (e.g. once your enquiry has been dealt with). Mandatory legal provisions – in particular statutory retention periods – remain unaffected.",
            de: "Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.",
            ja: "お問い合わせフォームを通じて当社に送信されたデータは、お客様から削除の要請があった場合、保存への同意を取り消した場合、またはデータ保存の目的が消滅した場合（例：お問い合わせの処理が完了した後）を除き、当社で保管されます。ただし、法的義務（特に法定保存期間）は、この限りではありません。",
        }),
    },
} satisfies Dictionary;

export default legalnoteContent;
