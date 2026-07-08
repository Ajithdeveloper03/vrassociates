'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const StatsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.stat-title',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
    );
    gsap.fromTo('.leader-stat-card',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: '.stats-grid', start: 'top 80%' } }
    );
    
    // Floating shapes parallax
    gsap.to('.parallax-shape-3', { yPercent: -120, rotation: 90, ease: 'none', scrollTrigger: { trigger: containerRef.current, start: 'top bottom', end: 'bottom top', scrub: 1 } });
    gsap.to('.parallax-shape-4', { yPercent: 120, xPercent: -50, ease: 'none', scrollTrigger: { trigger: containerRef.current, start: 'top bottom', end: 'bottom top', scrub: 1 } });
  }, { scope: containerRef });

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" ref={containerRef}>
      
      {/* Background elements */}
      <div className="parallax-shape-3 absolute top-1/4 right-20 w-16 h-16 border-4 border-[#0a192f]/5 rounded-xl z-0"></div>
      <div className="parallax-shape-4 absolute bottom-1/4 left-20 w-20 h-20 rounded-full bg-blue-900/5 z-0"></div>
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="container-custom relative z-10">
        
        <div className="stat-title text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0a192f] leading-tight mb-4">
            A Legacy of Excellence
          </h2>
          <p className="text-slate-600 text-lg font-medium">
            Delivering measurable growth and strategic value to businesses globally for over two decades.
          </p>
        </div>

        <div className="stats-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end min-h-[450px]">
          
          <div className="leader-stat-card h-[350px] p-8 rounded-[2rem] flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <Image src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=800&auto=format&fit=crop" alt="Global" fill className="object-cover absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f]/90 via-[#0a192f]/70 to-[#d4af37]/40 z-0"></div>
            <div className="relative z-10">
              <h3 className="text-white text-2xl font-bold mb-3">Global Experience</h3>
              <p className="text-slate-200 text-sm leading-relaxed">Partnering with businesses across UAE, USA, Kuwait, Egypt & Liberia.</p>
            </div>
            <p className="relative z-10 text-5xl font-extrabold text-white text-right">25 <span className="text-[#d4af37]">+</span></p>
            <p className="relative z-10 text-right text-[#d4af37] text-sm font-bold uppercase tracking-wider mt-1">Years</p>
          </div>

          <div className="leader-stat-card h-[400px] p-8 rounded-[2rem] flex flex-col justify-between shadow-2xl relative overflow-hidden group">
             <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop" alt="Assignments" fill className="object-cover absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-br from-[#112240]/90 to-[#0a192f]/80 z-0"></div>
             <div className="relative z-10">
              <h3 className="text-white text-2xl font-bold mb-3">Assignments Completed</h3>
              <p className="text-slate-200 text-sm leading-relaxed">Delivering customized valuation and restructuring strategies.</p>
            </div>
            <p className="relative z-10 text-6xl font-extrabold text-white text-right">970 <span className="text-[#d4af37]">+</span></p>
            <p className="relative z-10 text-right text-[#d4af37] text-sm font-bold uppercase tracking-wider mt-1">Valuations</p>
          </div>

          <div className="leader-stat-card h-[450px] p-8 rounded-[2rem] flex flex-col justify-between shadow-2xl relative overflow-hidden group">
             <Image src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop" alt="Accreditations" fill className="object-cover absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/90 to-transparent z-0"></div>
             <div className="relative z-10 flex-1 mt-12">
              <h3 className="text-white text-2xl font-bold mb-6">Accreditations</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                  <p className="text-slate-200 text-sm font-medium">IBBI Registered Valuer</p>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                  <p className="text-slate-200 text-sm font-medium">IBBI Insolvency Professional</p>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                  <p className="text-slate-200 text-sm font-medium">Independent Director</p>
                </div>
              </div>
            </div>
             <p className="relative z-10 text-5xl font-extrabold text-white text-right mt-8">Top <span className="text-[#d4af37]">Tier</span></p>
          </div>

        </div>

      </div>
    </section>
  );
};
