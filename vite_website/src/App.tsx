import "./styles/App.css";
import { useIntlayer } from "react-intlayer";
import { useI18nHTMLAttributes } from "./hooks/useI18nHTMLAttributes";
import { LocaleRouter } from "./components/LocaleRouter";
import Header from "./components/Header.tsx";
import Contact from "./components/contact/Contact.tsx";
import BusinessAreas from "./components/business_areas/BusinessAreas.tsx";
import AboutMe from "./components/about_me/AboutMe.tsx";
import Availability from "./components/availability/Availability.tsx";
import Footer from "./components/footer/Footer.tsx";

function AppContent() {
  useI18nHTMLAttributes();
  const content = useIntlayer("app");

  return (
    <>
        <Header />
        <h1 style={{fontSize: "0em"}}>{content.h1}</h1>

        <BusinessAreas />

        <AboutMe />

        <Availability />

        <Contact />

        <Footer />
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
