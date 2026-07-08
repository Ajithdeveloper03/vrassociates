'use client';

import { useRef, useEffect } from 'react';
import { ArrowRight, Plus } from 'lucide-react';

const servicesData = [
  {
    title: 'Business Valuation',
    description: 'Accurate valuation services for businesses to ensure informed decision-making.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Transfer Pricing',
    description: 'Navigate complex tax regulations and optimize your global operations.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Fractional CFO',
    description: 'Strategic financial leadership on a part-time basis to guide your success.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Cost Audit',
    description: 'In-depth analysis to identify inefficiencies and implement savings.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  }
];

export function OurServicesSection() {
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
    <section className="relative pt-8 md:pt-12 pb-24 bg-[#fcfcfc] overflow-hidden">
      <div ref={ref} className="container-custom relative z-10 max-w-[1400px]">
        
        {/* Header Section */}
        <div className="mb-14 text-center max-w-3xl mx-auto flex flex-col items-center justify-center">
          <div className="inline-block px-3 py-1 bg-white border border-secondary-200 shadow-sm rounded mb-4">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary-600">What We Do</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-secondary-900 leading-[1.2] tracking-tight mb-5">
            Our Services
          </h2>
          <p className="text-secondary-600 text-[15px] md:text-base leading-relaxed">
            Explore our comprehensive suite of professional services designed to optimize your operations, ensure compliance, and drive sustainable financial growth for your business.
          </p>
        </div>

        {/* Cards Grid - 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-secondary-100 hover:shadow-[0_15px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 reveal-up flex flex-col h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-44 w-full rounded-t-2xl overflow-hidden group/img">
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/90 via-secondary-900/10 to-transparent group-hover/img:from-secondary-900/80 transition-colors duration-500 z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Title inside Image */}
                <div className="absolute bottom-5 left-5 right-12 z-20">
                  <h3 className="text-[17px] font-bold text-white drop-shadow-md leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Floating Plus Button */}
                <div className="absolute -bottom-5 right-5 z-30">
                  <div className="w-10 h-10 bg-primary-600 rounded-full shadow-lg flex items-center justify-center transform group-hover:rotate-90 group-hover:bg-primary-700 transition-all duration-300 cursor-pointer text-white">
                    <Plus strokeWidth={2.5} className="w-5 h-5" />
                  </div>
                </div>
              </div>
              
              {/* Content Container */}
              <div className="p-6 pt-8 flex-1 flex flex-col bg-white rounded-b-2xl">
                <p className="text-secondary-600 text-[13px] leading-relaxed mb-2 flex-1">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA Button */}
        <div className="mt-10 flex justify-end reveal-up">
          <button className="btn-primary py-2.5 px-5 text-sm group flex items-center gap-2">
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
      </div>
    </section>
  );
}

export default OurServicesSection;
