'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Award, TrendingUp } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const trustItems = [
  { 
    icon: Award, 
    title: "Global Expertise", 
    desc: "Trusted Financial Advisors operating across UAE, USA, Kuwait, Egypt & Liberia."
  },
  { 
    icon: TrendingUp, 
    title: "Cross-Industry Success", 
    desc: "Delivering strategic value across Manufacturing, IT, Healthcare, and Mining sectors."
  },
  { 
    icon: Globe, 
    title: "AI-Powered Optimization", 
    desc: "Leveraging technology for advanced business process optimization and restructuring."
  }
];

export const TrustIndicators = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.trust-overlap-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.15, 
        ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 90%' }
      }
    );
  }, { scope: containerRef });

  return (
    <section className="relative z-20 -mt-24 pb-24" ref={containerRef}>
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="trust-overlap-card bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col items-start transition-transform hover:-translate-y-2 duration-300"
            >
              <div className="w-14 h-14 bg-[#0a192f] text-[#d4af37] rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#0a192f] mb-3">{item.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
