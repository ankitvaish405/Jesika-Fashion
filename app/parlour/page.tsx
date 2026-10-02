'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Phone, MapPin, Clock, CheckCircle2, Star, ArrowRight, Heart, ZoomIn, X } from 'lucide-react';

const PARLOUR_SERVICES = [
  {
    category: 'Bridal & Party Makeup',
    services: [
      { name: 'HD Bridal Makeup & Hair Styling', desc: 'Flawless camera-ready finish with premium cosmetic products, lashes & dupatta draping.' },
      { name: 'Airbrush Luxury Bridal Look', desc: 'Ultra-lightweight, 24-hour waterproof bridal finish with radiant glow.' },
      { name: 'Engagement & Sagan Makeover', desc: 'Elegant sophisticated party styling tailored to your lehenga/gown.' },
      { name: 'Party & Reception Makeup', desc: 'Glamorous festive makeup for bridesmaids, family & special celebrations.' },
    ],
    image: '/parlor/7.jpeg',
  },
  {
    category: 'Hair Styling & Treatments',
    services: [
      { name: 'Nutritive Hair Spa & Deep Conditioning', desc: 'Restores dry, damaged hair with botanical oils and keratin serum infusion.' },
      { name: 'Professional Hair Smoothening & Keratin', desc: 'Silky frizz-free hair with long-lasting salon shine and manageability.' },
      { name: 'Designer Haircut & Blow-dry', desc: 'Face-flattering cuts and personalized styling by experienced salon artists.' },
      { name: 'Global Hair Color & Balayage Highlights', desc: 'Ammonia-free rich tones and trendy caramel / burgundy streaks.' },
    ],
    image: '/parlor/1.jpeg',
  },
  {
    category: 'Skin Glow & Facials',
    services: [
      { name: 'O3+ & Gold Radiance Bridal Facial', desc: 'Deep cellular cleansing, exfoliation, and 24K gold serum for luminous glass skin.' },
      { name: 'Hydra-Infusion Glow Therapy', desc: 'Intensive moisture replenishment and pore vacuum cleansing for fresh dewy texture.' },
      { name: 'Organic Herbal De-Tan & Clean-up', desc: 'Removes sun tan, pigmentation, and impurities with natural botanical extracts.' },
      { name: 'Anti-Aging Collagen Rejuvenation', desc: 'Firming massage therapy with peptide concentrates to soften fine lines.' },
    ],
    image: '/parlor/3.jpeg',
  },
];

const PACKAGES = [
  {
    name: 'Royal Bridal Package',
    badge: 'Most Popular',
    features: [
      'HD Bridal Makeup with Lashes & Lenses',
      'Designer Hair Styling & Dupatta Setting',
      'Pre-Bridal Gold Radiance Facial',
      'Full Body Rica Waxing & Body Polishing',
      'Deluxe Manicure & Pedicure',
    ],
  },
  {
    name: 'Radiant Pre-Bridal Glow',
    badge: 'Pre-Wedding',
    features: [
      '2x Hydra-Facial Sessions (15 days apart)',
      'Hair Spa & Deep Conditioning',
      'Complete De-Tan Body Pack',
      'Hands & Feet Spa Scrub & Polish',
      'Threading & Upper Lip Finishing',
    ],
  },
  {
    name: 'Party Glam Duo',
    badge: 'Special Events',
    features: [
      'High-Definition Party Makeup',
      'Curls / Straightening / Updo Hair Styling',
      'Saree or Dupatta Draping Assistance',
      'Herbal Express Clean-up',
    ],
  },
];

