import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Youtube, Link as LinkIcon, Mail, Heart } from 'lucide-react';
import { personalInfo, socialLinks, siteConfig } from '../data/mock';

const iconMap = {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Link: LinkIcon
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{personalInfo.name}</h3>
            <p className="text-gray-400 mb-4">{personalInfo.title}</p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              {personalInfo.email}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{siteConfig.footer.quickLinksTitle}</h4>
            <ul className="space-y-2">
              {siteConfig.footer.links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.id);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{siteConfig.footer.connectTitle}</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} {personalInfo.name}. {siteConfig.footer.copyrightText}
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              {siteConfig.footer.builtWithText} <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> {siteConfig.footer.builtWithTech}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;