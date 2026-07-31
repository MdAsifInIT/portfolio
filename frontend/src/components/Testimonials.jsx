'use client';
import React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/mock';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { asArray } from '../lib/browser';

const Testimonials = () => {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="relative py-24 bg-[linear-gradient(180deg,#f8fafc_0%,#eef6ff_100%)] dark:bg-[linear-gradient(180deg,#111827_0%,#020617_100%)] transition-colors duration-300 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent dark:via-blue-500/25"></div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-950 dark:text-white mb-6">
            Testimonials
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-8">
            What others say about my work and collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {asArray(testimonials).map((testimonial, index) => (
            <div
              key={testimonial.id ?? `${testimonial.name}-${index}`}
              className={`bg-white/90 dark:bg-gray-900/80 p-8 rounded-3xl shadow-[0_18px_45px_rgba(15,23,42,0.07)] dark:shadow-[0_18px_45px_rgba(0,0,0,0.28)] border border-white/80 dark:border-white/10 relative transition-all duration-700 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Quote className="w-10 h-10 text-blue-100 dark:text-blue-900/40 absolute top-8 right-8 rotate-180" />
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-7 relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <Image 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100 dark:ring-blue-900 shadow-md" 
                  width={48}
                  height={48}
                  unoptimized
                />
                <div>
                  <h4 className="font-bold text-gray-950 dark:text-white text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
