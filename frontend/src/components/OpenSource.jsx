import React, { useState, useEffect } from 'react';
import { Github } from 'lucide-react';
import { openSourceRepos, siteConfig } from '../data/mock';
import RepoCard from './RepoCard';

const OpenSource = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [filteredRepos, setFilteredRepos] = useState(openSourceRepos);

  const languages = ['All', ...new Set(openSourceRepos.map(repo => repo.language))];

  useEffect(() => {
    if (selectedLanguage === 'All') {
      setFilteredRepos(openSourceRepos);
    } else {
      setFilteredRepos(openSourceRepos.filter(repo => repo.language === selectedLanguage));
    }
  }, [selectedLanguage]);

  return (
    <section id="opensource" className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {siteConfig.openSource.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {siteConfig.openSource.description}
          </p>
        </div>

        {/* Language Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {languages.map((language) => (
            <button
              key={language}
              onClick={() => setSelectedLanguage(language)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedLanguage === language
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {language}
            </button>
          ))}
        </div>

        {/* Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredRepos.map((repo, index) => (
            <RepoCard key={repo.id} repo={repo} index={index} />
          ))}
        </div>

        {/* GitHub Profile CTA */}
        <div className="text-center mt-16">
          <a
            href={siteConfig.openSource.githubProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <Github className="w-5 h-5" />
            {siteConfig.openSource.githubCta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;