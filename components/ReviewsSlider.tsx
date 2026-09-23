'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    author: 'Sunita Mishra',
    rating: 5,
    text: 'Jesika Fashion is our family’s go-to store in Varanasi! We bought clothes for my daughter’s wedding, and her bridal makeover was done in their parlour — completely stunning!',
  },
  {
    id: 2,
    author: 'Rajesh Verma',
    rating: 5,
    text: 'Found an amazing silk kurta pajama set for myself and cute dresses for my kids. High quality fabrics, great prices, and very polite staff.',
  },
  {
    id: 3,
    author: 'Priya Singh',
    rating: 5,
    text: 'Got my bridal lehenga customized here along with pre-bridal parlour sessions. The attention to detail, fabric quality, and warm hospitality are unmatched.',
  },
  {
    id: 4,
    author: 'Amit Srivastava',
    rating: 5,
    text: 'Best collection of festive kurtas and ethnic wear for men and children under one roof. Excellent customer service and fair pricing.',
  },
];

export default function ReviewsSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  return (
    <div
      className="relative max-w-3xl mx-auto px-4 sm:px-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider Viewport */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {REVIEWS.map((review) => {
            const firstLetter = review.author.trim().charAt(0).toUpperCase();
            return (
              <div key={review.id} className="w-full shrink-0">
                <div className="p-8 sm:p-10 border border-[#e8ded2] bg-white flex flex-col sm:flex-row gap-6 items-center shadow-xs">
                  {/* First Capital Letter Avatar */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#f5ede5] border-2 border-[#e8ded2] flex items-center justify-center shrink-0 text-2xl sm:text-3xl font-serif font-bold text-[#9d735d] select-none">
                    {firstLetter}
                  </div>

                  {/* Review Content */}
                  <div className="flex-1 text-center sm:text-left min-w-0">
                    <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-500 mb-2.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base text-[#574941] mb-3 leading-relaxed font-sans font-normal">
                      {review.text}
                    </p>
                    <h4 className="text-sm sm:text-base font-bold text-[#29201d] tracking-wide">
                      {review.author}
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-2.5 rounded-full bg-white border border-[#e8ded2] text-[#29201d] hover:bg-[#9d735d] hover:text-white hover:border-[#9d735d] shadow-sm transition-colors cursor-pointer"
        aria-label="Previous Review"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-2.5 rounded-full bg-white border border-[#e8ded2] text-[#29201d] hover:bg-[#9d735d] hover:text-white hover:border-[#9d735d] shadow-sm transition-colors cursor-pointer"
        aria-label="Next Review"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Indicator Dots */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {REVIEWS.map((_, dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => setCurrent(dotIndex)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              dotIndex === current
                ? 'w-6 h-2 bg-[#9d735d]'
                : 'w-2 h-2 bg-[#e8ded2] hover:bg-[#cbb193]'
            }`}
            aria-label={`Go to review ${dotIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
