'use client';

import { useRef, useEffect } from 'react';
import { CheckCircle2, Award, ShieldCheck, GraduationCap } from 'lucide-react';

const professionalQualifications = [
  'ICMAI (India)',
  'ACS (India)',
  'CIMA (United Kingdom)',
  'ACCA (United Kingdom)',
  'ICSA / Chartered Governance Institute (United Kingdom)',
];

const certifications = [
  'IBBI Registered Valuer',
  'Independent Director',
  'IBBI Registered Insolvency Professional',
];

export function FounderQualifications() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
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
    <section className="relative bg-white pt-6 pb-16 md:pb-24 overflow-hidden">
      <div ref={ref} className="container-custom relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-0 mb-12 items-stretch">
          
          {/* Left Column: Professional Qualifications */}
          <div className="reveal-up lg:col-span-6 xl:col-span-5 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-accent-500" />
              <h3 className="text-2xl font-bold text-secondary-900">
                Professional Qualifications
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
              {professionalQualifications.map((qual, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 p-4 rounded-xl bg-primary-50/50 hover:bg-primary-50 transition-colors border border-primary-100 ${
                    i === 4 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0" />
                  <span className="text-secondary-800 font-medium leading-snug">{qual}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="reveal-up lg:col-span-5 lg:col-start-8 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-8 h-8 text-accent-500" />
              <h3 className="text-2xl font-bold text-secondary-900">
                Certifications
              </h3>
            </div>
            <div className="flex flex-col gap-3 flex-1">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary-50/50 hover:bg-primary-50 transition-colors border border-primary-100"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0" />
                  <span className="text-secondary-800 font-medium leading-snug">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlighted Academic Achievement Card (Two-Column Layout) */}
        <div className="reveal-up relative overflow-hidden rounded-[20px] bg-gradient-to-r from-[#060E2E] to-[#1B2A5B] border border-[#B28F52] text-white shadow-xl shadow-[#060E2E]/30 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group mt-4 flex flex-col md:flex-row">
          
          {/* Left Side: Image (50% width) */}
          <div className="relative w-full md:w-1/2 min-h-[250px] shrink-0 border-r border-[#B28F52]/30">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000" 
              alt="Academic Excellence" 
              className="absolute inset-0 w-full h-full object-cover object-center" 
            />
            {/* Extremely subtle overlay to maintain image clarity while fitting the premium theme */}
            <div className="absolute inset-0 bg-[#060E2E]/20 mix-blend-overlay"></div>
          </div>

          {/* Right Side: Content (50% width) */}
          <div className="relative w-full md:w-1/2 p-6 md:p-10 flex items-center justify-between overflow-hidden">
            {/* Faint Background Graduation Cap Watermark */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none transform translate-x-6 group-hover:scale-110 group-hover:opacity-10 transition-all duration-500">
              <GraduationCap className="w-40 h-40 md:w-64 md:h-64" strokeWidth={1} />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 w-full">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-[2px] bg-[#B28F52]" />
                  <span className="text-[#B28F52] font-bold tracking-[0.15em] uppercase text-xs md:text-sm">
                    Academic Achievement
                  </span>
                </div>
                <h3 className="text-xl md:text-3xl font-bold leading-tight mb-2">
                  First Rank in Tamil Nadu
                </h3>
                <span className="text-gray-300 text-sm md:text-lg font-normal">
                  Accountancy Senior Grade Examination
                </span>
              </div>
              
              {/* Gold Badge */}
              <div className="relative z-10 shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#B28F52] flex items-center justify-center shadow-lg ml-4 mr-2">
                <Award className="w-8 h-8 md:w-12 md:h-12 text-white" strokeWidth={2} />
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}

export default FounderQualifications;
