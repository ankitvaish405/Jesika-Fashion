import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Shirt, Crown, Baby, Scissors, Star, CheckCircle, Clock } from 'lucide-react';
import HeroSlider from '@/components/HeroSlider';
import ReviewsSlider from '@/components/ReviewsSlider';
import FAQSection from '@/components/FAQSection';

const HIGHLIGHTS = [
  { icon: Crown, title: "Women's Collection", desc: 'Sarees, Lehengas, Suits & Western wear' },
  { icon: Shirt, title: "Men's Fashion", desc: 'Kurta Pajamas, Sherwanis & Formal wear' },
  { icon: Baby, title: "Kids' Wear", desc: 'Festive & Party wear for boys and girls' },
  { icon: Sparkles, title: 'Beauty Parlour', desc: 'Bridal makeover, hair styling & skincare' },
];

const BESTSELLERS = [
  {
    id: 1,
    name: 'Embroidered Banarasi Silk Saree',
    category: "Women's Wear",
    price: '₹4,500',
    image: '/1.jpeg',
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Royal Heritage Wedding Sherwani',
    category: "Men's Wear",
    price: '₹14,500',
    image: '/7.jpeg',
    rating: 5.0,
  },
  {
    id: 3,
    name: 'Little Princess Festive Lehenga Choli',
    category: "Kids' Wear",
    price: '₹1,850',
    image: '/18.jpeg',
    rating: 4.9,
  },
  {
    id: 4,
    name: 'HD Bridal Makeover Package',
    category: 'Beauty Parlour',
    price: 'Bridal Special',
    image: '/2.jpeg',
    rating: 5.0,
  },
];

const WHY_CHOOSE_US = [
  {
    icon: Shirt,
    title: 'Complete Family Fashion',
    desc: 'Everything under one roof: vast selections of Men’s, Women’s, and Kids’ clothing for all occasions.',
  },
  {
    icon: Sparkles,
    title: 'In-House Beauty Parlour',
    desc: 'Get your full bridal makeup, hair styling, facials, and grooming done in our dedicated salon suite.',
  },
  {
    icon: Scissors,
    title: 'Custom Alterations & Tailoring',
    desc: 'Our in-house master tailors provide quick and custom fitting alterations on all purchases.',
  },
  {
    icon: Clock,
    title: 'Open All 7 Days in Varanasi',
    desc: 'Convenient timings 10:00 am – 9:30 pm (Thu till 9:00 pm) near Panch Koshi Chauraha, Asapur.',
  },
];

const STEPS = [
  {
    number: '01',
    title: 'Discover Family Collections',
    desc: 'Explore our latest arrivals in Women’s ethnic wear, Men’s royal kurtas, and adorable Kids’ party sets.',
  },
  {
    number: '02',
    title: 'Custom Fitting & Styling',
    desc: 'Avail complimentary fitting adjustments and personalized styling advice from our store associates.',
  },
  {
    number: '03',
    title: 'Parlour Transformation',
    desc: 'Complete your festive look with certified bridal makeup, hairstyling, and nourishing skin treatments.',
  },
];


