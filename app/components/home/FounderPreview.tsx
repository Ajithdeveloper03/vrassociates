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
      <div className="absolute top-0 right-0 w-[55%] h-full bg-secondary-50 pointer-events-none hidden lg:block" />

      <div ref={ref} className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 reveal-scale">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary-200 rounded-2xl" />

              <div className="relative bg-gradient-to-br from-primary-900 to-primary-950 rounded-2xl p-10 overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />

                <div className="relative z-10 text-center mb-8">
                  <div className="w-28 h-28 mx-auto rounded-full bg-white/10 border-4 border-white/20 flex items-center justify-center mb-4">
                    <span className="text-5xl font-serif font-bold text-white">
                      {founder.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{founder.name}</h3>
                  <p className="text-primary-300 text-sm mt-1">{founder.title}</p>
                </div>

                <div className="relative z-10 grid grid-cols-2 gap-3">
                  {[
                    { v: '25+', l: 'Years' },
                    { v: '970+', l: 'Valuations' },
                    { v: 'IBBI', l: 'Registered' },
                    { v: 'Global', l: 'Experience' },
                  ].map((s, i) => (
                    <div key={i} className="bg-white/10 rounded-xl px-4 py-3 text-center">
                      <div className="text-xl font-bold text-white">{s.v}</div>
                      <div className="text-white/50 text-xs mt-0.5">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <div className="section-label reveal">Leadership</div>
            <h2 className="section-title mt-4 mb-6 reveal">
              Meet Our <span className="gradient-text">Founder</span>
            </h2>
            <p className="text-secondary-600 text-lg leading-relaxed mb-8 reveal">
              {founder.bio}
            </p>

            <div className="space-y-3 mb-8">
              <p className="text-xs font-bold tracking-widest text-secondary-500 uppercase reveal">
                Qualifications & Credentials
              </p>
              {founder.qualifications.map((qual, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3.5 rounded-xl hover:bg-primary-50 transition-colors duration-200 reveal"
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
        </div>
      </div>
    </section>
  );
}

export default FounderPreview;
