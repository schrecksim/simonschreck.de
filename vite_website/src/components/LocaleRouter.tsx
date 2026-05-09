import { localeMap } from "intlayer";
import type { FC, PropsWithChildren } from "react";
import { IntlayerProvider } from "react-intlayer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LegalNote from "../LegalNote.tsx";
import PrivacyPolicy from "../PrivacyPolicy.tsx";

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
                            </Routes>
                        </IntlayerProvider>
                    }
                />
            ))}
        </Routes>
    </BrowserRouter>
);