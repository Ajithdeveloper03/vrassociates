'use client';

import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { companyInfo } from '@/app/lib/siteData';

const words = ['Finance.', 'Transformation.', 'Value Creation.'];
const wordColors = ['text-white', 'text-primary-300', 'text-accent-400'];

const bannerImages = [
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop'
];

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [currentBg, setCurrentBg] = useState(0);

  // Word cycler
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  // Background slider cycler
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      
      {/* Background Images Slider */}
      {bannerImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentBg ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={src}
            alt="Hero Background"
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-slate-950/70 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent pointer-events-none z-0" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="container-custom w-full relative z-10 pb-20 pt-10 flex flex-col items-start">
        <div className="max-w-3xl w-full">
          
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-400" />
            </span>
            <span className="text-xs font-semibold tracking-widest text-white/80 uppercase">
              Trusted by 970+ businesses worldwide
            </span>
          </div>

          {/* Main headline */}
          <div className="mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] animate-fade-in-up drop-shadow-2xl">
              Corporate
            </h1>
            {/* Animated word cycle */}
            <div className="relative my-2">
              {/* Structural invisible element to maintain container size for longest text */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] opacity-0 pointer-events-none select-none" aria-hidden="true">
                Value Creation.
              </h1>

              {/* Animated words container */}
              <div className="absolute inset-0">
                {words.map((word, i) => (
                  <h1
                    key={word}
                    className={`absolute top-0 left-0 w-full text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] transition-all duration-700 ease-in-out drop-shadow-2xl ${wordColors[i]} ${
                      i === currentWord
                        ? 'translate-y-0 opacity-100 z-10 scale-100'
                        : i < currentWord || (currentWord === 0 && i === words.length - 1)
                          ? '-translate-y-8 opacity-0 z-0 scale-95'
                          : 'translate-y-8 opacity-0 z-0 scale-95'
                    }`}
                  >
                    {word}
                  </h1>
                ))}
              </div>
            </div>
          </div>

          <p className="text-lg text-white/70 max-w-xl mb-10 leading-relaxed animate-fade-in-up animate-delay-200">
            {companyInfo.description} With 25+ years of global experience delivering measurable results for businesses, investors, and corporate leaders.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-300">
            <span className="btn-primary group cursor-pointer text-sm tracking-wider">
              Book a Consultation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
            <span className="btn-outline cursor-pointer text-sm tracking-wider bg-white/5">
              Explore Services
            </span>
          </div>

          {/* Credentials */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 mt-12 animate-fade-in animate-delay-500">
            {['IBBI Registered Valuer', 'IBBI Insolvency Professional', 'Independent Director'].map((cred) => (
              <div key={cred} className="flex items-center gap-2 text-white/70 text-sm font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-400 shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
                {cred}
              </div>
            ))}
          </div>
          
        </div>
      </div>

      {/* Scroll indicator and Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-8 z-20 w-full max-w-sm">
        
        {/* Slider Navigation Dots */}
        <div className="flex items-center gap-3">
          {bannerImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentBg(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                currentBg === idx 
                  ? 'w-8 h-2 bg-accent-400' 
                  : 'w-2 h-2 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Scroll down indicator */}
        <div className="flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
          <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </div>

      {/* Bottom diagonal clip removed to straighten the section */}
    </section>
  );
};

export { Hero };
export default Hero;
