import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Presency",
  description:
    "Meet Joey, the founder of Presency. A Penn State Biomedical Engineering student building patient-capture systems for independent dental practices in Philadelphia.",
  alternates: {
    canonical: "https://getpresency.com/about",
  },
  openGraph: {
    title: "About Presency | Patient Capture for Philadelphia Dental Practices",
    description:
      "Why Presency exists: independent practices doing excellent work should not lose new patients to a missed call or an unanswered web form.",
    url: "https://getpresency.com/about",
  },
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Joey",
  jobTitle: "Founder",
  worksFor: {
    "@type": "LocalBusiness",
    name: "Presency",
    url: "https://getpresency.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Philadelphia",
    addressRegion: "PA",
    addressCountry: "US",
  },
  email: "hello@getpresency.com",
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {children}
    </>
  )
}
