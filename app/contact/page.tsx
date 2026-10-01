'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, CheckCircle2, Award } from 'lucide-react';

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
    <div className="min-h-screen bg-white text-neutral-900 font-sans pb-16">

      {/* Top Header Section */}
      <div className="border-b border-neutral-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-neutral-900">
            Contact Us
          </h1>
          <p className="mt-2 text-sm text-neutral-600 max-w-md mx-auto font-normal">
            Have questions about our collections, alterations, or bridal parlour services? We’d love to help.
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">

          {/* Left Column - Contact Form */}
          <div>
            <h2 className="text-xl font-sans font-semibold tracking-tight mb-6 text-neutral-900">
              Send Your Message
            </h2>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-800 text-sm flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Thank you for reaching out! Your message has been sent successfully.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-neutral-300 p-3.5 outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors bg-white text-sm"
                  placeholder="e.g. Priya Sharma"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-neutral-300 p-3.5 outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors bg-white text-sm"
                  placeholder="e.g. priya@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-2">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl border border-neutral-300 p-3.5 outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors resize-y bg-white text-sm"
                  placeholder="How can we assist you today?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-neutral-900 text-white font-medium text-sm tracking-wide py-3.5 hover:bg-neutral-800 transition-colors duration-200 cursor-pointer shadow-sm"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column - Contact Information */}
          <div>

            {/* Address */}
            <div className="mb-6">
              <h3 className="text-base font-sans font-semibold tracking-tight mb-2 text-neutral-900">
                Store Address
              </h3>
              <div className="flex items-start text-sm text-neutral-600">
                <MapPin className="w-4 h-4 mr-3 text-neutral-900 shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/MVMphJJv31agtDvG6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed hover:text-black transition-colors"
                >
                  Madan Mohan Malviya Rd Panch Koshi, Near Panch Koshi Chauraha, Paigambapur, Asapur, Rasulabad, Varanasi, Uttar Pradesh 221002
                </a>
              </div>
            </div>

            {/* Phones */}
            <div className="mb-6">
              <h3 className="text-base font-sans font-semibold tracking-tight mb-2 text-neutral-900">
                Direct Phone
              </h3>
              <div className="space-y-3 text-sm text-neutral-600">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-neutral-900 shrink-0" />
                  <a href="tel:+918924099911" className="hover:text-black font-semibold text-base text-neutral-900">
                    +91 89240 99911
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="mb-6">
              <h3 className="text-base font-sans font-semibold tracking-tight mb-2 text-neutral-900">
                Email
              </h3>
              <div className="flex items-center text-sm text-neutral-600">
                <Mail className="w-4 h-4 mr-3 text-neutral-900 shrink-0" />
                <a href="mailto:info@jesikafashion.com" className="hover:text-black font-medium">
                  info@jesikafashion.com
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="mb-6 p-5 bg-[#f8f9fa] border border-neutral-200 rounded-2xl overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 border-b border-neutral-200 pb-3">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-neutral-900 shrink-0" />
                  <h3 className="text-sm font-sans font-semibold text-neutral-900">
                    Working Hours
                  </h3>
                </div>
                <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Open All 7 Days
                </span>
              </div>

              <div className="space-y-1.5 text-xs sm:text-sm">
                <div className="flex items-center justify-between py-1 border-b border-neutral-100 gap-2">
                  <span className="font-medium text-neutral-700">Friday – Wednesday:</span>
                  <span className="font-semibold text-neutral-900 text-right">10:00 am – 9:30 pm</span>
                </div>
                <div className="flex items-center justify-between py-1 gap-2">
                  <span className="font-medium text-neutral-700">Thursday:</span>
                  <span className="font-semibold text-neutral-900 text-right">10:00 am – 9:00 pm</span>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-base font-sans font-semibold tracking-tight mb-3 text-neutral-900">
                Connect on Social Media
              </h3>
              <div className="flex items-center space-x-4 text-neutral-700">
                <a
                  href="https://www.facebook.com/profile.php?id=100086498487410&rdid=iQxAzc7ZvgkZ4223&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DbLHTdPCo%2F#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-2.5 rounded-full border border-neutral-200 hover:bg-neutral-900 hover:text-white transition-colors"
                >
                  <FacebookIcon className="w-4 h-4 fill-current" />
                </a>
                <a
                  href="https://www.instagram.com/jesika._.fashion?utm_source=qr&stkn=MWRzZmZ4enZ1cHFmOA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2.5 rounded-full border border-neutral-200 hover:bg-neutral-900 hover:text-white transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="p-2.5 rounded-full border border-neutral-200 hover:bg-neutral-900 hover:text-white transition-colors"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map Embedded Section */}
        <div className="relative w-full rounded-2xl border border-neutral-200 mb-8 shadow-xs overflow-hidden">
          <div className="w-full h-[350px] sm:h-[420px]">
            <iframe
              src="https://maps.google.com/maps?q=25.3517155,83.0249369+(JESIKA+FASHION)&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 max-w-[calc(100%-1.5rem)]">
            <a
              href="https://maps.app.goo.gl/MVMphJJv31agtDvG6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-black text-white px-4 sm:px-5 py-2.5 sm:py-3 text-xs font-medium rounded-xl shadow-lg transition-colors truncate"
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