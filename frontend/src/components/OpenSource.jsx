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
    <section id="opensource" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {siteConfig.openSource.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {siteConfig.openSource.description}
          </p>
        </div>

        {/* Language Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {languages.map((language) => (
            <button
              key={language}
              onClick={() => setSelectedLanguage(language)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedLanguage === language
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
              className={`group block bg-gray-50 hover:bg-white border-2 border-gray-200 hover:border-blue-500 rounded-xl p-6 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1 ${
                visibleRepos.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: visibleRepos.includes(index) ? `${(index % 2) * 100}ms` : '0ms'
              }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Github className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {repo.name}
                  </h3>
                </div>
                <span className="text-xs font-medium text-gray-600 bg-gray-200 px-3 py-1 rounded-full">
                  {repo.language}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-4 line-clamp-2">{repo.description}</p>

              {/* Topics */}
              <div className="flex flex-wrap gap-2 mb-4">
                {repo.topics.map((topic, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
                  <span className="font-medium">{repo.stars.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="w-4 h-4 text-gray-600" fill="currentColor" />
                  <span className="font-medium">{repo.forks.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-gray-600" />
                  <span className="text-xs">{formatDate(repo.lastUpdated)}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* GitHub Profile CTA */}
        <div className="text-center mt-12">
          <a
            href={siteConfig.openSource.githubProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
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