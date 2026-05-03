import { useIntlayer } from "react-intlayer";
import {Link} from "../Link.tsx";

const Footer = () => {
    const content = useIntlayer("footer");
    return (
        <footer>
            <Link to={"/legalnote"}>{content.impressum}</Link>
            <Link to={"/privacypolicy"}>{content.datenschutz}</Link>
            <p>{content.copyright}</p>
        </footer>
    );
};

export default Footer;
