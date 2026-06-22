import React, { useEffect, useRef, useState } from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { certifications, siteConfig } from '../data/mock';
import CertificationModal from './CertificationModal';
import { asArray, canUseDOM, formatMonthYear } from '../lib/browser';

const Certifications = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCertClick = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (!canUseDOM || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (!siteConfig.sections?.showCertifications) return null;

  const formatDate = (dateStr) => {
    return formatMonthYear(dateStr, 'short');
  };

  const certificationItems = asArray(certifications);

  return (
    <section
      id="certifications"
      className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {siteConfig.certifications.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {siteConfig.certifications.description}
          </p>
        </div>

        {/* Certifications Grid */}
        <div
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {certificationItems.map((cert, index) => {
            const skills = asArray(cert.skills);

            return (
              <div
                key={cert.id ?? `${cert.name}-${index}`}
                onClick={() => handleCertClick(cert)}
                className={`group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden cursor-pointer
                  hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200 dark:hover:border-blue-800 hover:-translate-y-1
                  transition-all duration-500 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                style={{
                  transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
                }}
              >
              {/* Top accent gradient */}
              <div className="h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

              <div className="p-7">
                {/* Icon + Code badge */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <span className="inline-flex items-center px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-full border border-blue-100 dark:border-blue-800/50">
                    {cert.code}
                  </span>
                </div>

                {/* Cert Name */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {cert.name}
                </h3>

                {/* Issuer + Date */}
                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span className="font-medium text-gray-600 dark:text-gray-300">
                    {cert.issuer}
                  </span>
                  <span className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full" />
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(cert.issueDate)}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5 line-clamp-2">
                  {cert.description}
                </p>

                {/* Skills (first 3) */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {skills.slice(0, 3).map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-gray-50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-md border border-gray-100 dark:border-gray-600/50"
                    >
                      {skill}
                    </span>
                  ))}
                  {skills.length > 3 && (
                    <span className="px-2.5 py-1 text-gray-400 dark:text-gray-500 text-xs font-medium">
                      +{skills.length - 3} more
                    </span>
                  )}
                </div>

                {/* View Details link */}
                <div className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-2.5 transition-all duration-300">
                  View Details
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
              </div>
            );
          })}
        </div>
      </div>

      <CertificationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        certification={selectedCert}
      />
    </section>
  );
};

export default Certifications;
