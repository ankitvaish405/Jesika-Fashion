'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Phone, MapPin, Clock, CheckCircle2, Star, ArrowRight, Heart } from 'lucide-react';

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
    <div className="min-h-screen bg-white text-neutral-900 font-sans pb-24">
      {/* 1. Header Banner - Crisp White */}
      <div className="border-b border-neutral-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-2">
            Jesika Fashion & Salon
          </p>
          <h1 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-neutral-900">
            Beauty Parlour & Salon
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-xl mx-auto font-normal">
            Varanasi’s premier luxury parlour offering bridal makeover, hair transformations, skin brightening facials, and grooming services.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <a
              href="tel:+918924099911"
              className="inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3.5 rounded-xl hover:bg-neutral-800 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Book Appointment: +91 89240 99911</span>
            </a>
            <a
              href="https://maps.app.goo.gl/MVMphJJv31agtDvG6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-neutral-300 text-neutral-800 px-6 py-3.5 rounded-xl hover:bg-neutral-50 transition-colors"
            >
              <MapPin className="w-4 h-4 text-neutral-900" />
              <span>Near Panch Koshi Chauraha, Varanasi</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Key Parlour Features - Soft Light Background */}
      <section className="border-b border-neutral-200 bg-[#f8f9fa] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-white rounded-xl border border-neutral-200 shadow-xs">
              <Sparkles className="w-6 h-6 text-neutral-900 mx-auto mb-2" />
              <h4 className="text-sm font-semibold text-neutral-900">Certified Artists</h4>
              <p className="text-xs text-neutral-500 mt-1">Trained in HD & Airbrush techniques</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-neutral-200 shadow-xs">
              <Heart className="w-6 h-6 text-neutral-900 mx-auto mb-2" />
              <h4 className="text-sm font-semibold text-neutral-900">Premium Products</h4>
              <p className="text-xs text-neutral-500 mt-1">100% genuine & skin-friendly brands</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-neutral-200 shadow-xs">
              <Clock className="w-6 h-6 text-neutral-900 mx-auto mb-2" />
              <h4 className="text-sm font-semibold text-neutral-900">Open 7 Days</h4>
              <p className="text-xs font-semibold text-neutral-900 mt-1">10:00 AM – 9:30 PM</p>
              <p className="text-[11px] text-neutral-500">(Thu: till 9:00 PM)</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-neutral-200 shadow-xs">
              <Star className="w-6 h-6 text-neutral-900 mx-auto mb-2" />
              <h4 className="text-sm font-semibold text-neutral-900">Hygiene First</h4>
              <p className="text-xs text-neutral-500 mt-1">Sanitized kits & single-use disposables</p>
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
              <div className="lg:col-span-4 relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-neutral-100 border border-neutral-200">
                <Image
                  src={cat.image}
                  alt={cat.category}
                  fill
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, 50vw"
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
                    href="tel:+918924099911"
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
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-800">
                  <a
                    href="tel:+918924099911"
                    className="block w-full text-center py-3 bg-white hover:bg-neutral-100 text-neutral-900 rounded-xl text-xs font-semibold tracking-wide transition-colors shadow-sm"
                  >
                    Inquire / Book Slot
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
                Submit your preferred date and service, or call us directly at <strong>+91 89240 99911</strong>.
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
    </div>
  );
}
