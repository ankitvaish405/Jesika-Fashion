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
      {/* 1. Hero Section - Minimalist Split Design */}
      <div className="w-full bg-[#f3f4f6] relative flex flex-col md:flex-row min-h-[90vh]">
        {/* Left Side */}
        <div className="flex-1 w-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 relative">
          
          {/* Main Typography */}
          <div className="max-w-2xl relative z-10 pt-12 md:pt-0">
            <h1 className="text-[2.5rem] md:text-5xl lg:text-[4rem] font-serif text-[#1a1a1a] leading-[1.1] mb-10">
              DISCOVER OUR / EXCLUSIVE <br /> COLLECTION 2024
            </h1>
            <Link 
              href="/gallery" 
              className="inline-block bg-[#111] text-white px-8 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-neutral-800 transition-colors"
            >
              EXPLORE +
            </Link>
          </div>
          
          {/* Social Icons (Vertical Bottom Left on Desktop) */}
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 flex md:flex-col gap-5 text-[#111]">
            <a href="#" className="hover:text-neutral-500 transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" className="hover:text-neutral-500 transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-neutral-500 transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 w-full relative min-h-[50vh] md:min-h-full">
          <Image
            src="/1.jpeg"
            alt="Jesika Front Store Collection"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* 2. Hero Editorial Story (Images 1 & 5) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-neutral-100 border border-neutral-200 shadow-sm">
              <Image
                src="/3.jpeg"
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
