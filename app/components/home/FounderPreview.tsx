'use client';

import { useRef, useEffect } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { founder } from '@/app/lib/siteData';

export function FounderPreview() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-scale').forEach((el, i) => {
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
    <section className="relative bg-white overflow-hidden section-padding">
      <div ref={ref} className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Content */}
          <div className="lg:col-span-7 lg:pr-8">
            <div className="section-label reveal">Leadership</div>
            <h2 className="section-title mt-4 mb-6 reveal">
              Meet Our <span className="gradient-text">Founder</span>
            </h2>
            <p className="text-secondary-600 text-lg leading-relaxed mb-8 reveal">
              {founder.bio}
            </p>

            <div className="space-y-1 mb-8">
              <p className="text-xs font-bold tracking-widest text-secondary-500 uppercase reveal mb-2">
                Qualifications & Credentials
              </p>
              {founder.qualifications.map((qual, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-2 rounded-xl hover:bg-primary-50 transition-colors duration-200 reveal"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                  <span className="text-secondary-700 text-sm">{qual}</span>
                </div>
              ))}
            </div>

            <span className="btn-secondary group cursor-pointer reveal">
              View Full Profile
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>

          {/* Right Side: Image Card */}
          <div className="lg:col-span-5 reveal-scale h-full">
            <div className="relative h-full min-h-[450px]">
              {/* Offset Border Background */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary-300 rounded-[2rem]" />

              {/* Main Card */}
              <div className="relative h-full rounded-[2rem] overflow-hidden bg-primary-900 flex flex-col items-center shadow-2xl">
                
                {/* Full Container Image */}
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800" 
                  alt={founder.name} 
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />

                {/* Bottom Gradient for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/95 via-primary-900/40 to-transparent z-0" />

                {/* Animated Scrolling Text (Overlay) */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center opacity-30 select-none mix-blend-overlay z-0">
                  <div className="whitespace-nowrap animate-marquee flex text-white/50">
                    <span className="text-[8rem] font-bold uppercase mx-8">VR Associates</span>
                    <span className="text-[8rem] font-bold uppercase mx-8">VR Associates</span>
                    <span className="text-[8rem] font-bold uppercase mx-8">VR Associates</span>
                    <span className="text-[8rem] font-bold uppercase mx-8">VR Associates</span>
                  </div>
                </div>

                {/* Bottom Name & Title */}
                <div className="relative z-10 w-full text-center pb-10 px-6 mt-auto">
                  <h3 className="text-3xl font-bold text-white tracking-wide mb-1.5 drop-shadow-lg">{founder.name}</h3>
                  <p className="text-primary-300 text-sm font-medium tracking-wider drop-shadow-md">{founder.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FounderPreview;
