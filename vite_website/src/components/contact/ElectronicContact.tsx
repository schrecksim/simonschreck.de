import { useIntlayer } from "react-intlayer";
//import { useI18nHTMLAttributes } from "./hooks/useI18nHTMLAttributes";

const ElectronicContact = () => {
    const content = useIntlayer("contact");
    return (
        <div>
            <p>{content.email} {content.email_adress}</p>
            <p>{content.phone} {content.phone_number}</p>
        </div>
);
};

export default ElectronicContact;
