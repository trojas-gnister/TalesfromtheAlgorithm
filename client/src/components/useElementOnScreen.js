import { useState, useEffect } from 'react';

export default function useElementOnScreen(ref, rootMargin = '0px') {
  const [isIntersecting, setIsIntersecting] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, { rootMargin });

    var refCurrent = ref.current;

    if (refCurrent) {
      observer.observe(ref.current);
    }

    return () => {
      if (refCurrent) {
        observer.unobserve(refCurrent);
      }
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}
