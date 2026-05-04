import { useIntlayer } from "react-intlayer";
import ElectronicContact from "./ElectronicContact.tsx";
//import { useI18nHTMLAttributes } from "./hooks/useI18nHTMLAttributes";

const Contact = () => {
    const content = useIntlayer("contact");
    return (
        <div>
            <h2>{content.h_contact}</h2>

            <p>{content.cta}</p>
            <ElectronicContact />
        </div>
);
};

export default Contact;
