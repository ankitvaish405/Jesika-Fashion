'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface Review {
  id: number;
  author: string;
  rating: number;
  timeAgo: string;
  text: string;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    author: 'Ananya Dubey',
    rating: 5,
    timeAgo: '2 weeks ago',
    text: 'Best one-stop fashion store near Panch Koshi, Asapur! Bought my wedding Banarasi saree here and also booked my bridal makeup package. The parlour team gave me the exact natural HD glow I wanted. Truly unmatched service in Varanasi.',
  },
  {
    id: 2,
    author: 'Alok Pandey',
    rating: 5,
    timeAgo: '3 weeks ago',
    text: 'Got bespoke sherwani and kurta sets for my brother’s wedding. Their in-house master tailor adjusted the fitting within 45 minutes on the same day. Great collection for men & kids, very transparent pricing.',
  },
  {
    id: 3,
    author: 'Dr. Ritu Srivastava',
    rating: 5,
    timeAgo: '1 month ago',
    text: 'Whenever we have any family function or festival, Jesika is our first choice. Everything from kids’ party wear to designer lehengas under one roof. Plus having the beauty parlour in the same building is so convenient.',
  },
  {
    id: 4,
    author: 'Saurabh Singh',
    rating: 5,
    timeAgo: '1 month ago',
    text: 'Very courteous staff and genuine branded cosmetics. Located right near Panch Koshi Chauraha with easy parking. Highly recommended for complete family shopping in Varanasi.',
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
    <div className="max-w-4xl mx-auto px-4">
      {/* Google Business Rating Badge Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 bg-white border border-neutral-200 rounded-xl shadow-xs mb-8">
        <div className="flex items-center gap-3.5">
          {/* Google Logo SVG */}
          <div className="w-10 h-10 rounded-full bg-neutral-50 border border-neutral-200 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-neutral-900">4.5</span>
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Verified
              </span>
            </div>
            <p className="text-sm text-neutral-600 mt-0.5">
              111+ Happy Local Customers
            </p>
          </div>
        </div>

        <a
          href="https://maps.app.goo.gl/MVMphJJv31agtDvG6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-700 hover:text-black transition-colors shrink-0"
        >
          <span>View on Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Slider Container */}
      <div
        className="max-w-3xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slider Viewport (Content Top) */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {REVIEWS.map((review) => {
              const firstLetter = review.author.trim().charAt(0).toUpperCase();
              return (
                <div key={review.id} className="w-full shrink-0">
                  <div className="p-8 sm:p-10 border border-neutral-200 bg-white rounded-2xl flex flex-col sm:flex-row gap-6 items-center shadow-xs">
                    {/* First Capital Letter Avatar */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center shrink-0 text-xl sm:text-2xl font-sans font-bold text-neutral-800 select-none">
                      {firstLetter}
                    </div>

                    {/* Review Content */}
                    <div className="flex-1 text-center sm:text-left min-w-0">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                        <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-500">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <span className="text-[11px] text-neutral-500 font-normal">
                          Posted on Google • {review.timeAgo}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-neutral-600 mb-3 leading-relaxed font-sans font-normal">
                        {review.text}
                      </p>
                      <h4 className="text-sm sm:text-base font-semibold text-neutral-900">
                        {review.author}
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Navigation: Prev on Left, Dots in Center, Next on Right */}
        <div className="flex items-center justify-between mt-6 px-1">
          <button
            type="button"
            onClick={prevSlide}
            className="p-2 sm:p-2.5 rounded-full bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 shadow-sm transition-colors cursor-pointer"
            aria-label="Previous Review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Indicator Dots */}
          <div className="flex items-center justify-center gap-2">
            {REVIEWS.map((_, dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => setCurrent(dotIndex)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  dotIndex === current
                    ? 'w-6 h-2 bg-neutral-900'
                    : 'w-2 h-2 bg-neutral-300 hover:bg-neutral-400'
                }`}
                aria-label={`Go to review ${dotIndex + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            className="p-2 sm:p-2.5 rounded-full bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 shadow-sm transition-colors cursor-pointer"
            aria-label="Next Review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
