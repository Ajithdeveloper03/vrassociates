import { useEffect, useRef } from 'react';

export function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-scale');
            children.forEach((child, i) => {
              setTimeout(() => child.classList.add('visible'), i * 80);
            });
            // Also add visible to the element itself if it has reveal class
            if (entry.target.classList.contains('reveal') ||
                entry.target.classList.contains('reveal-left') ||
                entry.target.classList.contains('reveal-scale')) {
              entry.target.classList.add('visible');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
