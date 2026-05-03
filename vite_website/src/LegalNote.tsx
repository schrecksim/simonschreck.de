import "./styles/App.css";
import { useIntlayer } from "react-intlayer";
import { useI18nHTMLAttributes } from "./hooks/useI18nHTMLAttributes";
import HeaderSubpage from "./components/header/HeaderSubpage.tsx";
import Footer from "./components/footer/Footer.tsx";
import Contact from "./components/contact/Contact.tsx";

function LegalNoteContent() {
    useI18nHTMLAttributes();
    const content = useIntlayer("legalnote");

    return (
        <>
            <HeaderSubpage />
            <h1>{content.h1}</h1>

            <p>{content.name}</p>
            <p>{content.address}</p>
            <p>{content.area}</p>
            <p>{content.country}</p>

            <Contact />

            <h2>{content.h_bin}</h2>
            <p>{content.bin_num}</p>

            <h2>{content.h_insurance}</h2>
            <p>{content.t1_insurance}</p>
            <ul>
                <li>{content.insurance_name}</li>
                <li>{content.insurance_address}</li>
            </ul>
            <p>{content.insurance_cover}</p>

            <h2>{content.h_consumer}</h2>
            <p>{content.consumer}</p>

            <Footer />
        </>
    );
}

function LegalNote() {
    return (
        <LegalNoteContent />
    );
}

export default LegalNote;
