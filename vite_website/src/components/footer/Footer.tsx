import { useIntlayer } from "react-intlayer";
import {Link} from "../Link.tsx";

const Footer = () => {
    const content = useIntlayer("footer");
    return (
        <footer>
            <div style={{ display: 'flex', justifyContent: 'space-around', margin: '0 auto' }}>
                <Link to={"/legalnote"}>{content.impressum}</Link>
                <Link to={"/privacypolicy"}>{content.datenschutz}</Link>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', margin: '0 auto' }}>
                <p>{content.copyright}</p>
            </div>
        </footer>
    );
};

export default Footer;
