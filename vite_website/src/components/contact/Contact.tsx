import { useIntlayer } from "react-intlayer";
//import { useI18nHTMLAttributes } from "./hooks/useI18nHTMLAttributes";

const Contact = () => {
    const content = useIntlayer("contact");
    return (
        <div>
            <h2>{content.h_contact}</h2>

            <p>{content.cta}</p>
            <ul>
                <li>{content.email} {content.email_adress}</li>
                <li>{content.phone} {content.phone_number}</li>
            </ul>
        </div>
);
};

export default Contact;
