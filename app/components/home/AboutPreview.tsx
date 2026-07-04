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
        <div className="relative flex flex-col justify-center px-10 lg:px-16 py-24 reveal-left">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=100&w=1600"
              alt="Corporate Professionals"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000 brightness-110 contrast-125 saturate-150"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-900/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent" />
          </div>

          <div className="absolute inset-0 opacity-[0.03] z-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative z-10">
            <div className="section-label-dark reveal">About Us</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.0] mt-4 mb-8 reveal">
              Built on<br />
              <span className="text-primary-300">Decades</span><br />
              of Trust
            </h2>

            <blockquote className="border-l-2 border-primary-500 pl-6 mb-10 reveal">
              <p className="text-white/60 text-base leading-relaxed italic max-w-sm">
                &ldquo;Every business deserves access to world-class financial advisory — that&apos;s the principle we were built on.&rdquo;
              </p>
            </blockquote>

            <div className="flex gap-8 reveal">
              <div>
                <div className="text-4xl font-bold text-white">25+</div>
                <div className="text-white/50 text-sm mt-1">Years Global Experience</div>
              </div>
              <div className="w-px bg-white/20" />
              <div>
                <div className="text-4xl font-bold text-white">970+</div>
                <div className="text-white/50 text-sm mt-1">Successful Valuations</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center px-10 lg:px-16 py-24 bg-secondary-50">
          <div className="max-w-lg">
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
