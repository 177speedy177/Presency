import type { Metadata, Viewport } from "next"
import { Fraunces, DM_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { IntroAnimation } from "@/components/ui/intro-animation"

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
  title: "Presency | Website Redesign & Missed Call Follow-Up for Philadelphia Businesses",
  description:
    "Presency builds modern websites and makes sure every missed call gets an instant text follow-up for local businesses in Philadelphia. Never lose a lead again. From $199/month. 14-day free trial.",
  keywords: [
    "website redesign philadelphia",
    "missed call text back philadelphia",
    "lead follow-up system philadelphia",
    "local business website design",
    "never miss a lead",
    "missed call follow up",
    "small business website philadelphia",
    "local business marketing philadelphia",
  ],
  alternates: {
    canonical: "https://getpresency.com",
  },
  openGraph: {
    title: "Presency | Website Redesign & Missed Call Follow-Up",
    description:
      "Presency builds modern websites and makes sure every missed call gets an instant text follow-up for local businesses in Philadelphia. From $199/month.",
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
    title: "Presency | Website Redesign & Missed Call Follow-Up",
    description: "Presency builds modern websites and makes sure every missed call gets an instant text follow-up for local businesses in Philadelphia. From $199/month.",
    images: ["https://getpresency.com/presency-og.png"],
  },
}

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Presency",
  url: "https://getpresency.com",
  description:
    "Website redesigns and missed call follow-up systems for local businesses in Philadelphia.",
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
  description: "Website redesigns and lead follow-up systems for local businesses in Philadelphia. Never miss a lead.",
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
        name: "Lead Recovery",
        price: "199",
        priceCurrency: "USD",
        description: "Missed call text-back, booking via text, review requests, and customer reactivation. Works with your existing phone number.",
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
      name: "What happens when someone calls my business and I don't answer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Within seconds, your caller receives a text message from your business number. It introduces your business by name and asks how you can help. From there, the conversation continues over text until the customer is scheduled, their question is answered, or they are connected to you directly.",
      },
    },
    {
      "@type": "Question",
      name: "Does this work with my existing phone number?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You keep your current number. We set up a smart layer on top of it so that when a call is missed, the follow-up text goes out from that same number. No new app, no second phone.",
      },
    },
    {
      "@type": "Question",
      name: "How long does setup take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most businesses, your system is live within minutes of setup. You do not need to install anything or learn any new software.",
      },
    },
    {
      "@type": "Question",
      name: "How much does the Lead Recovery plan cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lead Recovery is $199 per month with no contracts. You can cancel anytime. We also offer a free 14-day trial.",
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
        <IntroAnimation />
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
