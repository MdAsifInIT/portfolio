import React, { useEffect, useRef } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { personalInfo, siteConfig } from '../data/mock';
import { scrollToSection } from '../lib/browser';

const Hero = ({ onContactClick }) => {
  const heroRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const bioRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Staggered reveal animation
    const elements = [nameRef.current, titleRef.current, bioRef.current, ctaRef.current];
    const timers = [];

    elements.forEach((el, index) => {
      if (el) {
        const timerId = setTimeout(() => {
          el.classList.remove('opacity-0', 'translate-y-4');
          el.classList.add('opacity-100', 'translate-y-0');
        }, index * 200 + 100);
        timers.push(timerId);
      }
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.16),transparent_34rem),linear-gradient(135deg,#f8fafc_0%,#ffffff_45%,#eff6ff_100%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.20),transparent_34rem),linear-gradient(135deg,#020617_0%,#111827_48%,#172554_100%)] transition-colors duration-300"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/50 dark:bg-blue-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-35 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-200/45 dark:bg-cyan-600/15 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-200/40 dark:bg-indigo-600/15 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/70 via-white/20 to-transparent dark:from-gray-950/70 dark:via-gray-950/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Name with reveal animation */}
          <h1
            ref={nameRef}
            className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-950 dark:text-white mb-6 opacity-0 translate-y-4 transition-all duration-1000 ease-out drop-shadow-[0_12px_30px_rgba(15,23,42,0.10)] dark:drop-shadow-[0_14px_30px_rgba(59,130,246,0.16)]"
          >
            {personalInfo.name}
          </h1>

          {/* Title */}
          <h2
            ref={titleRef}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600 dark:from-blue-300 dark:via-indigo-300 dark:to-cyan-300 mb-8 pb-2 opacity-0 translate-y-4 transition-all duration-1000 ease-out"
          >
            {personalInfo.title}
          </h2>

          {/* Bio */}
          <p
            ref={bioRef}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-8 md:leading-9 opacity-0 translate-y-4 transition-all duration-1000 ease-out"
          >
            {personalInfo.bio}
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 translate-y-4 transition-all duration-1000 ease-out"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold shadow-xl shadow-blue-600/20 hover:shadow-2xl hover:shadow-blue-600/30 dark:hover:shadow-blue-900/35 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.99] flex items-center gap-2 min-w-[200px] justify-center border border-white/20"
            >
              {siteConfig.hero.ctaButtons.primary}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={onContactClick}
              className="group px-8 py-4 bg-white/85 dark:bg-gray-900/75 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-400/30 backdrop-blur-xl rounded-full font-bold hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.99] hover:shadow-xl hover:shadow-blue-600/10 flex items-center gap-2 min-w-[200px] justify-center"
            >
              <Mail className="w-5 h-5" />
              {siteConfig.hero.ctaButtons.secondary}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border border-gray-300/90 dark:border-gray-500/80 bg-white/30 dark:bg-white/5 backdrop-blur-sm rounded-full flex items-start justify-center p-2 shadow-sm">
          <div className="w-1 h-3 bg-blue-500/80 dark:bg-blue-300/80 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
