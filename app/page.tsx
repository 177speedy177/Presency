import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { ComplianceStrip } from "@/components/compliance-strip"
import { WhatWeDo } from "@/components/services"
import { ContactSection } from "@/components/contact-section"
import { Problem } from "@/components/results"
import { Plans } from "@/components/plans"
import { BuiltForLocal } from "@/components/built-for"
import { FounderNote } from "@/components/video-intro"
import { FAQ } from "@/components/faq"
import { AuditCTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { StickyContactBar } from "@/components/sticky-contact-bar"

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <ComplianceStrip />
      <WhatWeDo />
      <Problem />
      <Plans />
      <BuiltForLocal />
      <FounderNote />
      <FAQ />
      <AuditCTA />
      <ContactSection />
      <Footer />
      <StickyContactBar />
    </main>
  )
}
