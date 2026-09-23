import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, Target, Shirt, Sparkles, Scissors, Clock, Star, ExternalLink, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'About Us | Jesika Fashion & Cosmetics',
  description: 'The story, craftsmanship, philosophy, and master artisans behind Jesika Fashion & Luxury Cosmetics.',
};

const ARTISANS = [
  {
    name: 'Helene Laurent',
    role: 'Head of Haute Couture Pattern & Draping',
    image: '/25.jpeg',
    desc: 'With 22 years of Paris couture experience, Helene oversees the hand-cut silhouette and tailoring standards of every Jesika garment.',
  },
  {
    name: 'Marc Valois',
    role: 'Master Textile & Embroidery Artisan',
    image: '/26.jpeg',
    desc: 'Specializing in delicate French lace and hand-beaded silk, Marc brings architectural structure to life.',
  },
  {
    name: 'Dr. Camille Moreau',
    role: 'Chief of Cosmetic Formulation & Dermatology',
    image: '/27.jpeg',
    desc: 'Directs the bio-compatible cosmetic lab, blending pure botanical botanics with clinically proven anti-aging peptides.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans pb-28">
      {/* 1. Header Banner */}
      <div className="border-b border-neutral-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <p className="text-xs uppercase tracking-widest text-neutral-500 font-medium mb-2">
            Maison Jesika
          </p>
          <h1 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-neutral-900">
            Our Story & Heritage
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-lg mx-auto font-normal">
            Where heritage Banarasi weaves meet modern family styling and professional parlour care.
          </p>
        </div>
      </div>

      {/* 2. Hero Editorial Story (Images 1 & 5) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-neutral-100 border border-neutral-200 shadow-sm">
              <Image
                src="/1.jpeg"
                alt="Jesika Couture Silhouette"
                fill
                priority
                quality={95}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-neutral-100 border border-neutral-200 shadow-sm translate-y-6">
              <Image
                src="/5.jpeg"
                alt="Jesika Atelier Studio"
                fill
                quality={95}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 lg:pl-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-semibold tracking-tight text-neutral-900 leading-snug">
              Complete Family Fashion & Beauty Excellence Under One Roof
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Jesika Fashion was established in Varanasi with a vision to become the ultimate all-in-one destination for complete family styling. We bring together curated collections for Women’s wear, Men’s wear, and Kids’ wear alongside our dedicated, full-service Beauty Parlour.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Whether you are preparing for a wedding with our royal bridal lehengas, silk Banarasi sarees, and HD bridal makeup, shopping for festive sherwanis for men, or selecting charming party outfits for your children, Jesika Fashion provides exceptional quality, in-house tailoring alterations, and dedicated personal care.
            </p>

            <div className="pt-6 grid grid-cols-3 gap-6 border-t border-neutral-200">
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-sans text-neutral-900">All-In-One</p>
                <p className="text-xs text-neutral-500 font-medium mt-1">Clothing & Parlour</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-sans text-neutral-900">28k+</p>
                <p className="text-xs text-neutral-500 font-medium mt-1">Happy Patrons</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-sans text-neutral-900">7 Days</p>
                <p className="text-xs text-neutral-500 font-medium mt-1">Open All Week</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Vision & Mission - Soft Light Background */}
      <section className="bg-[#f8f9fa] border-y border-neutral-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-neutral-900">
              Our Vision & Mission
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2 font-normal">
              Rooted in Varanasi’s timeless traditions, crafted for modern family celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="p-8 sm:p-10 bg-white border border-neutral-200 rounded-2xl shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-800 mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-sans font-semibold text-neutral-900 mb-3">
                  Our Vision
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
                  To be Varanasi’s most trusted all-in-one fashion and beauty landmark, where every family discovers heirloom-grade clothing and bespoke salon artistry under one welcoming roof. We envision a seamless shopping experience where heritage Banarasi craftsmanship, contemporary trends, and personalized parlour care unite effortlessly.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="p-8 sm:p-10 bg-white border border-neutral-200 rounded-2xl shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-800 mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-sans font-semibold text-neutral-900 mb-3">
                  Our Mission
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
                  To provide families with exquisite attire across Women’s, Men’s, and Kids’ collections with uncompromised fabric quality, honest pricing, and prompt in-house alteration services. Simultaneously, our mission is to empower every bride and customer with certified salon transformations and dermatologically sound beauty essentials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us? - Luxury Rich Dark Background */}
      <section className="bg-[#181210] text-[#faf7f2] border-y border-neutral-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-white">
              Why Choose Us?
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 font-normal">
              Crafting joyful shopping and makeover experiences for families across Varanasi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-[#221a17] p-8 border border-neutral-800 rounded-2xl shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
                  <Shirt className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-white mb-2 font-sans">
                  All-In-One Family Store
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  Complete wardrobes for Women, Men, and Children under one roof. No running between multiple markets for family wedding shopping.
                </p>
              </div>
            </div>

            <div className="bg-[#221a17] p-8 border border-neutral-800 rounded-2xl shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-white mb-2 font-sans">
                  In-House Beauty Parlour
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  A dedicated salon suite offering HD bridal makeup, pre-bridal packages, hair styling, and facials with certified beauty professionals.
                </p>
              </div>
            </div>

            <div className="bg-[#221a17] p-8 border border-neutral-800 rounded-2xl shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
                  <Scissors className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-white mb-2 font-sans">
                  Fast Master Alterations
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  Our in-house master tailors provide custom sizing, fall & pico, and alterations in 30 to 60 minutes while you explore the store.
                </p>
              </div>
            </div>

            <div className="bg-[#221a17] p-8 border border-neutral-800 rounded-2xl shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-white mb-2 font-sans">
                  Open All 7 Days
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  Convenient timings 10:00 AM – 9:30 PM (Thu till 9:00 PM) at Panch Koshi Chauraha, Asapur with convenient road access and parking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Trust Badges & Google Rating - Pure White */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="bg-white border border-neutral-200 rounded-2xl p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
            
            {/* Badge 1: Google Rating */}
            <div className="flex items-center gap-4 pt-4 md:pt-0">
              <div className="w-14 h-14 rounded-full bg-neutral-50 border border-neutral-200 flex items-center justify-center shrink-0">
                <svg className="w-7 h-7" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" />
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" />
                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z" />
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
                </svg>
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-bold text-neutral-900">4.5</span>
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-xs font-semibold text-neutral-900 mt-0.5">Google Business Rating</p>
                <a
                  href="https://maps.app.goo.gl/MVMphJJv31agtDvG6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-neutral-600 hover:text-black hover:underline inline-flex items-center gap-1 mt-0.5 font-medium"
                >
                  <span>111+ Happy Local Customers</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Badge 2: Complete Family Destination */}
            <div className="flex items-center gap-4 pt-6 md:pt-0 md:pl-8">
              <div className="w-14 h-14 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-800 shrink-0">
                <Shirt className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xl font-sans font-bold text-neutral-900">All-In-One</p>
                <p className="text-xs font-semibold text-neutral-900 mt-0.5">Fashion & Beauty Store</p>
                <p className="text-[11px] text-neutral-500 mt-0.5">Women, Men, Kids & Parlour</p>
              </div>
            </div>

            {/* Badge 3: Master Fitting & Quality */}
            <div className="flex items-center gap-4 pt-6 lg:pt-0 lg:pl-8">
              <div className="w-14 h-14 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-800 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xl font-sans font-bold text-neutral-900">100% Quality</p>
                <p className="text-xs font-semibold text-neutral-900 mt-0.5">Authentic Varanasi Weaves</p>
                <p className="text-[11px] text-neutral-500 mt-0.5">Custom Master Alterations</p>
              </div>
            </div>

            {/* Badge 4: Open 7 Days */}
            <div className="flex items-center gap-4 pt-6 lg:pt-0 lg:pl-8">
              <div className="w-14 h-14 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-800 shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xl font-sans font-bold text-neutral-900">Open 7 Days</p>
                <p className="text-xs font-semibold text-neutral-900 mt-0.5">Panch Koshi, Asapur</p>
                <p className="text-[11px] text-neutral-500 mt-0.5">10:00 AM – 9:30 PM (Thu 9:00 PM)</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Master Artisans & Formulators - Soft Light Background */}
      <section className="bg-[#f8f9fa] border-y border-neutral-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="text-3xl font-sans font-semibold tracking-tight text-neutral-900">
              Master Artisans Behind The Brand
            </h2>
            <p className="text-sm text-neutral-600 mt-2 font-normal">The skilled hands and visionary minds shaping every silhouette and formula.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ARTISANS.map((artisan, i) => (
              <div key={i} className="border border-neutral-200 bg-white rounded-2xl overflow-hidden flex flex-col shadow-xs">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={artisan.image}
                    alt={artisan.name}
                    fill
                    quality={95}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-sans font-semibold text-neutral-900">{artisan.name}</h3>
                    <p className="text-xs text-neutral-500 font-medium mt-0.5 mb-3">{artisan.role}</p>
                    <p className="text-xs text-neutral-600 leading-relaxed font-normal">{artisan.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Banner - Pure White */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-sans font-semibold tracking-tight text-neutral-900 mb-3">
          Experience Jesika Firsthand
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 max-w-md mx-auto mb-8 font-normal">
          Visit our Varanasi store near Panch Koshi Chauraha or explore our beauty parlour services.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-neutral-900 text-white text-xs font-semibold rounded-lg tracking-wide hover:bg-neutral-800 transition-colors shadow-sm"
          >
            Contact Store
          </Link>
          <Link
            href="/parlour"
            className="w-full sm:w-auto px-8 py-3.5 border border-neutral-300 text-neutral-800 text-xs font-semibold rounded-lg tracking-wide hover:bg-neutral-100 transition-colors"
          >
            Explore Parlour & Services
          </Link>
        </div>
      </section>
    </div>
  );
}
