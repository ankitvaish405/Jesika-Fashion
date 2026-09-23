'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  image: string;
  tagline: string;
  title: string;
  description: string;
  primaryBtnText: string;
  primaryBtnHref: string;
  secondaryBtnText: string;
  secondaryBtnHref: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    image: '/1.jpeg',
    tagline: 'All In One Fashion & Beauty',
    title: "Women's, Men's & Kids' Wear",
    description: 'Complete family clothing destination in Varanasi featuring bridal lehengas, silk sarees, designer sherwanis, and festive kids wear.',
    primaryBtnText: 'Explore Gallery',
    primaryBtnHref: '/gallery',
    secondaryBtnText: 'Visit Store',
    secondaryBtnHref: '/contact',
  },
  {
    id: 2,
    image: '/2.jpeg',
    tagline: 'Jesika Beauty Parlour',
    title: 'Bridal Makeover & Salon Care',
    description: 'Specialized HD bridal makeup, hair styling & treatments, skin rejuvenating facials, and complete pre-bridal packages.',
    primaryBtnText: 'Parlour Services',
    primaryBtnHref: '/parlour',
    secondaryBtnText: 'Book Appointment',
    secondaryBtnHref: '/parlour',
  },
  {
    id: 3,
    image: '/7.jpeg',
    tagline: "Men's Festive & Wedding Wear",
    title: 'Royal Kurta Sets & Sherwanis',
    description: 'Impeccably tailored ethnic ensembles, wedding sherwanis, and modern party wear for men of distinction.',
    primaryBtnText: "Explore Men's Wear",
    primaryBtnHref: '/gallery',
    secondaryBtnText: 'View Gallery',
    secondaryBtnHref: '/gallery',
  },
  {
    id: 4,
    image: '/9.jpeg',
    tagline: "Women's & Kids' Collection",
    title: 'Banarasi Sarees & Party Wear',
    description: 'From timeless heritage weaves for women to adorable festive gowns and kurta-dhoti sets for children.',
    primaryBtnText: 'Explore Collections',
    primaryBtnHref: '/gallery',
    secondaryBtnText: 'Our Story',
    secondaryBtnHref: '/about',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  return (
    <section
      className="relative w-full h-[calc(100vh-5rem)] min-h-[calc(100dvh-5rem)] bg-[#221a17] overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero Carousel"
    >
      {/* Slides */}
      {SLIDES.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image */}
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index <= 1}
                quality={100}
                sizes="100vw"
                className="object-cover object-center"
              />
              {/* Subtle Clean Gradient Scrim for crystal clear photos with text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/15" />
            </div>

            {/* Slide Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
              <div className={`max-w-3xl mx-auto text-white transition-all duration-500 ease-out ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                <p className="text-xs uppercase tracking-widest font-semibold text-neutral-200 mb-3 drop-shadow">
                  {slide.tagline}
                </p>
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-sans font-bold tracking-tight text-white mb-4 leading-tight drop-shadow-md">
                  {slide.title}
                </h1>
                <p className="text-sm sm:text-base text-neutral-200 max-w-xl mx-auto font-normal mb-8 leading-relaxed drop-shadow">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
                  <Link
                    href={slide.primaryBtnHref}
                    className="w-full sm:w-auto px-8 py-3.5 bg-white text-neutral-900 hover:bg-neutral-100 text-xs font-semibold rounded-xl tracking-wide transition-all shadow-lg"
                  >
                    {slide.primaryBtnText}
                  </Link>
                  <Link
                    href={slide.secondaryBtnHref}
                    className="w-full sm:w-auto px-8 py-3.5 bg-black/40 text-white border border-white/40 hover:bg-white/10 text-xs font-semibold rounded-xl tracking-wide transition-all backdrop-blur-xs"
                  >
                    {slide.secondaryBtnText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Left Arrow Button */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-[#29201d]/40 hover:bg-[#29201d]/85 text-[#f5ebe3] backdrop-blur-sm border border-[#f5ebe3]/25 transition-all hover:scale-105"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Right Arrow Button */}
      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-[#29201d]/40 hover:bg-[#29201d]/85 text-[#f5ebe3] backdrop-blur-sm border border-[#f5ebe3]/25 transition-all hover:scale-105"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Bottom Controls */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 z-20 flex items-center justify-center">
        <div className="flex items-center gap-2">
          {SLIDES.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setCurrent(dotIndex)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                dotIndex === current
                  ? 'w-8 h-2 bg-[#ebdcd2]'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${dotIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
