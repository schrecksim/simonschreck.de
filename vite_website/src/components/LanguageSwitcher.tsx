import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const [language, setLanguage] = useState('en');
    const { i18n } = useTranslation();

    const changeLanguage = (newLang: string) => {
        i18n.changeLanguage(newLang);
        setLanguage(newLang);
    };

    return (
        <div>
            <button onClick={() => changeLanguage('fr')}>Français</button>
            <button onClick={() => changeLanguage('es')}>Español</button>
            {/* Add more language options as needed */}
        </div>
    );
};

export default LanguageSwitcher;