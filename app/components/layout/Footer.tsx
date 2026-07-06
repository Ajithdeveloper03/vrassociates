import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { companyInfo, navigation, services } from '@/app/lib/siteData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 sm:w-20 h-14 sm:h-16 flex items-center justify-center shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/viswanathanr/vr-logo.png" 
                  alt="VR Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center -space-y-1">
                <p className="text-base sm:text-lg font-bold leading-none text-white tracking-wide">Viswanathan R</p>
                <p className="text-base sm:text-lg font-bold leading-none text-white tracking-wide">Associates</p>
              </div>
            </Link>
            <p className="text-secondary-400 text-sm leading-relaxed mb-6 pr-2 lg:pr-6">
              A premier consultancy firm delivering excellence in valuation, insolvency professional services, and corporate governance for over 25 years.
            </p>
            <div className="flex gap-3">
              <span
                className="w-10 h-10 rounded-lg bg-secondary-800 flex items-center justify-center transition-colors duration-200 cursor-default opacity-80"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </span>
              <span
                className="w-10 h-10 rounded-lg bg-secondary-800 flex items-center justify-center transition-colors duration-200 cursor-default opacity-80"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </span>
              <span
                className="w-10 h-10 rounded-lg bg-secondary-800 flex items-center justify-center transition-colors duration-200 cursor-default opacity-80"
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
                    href={item.href}
                    className="text-secondary-400 hover:text-white hover:pl-1 transition-all duration-200 text-sm inline-flex items-center gap-1"
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
                    href={`/services#${service.id}`}
                    className="text-secondary-400 hover:text-white transition-colors duration-200 text-sm inline-flex items-center gap-1"
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
                <MapPin className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                <address className="text-secondary-400 text-sm not-italic leading-relaxed">
                  {companyInfo.address.line1}<br />
                  {companyInfo.address.line2}<br />
                  {companyInfo.address.city}, {companyInfo.address.state} {companyInfo.address.pincode}
                </address>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="flex items-center gap-3 text-secondary-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  <Mail className="w-5 h-5 text-primary-400 shrink-0" />
                  {companyInfo.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-secondary-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  <Phone className="w-5 h-5 text-primary-400 shrink-0" />
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
