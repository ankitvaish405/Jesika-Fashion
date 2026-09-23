import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, ShieldCheck, HeartHandshake, Sparkles, Leaf, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'About Us | Jesika Fashion & Cosmetics',
  description: 'The story, craftsmanship, philosophy, and master artisans behind Jesika Fashion & Luxury Cosmetics.',
};

const TIMELINE = [
  {
    year: '2018',
    title: 'Maison Inception in Paris',
    desc: 'Founded as a bespoke couture atelier dedicated to architectural drape and exquisite textile curation.',
  },
  {
    year: '2020',
    title: 'New York Flagship Atelier',
    desc: 'Opening of our landmark Fifth Avenue salon, offering custom bridal and red-carpet fitting appointments.',
  },
  {
    year: '2022',
    title: 'The Jesika Cosmetics Lab',
    desc: 'Partnered with Swiss dermatologists to formulate clean botanical cosmetics with high-impact pigments.',
  },
  {
    year: '2024',
    title: 'Cruelty-Free Gold Standard',
    desc: 'Earned 100% vegan and cruelty-free certification across all lip, face, and skincare collections.',
  },
  {
    year: '2026',
    title: 'Sustainable Luxury Era',
    desc: 'Transition to recyclable weighted glass packaging and carbon-neutral artisanal distribution.',
  },
];

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

