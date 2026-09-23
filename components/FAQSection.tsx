'use client';

import React, { useState } from 'react';
import { ChevronDown, MessageCircle, Phone, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'Do you offer home delivery in Varanasi or shipping across India?',
    answer:
      'Yes, absolutely! For local customers in Varanasi, we provide same-day or next-day home delivery for all clothing collections (Banarasi sarees, suits, sherwanis, kids\' wear) and cosmetics. For customers outside Varanasi, we deliver safely across Uttar Pradesh and all over India via express courier partners. You can easily order via WhatsApp or phone call.',
    category: 'Delivery & Shipping',
  },
  {
    question: 'How long does custom alteration & fitting take?',
    answer:
      'We have dedicated in-house master tailors inside our store. Quick adjustments—such as saree fall & pico, trouser waist/length shortening, and minor lehenga or suit alterations—are completed within 30 to 60 minutes while you browse or same-day. Custom blouse tailoring, sherwani sizing, and extensive fitting usually take 24 to 48 hours.',
    category: 'Tailoring & Alterations',
  },
  {
    question: 'How do I book an appointment for the Beauty Parlour or Bridal Makeover?',
    answer:
      'Booking is very easy and fast! You can click our WhatsApp button to message us directly, call us on +91 89240 99911, or walk straight into our store. For bridal makeovers, pre-bridal packages, and party makeup, we recommend booking a few days in advance so our senior makeup artists can reserve a dedicated slot and offer you a personalized consultation.',
    category: 'Beauty Parlour & Appointments',
  },
  {
    question: 'Can I shop for the entire family under one roof?',
    answer:
      'Yes, Jesika Fashion & Cosmetics is Varanasi’s true all-in-one family destination. We feature dedicated sections for Women\'s Wear (Banarasi silk sarees, bridal & party lehengas, designer suits), Men\'s Wear (royal sherwanis, kurtas, formals), Kids\' Wear (boys & girls festive collections), plus a complete professional women’s Beauty Parlour and cosmetics counter.',
    category: 'Store & Collections',
  },
  {
    question: 'What are your store operational timings and exact location in Varanasi?',
    answer:
      'We are open all 7 days a week! Our store hours are 10:00 AM – 9:30 PM from Friday to Wednesday, and 10:00 AM – 9:00 PM on Thursdays. We are conveniently located at Madan Mohan Malviya Rd Panch Koshi, Near Panch Koshi Chauraha, Paigambapur, Asapur, Varanasi (UP 221002) with accessible road access and parking.',
    category: 'Timings & Location',
  },
  {
    question: 'What is your exchange and return policy on clothes and cosmetics?',
    answer:
      'We want you to be completely satisfied with your purchase. We offer hassle-free size and product exchanges within 7 days of purchase upon presenting the original store invoice and tags. Cosmetics and beauty products must be unopened and sealed for hygienic reasons.',
    category: 'Returns & Exchanges',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const phoneNumber = '918924099911';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    'Hello Jesika Fashion, I have a question regarding store products and parlour services.'
  )}`;

  return (
    <section className="bg-white py-20 border-t border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-neutral-900">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-2 font-normal">
            Everything you need to know about our Varanasi store, delivery, alteration timelines, and parlour bookings.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border transition-all duration-200 bg-white rounded-xl overflow-hidden ${
                  isOpen ? 'border-neutral-900 shadow-sm' : 'border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                >
                  <span className="text-base sm:text-lg font-sans font-medium text-neutral-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen
                        ? 'bg-neutral-900 text-white border-neutral-900 rotate-180'
                        : 'bg-neutral-100 text-neutral-700 border-neutral-200 rotate-0'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-600 font-normal leading-relaxed border-t border-neutral-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions - Luxury CTA */}
        
      </div>
    </section>
  );
}
