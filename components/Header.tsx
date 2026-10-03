'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, Phone, X } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Beauty Parlour', href: '/parlour' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200 transition-colors">
      <div className="bg-[#21102b] text-white">
        <div className="max-w-7xl mx-auto min-h-8 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          <span className="text-[9px] sm:text-xs uppercase tracking-[0.24em] text-[#e4a15c] whitespace-nowrap">
            Jesika Fashion
          </span>
          <div className="flex items-center gap-3 sm:gap-5 text-[10px] sm:text-xs whitespace-nowrap">
            <a href="tel:+919839200169" className="inline-flex items-center gap-1.5 hover:text-[#e4a15c] transition-colors">
              <Phone className="w-3 h-3" aria-hidden="true" />
              <span>+91 98392 00169</span>
            </a>
            <span className="hidden sm:block h-3 w-px bg-white/30" aria-hidden="true" />
            <span className="hidden sm:block text-white/85">
              Open Daily: 10 AM – 9:30 PM <span className="text-white/60">(Thu: 9 PM)</span>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[72px] sm:min-h-[88px]">
          <Link href="/" className="relative block w-[62px] h-[62px] sm:w-[78px] sm:h-[78px] shrink-0" aria-label="Jesika Fashion home">
            <Image
              src="/logo.png"
              alt="Jesika Fashion"
              fill
              sizes="(max-width: 640px) 62px, 78px"
              className="object-contain"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[15px] tracking-[0.08em] transition-colors duration-200 ${
                    isActive
                      ? 'text-[#9d735d]'
                      : 'text-[#21102b] hover:text-[#9d735d]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="hidden lg:inline-flex min-h-[52px] items-center justify-center border border-[#d59453] px-7 text-xs uppercase tracking-[0.2em] text-[#9d735d] transition-colors hover:bg-[#9d735d] hover:text-white"
          >
            Visit Showroom
          </Link>

          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#29201d] hover:text-[#9d735d] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white">
          <div className="px-4 pt-3 pb-5 space-y-1.5">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2.5 px-3 rounded-lg text-sm transition-colors ${
                    isActive
                      ? 'bg-neutral-100 text-neutral-900 font-semibold'
                      : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block border border-[#d59453] mt-3 py-3 px-3 text-center text-xs uppercase tracking-[0.18em] text-[#9d735d]"
            >
              Visit Showroom
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
