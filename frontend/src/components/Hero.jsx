import React, { useEffect, useRef } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { personalInfo, siteConfig } from '../data/mock';

const Hero = ({ onContactClick }) => {
  const heroRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const bioRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Simple CSS animations for initial reveal
    const elements = [nameRef.current, titleRef.current, bioRef.current, ctaRef.current];
    elements.forEach((el, index) => {
      if (el) {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, index * 150);
      }
    });
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Name with reveal animation */}
          <h1
            ref={nameRef}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 opacity-0 translate-y-4 transition-all duration-700 ease-out"
          >
            {personalInfo.name}
          </h1>

          {/* Title */}
          <h2
            ref={titleRef}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8 pb-2 opacity-0 translate-y-4 transition-all duration-700 ease-out"
          >
            {personalInfo.title}
          </h2>

          {/* Bio */}
          <p
            ref={bioRef}
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed opacity-0 translate-y-4 transition-all duration-700 ease-out"
          >
            {personalInfo.bio}
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 translate-y-4 transition-all duration-700 ease-out"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 min-w-[200px] justify-center"
            >
              {siteConfig.hero.ctaButtons.primary}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={onContactClick}
              className="group px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 min-w-[200px] justify-center"
            >
              <Mail className="w-5 h-5" />
              {siteConfig.hero.ctaButtons.secondary}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gray-400 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;