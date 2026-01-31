import React, { useState, Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Header from "./components/Header";
import Hero from "./components/Hero";
import SocialBar from "./components/SocialBar";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import FloatingContactButton from "./components/FloatingContactButton";
import SEO from "./components/SEO";
import { siteConfig } from "./data/mock";
import { ThemeProvider } from "./context/ThemeContext";

// Lazy load heavy components
const Projects = lazy(() => import("./components/Projects"));
const OpenSource = lazy(() => import("./components/OpenSource"));
const About = lazy(() => import("./components/About"));
const Testimonials = lazy(() => import("./components/Testimonials")); // Placeholder

const LoadingFallback = () => (
  <div className="py-20 flex justify-center items-center">
    <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
  </div>
);

const Home = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <SEO />
      <Header />
      {siteConfig.sections.showHero && <Hero onContactClick={() => setIsContactModalOpen(true)} />}
      <SocialBar />
      
      <Suspense fallback={<LoadingFallback />}>
        {siteConfig.sections.showProjects && <Projects />}
        {siteConfig.sections.showOpenSource && <OpenSource />}
        {siteConfig.sections.showAbout && <About />}
{siteConfig.sections.showTestimonials && <Testimonials />}
      </Suspense>

      {siteConfig.sections.showFooter && <Footer />}
      <FloatingContactButton onClick={() => setIsContactModalOpen(true)} />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
};

function App() {
  // Get basename from package.json homepage for GitHub Pages support
  const basename = process.env.PUBLIC_URL || '';
  
  return (
    <HelmetProvider>
      <ThemeProvider>
        <div className="App bg-background text-foreground transition-colors duration-300">
          <BrowserRouter basename={basename}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
