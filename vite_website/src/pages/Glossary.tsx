import { useIntlayer } from "react-intlayer";
import { useI18nHTMLAttributes } from "../hooks/useI18nHTMLAttributes";
import HeaderSubpage from "../components/header/HeaderSubpage.tsx";
import Footer from "../components/footer/Footer.tsx";
import GlossaryBuilder from "../components/glossary/GlossaryBuilder.tsx";
import {Link} from "../components/Link.tsx";

function GlossaryContent() {
    useI18nHTMLAttributes();
    const content = useIntlayer("glossary");
    const content_bi = useIntlayer("business_intelligence");
    const content_da = useIntlayer("data_analysis");
    const content_de = useIntlayer("data_engineering");
    const content_ds = useIntlayer("data_science");
    const content_re = useIntlayer("requirements_engineering");

    return (
        <>
            <HeaderSubpage />
            <main>
                <h1>{content.h1}</h1>
                <p>{content.intro}</p>
                <GlossaryBuilder />

                <h2>{content.h_specific_topics}</h2>
                <ul>
                    <li>
                        <Link to={"/glossary/business_intelligence"}>{content_bi.h1}</Link>
                        <p>{content_bi.def}</p>
                    </li>
                    <li>
                        <Link to={"/glossary/data_analysis"}>{content_da.h1}</Link>
                        <p>{content_da.def}</p>
                    </li>
                    <li>
                        <Link to={"/glossary/data_engineering"}>{content_de.h1}</Link>
                        <p>{content_de.def}</p>
                    </li>
                    <li>
                        <Link to={"/glossary/data_science"}>{content_ds.h1}</Link>
                        <p>{content_ds.def}</p>
                    </li>
                    <li>
                        <Link to={"/glossary/requirements_engineering"}>{content_re.h1}</Link>
                        <p>{content_re.def}</p>
                    </li>
                </ul>
            </main>
            <Footer />
        </>
    );
}

function Glossary() {
    return (
        <GlossaryContent />
    );
}

export default Glossary;
