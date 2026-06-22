import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Youtube, Link as LinkIcon, Mail, Heart } from 'lucide-react';
import { personalInfo, socialLinks, siteConfig } from '../data/mock';
import { asArray, createMailtoHref, getSafeExternalUrl, scrollToSection } from '../lib/browser';

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
  const emailHref = createMailtoHref({ email: personalInfo.email });

  return (
    <footer className="relative bg-[linear-gradient(180deg,#111827_0%,#020617_100%)] text-white py-12 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{personalInfo.name}</h3>
            <p className="text-gray-400 mb-4">{personalInfo.title}</p>
            {emailHref && (
              <a
                href={emailHref}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-all duration-200 hover:translate-x-0.5 premium-link-underline"
              >
                <Mail className="w-4 h-4" />
                {personalInfo.email}
              </a>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{siteConfig.footer.quickLinksTitle}</h4>
            <ul className="space-y-2">
              {asArray(siteConfig.footer.links).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-0.5 premium-link-underline"
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
              {asArray(socialLinks).map((social, index) => {
                const Icon = iconMap[social.icon] || LinkIcon;
                const socialUrl = getSafeExternalUrl(social.url);
                if (!socialUrl) return null;

                return (
                  <a
                    key={index}
                    href={socialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 border border-white/10 hover:border-blue-400/60 shadow-sm hover:shadow-lg hover:shadow-blue-600/20"
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
