'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { LucideIcon } from 'lucide-react';
import { industries } from '@/app/lib/siteData';

const industryThemes = [
  { from: '#0f172a', to: '#1e3a5f', accent: '#3b82f6', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800' },
  { from: '#1a1a2e', to: '#16213e', accent: '#8b5cf6', image: 'https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?auto=format&fit=crop&q=80&w=800' },
  { from: '#0d2137', to: '#0a3d62', accent: '#06b6d4', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800' },
  { from: '#1a1a1a', to: '#2d2d2d', accent: '#f59e0b', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800' },
  { from: '#0a192f', to: '#112240', accent: '#64ffda', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800' },
  { from: '#1b1b2f', to: '#2e2e4e', accent: '#a78bfa', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800' },
  { from: '#0d1b2a', to: '#1b2838', accent: '#34d399', image: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80&w=800' },
  { from: '#1a0a2e', to: '#2d1b4e', accent: '#f472b6', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800' },
  { from: '#0f2027', to: '#203a43', accent: '#fb923c', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800' },
  { from: '#0a0a23', to: '#1a1a3e', accent: '#60a5fa', image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=800' },
  { from: '#1c1c1c', to: '#2a2a2a', accent: '#fbbf24', image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800' },
  { from: '#0d2137', to: '#0a3d62', accent: '#22d3ee', image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800' },
];

const CARD_GAP = 0;
const SIDE_PADDING = 80;

interface IndustryCardProps {
  name: string;
  icon: LucideIcon;
  description: string;
  theme: typeof industryThemes[0];
  index: number;
  width: number;
}

const IndustryCard = ({ name, icon: Icon, description, theme, index, width }: IndustryCardProps) => (
  <div
    className="relative flex-shrink-0 overflow-hidden group rounded-2xl mx-2"
    style={{ width: `${width}px`, height: '75vh' }}
  >
    <img
      src={theme.image}
      alt={name}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-110 contrast-[1.15] saturate-[1.2]"
    />

    <div
      className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-90"
      style={{
        background: `linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 30%, transparent 50%)`,
      }}
    />

    <div className="absolute top-0 right-0 bottom-0 w-px bg-white/10" />

    <div className="absolute top-12 right-8 text-8xl font-bold opacity-10 text-white font-serif select-none">
      {String(index + 1).padStart(2, '0')}
    </div>

    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
      <div
        className="w-12 h-1 mb-6 rounded-full transition-all duration-500 group-hover:w-20"
        style={{ backgroundColor: theme.accent }}
      />

      <div className="flex items-start gap-4 transition-transform duration-300 group-hover:-translate-y-1">
        <div className="w-12 h-12 rounded-xl shrink-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1 mt-0.5"
          style={{ backgroundColor: `${theme.accent}22`, border: `1px solid ${theme.accent}44` }}>
          <Icon className="w-6 h-6" style={{ color: theme.accent }} />
        </div>
        
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
            {name}
          </h3>
          <p className="text-white/70 text-sm leading-relaxed max-w-xs translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export function Industries() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const [wrapperHeight, setWrapperHeight] = useState(0);
  const [cardWidth, setCardWidth] = useState(400);
  const rafRef = useRef<number>(0);
  const currentTranslate = useRef(0);
  const targetTranslate = useRef(0);

  useEffect(() => {
    const handleResizeWidth = () => {
      setCardWidth(window.innerWidth < 440 ? window.innerWidth - 60 : 400);
    };
    handleResizeWidth();
    window.addEventListener('resize', handleResizeWidth);
    return () => window.removeEventListener('resize', handleResizeWidth);
  }, []);

  const totalWidth = industries.length * cardWidth + SIDE_PADDING * 2;

  const calcDimensions = useCallback(() => {
    const maxTranslate = Math.max(0, totalWidth - window.innerWidth);
    const extraHeight = maxTranslate + window.innerHeight * 0.5;
    return { maxTranslate, extraHeight };
  }, [totalWidth]);

  useEffect(() => {
    const update = () => {
      const { extraHeight } = calcDimensions();
      setWrapperHeight(extraHeight + window.innerHeight);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [calcDimensions]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const animate = () => {
      const diff = targetTranslate.current - currentTranslate.current;
      if (Math.abs(diff) > 0.1) {
        currentTranslate.current += diff * 0.1;
        setTranslateX(currentTranslate.current);
      } else if (currentTranslate.current !== targetTranslate.current) {
        currentTranslate.current = targetTranslate.current;
        setTranslateX(targetTranslate.current);
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const handleScroll = () => {
      if (!wrapper) return;
      const { maxTranslate, extraHeight } = calcDimensions();
      const rect = wrapper.getBoundingClientRect();
      const wrapperTop = window.scrollY + rect.top;
      const scrolled = window.scrollY - wrapperTop;
      const effectiveRange = extraHeight - window.innerHeight;

      if (scrolled <= 0) {
        targetTranslate.current = 0;
      } else if (scrolled >= effectiveRange) {
        targetTranslate.current = maxTranslate;
      } else {
        targetTranslate.current = (scrolled / effectiveRange) * maxTranslate;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [calcDimensions]);

  const { maxTranslate } = calcDimensions();

  return (
    <div ref={wrapperRef} style={{ height: wrapperHeight || '600vh' }} className="relative bg-secondary-50">
      <div className="sticky top-0 overflow-hidden flex flex-col justify-center" style={{ height: '100vh' }}>
        <div className="w-full z-30 pt-10 pb-4 px-10 shrink-0">
          <div className="flex flex-col items-center text-center max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary-100 text-secondary-600 text-xs font-bold tracking-widest uppercase rounded-full border border-secondary-200 mb-3 shadow-sm">
              Cross-Industry Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 leading-tight drop-shadow-sm">
              Industries We Serve
            </h2>
          </div>
        </div>

        <div
          ref={stripRef}
          className="flex items-center h-full will-change-transform"
          style={{
            transform: `translateX(-${translateX}px)`,
            paddingLeft: `${SIDE_PADDING}px`,
            paddingRight: `${SIDE_PADDING}px`,
            gap: `${CARD_GAP}px`,
          }}
        >
          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.name}
              name={industry.name}
              icon={industry.icon}
              description={industry.description}
              theme={industryThemes[index % industryThemes.length]}
              index={index}
              width={cardWidth}
            />
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary-200 z-30">
          <div
            className="h-full bg-primary-500 transition-none"
            style={{ width: `${maxTranslate > 0 ? (translateX / maxTranslate) * 100 : 0}%` }}
          />
        </div>

        <div className="absolute bottom-6 right-10 z-30 flex items-center gap-2 text-secondary-400 text-xs tracking-widest uppercase font-semibold">
          <span>Drag or Scroll</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Industries;
