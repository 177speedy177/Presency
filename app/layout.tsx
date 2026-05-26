import type { Metadata, Viewport } from "next"
import { Fraunces, DM_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"

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
    "Presency builds modern websites and manages Google review responses for local businesses. Website redesigns from $1,199 and automated review management from $199/month.",
  keywords: [
    "website redesign for local business",
    "google review responses",
    "local business website",
    "reputation management",
    "small business website builder",
    "local SEO",
  ],
  openGraph: {
    title: "Presency | Online Performance for Local Businesses",
    description:
      "Website redesigns and automated Google review responses for local businesses. From $199/month.",
    type: "website",
    images: [
      {
        url: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 630,
        alt: "Presency — Online Performance for Local Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Presency | Online Performance for Local Businesses",
    description: "Website redesigns and Google review management for local businesses. From $199/month.",
    images: ["https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Presency",
  description: "AI-powered website design and Google review management for local businesses in Philadelphia.",
  url: "https://getpresency.com",
  telephone: "",
  email: "hello@getpresency.com",
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
        {children}
      </body>
    </html>
  )
}
