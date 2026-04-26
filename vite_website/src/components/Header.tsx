import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                {/* Navigation links go here */}
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/glossary">Glossary</Link>
                <Link to="/datenschutzerklaerung">Datenschutzerklärung</Link>
                <Link to="/impressum">Impressum</Link>
            </nav>
            {/* Logo goes here */}
        </header>
    );
};

export default Header;