import { useEffect, useState, useRef } from 'react';

const useIntersectionObserver = ({ threshold = 0.1, root = null, rootMargin = '0px', triggerOnce = true } = {}) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIntersecting(false);
        }
      },
      { threshold, root, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, triggerOnce]);

  return [ref, isIntersecting];
};

export default useIntersectionObserver;
