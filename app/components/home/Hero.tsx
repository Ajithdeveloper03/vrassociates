'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, TrendingUp, Award, Globe } from 'lucide-react';
import { companyInfo } from '@/app/lib/siteData';

const words = ['Finance.', 'Transformation.', 'Value Creation.'];
const wordColors = ['text-white', 'text-primary-300', 'text-accent-400'];

const FloatingCard = ({
  value, label, icon: Icon, delay, className,
}: {
  value: string;
  label: string;
  icon: React.ElementType;
  delay: string;
  className: string;
}) => (
  <div
    className={`absolute bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 shadow-glow animate-float ${className}`}
    style={{ animationDelay: delay }}
  >
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-primary-500/30 flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary-300" />
      </div>
      <div>
        <div className="text-2xl font-bold text-white leading-none">{value}</div>
        <div className="text-xs text-white/60 mt-0.5">{label}</div>
      </div>
    </div>
  </div>
);

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 10,
      });
    };
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden gradient-bg pt-20">
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-slate-900/70 pointer-events-none z-0" />

      {/* Animated Background Orbs */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)` }}
      >
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary-600/20 blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-primary-400/15 blur-[80px]" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-accent-500/10 blur-[80px]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Parallax scroll effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        {/* Decorative rotating ring */}
        <div className="absolute -top-32 -right-32 w-[700px] h-[700px] border border-primary-700/30 rounded-full animate-rotate-slow" />
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] border border-primary-600/20 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left: Hero Text */}
          <div className="lg:col-span-7">
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
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-[1.0] animate-fade-in-up drop-shadow-2xl">
                Corporate
              </h1>
              {/* Animated word cycle */}
              <div className="relative my-2">
                {/* Structural invisible element to maintain container size for longest text */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.1] opacity-0 pointer-events-none select-none" aria-hidden="true">
                  Value Creation.
                </h1>

                {/* Animated words container */}
                <div className="absolute inset-0">
                  {words.map((word, i) => (
                    <h1
                      key={word}
                      className={`absolute top-0 left-0 w-full text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.1] transition-all duration-700 ease-in-out drop-shadow-2xl ${wordColors[i]} ${
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

            <p className="text-lg text-white/60 max-w-xl mb-10 leading-relaxed animate-fade-in-up animate-delay-200">
              {companyInfo.description} With 25+ years of global experience delivering measurable results for businesses, investors, and corporate leaders.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-300">
              <span className="btn-primary group cursor-pointer text-sm tracking-wider">
                Book a Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
              <span className="btn-outline cursor-pointer text-sm tracking-wider">
                Explore Services
              </span>
            </div>

            {/* Credentials */}
            <div className="flex flex-wrap gap-4 mt-12 animate-fade-in animate-delay-500">
              {['IBBI Registered Valuer', 'IBBI Insolvency Professional', 'Independent Director'].map((cred) => (
                <div key={cred} className="flex items-center gap-2 text-white/50 text-xs font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                  {cred}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Floating Stats */}
          <div className="lg:col-span-5 relative hidden lg:block h-[480px]">
            <FloatingCard value="25+" label="Years of Experience" icon={Award} delay="0s" className="top-0 right-4" />
            <FloatingCard value="970+" label="Valuations Completed" icon={TrendingUp} delay="1s" className="top-36 right-0" />
            <FloatingCard value="12+" label="Industries Served" icon={Globe} delay="2s" className="bottom-16 right-8" />

            {/* Central VR monogram */}
            <div className="absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2">
              <div className="relative flex items-center justify-center">
                
                {/* Rotating outer ring with text */}
                <div className="absolute w-44 h-44 animate-rotate-slow flex items-center justify-center">
                  <div className="absolute inset-4 rounded-full border border-primary-500/40" />
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <path id="textPath" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
                    <text className="text-[7.5px] font-bold tracking-[0.18em] uppercase fill-white/70">
                      <textPath href="#textPath" startOffset="0%">
                        Viswanathan R Associates • Viswanathan R Associates • 
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute top-5 right-5 w-4 h-4 rounded-full bg-accent-400 shadow-[0_0_15px_rgba(251,191,36,0.5)]" />
                  <div className="absolute bottom-4 left-5 w-3 h-3 rounded-full bg-primary-400 shadow-[0_0_15px_rgba(96,165,250,0.5)]" />
                </div>

                {/* Static Inner VR */}
                <div className="w-24 h-24 rounded-full bg-primary-700/80 backdrop-blur-md flex items-center justify-center relative z-10 shadow-2xl border border-white/10">
                  <span className="text-4xl font-serif font-bold text-white">VR</span>
                </div>
              </div>
            </div>

            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary-600/20 blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </div>

      {/* Bottom diagonal clip */}
      <div className="absolute bottom-0 left-0 right-0 h-20">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,80 L1440,20 L1440,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export { Hero };
export default Hero;
