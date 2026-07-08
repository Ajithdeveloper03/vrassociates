'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const qualifications = [
  'ICMAI (India)', 
  'ACS (India)', 
  'CIMA (United Kingdom)', 
  'ACCA (United Kingdom)', 
  'ICSA / Chartered Governance Institute (UK)'
];

const certifications = [
  'IBBI Registered Valuer',
  'IBBI Registered Insolvency Professional',
  'Independent Director'
];

export const FounderPreview = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.founder-col-left',
      { opacity: 0, x: -60, scale: 0.95 },
      { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'power4.out', scrollTrigger: { trigger: containerRef.current, start: 'top 75%' } }
    );
    gsap.fromTo('.founder-col-mid',
      { opacity: 0, y: 80, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1.5, delay: 0.2, ease: 'elastic.out(1, 0.8)', scrollTrigger: { trigger: containerRef.current, start: 'top 75%' } }
    );
    gsap.fromTo('.founder-col-right',
      { opacity: 0, x: 60, scale: 0.95 },
      { opacity: 1, x: 0, scale: 1, duration: 1.2, delay: 0.3, ease: 'power4.out', scrollTrigger: { trigger: containerRef.current, start: 'top 75%' } }
    );

    // Parallax shapes
    gsap.to('.parallax-shape-5', { yPercent: -150, rotation: 180, ease: 'none', scrollTrigger: { trigger: containerRef.current, start: 'top bottom', end: 'bottom top', scrub: 1 } });
    gsap.to('.parallax-shape-6', { yPercent: 100, xPercent: 50, ease: 'none', scrollTrigger: { trigger: containerRef.current, start: 'top bottom', end: 'bottom top', scrub: 1 } });
  }, { scope: containerRef });

  return (
    <section className="py-24 min-h-screen bg-gradient-to-b from-white to-slate-50 flex items-center overflow-hidden relative" ref={containerRef}>
      
      {/* Very subtle light background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
      
      {/* Floating Shapes */}
      <div className="parallax-shape-5 absolute top-20 right-20 w-32 h-32 border border-[#d4af37]/20 rounded-full z-0 pointer-events-none"></div>
      <div className="parallax-shape-6 absolute bottom-32 left-10 w-24 h-24 bg-slate-100 rotate-45 rounded-2xl z-0 pointer-events-none"></div>

      {/* Subtle glow for the center image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container-custom relative z-10 w-full h-full flex items-center">
        
        {/* Changed items-center to items-stretch to make columns equal height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch w-full">
          
          {/* Left Column: Details */}
          <div className="founder-col-left lg:col-span-4 text-[#0a192f] flex flex-col justify-center">
            <h3 className="text-3xl lg:text-4xl font-extrabold mb-2 text-[#0a192f] leading-tight">Mr. Viswanathan Rajagopalan</h3>
            <p className="text-[#d4af37] font-bold tracking-widest uppercase text-sm mb-8">Founder & Principal Consultant</p>
            
            <div className="space-y-6 text-slate-600 text-[15px] leading-relaxed font-medium text-justify">
              <p>
                Mr. Viswanathan Rajagopalan is a highly accomplished finance professional with over 25 years of international experience in corporate finance, cost management, business valuation, restructuring, governance, and strategic advisory.
              </p>
              <p>
                He has successfully worked across India, the Middle East, Africa, and North America, advising multinational corporations, financial institutions, manufacturing companies, healthcare organizations, mining businesses, and technology companies.
              </p>
              <p>
                His multidisciplinary qualifications and practical industry expertise enable him to provide holistic business solutions that combine finance, technology, governance, and operational excellence.
              </p>
            </div>
          </div>

          {/* Middle Column: Transparent Image (Equal height) */}
          <div className="founder-col-mid lg:col-span-4 relative w-full h-[500px] lg:h-auto overflow-hidden">
            <Image 
              src="/viswanathanr/founder.png"
              alt="Viswanathan R"
              fill
              className="object-cover object-bottom drop-shadow-2xl z-10 [mask-image:linear-gradient(to_bottom,white_85%,transparent_100%)]"
            />
          </div>

          {/* Right Column: Qualifications, Certifications & Awards */}
          <div className="founder-col-right lg:col-span-4 flex flex-col gap-3 justify-center">
            
            {/* Qualifications */}
            <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 shadow-xl">
              <h4 className="text-xl font-extrabold text-[#0a192f] mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
                Professional Qualifications
              </h4>
              <ul className="space-y-3">
                {qualifications.map((qual, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-sm">{qual}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div className="bg-[#0a192f] border border-[#0a192f] rounded-[2rem] p-8 shadow-xl">
              <h4 className="text-xl font-extrabold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
                Certifications
              </h4>
              <ul className="space-y-3">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-200">
                    <ShieldCheck className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-sm">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Academic Achievement */}
            <div className="bg-gradient-to-br from-[#d4af37] to-[#b38f2a] rounded-[2rem] p-8 shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex items-start gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-[#0a192f]" />
                </div>
                <div>
                  <p className="text-[#0a192f] text-xs font-bold uppercase tracking-widest mb-1">Academic Achievement</p>
                  <h4 className="text-white text-xl font-extrabold leading-tight">First Rank in Tamil Nadu</h4>
                  <p className="text-white/90 text-sm mt-2 font-semibold">Accountancy Senior Grade Examination</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
