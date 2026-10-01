'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Phone } from 'lucide-react';

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  categories: string[];
  season: string;
}

const ALL_GALLERY_IMAGES: GalleryItem[] = [
  { id: 1, src: '/1.jpeg', title: 'Banarasi Silk Heritage Saree', categories: ["Women's Wear"], season: 'Bridal Collection' },
  { id: 2, src: '/2.jpeg', title: 'HD Bridal Makeover & Skin Radiance', categories: ['Bridal Makeover', 'Cosmetics'], season: 'Beauty Essentials' },
  { id: 3, src: '/3.jpeg', title: 'Royal Heritage Silk Kurta Set', categories: ["Men's Wear"], season: 'Festive Wear' },
  { id: 4, src: '/4.jpeg', title: 'Velvet Matte Makeover & Parlour Suite', categories: ['Bridal Makeover', 'Cosmetics'], season: 'Salon Suite' },
  { id: 5, src: '/5.jpeg', title: 'Embroidered Georgette Anarkali Suit', categories: ["Women's Wear"], season: 'Festive Archive' },
  { id: 6, src: '/6.jpeg', title: 'Bridal Hair Styling & Beauty Treatment', categories: ['Bridal Makeover', 'Cosmetics'], season: 'Skin Perfecting' },
  { id: 7, src: '/7.jpeg', title: 'Handcrafted Wedding Sherwani', categories: ["Men's Wear"], season: 'Groom Ensembles' },
  { id: 8, src: '/8.jpeg', title: 'No. 7 Luxury Fragrance Extract', categories: ['Cosmetics'], season: 'Haute Fragrance' },
  { id: 9, src: '/9.jpeg', title: 'Contemporary Indo-Western Gown', categories: ["Women's Wear"], season: 'Celebration Series' },
  { id: 10, src: '/10.jpeg', title: 'Botanical Facial & Bridal Skin Prep', categories: ['Bridal Makeover', 'Cosmetics'], season: 'Clean Botanics' },
  { id: 11, src: '/11.jpeg', title: 'Heritage Zari Bridal Lehenga', categories: ["Women's Wear", 'Bridal Makeover'], season: 'Bridal Couture' },
  { id: 12, src: '/12.jpeg', title: 'Golden Hour Highlighter Compact', categories: ['Cosmetics'], season: 'Illumination' },
  { id: 13, src: '/13.jpeg', title: 'Embroidered Festive Bandhgala Suit', categories: ["Men's Wear"], season: 'Wedding Wear' },
  { id: 14, src: '/14.jpeg', title: 'Festive Party Frock & Gown', categories: ["Kids' Wear"], season: 'Girls Festive' },
  { id: 15, src: '/15.jpeg', title: 'Chanderi Silk Drape Saree', categories: ["Women's Wear"], season: 'Traditional Series' },
  { id: 16, src: '/16.jpeg', title: 'Classic Silk Kurta Pajama', categories: ["Men's Wear"], season: 'Festive Collection' },
  { id: 17, src: '/17.jpeg', title: 'Hand-Embroidered Velvet Bridal Lehenga', categories: ["Women's Wear", 'Bridal Makeover'], season: 'Bridal Series' },
  { id: 18, src: '/18.jpeg', title: 'Little Princess Lehenga Choli Set', categories: ["Kids' Wear"], season: 'Kids Festive' },
  { id: 19, src: '/19.jpeg', title: 'HD Bridal Lip & Eye Makeover', categories: ['Bridal Makeover', 'Cosmetics'], season: 'Colour Lab' },
  { id: 20, src: '/20.jpeg', title: 'Bridal Glow Treatment & Parlour Session', categories: ['Bridal Makeover', 'Cosmetics'], season: 'Beauty Editorial' },
  { id: 21, src: '/21.jpeg', title: 'Designer Indo-Western Jodhpuri Set', categories: ["Men's Wear"], season: 'Occasion Wear' },
  { id: 22, src: '/22.jpeg', title: 'Satin Glass Lip Oil Glaze', categories: ['Cosmetics'], season: 'Gloss Collection' },
  { id: 23, src: '/23.jpeg', title: 'Boys Traditional Kurta Dhoti Set', categories: ["Kids' Wear"], season: 'Boys Festive' },
  { id: 24, src: '/24.jpeg', title: 'Collector Fragrance Flacon', categories: ['Cosmetics'], season: 'Artisanal Perfume' },
  { id: 25, src: '/25.jpeg', title: 'Bespoke Groom Sherwani Ensemble', categories: ["Men's Wear"], season: 'Heritage Atelier' },
  { id: 26, src: '/26.jpeg', title: 'Hand-Embroidered Zardozi Dupatta', categories: ["Women's Wear"], season: 'Heritage Craft' },
  { id: 27, src: '/27.jpeg', title: 'Organza Party Wear Ensemble', categories: ["Women's Wear"], season: 'Festive Season' },
];

const CATEGORIES = ['All', "Women's Wear", "Men's Wear", "Kids' Wear", 'Bridal Makeover', 'Cosmetics'] as const;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredImages =
    activeCategory === 'All'
      ? ALL_GALLERY_IMAGES
      : ALL_GALLERY_IMAGES.filter((img) => img.categories.includes(activeCategory));


  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans pb-28">
      {/* 1. Header Banner */}
      <div className="border-b border-neutral-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <p className="text-xs uppercase tracking-widest text-amber-800 font-bold mb-2">
            Est. 2003 • The Complete Family Lookbook
          </p>
          <h1 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-neutral-900">
            Jesika Visual Archive
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-lg mx-auto font-normal">
            Celebrating 23+ years of Varanasi bridal couture, authentic Banarasi silks, men’s festive wear, kids’ outfits, and parlour transformations.
          </p>
        </div>
      </div>

      {/* 2. Category Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 border-b border-neutral-200 pb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3. Image Grid (27 Images) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-12">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-100 border border-neutral-200 cursor-zoom-in shadow-xs"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                quality={95}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" />
            </div>
          ))}
        </div>
      </div>

      {/* 4. CTA Section */}
      <section className="bg-white border-t border-neutral-200 py-20 sm:py-28 px-4 mt-16 sm:mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-semibold tracking-tight mb-6 text-black">
            Ready for your transformation?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-10 font-medium">
            Whether it's a bridal makeover, a fresh new haircut, or a relaxing spa session, our expert stylists are here to bring out your best look.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+918924099911" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#000] text-white px-8 py-4 rounded-none text-sm font-bold hover:bg-[#1f2b20] transition-colors shadow-sm">
              <Phone className="w-4 h-4 " />
              <span>Book Appointment</span>
            </a>
            <Link href="/parlour" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent text-[#000] border border-[#000]  px-8 py-4 rounded-none text-sm font-bold transition-colors">
              <span>View Services</span>
            </Link>
          </div>
        </div>
      </section>


      {/* 5. Fullscreen Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out select-none"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors"
            aria-label="Close Preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Large Centered Image Only */}
          <div className="relative max-w-4xl max-h-[85vh] w-full h-full flex items-center justify-center">
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              fill
              quality={100}
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
