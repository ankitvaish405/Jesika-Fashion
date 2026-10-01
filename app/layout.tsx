import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jesikafashion.com'),
  title: {
    default: "Jesika Fashion | Complete Family Fashion Store & Beauty Parlour (Since 2003)",
    template: "%s | Jesika Fashion Varanasi",
  },
  description: "Established in 2003 in Varanasi, Jesika Fashion offers complete family shopping—Women's, Men's & Kids' wear, in-house master alterations, and a professional Beauty Parlour.",
  applicationName: "Jesika Fashion",
  authors: [{ name: "Jesika Fashion" }],
  keywords: [
    "Jesika Fashion",
    "Jesika Fashion Varanasi",
    "Clothing Store in Varanasi",
    "Beauty Parlour Varanasi",
    "Banarasi Saree Varanasi",
    "Bridal Lehenga Varanasi",
    "Men Sherwani Varanasi",
    "Kids Wear Varanasi",
    "Panch Koshi Chauraha Asapur"
  ],
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
      { url: '/logo.png', sizes: '48x48', type: 'image/png' },
      { url: '/logo.png', sizes: '96x96', type: 'image/png' },
      { url: '/logo.png', sizes: '192x192', type: 'image/png' },
      { url: '/logo.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/logo.png',
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Jesika Fashion | Complete Family Fashion Store & Beauty Parlour",
    description: "Serving Varanasi families with authentic ethnic wear, bridal couture, and salon care since 2003.",
    url: "https://jesikafashion.com",
    siteName: "Jesika Fashion",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Jesika Fashion Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesika Fashion | Complete Family Store & Beauty Parlour",
    description: "Varanasi's trusted all-in-one family store and beauty parlour since 2003.",
    images: ["/logo.png"],
  },
  verification: {
    google: "tiz9jDlCVXlGAfNYCQ0k5trWzdX5Jf_q2Yp0Fxruwak",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["ClothingStore", "BeautySalon", "Organization"],
  "name": "Jesika Fashion",
  "alternateName": "Jesika Fashion Varanasi",
  "url": "https://jesikafashion.com",
  "logo": "https://jesikafashion.com/logo.png",
  "image": "https://jesikafashion.com/logo.png",
  "description": "Complete Family Fashion Store & Beauty Parlour in Varanasi since 2003. Banarasi Sarees, Lehengas, Sherwanis, Kids Wear, and HD Bridal Makeover.",
  "foundingDate": "2003",
  "telephone": "+918924099911",
  "email": "info@jesikafashion.com",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Madan Mohan Malviya Rd Panch Koshi, Near Panch Koshi Chauraha, Paigambapur, Asapur, Rasulabad",
    "addressLocality": "Varanasi",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "221002",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "25.3444",
    "longitude": "83.0234"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Friday", "Saturday", "Sunday"],
      "opens": "10:00",
      "closes": "21:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Thursday",
      "opens": "10:00",
      "closes": "21:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/jesika._.fashion"
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" type="image/png" sizes="48x48" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-black overflow-x-hidden w-full max-w-full" suppressHydrationWarning>
        <Header />
        <main className="flex-1 w-full max-w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-1CVV31FF24" />
    </html>
  );
}
