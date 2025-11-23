import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Youtube, Link as LinkIcon } from 'lucide-react';
import { socialLinks } from '../data/mock';

const iconMap = {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Link: LinkIcon
};

const SocialBar = () => {
  return (
    <section className="py-12 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-6">
          {socialLinks.map((social, index) => {
            const Icon = iconMap[social.icon];
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                aria-label={social.name}
              >
                <Icon className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                  {social.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialBar;