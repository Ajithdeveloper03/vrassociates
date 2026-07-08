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
    gsap.fromTo('.about-image',
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 1.5, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 75%' } }
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

            <p className="about-text text-slate-600 text-lg leading-relaxed mb-6 font-medium text-justify">
              Viswanathan R Associates is a professional consulting firm providing end-to-end financial advisory, business consulting, valuation, insolvency support, governance, and strategic finance services.
            </p>

            <p className="about-text text-slate-600 text-lg leading-relaxed mb-10 text-justify">
              Our firm believes that sustainable business success is achieved through strong financial controls, effective governance, technology adoption, and continuous improvement. We partner with startups, MSMEs, and multinational corporations to deliver practical solutions tailored to your business objectives.
            </p>

            <button className="about-text flex items-center gap-2 text-[#0a192f] font-bold hover:text-[#d4af37] transition-colors border-b-2 border-[#0a192f] hover:border-[#d4af37] pb-1">
              Read Our Full Story <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-full">
          <div className="absolute inset-0 "></div>
          <Image
            src="/viswanathanr/about.jpg"
            alt="Business Strategy Meeting"
            fill
            className="about-image object-cover rounded-l-[4rem] shadow-2xl z-10"
          />
        </div>

      </div>
    </section>
  );
};
