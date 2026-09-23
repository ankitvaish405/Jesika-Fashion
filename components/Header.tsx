'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="w-full sticky top-0 z-50 bg-[#fbf8f4]/95 backdrop-blur-md border-b border-[#e8ded2] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Brand Name & Subtitle */}
          <div className="flex-shrink min-w-0 pr-2">
            <Link href="/" className="inline-block group max-w-full">
              <span className="text-lg sm:text-2xl font-serif font-bold text-[#29201d] tracking-tight group-hover:text-[#9d735d] transition-colors block leading-tight truncate">
                Jesika Fashion
              </span>
              <span className="text-[8px] sm:text-[10px] tracking-[0.08em] sm:tracking-[0.2em] uppercase text-[#9d735d] font-sans font-semibold block truncate">
                All In One Store & Beauty Parlour
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm transition-colors duration-200 tracking-wide ${
                    isActive
                      ? 'text-[#9d735d] font-semibold border-b-2 border-[#9d735d] pb-1'
                      : 'text-[#6e5d54] hover:text-[#29201d] font-medium'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
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
        <div className="md:hidden border-t border-[#e8ded2] bg-[#fbf8f4]">
          <div className="px-4 pt-3 pb-5 space-y-1.5">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block py-2.5 px-3 rounded text-sm transition-colors ${
                    isActive
                      ? 'bg-[#f3ede5] text-[#9d735d] font-semibold'
                      : 'text-[#6e5d54] hover:bg-[#f7f1eb] hover:text-[#29201d]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
