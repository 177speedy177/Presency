import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Presency",
  description:
    "Meet Joey, the founder of Presency. A Philadelphia-built agency helping local businesses look as good online as they do in person.",
  alternates: {
    canonical: "https://getpresency.com/about",
  },
  openGraph: {
    title: "About Presency | Built in Philadelphia for Local Businesses",
    description:
      "Meet the founder of Presency and learn why we started helping local Philadelphia businesses win online.",
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
