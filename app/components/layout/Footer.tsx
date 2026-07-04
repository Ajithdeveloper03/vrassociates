import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ChevronRight } from 'lucide-react';
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
            <a href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary-600 flex items-center justify-center">
                <span className="text-2xl font-serif font-bold text-white">VR</span>
              </div>
              <div>
                <p className="text-lg font-semibold leading-tight">Associates</p>
                <p className="text-sm text-secondary-400"></p>
              </div>
            </a>
            <p className="text-secondary-400 text-sm leading-relaxed mb-6">
              {companyInfo.description}
            </p>
            <div className="flex gap-3">
              <a
                href={companyInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary-800 hover:bg-primary-600 flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={companyInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary-800 hover:bg-primary-600 flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={companyInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary-800 hover:bg-primary-600 flex items-center justify-center transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-secondary-400 hover:text-white hover:pl-1 transition-all duration-200 text-sm inline-flex items-center gap-1"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100" />
                    {item.name}
                  </a>
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
                  <a
                    href={`/services#${service.id}`}
                    className="text-secondary-400 hover:text-white transition-colors duration-200 text-sm inline-flex items-center gap-1"
                  >
                    <ChevronRight className="w-4 h-4" />
                    {service.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/services"
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-200 text-sm inline-flex items-center gap-1"
                >
                  View All Services
                  <ChevronRight className="w-4 h-4" />
                </a>
              </li>
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
