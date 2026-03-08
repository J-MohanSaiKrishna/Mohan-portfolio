import { useRef, useCallback } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export const useRipple = () => {
  const ripplesRef = useRef<Ripple[]>([]);
  const rippleIdRef = useRef(0);

  const createRipple = useCallback((e: React.MouseEvent | MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = (e as any).clientX - rect.left;
    const y = (e as any).clientY - rect.top;

    const id = rippleIdRef.current++;
    const ripple: Ripple = { id, x, y };

    ripplesRef.current.push(ripple);

    // Remove ripple after animation completes
    setTimeout(() => {
      ripplesRef.current = ripplesRef.current.filter(r => r.id !== id);
    }, 600);

    return ripple;
  }, []);

  return { createRipple, ripplesRef };
};
