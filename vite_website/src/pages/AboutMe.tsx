import { useIntlayer } from "react-intlayer";
import { useI18nHTMLAttributes } from "../hooks/useI18nHTMLAttributes";
import HeaderSubpage from "../components/header/HeaderSubpage.tsx";
import Footer from "../components/footer/Footer.tsx";
import SchoolBuilder from "../components/about_me/school/SchoolBuilder.tsx"
import OccupationBuilder from "../components/about_me/occupation/OccupationBuilder.tsx"
import CertificationBuilder from "../components/about_me/certification/CertificationBuilder.tsx"

function AboutMeContent() {
    useI18nHTMLAttributes();
    const content = useIntlayer("about_me");

    return (
        <>
            <HeaderSubpage />
            <main>
                <h1>{content.h_about_me}</h1>
                <h2>{content.h_intro}</h2>
                <p>{content.intro}</p>
                <h3>{content.h_why_me}</h3>
                <p>{content.reason}</p>
                <OccupationBuilder />
                <SchoolBuilder />
                <CertificationBuilder />
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
