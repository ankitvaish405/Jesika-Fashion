'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Phone, MapPin, Clock, Calendar, CheckCircle2, Star, ArrowRight, Heart } from 'lucide-react';

const PARLOUR_SERVICES = [
  {
    category: 'Bridal & Party Makeup',
    services: [
      { name: 'HD Bridal Makeup & Hair Styling', desc: 'Flawless camera-ready finish with premium cosmetic products, lashes & dupatta draping.' },
      { name: 'Airbrush Luxury Bridal Look', desc: 'Ultra-lightweight, 24-hour waterproof bridal finish with radiant glow.' },
      { name: 'Engagement & Sagan Makeover', desc: 'Elegant sophisticated party styling tailored to your lehenga/gown.' },
      { name: 'Party & Reception Makeup', desc: 'Glamorous festive makeup for bridesmaids, family & special celebrations.' },
    ],
    image: '/2.jpeg',
  },
  {
    category: 'Hair Styling & Treatments',
    services: [
      { name: 'Nutritive Hair Spa & Deep Conditioning', desc: 'Restores dry, damaged hair with botanical oils and keratin serum infusion.' },
      { name: 'Professional Hair Smoothening & Keratin', desc: 'Silky frizz-free hair with long-lasting salon shine and manageability.' },
      { name: 'Designer Haircut & Blow-dry', desc: 'Face-flattering cuts and personalized styling by experienced salon artists.' },
      { name: 'Global Hair Color & Balayage Highlights', desc: 'Ammonia-free rich tones and trendy caramel / burgundy streaks.' },
    ],
    image: '/4.jpeg',
  },
  {
    category: 'Skin Glow & Facials',
    services: [
      { name: 'O3+ & Gold Radiance Bridal Facial', desc: 'Deep cellular cleansing, exfoliation, and 24K gold serum for luminous glass skin.' },
      { name: 'Hydra-Infusion Glow Therapy', desc: 'Intensive moisture replenishment and pore vacuum cleansing for fresh dewy texture.' },
      { name: 'Organic Herbal De-Tan & Clean-up', desc: 'Removes sun tan, pigmentation, and impurities with natural botanical extracts.' },
      { name: 'Anti-Aging Collagen Rejuvenation', desc: 'Firming massage therapy with peptide concentrates to soften fine lines.' },
    ],
    image: '/12.jpeg',
  },
  {
    category: 'Hands, Feet & Grooming',
    services: [
      { name: 'Deluxe Manicure & Pedicure Spa', desc: 'Relaxing foot soak, dead-skin buffing, massage, and nail care.' },
      { name: 'Rica Liposoluble Waxing (Full Body / Arms / Legs)', desc: 'Painless, gentle on sensitive skin, leaving arms and legs velvet-smooth.' },
      { name: 'Nail Extension & Gel Artistry', desc: 'Trendy French tips, chrome shimmer, and bridal nail art designs.' },
      { name: 'Precision Threading & Brow Shaping', desc: 'Clean, defined arches and gentle facial threading.' },
    ],
    image: '/14.jpeg',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => setBookingSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#fbf8f4] text-[#29201d] font-sans pb-24">
      {/* 1. Header Banner */}
      <div className="border-b border-[#e8ded2] bg-[#f5ede5]">
        <div className="max-w-6xl mx-auto px-4 py-14 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#9d735d] font-semibold mb-2">
            Jesika Fashion & Salon
          </p>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold uppercase tracking-widest text-[#29201d]">
            Beauty Parlour & Salon
          </h1>
          <p className="mt-3 text-sm text-[#736359] max-w-xl mx-auto tracking-wide font-light">
            Varanasi’s premier luxury parlour offering bridal makeover, hair transformations, skin brightening facials, and grooming services.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#29201d]">
            <a
              href="tel:+918924099911"
              className="inline-flex items-center gap-2 bg-[#9d735d] text-white px-6 py-3 uppercase tracking-wider hover:bg-[#855d4a] transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Book Appointment: +91 89240 99911</span>
            </a>
            <a
              href="https://maps.app.goo.gl/MVMphJJv31agtDvG6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-[#e8ded2] px-6 py-3 uppercase tracking-wider hover:border-[#9d735d] transition-colors"
            >
              <MapPin className="w-4 h-4 text-[#9d735d]" />
              <span>Near Panch Koshi Chauraha, Varanasi</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Key Parlour Features */}
      <section className="border-b border-[#e8ded2] bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="p-4">
              <Sparkles className="w-6 h-6 text-[#9d735d] mx-auto mb-2" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#29201d]">Certified Artists</h4>
              <p className="text-[11px] text-[#736359] mt-0.5">Trained in HD & Airbrush techniques</p>
            </div>
            <div className="p-4">
              <Heart className="w-6 h-6 text-[#9d735d] mx-auto mb-2" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#29201d]">Premium Products</h4>
              <p className="text-[11px] text-[#736359] mt-0.5">100% genuine & skin-friendly brands</p>
            </div>
            <div className="p-4">
              <Clock className="w-6 h-6 text-[#9d735d] mx-auto mb-2" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#29201d]">Open 7 Days</h4>
              <p className="text-xs sm:text-sm font-medium text-[#29201d] mt-1">10:00 AM – 9:30 PM</p>
              <p className="text-[11px] text-[#9d735d] font-semibold">(Thu: till 9:00 PM)</p>
            </div>
            <div className="p-4">
              <Star className="w-6 h-6 text-[#9d735d] mx-auto mb-2" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#29201d]">Hygiene First</h4>
              <p className="text-[11px] text-[#736359] mt-0.5">Sanitized kits & single-use disposables</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Services Menu */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#9d735d] font-semibold mb-2">Our Services</p>
          <h2 className="text-3xl font-serif font-bold uppercase tracking-wider text-[#29201d]">
            Parlour Treatments & Care
          </h2>
          <p className="text-sm text-[#736359] mt-2 font-light">Customized beauty treatments crafted to enhance your natural beauty.</p>
        </div>

        <div className="space-y-16">
          {PARLOUR_SERVICES.map((cat, i) => (
            <div
              key={cat.category}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-6 sm:p-10 bg-white border border-[#e8ded2] shadow-xs ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:col-span-4 relative aspect-[4/5] w-full overflow-hidden bg-[#f3ede5]">
                <Image
                  src={cat.image}
                  alt={cat.category}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="lg:col-span-8 space-y-6">
                <span className="text-xs uppercase tracking-[0.25em] text-[#9d735d] font-semibold block">
                  Category 0{i + 1}
                </span>
                <h3 className="text-2xl font-serif font-bold uppercase tracking-wider text-[#29201d]">
                  {cat.category}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  {cat.services.map((srv, sIdx) => (
                    <div key={sIdx} className="p-4 bg-[#fbf8f4] border border-[#e8ded2]">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#29201d] mb-1">
                        {srv.name}
                      </h4>
                      <p className="text-xs text-[#736359] leading-relaxed font-light">
                        {srv.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href="tel:+918924099911"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9d735d] hover:text-[#845d49]"
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

      {/* 4. Bridal & Special Packages */}
      <section className="bg-[#f5ede5] py-20 border-y border-[#e8ded2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-[#9d735d] font-semibold mb-2">Curated Value</p>
            <h2 className="text-3xl font-serif font-bold uppercase tracking-wider text-[#29201d]">
              Bridal & Festive Packages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg) => (
              <div key={pkg.name} className="bg-white border border-[#e8ded2] p-8 flex flex-col justify-between shadow-xs">
                <div>
                  <span className="inline-block px-3 py-1 bg-[#f5ebe3] text-[#8c5a47] text-[10px] uppercase font-bold tracking-widest mb-4">
                    {pkg.badge}
                  </span>
                  <h3 className="text-xl font-serif font-bold tracking-tight text-[#29201d] mb-6">
                    {pkg.name}
                  </h3>
                  <ul className="space-y-3 text-xs text-[#574941]">
                    {pkg.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#9d735d] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-[#f0e6dc]">
                  <a
                    href="tel:+918924099911"
                    className="block w-full text-center py-3 bg-[#9d735d] hover:bg-[#855d4a] text-white text-xs font-bold uppercase tracking-widest transition-colors shadow-sm"
                  >
                    Inquire / Book Slot
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Quick Appointment Booking Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="bg-white border border-[#e8ded2] p-8 sm:p-12 shadow-xs">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-[0.25em] text-[#9d735d] font-semibold block mb-1">
              Reserve Your Time
            </span>
            <h3 className="text-2xl font-serif font-bold uppercase tracking-wider text-[#29201d]">
              Book A Salon Appointment
            </h3>
            <p className="text-xs text-[#736359] mt-1 font-light">
              Submit your preferred date and service, or call us directly at <strong>+91 89240 99911</strong>.
            </p>
          </div>

          {bookingSuccess && (
            <div className="mb-6 p-4 border border-[#9d735d]/40 bg-[#f5ebe3] text-[#8c5a47] text-sm flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#9d735d] shrink-0" />
              <span>Thank you! Your appointment request has been noted. We will confirm with you shortly.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold uppercase text-[#736359] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Pooja Sharma"
                  className="w-full border border-[#e8ded2] p-3 outline-none focus:border-[#9d735d] transition-colors bg-[#fbf8f4] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-[#736359] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 98765 43210"
                  className="w-full border border-[#e8ded2] p-3 outline-none focus:border-[#9d735d] transition-colors bg-[#fbf8f4] text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold uppercase text-[#736359] mb-2">
                  Service Interested In
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full border border-[#e8ded2] p-3 outline-none focus:border-[#9d735d] transition-colors bg-[#fbf8f4] text-sm text-[#29201d]"
                >
                  <option value="Bridal Makeup">Bridal / Reception Makeup</option>
                  <option value="Hair Spa & Care">Hair Spa & Smoothening</option>
                  <option value="Facial & Glow">Gold / Hydra Facial</option>
                  <option value="Pre-Bridal Package">Pre-Bridal Full Package</option>
                  <option value="Manicure / Pedicure">Manicure, Pedicure & Waxing</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-[#736359] mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full border border-[#e8ded2] p-3 outline-none focus:border-[#9d735d] transition-colors bg-[#fbf8f4] text-sm text-[#29201d]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#9d735d] hover:bg-[#855d4a] text-white font-bold text-xs uppercase tracking-widest transition-colors shadow-sm cursor-pointer"
            >
              Request Appointment Slot
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
