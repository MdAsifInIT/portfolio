import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Youtube, Link as LinkIcon } from 'lucide-react';
import { socialLinks } from '../data/mock';
import { asArray, getSafeExternalUrl } from '../lib/browser';

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
    <section className="py-12 bg-white dark:bg-gray-950 border-y border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-6">
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
                className="group flex items-center gap-2 px-6 py-3 bg-gray-50 dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                aria-label={social.name}
              >
                <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
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
