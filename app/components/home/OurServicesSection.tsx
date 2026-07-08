'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: 'Business Valuation',
    desc: 'Comprehensive valuation services for regulatory compliance, startups, and complex M&A transactions to unlock true business worth.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    points: ['Startup & Shares Valuation', 'M&A Advisory', 'Regulatory Compliance']
  },
  {
    title: 'Insolvency & Bankruptcy',
    desc: 'Expert guidance through Corporate Insolvency Resolution Processes (CIRP) and restructuring for distressed assets.',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop',
    points: ['Complete CIRP Support', 'Corporate Restructuring', 'Value Maximization']
  },
  {
    title: 'Cost Audit & Optimization',
    desc: 'Helping businesses improve profitability through strict cost controls and strategic margins.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
    points: ['Cost Audits & Reduction', 'Product Costing', 'Budgetary Controls']
  },
  {
    title: 'Transfer Pricing',
    desc: 'Comprehensive transfer pricing documentation, benchmarking, and robust compliance strategies.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop',
    points: ['Benchmarking', 'Risk Assessment', 'TP Documentation']
  },
  {
    title: 'Internal Audit & Risk',
    desc: 'Strengthening corporate governance and establishing powerful internal financial controls.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
    points: ['Internal Audits', 'SOP Development', 'Fraud Prevention']
  },
  {
    title: 'AI Driven Solutions',
    desc: 'Modernizing finance operations powered by the latest advancements in Artificial Intelligence.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
    points: ['AI Inventory Monitoring', 'Predictive Analytics', 'Intelligent Reporting']
  },
  {
    title: 'ERP & Process Consulting',
    desc: 'Strategic implementation of ERP systems and business process re-engineering to drive operational efficiency.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    points: ['ERP Implementation', 'Process Re-engineering', 'Internal Controls Setup']
  },
  {
    title: 'Fractional CFO Services',
    desc: 'Strategic CFO leadership and oversight specifically designed for growing businesses.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop',
    points: ['Financial Planning', 'Fund Raising Support', 'Cash Flow Management']
  },
  {
    title: 'Corporate Governance',
    desc: 'Ensuring strict compliance and fostering robust board-level strategic frameworks.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    points: ['Board Advisory', 'Secretarial Compliance', 'M&A Support']
  }
];

export const OurServicesSection = () => {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => setActive((prev) => (prev + 1) % services.length);
  const prevSlide = () => setActive((prev) => (prev - 1 + services.length) % services.length);

  useGSAP(() => {
    gsap.fromTo('.services-title',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
    );
    gsap.fromTo('.services-slider',
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, delay: 0.2, ease: 'back.out(1.2)', scrollTrigger: { trigger: containerRef.current, start: 'top 75%' } }
    );

    // Parallax shapes
    gsap.to('.parallax-shape-7', { yPercent: -80, rotation: -90, ease: 'none', scrollTrigger: { trigger: containerRef.current, start: 'top bottom', end: 'bottom top', scrub: 1 } });
    gsap.to('.parallax-shape-8', { yPercent: 120, xPercent: 50, ease: 'none', scrollTrigger: { trigger: containerRef.current, start: 'top bottom', end: 'bottom top', scrub: 1 } });
  }, { scope: containerRef });

  return (
    <section className="py-24 bg-[#0a192f] overflow-hidden relative" ref={containerRef}>

      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
          alt="Corporate Building"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a192f]/70 mix-blend-multiply"></div>
      </div>

      {/* Floating Shapes */}
      <div className="parallax-shape-7 absolute top-32 left-20 w-16 h-16 border-4 border-[#d4af37]/30 rounded-full z-0 pointer-events-none"></div>
      <div className="parallax-shape-8 absolute bottom-40 right-20 w-24 h-24 bg-white/5 rounded-2xl rotate-12 z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-16 max-w-6xl relative z-10">

        <div className="services-title mb-16">
          <p className="text-sm font-bold tracking-widest text-[#d4af37] uppercase mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">*</span>
            Our Services
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Strategic Financial Advisory <br /> for Businesses
          </h2>
        </div>

        <div className="services-slider relative flex items-center justify-center min-h-[500px]">

          {/* Navigation Arrows */}
          <button onClick={prevSlide} className="absolute left-0 lg:-left-12 z-20 w-12 h-12 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center hover:scale-110 transition-transform text-[#0a192f]">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={nextSlide} className="absolute right-0 lg:-right-12 z-20 w-12 h-12 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center hover:scale-110 transition-transform text-[#0a192f]">
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="w-full max-w-5xl relative flex flex-col md:flex-row items-center">

            {/* Circular Image overlapping card */}
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10 md:absolute md:left-0 flex-shrink-0 mb-6 md:mb-0">
              <Image
                src={services[active].image}
                alt={services[active].title}
                fill
                className="object-cover"
              />
            </div>

            {/* White Content Card */}
            <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] w-full md:w-[80%] md:ml-auto p-8 md:p-16 md:pl-48 min-h-[400px] flex flex-col justify-center relative z-0 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-[#a3e635] text-[#0a192f] flex items-center justify-center font-bold text-lg mb-6">
                {active + 1}
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">
                {services[active].title}
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {services[active].desc}
              </p>

              <ul className="space-y-4">
                {services[active].points.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-800 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#0a192f] flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