export default function ParlourPage() {
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', service: 'Bridal Makeup', date: '' });
  const [selectedMedia, setSelectedMedia] = useState<{ type: 'image' | 'video', src: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => setBookingSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans pb-24">
      {/* 1. Header Banner - Elegant Split Layout */}
      <div className="w-full min-h-[90vh] sm:min-h-screen bg-white relative flex items-center border-b border-neutral-200 py-12">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-16">
          
          {/* Left Content */}
          <div className="flex-1 w-full max-w-2xl z-10 pt-10 md:pt-0">
            <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] leading-[1.05] font-sans font-medium tracking-tighter text-[#2c3d2e] mb-6">
              Get Your <br className="hidden sm:block" />
              Natural <br className="hidden sm:block" />
              Skin
            </h1>
            
            <p className="text-[#5b6b5c] text-base lg:text-lg max-w-md font-medium leading-relaxed mb-10">
              The natural color of the skin is your identity and originality, don't change it, we will help you in the best way to protect it.
            </p>

            {/* Badges/Tags */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 bg-[#f4f6f3] px-4 py-2.5 rounded-none text-xs lg:text-sm font-bold text-amber-900 border border-amber-300/80 bg-amber-50">
                <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                EST. 2003 • VARANASI
              </span>
              <span className="inline-flex items-center gap-2 bg-[#f4f6f3] px-4 py-2.5 rounded-none text-xs lg:text-sm font-semibold text-[#2c3d2e] border border-[#e2e8e0]">
                <span className="w-2 h-2 rounded-full bg-[#8b9b8c]"></span>
                NC10 MAC FOUNDATION
              </span>
              <span className="inline-flex items-center gap-2 bg-[#f4f6f3] px-4 py-2.5 rounded-none text-xs lg:text-sm font-semibold text-[#2c3d2e] border border-[#e2e8e0]">
                <span className="w-2 h-2 rounded-full bg-[#e3d5ca]"></span>
                Herbal Care
              </span>
              <a href="tel:+919839200169" className="inline-flex items-center gap-2 bg-[#2c3d2e] text-white px-6 py-2.5 rounded-none text-xs lg:text-sm font-semibold hover:bg-[#1f2b20] transition-colors shadow-sm">
                Book Now
              </a>
            </div>
          </div>

          {/* Right: Video */}
          <div className="flex-1 w-full max-w-sm lg:max-w-md relative z-10 flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="w-full flex justify-center items-center">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                controls
                className="w-auto h-auto max-w-full max-h-[70vh] lg:max-h-[80vh] rounded-2xl shadow-xl border border-neutral-200 block"
              >
                <source src="/parlor/Beauty-Parlor.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          
        </div>
      </div>

      {/* 2. Brand Value Pillars / Trust Badges - Pure White (Directly below Hero) */}
      <section className="border-b border-neutral-200 bg-white py-8 sm:py-9">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 flex items-center justify-center bg-neutral-50 border border-neutral-200 shrink-0 shadow-2xs">
                <Sparkles className="w-6 h-6 text-neutral-800" strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm sm:text-[15px] font-semibold text-neutral-900 whitespace-nowrap tracking-normal">
                  Certified Artists
                </h4>
                <p className="text-xs text-neutral-500 mt-0.5 leading-snug font-normal">
                  Trained in HD & Airbrush
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 flex items-center justify-center bg-neutral-50 border border-neutral-200 shrink-0 shadow-2xs">
                <Heart className="w-6 h-6 text-neutral-800" strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm sm:text-[15px] font-semibold text-neutral-900 whitespace-nowrap tracking-normal">
                  Premium Products
                </h4>
                <p className="text-xs text-neutral-500 mt-0.5 leading-snug font-normal">
                  100% genuine brands
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 flex items-center justify-center bg-neutral-50 border border-neutral-200 shrink-0 shadow-2xs">
                <Clock className="w-6 h-6 text-neutral-800" strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm sm:text-[15px] font-semibold text-neutral-900 whitespace-nowrap tracking-normal">
                  Open 7 Days
                </h4>
                <p className="text-xs text-neutral-500 mt-0.5 leading-snug font-normal">
                  10:00 AM – 9:30 PM (Thu: 9 PM)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 flex items-center justify-center bg-neutral-50 border border-neutral-200 shrink-0 shadow-2xs">
                <Star className="w-6 h-6 text-neutral-800" strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm sm:text-[15px] font-semibold text-neutral-900 whitespace-nowrap tracking-normal">
                  Hygiene First
                </h4>
                <p className="text-xs text-neutral-500 mt-0.5 leading-snug font-normal">
                  Sanitized & single-use
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Services Menu - Pure White */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-2">Our Services</p>
          <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-neutral-900">
            Parlour Treatments & Care
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-2 font-normal">Customized beauty treatments crafted to enhance your natural beauty.</p>
        </div>

        <div className="space-y-16">
          {PARLOUR_SERVICES.map((cat, i) => (
            <div
              key={cat.category}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-6 sm:p-10 bg-white border border-neutral-200 rounded-2xl shadow-xs"
            >
              <div className={`lg:col-span-4 relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-neutral-100 border border-neutral-200 ${i % 2 !== 0 ? 'lg:order-last' : ''}`}>
                <Image
                  src={cat.image}
                  alt={cat.category}
                  fill
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
              </div>

              <div className="lg:col-span-8 space-y-6">
                <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold block">
                  Category 0{i + 1}
                </span>
                <h3 className="text-2xl font-sans font-semibold text-neutral-900">
                  {cat.category}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {cat.services.map((srv, sIdx) => (
                    <div key={sIdx} className="p-4 bg-[#f8f9fa] border border-neutral-200 rounded-xl">
                      <h4 className="text-sm font-semibold text-neutral-900 mb-1">
                        {srv.name}
                      </h4>
                      <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                        {srv.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href="tel:+919839200169"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-900 hover:text-neutral-600"
                  >
                    <span>Book For This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Work Gallery - Beautiful Masonry/Grid */}
      <section className="bg-white py-20 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-2">Our Portfolio</p>
            <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-neutral-900">
              Glimpses of Our Work
            </h2>
            <p className="text-sm text-neutral-600 mt-2 font-normal">Explore our latest bridal makeovers, hair transformations, and premium beauty services.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 auto-rows-[200px] sm:auto-rows-[250px]">
            {/* 1. video.mp4 */}
            <div 
              onClick={() => setSelectedMedia({ type: 'video', src: '/parlor/video.mp4' })}
              className="relative rounded-2xl overflow-hidden group shadow-sm col-span-2 row-span-2 bg-neutral-900 cursor-pointer"
            >
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                <source src="/parlor/video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                <ZoomIn className="text-white w-8 h-8" />
              </div>
            </div>
            
            {/* 2. 1.jpeg */}
            <div 
              onClick={() => setSelectedMedia({ type: 'image', src: '/parlor/1.jpeg' })}
              className="relative rounded-2xl overflow-hidden group shadow-sm col-span-1 row-span-1 bg-neutral-100 cursor-pointer"
            >
              <Image src="/parlor/1.jpeg" alt="Gallery 1" fill quality={100} sizes="(max-width: 768px) 50vw, 350px" className="object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                <ZoomIn className="text-white w-8 h-8" />
              </div>
            </div>
            
            {/* 3. 2.jpeg */}
            <div 
              onClick={() => setSelectedMedia({ type: 'image', src: '/parlor/2.jpeg' })}
              className="relative rounded-2xl overflow-hidden group shadow-sm col-span-1 row-span-1 bg-neutral-100 cursor-pointer"
            >
              <Image src="/parlor/2.jpeg" alt="Gallery 2" fill quality={100} sizes="(max-width: 768px) 50vw, 350px" className="object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                <ZoomIn className="text-white w-8 h-8" />
              </div>
            </div>
            
            {/* 4. 3.jpeg */}
            <div 
              onClick={() => setSelectedMedia({ type: 'image', src: '/parlor/3.jpeg' })}
              className="relative rounded-2xl overflow-hidden group shadow-sm col-span-1 row-span-1 bg-neutral-100 cursor-pointer"
            >
              <Image src="/parlor/3.jpeg" alt="Gallery 3" fill quality={100} sizes="(max-width: 768px) 50vw, 350px" className="object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                <ZoomIn className="text-white w-8 h-8" />
              </div>
            </div>
            
            {/* 5. 4.jpeg */}
            <div 
              onClick={() => setSelectedMedia({ type: 'image', src: '/parlor/4.jpeg' })}
              className="relative rounded-2xl overflow-hidden group shadow-sm col-span-1 row-span-1 bg-neutral-100 cursor-pointer"
            >
              <Image src="/parlor/4.jpeg" alt="Gallery 4" fill quality={100} sizes="(max-width: 768px) 50vw, 350px" className="object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                <ZoomIn className="text-white w-8 h-8" />
              </div>
            </div>
            
            {/* 6. 5.jpeg */}
            <div 
              onClick={() => setSelectedMedia({ type: 'image', src: '/parlor/5.jpeg' })}
              className="relative rounded-2xl overflow-hidden group shadow-sm col-span-1 row-span-1 bg-neutral-100 cursor-pointer"
            >
              <Image src="/parlor/5.jpeg" alt="Gallery 5" fill quality={100} sizes="(max-width: 768px) 50vw, 350px" className="object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                <ZoomIn className="text-white w-8 h-8" />
              </div>
            </div>
            
            {/* 7. 6.jpeg */}
            <div 
              onClick={() => setSelectedMedia({ type: 'image', src: '/parlor/6.jpeg' })}
              className="relative rounded-2xl overflow-hidden group shadow-sm col-span-1 row-span-1 bg-neutral-100 cursor-pointer"
            >
              <Image src="/parlor/6.jpeg" alt="Gallery 6" fill quality={100} sizes="(max-width: 768px) 50vw, 350px" className="object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                <ZoomIn className="text-white w-8 h-8" />
              </div>
            </div>
            
            {/* 8. 7.jpeg */}
            <div 
              onClick={() => setSelectedMedia({ type: 'image', src: '/parlor/7.jpeg' })}
              className="relative rounded-2xl overflow-hidden group shadow-sm col-span-2 row-span-1 bg-neutral-100 cursor-pointer"
            >
              <Image src="/parlor/7.jpeg" alt="Gallery 7" fill quality={100} sizes="(max-width: 768px) 100vw, 700px" className="object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                <ZoomIn className="text-white w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bridal & Special Packages - Luxury Rich Dark Background */}
      <section className="bg-[#181210] text-[#faf7f2] py-20 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-2">Curated Value</p>
            <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-white">
              Bridal & Festive Packages
            </h2>
            <p className="text-sm text-neutral-400 mt-2 font-normal">All-inclusive makeover packages designed for weddings and festivities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg) => (
              <div key={pkg.name} className="bg-[#221a17] border border-neutral-800 rounded-2xl p-8 flex flex-col justify-between shadow-sm">
                <div>
                  <span className="inline-block px-3 py-1 bg-white/10 text-white rounded-full text-xs font-medium tracking-wide mb-4">
                    {pkg.badge}
                  </span>
                  <h3 className="text-xl font-sans font-semibold tracking-tight text-white mb-6">
                    {pkg.name}
                  </h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-neutral-300">
                    {pkg.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-800">
                  <a
                    href="tel:+919839200169"
                    className="block w-full text-center py-3 bg-white hover:bg-neutral-100 text-neutral-900 rounded-xl text-xs font-semibold tracking-wide transition-colors shadow-sm"
                  >
                    Book Slot
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Quick Appointment Booking Form - Soft Light Background */}
      <section className="bg-[#f8f9fa] border-b border-neutral-200 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-neutral-200 rounded-2xl p-8 sm:p-12 shadow-sm">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold block mb-1">
                Reserve Your Time
              </span>
              <h3 className="text-2xl sm:text-3xl font-sans font-semibold tracking-tight text-neutral-900">
                Book A Salon Appointment
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1 font-normal">
                Submit your preferred date and service, or call us directly at <strong>+91 98392 00169</strong>.
              </p>
            </div>

            {bookingSuccess && (
              <div className="mb-6 p-4 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-800 text-sm flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Thank you! Your appointment request has been noted. We will confirm with you shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Pooja Sharma"
                    className="w-full rounded-xl border border-neutral-300 p-3.5 outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors bg-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 98765 43210"
                    className="w-full rounded-xl border border-neutral-300 p-3.5 outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors bg-white text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full rounded-xl border border-neutral-300 p-3.5 outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors bg-white text-sm text-neutral-900"
                  >
                    <option value="Bridal Makeup">Bridal / Reception Makeup</option>
                    <option value="Hair Spa & Care">Hair Spa & Smoothening</option>
                    <option value="Facial & Glow">Gold / Hydra Facial</option>
                    <option value="Pre-Bridal Package">Pre-Bridal Full Package</option>
                    <option value="Manicure / Pedicure">Manicure, Pedicure & Waxing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full rounded-xl border border-neutral-300 p-3.5 outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors bg-white text-sm text-neutral-900"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-sm tracking-wide transition-colors shadow-sm cursor-pointer"
              >
                Request Appointment Slot
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-sm">
          <button 
            onClick={() => setSelectedMedia(null)}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/70 hover:text-white z-50 p-2 bg-black/50 rounded-full transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center">
            {selectedMedia.type === 'video' ? (
              <video 
                autoPlay 
                loop 
                controls 
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              >
                <source src={selectedMedia.src} type="video/mp4" />
              </video>
            ) : (
              <Image 
                src={selectedMedia.src} 
                alt="Expanded View" 
                fill 
                className="object-contain" 
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
