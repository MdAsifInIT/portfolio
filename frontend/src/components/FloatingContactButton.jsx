import React, { useCallback, useState } from 'react';
import { Mail } from 'lucide-react';
import { canUseDOM } from '../lib/browser';
import useRafScroll from '../hooks/useRafScroll';

const FloatingContactButton = ({ onClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback(() => {
    if (!canUseDOM) return;
    // Show button after scrolling down 300px
    setIsVisible(window.scrollY > 300);
  }, []);

  useRafScroll(handleScroll);

  return (
    <button
      onClick={onClick}
      className={`fixed bottom-8 right-8 z-40 w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-full shadow-xl shadow-blue-600/25 hover:shadow-2xl hover:shadow-blue-600/35 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 active:scale-100 flex items-center justify-center border border-white/20 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
      aria-label="Contact"
    >
      <Mail className="w-6 h-6" />
    </button>
  );
};

export default FloatingContactButton;
