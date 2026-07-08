'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const allIndustries = [
  'Manufacturing', 'Mining', 'Healthcare', 'Automotive',
  'Information Technology', 'Infrastructure', 'Engineering',
  'Trading', 'Retail', 'Startups', 'Family Businesses'
];

export const Industries = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.ind-text',
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 1, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 75%' } }
    );
    gsap.fromTo('.ind-image',
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 75%' } }
    );

    // Parallax shapes
    gsap.to('.parallax-shape-9', { yPercent: -100, rotation: 45, ease: 'none', scrollTrigger: { trigger: containerRef.current, start: 'top bottom', end: 'bottom top', scrub: 1 } });
    gsap.to('.parallax-shape-10', { yPercent: 150, xPercent: -30, ease: 'none', scrollTrigger: { trigger: containerRef.current, start: 'top bottom', end: 'bottom top', scrub: 1 } });
  }, { scope: containerRef });

  return (
    <section className="py-24 bg-slate-100 overflow-hidden relative" ref={containerRef}>
      
      {/* Floating Shapes */}
      <div className="parallax-shape-9 absolute top-20 left-10 w-20 h-20 bg-[#0a192f]/5 rounded-xl rotate-12 z-0 pointer-events-none"></div>
      <div className="parallax-shape-10 absolute bottom-32 right-1/4 w-12 h-12 border-4 border-[#d4af37]/20 rounded-full z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Content */}
          <div className="lg:col-span-5">
            <span className="ind-text inline-block px-4 py-1.5 rounded-full bg-[#0a192f]/10 text-[#0a192f] text-xs font-bold tracking-widest uppercase mb-6">
              Industries We Serve
            </span>
            <h2 className="ind-text text-4xl md:text-5xl font-semibold text-[#0a192f] leading-[1.1] mb-6 tracking-tight">
              Empowering growth across diverse sectors.
            </h2>
            <p className="ind-text text-slate-600 text-lg mb-8">
              Providing tailored financial and strategic solutions across diverse business sectors.
            </p>

            <div className="ind-text flex flex-wrap gap-2 mb-10">
              {allIndustries.map((industry, i) => (
                <span key={i} className="px-4 py-2 bg-slate-100 border border-slate-200 text-slate-700 text-sm font-medium rounded-full hover:bg-[#0a192f] hover:text-[#d4af37] transition-colors cursor-default">
                  {industry}
                </span>
              ))}
            </div>

            <button className="ind-text flex items-center gap-2 bg-[#0a192f] text-[#d4af37] px-8 py-4 rounded-full font-medium transition-all hover:bg-slate-800 hover:shadow-xl">
              Book a Consultation <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Image Grid (Masonry-like layout) */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-6 h-[600px]">

            {/* Left tall image */}
            <div className="ind-image relative h-full rounded-[2rem] overflow-hidden group">
              <Image
                src="/viswanathanr/industry1.jpg"
                alt="Manufacturing"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/40 via-transparent to-transparent"></div>
            </div>

            {/* Right stacked images */}
            <div className="flex flex-col gap-4 md:gap-6 h-full">
              <div className="ind-image relative h-1/2 rounded-[2rem] overflow-hidden group">
                <Image
                  src="/viswanathanr/industry2.jpg"
                  alt="Technology"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/40 via-transparent to-transparent"></div>
              </div>
              <div className="ind-image relative h-1/2 rounded-[2rem] overflow-hidden group">
                <Image
                  src="/viswanathanr/industry3.jpg"
                  alt="Healthcare"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/40 via-transparent to-transparent"></div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
