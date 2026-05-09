import { useState, useEffect } from "react";
import { LocaleSwitcher } from "../LocaleSwitcher.tsx";
import { Link } from "../Link.tsx";
import logo from "../../assets/simon_schreck_logo.svg";
import { useI18nHTMLAttributes } from "../../hooks/useI18nHTMLAttributes.tsx";
import { useIntlayer } from "react-intlayer";

const Header = () => {
    useI18nHTMLAttributes();
    const content = useIntlayer("header");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-content">
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <Link to="/">
                        <img src={logo} alt="logo" style={{ height: "5rem" }} />
                    </Link>
                    {windowWidth >= 768 ? (
                        <>
                            <p>Data & Business Consultant</p>
                            <LocaleSwitcher />
                        </>
                    ) : (
                        <button onClick={toggleMobileMenu}>☰</button>
                    )}
                </div>

                {/* Desktop Navigation */}
                {windowWidth >= 768 && (
                    <nav style={{ display: "flex", gap: "2rem", marginLeft: "auto" }}>
                    </nav>
                )}
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && windowWidth < 768 && (
                <div
                    style={{
                        width: "85%",
                        margin: "0 auto",
                        backgroundColor: "var(--header-footer-bg)",
                        padding: "1rem",
                        zIndex: 200,
                    }}
                >
                    <LocaleSwitcher />
                </div>
            )}
        </header>
    );
};

export default Header;
