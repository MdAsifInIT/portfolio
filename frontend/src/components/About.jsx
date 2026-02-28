import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { skills, timeline, siteConfig } from '../data/mock';
import SkillModal from './SkillModal';

const About = () => {
  const [visibleTimeline, setVisibleTimeline] = useState([]);
  const timelineRefs = useRef([]);
  const skillsRef = useRef(null);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSkillClick = (skill, category) => {
    setSelectedSkill(skill);
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const timelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = timelineRefs.current.indexOf(entry.target);
            if (index !== -1 && !visibleTimeline.includes(index)) {
              setVisibleTimeline(prev => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const skillsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSkillsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    timelineRefs.current.forEach((ref) => {
      if (ref) timelineObserver.observe(ref);
    });

    if (skillsRef.current) {
      skillsObserver.observe(skillsRef.current);
    }

    return () => {
      timelineObserver.disconnect();
      skillsObserver.disconnect();
    };
  }, []);

  if (!siteConfig.sections.showAbout) return null;

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {siteConfig.about.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {siteConfig.about.description}
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 text-center flex items-center justify-center gap-3">
            <span className="w-12 h-1 bg-blue-600 rounded-full"></span>
            {siteConfig.about.timelineTitle}
            <span className="w-12 h-1 bg-blue-600 rounded-full"></span>
          </h3>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon = item.type === 'education' ? GraduationCap : Briefcase;

              return (
                <div
                  key={index}
                  ref={(el) => (timelineRefs.current[index] = el)}
                  className={`relative mb-12 ${visibleTimeline.includes(index)
                      ? 'opacity-100 translate-x-0'
                      : `opacity-0 ${isEven ? '-translate-x-8' : 'translate-x-8'}`
                    } transition-all duration-700 ease-out`}
                  style={{
                    transitionDelay: `${index * 150}ms`
                  }}
                >
                  {/* Mobile Layout: Stacked vertically */}
                  <div className="flex md:hidden items-start gap-6">
                    <div className="relative flex flex-col items-center">
                      <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="w-0.5 flex-1 min-h-[60px] bg-gray-200 dark:bg-gray-700 mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                        <span className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                          {item.year}
                        </span>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-3">{item.company}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout: Alternating sides */}
                  <div className={`hidden md:flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'
                    }`}>
                    {/* Content */}
                    <div className={`w-5/12 ${isEven ? 'text-right pr-10' : 'text-left pl-10'}`}>
                      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                        <span className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                          {item.year}
                        </span>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.title}</h4>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-3">{item.company}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    {/* Center Line & Icon */}
                    <div className="w-2/12 flex justify-center">
                      <div className="relative flex flex-col items-center">
                        <div className="w-14 h-14 bg-white dark:bg-gray-900 border-4 border-blue-600 dark:border-blue-500 rounded-full flex items-center justify-center z-10 shadow-lg transform hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        {index < timeline.length - 1 && (
                          <div className="w-0.5 h-32 bg-gray-200 dark:bg-gray-700 absolute top-14"></div>
                        )}
                      </div>
                    </div>

                    {/* Empty space for alternating layout */}
                    <div className="w-5/12"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills */}
        <div ref={skillsRef} className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 text-center flex items-center justify-center gap-3">
            <span className="w-12 h-1 bg-blue-600 rounded-full"></span>
            {siteConfig.about.skillsTitle}
            <span className="w-12 h-1 bg-blue-600 rounded-full"></span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <div
                key={category}
                className={`bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-500 ${skillsVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                  }`}
                style={{
                  transitionDelay: skillsVisible ? `${categoryIndex * 150}ms` : '0ms'
                }}
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                     <span
                      key={skillIndex}
                      onClick={() => handleSkillClick(skill, category)}
                      className="inline-block px-4 py-2 bg-gray-50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer border border-gray-100 dark:border-gray-600/50 shadow-sm hover:shadow-md"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SkillModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        skill={selectedSkill}
        category={selectedCategory} 
      />
    </section>
  );
};

export default About;