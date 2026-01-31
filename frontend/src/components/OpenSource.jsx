import React, { useState, useEffect, useRef } from 'react';
import { Github, Star, GitFork, Clock } from 'lucide-react';
import { openSourceRepos, siteConfig } from '../data/mock';

const OpenSource = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [filteredRepos, setFilteredRepos] = useState(openSourceRepos);
  const [visibleRepos, setVisibleRepos] = useState([]);
  const repoRefs = useRef([]);

  const languages = ['All', ...new Set(openSourceRepos.map(repo => repo.language))];

  useEffect(() => {
    if (selectedLanguage === 'All') {
      setFilteredRepos(openSourceRepos);
    } else {
      setFilteredRepos(openSourceRepos.filter(repo => repo.language === selectedLanguage));
    }
    setVisibleRepos([]);
  }, [selectedLanguage]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = repoRefs.current.indexOf(entry.target);
            if (index !== -1 && !visibleRepos.includes(index)) {
              setVisibleRepos(prev => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    repoRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [filteredRepos]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 30) return `${diffDays} days ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  };

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
            <a
              key={repo.id}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => (repoRefs.current[index] = el)}
              className={`group block bg-gray-50 dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10 transform hover:-translate-y-1 ${
                visibleRepos.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: visibleRepos.includes(index) ? `${(index % 2) * 100}ms` : '0ms'
              }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm group-hover:bg-blue-600 transition-colors duration-300">
                    <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {repo.name}
                  </h3>
                </div>
                <span className="text-xs font-semibold text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-full border border-transparent dark:border-gray-700">
                  {repo.language}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 leading-relaxed">{repo.description}</p>

              {/* Topics */}
              <div className="flex flex-wrap gap-2 mb-6">
                {repo.topics.map((topic, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2.5 py-1 rounded-md"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800 pt-4">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
                  <span className="font-medium text-gray-700 dark:text-gray-300">{repo.stars.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <GitFork className="w-4 h-4" />
                  <span className="font-medium text-gray-700 dark:text-gray-300">{repo.forks.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1.5 ml-auto">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs">{formatDate(repo.lastUpdated)}</span>
                </div>
              </div>
            </a>
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