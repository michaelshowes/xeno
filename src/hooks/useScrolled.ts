import { useCallback, useEffect, useState } from 'react';

/**
 * React hook to detect when the user scrolls past a certain threshold
 * @param threshold
 * @returns boolean
 * @example
 * const hasScrolled = useScroll(200);
 */
export default function useScroll(threshold: number) {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.pageYOffset > threshold);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return scrolled;
}
