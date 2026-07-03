'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { navigation } from '@/app/lib/siteData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Diagonally split background for scrolled state */}
      <div className={`absolute inset-0 z-0 overflow-hidden transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
        {/* Right side (Gold/Accent) */}
        <div className="absolute inset-0 bg-primary-500" />
        {/* Left side (Dark Navy) with diagonal cut */}
        <div 
          className="absolute top-0 bottom-0 left-0 bg-primary-950"
          style={{ width: '28%', clipPath: 'polygon(0 0, 100% 0, 92% 100%, 0% 100%)' }}
        />
      </div>

      <div className="container-custom relative z-10">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
              isScrolled ? 'bg-primary-500' : 'bg-white/10 backdrop-blur-sm'
            }`}>
              <span className="text-2xl font-serif font-bold text-white">
                VR
              </span>
            </div>
            <div className="hidden sm:block">
              <p className={`text-lg font-semibold leading-tight text-white`}>
                Viswanathan R Associates
              </p>
              <p className={`text-xs text-white/70`}>
                Corporate Finance Advisory
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {navigation.main.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                        isScrolled
                          ? 'text-primary-950 hover:text-white hover:bg-primary-950/20'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                      } ${
                        openDropdown === item.name
                          ? isScrolled
                            ? 'text-white bg-primary-950/20'
                            : 'text-white bg-white/10'
                          : ''
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-soft-lg border border-secondary-100 overflow-hidden transition-all duration-200 ${
                        openDropdown === item.name
                          ? 'opacity-100 translate-y-0 visible'
                          : 'opacity-0 -translate-y-2 invisible'
                      }`}
                    >
                      <div className="py-2">
                        {item.submenu.map((subItem, index) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2.5 text-sm text-secondary-700 hover:text-primary-700 hover:bg-primary-50 transition-colors duration-150"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className={`block px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isScrolled
                        ? 'text-primary-950 hover:text-white hover:bg-primary-950/20'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <a
            href={navigation.cta.href}
            className={`hidden lg:inline-flex items-center gap-2 transition-colors duration-300 ${
              isScrolled
                ? 'px-7 py-3.5 bg-primary-950 text-white hover:bg-primary-900 rounded-full font-semibold tracking-wide text-sm'
                : 'btn-primary'
            }`}
          >
            {navigation.cta.name}
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
              isScrolled
                ? 'text-secondary-700 hover:bg-secondary-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-screen mt-4' : 'max-h-0'
          }`}
        >
          <div className={`rounded-2xl p-4 ${isScrolled ? 'bg-secondary-50' : 'bg-white/10 backdrop-blur-md'}`}>
            <div className="space-y-2">
              {navigation.main.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                          isScrolled
                            ? 'text-secondary-700 hover:bg-white'
                            : 'text-white hover:bg-white/10'
                        }`}
                      >
                        <span className="font-medium">{item.name}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            openDropdown === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-200 ${
                          openDropdown === item.name ? 'max-h-96' : 'max-h-0'
                        }`}
                      >
                        <div className={`ml-4 mt-2 space-y-1 border-l-2 ${
                          isScrolled ? 'border-primary-200' : 'border-white/20'
                        }`}>
                          {item.submenu.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className={`block px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                                isScrolled
                                  ? 'text-secondary-600 hover:text-primary-700 hover:bg-white'
                                  : 'text-white/80 hover:text-white hover:bg-white/10'
                              }`}
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                        isScrolled
                          ? 'text-secondary-700 hover:bg-white hover:text-primary-700'
                          : 'text-white hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              <a
                href={navigation.cta.href}
                className="block w-full text-center btn-primary mt-4"
              >
                {navigation.cta.name}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
