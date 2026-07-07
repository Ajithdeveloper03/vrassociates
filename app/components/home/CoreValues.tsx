'use client';

import { coreValues } from '@/app/lib/siteData';
import { Quote } from 'lucide-react';

const ValueCard = ({ value }: { value: any }) => {
  const Icon = value.icon;
  return (
    <div className="bg-white border border-secondary-200 rounded-xl p-6 mb-4 sm:mb-6 hover:border-primary-400 hover:shadow-soft-lg transition-all duration-300 shadow-sm relative group">
      <Quote className="absolute top-6 right-6 w-8 h-8 text-primary-500/10 group-hover:text-primary-500/20 transition-colors" />
      
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center shrink-0 border border-primary-200 group-hover:bg-primary-100 group-hover:border-primary-300 transition-colors">
          <Icon className="w-5 h-5 text-primary-600" />
        </div>
        <div className="pr-8">
          <h3 className="text-base sm:text-lg font-bold text-secondary-900 leading-tight">{value.name}</h3>
          <p className="text-[10px] sm:text-xs font-semibold text-primary-600 uppercase tracking-wider mt-0.5">Core Principle</p>
        </div>
      </div>
      
      <p className="text-secondary-600 text-sm leading-relaxed">
        {value.description}
      </p>
    </div>
  );
};

export function CoreValues() {
  const col1 = [...coreValues];
  const col2 = [...coreValues.slice(3), ...coreValues.slice(0, 3)];
  const col3 = [...coreValues.slice(5), ...coreValues.slice(0, 5)];

  return (
    <section className="relative pt-[20px] pb-24 bg-secondary-50 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary-200/40 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-4 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Our Principles
          </h2>
          <p className="text-secondary-600 text-lg">
            The fundamental values that define our culture, shape our strategies, and guarantee excellence in every client relationship.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
          
          {/* Gradient Masks for smooth fading at top and bottom */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-secondary-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-secondary-50 to-transparent z-10 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 h-full">
            
            {/* Column 1 */}
            <div className="relative h-full overflow-hidden hidden sm:block">
              <div className="animate-marquee-vertical hover:[animation-play-state:paused]">
                {[...col1, ...col1].map((value, idx) => (
                  <ValueCard key={`col1-${idx}`} value={value} />
                ))}
              </div>
            </div>

            {/* Column 2 (Reversed) */}
            <div className="relative h-full overflow-hidden">
              <div className="animate-marquee-vertical-reverse hover:[animation-play-state:paused]">
                {[...col2, ...col2].map((value, idx) => (
                  <ValueCard key={`col2-${idx}`} value={value} />
                ))}
              </div>
            </div>

            {/* Column 3 */}
            <div className="relative h-full overflow-hidden hidden lg:block">
              <div className="animate-marquee-vertical hover:[animation-play-state:paused]">
                {[...col3, ...col3].map((value, idx) => (
                  <ValueCard key={`col3-${idx}`} value={value} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default CoreValues;
