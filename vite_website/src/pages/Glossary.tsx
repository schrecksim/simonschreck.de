import { useIntlayer } from "react-intlayer";
import { useI18nHTMLAttributes } from "../hooks/useI18nHTMLAttributes";
import HeaderSubpage from "../components/header/HeaderSubpage.tsx";
import Footer from "../components/footer/Footer.tsx";
import GlossaryBuilder from "../components/glossary/GlossaryBuilder.tsx";

function GlossaryContent() {
    useI18nHTMLAttributes();
    const content = useIntlayer("glossary");

    return (
        <>
            <HeaderSubpage />
            <main>
                <h1>{content.h1}</h1>
                <p>{content.intro}</p>
                <GlossaryBuilder />
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
