import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';

// Add other page components here

const App = () => {
    return (
        <StrictMode>
            <>
                <Header />
                {/* Render your routes based on the URL */}
                <main>
                    <Router>
                        <div>
                            <header> <Header /> </header>
                            {/* Render your routes based on the URL */}
                            <Routes>
                                <Route path="/" element={<LandingPage />} /> {/* Root route */}

                                {/* Add more routes for each of your pages */}
                                <Route path="/about" element={<AboutMe />} />
                                <Route path="/glossary" element={<GlossaryPage />} />
                                <Route path="/datenschutzerklaerung" element={<DatenschutzErklärung />} />
                                <Route path="/impressum" element={<Impressum />} />

                            </Routes>
                            <footer> <Footer /> </footer>
                        </div>
                    </Router>
                </main>
                <Footer />
            </>
        </StrictMode>
    );
};

export default App;