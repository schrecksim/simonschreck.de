import React from 'react';
import { useTranslation } from 'react-i18next';

const LandingPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('welcome_message')}</h1>
            {/* Add landing page content */}
        </div>
    );
};

export default LandingPage;