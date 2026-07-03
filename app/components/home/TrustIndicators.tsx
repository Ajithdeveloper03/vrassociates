'use client';

import { useEffect, useState } from 'react';
import { trustIndicators } from '@/app/lib/siteData';
import { useReveal } from '@/app/hooks/useReveal';

function Counter({ value, label }: { value: string; label: string }) {
  const [count, setCount] = useState(0);
  const numValue = parseInt(value.replace(/[^0-9]/g, ''));
  const isNumber = !isNaN(numValue);
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!isNumber) return;

    let current = 0;
    const increment = Math.ceil(numValue / 30);
    const interval = setInterval(() => {
      current += increment;
      if (current >= numValue) {
        setCount(numValue);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [numValue, isNumber]);

  return (
    <div className="text-center reveal">
      <div className="text-4xl font-bold text-blue-600 mb-2">
        {isNumber ? count : value}
        {isNumber && suffix}
      </div>
      <p className="text-gray-600 text-sm">{label}</p>
    </div>
  );
}

export function TrustIndicators() {
  const ref = useReveal();

  return (
    <div ref={ref} className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustIndicators.map((indicator, index) => (
            <Counter
              key={index}
              value={indicator.value}
              label={indicator.label}
            />
          ))}
        </div>

        <div className="mt-12 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="reveal">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                <span className="text-blue-600 font-bold">✓</span>
              </div>
              <p className="text-sm font-medium text-gray-700">IBBI Registered Valuer</p>
            </div>
            <div className="reveal">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                <span className="text-green-600 font-bold">✓</span>
              </div>
              <p className="text-sm font-medium text-gray-700">IBBI Registered IP</p>
            </div>
            <div className="reveal">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-3">
                <span className="text-purple-600 font-bold">✓</span>
              </div>
              <p className="text-sm font-medium text-gray-700">Independent Director</p>
            </div>
            <div className="reveal">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-3">
                <span className="text-orange-600 font-bold">✓</span>
              </div>
              <p className="text-sm font-medium text-gray-700">Global Expertise</p>
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

        :global(.reveal) {
          opacity: 0;
          animation: revealIn 0.6s ease-out forwards;
        }

        :global(.reveal.visible) {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
