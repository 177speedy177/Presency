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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  title: "Presency | Websites, Google, and Reviews for Local Businesses",
  description:
    "Presency is a local digital agency. We build your website, optimize your Google Business Profile, and manage your reviews, so local customers find you, trust you, and choose you.",
  keywords: [
    "local business website design",
    "Google Business Profile optimization",
    "review management for local business",
    "local SEO agency",
    "small business web design",
    "reputation management",
    "get found on Google",
    "local digital marketing agency",
  ],
  alternates: {
    canonical: "https://getpresency.com",
  },
  openGraph: {
    title: "Presency | Websites, Google, and Reviews for Local Businesses",
    description:
      "Presency builds your website, runs your Google presence, and manages your reviews, so local customers find you, trust you, and choose you.",
    type: "website",
    url: "https://getpresency.com",
    images: [
      {
        url: "https://getpresency.com/og.png",
        width: 1200,
        height: 630,
        alt: "Presency: websites, Google, and reputation for local businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Presency | Websites, Google, and Reviews for Local Businesses",
    description:
      "Presency builds your website, runs your Google presence, and manages your reviews, so local customers find you, trust you, and choose you.",
    images: ["https://getpresency.com/og.png"],
  },
}

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Presency",
  url: "https://getpresency.com",
  description:
    "Websites, Google Business Profile optimization, and reputation management for local businesses.",
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Presency",
  description:
    "A local digital agency. Presency builds websites, optimizes Google Business Profiles, and manages reviews and reputation for local businesses.",
  url: "https://getpresency.com",
  email: "hello@getpresency.com",
  foundingDate: "2026",
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What exactly does Presency do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Presency is a local digital agency. We build your website, optimize and manage your Google Business Profile, run your review and reputation building, handle your social posting, and make sure your business shows up when people search. You can start with one piece and add the rest over time.",
      },
    },
    {
      "@type": "Question",
      name: "Do I have to buy everything at once?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Most businesses start with the foundation, usually a professional website, and grow from there. We recommend the smallest first step that moves the needle, then layer on Google, reviews, and social as it makes sense. There is no pressure to take it all on day one.",
      },
    },
    {
      "@type": "Question",
      name: "How does pricing work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing depends on what your business actually needs, so we set it during a free conversation rather than posting fixed tiers. You will know exactly what you are getting and what it costs before anything starts.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build the website, or just advise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build it, host it, and manage it. You do not touch the technical side. You get a fast, modern, mobile-ready site, and when something needs to change, you tell us and we handle it.",
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
