'use client';

import { companyInfo } from '@/app/lib/siteData';
import { useReveal } from '@/app/hooks/useReveal';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CTABanner() {
  const ref = useReveal();

  return (
    <div ref={ref} className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Side - CTA Content */}
          <div className="lg:col-span-2 space-y-8 reveal">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Ready to Elevate Your Business?
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Partner with us for strategic financial advisory that transforms your business. Let's discuss how we can help you achieve your goals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors gap-2"
              >
                Book Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-colors gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </div>
          </div>

          {/* Right Side - Contact Info Card */}
          <div className="reveal-left">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg p-8 space-y-6">
              <h3 className="text-2xl font-bold">Get in Touch</h3>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-30 transition-colors">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100 mb-1">Email</p>
                    <p className="text-white font-semibold group-hover:underline">
                      {companyInfo.contact.email}
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-30 transition-colors">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100 mb-1">Phone</p>
                    <p className="text-white font-semibold group-hover:underline">
                      {companyInfo.contact.phone}
                    </p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100 mb-1">Address</p>
                    <p className="text-white font-semibold">
                      {companyInfo.address.line1}
                      <br />
                      {companyInfo.address.city}, {companyInfo.address.state}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-blue-400 border-opacity-50">
                <p className="text-sm text-blue-100">
                  Available for consultation calls Monday to Friday, 9 AM to 6 PM IST
                </p>
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
