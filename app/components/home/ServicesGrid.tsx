'use client';

import { useRef, useEffect } from 'react';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { services } from '@/app/lib/siteData';

const displayedServices = services.slice(0, 5);

interface ServiceCardProps {
  title: string;
  shortDescription: string;
  icon: LucideIcon;
  index: number;
}

const ServiceCard = ({ title, shortDescription, icon: Icon, index }: ServiceCardProps) => (
  <div className="group flex flex-col items-start cursor-pointer reveal" style={{ animationDelay: `${index * 100}ms` }}>
    {/* Icon with dual-tone accent effect */}
    <div className="relative mb-6">
      <div className="absolute top-1 -left-2 w-8 h-8 rounded-full bg-amber-500/20 z-0 transition-transform group-hover:scale-125 duration-300" />
      <Icon strokeWidth={1.5} className="w-10 h-10 text-secondary-900 relative z-10" />
      {/* Small orange accent dot commonly seen in these designs */}
      <div className="absolute bottom-1 right-0 w-2 h-2 rounded-full bg-amber-500 z-10" />
    </div>

    <h3 className="text-[17px] font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
      {title}
    </h3>
    
    <p className="text-[13px] text-secondary-500 leading-relaxed mb-5 line-clamp-3">
      {shortDescription}
    </p>

    {/* Read More Link - visible on hover */}
    <div className="flex items-center gap-2 mt-auto transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
      <span className="text-xs font-bold text-secondary-900">Read More</span>
      <div className="w-6 h-6 rounded-full bg-white shadow-sm border border-secondary-100 flex items-center justify-center group-hover:border-primary-200 transition-colors">
        <ArrowRight className="w-3 h-3 text-secondary-900" />
      </div>
    </div>
  </div>
);

export function ServicesGrid() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left').forEach((el, i) => {
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
    <section className="relative pt-20 pb-24 bg-[#f8f9fb] overflow-hidden">
      {/* Background visual elements to match reference */}
      <div className="absolute top-0 right-0 w-[40%] h-full opacity-30 pointer-events-none z-0 mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0l100 100M100 0L0 100' stroke='%23e2e8f0' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}
      />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full blur-3xl opacity-50 z-0 pointer-events-none" />

      <div ref={ref} className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-8 items-start">
        
        {/* Left Image Section */}
        <div className="w-full lg:w-[32%] relative reveal-left order-2 lg:order-1 pt-10 lg:pt-0">
          <div className="relative w-full h-[350px] md:h-[500px] lg:h-[700px] rounded-tr-[50%] rounded-br-[50%] overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=1000"
              alt="Accountant Consultant"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Content Section */}
        <div className="w-full lg:w-[68%] flex flex-col order-1 lg:order-2 pt-4 lg:pt-0">
          
          <div className="mb-14">
            <div className="inline-block px-3 py-1 bg-white shadow-sm rounded mb-5 reveal">
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-secondary-500">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 leading-[1.15] tracking-tight max-w-2xl reveal">
              Why choose us consultant?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {displayedServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                shortDescription={service.shortDescription}
                icon={service.icon}
                index={index}
              />
            ))}

            {/* Light CTA Card matching theme */}
            <div className="bg-white border border-secondary-200 rounded p-8 flex flex-col justify-center items-start shadow-sm hover:shadow-md transition-shadow reveal relative overflow-hidden group min-h-[220px]">
              {/* Subtle background grid pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10"
                style={{
                  backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
              
              <h3 className="relative z-10 text-[22px] font-bold text-secondary-900 mb-8 leading-snug tracking-tight">
                Explore our all<br />expertises we offers
              </h3>
              
              <button className="relative z-10 inline-flex items-center gap-3 px-4 py-2 bg-secondary-50 rounded border border-secondary-200 hover:bg-secondary-100 transition-colors group/btn">
                <span className="text-[11px] font-bold text-secondary-900">View All Services</span>
                <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
