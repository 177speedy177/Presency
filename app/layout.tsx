import type { Metadata, Viewport } from "next"
import { Fraunces, DM_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ScrollProgress } from "@/components/ui/scroll-progress"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK"],
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export const metadata: Metadata = {
  title: "Presency | AI-Powered Online Performance for Local Businesses",
  description:
    "Presency builds modern websites and manages Google review responses for local businesses. Website redesigns from $1,199 and review management from $199/month.",
  keywords: [
    "website redesign for local business",
    "google review responses",
    "local business website",
    "reputation management",
    "small business website builder",
    "local SEO",
  ],
  alternates: {
    canonical: "https://getpresency.com",
  },
  openGraph: {
    title: "Presency | Online Performance for Local Businesses",
    description:
      "Website redesigns and Google review management for local businesses. From $199/month.",
    type: "website",
    url: "https://getpresency.com",
    images: [
      {
        url: "https://getpresency.com/presency-og.png",
        width: 1200,
        height: 630,
        alt: "Presency — Putting Philly on the map, one business at a time",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Presency | Online Performance for Local Businesses",
    description: "Website redesigns and Google review management for local businesses. From $199/month.",
    images: ["https://getpresency.com/presency-og.png"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Presency",
  description: "AI-powered website design and Google review management for local businesses in Philadelphia.",
  url: "https://getpresency.com",
  email: "hello@getpresency.com",
  foundingDate: "2026",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Philadelphia",
    addressRegion: "PA",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Philadelphia",
  },
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Presency Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Website Redesign",
        price: "1199",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        name: "Online Presence Plan",
        price: "199",
        priceCurrency: "USD",
        description: "Monthly Google review management",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
