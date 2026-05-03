import { LocaleSwitcher } from "../LocaleSwitcher.tsx";
import "../../styles/Header.css"
import {Link} from "../Link.tsx";
import {useI18nHTMLAttributes} from "../../hooks/useI18nHTMLAttributes.tsx";
import {useIntlayer} from "react-intlayer";

const Header = () => {
    useI18nHTMLAttributes();
    const content = useIntlayer("header");

    return (
        <header className="header">
            <p>Simon Schreck</p>
            <p>Data & Business Consultant</p>
            <LocaleSwitcher />
            <Link to={"/"}>{content.l_home}</Link>
        </header>
    )
}

export default Header