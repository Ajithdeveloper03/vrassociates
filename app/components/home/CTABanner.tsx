'use client';

import { useRef } from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const CTABanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.cta-info',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
    );
    gsap.fromTo('.cta-form',
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
    );
  }, { scope: containerRef });

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" ref={containerRef}>
      <div className="container-custom">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">
          
          {/* Left: Contact Info */}
          <div className="cta-info w-full lg:w-5/12 bg-[#0a192f] p-12 lg:p-16 text-white relative overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Get in Touch</h2>
              <p className="text-slate-300 text-lg mb-12">
                Ready to transform your business? Reach out to us for a consultation.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#d4af37]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Office Location</h4>
                    <p className="text-slate-300 leading-relaxed">
                      Viswanathan R Associates<br />
                      Plot No 4, Deivanai Nagar 2nd Street,<br />
                      Madipakkam, Chennai 600091
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#d4af37]/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                    <a href="tel:+916379252059" className="text-slate-300 hover:text-[#d4af37] transition-colors">+91 63792 52059</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#d4af37]/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <a href="mailto:vishu@viswanathanrassociates.com" className="text-slate-300 hover:text-[#d4af37] transition-colors break-all">vishu@viswanathanrassociates.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Minimal Form */}
          <div className="cta-form w-full lg:w-7/12 p-12 lg:p-16 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-[#0a192f] mb-8">Send us a Message</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0a192f] transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0a192f] transition-all" placeholder="john@company.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                <input type="text" id="subject" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0a192f] transition-all" placeholder="How can we help you?" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0a192f] transition-all resize-none" placeholder="Tell us about your requirements..."></textarea>
              </div>
              
              <button type="submit" className="bg-[#d4af37] text-[#0a192f] px-8 py-4 rounded-xl font-bold transition-all hover:bg-[#0a192f] hover:text-white flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg">
                Send Message
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
