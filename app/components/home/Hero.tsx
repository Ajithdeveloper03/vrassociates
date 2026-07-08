'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const slides = [
  {
    src: "/viswanathanr/hero1.jpg",
    title: "Corporate Finance."
  },
  {
    src: "/viswanathanr/hero2.jpg",
    title: "Business Transformation."
  },
  {
    src: "/viswanathanr/hero3.jpg",
    title: "Value Creation."
  }
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    imagesRef.current.forEach((img, index) => {
      if (img) {
        gsap.to(img, {
          opacity: index === currentSlide ? 0.7 : 0,
          scale: index === currentSlide ? 1 : 1.05,
          duration: 1.5,
          ease: 'power2.inOut',
        });
      }
    });
  }, [currentSlide]);

  useGSAP(() => {
    gsap.fromTo('.hero-text',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.2, stagger: 0.2, ease: 'power3.out', delay: 0.3 }
    );
    gsap.fromTo('.hero-nav',
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 1 }
    );
  }, { scope: containerRef });

  return (
    <section className="relative w-full min-h-[100vh] flex flex-col justify-center bg-gray-900 overflow-hidden" ref={containerRef}>

      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <Image
            key={index}
            ref={(el) => {
              if (el) imagesRef.current[index] = el;
            }}
            src={slide.src}
            alt={slide.title}
            fill
            className="object-cover opacity-0 pointer-events-none"
            priority={index === 0}
          />
        ))}
        {/* Gray overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-transparent"></div>
      </div>

      <div className="container-custom z-10 w-full mt-20 relative">
        <div className="max-w-4xl">
          <h1 className="hero-text text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
            Corporate Finance.<br />
            Business Transformation.<br />
            <span className="text-[#d4af37]">Value Creation.</span>
          </h1>

          <p className="hero-text text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl border-l-4 border-[#d4af37] pl-6 leading-relaxed font-medium">
            Strategic Financial Advisory for Businesses, Investors, Banks, and Corporate Leaders
          </p>

          <div className="hero-text">
            <button className="bg-[#d4af37] text-[#0a192f] px-10 py-4 rounded-full font-bold transition-all hover:bg-white flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              Book a Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="hero-nav absolute right-4 lg:right-16 bottom-0 translate-y-1/2 flex gap-4 z-20">
          <button
            onClick={prevSlide}
            className="w-14 h-14 rounded-full bg-white/10 hover:bg-white border border-white/20 hover:border-white text-white hover:text-gray-900 flex items-center justify-center transition-all backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="w-14 h-14 rounded-full bg-white/10 hover:bg-white border border-white/20 hover:border-white text-white hover:text-gray-900 flex items-center justify-center transition-all backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>

    </section>
  );
};
