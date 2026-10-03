"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Phone } from "lucide-react";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  categories: string[];
  season: string;
}

const ALL_GALLERY_IMAGES: GalleryItem[] = [
  // Storefront & Overview

  // Men's Wear
  {
    id: 2,
    src: "/2.jpeg",
    title: "Men’s Denim Jeans & Formal Trousers Rack",
    categories: ["Men's Wear"],
    season: "Everyday & Casuals",
  },
  {
    id: 14,
    src: "/14.jpeg",
    title: "Men’s & Boys’ Branded Denim & Shirts",
    categories: ["Men's Wear", "Kids' Wear"],
    season: "Denim Lounge",
  },
  {
    id: 26,
    src: "/26.jpeg",
    title: "Boys’ & Men’s Kurta Sets, Sherwanis & Suits",
    categories: ["Men's Wear", "Kids' Wear"],
    season: "Festive Wear",
  },

  // Women's Wear & Sarees
  {
    id: 3,
    src: "/3.jpeg",
    title: "Handloom Banarasi Silk Sarees & Ethnic Section",
    categories: ["Women's Wear"],
    season: "Heritage Silks",
  },
  {
    id: 7,
    src: "/7.jpeg",
    title: "Authentic Banarasi Silk & Zari Weave Sarees",
    categories: ["Women's Wear", "Bridal Collection"],
    season: "Bridal Silks",
  },
  {
    id: 8,
    src: "/8.jpeg",
    title: "Bridal Lehengas & Heavy Embroidered Suits Aisle",
    categories: ["Women's Wear", "Bridal Collection"],
    season: "Bridal Couture",
  },
  {
    id: 10,
    src: "/10.jpeg",
    title: "Designer Embroidered Kurtis & Anarkali Suits",
    categories: ["Women's Wear"],
    season: "Festive Collection",
  },
  {
    id: 11,
    src: "/11.jpeg",
    title: "Regal Handcrafted Zardozi Bridal Lehengas Wall",
    categories: ["Women's Wear", "Bridal Collection"],
    season: "Bridal Couture",
  },
  {
    id: 15,
    src: "/15.jpeg",
    title: "Traditional Saree & Suit Shopping Lounge",
    categories: ["Women's Wear"],
    season: "Store Experience",
  },
  {
    id: 18,
    src: "/18.jpeg",
    title: "Curated Bridal Lehengas & Wedding Trousseau",
    categories: ["Women's Wear", "Bridal Collection"],
    season: "Bridal Trousseau",
  },
  {
    id: 19,
    src: "/19.jpeg",
    title: "Grand Family Fashion Floor & Saree Counter",
    categories: ["Women's Wear", "Cosmetics & Jewellery"],
    season: "Family Shopping",
  },
  {
    id: 23,
    src: "/23.jpeg",
    title: "Traditional Varanasi Silk & Festive Wear Section",
    categories: ["Women's Wear"],
    season: "Heritage Festive",
  },
  {
    id: 24,
    src: "/24.jpeg",
    title: "Pure Silk Festive Sarees & Handloom Weaves",
    categories: ["Women's Wear"],
    season: "Silk Wardrobe",
  },
  {
    id: 25,
    src: "/25.jpeg",
    title: "Showroom Saree Counter & Accessories Corridor",
    categories: ["Women's Wear", "Cosmetics & Jewellery"],
    season: "Visual Gallery",
  },

  // Kids' Wear
  {
    id: 4,
    src: "/4.jpeg",
    title: "Girls’ Festive Frocks & Princess Party Dresses",
    categories: ["Kids' Wear"],
    season: "Kids Festive",
  },
  {
    id: 9,
    src: "/9.jpeg",
    title: "Boys’ & Girls’ Karrom Boy & Casual Wear",
    categories: ["Kids' Wear"],
    season: "Kids Casuals",
  },
  {
    id: 12,
    src: "/12.jpeg",
    title: "Kids’ Complete Festive & Party Wear Department",
    categories: ["Kids' Wear"],
    season: "Kids Collection",
  },
  {
    id: 27,
    src: "/27.jpeg",
    title: "Baby & Girls’ Designer Gowns & Ethnic Sets",
    categories: ["Kids' Wear"],
    season: "Princess Wardrobe",
  },
  {
    id: 28,
    src: "/child.webp",
    title: "Family Royal Collection & Kids’ Festive Ensembles",
    categories: [
      "Kids' Wear",
      "Men's Wear",
      "Women's Wear",
      "Bridal Collection",
    ],
    season: "Family Lookbook",
  },

  // Cosmetics & Jewellery & Accessories
  {
    id: 5,
    src: "/5.jpeg",
    title: "Bridal Chuda & Designer Bangles Collection",
    categories: ["Cosmetics & Jewellery", "Bridal Collection"],
    season: "Bridal Jewellery",
  },
  {
    id: 13,
    src: "/13.jpeg",
    title: "Designer Ladies Sandals & Bridal Footwear",
    categories: ["Cosmetics & Jewellery", "Bridal Collection"],
    season: "Footwear Lounge",
  },
  {
    id: 16,
    src: "/16.jpeg",
    title: "Premium Ladies Handbags & Bridal Clutches",
    categories: ["Cosmetics & Jewellery", "Bridal Collection"],
    season: "Accessories",
  },
  {
    id: 17,
    src: "/17.jpeg",
    title: "Bridal Bangles, Cosmetics & Nail Studio",
    categories: ["Cosmetics & Jewellery", "Bridal Collection"],
    season: "Bridal Studio",
  },
  {
    id: 20,
    src: "/20.jpeg",
    title: "Bridal Kundan, Stone & Glass Bangle Vault",
    categories: ["Cosmetics & Jewellery", "Bridal Collection"],
    season: "Traditional Bangles",
  },
  {
    id: 21,
    src: "/21.jpeg",
    title: "Traditional Chuda & Multicolour Bangle Sets",
    categories: ["Cosmetics & Jewellery", "Bridal Collection"],
    season: "Festive Bangles",
  },
  {
    id: 22,
    src: "/22.jpeg",
    title: "Branded Perfumes, Skincare & Luxury Cosmetics",
    categories: ["Cosmetics & Jewellery"],
    season: "Beauty Care",
  },

  // Beauty Parlour Suite
  {
    id: 29,
    src: "/parlor/7.jpeg",
    title: "Jesika Beauty Parlour Complete Salon Suite",
    categories: ["Beauty Parlour", "Bridal Collection"],
    season: "Salon Suite",
  },
  {
    id: 30,
    src: "/parlor/5.jpeg",
    title: "Parlour VIP Waiting Lounge & Makeover Station",
    categories: ["Beauty Parlour"],
    season: "Salon Lounge",
  },
  {
    id: 31,
    src: "/parlor/3.jpeg",
    title: "Hair Spa & Luxury Salon Wash Station",
    categories: ["Beauty Parlour"],
    season: "Hair Therapy",
  },
  {
    id: 32,
    src: "/parlor/1.jpeg",
    title: "Facial Therapy & Bridal Radiance Treatment",
    categories: ["Beauty Parlour", "Bridal Collection"],
    season: "Bridal Glow",
  },
  {
    id: 33,
    src: "/parlor/2.jpeg",
    title: "Professional Bridal HD Makeover Session",
    categories: ["Beauty Parlour", "Bridal Collection"],
    season: "HD Makeover",
  },
  {
    id: 34,
    src: "/parlor/6.jpeg",
    title: "Pre-Bridal Grooming & Skin Nourishing Care",
    categories: ["Beauty Parlour"],
    season: "Skin Care",
  },
  {
    id: 35,
    src: "/1.jpeg",
    title: "Jesika Fashion Store Collection",
    categories: ["Women's Wear", "Men's Wear"],
    season: "Store Collection",
  },
  {
    id: 36,
    src: "/6.jpeg",
    title: "Jesika Fashion Showroom Collection",
    categories: ["Women's Wear", "Kids' Wear"],
    season: "Showroom Collection",
  },
  {
    id: 37,
    src: "/parlor/4.jpeg",
    title: "Beauty Parlour Styling Suite",
    categories: ["Beauty Parlour"],
    season: "Styling Suite",
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans pb-28">
      {/* 1. Header Banner */}
      <div className="border-b border-neutral-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-neutral-900">
            Jesika Visual Archive
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-lg mx-auto font-normal">
            Celebrating 23+ years of Varanasi bridal couture, authentic Banarasi
            silks, men’s festive wear, kids’ outfits, and parlour
            transformations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* 3. Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-12">
          {ALL_GALLERY_IMAGES.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-100 border border-neutral-200 cursor-zoom-in shadow-xs"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                quality={100}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                className="object-cover "
              />
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
            Whether it&apos;s a bridal makeover, a fresh new haircut, or a
            relaxing spa session, our expert stylists are here to bring out your
            best look.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+919839200169"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#000] text-white px-8 py-4 rounded-none text-sm font-bold hover:bg-[#1f2b20] transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 " />
              <span>Book Appointment</span>
            </a>
            <Link
              href="/parlour"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent text-[#000] border border-[#000]  px-8 py-4 rounded-none text-sm font-bold transition-colors"
            >
              <span>View Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Fullscreen Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 select-none cursor-zoom-out"
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
          <div className="relative max-w-4xl max-h-[75vh] w-full h-full flex items-center justify-center">
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

          {/* Image Details Badge */}
          {/* <div
            className="mt-4 text-center z-20 max-w-xl px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-amber-500/20 text-[#e9be87] border border-amber-500/30 mb-2">
              {selectedImage.categories.join(" • ")}
            </span>
            <h3 className="text-white text-sm sm:text-base font-medium">
              {selectedImage.title}
            </h3>
          </div> */}
        </div>
      )}
    </div>
  );
}
