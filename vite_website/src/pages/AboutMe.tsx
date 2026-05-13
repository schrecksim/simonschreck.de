import { useIntlayer } from "react-intlayer";
import { useI18nHTMLAttributes } from "../hooks/useI18nHTMLAttributes";
import HeaderSubpage from "../components/header/HeaderSubpage.tsx";
import Footer from "../components/footer/Footer.tsx";

function AboutMeContent() {
    useI18nHTMLAttributes();
    const content = useIntlayer("about_me");

    return (
        <>
            <HeaderSubpage />
            <main>
            </main>
            <Footer />
        </>
    );
}

function AboutMe() {
    return (
        <AboutMeContent />
    );
}

export default AboutMe;
