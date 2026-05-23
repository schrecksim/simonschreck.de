import { localeMap } from "intlayer";
import type { FC, PropsWithChildren } from "react";
import { IntlayerProvider } from "react-intlayer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LegalNote from "../pages/LegalNote.tsx";
import PrivacyPolicy from "../pages/PrivacyPolicy.tsx";
import Glossary from "../pages/Glossary.tsx";
import AboutMe from "../pages/AboutMe.tsx";
import BusinessIntelligence from "./glossary/glossary_pages/business_intelligence/BusinessIntelligence.tsx";
import RequirementsEngineering from "./glossary/glossary_pages/requirements_engineering/RequirementsEngineering.tsx";
import DataAnalysis from "./glossary/glossary_pages/data_analysis/DataAnalysis.tsx";
import DataEngineering from "./glossary/glossary_pages/data_engineering/DataEngineering.tsx";
import DataScience from "./glossary/glossary_pages/data_science/DataScience.tsx";

export const LocaleRouter: FC<PropsWithChildren> = ({ children }) => (
    <BrowserRouter>
        <Routes>
            {localeMap(({ locale, urlPrefix }) => (
                <Route
                    path={`${urlPrefix}/*`}
                    key={locale}
                    element={
                        <IntlayerProvider locale={locale}>
                            <Routes>
                                {/* Hauptseite */}
                                <Route path="/" element={children} />
                                {/* Unterseiten */}
                                <Route path="legalnote" element={<LegalNote />} />
                                <Route path="privacypolicy" element={<PrivacyPolicy />} />
                                <Route path="aboutme" element={<AboutMe />} />
                                <Route path="glossary" element={<Glossary />} />
                                <Route path="glossary/business_intelligence" element={<BusinessIntelligence />} />
                                <Route path="glossary/data_analysis" element={<DataAnalysis />} />
                                <Route path="glossary/data_engineering" element={<DataEngineering />} />
                                <Route path="glossary/data_science" element={<DataScience />} />
                                <Route path="glossary/requirements_engineering" element={<RequirementsEngineering />} />
                            </Routes>
                        </IntlayerProvider>
                    }
                />
            ))}
        </Routes>
    </BrowserRouter>
);