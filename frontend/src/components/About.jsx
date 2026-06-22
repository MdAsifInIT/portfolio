import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { skills, timeline, siteConfig } from '../data/mock';
import SkillModal from './SkillModal';
import { asArray, canUseDOM } from '../lib/browser';

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
    const timelineItems = asArray(timeline);

    if (!canUseDOM || typeof IntersectionObserver === 'undefined') {
      setVisibleTimeline(timelineItems.map((_, index) => index));
      setSkillsVisible(true);
      return undefined;
    }

    const timelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = timelineRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setVisibleTimeline(prev => (
                prev.includes(index) ? prev : [...prev, index]
              ));
              timelineObserver.unobserve(entry.target);
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

  if (!siteConfig.sections?.showAbout) return null;

  const timelineItems = asArray(timeline);
  const skillEntries = Object.entries(skills || {});

  return (
    <section id="about" className="relative py-24 bg-[linear-gradient(180deg,#f8fafc_0%,#f1f5f9_100%)] dark:bg-[linear-gradient(180deg,#111827_0%,#020617_100%)] transition-colors duration-300 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-white/10"></div>
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-950 dark:text-white mb-6">
            {siteConfig.about.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-8">
            {siteConfig.about.description}
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 text-center flex items-center justify-center gap-3">
            <span className="w-12 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-sm shadow-blue-600/30"></span>
            {siteConfig.about.timelineTitle}
            <span className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-sm shadow-blue-600/30"></span>
          </h3>
          <div className="max-w-4xl mx-auto">
            {timelineItems.map((item, index) => {
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
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30 ring-4 ring-white/90 dark:ring-gray-950">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      {index < timelineItems.length - 1 && (
                        <div className="w-0.5 flex-1 min-h-[60px] bg-gradient-to-b from-blue-200 to-gray-200 dark:from-blue-800 dark:to-gray-800 mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="bg-white/90 dark:bg-gray-900/80 p-6 rounded-2xl shadow-lg shadow-gray-900/5 dark:shadow-black/25 border border-white/80 dark:border-white/10 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 backdrop-blur-sm">
                        <span className="inline-block text-sm font-bold text-blue-600 dark:text-blue-400 mb-2">
                          {item.year}
                        </span>
                        <h4 className="text-xl font-extrabold text-gray-950 dark:text-white mb-1">{item.title}</h4>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-3">{item.company}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-6">{item.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout: Alternating sides */}
                  <div className={`hidden md:flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'
                    }`}>
                    {/* Content */}
                    <div className={`w-5/12 ${isEven ? 'text-right pr-10' : 'text-left pl-10'}`}>
                      <div className="bg-white/90 dark:bg-gray-900/80 p-8 rounded-2xl shadow-lg shadow-gray-900/5 dark:shadow-black/25 border border-white/80 dark:border-white/10 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 group backdrop-blur-sm">
                        <span className="inline-block text-sm font-bold text-blue-600 dark:text-blue-400 mb-2">
                          {item.year}
                        </span>
                        <h4 className="text-xl font-extrabold text-gray-950 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.title}</h4>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-3">{item.company}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-6">{item.description}</p>
                      </div>
                    </div>

                    {/* Center Line & Icon */}
                    <div className="w-2/12 flex justify-center">
                      <div className="relative flex flex-col items-center">
                        <div className="w-14 h-14 bg-white dark:bg-gray-950 border-4 border-blue-600 dark:border-blue-500 rounded-full flex items-center justify-center z-10 shadow-lg shadow-blue-500/20 transform hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        {index < timelineItems.length - 1 && (
                          <div className="w-0.5 h-32 bg-gradient-to-b from-blue-200 via-gray-200 to-gray-200 dark:from-blue-800 dark:via-gray-800 dark:to-gray-800 absolute top-14"></div>
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
            <span className="w-12 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-sm shadow-blue-600/30"></span>
            {siteConfig.about.skillsTitle}
            <span className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-sm shadow-blue-600/30"></span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillEntries.map(([category, skillList], categoryIndex) => (
              <div
                key={category}
                className={`bg-white/90 dark:bg-gray-900/80 p-8 rounded-3xl shadow-[0_18px_45px_rgba(15,23,42,0.07)] dark:shadow-[0_18px_45px_rgba(0,0,0,0.28)] border border-white/80 dark:border-white/10 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200 dark:hover:border-blue-500/30 hover:-translate-y-1.5 transition-all duration-500 backdrop-blur-sm ${skillsVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                  }`}
                style={{
                  transitionDelay: skillsVisible ? `${categoryIndex * 150}ms` : '0ms'
                }}
              >
                <h4 className="text-xl font-extrabold text-gray-950 dark:text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-cyan-500 rounded-full shadow-sm shadow-blue-600/30"></span>
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {asArray(skillList).map((skill, skillIndex) => (
                     <span
                      key={skillIndex}
                      onClick={() => handleSkillClick(skill, category)}
                      className="inline-block px-4 py-2 bg-gray-50/90 dark:bg-white/10 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 cursor-pointer border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md hover:-translate-y-0.5"
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
