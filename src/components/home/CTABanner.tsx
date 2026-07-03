import { useRef, useEffect } from 'react';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { companyInfo } from '../../data/siteData';

const CTABanner = () => {
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
      {/* Main CTA block */}
      <div className="relative bg-primary-950 section-padding overflow-hidden">
        {/* Giant background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[20rem] font-bold text-white/[0.02] font-serif leading-none whitespace-nowrap">
            VRA
          </span>
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/15 rounded-full blur-[100px] animate-float-slow pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-500/10 rounded-full blur-[80px] animate-float pointer-events-none" style={{ animationDelay: '3s' }} />

        <div ref={ref} className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Big headline */}
            <div>
              <div className="section-label-dark reveal">Get Started</div>
              <h2 className="section-title-white mt-4 mb-6 reveal">
                Ready to Strengthen<br />
                Your Business<br />
                <span className="text-primary-300">Finances?</span>
              </h2>
              <p className="section-subtitle-white mb-10 reveal">
                Let's discuss how our expertise can help you navigate complexity, optimize operations, and create lasting value.
              </p>
              <div className="flex flex-wrap gap-4 reveal">
                <span className="btn-primary cursor-pointer group">
                  Book a Consultation
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <a href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`} className="btn-outline group flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call Us Now
                </a>
              </div>
              <p className="text-white/30 text-xs mt-5 reveal">No commitment required. We'll understand your needs first.</p>
            </div>

            {/* Right: Contact details card */}
            <div className="reveal-scale">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6">
                <h3 className="text-lg font-semibold text-white mb-6">Reach Us Directly</h3>

                <div className="space-y-5">
                  <a href={`mailto:${companyInfo.contact.email}`}
                    className="flex items-center gap-4 group hover:text-primary-300 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary-600 transition-colors duration-300">
                      <Mail className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-white/40 text-xs mb-0.5">Email</div>
                      <div className="text-white text-sm">{companyInfo.contact.email}</div>
                    </div>
                  </a>

                  <a href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-4 group hover:text-primary-300 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary-600 transition-colors duration-300">
                      <Phone className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-white/40 text-xs mb-0.5">Phone</div>
                      <div className="text-white text-sm">{companyInfo.contact.phone}</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-white/60" />
                    </div>
                    <div>
                      <div className="text-white/40 text-xs mb-0.5">Office</div>
                      <address className="text-white text-sm not-italic leading-relaxed">
                        {companyInfo.address.line1},<br />
                        {companyInfo.address.line2},<br />
                        {companyInfo.address.city} — {companyInfo.address.pincode}
                      </address>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="pt-5 border-t border-white/10">
                  <div className="text-white/40 text-xs mb-2">Business Hours</div>
                  <div className="text-white/70 text-sm">Mon–Fri: 9:00 AM – 6:00 PM &nbsp;|&nbsp; Sat: 9:00 AM – 1:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
