import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { projects, siteConfig } from '../data/mock';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projectRefs = useRef([]);

  const categories = siteConfig.projects.categories;

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.category === selectedCategory));
    }
  }, [selectedCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.indexOf(entry.target);
            if (index !== -1 && !visibleProjects.includes(index)) {
              setVisibleProjects(prev => [...prev, index]);
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
  }, [filteredProjects, visibleProjects]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {siteConfig.projects.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {siteConfig.projects.description}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              onClick={() => handleProjectClick(project)}
              className={`group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-900/10 transition-all duration-500 cursor-pointer ${
                visibleProjects.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: visibleProjects.includes(index) ? `${(index % 3) * 100}ms` : '0ms'
              }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  {project.featured && (
                    <span className="bg-yellow-400/90 backdrop-blur-sm text-yellow-950 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      Featured
                    </span>
                  )}
                </div>
                
                {/* Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-6 py-3 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-full text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Details <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-700">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700/50 px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-2.5 py-1 rounded-md">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
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
