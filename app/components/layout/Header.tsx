'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { navigation } from '@/app/lib/siteData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

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
      className="absolute top-0 left-0 right-0 z-50 py-3 bg-transparent"
    >

      <div className="container-custom relative z-10">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className={`relative flex items-center justify-center transition-all duration-500 shrink-0 bg-transparent w-32 h-32`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/viswanathanr/vr-logo.png" 
                alt="VR Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0 xl:gap-1" ref={dropdownRef}>
            {navigation.main.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`flex items-center gap-1 px-2 xl:px-4 py-2 text-base font-medium rounded-lg transition-all duration-200 cursor-pointer text-secondary-900 hover:text-primary-700 hover:bg-white/50 ${
                        openDropdown === item.name
                          ? 'text-primary-700 bg-white/50'
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
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2.5 text-base text-secondary-700 hover:text-primary-700 hover:bg-primary-50 transition-colors duration-150"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-2 xl:px-4 py-2 text-base font-medium rounded-lg transition-all duration-200 text-secondary-900 hover:text-primary-700 hover:bg-white/50"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <Link
            href={navigation.cta.href}
            className={`hidden lg:inline-flex items-center gap-2 transition-colors duration-300 whitespace-nowrap btn-primary text-xs xl:text-sm px-4 xl:px-7`}
          >
            {navigation.cta.name}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors duration-200 text-secondary-900 hover:bg-secondary-100"
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
          <div className="rounded-2xl p-4 bg-white/90 backdrop-blur-md shadow-lg">
            <div className="space-y-2">
              {navigation.main.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-all duration-200 text-secondary-900 hover:bg-white/50"
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
                        <div className="ml-4 mt-2 space-y-1 border-l-2 border-secondary-200">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm rounded-lg transition-all duration-200 text-secondary-600 hover:text-primary-700 hover:bg-white/50"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 rounded-lg font-medium transition-all duration-200 text-secondary-900 hover:bg-white/50 hover:text-primary-700"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href={navigation.cta.href}
                className="block w-full text-center btn-primary mt-4"
              >
                {navigation.cta.name}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