const INSTAGRAM_IMAGES = [
  { id: 16, src: '/16.jpeg', tag: '@jesika._.fashion' },
  { id: 17, src: '/17.jpeg', tag: '@jesika._.fashion' },
  { id: 18, src: '/18.jpeg', tag: '@jesika._.fashion' },
  { id: 19, src: '/19.jpeg', tag: '@jesika._.fashion' },
  { id: 20, src: '/20.jpeg', tag: '@jesika._.fashion' },
  { id: 21, src: '/21.jpeg', tag: '@jesika._.fashion' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      {/* 1. Hero Section Carousel (Images 1, 2, 7, 9) */}
      <HeroSlider />

      {/* 2. Brand Value Pillars / Trust Badges - Pure White */}
      <section className="border-b border-neutral-200 bg-white py-8 sm:py-9">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {HIGHLIGHTS.map((h, i) => {
              const Icon = h.icon;
              return (
                <div key={i} className="flex items-center gap-3.5">
                  <div className="w-12 h-12 flex items-center justify-center bg-neutral-50 border border-neutral-200 shrink-0 shadow-2xs">
                    <Icon className="w-6 h-6 text-neutral-800" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm sm:text-[15px] font-semibold text-neutral-900 whitespace-nowrap tracking-normal">
                      {h.title}
                    </h4>
                    <p className="text-xs text-neutral-500 mt-0.5 leading-snug font-normal">
                      {h.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. The 4 Departments - Soft Light Background */}
      <section className="bg-[#f8f9fa] border-b border-neutral-200/80 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-[#9d735d] font-semibold block mb-2">
              Our Collections
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
              Our Core Verticals
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2 font-normal">
              All in one store for Men&apos;s wear, Women&apos;s wear, Kids&apos; wear, and Beauty Parlour services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Card 1: Women's Wear */}
            <Link href="/gallery" className="group relative aspect-[3/4] overflow-hidden bg-neutral-100 border border-neutral-200 shadow-2xs">
              <Image
                src="/1.jpeg"
                alt="Women's Wear Collection"
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6 flex flex-col justify-end text-white">
                <h3 className="text-lg sm:text-xl font-semibold mb-1">
                  Women&apos;s Wear
                </h3>
                <span className="inline-flex items-center text-xs tracking-wider text-neutral-200 group-hover:text-white font-medium">
                  Explore Collection <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>

            {/* Card 2: Men's Wear */}
            <Link href="/gallery" className="group relative aspect-[3/4] overflow-hidden bg-neutral-100 border border-neutral-200 shadow-2xs">
              <Image
                src="/7.jpeg"
                alt="Men's Wear Collection"
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6 flex flex-col justify-end text-white">
                <h3 className="text-lg sm:text-xl font-semibold mb-1">
                  Men&apos;s Wear
                </h3>
                <span className="inline-flex items-center text-xs tracking-wider text-neutral-200 group-hover:text-white font-medium">
                  Explore Collection <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>

            {/* Card 3: Kids' Wear */}
            <Link href="/gallery" className="group relative aspect-[3/4] overflow-hidden bg-neutral-100 border border-neutral-200 shadow-2xs">
              <Image
                src="/18.jpeg"
                alt="Kids' Wear Collection"
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6 flex flex-col justify-end text-white">
                <h3 className="text-lg sm:text-xl font-semibold mb-1">
                  Kids&apos; Wear
                </h3>
                <span className="inline-flex items-center text-xs tracking-wider text-neutral-200 group-hover:text-white font-medium">
                  Explore Collection <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>

            {/* Card 4: Beauty Parlour */}
            <Link href="/parlour" className="group relative aspect-[3/4] overflow-hidden bg-neutral-100 border border-neutral-200 shadow-2xs">
              <Image
                src="/2.jpeg"
                alt="Beauty Parlour & Salon"
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6 flex flex-col justify-end text-white">
                <h3 className="text-lg sm:text-xl font-semibold mb-1">
                  Beauty Parlour
                </h3>
                <span className="inline-flex items-center text-xs tracking-wider text-neutral-200 group-hover:text-white font-medium">
                  View Services <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Trending Bestsellers Across Departments - Pure White */}
      <section className="bg-white py-20 border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#9d735d] font-semibold block mb-2">
                Curated Selection
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
                Featured In-Store Arrivals
              </h2>
            </div>
            <Link
              href="/gallery"
              className="mt-4 md:mt-0 text-xs font-semibold uppercase tracking-wider text-[#9d735d] hover:text-[#845d49] inline-flex items-center gap-1.5"
            >
              <span>View All Collections</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {BESTSELLERS.map((item) => (
              <div key={item.id} className="bg-white border border-neutral-200 hover:border-neutral-300 group flex flex-col shadow-2xs transition-colors">
                <div className="relative aspect-square w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-amber-500 mb-1">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="text-xs font-medium text-neutral-600">{item.rating}</span>
                    </div>
                    <p className="text-[10px] uppercase tracking-wider font-semibold text-[#9d735d]">
                      {item.category}
                    </p>
                    <h3 className="text-sm font-semibold text-neutral-900 mt-1 line-clamp-1">
                      {item.name}
                    </h3>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-sm font-bold text-neutral-900">{item.price}</span>
                    <div className="flex items-center gap-2.5">
                      <a
                        href={`https://wa.me/918924099911?text=${encodeURIComponent(`Hi Jesika Fashion, I would like to inquire about ${item.name} (${item.category}) priced at ${item.price}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] uppercase tracking-wider font-semibold text-neutral-700 hover:text-[#9d735d]"
                        title="Chat on WhatsApp"
                      >
                        WhatsApp
                      </a>
                      <span className="text-neutral-300">|</span>
                      <a
                        href="tel:+918924099911"
                        className="text-[11px] uppercase tracking-wider font-medium text-neutral-600 hover:text-neutral-900"
                      >
                        Call
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us - Rich Luxury Dark Section */}
      <section className="bg-[#181210] text-[#faf7f2] py-20 border-y border-[#2a1f1b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#cbb193] font-semibold block">
                The Jesika Standard
              </span>
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight leading-snug text-white">
                Why Families Trust Jesika
              </h2>
              <p className="text-sm sm:text-base font-normal text-neutral-300 leading-relaxed">
                We bring together all family clothing needs along with expert beauty parlour services in one welcoming space, saving you time while guaranteeing superior quality and fair pricing.
              </p>

              <div className="space-y-4 pt-2">
                {WHY_CHOOSE_US.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-3.5">
                      <div className="p-2.5 bg-[#241c19] border border-[#382b26] text-[#cbb193] shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-white">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-neutral-400 mt-0.5 leading-relaxed font-normal">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#241c19] border border-[#382b26] shadow-md">
                <Image
                  src="/5.jpeg"
                  alt="Jesika Fashion Store Collection"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#241c19] border border-[#382b26] shadow-md translate-y-6">
                <Image
                  src="/4.jpeg"
                  alt="Jesika Beauty Parlour Treatment"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. How It Works - Pure White */}
      <section className="bg-white text-neutral-900 py-20 border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#9d735d] font-semibold block mb-2">
              Simple Experience
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
              How It Works
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2 font-normal">
              One-stop shopping and beauty styling for every family occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((step) => (
              <div key={step.number} className="p-8 border border-neutral-200 bg-neutral-50 flex flex-col justify-between shadow-2xs">
                <div>
                  <span className="text-3xl font-bold text-[#9d735d] block mb-4">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-neutral-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-600 font-normal leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Client Reviews - Soft Light Background */}
      <section className="bg-[#f8f9fa] border-b border-neutral-200/80 py-20">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#9d735d] font-semibold block mb-2">
            Local Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
            Loved By Families
          </h2>
        </div>

        <ReviewsSlider />
      </section>

      {/* 8. FAQ Section - Pure White (with Dark Luxury CTA inside) */}
      <FAQSection />

      {/* 9. Instagram Community Grid - Soft Light Background */}
      <section className="border-t border-neutral-200 pt-16 pb-12 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <a
            href="https://www.instagram.com/jesika._.fashion?utm_source=qr&stkn=MWRzZmZ4enZ1cHFmOA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block group"
          >
            <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 group-hover:text-[#9d735d] transition-colors">
              Follow @jesika._.fashion
            </h3>
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 px-2 sm:px-4">
          {INSTAGRAM_IMAGES.map((img) => (
            <a
              key={img.id}
              href="https://www.instagram.com/jesika._.fashion?utm_source=qr&stkn=MWRzZmZ4enZ1cHFmOA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-neutral-100 border border-neutral-200"
              aria-label={`View Jesika Fashion post on Instagram ${img.tag}`}
            >
              <Image
                src={img.src}
                alt="Instagram post"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium tracking-wider">
                {img.tag}
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
