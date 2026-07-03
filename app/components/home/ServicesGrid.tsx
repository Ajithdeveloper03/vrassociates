'use client';

import { services } from '@/app/lib/siteData';
import { useReveal } from '@/app/hooks/useReveal';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function ServicesGrid() {
  const ref = useReveal();
  const displayServices = services.slice(0, 6);

  return (
    <div ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 reveal">Our Services</h2>
          <p className="text-lg text-gray-600 reveal">Comprehensive financial advisory solutions tailored to your needs</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Large Feature */}
          <div className="lg:col-span-1 reveal-left">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg p-8 h-full flex flex-col justify-between text-white">
              <div>
                <h3 className="text-2xl font-bold mb-4">Tailored Solutions</h3>
                <p className="text-blue-100 mb-6">
                  We provide comprehensive financial advisory services designed to address your unique business challenges and unlock growth opportunities.
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-white font-semibold hover:text-blue-100 transition-colors"
              >
                Explore All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right - Services Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {displayServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className="reveal-scale group"
                  >
                    <Link href={`/services#${service.id}`}>
                      <div className="bg-white rounded-lg p-6 h-full hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 hover:border-blue-400">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                            <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {service.shortDescription}
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 reveal">
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-lg p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-gray-300">
                  Schedule a consultation with our experts to explore how we can help you achieve your strategic objectives.
                </p>
              </div>
              <Link
                href="/contact"
                className="flex-shrink-0 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors whitespace-nowrap"
              >
                Book Consultation
              </Link>
            </div>
          </div>
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

        @keyframes revealFromLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        :global(.reveal-left) {
          opacity: 0;
          animation: revealFromLeft 0.6s ease-out forwards;
        }

        :global(.reveal-scale) {
          opacity: 0;
          animation: scaleIn 0.5s ease-out forwards;
        }

        :global(.reveal.visible),
        :global(.reveal-left.visible),
        :global(.reveal-scale.visible) {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
