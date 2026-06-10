import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { ComplianceStrip } from "@/components/compliance-strip"
import { WhatWeDo } from "@/components/services"
import { MissedCallCalculator } from "@/components/cost-calculator"
import { Problem } from "@/components/results"
import { Plans } from "@/components/plans"
import { DentalFeatures } from "@/components/dental-features"
import { FounderNote } from "@/components/video-intro"
import { FAQ } from "@/components/faq"
import { AuditCTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { StickyContactBar } from "@/components/sticky-contact-bar"
import { SeePlansButton } from "@/components/see-plans-button"

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <ComplianceStrip />
      <WhatWeDo />
      <MissedCallCalculator />
      <Problem />
      <Plans />
      <DentalFeatures />
      <FounderNote />
      <FAQ />
      <AuditCTA />
      <Footer />
      <StickyContactBar />
      <SeePlansButton />
    </main>
  )
}
