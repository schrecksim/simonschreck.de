import { LocaleSwitcher } from "../LocaleSwitcher.tsx";
import "../../styles/Header.css"

const Header = () => {
    return (
        <header className="header">
            <p>Simon Schreck</p>
            <p>Data & Business Consultant</p>
            <LocaleSwitcher />
        </header>
    )
}

export default Header