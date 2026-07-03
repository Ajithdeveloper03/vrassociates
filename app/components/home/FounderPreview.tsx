'use client';

import { founder } from '@/app/lib/siteData';
import { useReveal } from '@/app/hooks/useReveal';
import { CheckCircle } from 'lucide-react';

export function FounderPreview() {
  const ref = useReveal();
  const initials = founder.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <div ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center reveal">
          Meet Our Founder
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Visual */}
          <div className="reveal-left">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg p-12 aspect-square flex items-center justify-center">
              <div className="w-48 h-48 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-6xl font-bold text-white">{initials}</span>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-6 reveal">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{founder.name}</h3>
              <p className="text-lg text-blue-600 font-semibold mb-4">{founder.title}</p>
              <p className="text-gray-600 leading-relaxed mb-6">{founder.bio}</p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Qualifications</h4>
              <div className="space-y-3">
                {founder.qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{qualification}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Experience Highlights</h4>
              <div className="space-y-3">
                {founder.experience.map((exp, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2" />
                    <span className="text-gray-700">{exp}</span>
                  </div>
                ))}
              </div>
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
