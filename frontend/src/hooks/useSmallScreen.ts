import { useEffect, useState } from "react";

export function useSmallScreen() {
  const [isSmall, setIsSmall] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      setIsSmall(e.matches);
    };

    // Set initial value
    setIsSmall(mediaQuery.matches);

    // Modern browsers
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isSmall;
}