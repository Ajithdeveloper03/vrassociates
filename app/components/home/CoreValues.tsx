'use client';

import { coreValues } from '@/app/lib/siteData';
import { useReveal } from '@/app/hooks/useReveal';

export function CoreValues() {
  const ref = useReveal();

  return (
    <div ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 reveal">Our Core Values</h2>
          <p className="text-lg text-gray-600 reveal">The principles that guide everything we do</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.slice(0, 4).map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="reveal-scale group"
              >
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 h-full hover:shadow-xl transition-all duration-300 border border-blue-100 overflow-hidden relative">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-white transition-all duration-300">
                      <Icon className="w-7 h-7 text-white group-hover:text-blue-600 transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">
                      {value.name}
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-blue-50 transition-colors leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Row - Remaining Values */}
        {coreValues.length > 4 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {coreValues.slice(4).map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index + 4}
                  className="reveal-scale group"
                >
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 h-full hover:shadow-xl transition-all duration-300 border border-blue-100 overflow-hidden relative">
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-white transition-all duration-300">
                        <Icon className="w-7 h-7 text-white group-hover:text-blue-600 transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">
                        {value.name}
                      </h3>
                      <p className="text-sm text-gray-600 group-hover:text-blue-50 transition-colors leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
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
      `}</style>
    </div>
  );
}
