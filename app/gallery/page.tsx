"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  X,
  Phone,
  ChevronLeft,
  ChevronRight,
  Shirt,
  Sparkles,
  Baby,
  Heart,
  Gem,
  Scissors,
  Users,
  Grid3X3,
} from "lucide-react";

export type CategoryId =
  | "all"
  | "mens"
  | "womens"
  | "kids"
  | "cosmetics"
  | "parlor"
  | "family";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: CategoryId;
  categoryLabel: string;
  season?: string;
}

const CATEGORIES: {
  id: CategoryId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  { id: "all", label: "All Collections", icon: Grid3X3 },
  { id: "mens", label: "Men's Wear", icon: Shirt },
  { id: "womens", label: "Women's Wear", icon: Heart },
  { id: "kids", label: "Kids' Wear", icon: Baby },
  { id: "cosmetics", label: "Cosmetics & Jewellery", icon: Gem },
  { id: "parlor", label: "Beauty Parlour", icon: Scissors },
  { id: "family", label: "Family Collection", icon: Users },
];

export const ALL_GALLERY_IMAGES: GalleryItem[] = [
  // --- MEN'S WEAR (9 items) ---
  {
    id: 101,
    src: "/mens/1.jpeg",
    title: "Men’s Designer Kurta & Festive Ethnic Rack",
    category: "mens",
    categoryLabel: "Men's Wear",
    season: "Festive Collection",
  },
  {
    id: 102,
    src: "/mens/2.jpeg",
    title: "Men’s Denim Lounge & Branded Casual Trousers",
    category: "mens",
    categoryLabel: "Men's Wear",
    season: "Casual Wear",
  },
  {
    id: 103,
    src: "/mens/3.jpeg",
    title: "Men’s Formal Shirts & Premium Suiting Display",
    category: "mens",
    categoryLabel: "Men's Wear",
    season: "Formal Lounge",
  },
  {
    id: 104,
    src: "/mens/4.jpeg",
    title: "Royal Sherwani & Groom Wedding Ensembles",
    category: "mens",
    categoryLabel: "Men's Wear",
    season: "Wedding Collection",
  },
  {
    id: 105,
    src: "/mens/5.jpeg",
    title: "Men’s Casual Check Shirts & Everyday Denims",
    category: "mens",
    categoryLabel: "Men's Wear",
    season: "Everyday Fit",
  },
  {
    id: 106,
    src: "/mens/6.jpeg",
    title: "Traditional Bundi Jackets & Kurta Pajama Sets",
    category: "mens",
    categoryLabel: "Men's Wear",
    season: "Ethnic Edition",
  },
  {
    id: 107,
    src: "/mens/7.jpeg",
    title: "Embroidered Silk Indo-Western Suits",
    category: "mens",
    categoryLabel: "Men's Wear",
    season: "Royal Edition",
  },
  {
    id: 108,
    src: "/mens/8.jpeg",
    title: "Groom Wedding Collection & Shawl Accents",
    category: "mens",
    categoryLabel: "Men's Wear",
    season: "Bridal Season",
  },
  {
    id: 109,
    src: "/mens/9.jpeg",
    title: "Men’s Party Wear & Celebration Kurtas",
    category: "mens",
    categoryLabel: "Men's Wear",
    season: "Party Edition",
  },

  // --- WOMEN'S WEAR (25 items) ---
  {
    id: 201,
    src: "/womens/1.jpeg",
    title: "Pure Banarasi Katan Silk Saree",
    category: "womens",
    categoryLabel: "Women's Wear",
    season: "Heritage Silk",
  },
  {
    id: 202,
    src: "/womens/2.jpeg",
    title: "Handwoven Zari Brocade Bridal Saree",
    category: "womens",
    categoryLabel: "Women's Wear",
    season: "Bridal Silks",
  },
  {
    id: 203,
    src: "/womens/3.jpeg",
    title: "Royal Crimson Bridal Lehenga Choli",
    category: "womens",
    categoryLabel: "Women's Wear",
    season: "Bridal Couture",
  },
  {
    id: 204,
    src: "/womens/4.jpeg",
    title: "Designer Embroidered Anarkali Gown",
    category: "womens",
    categoryLabel: "Women's Wear",
    season: "Festive Suite",
  },
  {
    id: 205,
    src: "/womens/5.jpeg",
    title: "Banarasi Georgette & Organza Saree",
    category: "womens",
    categoryLabel: "Women's Wear",
    season: "Silk Edit",
  },
  {
    id: 206,
    src: "/womens/6.jpeg",
    title: "Handcrafted Zardozi Wedding Lehenga",
    category: "womens",
    categoryLabel: "Women's Wear",
    season: "Couture Luxe",
  },
  {
    id: 207,
    src: "/womens/7.jpeg",
    title: "Traditional Varanasi Silk Saree Collection",
    category: "womens",
    categoryLabel: "Women's Wear",
    season: "Varanasi Heritage",
  },
  {
    id: 208,
    src: "/womens/8.jpeg",
    title: "Pastel Velvet Embroidered Bridal Lehenga",
    category: "womens",
    categoryLabel: "Women's Wear",
    season: "Modern Bridal",
  },
  {
    id: 209,
    src: "/womens/9.jpeg",
    title: "Festive Party Wear Kurti & Sharara Set",
    category: "womens",
    categoryLabel: "Women's Wear",
    season: "Festive Bloom",
  },
  {
    id: 210,
    src: "/womens/10.jpeg",
    title: "Classic Tussar Silk Saree with Temple Border",
    category: "womens",
    categoryLabel: "Women's Wear",
    season: "Temple Weaves",
  },
  {
    id: 211,
    src: "/womens/11.jpeg",
    title: "Embellished Floor-Length Evening Gown",
    category: "womens",
    categoryLabel: "Women's Wear",
    season: "Party Glam",
  },
  {
    id: 212,
    src: "/womens/12.jpeg",
    title: "Intricate Resham Work Party Lehenga",
    category: "womens",
    categoryLabel: "Women's Wear",
    season: "Celebration",
  },
  {
    id: 213,
    src: "/womens/13.jpeg",
    title: "Yellow Haldi Special Silk Saree & Drape",
    category: "womens",
    categoryLabel: "Women's Wear",
    season: "Haldi Rituals",
  },
  {
    id: 214,
    src: "/womens/14.jpeg",
    title: "Emerald Green Mehendi Festive Lehenga",
    category: "womens",
    categoryLabel: "Women's Wear",
    season: "Mehendi Look",
  },
  {
    id: 215,
    src: "/womens/15.jpeg",
    title: "Pure Tissue Silk Festive Designer Saree",
    category: "womens",
    categoryLabel: "Women's Wear",
    season: "Golden Luxe",
  },
  {
    id: 216,
    src: "/womens/16.jpeg",
    title: "Royal Red Heritage Trousseau Saree",
    category: "womens",
    categoryLabel: "Women's Wear",
    season: "Wedding Vows",
  },
  {
    id: 217,
    src: "/womens/17.jpeg",
    title: "Mirror Work Crop-Top & Flare Skirt Set",
    category: "womens",
    categoryLabel: "Women's Wear",
    season: "Festive Boho",
  },
  {
    id: 218,
    src: "/womens/18.jpeg",
    title: "Authentic Zari Pallu Bridal Silk Saree",
    category: "womens",
    categoryLabel: "Women's Wear",
    season: "Bespoke Silks",
  },
  {
    id: 219,
    src: "/womens/19.jpeg",
    title: "Shimmer Georgette Cocktail Drape Saree",
    category: "womens",
    categoryLabel: "Women's Wear",
    season: "Cocktail Nights",
  },
  {
    id: 220,
    src: "/womens/20.jpeg",
    title: "Heavy Hand-Embroidered Bridal Dupatta & Ensemble",
    category: "womens",
    categoryLabel: "Women's Wear",
    season: "Bridal Splendor",
  },
  {
    id: 221,
    src: "/womens/21.jpeg",
    title: "Soft Chiffon Printed Casual Sarees",
    category: "womens",
    categoryLabel: "Women's Wear",
    season: "Daily Elegance",
  },
  {
    id: 222,
    src: "/womens/22.jpeg",
    title: "Vibrant Cotton-Silk Festive Saree Counter",
    category: "womens",
    categoryLabel: "Women's Wear",
    season: "Festival Joy",
  },
  {
    id: 223,
    src: "/womens/23.jpeg",
    title: "Contemporary Indo-Western Reception Set",
    category: "womens",
    categoryLabel: "Women's Wear",
    season: "Reception Wear",
  },
  {
    id: 224,
    src: "/womens/24.jpeg",
    title: "Traditional Banarasi Tanchoi Silk Saree",
    category: "womens",
    categoryLabel: "Women's Wear",
    season: "Tanchoi Weaves",
  },
  {
    id: 225,
    src: "/womens/25.jpeg",
    title: "Regal Velvet Zari Embroidered Bridal Suit",
    category: "womens",
    categoryLabel: "Women's Wear",
    season: "Winter Bridal",
  },

  // --- KIDS' WEAR (9 items) ---
  {
    id: 301,
    src: "/kids/1.jpeg",
    title: "Girls’ Princess Fluffy Birthday Gown",
    category: "kids",
    categoryLabel: "Kids' Wear",
    season: "Kids Party Wear",
  },
  {
    id: 302,
    src: "/kids/2.jpeg",
    title: "Boys’ Royal Kurta Pajama with Nehru Jacket",
    category: "kids",
    categoryLabel: "Kids' Wear",
    season: "Festive Junior",
  },
  {
    id: 303,
    src: "/kids/3.jpeg",
    title: "Little Girls’ Festive Silk Lehenga Choli",
    category: "kids",
    categoryLabel: "Kids' Wear",
    season: "Ethnic Princess",
  },
  {
    id: 304,
    src: "/kids/4.jpeg",
    title: "Boys’ 3-Piece Formal Party Suit & Blazer",
    category: "kids",
    categoryLabel: "Kids' Wear",
    season: "Junior Gentleman",
  },
  {
    id: 305,
    src: "/kids/5.jpeg",
    title: "Baby & Toddler Soft Cotton Festive Sets",
    category: "kids",
    categoryLabel: "Kids' Wear",
    season: "Comfort Toddler",
  },
  {
    id: 306,
    src: "/kids/6.jpeg",
    title: "Girls’ Designer Ruffle Frock & Hairband Set",
    category: "kids",
    categoryLabel: "Kids' Wear",
    season: "Birthday Glam",
  },
  {
    id: 307,
    src: "/kids/7.jpeg",
    title: "Boys’ Casual Denim & Printed Summer Shirt",
    category: "kids",
    categoryLabel: "Kids' Wear",
    season: "Playtime Cool",
  },
  {
    id: 308,
    src: "/kids/8.jpeg",
    title: "Festive Dhoti Kurta Ensemble for Young Boys",
    category: "kids",
    categoryLabel: "Kids' Wear",
    season: "Puja Celebrations",
  },
  {
    id: 309,
    src: "/kids/9.jpeg",
    title: "Kids’ Complete Celebration & Party Collection",
    category: "kids",
    categoryLabel: "Kids' Wear",
    season: "Festive Special",
  },

  // --- COSMETICS & JEWELLERY (17 items) ---
  {
    id: 401,
    src: "/cosmetics/1.jpeg",
    title: "Bridal Red & Gold Chuda Bangle Set",
    category: "cosmetics",
    categoryLabel: "Cosmetics & Jewellery",
    season: "Bridal Vault",
  },
  {
    id: 402,
    src: "/cosmetics/2.jpeg",
    title: "Traditional Kundan & Polki Bridal Jewellery",
    category: "cosmetics",
    categoryLabel: "Cosmetics & Jewellery",
    season: "Heritage Kundan",
  },
  {
    id: 403,
    src: "/cosmetics/3.jpeg",
    title: "Handcrafted Glass & Velvet Lac Bangles",
    category: "cosmetics",
    categoryLabel: "Cosmetics & Jewellery",
    season: "Festive Bangles",
  },
  {
    id: 404,
    src: "/cosmetics/4.jpeg",
    title: "Designer Bridal Clutch & Evening Potlis",
    category: "cosmetics",
    categoryLabel: "Cosmetics & Jewellery",
    season: "Luxury Clutches",
  },
  {
    id: 405,
    src: "/cosmetics/5.jpeg",
    title: "Premium Skincare & Bridal Glow Essentials",
    category: "cosmetics",
    categoryLabel: "Cosmetics & Jewellery",
    season: "Skin Elixir",
  },
  {
    id: 406,
    src: "/cosmetics/6.jpeg",
    title: "Branded Fragrances & Luxury Ittar Collection",
    category: "cosmetics",
    categoryLabel: "Cosmetics & Jewellery",
    season: "Royal Aromas",
  },
  {
    id: 407,
    src: "/cosmetics/7.jpeg",
    title: "HD Bridal Makeup Cosmetics Palette",
    category: "cosmetics",
    categoryLabel: "Cosmetics & Jewellery",
    season: "HD Glam",
  },
  {
    id: 408,
    src: "/cosmetics/8.jpeg",
    title: "Embellished Wedding Heels & Ethnic Sandals",
    category: "cosmetics",
    categoryLabel: "Cosmetics & Jewellery",
    season: "Footwear Lounge",
  },
  {
    id: 409,
    src: "/cosmetics/9.jpeg",
    title: "Gold-Plated Temple Jewellery Choker Set",
    category: "cosmetics",
    categoryLabel: "Cosmetics & Jewellery",
    season: "Temple Gold",
  },
  {
    id: 410,
    src: "/cosmetics/10.jpeg",
    title: "Colourful Silk Thread Bangles Display",
    category: "cosmetics",
    categoryLabel: "Cosmetics & Jewellery",
    season: "Thread Weaves",
  },
  {
    id: 411,
    src: "/cosmetics/11.jpeg",
    title: "Bridal Maang Tikka, Nath & Passa Accessories",
    category: "cosmetics",
    categoryLabel: "Cosmetics & Jewellery",
    season: "Bridal Accents",
  },
  {
    id: 412,
    src: "/cosmetics/12.jpeg",
    title: "Luxury Lip Shades, Eyeliners & Foundations",
    category: "cosmetics",
    categoryLabel: "Cosmetics & Jewellery",
    season: "Beauty Bar",
  },
  {
    id: 413,
    src: "/cosmetics/13.jpeg",
    title: "Zardozi Handcrafted Bridal Batua Bag",
    category: "cosmetics",
    categoryLabel: "Cosmetics & Jewellery",
    season: "Handcrafted Bags",
  },
  {
    id: 414,
    src: "/cosmetics/14.jpeg",
    title: "Contemporary Statement Earrings & Jhumkas",
    category: "cosmetics",
    categoryLabel: "Cosmetics & Jewellery",
    season: "Earring Studio",
  },
  {
    id: 415,
    src: "/cosmetics/15.jpeg",
    title: "Professional Hair Styling Tools & Serums",
    category: "cosmetics",
    categoryLabel: "Cosmetics & Jewellery",
    season: "Hair Rituals",
  },
  {
    id: 416,
    src: "/cosmetics/16.jpeg",
    title: "Traditional Multicolour Glass Bangle Aisle",
    category: "cosmetics",
    categoryLabel: "Cosmetics & Jewellery",
    season: "Varanasi Bangles",
  },
  {
    id: 417,
    src: "/cosmetics/17.jpeg",
    title: "Complete Bridal Trousseau Vanity Kit",
    category: "cosmetics",
    categoryLabel: "Cosmetics & Jewellery",
    season: "Trousseau Kit",
  },

  // --- BEAUTY PARLOUR (8 items) ---
  {
    id: 501,
    src: "/parlor/1.jpeg",
    title: "Facial Therapy & Bridal Radiance Treatment",
    category: "parlor",
    categoryLabel: "Beauty Parlour",
    season: "Bridal Glow",
  },
  {
    id: 502,
    src: "/parlor/2.jpeg",
    title: "Professional Bridal HD Makeover Session",
    category: "parlor",
    categoryLabel: "Beauty Parlour",
    season: "HD Makeover",
  },
  {
    id: 503,
    src: "/parlor/3.jpeg",
    title: "Hair Spa & Luxury Salon Wash Station",
    category: "parlor",
    categoryLabel: "Beauty Parlour",
    season: "Hair Therapy",
  },
  {
    id: 504,
    src: "/parlor/4.jpeg",
    title: "Beauty Parlour Styling Suite & Mirrors",
    category: "parlor",
    categoryLabel: "Beauty Parlour",
    season: "Styling Suite",
  },
  {
    id: 505,
    src: "/parlor/5.jpeg",
    title: "Parlour VIP Waiting Lounge & Makeover Station",
    category: "parlor",
    categoryLabel: "Beauty Parlour",
    season: "Salon Lounge",
  },
  {
    id: 506,
    src: "/parlor/6.jpeg",
    title: "Pre-Bridal Grooming & Skin Nourishing Care",
    category: "parlor",
    categoryLabel: "Beauty Parlour",
    season: "Skin Nourish",
  },
  {
    id: 507,
    src: "/parlor/7.jpeg",
    title: "Jesika Beauty Parlour Complete Salon Suite",
    category: "parlor",
    categoryLabel: "Beauty Parlour",
    season: "Salon Suite",
  },
  {
    id: 508,
    src: "/parlor/hero-model.jpg",
    title: "Signature Bridal Makeover & Hair Artistry",
    category: "parlor",
    categoryLabel: "Beauty Parlour",
    season: "Signature Look",
  },

  // --- FAMILY COLLECTION (3 items) ---
  {
    id: 601,
    src: "/family/1.webp",
    title: "Jesika Family Festive Ensembles Lookbook",
    category: "family",
    categoryLabel: "Family Collection",
    season: "Royal Family",
  },
  {
    id: 602,
    src: "/family/2.jpeg",
    title: "Coordinated Wedding Couture for the Entire Family",
    category: "family",
    categoryLabel: "Family Collection",
    season: "Matching Family",
  },
  {
    id: 603,
    src: "/family/3.jpeg",
    title: "Grand Family Fashion Floor & Celebrations",
    category: "family",
    categoryLabel: "Family Collection",
    season: "Festive Joy",
  },
];

