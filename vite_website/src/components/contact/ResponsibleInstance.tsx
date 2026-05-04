import { useIntlayer } from "react-intlayer";
//import { useI18nHTMLAttributes } from "./hooks/useI18nHTMLAttributes";

const ResponsibleInstance = () => {
    const content = useIntlayer("contact");
    return (
        <div>
            <p>{content.name}</p>
            <p>{content.street}</p>
            <p>{content.area}</p>
            <p>{content.country}</p>
        </div>
);
};

export default ResponsibleInstance;
