import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/results"
import { WhatWeDo } from "@/components/services"
import { HowItWorks } from "@/components/process"
import { Plans } from "@/components/plans"
import { DentalFeatures } from "@/components/dental-features"
import { FounderNote } from "@/components/video-intro"
import { FAQ } from "@/components/faq"
import { AuditCTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { SeePlansButton } from "@/components/see-plans-button"
import { StickyContactBar } from "@/components/sticky-contact-bar"

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <WhatWeDo />
      <HowItWorks />
      <Plans />
      <DentalFeatures />
      <FounderNote />
      <FAQ />
      <AuditCTA />
      <Footer />
      <SeePlansButton />
      <StickyContactBar />
    </main>
  )
}
