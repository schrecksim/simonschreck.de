import "./styles/App.css";
import { useIntlayer } from "react-intlayer";
import { useI18nHTMLAttributes } from "./hooks/useI18nHTMLAttributes";
import HeaderSubpage from "./components/header/HeaderSubpage.tsx";
import Footer from "./components/footer/Footer.tsx";

function LegalNoteContent() {
    useI18nHTMLAttributes();
    const content = useIntlayer("legalnote");

    return (
        <>
            <HeaderSubpage />
            <h1>{content.h1}</h1>

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
