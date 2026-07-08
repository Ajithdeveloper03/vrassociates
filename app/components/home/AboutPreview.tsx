'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const AboutPreview = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.about-text',
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, duration: 1, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 75%' } }
    );
    gsap.fromTo('.about-img-1',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, delay: 0.2, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 75%' } }
    );
    gsap.fromTo('.about-img-2',
      { opacity: 0, x: 50, y: -30 },
      { opacity: 1, x: 0, y: 0, duration: 1.2, delay: 0.3, ease: 'power4.out', scrollTrigger: { trigger: containerRef.current, start: 'top 75%' } }
    );
    gsap.fromTo('.about-img-3',
      { opacity: 0, x: -50, y: 50 },
      { opacity: 1, x: 0, y: 0, duration: 1.2, delay: 0.4, ease: 'power4.out', scrollTrigger: { trigger: containerRef.current, start: 'top 75%' } }
    );

    // Floating shapes parallax
    gsap.to('.parallax-shape-1', { yPercent: -150, rotation: 45, ease: 'none', scrollTrigger: { trigger: containerRef.current, start: 'top bottom', end: 'bottom top', scrub: 1 } });
    gsap.to('.parallax-shape-2', { yPercent: 100, rotation: -45, ease: 'none', scrollTrigger: { trigger: containerRef.current, start: 'top bottom', end: 'bottom top', scrub: 1 } });
  }, { scope: containerRef });

  return (
    <section className="bg-white overflow-hidden relative" ref={containerRef}>
      
      {/* Floating Shapes */}
      <div className="parallax-shape-1 absolute top-20 left-10 w-24 h-24 border-4 border-[#d4af37]/10 rounded-full z-0"></div>
      <div className="parallax-shape-2 absolute bottom-20 left-1/3 w-16 h-16 bg-[#0a192f]/5 rounded-lg rotate-12 z-0"></div>
      <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-[#d4af37]/30 rounded-full blur-[1px]"></div>
      <div className="absolute bottom-1/3 left-10 w-4 h-4 bg-[#0a192f]/20 rounded-full blur-[1px]"></div>

      <div className="flex flex-col lg:flex-row min-h-[700px] relative z-10">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex items-center p-12 lg:p-24 xl:p-32">
          <div className="max-w-xl">
            <h3 className="about-text text-sm font-bold tracking-widest text-[#d4af37] uppercase mb-4">
              About Us
            </h3>
            <h2 className="about-text text-4xl md:text-5xl font-extrabold text-[#0a192f] leading-tight mb-8">
              Building Stronger Businesses Through Finance, Governance & Innovation
            </h2>
            
            <p className="about-text text-slate-600 text-lg leading-relaxed mb-6 font-medium">
              Viswanathan R Associates is a professional consulting firm providing end-to-end financial advisory, business consulting, valuation, insolvency support, governance, and strategic finance services.
            </p>
            
            <p className="about-text text-slate-600 text-lg leading-relaxed mb-10">
              Our firm believes that sustainable business success is achieved through strong financial controls, effective governance, technology adoption, and continuous improvement. We partner with startups, MSMEs, and multinational corporations to deliver practical solutions tailored to your business objectives.
            </p>

            <button className="about-text flex items-center gap-2 text-[#0a192f] font-bold hover:text-[#d4af37] transition-colors border-b-2 border-[#0a192f] hover:border-[#d4af37] pb-1">
              Read Our Full Story <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Image (Enhanced Dual Layout) */}
        <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-full flex items-center justify-center p-12">
          
          {/* Decorative Border Frame */}
          <div className="about-img-1 absolute right-20 top-1/4 w-72 h-80 border-[3px] border-[#0a192f] rounded-3xl z-0"></div>

          {/* Top/Back Image */}
          <div className="about-img-2 relative w-64 h-80 lg:w-72 lg:h-96 rounded-3xl overflow-hidden shadow-2xl z-10 -mr-32 -mt-20">
            <Image 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
              alt="Business Strategy"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#0a192f]/20"></div>
          </div>

          {/* Bottom/Front Image */}
          <div className="about-img-3 relative w-64 h-80 lg:w-72 lg:h-96 rounded-3xl overflow-hidden shadow-2xl z-20 mt-32 border-8 border-white">
            <Image 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
              alt="Team Collaboration"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
