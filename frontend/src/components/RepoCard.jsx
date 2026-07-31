'use client';
import React from 'react';
import { Github, Star, GitFork, Clock } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { asArray, formatCount, formatRelativeDate, getSafeExternalUrl } from '../lib/browser';

const RepoCard = ({ repo, index, showStats = true }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const repoUrl = getSafeExternalUrl(repo?.url);
  const topics = asArray(repo?.topics);
  const CardElement = repoUrl ? 'a' : 'div';
  const linkProps = repoUrl
    ? { href: repoUrl, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <CardElement
      {...linkProps}
      ref={ref}
      className={`group block bg-white/90 dark:bg-gray-900/80 border border-white/80 dark:border-white/10 hover:border-blue-300 dark:hover:border-blue-500/40 rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-900/20 transform hover:-translate-y-1.5 backdrop-blur-sm ${isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
        }`}
      style={{
        transitionDelay: isVisible ? `${(index % 2) * 100}ms` : '0ms'
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gray-50 dark:bg-white/10 rounded-xl shadow-sm group-hover:bg-blue-600 group-hover:shadow-lg group-hover:shadow-blue-600/20 transition-all duration-300">
            <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-extrabold text-gray-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {repo?.name}
          </h3>
        </div>
        <span className="text-xs font-bold text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-white/10 px-3 py-1 rounded-full border border-gray-200/70 dark:border-white/10">
          {repo?.language || 'Other'}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 leading-7">{repo?.description}</p>

      {/* Topics */}
      <div className="flex flex-wrap gap-2 mb-6">
        {topics.map((topic, i) => (
          <span
            key={i}
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2.5 py-1 rounded-lg border border-blue-100/80 dark:border-blue-700/30"
          >
            {topic}
          </span>
        ))}
      </div>

      {/* Stats */}
      {showStats && (
        <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-white/10 pt-4">
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
            <span className="font-medium text-gray-700 dark:text-gray-300">{formatCount(repo?.stars)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <GitFork className="w-4 h-4" />
            <span className="font-medium text-gray-700 dark:text-gray-300">{formatCount(repo?.forks)}</span>
          </div>
          <div className="flex items-center gap-1.5 ml-auto">
            <Clock className="w-4 h-4" />
            <span className="text-xs">{formatRelativeDate(repo?.lastUpdated)}</span>
          </div>
        </div>
      )}
    </CardElement>
  );
};

export default RepoCard;
