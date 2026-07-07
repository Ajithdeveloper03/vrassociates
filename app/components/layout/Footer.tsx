import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { companyInfo, navigation, services } from '@/app/lib/siteData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F2C50] text-white border-t border-[#1F2C50]/20">
      {/* Main Footer Content */}
      <div className="container-custom py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-32 h-32 flex items-center justify-center shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/viswanathanr/vr-logo.png" 
                  alt="VR Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-6 pr-2 lg:pr-6">
              A premier consultancy firm delivering excellence in valuation, insolvency professional services, and corporate governance for over 25 years.
            </p>
            <div className="flex gap-3">
              <span
                className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center transition-colors duration-200 cursor-default opacity-80 text-white"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </span>
              <span
                className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center transition-colors duration-200 cursor-default opacity-80 text-white"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </span>
              <span
                className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center transition-colors duration-200 cursor-default opacity-80 text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href="/"
                    className="text-white/80 hover:text-white hover:pl-1 transition-all duration-200 text-sm inline-flex items-center gap-1"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href="/"
                    className="text-white/80 hover:text-white transition-colors duration-200 text-sm inline-flex items-center gap-1"
                  >
                    <ChevronRight className="w-4 h-4" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                <address className="text-white/80 text-sm not-italic leading-relaxed">
                  {companyInfo.address.line1}<br />
                  {companyInfo.address.line2}<br />
                  {companyInfo.address.city}, {companyInfo.address.state} {companyInfo.address.pincode}
                </address>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-200 text-sm"
                >
                  <Mail className="w-5 h-5 text-accent-500 shrink-0" />
                  {companyInfo.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-200 text-sm"
                >
                  <Phone className="w-5 h-5 text-accent-500 shrink-0" />
                  {companyInfo.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
