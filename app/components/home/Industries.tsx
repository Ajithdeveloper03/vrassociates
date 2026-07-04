'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { LucideIcon } from 'lucide-react';
import { industries } from '@/app/lib/siteData';

const industryThemes = [
  { from: '#0f172a', to: '#1e3a5f', accent: '#3b82f6', image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { from: '#1a1a2e', to: '#16213e', accent: '#8b5cf6', image: 'https://images.pexels.com/photos/2101137/pexels-photo-2101137.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { from: '#0d2137', to: '#0a3d62', accent: '#06b6d4', image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { from: '#1a1a1a', to: '#2d2d2d', accent: '#f59e0b', image: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { from: '#0a192f', to: '#112240', accent: '#64ffda', image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { from: '#1b1b2f', to: '#2e2e4e', accent: '#a78bfa', image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { from: '#0d1b2a', to: '#1b2838', accent: '#34d399', image: 'https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { from: '#1a0a2e', to: '#2d1b4e', accent: '#f472b6', image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { from: '#0f2027', to: '#203a43', accent: '#fb923c', image: 'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { from: '#0a0a23', to: '#1a1a3e', accent: '#60a5fa', image: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { from: '#1c1c1c', to: '#2a2a2a', accent: '#fbbf24', image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { from: '#0d2137', to: '#0a3d62', accent: '#22d3ee', image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

const CARD_WIDTH = 400;
const CARD_GAP = 0;
const SIDE_PADDING = 80;

interface IndustryCardProps {
  name: string;
  icon: LucideIcon;
  description: string;
  theme: typeof industryThemes[0];
  index: number;
}

const IndustryCard = ({ name, icon: Icon, description, theme, index }: IndustryCardProps) => (
  <div
    className="relative flex-shrink-0 overflow-hidden group rounded-2xl mx-2"
    style={{ width: `${CARD_WIDTH}px`, height: '75vh' }}
  >
    <img
      src={theme.image}
      alt={name}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-110 contrast-[1.15] saturate-[1.2]"
      loading="lazy"
    />

    <div
      className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-90"
      style={{
        background: `linear-gradient(to bottom, ${theme.from}22 0%, ${theme.to}99 60%, ${theme.from}FA 100%)`,
      }}
    />

    <div className="absolute top-0 right-0 bottom-0 w-px bg-white/10" />

    <div className="absolute top-12 right-8 text-8xl font-bold opacity-10 text-white font-serif select-none">
      {String(index + 1).padStart(2, '0')}
    </div>

    <div className="absolute inset-0 flex flex-col justify-end p-10">
      <div
        className="w-12 h-1 mb-6 rounded-full transition-all duration-500 group-hover:w-20"
        style={{ backgroundColor: theme.accent }}
      />

      <div
        className="w-14 h-14 rounded-xl mb-5 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1"
        style={{ backgroundColor: `${theme.accent}22`, border: `1px solid ${theme.accent}44` }}
      >
        <Icon className="w-7 h-7" style={{ color: theme.accent }} />
      </div>

      <h3 className="text-2xl font-bold text-white mb-3 leading-tight transition-transform duration-300 group-hover:-translate-y-1">
        {name}
      </h3>

      <p className="text-white/60 text-sm leading-relaxed max-w-xs translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
        {description}
      </p>
    </div>
  </div>
);

export function Industries() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const [wrapperHeight, setWrapperHeight] = useState(0);
  const rafRef = useRef<number>(0);
  const currentTranslate = useRef(0);
  const targetTranslate = useRef(0);

  const totalWidth = industries.length * CARD_WIDTH + SIDE_PADDING * 2;

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
    <div ref={wrapperRef} style={{ height: wrapperHeight || '600vh' }} className="relative bg-secondary-950">
      <div className="sticky top-0 overflow-hidden" style={{ height: '100vh' }}>
        <div className="absolute top-0 left-0 right-0 z-30 pt-14 pb-6 px-10 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(2,6,23,0.9) 0%, transparent 100%)' }}>
          <div className="flex items-end justify-between max-w-7xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white/70 text-xs font-bold tracking-widest uppercase rounded-full border border-white/20 mb-3">
                Cross-Industry Expertise
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Industries We Serve
              </h2>
            </div>
            <p className="hidden md:block text-white/40 text-sm max-w-xs text-right leading-relaxed">
              Deep expertise across 12+ industries. Scroll to explore.
            </p>
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
            />
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-30">
          <div
            className="h-full bg-primary-500 transition-none"
            style={{ width: `${maxTranslate > 0 ? (translateX / maxTranslate) * 100 : 0}%` }}
          />
        </div>

        <div className="absolute bottom-6 right-10 z-30 flex items-center gap-2 text-white/30 text-xs tracking-widest uppercase">
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
