import { useIntlayer } from "react-intlayer";

const Footer = () => {
    const content = useIntlayer("footer");
    return (
        <footer>
            <p>{content.impressum}</p>
            <p>{content.datenschutz}</p>
            <p>{content.copyright}</p>
        </footer>
    );
};

export default Footer;
