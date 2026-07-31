'use client';
import React, { useCallback, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { siteConfig } from "../data/mock";
import { useTheme } from "../context/ThemeContext";
import { asArray, canUseDOM, scrollToSection } from "../lib/browser";
import useRafScroll from "../hooks/useRafScroll";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = asArray(siteConfig.header.navigationItems);

  const handleScroll = useCallback(() => {
    if (!canUseDOM) return;

    setIsScrolled(window.scrollY > 50);

    const scrollPosition = window.scrollY + 100;

    for (const section of navItems.map((item) => item.id).filter(Boolean)) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, [navItems]);

  useRafScroll(handleScroll);

  const handleSectionClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 dark:bg-gray-950/75 backdrop-blur-xl shadow-[0_12px_35px_rgba(15,23,42,0.08)] dark:shadow-[0_14px_38px_rgba(0,0,0,0.32)] border-b border-white/60 dark:border-white/10" 
          : "bg-white/0 dark:bg-gray-900/0 backdrop-blur-none"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleSectionClick("home")}
            className="z-10 rounded-full px-2 py-1 text-2xl font-extrabold tracking-normal text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-[1.03]"
          >
            {siteConfig.header.logo}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSectionClick(item.id)}
                className={`relative rounded-full px-1.5 py-2 text-sm font-semibold transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-0.5"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-0.5 left-1.5 right-1.5 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 rounded-full shadow-[0_0_14px_rgba(59,130,246,0.45)]"></span>
                )}
              </button>
            ))}
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-white/45 dark:bg-white/5 hover:bg-white dark:hover:bg-gray-800/90 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 shadow-sm hover:shadow-md transition-all duration-200 text-gray-700 dark:text-gray-300 hover:-translate-y-0.5"
              aria-label={siteConfig.header.ariaLabels.themeToggle}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

            {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-white/50 dark:bg-white/5 hover:bg-white dark:hover:bg-gray-800 border border-gray-200/60 dark:border-gray-700/70 shadow-sm transition-all duration-200 text-gray-700 dark:text-gray-300"
              aria-label={siteConfig.header.ariaLabels.themeToggle}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="text-gray-900 dark:text-white p-3 bg-white/60 dark:bg-white/5 hover:bg-white dark:hover:bg-gray-800 active:bg-gray-100 dark:active:bg-gray-700 rounded-xl border border-gray-200/60 dark:border-gray-700/70 shadow-sm transition-all duration-200 z-[60] relative touch-manipulation cursor-pointer"
              aria-label={siteConfig.header.ariaLabels.mobileMenu}
              type="button"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-3 border border-gray-200/80 dark:border-gray-800/80 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl rounded-2xl animate-fadeIn shadow-2xl shadow-gray-900/10 dark:shadow-black/30">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSectionClick(item.id)}
                className={`block w-full text-left px-4 py-3 text-base font-semibold rounded-xl transition-all duration-200 ${
                  activeSection === item.id
                    ? "text-blue-600 bg-blue-50/90 dark:bg-blue-900/25 dark:text-blue-400 shadow-sm"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/80 hover:translate-x-0.5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
