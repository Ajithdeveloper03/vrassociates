'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 25, suffix: '+', label: 'Years of Experience', isNumeric: true },
  { value: 970, suffix: '+', label: 'Valuations Completed', isNumeric: true },
  { value: 12, suffix: '+', label: 'Industries Served', isNumeric: true },
  { value: 100, suffix: '%', label: 'Client Commitment', isNumeric: true },
];

const badges = [
  { short: 'IBBI', label: 'Registered Valuer' },
  { short: 'IP', label: 'Insolvency Professional' },
  { short: 'CMA', label: 'Cost & Mgmt Accountant' },
  { short: 'ID', label: 'Independent Director' },
];

function CountUp({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), target);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return <>{count}{suffix}</>;
}

export function TrustIndicators() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-scale').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-white py-16 overflow-hidden border-y border-secondary-100">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #0f172a 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div ref={ref} className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center py-8 px-4 relative group reveal-scale ${
                i !== stats.length - 1 ? 'border-r border-secondary-100' : ''
              }`}
            >
              <div className="absolute inset-0 bg-primary-50/0 group-hover:bg-primary-50/50 transition-colors duration-300 rounded-xl" />
              <div className="text-5xl md:text-6xl font-bold text-secondary-900 mb-2 relative">
                <span className="bg-gradient-to-br from-secondary-900 to-primary-700 bg-clip-text text-transparent">
                  <CountUp target={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                </span>
              </div>
              <div className="text-secondary-500 text-sm font-medium tracking-wide">{stat.label}</div>
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary-500 transition-all duration-500 ${isVisible ? 'w-12' : 'w-0'}`} style={{ transitionDelay: `${i * 150}ms` }} />
            </div>
          ))}
        </div>

        <div className="border-t border-secondary-100 pt-10 reveal">
          <p className="text-center text-secondary-500 text-xs tracking-widest uppercase mb-6">
            Professional Credentials
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {badges.map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-white border border-secondary-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 shadow-sm group reveal-scale"
              >
                <span className="text-primary-700 font-bold text-sm group-hover:text-primary-600 transition-colors">{badge.short}</span>
                <span className="text-secondary-600 text-sm">{badge.label}</span>
              </div>
            ))}

            <div className="hidden md:flex items-center gap-4 ml-4 pl-4 border-l border-secondary-200 reveal-left">
              <span className="text-secondary-500 text-xs tracking-widest uppercase">Global Experience</span>
              <div className="flex gap-1">
                {['IN', 'ME', 'SEA'].map((region) => (
                  <span key={region} className="text-xs px-2 py-1 rounded bg-secondary-100 text-secondary-600 font-mono">
                    {region}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustIndicators;
