import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, Target, Shirt, Sparkles, Scissors, Clock, Star, ExternalLink, ShieldCheck, Award, Heart, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'About Us | Jesika Fashion Varanasi - Serving Since 2003',
  description: 'Learn the story of Jesika Fashion, established in 2003 near Panch Koshi Chauraha, Asapur, Varanasi. 23+ years of excellence in complete family fashion, in-house tailoring, and beauty parlour services.',
};

const MILESTONES = [
  {
    year: '2003',
    title: 'The Beginning in Varanasi',
    description: 'Jesika Fashion opened its very first shop near Panch Koshi Chauraha, Asapur, Varanasi, with a heartfelt commitment to offering authentic fabrics, sarees, and honest craftsmanship to local families.',
  },
  {
    year: '2009',
    title: 'Complete Family Store Expansion',
    description: 'Responding to heartfelt demand from our patrons, we introduced comprehensive Men’s ethnic collections (kurtas & sherwanis) and Kids’ wear, making family wedding shopping truly seamless.',
  },
  {
    year: '2015',
    title: 'In-House Express Tailoring',
    description: 'We set up our dedicated on-site master tailoring studio, providing custom sizing, fall & pico, and alterations in just 30 to 60 minutes while families browse.',
  },
  {
    year: '2019',
    title: 'Professional Beauty Parlour Suite',
    description: 'To provide complete styling for weddings and celebrations, we established a dedicated salon suite with certified makeup artists, HD bridal transformations, and advanced skincare.',
  },
  {
    year: '2026',
    title: '23+ Years of Continuous Trust',
    description: 'With over 28,000+ satisfied families and 111+ 4.5-star Google reviews, Jesika Fashion stands proud as a beloved household name across Varanasi and Purvanchal.',
  },
];

