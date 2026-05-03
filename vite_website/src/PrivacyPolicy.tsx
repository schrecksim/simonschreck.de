import { useIntlayer } from "react-intlayer";
import HeaderSubpage from "./components/header/HeaderSubpage.tsx";
import Footer from "./components/footer/Footer.tsx";
import {useI18nHTMLAttributes} from "./hooks/useI18nHTMLAttributes.tsx";

const PrivacyPolicy = () => {
    useI18nHTMLAttributes();
    const content = useIntlayer("privacypolicy");
    return (
        <div>
            <HeaderSubpage />
            <h1>{content.h1}</h1>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;