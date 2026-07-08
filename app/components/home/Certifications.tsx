'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, BookOpen, GraduationCap, CheckCircle2 } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const qualifications = [
  "ICMAI (India)",
  "ACS (India)",
  "CIMA (United Kingdom)",
  "ACCA (United Kingdom)",
  "ICSA / Chartered Governance Institute (United Kingdom)"
];

const certifications = [
  "IBBI Registered Valuer",
  "IBBI Registered Insolvency Professional",
  "Independent Director"
];

export const Certifications = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.cert-card', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section className="py-24 bg-slate-900 text-white" ref={containerRef}>
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto cert-card">
          <h3 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-3">
            Credentials & Achievements
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Recognized Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="cert-card bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-slate-700 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold">Professional Qualifications</h4>
            </div>
            <ul className="space-y-4">
              {qualifications.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="cert-card bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-slate-700 rounded-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold">Certifications</h4>
            </div>
            <ul className="space-y-4">
              {certifications.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="cert-card bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-slate-700 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold">Academic Achievement</h4>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 mt-4 text-center">
              <p className="text-2xl font-bold text-white mb-2">First Rank in Tamil Nadu</p>
              <p className="text-slate-300">Accountancy Senior Grade Examination</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
