import { FinalCTA, Pricing, HowItWorks, Features, Stats, Hero, Navbar, Footer } from "../components/landing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grid - Your Barbershop Schedule, Perfectly Organized",
  description: "Grid is a professional booking platform for barbershops. Create your branded booking page in minutes, manage appointments with precision, and stop the scheduling chaos. Start your 14-day free trial today.",
  keywords: [
    "barbershop booking system",
    "barber appointment scheduling",
    "barbershop management software",
    "online booking for barbers",
    "salon scheduling",
    "appointment booking platform",
    "barbershop software",
    "booking system for barbershops",
  ],
  authors: [{ name: "Grid Team" }],
  creator: "Grid",
  publisher: "Grid",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://gridschedule.com",
    siteName: "Grid",
    title: "Grid - Your Barbershop Schedule, Perfectly Organized",
    description: "Professional booking platform for barbershops. Manage appointments with precision and create your branded booking page in minutes. 14-day free trial.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Grid - Barbershop Booking Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grid - Your Barbershop Schedule, Perfectly Organized",
    description: "Professional booking platform for barbershops. Create your branded booking page and manage appointments with precision.",
    images: ["/og-image.png"],
    creator: "@gridschedule",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_APP_URL || "https://gridschedule.com",
  },
};

export default function LandingPage() {
  // Structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Grid",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "description": "14-day free trial, no credit card required"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "operatingSystem": "Web",
    "description": "Professional booking platform for barbershops. Create your branded booking page in minutes, manage appointments with precision, and stop the scheduling chaos.",
    "url": process.env.NEXT_PUBLIC_APP_URL || "https://gridschedule.com",
    "screenshot": "/og-image.png",
    "featureList": [
      "Online appointment booking",
      "Barbershop management dashboard",
      "Custom branded booking pages",
      "Real-time availability calendar",
      "Multi-language support",
      "International phone number validation",
      "Theme customization"
    ]
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Grid",
    "url": process.env.NEXT_PUBLIC_APP_URL || "https://gridschedule.com",
    "logo": `${process.env.NEXT_PUBLIC_APP_URL || "https://gridschedule.com"}/favicon.webp`,
    "description": "Grid helps barbershops manage bookings with precision.",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "support@grid.com",
      "contactType": "Customer Support",
      "availableLanguage": ["English", "Portuguese"]
    },
    "sameAs": [
      "https://twitter.com/gridschedule",
      "https://linkedin.com/company/gridschedule"
    ]
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      
      <div className="bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300">
        <Navbar />
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Pricing />
        <FinalCTA />
        <Footer />
      </div>
    </>
  );
}
