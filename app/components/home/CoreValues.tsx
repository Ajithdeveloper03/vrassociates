'use client';

import { useRef, useEffect } from 'react';
import { coreValues } from '@/app/lib/siteData';

const valueImages = [
  'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1554200876-56c2f25224fa?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
];

interface ValueCardProps {
  name: string;
  image: string;
  index: number;
}

const ValueCard = ({ name, image, index }: ValueCardProps) => {
  const revealClass = index % 2 === 0 ? 'reveal-left' : 'reveal-scale';

  const firstWord = name.split(' ')[0];
  const restWords = name.split(' ').slice(1).join(' ');

  return (
    <div className={`relative group ${revealClass} flex flex-col h-full bg-white rounded-2xl shadow-soft hover:shadow-soft-lg transition-shadow duration-500 border border-secondary-100 overflow-hidden`}>
      <div className="relative w-full h-[160px] shrink-0 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-6 w-full flex flex-col flex-1 bg-white z-10 relative">
        <h3 className="text-xl font-bold mb-4 text-secondary-900 transition-colors duration-500">
          <span className="text-primary-600 transition-colors duration-500">{firstWord}</span>{' '}
          {restWords}
        </h3>

        <span className="inline-flex items-center text-xs font-bold tracking-widest text-secondary-500 group-hover:text-primary-600 uppercase cursor-pointer transition-colors duration-500 mt-auto">
          <span className="w-8 h-8 rounded-full bg-primary-50 group-hover:bg-primary-600 text-primary-600 group-hover:text-white flex items-center justify-center mr-3 transition-colors duration-500">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </span>
          Learn more
        </span>
      </div>
    </div>
  );
};

export function CoreValues() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-scale').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative section-padding !pt-16 bg-secondary-50 overflow-hidden">
      <div ref={ref} className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4 reveal">
            Our Principles
          </h2>
          <p className="text-secondary-600 text-sm tracking-wide reveal">
            The values that define us and shape every client relationship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start mt-12 pb-20">
          {coreValues.map((value, index) => (
            <ValueCard
              key={value.name}
              name={value.name}
              image={valueImages[index]}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;
