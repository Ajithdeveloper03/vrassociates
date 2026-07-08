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
    <section className="relative bg-white pt-6 pb-8 md:pb-12 overflow-hidden">
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

        {/* Highlighted Academic Achievement Card (Three-Column Symmetrical Layout) */}
        <div className="reveal-up relative overflow-hidden rounded-xl bg-[#1a2646] border-2 border-[#b5924a] text-white shadow-xl hover:shadow-2xl transition-all duration-300 group mt-4 flex flex-col md:flex-row">
          
          {/* Left Side: Image */}
          <div className="relative w-full md:w-[30%] min-h-[140px] md:min-h-[160px] shrink-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000" 
              alt="Academic Excellence Left" 
              className="absolute inset-0 w-full h-full object-cover object-center scale-105" 
            />
            {/* Mingle effect overlay */}
            <div className="absolute inset-0 bg-[#1a2646]/40 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-[#1a2646]/20 mix-blend-multiply"></div>
            {/* Overlay fading to the right (into the dark blue center) */}
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-[#1a2646]/40 to-[#1a2646]"></div>
          </div>

          {/* Center: Content */}
          <div className="relative flex-1 p-4 md:p-6 lg:p-8 flex items-center justify-center overflow-hidden z-10">
            {/* Background Graduation Cap Watermark */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.10] pointer-events-none transform transition-all duration-700 ease-in-out group-hover:scale-105">
              <GraduationCap className="w-40 h-40 md:w-[250px] md:h-[250px] text-white" strokeWidth={1} />
            </div>
            
            <div className="relative z-10 flex flex-col justify-center items-center text-center w-full">
              <div className="flex items-center gap-2 mb-1 md:mb-2">
                <div className="w-6 h-[1.5px] bg-[#b5924a]" />
                <span className="text-[#b5924a] font-bold tracking-[0.1em] uppercase text-[9px] md:text-[11px]">
                  Academic Achievement
                </span>
                <div className="w-6 h-[1.5px] bg-[#b5924a]" />
              </div>
              <h3 className="text-xl md:text-3xl font-extrabold leading-tight tracking-tight mb-1 md:mb-2 text-white">
                First Rank in Tamil Nadu
              </h3>
              <p className="text-gray-200 text-xs md:text-base font-medium tracking-wide">
                Accountancy Senior Grade Examination
              </p>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="relative w-full md:w-[30%] min-h-[140px] md:min-h-[160px] shrink-0 flex items-center justify-center overflow-hidden">
            {/* Gold Medal image on the right */}
            <img 
              src="/viswanathanr/Achievement.jpg/" 
              alt="Gold Medal Academic Excellence" 
              className="absolute inset-0 w-full h-full object-cover object-center scale-105" 
            />
            {/* Mingle effect overlay */}
            <div className="absolute inset-0 bg-[#1a2646]/50 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-[#1a2646]/20 mix-blend-multiply"></div>
            {/* Overlay fading to the left (into the dark blue center) */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent via-[#1a2646]/40 to-[#1a2646]"></div>
          </div>
          
        </div>

      </div>
    </section>
  );
}

export default FounderQualifications;
