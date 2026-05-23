import { useIntlayer } from "react-intlayer";
import { useI18nHTMLAttributes } from "../../../../hooks/useI18nHTMLAttributes";
import Footer from "../../../footer/Footer.tsx";
import HeaderGlossarySubpage from "../../../header/HeaderGlossarySubpage.tsx";
import Contact from "../../../contact/Contact.tsx";

function DataEngineeringContent() {
    useI18nHTMLAttributes();
    const content = useIntlayer("data_engineering");

    return (
        <>
            <HeaderGlossarySubpage />
            <main>
                <h1>{content.h1}</h1>
                <p>{content.def}</p>

                <h2>{content.h_why}</h2>
                <p>{content.why}</p>

                <h2>{content.h_prerequisites}</h2>
                <p>{content.prerequisites}</p>

                <h2>{content.h_offer}</h2>
                <p>{content.offer}</p>
                <ul>
                    <li>{content.offer_li1}</li>
                    <li>{content.offer_li2}</li>
                    <li>{content.offer_li3}</li>
                    <li>{content.offer_li4}</li>
                </ul>
                <p>{content.cta}</p>
                <Contact />
            </main>
            <Footer />
        </>
    );
}

function DataEngineering() {
    return (
        <DataEngineeringContent />
    );
}

export default DataEngineering;