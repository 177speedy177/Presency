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
  title: "Presency | Online Presence Management & Website Redesign for Local Businesses",
  description:
    "Presency manages your entire Google online presence and builds modern websites for local businesses in Philadelphia. Google Business Profile optimization, review responses, local SEO. Plans from $199/month. 14-day free trial.",
  keywords: [
    "online presence management philadelphia",
    "google business profile management",
    "website redesign philadelphia",
    "local seo philadelphia",
    "local business website design",
    "google review management",
    "reputation management philadelphia",
    "small business website philadelphia",
  ],
  alternates: {
    canonical: "https://getpresency.com",
  },
  openGraph: {
    title: "Presency | Online Presence Management & Website Redesign",
    description:
      "Presency manages your entire Google online presence and builds modern websites for local businesses in Philadelphia. Plans from $199/month.",
    type: "website",
    url: "https://getpresency.com",
    images: [
      {
        url: "https://getpresency.com/presency-og.png",
        width: 1200,
        height: 630,
        alt: "Presency: Bringing Philly Businesses the Exposure They Deserve",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Presency | Online Presence Management & Website Redesign",
    description: "Presency manages your entire Google online presence and builds modern websites for local businesses in Philadelphia. Plans from $199/month.",
    images: ["https://getpresency.com/presency-og.png"],
  },
}

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Presency",
  url: "https://getpresency.com",
  description:
    "Online presence management and website redesigns for local businesses in Philadelphia.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://getpresency.com/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Presency",
  description: "Online presence management and website redesign for local businesses in Philadelphia.",
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
        description: "Custom mobile-first website design and development, delivered in 2 weeks.",
      },
      {
        "@type": "Offer",
        name: "Online Presence Plan",
        price: "199",
        priceCurrency: "USD",
        description: "Monthly Google Business Profile management, review responses, and local search optimization.",
      },
    ],
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Online Presence Plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Online Presence Plan is a fully managed monthly service that covers everything your Google presence needs: Business Profile optimization, review responses posted on your behalf, local search visibility improvements, and a monthly performance report.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to give you my Google password?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We connect to your Google Business Profile through Google's official API. We never ask for or store your password.",
      },
    },
    {
      "@type": "Question",
      name: "How much does the Online Presence Plan cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Online Presence Plan is $199 per month with no contracts. You can cancel anytime. We also offer a free 14-day trial.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a website redesign cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Website redesigns start at $1,199, a one-time fee. This includes custom design, mobile-first development, SEO-ready structure, and 2 rounds of revisions, delivered in 2 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Do you help with local SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Google Business Profile optimization is a core part of the Online Presence Plan. We keep your profile complete, accurate, and actively managed, which is one of the highest-impact things a local business can do for search visibility.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a free trial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Your first 14 days are completely free. No credit card required.",
      },
    },
  ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