const CORE_DEPARTMENTS = [
  {
    title: "Women's Heritage & Bridal",
    image: '/10.jpeg',
    desc: 'Pure Banarasi silk sarees, royal wedding lehengas, festive anarkalis, and designer suits crafted with timeless Indian artistry.',
  },
  {
    title: "Men's Royal Wear",
    image: '/2.jpeg',
    desc: 'Handcrafted wedding sherwanis, embroidered kurtas, Indo-western sets, and formal ensembles with precision master tailoring.',
  },
  {
    title: "Kids' Festive & Party Wear",
    image: '/4.jpeg',
    desc: 'Vibrant and comfortable party gowns, lehenga-cholis, and traditional kurta-dhoti sets for boys and girls of all ages.',
  },
  {
    title: "Jesika Beauty Parlour & Salon",
    image: '/parlor/4.jpeg',
    desc: 'Certified bridal makeup artists, pre-bridal radiance packages, rejuvenating hair spa therapies, and organic facials.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans pb-28">
      {/* 1. Hero Section - Brand & 2003 Heritage */}
      <div className="w-full bg-[#f8f6f2] relative border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold text-neutral-900 tracking-tight leading-[1.15]">
                23+ Years of Family Trust & Elegance in Varanasi
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-2xl">
                In <strong>2003</strong>, Jesika Fashion opened its doors with a simple, genuine dream: to create Varanasi’s most welcoming all-in-one destination where every family could find exceptional fashion, personalized tailoring, and certified salon care under one roof.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/gallery"
                  className="bg-neutral-900 text-white px-7 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-neutral-800 transition-colors rounded-lg shadow-sm"
                >
                  Explore Collections
                </Link>
                <Link
                  href="/parlour"
                  className="bg-white text-neutral-900 border border-neutral-300 px-7 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-neutral-50 transition-colors rounded-lg"
                >
                  Beauty Parlour
                </Link>
              </div>
            </div>

            {/* Right Emblem & Store Visual */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-neutral-200 shadow-xl bg-white">
                <Image
                  src="/1.jpeg"
                  alt="Jesika Fashion Varanasi Store Collection"
                  fill
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. The Detailed Story: Established in 2003 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-neutral-100 border border-neutral-200 shadow-sm">
              <Image
                src="/3.jpeg"
                alt="Jesika Men's & Festive Wear"
                fill
                quality={100}
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-neutral-100 border border-neutral-200 shadow-sm translate-y-6">
              <Image
                src="/5.jpeg"
                alt="Jesika Family Wear & Studio"
                fill
                quality={100}
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 lg:pl-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest font-semibold text-amber-800">
                Our Varanasi Roots
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold tracking-tight text-neutral-900 leading-snug">
                Our Journey Began in 2003
              </h2>
            </div>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Jesika Fashion opened its shop in <strong>2003</strong> near Panch Koshi Chauraha, Asapur, Varanasi. Before our establishment, families preparing for weddings or festivals had to navigate crowded, separated markets across the city—buying sarees from one place, men’s sherwanis from another, searching elsewhere for children’s outfits, and finding a separate salon for bridal prep.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              We set out to change that. By bringing together curated collections for <strong>Women’s wear, Men’s wear, Kids’ wear, in-house master tailoring, and a dedicated professional Beauty Parlour</strong> in one spacious establishment, we gave Varanasi families a dependable, stress-free destination where elegance meets warmth and honest pricing.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Today, with over <strong>23+ years</strong> of continuous operation, we are proud to serve the sons and daughters of the very customers who first walked into our shop back in 2003.
            </p>

            <div className="pt-6 grid grid-cols-3 gap-6 border-t border-neutral-200">
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-sans text-neutral-900">2003</p>
                <p className="text-xs text-neutral-500 font-medium mt-1">Shop Opened</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-sans text-neutral-900">23+ Yrs</p>
                <p className="text-xs text-neutral-500 font-medium mt-1">Continuous Legacy</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-sans text-neutral-900">28,000+</p>
                <p className="text-xs text-neutral-500 font-medium mt-1">Families Served</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Milestone Timeline (2003 - 2026) */}
      <section className="bg-[#f8f9fa] border-y border-neutral-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-800">
              Over Two Decades of Growth
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-neutral-900 mt-2">
              Our Journey Through The Years
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2 font-normal">
              From our shop opening in 2003 to becoming a cherished household name in Varanasi.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {MILESTONES.map((milestone, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 shadow-xs hover:border-amber-400 transition-colors flex flex-col sm:flex-row gap-5 items-start"
              >
                <div className="shrink-0">
                  <span className="inline-block px-4 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-bold text-lg font-sans">
                    {milestone.year}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-sans font-bold text-neutral-900">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-neutral-600 font-normal leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our 4 Core Pillars Under One Roof */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-800">
            All-In-One Experience
          </span>
          <h2 className="text-3xl font-sans font-bold tracking-tight text-neutral-900 mt-2">
            Complete Wardrobes & Beauty Under One Roof
          </h2>
          <p className="text-sm text-neutral-600 mt-2 font-normal">
            Every department is curated with the highest standards of fabric quality, fit, and care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CORE_DEPARTMENTS.map((dept, i) => (
            <div key={i} className="border border-neutral-200 bg-white rounded-2xl overflow-hidden flex flex-col shadow-xs hover:shadow-md transition-shadow">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
                <Image
                  src={dept.image}
                  alt={dept.title}
                  fill
                  quality={100}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 350px"
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-sans font-bold text-neutral-900">{dept.title}</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-normal mt-2">{dept.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Why Choose Us? - Luxury Rich Dark Background */}
      <section className="bg-[#181210] text-[#faf7f2] border-y border-neutral-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white">
              Why Families Have Chosen Us Since 2003
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 font-normal">
              Rooted in trust, craft, and personalized care for every customer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-[#221a17] p-8 border border-neutral-800 rounded-2xl shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#cbb193] mb-6">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-white mb-2 font-sans">
                  23+ Years Experience
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  Founded in 2003, our decades of experience ensure the finest Banarasi craftsmanship, honest pricing, and unmatched fabric authenticity.
                </p>
              </div>
            </div>

            <div className="bg-[#221a17] p-8 border border-neutral-800 rounded-2xl shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#cbb193] mb-6">
                  <Shirt className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-white mb-2 font-sans">
                  All-In-One Family Store
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  Complete wardrobes for Women, Men, and Children under one roof. No running between multiple crowded markets for wedding shopping.
                </p>
              </div>
            </div>

            <div className="bg-[#221a17] p-8 border border-neutral-800 rounded-2xl shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#cbb193] mb-6">
                  <Scissors className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-white mb-2 font-sans">
                  30-Min Master Alterations
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  Our in-house master tailors provide custom sizing, fall & pico, and alterations in 30 to 60 minutes while you explore the store.
                </p>
              </div>
            </div>

            <div className="bg-[#221a17] p-8 border border-neutral-800 rounded-2xl shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#cbb193] mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-white mb-2 font-sans">
                  Dedicated Beauty Parlour
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  A full-service salon suite offering HD bridal makeup, pre-bridal packages, hair styling, and facials with certified beauty professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Trust Badges & Google Rating */}
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
                  <span>111+ Happy Local Reviews</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Badge 2: Est 2003 */}
            <div className="flex items-center gap-4 pt-6 md:pt-0 md:pl-8">
              <div className="w-14 h-14 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-800 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xl font-sans font-bold text-neutral-900">Est. 2003</p>
                <p className="text-xs font-semibold text-neutral-900 mt-0.5">23+ Years of Heritage</p>
                <p className="text-[11px] text-neutral-500 mt-0.5">Serving Varanasi Families</p>
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

      {/* 7. CTA Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-neutral-900 mb-3">
          Experience Jesika Fashion in Varanasi
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 max-w-md mx-auto mb-8 font-normal">
          Visit our store near Panch Koshi Chauraha, Asapur, or connect with our team for parlour appointments and personalized styling.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-neutral-900 text-white text-xs font-semibold rounded-lg tracking-wide hover:bg-neutral-800 transition-colors shadow-sm"
          >
            Contact & Directions
          </Link>
          <Link
            href="/parlour"
            className="w-full sm:w-auto px-8 py-3.5 border border-neutral-300 text-neutral-800 text-xs font-semibold rounded-lg tracking-wide hover:bg-neutral-100 transition-colors"
          >
            Explore Beauty Parlour
          </Link>
        </div>
      </section>
    </div>
  );
}
