'use client';

import { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { companyInfo } from '@/app/lib/siteData';

export function AboutPreview() {
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
    <section className="relative bg-white overflow-hidden">
      <div ref={ref} className="grid lg:grid-cols-2 min-h-[90vh]">
        <div className="flex flex-col justify-center px-6 lg:px-10 py-10 lg:py-16 reveal-left h-full w-full">
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-center px-10 lg:px-16 py-16 min-h-[500px]">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
                alt="Our Story"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000 brightness-110 contrast-125 saturate-150"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-900/70 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-transparent to-transparent" />
            </div>

            <div className="absolute inset-0 opacity-[0.05] z-0"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}
            />

            <div className="relative z-10">
              <div className="section-label-dark reveal">About Us</div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mt-4 mb-8 reveal">
                Built on<br />
                <span className="text-primary-300">Decades</span><br />
                of Trust
              </h2>

              <blockquote className="border-l-2 border-primary-500 pl-6 mb-10 reveal">
                <p className="text-white/70 text-sm md:text-base leading-relaxed italic max-w-sm">
                  &ldquo;Every business deserves access to world-class financial advisory — that&apos;s the principle we were built on.&rdquo;
                </p>
              </blockquote>

              <div className="flex flex-wrap gap-8 reveal">
                <div>
                  <div className="text-3xl font-bold text-white">25+</div>
                  <div className="text-white/50 text-xs mt-1 uppercase tracking-wider font-semibold">Years Experience</div>
                </div>
                <div className="hidden sm:block w-px bg-white/20" />
                <div>
                  <div className="text-3xl font-bold text-white">970+</div>
                  <div className="text-white/50 text-xs mt-1 uppercase tracking-wider font-semibold">Valuations</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center px-10 lg:px-16 py-24 h-full">
          <div className="w-full xl:pr-10">
            <p className="text-sm font-semibold tracking-widest text-primary-600 uppercase mb-3 reveal">
              Our Story
            </p>
            <p className="text-secondary-700 text-lg leading-relaxed mb-8 reveal">
              {companyInfo.story}
            </p>

            <div className="space-y-4 mb-10">
              <div className="p-5 rounded-xl border-l-4 border-primary-600 bg-white shadow-soft reveal">
                <div className="text-xs font-bold tracking-widest text-primary-600 uppercase mb-2">Vision</div>
                <p className="text-secondary-700 text-sm leading-relaxed">
                  To be the most trusted partner for organizations seeking exceptional financial advisory and business transformation.
                </p>
              </div>
              <div className="p-5 rounded-xl border-l-4 border-secondary-400 bg-white shadow-soft reveal">
                <div className="text-xs font-bold tracking-widest text-secondary-500 uppercase mb-2">Mission</div>
                <p className="text-secondary-700 text-sm leading-relaxed">
                  We empower businesses with strategic financial insights that drive growth, optimize operations, and create lasting value.
                </p>
              </div>
            </div>

            <span className="btn-primary group cursor-pointer reveal">
              Learn More About Us
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