function GalleryContent() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("category") as CategoryId) || "all";

  const [activeCategory, setActiveCategory] =
    useState<CategoryId>(initialCategory);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  // Sync category if URL search param updates
  useEffect(() => {
    const cat = searchParams.get("category") as CategoryId;
    if (cat && CATEGORIES.some((c) => c.id === cat)) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  // Filtered images list
  const filteredImages = useMemo(() => {
    if (activeCategory === "all") {
      return ALL_GALLERY_IMAGES;
    }
    return ALL_GALLERY_IMAGES.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  // Current selected image in lightbox
  const selectedImage =
    selectedImageIndex !== null ? filteredImages[selectedImageIndex] : null;

  const [isModalLoading, setIsModalLoading] = useState(true);

  // Preload adjacent images for instant next/prev browsing
  useEffect(() => {
    if (selectedImageIndex === null || filteredImages.length === 0) return;
    const nextIdx = (selectedImageIndex + 1) % filteredImages.length;
    const prevIdx =
      (selectedImageIndex - 1 + filteredImages.length) % filteredImages.length;

    const preload = (src: string) => {
      if (typeof window !== "undefined") {
        const img = new window.Image();
        img.src = src;
      }
    };

    preload(filteredImages[nextIdx].src);
    preload(filteredImages[prevIdx].src);
  }, [selectedImageIndex, filteredImages]);

  // Reset loading state when selected image changes
  useEffect(() => {
    if (selectedImageIndex !== null) {
      setIsModalLoading(true);
    }
  }, [selectedImageIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImageIndex(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedImageIndex((prev) =>
          prev !== null
            ? (prev - 1 + filteredImages.length) % filteredImages.length
            : null
        );
      } else if (e.key === "ArrowRight") {
        setSelectedImageIndex((prev) =>
          prev !== null ? (prev + 1) % filteredImages.length : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, filteredImages.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalLoading(true);
    setSelectedImageIndex((prev) =>
      prev !== null
        ? (prev - 1 + filteredImages.length) % filteredImages.length
        : null
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalLoading(true);
    setSelectedImageIndex((prev) =>
      prev !== null ? (prev + 1) % filteredImages.length : null
    );
  };

  const handlePrefetch = (src: string) => {
    if (typeof window !== "undefined") {
      const img = new window.Image();
      img.src = src;
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans pb-28">
      {/* 1. Header Banner */}
      <div className="border-b border-neutral-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14 sm:py-16 text-center">
          {/* <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#9d735d] bg-[#fbf6f0] border border-[#d59453]/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Curated Showroom Showcase
          </span> */}
          <h1 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-neutral-900">
            Jesika Visual Archive
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto font-normal">
            Browse our complete photo gallery across Men’s Wear, Women’s Silks &
            Bridal Lehengas, Kids’ Festive Wear, Cosmetics, Beauty Parlour
            Makeovers, and Family Collections.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* 2. Category Filter Tabs */}
        <div className="sticky top-[73px] sm:top-[89px] z-30 bg-white/95 backdrop-blur-md py-4 border-b border-neutral-200 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none sm:flex-wrap sm:justify-center">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSelectedImageIndex(null);
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#21102b] text-white shadow-sm ring-1 ring-[#21102b]"
                      : "bg-neutral-100/80 hover:bg-neutral-200/70 text-neutral-700 border border-neutral-200/80"
                  }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 ${
                      isActive ? "text-[#e4a15c]" : "text-neutral-500"
                    }`}
                  />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* 3. Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 pt-8">
          {filteredImages.map((item, index) => (
            <div
              key={item.id}
              onClick={() => {
                setIsModalLoading(true);
                setSelectedImageIndex(index);
              }}
              onMouseEnter={() => handlePrefetch(item.src)}
              className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-100 border border-neutral-200 cursor-pointer shadow-xs"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                unoptimized
                priority={index < 8}
                loading={index < 8 ? "eager" : "lazy"}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 4. CTA Section */}
      <section className="bg-white border-t border-neutral-200 py-16 sm:py-24 px-4 mt-16 sm:mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-semibold tracking-tight mb-5 text-neutral-900">
            Ready for your transformation?
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto mb-9 font-normal">
            Whether it&apos;s wedding shopping, bespoke bridal styling, or a
            rejuvenating parlour makeover session, visit Jesika Fashion in
            Varanasi.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+919839200169"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#21102b] text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#341a45] transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#e4a15c]" />
              <span>Book Appointment</span>
            </a>
            <Link
              href="/parlour"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent text-[#21102b] border border-[#21102b] px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-neutral-100 transition-colors"
            >
              <span>View Parlour Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Fullscreen Lightbox Modal */}
      {selectedImage && selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-6 select-none"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors cursor-pointer"
            aria-label="Close Preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* Large Centered Image Container with Loading Spinner */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center cursor-zoom-out"
            onClick={() => setSelectedImageIndex(null)}
          >
            {isModalLoading && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="w-10 h-10 border-4 border-white/20 border-t-white rounded-full animate-spin" />
              </div>
            )}
            <Image
              key={selectedImage.src}
              src={selectedImage.src}
              alt={selectedImage.title}
              fill
              unoptimized
              className={`object-contain transition-opacity duration-150 ${
                isModalLoading ? "opacity-0" : "opacity-100"
              }`}
              priority
              onLoad={() => setIsModalLoading(false)}
            />
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        </div>
      )}
    </div>
  );
}

export default function GalleryPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center text-neutral-500 text-sm">
          Loading Gallery...
        </div>
      }
    >
      <GalleryContent />
    </Suspense>
  );
}
