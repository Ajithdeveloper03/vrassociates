'use client';

import { companyInfo } from '@/app/lib/siteData';
import { useReveal } from '@/app/hooks/useReveal';
import { Target, Eye, Zap } from 'lucide-react';
import Link from 'next/link';

export function AboutPreview() {
  const ref = useReveal();

  return (
    <div ref={ref} className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Dark Image Panel */}
          <div className="relative reveal-left">
            <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-lg p-8 min-h-96 flex flex-col justify-between">
              <div>
                <h3 className="text-4xl font-bold mb-6">Our Journey</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {companyInfo.story}
                </p>
              </div>
              <div className="text-blue-400 font-semibold">Since 2000</div>
            </div>
          </div>

          {/* Right Side - Light Background with Cards */}
          <div className="space-y-6 reveal">
            <div className="bg-white text-gray-900 rounded-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Our Mission</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {companyInfo.mission}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white text-gray-900 rounded-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Our Vision</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {companyInfo.vision}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Read Full Story
              </Link>
              <Link
                href="#values"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600 transition-colors"
              >
                Our Values
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

        :global(.reveal) {
          opacity: 0;
          animation: revealIn 0.6s ease-out forwards;
        }

        :global(.reveal-left) {
          opacity: 0;
          animation: revealFromLeft 0.6s ease-out forwards;
        }

        :global(.reveal.visible),
        :global(.reveal-left.visible) {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
