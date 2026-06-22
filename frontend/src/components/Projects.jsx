import React, { useMemo, useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects, siteConfig } from '../data/mock';
import ProjectModal from './ProjectModal';
import { asArray, canUseDOM } from '../lib/browser';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projectRefs = useRef([]);

  const projectList = asArray(projects);
  const categories = asArray(siteConfig.projects.categories);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projectList;
    return projectList.filter(p => p.category === selectedCategory);
  }, [projectList, selectedCategory]);

  useEffect(() => {
    projectRefs.current = [];
    setVisibleProjects([]);
  }, [selectedCategory]);

  useEffect(() => {
    if (!canUseDOM || typeof IntersectionObserver === 'undefined') {
      setVisibleProjects(filteredProjects.map((_, index) => index));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setVisibleProjects(prev => (
                prev.includes(index) ? prev : [...prev, index]
              ));
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [filteredProjects]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="relative py-24 bg-[linear-gradient(180deg,#f8fafc_0%,#eef6ff_100%)] dark:bg-[linear-gradient(180deg,rgba(17,24,39,0.88)_0%,rgba(2,6,23,0.96)_100%)] transition-colors duration-300 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/70 to-transparent dark:via-blue-500/30"></div>
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-950 dark:text-white mb-6">
            {siteConfig.projects.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-8">
            {siteConfig.projects.description}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 border ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25 scale-[1.03] border-blue-500/60'
                  : 'bg-white/85 dark:bg-gray-900/70 text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-white dark:hover:bg-gray-800/90 border-gray-200/80 dark:border-gray-700/80 shadow-sm hover:shadow-md hover:-translate-y-0.5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const techStack = asArray(project.techStack);
            const visible = visibleProjects.includes(index);

            return (
              <div
                key={project.id ?? `${project.title}-${index}`}
                ref={(el) => (projectRefs.current[index] = el)}
                onClick={() => handleProjectClick(project)}
                className={`group relative bg-white/90 dark:bg-gray-900/80 rounded-3xl overflow-hidden border border-white/80 dark:border-white/10 shadow-[0_18px_45px_rgba(15,23,42,0.08)] dark:shadow-[0_20px_55px_rgba(0,0,0,0.28)] backdrop-blur-sm hover:border-blue-200/90 dark:hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-900/20 hover:-translate-y-2 transition-all duration-500 cursor-pointer ${
                  visible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: visible ? `${(index % 3) * 100}ms` : '0ms'
                }}
              >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-800">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-300 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  {project.featured && (
                    <span className="bg-amber-300/95 backdrop-blur-sm text-amber-950 px-3 py-1 rounded-full text-xs font-bold shadow-lg shadow-amber-900/10 border border-white/50">
                      {siteConfig.projects.ui.featuredLabel}
                    </span>
                  )}
                </div>
                
                {/* Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-6 py-3 bg-white/90 dark:bg-black/70 backdrop-blur-xl rounded-full text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl border border-white/40 dark:border-white/10">
                    {siteConfig.projects.ui.viewDetailsLabel} <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-extrabold text-gray-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-snug">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 text-sm leading-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-white/10">
                  {techStack.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold text-gray-600 dark:text-gray-300 bg-gray-100/90 dark:bg-white/10 px-2.5 py-1 rounded-lg border border-gray-200/60 dark:border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {techStack.length > 3 && (
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 bg-white/80 dark:bg-gray-950/50 px-2.5 py-1 rounded-lg border border-gray-100 dark:border-white/10">
                      +{techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>

      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        project={selectedProject} 
      />
    </section>
  );
};

export default Projects;
