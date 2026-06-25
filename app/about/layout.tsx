import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Presency",
  description:
    "Meet Joey, the founder of Presency. A Penn State Biomedical Engineering student building websites, Google, and reputation for local businesses.",
  alternates: {
    canonical: "https://getpresency.com/about",
  },
  openGraph: {
    title: "About Presency | Websites, Google, and Reputation for Local Businesses",
    description:
      "Why Presency exists: excellent local businesses should not lose customers to competitors who simply show up better online.",
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
