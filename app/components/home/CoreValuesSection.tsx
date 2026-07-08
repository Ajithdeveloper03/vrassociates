'use client';

import { useRef } from 'react';
import { ShieldCheck, Award, Lightbulb, Users, BookOpen, Target, TrendingUp } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const coreValues = [
  {
    title: 'Integrity',
    icon: ShieldCheck,
    desc: 'Upholding the highest ethical standards in all our professional engagements.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Professional Excellence',
    icon: Award,
    desc: 'Delivering superior quality and precision in every advisory service.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Innovation',
    icon: Lightbulb,
    desc: 'Embracing modern technology and AI to provide future-ready solutions.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Client-Centric Approach',
    icon: Users,
    desc: 'Prioritizing our clients’ unique needs to build long-lasting partnerships.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Continuous Learning',
    icon: BookOpen,
    desc: 'Constantly updating our expertise to stay ahead in a dynamic market.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Accountability',
    icon: Target,
    desc: 'Taking full responsibility for our strategies and the outcomes they drive.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop'
  }
];

export const CoreValuesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.cv-title',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
    );
    gsap.fromTo('.cv-card',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.cv-grid', start: 'top 80%' } }
    );
    
    // Parallax shapes
    gsap.to('.parallax-shape-11', { yPercent: -100, rotation: 180, ease: 'none', scrollTrigger: { trigger: containerRef.current, start: 'top bottom', end: 'bottom top', scrub: 1 } });
  }, { scope: containerRef });

  return (
    <section className="py-24 bg-white overflow-hidden relative" ref={containerRef}>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#d4af37]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="parallax-shape-11 absolute bottom-20 left-10 w-24 h-24 border-[6px] border-[#0a192f]/5 rounded-full z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative z-10">
        
        <div className="cv-title text-center mb-16 max-w-3xl mx-auto">
          <p className="text-sm font-bold tracking-widest text-[#d4af37] uppercase mb-4">
            Principles We Stand By
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a192f] leading-tight">
            Our Core Values
          </h2>
        </div>

        <div className="cv-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, idx) => {
            const isNavy = idx % 2 === 0;
            return (
            <div 
              key={idx} 
              className={`cv-card relative overflow-hidden p-10 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-center min-h-[280px] group ${
                isNavy 
                  ? 'bg-[#0a192f] text-white shadow-lg' 
                  : 'bg-[#d4af37] text-[#0a192f] shadow-lg shadow-[#d4af37]/20'
              }`}
            >
              {/* Background Image on Hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${value.image})` }}
              >
                <div className="absolute inset-0 bg-[#0a192f]/50 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-[#0a192f]/50"></div>
              </div>

              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                  isNavy ? 'bg-white/10' : 'bg-white/20'
                }`}>
                  <value.icon className={`w-8 h-8 ${isNavy ? 'text-[#d4af37]' : 'text-[#0a192f]'} group-hover:text-white transition-colors duration-300`} />
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${isNavy ? 'text-white' : 'text-[#0a192f]'} group-hover:text-white transition-colors duration-300`}>
                  {value.title}
                </h3>
                <p className={`text-base leading-relaxed font-medium ${isNavy ? 'text-slate-300' : 'text-[#0a192f]/80'} group-hover:text-slate-200 transition-colors duration-300`}>
                  {value.desc}
                </p>
              </div>
            </div>
          )})}

        </div>

      </div>
    </section>
  );
};
