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
  title: "Presency | Patient-Capture System for Dental Practices in Philadelphia",
  description:
    "Presency makes sure every missed call, after-hours call, and web inquiry to your dental practice gets an instant follow-up, so the patients you already paid to attract actually book. Built for independent practices in Philadelphia.",
  keywords: [
    "dental patient capture philadelphia",
    "missed call follow-up dental practice",
    "dental practice lead recovery",
    "after hours dental follow-up",
    "dental appointment follow-up system",
    "independent dental practice marketing philadelphia",
    "dental missed call text back",
    "patient capture system philadelphia",
  ],
  alternates: {
    canonical: "https://getpresency.com",
  },
  openGraph: {
    title: "Presency | Patient-Capture System for Dental Practices",
    description:
      "Every missed call is a patient walking into another office. Presency makes sure every missed call, after-hours call, and web inquiry to your practice gets an instant follow-up.",
    type: "website",
    url: "https://getpresency.com",
    images: [
      {
        url: "https://getpresency.com/presency-og.png",
        width: 1200,
        height: 630,
        alt: "Presency: Patient-capture systems for independent dental practices in Philadelphia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Presency | Patient-Capture System for Dental Practices",
    description:
      "Every missed call is a patient walking into another office. Presency makes sure every missed call, after-hours call, and web inquiry to your practice gets an instant follow-up.",
    images: ["https://getpresency.com/presency-og.png"],
  },
}

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Presency",
  url: "https://getpresency.com",
  description:
    "Patient-capture systems for independent dental practices in Philadelphia.",
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Presency",
  description:
    "Patient-capture systems for independent dental practices in Philadelphia. Instant follow-up on missed calls, after-hours calls, and web inquiries.",
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
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What happens when a patient calls a dental practice and no one answers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Within seconds, your practice's number sends an automatic text to the caller. The message introduces the practice by name and invites them to reply or book. It goes out whether the call came in during lunch, after hours, or when the front desk was on another line.",
      },
    },
    {
      "@type": "Question",
      name: "Does the Presency patient-capture system work with our existing phone number?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Your practice number stays the same. We configure one simple call-handling setting so unanswered calls trigger the follow-up. No new phones and no new apps for your staff.",
      },
    },
    {
      "@type": "Question",
      name: "How is patient privacy handled?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Automated messages are designed to contain no patient health information. They are appointment-invitation messages, not clinical communications. Anything involving personal health details is routed to your front desk to handle directly.",
      },
    },
    {
      "@type": "Question",
      name: "How long does setup take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most practices are live within about 10 business days. We handle the configuration. Your team does a brief 30-minute walkthrough to get familiar with the inbox and handoff process.",
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
