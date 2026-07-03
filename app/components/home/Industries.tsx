'use client';

import { useRef, useState, useEffect } from 'react';
import { industries } from '@/app/lib/siteData';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useReveal } from '@/app/hooks/useReveal';

export function Industries() {
  const ref = useReveal();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkScroll);
      return () => window.removeEventListener('resize', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <div ref={ref} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 reveal">Industries We Serve</h2>
          <p className="text-lg text-gray-600 reveal">Delivering specialized expertise across diverse sectors</p>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scroll-smooth"
            style={{ scrollBehavior: 'smooth' }}
          >
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 group reveal-scale"
                >
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 h-64 flex flex-col justify-between hover:shadow-xl transition-all duration-300 cursor-pointer border border-blue-100 hover:border-blue-400">
                    <div>
                      <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                      <p className="text-sm text-gray-600 line-clamp-3">{industry.description}</p>
                    </div>
                    <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                      <span className="text-sm font-medium">Learn more</span>
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 z-10 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 z-10 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes revealIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        :global(.reveal) {
          opacity: 0;
          animation: revealIn 0.6s ease-out forwards;
        }

        :global(.reveal-scale) {
          opacity: 0;
          animation: scaleIn 0.5s ease-out forwards;
        }

        :global(.reveal.visible),
        :global(.reveal-scale.visible) {
          opacity: 1;
        }

        ::-webkit-scrollbar {
          height: 6px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #2563eb;
        }
      `}</style>
    </div>
  );
}
