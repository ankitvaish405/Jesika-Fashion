'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';

function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 12 5 12 5s6.255 0 7.812.418ZM10 15.5l6-3.5-6-3.5v7Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen font-sans pb-16">

      {/* Top Header Section */}
      <div className="border-b border-[#e8ded2]">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-center text-2xl font-bold  tracking-widest text-[#29201d]">
            Contact-Us
          </h1>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">

          {/* Left Column - Contact Form */}
          <div>
            <h2 className="text-[1.1rem] font-bold  tracking-wider mb-8 text-[#29201d]">
              Send Your Question
            </h2>

            {submitted && (
              <div className="mb-6 p-4 border border-[#9d735d]/40 bg-[#f5ebe3] text-[#8c5a47] text-sm flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#9d735d] shrink-0" />
                <span>Thank you for reaching out! Your message has been sent successfully.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-semibold  text-[#736359] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-[#e8ded2] p-3 outline-none focus:border-[#9d735d] transition-colors bg-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold  text-[#736359] mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-[#e8ded2] p-3 outline-none focus:border-[#9d735d] transition-colors bg-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold  text-[#736359] mb-2">
                  Your Message
                </label>
                <textarea
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-[#e8ded2] p-3 outline-none focus:border-[#9d735d] transition-colors resize-y bg-white text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full border-[1.5px] border-[#29201d] bg-white text-[#29201d] font-bold text-sm  tracking-widest py-3.5 hover:bg-[#9d735d] hover:text-white hover:border-[#9d735d] transition-colors duration-300 cursor-pointer shadow-xs"
              >
                Send
              </button>
            </form>
          </div>

          {/* Right Column - Contact Information */}
          <div>
            {/* Address */}
            <div className="mb-8">
              <h3 className="text-[1.1rem] font-bold  tracking-wider mb-4 text-[#29201d]">
                Address
              </h3>
              <div className="flex items-start text-sm text-[#736359]">
                <MapPin className="w-4 h-4 mr-3 text-[#9d735d] shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/MVMphJJv31agtDvG6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed hover:text-[#9d735d] transition-colors"
                >
                  Madan Mohan Malviya Rd Panch Koshi, Near Panch Koshi Chauraha, Paigambapur, Asapur, Rasulabad, Varanasi, Uttar Pradesh 221002
                </a>
              </div>
            </div>

            {/* Phones */}
            <div className="mb-8">
              <h3 className="text-[1.1rem] font-bold  tracking-wider mb-4 text-[#29201d]">
                Phones
              </h3>
              <div className="space-y-3 text-sm text-[#736359]">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-[#9d735d] shrink-0" />
                  <a href="tel:+918924099911" className="hover:text-[#9d735d] font-medium text-base text-[#29201d]">
                    +91 89240 99911
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="mb-8">
              <h3 className="text-[1.1rem] font-bold  tracking-wider mb-4 text-[#29201d]">
                Email
              </h3>
              <div className="flex items-center text-sm text-[#736359]">
                <Mail className="w-4 h-4 mr-3 text-[#9d735d] shrink-0" />
                <a href="mailto:info@jesikafashion.com" className="hover:text-[#9d735d]">
                  info@jesikafashion.com
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="mb-8 p-3.5 sm:p-5 bg-[#fbf5ee] border border-[#e8ded2] overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 border-b border-[#e8ded2] pb-3">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-[#9d735d] shrink-0" />
                  <h3 className="text-[1.1rem] font-bold tracking-wider text-[#29201d]">
                    Working Hours
                  </h3>
                </div>
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#9d735d] bg-[#f0e3d6] px-2 py-0.5 sm:px-2.5 sm:py-1">
                  Open All 7 Days
                </span>
              </div>

              <div className="space-y-1 text-sm sm:text-base">
                <div className="flex items-center justify-between py-2 border-b border-[#ebdcd2] gap-2">
                  <span className="font-semibold text-[#29201d] text-xs sm:text-base">Wednesday:</span>
                  <span className="font-medium text-[#4a3b32] text-xs sm:text-base text-right">10:00 am – 9:30 pm</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#ebdcd2] gap-2">
                  <span className="font-semibold text-[#29201d] text-xs sm:text-base">Thursday:</span>
                  <span className="font-medium text-[#4a3b32] text-xs sm:text-base text-right">10:00 am – 9:00 pm</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#ebdcd2] gap-2">
                  <span className="font-semibold text-[#29201d] text-xs sm:text-base">Friday:</span>
                  <span className="font-medium text-[#4a3b32] text-xs sm:text-base text-right">10:00 am – 9:30 pm</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#ebdcd2] gap-2">
                  <span className="font-semibold text-[#29201d] text-xs sm:text-base">Saturday:</span>
                  <span className="font-medium text-[#4a3b32] text-xs sm:text-base text-right">10:00 am – 9:30 pm</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#ebdcd2] gap-2">
                  <span className="font-semibold text-[#29201d] text-xs sm:text-base">Sunday:</span>
                  <span className="font-medium text-[#4a3b32] text-xs sm:text-base text-right">10:00 am – 9:30 pm</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#ebdcd2] gap-2">
                  <span className="font-semibold text-[#29201d] text-xs sm:text-base">Monday:</span>
                  <span className="font-medium text-[#4a3b32] text-xs sm:text-base text-right">10:00 am – 9:30 pm</span>
                </div>
                <div className="flex items-center justify-between py-2 gap-2">
                  <span className="font-semibold text-[#29201d] text-xs sm:text-base">Tuesday:</span>
                  <span className="font-medium text-[#4a3b32] text-xs sm:text-base text-right">10:00 am – 9:30 pm</span>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-[1.1rem] font-bold tracking-wider mb-4 text-[#29201d]">
                Follow Us
              </h3>
              <div className="flex items-center space-x-5 text-[#29201d]">
                <a href="#" aria-label="Facebook" className="hover:text-[#9d735d] transition-colors">
                  <FacebookIcon className="w-5 h-5 fill-current" />
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-[#9d735d] transition-colors">
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a href="#" aria-label="YouTube" className="hover:text-[#9d735d] transition-colors">
                  <YoutubeIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map Embedded Section */}
        <div className="relative w-full border border-[#e8ded2] mb-8 shadow-xs overflow-hidden">
          <div className="w-full h-[350px] sm:h-[450px]">
            <iframe
              src="https://maps.google.com/maps?q=25.3517155,83.0249369+(JESIKA+FASHION)&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[10%]"
            ></iframe>
          </div>
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 max-w-[calc(100%-1.5rem)]">
            <a
              href="https://maps.app.goo.gl/MVMphJJv31agtDvG6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#29201d] hover:bg-[#9d735d] text-white px-4 sm:px-5 py-2.5 sm:py-3 text-xs font-semibold tracking-wider shadow-lg transition-colors truncate"
            >
              <span>Open in Google Maps</span>
              <span>↗</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}