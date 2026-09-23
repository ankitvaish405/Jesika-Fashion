import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Shirt, Crown, Baby, Scissors, Star, CheckCircle, Clock } from 'lucide-react';
import HeroSlider from '@/components/HeroSlider';
import ReviewsSlider from '@/components/ReviewsSlider';

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
  { id: 16, src: '/16.jpeg', tag: '#MensWear' },
  { id: 17, src: '/17.jpeg', tag: '#WomensFashion' },
  { id: 18, src: '/18.jpeg', tag: '#KidsWear' },
  { id: 19, src: '/19.jpeg', tag: '#BridalMakeup' },
  { id: 20, src: '/20.jpeg', tag: '#JesikaParlour' },
  { id: 21, src: '/21.jpeg', tag: '#JesikaFashion' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fbf8f4] text-[#29201d] font-sans">
      {/* 1. Hero Section Carousel (Images 1, 2, 7, 9) */}
      <HeroSlider />

      {/* 2. Brand Value Pillars / Trust Badges */}
      <section className="border-y border-[#e8ded2] bg-[#f5ede5] py-8 sm:py-9">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {HIGHLIGHTS.map((h, i) => {
              const Icon = h.icon;
              return (
                <div key={i} className="flex items-center gap-3.5">
                  <div className="w-12 h-12 flex items-center justify-center bg-white border border-[#e8ded2]  shrink-0 shadow-xs">
                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[15px] sm:text-base font-semibold text-[#29201d] whitespace-nowrap tracking-normal">
                      {h.title}
                    </h4>
                    <p className="text-xs text-[#736359] mt-0.5 leading-snug">
                      {h.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. The 4 Departments: Women's, Men's, Kids', Beauty Parlour */}
      <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-3xl font-serif font-bold uppercase tracking-wider">
            Our Core Verticals
          </h2>
          <p className="text-md text-[#736359] mt-2 font-light max-w-full sm:whitespace-nowrap">All in one store for Men&apos;s wear, Women&apos;s wear, Kids&apos; wear, and Beauty Parlour services.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Card 1: Women's Wear */}
          <Link href="/gallery" className="group relative aspect-[3/4] overflow-hidden bg-[#f3ede5] border border-[#e8ded2] shadow-xs">
            <Image
              src="/1.jpeg"
              alt="Women's Wear Collection"
              fill
              sizes="(max-width: 640px) 100vw, 25vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#241c19]/85 via-[#241c19]/30 to-transparent p-6 flex flex-col justify-end text-white">

              <h3 className="text-xl font-serif font-bold uppercase tracking-wider mb-2">
                Women&apos;s Wear
              </h3>
              <span className="inline-flex items-center text-xs uppercase tracking-widest text-[#ebdcd2] group-hover:text-white font-medium">
                Explore Collection <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>

          {/* Card 2: Men's Wear */}
          <Link href="/gallery" className="group relative aspect-[3/4] overflow-hidden bg-[#f3ede5] border border-[#e8ded2] shadow-xs">
            <Image
              src="/7.jpeg"
              alt="Men's Wear Collection"
              fill
              sizes="(max-width: 640px) 100vw, 25vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#241c19]/85 via-[#241c19]/30 to-transparent p-6 flex flex-col justify-end text-white">

              <h3 className="text-xl font-serif font-bold uppercase tracking-wider mb-2">
                Men&apos;s Wear
              </h3>
              <span className="inline-flex items-center text-xs uppercase tracking-widest text-[#ebdcd2] group-hover:text-white font-medium">
                Explore Collection <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>

          {/* Card 3: Kids' Wear */}
          <Link href="/gallery" className="group relative aspect-[3/4] overflow-hidden bg-[#f3ede5] border border-[#e8ded2] shadow-xs">
            <Image
              src="/18.jpeg"
              alt="Kids' Wear Collection"
              fill
              sizes="(max-width: 640px) 100vw, 25vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#241c19]/85 via-[#241c19]/30 to-transparent p-6 flex flex-col justify-end text-white">

              <h3 className="text-xl font-serif font-bold uppercase tracking-wider mb-2">
                Kids&apos; Wear
              </h3>
              <span className="inline-flex items-center text-xs uppercase tracking-widest text-[#ebdcd2] group-hover:text-white font-medium">
                Explore Collection <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>

          {/* Card 4: Beauty Parlour */}
          <Link href="/parlour" className="group relative aspect-[3/4] overflow-hidden bg-[#f3ede5] border border-[#e8ded2] shadow-xs">
            <Image
              src="/2.jpeg"
              alt="Beauty Parlour & Salon"
              fill
              sizes="(max-width: 640px) 100vw, 25vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#241c19]/85 via-[#241c19]/30 to-transparent p-6 flex flex-col justify-end text-white">
              <h3 className="text-xl font-serif font-bold uppercase tracking-wider mb-2">
                Beauty Parlour
              </h3>
              <span className="inline-flex items-center text-xs uppercase tracking-widest text-[#ebdcd2] group-hover:text-white font-medium">
                View Services <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* 4. Trending Bestsellers Across Departments */}
      <section className="bg-[#f5ede5] py-20 border-y border-[#e8ded2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-serif tracking-wider text-[#29201d]">
                Featured In-Store Arrivals
              </h2>
            </div>
            <Link
              href="/gallery"
              className="mt-4 md:mt-0 text-xs font-bold uppercase tracking-widest  hover:text-[#845d49] inline-flex items-center gap-2"
            >
              <span>View All Collections</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {BESTSELLERS.map((item) => (
              <div key={item.id} className="bg-white border border-[#e8ded2] group flex flex-col shadow-xs">
                <div className="relative aspect-square w-full overflow-hidden bg-[#f3ede5]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-amber-600 mb-1">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="text-[11px] font-semibold text-[#736359]">{item.rating}</span>
                    </div>
                    <p className="text-[10px] uppercase tracking-wider  font-semibold">
                      {item.category}
                    </p>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#29201d] mt-1 line-clamp-1">
                      {item.name}
                    </h3>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#f0e6dc] flex items-center justify-between">
                    <span className="text-sm font-bold text-[#29201d]">{item.price}</span>
                    <a
                      href="tel:+918924099911"
                      className="text-[11px] uppercase tracking-wider font-semibold  hover:text-[#845d49]"
                    >
                      Inquire
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl sm:text-4xl font-serif  tracking-wider leading-snug text-[#29201d]">
              Why Families Trust Jesika
            </h2>
            <p className="text-sm sm:text-base font-light leading-relaxed">
              We bring together all family clothing needs along with expert beauty parlour services in one welcoming space, saving you time while guaranteeing superior quality and fair pricing.
            </p>

            <div className="space-y-4 pt-2">
              {WHY_CHOOSE_US.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className="p-2 bg-[#f5ede5] border border-[#e8ded2] shrink-0 mt-0.5 ">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-base font-bold tracking-wider text-[#29201d]">{item.title}</h4>
                      <p className="text-xs sm:text-base text-[#736359] mt-0.5 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#f3ede5] border border-[#e8ded2] shadow-xs">
              <Image
                src="/5.jpeg"
                alt="Jesika Fashion Store Collection"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#f3ede5] border border-[#e8ded2] shadow-xs translate-y-6">
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
      </section>

      {/* 6. How It Works */}
      <section className="bg-[#241c19] text-[#faf7f2] py-20 border-t border-[#382b26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold uppercase tracking-wider text-[#faf7f2]">
              How It Works
            </h2>
            <p className="text-sm sm:text-base text-[#beb1a7] mt-2 font-light">
              One-stop shopping and beauty styling for every family occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((step) => (
              <div key={step.number} className="p-8 border border-[#382b26] bg-[#1d1614] flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-bold text-[#cbb193] block mb-4">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-bold tracking-tight text-[#faf7f2] mb-2 font-serif">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-base font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Client Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl font-serif font-bold tracking-wider text-[#29201d]">
            Loved By Families
          </h2>
        </div>

        <ReviewsSlider />
      </section>

      {/* 8. Instagram Community Grid */}
      <section className="border-t border-[#e8ded2] pt-16 pb-8 bg-[#f5ede5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.25em]  font-semibold mb-1">Visual Community</p>
          <h3 className="text-2xl font-serif font-bold uppercase tracking-wider text-[#29201d]">
            Follow @JesikaFashion
          </h3>
          <p className="text-xs text-[#736359] mt-1">Tag #JesikaFashion on Instagram to get featured.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 px-2 sm:px-4">
          {INSTAGRAM_IMAGES.map((img) => (
            <div key={img.id} className="group relative aspect-square overflow-hidden bg-[#ede4d8] border border-[#e8ded2]">
              <Image
                src={img.src}
                alt="Instagram post"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#241c19]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold tracking-wider">
                {img.tag}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
