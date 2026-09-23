'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: "Men's Wear" | "Kids' Wear" | "Women's Wear" | 'Cosmetics';
  season: string;
}

const ALL_GALLERY_IMAGES: GalleryItem[] = [
  { id: 1, src: '/1.jpeg', title: 'Banarasi Silk Heritage Saree', category: "Women's Wear", season: 'Bridal Collection' },
  { id: 2, src: '/2.jpeg', title: 'Luminous Hydra Radiance Serum', category: 'Cosmetics', season: 'Beauty Essentials' },
  { id: 3, src: '/3.jpeg', title: 'Royal Heritage Silk Kurta Set', category: "Men's Wear", season: 'Festive Wear' },
  { id: 4, src: '/4.jpeg', title: 'Velvet Matte Crimson Formulation', category: 'Cosmetics', season: 'Lipstick Vault' },
  { id: 5, src: '/5.jpeg', title: 'Embroidered Georgette Anarkali Suit', category: "Women's Wear", season: 'Festive Archive' },
  { id: 6, src: '/6.jpeg', title: 'Couture Silk Foundation Lab', category: 'Cosmetics', season: 'Skin Perfecting' },
  { id: 7, src: '/7.jpeg', title: 'Handcrafted Wedding Sherwani', category: "Men's Wear", season: 'Groom Ensembles' },
  { id: 8, src: '/8.jpeg', title: 'No. 7 Luxury Fragrance Extract', category: 'Cosmetics', season: 'Haute Fragrance' },
  { id: 9, src: '/9.jpeg', title: 'Contemporary Indo-Western Gown', category: "Women's Wear", season: 'Celebration Series' },
  { id: 10, src: '/10.jpeg', title: 'Botanical Rosewater Facial Mist', category: 'Cosmetics', season: 'Clean Botanics' },
  { id: 11, src: '/11.jpeg', title: 'Heritage Zari Bridal Lehenga', category: "Women's Wear", season: 'Bridal Couture' },
  { id: 12, src: '/12.jpeg', title: 'Golden Hour Highlighter Compact', category: 'Cosmetics', season: 'Illumination' },
  { id: 13, src: '/13.jpeg', title: 'Embroidered Festive Bandhgala Suit', category: "Men's Wear", season: 'Wedding Wear' },
  { id: 14, src: '/14.jpeg', title: 'Festive Party Frock & Gown', category: "Kids' Wear", season: 'Girls Festive' },
  { id: 15, src: '/15.jpeg', title: 'Chanderi Silk Drape Saree', category: "Women's Wear", season: 'Traditional Series' },
  { id: 16, src: '/16.jpeg', title: 'Classic Silk Kurta Pajama', category: "Men's Wear", season: 'Festive Collection' },
  { id: 17, src: '/17.jpeg', title: 'Hand-Embroidered Velvet Lehenga', category: "Women's Wear", season: 'Bridal Series' },
  { id: 18, src: '/18.jpeg', title: 'Little Princess Lehenga Choli Set', category: "Kids' Wear", season: 'Kids Festive' },
  { id: 19, src: '/19.jpeg', title: 'High-Impact Lip Pigment Test', category: 'Cosmetics', season: 'Colour Lab' },
  { id: 20, src: '/20.jpeg', title: 'Luminous Complexion Glow Cream', category: 'Cosmetics', season: 'Beauty Editorial' },
  { id: 21, src: '/21.jpeg', title: 'Designer Indo-Western Jodhpuri Set', category: "Men's Wear", season: 'Occasion Wear' },
  { id: 22, src: '/22.jpeg', title: 'Satin Glass Lip Oil Glaze', category: 'Cosmetics', season: 'Gloss Collection' },
  { id: 23, src: '/23.jpeg', title: 'Boys Traditional Kurta Dhoti Set', category: "Kids' Wear", season: 'Boys Festive' },
  { id: 24, src: '/24.jpeg', title: 'Collector Fragrance Flacon', category: 'Cosmetics', season: 'Artisanal Perfume' },
  { id: 25, src: '/25.jpeg', title: 'Bespoke Groom Sherwani Ensemble', category: "Men's Wear", season: 'Heritage Atelier' },
  { id: 26, src: '/26.jpeg', title: 'Hand-Embroidered Zardozi Dupatta', category: "Women's Wear", season: 'Heritage Craft' },
  { id: 27, src: '/27.jpeg', title: 'Organza Party Wear Ensemble', category: "Women's Wear", season: 'Festive Season' },
];

const CATEGORIES = ["Men's Wear", "Kids' Wear", "Women's Wear", 'Cosmetics'] as const;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Men's Wear");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredImages = ALL_GALLERY_IMAGES.filter(
    (img) => img.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-[#fbf8f4] text-[#29201d] font-sans pb-28">
      {/* 1. Header Banner */}
      <div className="border-b border-[#e8ded2]">
        <div className="max-w-6xl mx-auto px-4 py-14 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#9d735d] font-semibold mb-2">
            The Complete Visual Lookbook
          </p>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold uppercase tracking-widest text-[#29201d]">
            Jesika Visual Archive
          </h1>
          <p className="mt-3 text-sm text-[#736359] max-w-lg mx-auto tracking-wide font-light">
            An expansive gallery encompassing all 27 runway compositions, cosmetic formulations, and behind-the-scenes atelier craftsmanship.
          </p>
        </div>
      </div>

      {/* 2. Category Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 border-b border-[#e8ded2] pb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer ${activeCategory === cat
                  ? 'bg-[#9d735d] text-white shadow-xs'
                  : 'bg-[#f3ede5] text-[#6e5d54] hover:bg-[#ebdcd2] hover:text-[#29201d]'
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
              className="group relative aspect-[3/4] overflow-hidden bg-[#f3ede5] border border-[#e8ded2] cursor-zoom-in shadow-xs"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" />
            </div>
          ))}
        </div>
      </div>

      {/* 4. Atelier Consultation CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-[#f5ede5] border border-[#e8ded2] p-8 sm:p-12 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[#9d735d] font-semibold mb-2 block">
            Private Commissions
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold uppercase tracking-wider text-[#29201d] mb-3">
            Commission Bespoke Pieces
          </h2>
          <p className="text-sm text-[#736359] max-w-lg mx-auto mb-6 font-light">
            Inquire about custom tailored runway garments or private cosmetic formulation batches for your personal collection.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-[#9d735d] bg-[#9d735d] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-[#855d4a] transition-colors shadow-sm"
          >
            <span>Inquire With Our Atelier</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
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
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
