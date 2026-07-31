'use client';
import React, { useMemo, useState } from 'react';
import { Github } from 'lucide-react';
import { openSourceRepos, siteConfig } from '../data/mock';
import RepoCard from './RepoCard';
import { asArray, getSafeExternalUrl } from '../lib/browser';

const OpenSource = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('All');

  const repoList = asArray(openSourceRepos);
  const languages = ['All', ...new Set(repoList.map(repo => repo.language).filter(Boolean))];
  const githubProfileUrl = getSafeExternalUrl(siteConfig.openSource.githubProfileUrl);
  const showStats = Boolean(siteConfig.sections?.showRepoStats || siteConfig.openSource.showStats);
  const githubCta = siteConfig.openSource.githubCta || siteConfig.openSource.ui?.buttonText || 'View on GitHub';

  const filteredRepos = useMemo(() => {
    if (selectedLanguage === 'All') return repoList;
    return repoList.filter(repo => repo.language === selectedLanguage);
  }, [repoList, selectedLanguage]);

  return (
    <section id="opensource" className="relative py-24 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] dark:bg-[linear-gradient(180deg,#020617_0%,#08111f_100%)] transition-colors duration-300 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent dark:via-blue-500/25"></div>
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-950 dark:text-white mb-6">
            {siteConfig.openSource.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-8">
            {siteConfig.openSource.description}
          </p>
        </div>

        {/* Language Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {languages.map((language) => (
            <button
              key={language}
              onClick={() => setSelectedLanguage(language)}
              className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 transform border ${selectedLanguage === language
                  ? 'bg-gray-950 dark:bg-white text-white dark:text-gray-950 shadow-lg shadow-gray-900/15 dark:shadow-white/10 scale-[1.03] border-transparent'
                  : 'bg-white/85 dark:bg-gray-900/70 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800/90 hover:-translate-y-0.5 border-gray-200/80 dark:border-white/10 shadow-sm hover:shadow-md'
                }`}
            >
              {language}
            </button>
          ))}
        </div>

        {/* Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredRepos.map((repo, index) => (
            <RepoCard key={repo.id ?? `${repo.name}-${index}`} repo={repo} index={index} showStats={showStats} />
          ))}
        </div>

        {/* GitHub Profile CTA */}
        {githubProfileUrl && (
          <div className="text-center mt-16">
            <a
              href={githubProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-950 dark:bg-white text-white dark:text-gray-950 rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl border border-white/10"
            >
              <Github className="w-5 h-5" />
              {githubCta}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default OpenSource;
