import React, { useRef, useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { siteConfig } from '../data/mock';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Developer",
    content: "One of the most talented engineers I've worked with. The attention to detail in automation workflows is outstanding.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    content: "Delivered the project ahead of schedule and with features we hadn't even thought of but absolutely needed.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Tech Lead",
    content: "The dark mode implementation and glassmorphism effects are top-notch. A visually stunning portfolio.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  }
];

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Testimonials
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            What others say about my work and collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 relative transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Quote className="w-10 h-10 text-blue-100 dark:text-blue-900/40 absolute top-8 right-8 rotate-180" />
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100 dark:ring-blue-900" 
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm">
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
