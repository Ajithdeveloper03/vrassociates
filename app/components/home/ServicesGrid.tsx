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
  <div className={`group flex flex-col items-start p-2 reveal`} style={{ animationDelay: `${index * 100}ms` }}>
    <div className="relative mb-3">
      <div className="absolute inset-0 bg-primary-100 rounded-full scale-110 -translate-x-1 translate-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative w-10 h-10 rounded-lg bg-white border border-secondary-100 flex items-center justify-center group-hover:border-primary-500 transition-colors duration-300 shadow-sm">
        <Icon className="w-5 h-5 text-primary-950 group-hover:text-primary-600 transition-colors duration-300" />
      </div>
      <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-accent-500 rounded-full border-2 border-white" />
    </div>

    <h3 className="text-base font-bold text-secondary-900 mb-1 group-hover:text-primary-700 transition-colors">{title}</h3>
    <p className="text-sm text-secondary-500 leading-snug mb-3 line-clamp-3">{shortDescription}</p>

    <span className="mt-auto inline-flex items-center text-xs font-bold text-secondary-900 group-hover:text-primary-600 transition-colors cursor-pointer">
      Read More
      <div className="ml-2 w-6 h-6 rounded-full bg-white border border-secondary-200 flex items-center justify-center group-hover:border-primary-600 transition-colors">
        <ArrowRight className="w-3 h-3" />
      </div>
    </span>
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
    <section className="relative section-padding bg-secondary-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000000' d='M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.9,-17.9,96.1,-2.5C95.3,13,87.6,28.2,77.5,41.2C67.4,54.2,54.9,65,40.9,72.7C26.9,80.4,11.4,85,-4.4,86.8C-20.2,88.6,-36.3,87.6,-50,80.1C-63.7,72.6,-75,58.6,-82.7,43.2C-90.4,27.8,-94.5,11,-93,-5.1C-91.5,-21.2,-84.4,-36.6,-74.2,-48.8C-64,-61,-50.7,-70.1,-36.5,-77.1C-22.3,-84.1,-7.2,-89,7.6,-88.3C22.4,-87.6,44.7,-81.4,44.7,-76.4Z' transform='translate(100 100)' /%3E%3C/svg%3E")`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />

      <div ref={ref} className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 items-start">
          <div className="w-full lg:w-[35%] relative reveal-left">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] lg:aspect-[4/5] bg-gradient-to-b from-primary-50 to-secondary-200/50 shadow-soft-xl flex items-end justify-center">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=100&w=800"
                alt="Financial Consultant"
                className="w-full h-full object-cover object-top mix-blend-multiply transform hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-white/5 pointer-events-none" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent-500/10 rounded-full blur-xl pointer-events-none" />
          </div>

          <div className="w-full lg:w-[65%] flex flex-col">
            <div className="mb-8 max-w-2xl">
              <div className="inline-flex items-center px-3 py-1 bg-white shadow-sm border border-secondary-100 rounded-full mb-4 reveal">
                <span className="text-[10px] font-bold tracking-widest uppercase text-secondary-500">Our Expertise</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 leading-[1.2] reveal">
                Why choose us as your<br />
                accountant consultant?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
              {displayedServices.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  shortDescription={service.shortDescription}
                  icon={service.icon}
                  index={index}
                />
              ))}

              <div className="bg-primary-950 rounded-xl p-6 flex flex-col justify-center items-start shadow-xl reveal relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-800 rounded-bl-full opacity-50 translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />
                <h3 className="relative z-10 text-xl font-bold text-white mb-6 leading-snug">
                  Explore our all<br />expertises we offers
                </h3>
                <span className="relative z-10 inline-flex items-center gap-3 px-6 py-3 bg-white text-primary-950 text-sm font-bold rounded-lg hover:bg-secondary-50 transition-colors cursor-pointer group/btn">
                  View All Services
                  <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
