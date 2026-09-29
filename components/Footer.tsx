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
              <span className="text-2xl font-sans font-bold tracking-tight text-[#faf7f2]">
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
                <a href="tel:+918924099911" className="hover:text-[#faf7f2] transition-colors font-semibold">
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

          {/* Col 3: Clothing Collections */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#faf7f2] mb-4">
              Fashion Store
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
                <Link href="/contact" className="hover:text-[#faf7f2] transition-colors">In-Store Custom Alterations</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#faf7f2] transition-colors">Visual Archive & Lookbook</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Parlour & Beauty Care */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#faf7f2] mb-4">
              Beauty Parlour
            </h4>
            <ul className="space-y-2.5 text-sm text-[#beb1a7]">
              <li>
                <Link href="/parlour" className="hover:text-[#faf7f2] transition-colors">HD & Airbrush Bridal Makeup</Link>
              </li>
              <li>
                <Link href="/parlour" className="hover:text-[#faf7f2] transition-colors">Pre-Bridal Glow Packages</Link>
              </li>
              <li>
                <Link href="/parlour" className="hover:text-[#faf7f2] transition-colors">Skin Radiance & Facials</Link>
              </li>
              <li>
                <Link href="/parlour" className="hover:text-[#faf7f2] transition-colors">Hair Spa, Styling & Keratin</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#faf7f2] transition-colors">Book Parlour Appointment</Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Social Media */}
      <div className="border-t border-[#382b26] py-6 text-xs text-[#8e7e75]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="hidden sm:block w-32" />
          <p className="text-center">© {new Date().getFullYear()} Jesika Fashion & Cosmetics. All rights reserved.</p>
          <div className="flex items-center justify-center sm:justify-end gap-3 text-[#cbb193] w-auto sm:w-32">
            <a
              href="https://www.facebook.com/profile.php?id=100086498487410&rdid=iQxAzc7ZvgkZ4223&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DbLHTdPCo%2F#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-[#2f2420] border border-[#44352f] flex items-center justify-center hover:bg-[#9d735d] hover:text-white hover:border-[#9d735d] transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/jesika._.fashion?utm_source=qr&stkn=MWRzZmZ4enZ1cHFmOA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-[#2f2420] border border-[#44352f] flex items-center justify-center hover:bg-[#9d735d] hover:text-white hover:border-[#9d735d] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-8 h-8 rounded-full bg-[#2f2420] border border-[#44352f] flex items-center justify-center hover:bg-[#9d735d] hover:text-white hover:border-[#9d735d] transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 12 5 12 5s6.255 0 7.812.418ZM10 15.5l6-3.5-6-3.5v7Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
