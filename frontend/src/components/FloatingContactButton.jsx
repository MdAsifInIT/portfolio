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
      className={`fixed bottom-8 right-8 z-40 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
      aria-label="Contact"
    >
      <Mail className="w-6 h-6" />
    </button>
  );
};

export default FloatingContactButton;
