import React from 'react';
import { X, ExternalLink, Github, Layers, Code, CheckCircle } from 'lucide-react';
import useModalControls from '../hooks/useModalControls';
import { asArray, getSafeExternalUrl } from '../lib/browser';

const ProjectModal = ({ isOpen, onClose, project }) => {
  useModalControls(isOpen, onClose);

  if (!isOpen || !project) return null;

  const details = project.details || {};
  const features = asArray(details.features);
  const techStack = asArray(project.techStack);
  const liveUrl = getSafeExternalUrl(project.liveUrl);
  const githubUrl = getSafeExternalUrl(project.githubUrl);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/68 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white/95 dark:bg-gray-950/95 rounded-3xl shadow-2xl shadow-slate-950/25 dark:shadow-black/60 animate-slideUp custom-scrollbar border border-white/80 dark:border-white/10 backdrop-blur-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/70 dark:bg-black/50 backdrop-blur-md rounded-full text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 hover:scale-105 transition-all duration-200 shadow-lg border border-white/50 dark:border-white/10"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 md:h-80 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-10"></div>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 md:left-10 right-6 z-20">
            <div className="flex flex-wrap gap-2 mb-3">
              {(Array.isArray(project.category) ? project.category : (project.category ? [project.category] : []))
                .filter(cat => cat && cat.trim() !== '')
                .map((cat) => (
                  <span key={cat} className="inline-block px-3 py-1 text-xs font-bold text-blue-100 uppercase bg-blue-600/30 backdrop-blur-md rounded-full border border-blue-300/30 shadow-sm">
                    {cat}
                  </span>
              ))}
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-lg">{project.title}</h2>
          </div>
        </div>

        {/* Content Container */}
        <div className="p-6 md:p-10 space-y-8">
          
          {/* Main Description & Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Overview
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-8 text-lg">
                  {project.description}
                </p>
              </div>

              {/* Case Study Details (if available) */}
              {project.details && (
                <div className="space-y-6 pt-6 border-t border-gray-100 dark:border-white/10">
                  {details.problem && (
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">The Challenge</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-7">{details.problem}</p>
                    </div>
                  )}
                  
                  {features.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Sidebar info */}
            <div className="space-y-6">
              {/* Links */}
              <div className="flex flex-col gap-3">
                {liveUrl && (
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
                {githubUrl && (
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gray-100/90 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/15 text-gray-900 dark:text-white rounded-xl font-bold transition-all duration-300 border border-gray-200/80 dark:border-white/10 hover:-translate-y-0.5">
                    <Github className="w-5 h-5" />
                    View Source
                  </a>
                )}
              </div>

              {/* Tech Stack */}
              <div className="bg-gray-50/90 dark:bg-white/10 rounded-2xl p-6 border border-gray-100 dark:border-white/10 shadow-sm">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Code className="w-4 h-4 text-purple-500" />
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white/90 dark:bg-gray-950/60 text-gray-600 dark:text-gray-300 text-sm font-semibold rounded-lg border border-gray-100 dark:border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Role & Outcomes */}
              {project.details && (
                <div className="space-y-4">
                  {details.role && (
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">Role</h4>
                      <p className="font-medium text-gray-900 dark:text-white">{details.role}</p>
                    </div>
                  )}
                   {details.outcomes && (
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">Impact</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{details.outcomes}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
