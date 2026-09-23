import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#241c19] text-[#e8dfd5] font-sans border-t border-[#382b26]">

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-serif font-bold tracking-tight text-[#faf7f2]">
                Jesika Fashion
              </span>
            </Link>
            <p className="text-sm text-[#beb1a7] font-light leading-relaxed max-w-sm">
              All in one clothing store in Varanasi offering Women’s wear, Men’s wear, Kids’ wear, and a full-service professional Beauty Parlour.
            </p>
            <div className="pt-2 text-xs text-[#a8998f] space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#cbb193] shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/MVMphJJv31agtDvG6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#faf7f2] transition-colors leading-relaxed"
                >
                  Madan Mohan Malviya Rd Panch Koshi, Near Panch Koshi Chauraha, Paigambapur, Asapur, Rasulabad, Varanasi, UP 221002
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#cbb193] shrink-0" />
                <a href="tel:+918924099911" className="hover:text-[#faf7f2] transition-colors font-semibold text-white">
                  +91 89240 99911
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#cbb193] shrink-0" />
                <span>Open All 7 Days: 10:00 AM – 9:30 PM (Thu: 10:00 AM – 9:00 PM)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#cbb193] shrink-0" />
                <span>info@jesikafashion.com</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#faf7f2] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-[#beb1a7]">
              <li>
                <Link href="/" className="hover:text-[#faf7f2] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/parlour" className="hover:text-[#faf7f2] transition-colors">Beauty Parlour</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#faf7f2] transition-colors">Visual Gallery</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#faf7f2] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#faf7f2] transition-colors">Contact & Store</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Verticals */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#faf7f2] mb-4">
              Store Verticals
            </h4>
            <ul className="space-y-2.5 text-sm text-[#beb1a7]">
              <li>
                <Link href="/gallery" className="hover:text-[#faf7f2] transition-colors">Women&apos;s Wear (Sarees & Lehengas)</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#faf7f2] transition-colors">Men&apos;s Wear (Kurtas & Sherwanis)</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#faf7f2] transition-colors">Kids&apos; Wear (Boys & Girls)</Link>
              </li>
              <li>
                <Link href="/parlour" className="hover:text-[#faf7f2] transition-colors">Beauty Parlour & Bridal Care</Link>
              </li>
              <li>
                <Link href="/parlour" className="hover:text-[#faf7f2] transition-colors">Cosmetics & Beauty Care</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Client Care */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#faf7f2] mb-4">
              Client Care
            </h4>
            <ul className="space-y-2.5 text-sm text-[#beb1a7]">
              <li>
                <Link href="/contact" className="hover:text-[#faf7f2] transition-colors">Book Private Appointment</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#faf7f2] transition-colors">Shipping & Returns Policy</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#faf7f2] transition-colors">Authenticity Guarantee</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#faf7f2] transition-colors">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#faf7f2] transition-colors">Order Tracking</Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Terms */}
      <div className="border-t border-[#382b26] py-6 text-xs text-[#8e7e75]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Jesika Fashion & Cosmetics. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="/about" className="hover:text-[#faf7f2] transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-[#faf7f2] transition-colors">Terms of Service</Link>
            <Link href="/about" className="hover:text-[#faf7f2] transition-colors">Sustainability Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
