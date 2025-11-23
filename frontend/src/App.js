import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SocialBar from "./components/SocialBar";
import Projects from "./components/Projects";
import OpenSource from "./components/OpenSource";
import About from "./components/About";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import FloatingContactButton from "./components/FloatingContactButton";
import { siteConfig } from "./data/mock";

const Home = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      {siteConfig.sections.showHero && <Hero onContactClick={() => setIsContactModalOpen(true)} />}
      <SocialBar />
      {siteConfig.sections.showProjects && <Projects />}
      {siteConfig.sections.showOpenSource && <OpenSource />}
      {siteConfig.sections.showAbout && <About />}
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
  // Only use basename in production build, not in preview/development
  const isGitHubPages = process.env.NODE_ENV === 'production' && process.env.PUBLIC_URL;
  const basename = isGitHubPages ? process.env.PUBLIC_URL : '';
  
  return (
    <div className="App">
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