const ETHICS = [
  {
    icon: Leaf,
    title: 'Botanical Purity',
    desc: 'Sustainably harvested plant actives free from parabens, sulfates, and synthetic micro-plastics.',
  },
  {
    icon: ShieldCheck,
    title: '100% Cruelty-Free',
    desc: 'Leaping Bunny certified. We never test on animals, nor do our ingredient suppliers.',
  },
  {
    icon: HeartHandshake,
    title: 'Fair Trade Artisanship',
    desc: 'Ethical wages and empowering working conditions for every seamstress, chemist, and craftsman.',
  },
  {
    icon: Sparkles,
    title: 'Recyclable Keepsakes',
    desc: 'Our cosmetic jars and fragrance bottles are created from endlessly recyclable weighted glass.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fbf8f4] text-[#29201d] font-sans pb-28">
      {/* 1. Header Banner */}
      <div className="border-b border-[#e8ded2]">
        <div className="max-w-6xl mx-auto px-4 py-14 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#9d735d] font-semibold mb-2">
            Maison Jesika
          </p>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold uppercase tracking-widest text-[#29201d]">
            Our Story & Heritage
          </h1>
          <p className="mt-3 text-sm text-[#736359] max-w-lg mx-auto tracking-wide font-light">
            Where haute couture draping meets dermatologically sound luxury cosmetics.
          </p>
        </div>
      </div>

      {/* 2. Hero Editorial Story (Images 1 & 5) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#f3ede5] border border-[#e8ded2] shadow-xs">
              <Image
                src="/1.jpeg"
                alt="Jesika Couture Silhouette"
                fill
                priority
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#f3ede5] border border-[#e8ded2] shadow-xs translate-y-6">
              <Image
                src="/5.jpeg"
                alt="Jesika Atelier Studio"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 lg:pl-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#9d735d] font-semibold block">
              The Genesis
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold uppercase tracking-wider leading-snug text-[#29201d]">
              Complete Family Fashion & Beauty Excellence Under One Roof
            </h2>
            <p className="text-sm text-[#736359] leading-relaxed font-light">
              Jesika Fashion was established in Varanasi with a vision to become the ultimate all-in-one destination for complete family styling. We bring together curated collections for Women’s wear, Men’s wear, and Kids’ wear alongside our dedicated, full-service Beauty Parlour.
            </p>
            <p className="text-sm text-[#736359] leading-relaxed font-light">
              Whether you are preparing for a wedding with our royal bridal lehengas, silk Banarasi sarees, and HD bridal makeup, shopping for festive sherwanis for men, or selecting charming party outfits for your children, Jesika Fashion provides exceptional quality, in-house tailoring alterations, and dedicated personal care.
            </p>

            <div className="pt-4 grid grid-cols-3 gap-6 border-t border-[#e8ded2]">
              <div>
                <p className="text-2xl font-bold font-serif text-[#29201d]">All-In-One</p>
                <p className="text-[10px] uppercase tracking-wider text-[#9d735d] font-semibold">Clothing & Parlour</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-serif text-[#29201d]">28k+</p>
                <p className="text-[10px] uppercase tracking-wider text-[#9d735d] font-semibold">Global Patrons</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-serif text-[#29201d]">4</p>
                <p className="text-[10px] uppercase tracking-wider text-[#9d735d] font-semibold">Global Ateliers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Jesika Timeline */}
      <section className="bg-[#f5ede5] border-y border-[#e8ded2] py-24 mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-[#9d735d] font-semibold mb-2">Our Evolution</p>
            <h2 className="text-3xl font-serif font-bold uppercase tracking-wider text-[#29201d]">
              Milestones of Excellence
            </h2>
          </div>

          <div className="space-y-10 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-[#ded3c4]">
            {TIMELINE.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <div className="bg-white p-6 border border-[#e8ded2] shadow-xs">
                    <span className="text-sm font-mono font-bold text-[#9d735d] block mb-1">
                      {item.year}
                    </span>
                    <h3 className="text-base font-bold tracking-tight text-[#29201d] mb-1 font-serif">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#736359] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-2.5 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#9d735d] border-4 border-[#f5ede5] mt-6"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Master Artisans & Formulators (Images 25, 26, 27) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-[#9d735d] font-semibold mb-2">The Creators</p>
          <h2 className="text-3xl font-serif font-bold uppercase tracking-wider text-[#29201d]">
            Master Artisans Behind The Brand
          </h2>
          <p className="text-xs text-[#736359] mt-2 font-light">The skilled hands and visionary minds shaping every silhouette and formula.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTISANS.map((artisan, i) => (
            <div key={i} className="border border-[#e8ded2] bg-white flex flex-col shadow-xs">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#f3ede5]">
                <Image
                  src={artisan.image}
                  alt={artisan.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-serif font-bold tracking-tight text-[#29201d]">{artisan.name}</h3>
                  <p className="text-xs text-[#9d735d] font-semibold uppercase tracking-wider mt-0.5 mb-3">{artisan.role}</p>
                  <p className="text-xs text-[#736359] leading-relaxed font-light">{artisan.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Sustainability & Ethics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="border border-[#e8ded2] p-8 sm:p-14 bg-[#f5ede5]">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#9d735d] font-semibold mb-2 block">
              Ethical Pillars
            </span>
            <h2 className="text-3xl font-serif font-bold uppercase tracking-wider text-[#29201d]">
              Sustainability & Responsibility
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ETHICS.map((ethic, i) => {
              const Icon = ethic.icon;
              return (
                <div key={i} className="p-6 bg-white border border-[#e8ded2] shadow-xs">
                  <div className="p-3 bg-[#f5ede5] border border-[#e8ded2] w-fit mb-4 text-[#9d735d]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#29201d] mb-2">{ethic.title}</h3>
                  <p className="text-xs text-[#736359] leading-relaxed font-light">{ethic.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CTA Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold uppercase tracking-wider text-[#29201d] mb-3">
          Experience Jesika Firsthand
        </h2>
        <p className="text-xs sm:text-sm text-[#736359] max-w-md mx-auto mb-8 font-light">
          Visit one of our global flagship salons or consult with our private concierge for bespoke styling.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#9d735d] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#855d4a] transition-colors shadow-sm"
          >
            Contact Atelier
          </Link>
          <Link
            href="/parlour"
            className="w-full sm:w-auto px-8 py-3.5 border border-[#9d735d] text-[#9d735d] text-xs font-bold uppercase tracking-widest hover:bg-[#9d735d] hover:text-white transition-colors"
          >
            Explore Parlour & Services
          </Link>
        </div>
      </section>
    </div>
  );
}
