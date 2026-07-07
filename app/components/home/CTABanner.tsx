'use client';

import { useRef, useEffect } from 'react';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { companyInfo } from '@/app/lib/siteData';

export function CTABanner() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-scale').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="relative bg-primary-50 section-padding overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[10rem] md:text-[15rem] lg:text-[20rem] font-bold text-primary-900/[0.03] font-serif leading-none whitespace-nowrap">
            VRA
          </span>
        </div>

        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/15 rounded-full blur-[100px] animate-float-slow pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-500/10 rounded-full blur-[80px] animate-float pointer-events-none" style={{ animationDelay: '3s' }} />

        <div ref={ref} className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Side: Text + Reach Us Directly Box */}
            <div className="flex flex-col h-full justify-between lg:pr-8">
              <div>
                <div className="section-label-dark reveal">Get Started</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 leading-tight mt-4 mb-4 reveal">
                  Ready to Strengthen<br />
                  Your Business<br />
                  <span className="text-primary-600">Finances?</span>
                </h2>
                <p className="section-subtitle-white mb-6 reveal">
                  Let&apos;s discuss how our expertise can help you navigate complexity, optimize operations, and create lasting value.
                </p>
              </div>

              {/* Info Box (Moved from right, removed box styling) */}
              <div className="reveal-scale mt-4">
                <div className="space-y-5">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-3">Reach Us Directly</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <a href={`mailto:${companyInfo.contact.email}`}
                        className="flex items-start gap-3 group hover:text-primary-600 transition-colors">
                        <div className="w-9 h-9 rounded-full bg-white border border-secondary-200 shadow-sm flex items-center justify-center shrink-0 group-hover:bg-primary-600 transition-colors duration-300">
                          <Mail className="w-4 h-4 text-secondary-500 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <div className="text-secondary-500 text-xs mb-0.5">Email</div>
                          <div className="text-secondary-900 font-medium text-[13px]">{companyInfo.contact.email}</div>
                        </div>
                      </a>

                      <a href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`}
                        className="flex items-start gap-3 group hover:text-primary-600 transition-colors">
                        <div className="w-9 h-9 rounded-full bg-white border border-secondary-200 shadow-sm flex items-center justify-center shrink-0 group-hover:bg-primary-600 transition-colors duration-300">
                          <Phone className="w-4 h-4 text-secondary-500 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <div className="text-secondary-500 text-xs mb-0.5">Phone</div>
                          <div className="text-secondary-900 font-medium text-[13px]">{companyInfo.contact.phone}</div>
                        </div>
                      </a>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-full bg-white border border-secondary-200 shadow-sm flex items-center justify-center shrink-0">
                          <MapPin className="w-4 h-4 text-secondary-500" />
                        </div>
                        <div>
                          <div className="text-secondary-500 text-xs mb-0.5">Office</div>
                          <address className="text-secondary-900 font-medium text-[13px] not-italic leading-relaxed">
                            {companyInfo.address.line1},<br />
                            {companyInfo.address.line2},<br />
                            {companyInfo.address.city} — {companyInfo.address.pincode}
                          </address>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-secondary-200 flex flex-col sm:flex-row gap-2 sm:gap-6">
                    <div className="text-secondary-500 font-medium text-xs">Business Hours:</div>
                    <div className="text-secondary-700 font-medium text-sm">Mon–Fri: 9:00 AM – 6:00 PM &nbsp;|&nbsp; Sat: 9:00 AM – 1:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="reveal-scale lg:pl-6">
              <div className="bg-white border border-secondary-200 rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-bold text-secondary-900 mb-1.5">Send us a Message</h3>
                <p className="text-secondary-600 text-xs mb-5">Fill out the form below and we&apos;ll get back to you shortly.</p>
                
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-secondary-700">First Name</label>
                      <input type="text" className="w-full px-3 py-2 bg-secondary-50 border border-secondary-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 text-secondary-900 placeholder-secondary-400 transition-all text-sm" placeholder="John" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-secondary-700">Last Name</label>
                      <input type="text" className="w-full px-3 py-2 bg-secondary-50 border border-secondary-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 text-secondary-900 placeholder-secondary-400 transition-all text-sm" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-secondary-700">Email Address</label>
                    <input type="email" className="w-full px-3 py-2 bg-secondary-50 border border-secondary-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 text-secondary-900 placeholder-secondary-400 transition-all text-sm" placeholder="john@example.com" />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-secondary-700">Phone Number</label>
                    <input type="tel" className="w-full px-3 py-2 bg-secondary-50 border border-secondary-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 text-secondary-900 placeholder-secondary-400 transition-all text-sm" placeholder="+91 98765 43210" />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-secondary-700">Message</label>
                    <textarea rows={3} className="w-full px-3 py-2 bg-secondary-50 border border-secondary-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 text-secondary-900 placeholder-secondary-400 transition-all resize-none text-sm" placeholder="How can we help you?"></textarea>
                  </div>
                  
                  <button type="submit" className="w-full btn-primary py-2.5 text-sm mt-1 group">
                    Submit Inquiry
                    <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;
