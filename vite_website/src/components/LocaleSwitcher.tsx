import { getLocaleName, getLocalizedUrl } from "intlayer";
import type { FC } from "react";
import { useLocale } from "react-intlayer";
import { useNavigate, useLocation } from "react-router-dom";

export const LocaleSwitcher: FC = () => {
  const { pathname, search } = useLocation(); // Get the current URL path. Example: /fr/about
  const navigate = useNavigate();

  const { setLocale, locale, availableLocales } = useLocale({
    onLocaleChange: (locale) => {
      const pathWithLocale = getLocalizedUrl(`${pathname}${search}`, locale);
      navigate(pathWithLocale, { replace: true }); // Ersetzt die aktuelle URL, statt sie anzuhängen
    },
  });

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
        padding: "0.5rem"
      }}
    >
      {availableLocales.map((localeItem) => (
        <button
          key={localeItem}
          type="button"
          onClick={() => {
            setLocale(localeItem);
          }}
          style={{
            display: "flex",
            border: locale === localeItem ? "2px solid" : "1px solid",
          }}
          aria-current={locale === localeItem ? "page" : undefined}
        >
          {/* Language in its own Locale - e.g. Français */}
          {getLocaleName(localeItem)}
        </button>
      ))}
    </div>
  );
};
