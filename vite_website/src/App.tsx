import "./styles/App.css";
import { useIntlayer } from "react-intlayer";
import { useI18nHTMLAttributes } from "./hooks/useI18nHTMLAttributes";
import { LocaleRouter } from "./components/LocaleRouter";
import Header from "./components/Header.tsx";

function AppContent() {
  useI18nHTMLAttributes();
  const content = useIntlayer("app");

  return (
    <>
        <Header />
        <h1 style={{fontSize: "0em"}}>{content.h1}</h1>

        <h2>{content.h_support}</h2>

        <h2>{content.h_about_me}</h2>

        <h2>{content.h_availability}</h2>

        <h2>{content.h_contact}</h2>

    </>
  );
}

function App() {
  return (
    <LocaleRouter>
      <AppContent />
    </LocaleRouter>
  );
}

export default App;
