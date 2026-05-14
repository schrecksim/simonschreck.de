import { localeMap } from "intlayer";
import type { FC, PropsWithChildren } from "react";
import { IntlayerProvider } from "react-intlayer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LegalNote from "../pages/LegalNote.tsx";
import PrivacyPolicy from "../pages/PrivacyPolicy.tsx";
import Glossary from "../pages/Glossary.tsx";
import AboutMe from "../pages/AboutMe.tsx";

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
                            </Routes>
                        </IntlayerProvider>
                    }
                />
            ))}
        </Routes>
    </BrowserRouter>
);