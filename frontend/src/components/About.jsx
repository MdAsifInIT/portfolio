import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { skills, timeline, siteConfig } from '../data/mock';

const About = () => {
  const [visibleTimeline, setVisibleTimeline] = useState([]);
  const timelineRefs = useRef([]);
  const skillsRef = useRef(null);
  const [skillsVisible, setSkillsVisible] = useState(false);

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
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {siteConfig.about.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {siteConfig.about.description}
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{siteConfig.about.timelineTitle}</h3>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon = item.title.includes('B.S.') || item.title.includes('Education') || item.title.includes('BSc') || item.title.includes('Student') ? GraduationCap : Briefcase;
              
              return (
                <div
                  key={index}
                  ref={(el) => (timelineRefs.current[index] = el)}
                  className={`relative mb-12 ${
                    visibleTimeline.includes(index)
                      ? 'opacity-100 translate-x-0'
                      : `opacity-0 ${isEven ? '-translate-x-8' : 'translate-x-8'}`
                  } transition-all duration-700 ease-out`}
                  style={{
                    transitionDelay: `${index * 150}ms`
                  }}
                >
                  {/* Mobile Layout: Stacked vertically */}
                  <div className="flex md:hidden items-start gap-4">
                    <div className="relative flex flex-col items-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="w-0.5 flex-1 min-h-[60px] bg-gray-300 mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <span className="inline-block text-sm font-semibold text-blue-600 mb-2">
                          {item.year}
                        </span>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-sm font-medium text-gray-600 mb-2">{item.company}</p>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout: Alternating sides */}
                  <div className={`hidden md:flex items-center ${
                    isEven ? 'flex-row' : 'flex-row-reverse'
                  }`}>
                    {/* Content */}
                    <div className={`w-5/12 ${isEven ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <span className="inline-block text-sm font-semibold text-blue-600 mb-2">
                          {item.year}
                        </span>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-sm font-medium text-gray-600 mb-2">{item.company}</p>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>

                    {/* Center Line & Icon */}
                    <div className="w-2/12 flex justify-center">
                      <div className="relative flex flex-col items-center">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center z-10 shadow-lg transform hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        {index < timeline.length - 1 && (
                          <div className="w-0.5 h-24 bg-gray-300 absolute top-12"></div>
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
        <div ref={skillsRef} className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{siteConfig.about.skillsTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <div
                key={category}
                className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 ${
                  skillsVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: skillsVisible ? `${categoryIndex * 150}ms` : '0ms'
                }}
              >
                <h4 className="text-lg font-bold text-gray-900 mb-4 pb-3 border-b-2 border-blue-600">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg hover:bg-blue-100 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;