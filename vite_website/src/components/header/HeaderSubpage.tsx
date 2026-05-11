import { Link } from "../Link.tsx";
import logo from "../../assets/simon_schreck_logo.svg";
import { useI18nHTMLAttributes } from "../../hooks/useI18nHTMLAttributes.tsx";
import { useIntlayer } from "react-intlayer";

const Header = () => {
    useI18nHTMLAttributes();
    const content = useIntlayer("header");

    return (
        <header className="header">
            <div className="header-content">
                <div>
                    <Link to="/">
                        <img src={logo} alt="logo" style={{ height: "5rem" }} />
                    </Link>
                    <Link to="/">{content.l_home}</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
