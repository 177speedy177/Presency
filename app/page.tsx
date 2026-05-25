import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { Results } from "@/components/results"
import { BeforeAfter } from "@/components/before-after"
import { Process } from "@/components/process"
import { ClientTypes } from "@/components/client-types"
import { VideoIntro } from "@/components/video-intro"
import { Testimonials } from "@/components/testimonials"
import { Services } from "@/components/services"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { StickyContactBar } from "@/components/sticky-contact-bar"
import { SeePlansButton } from "@/components/see-plans-button"

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Results />
      <Services />
      <BeforeAfter />
      <Process />
      <ClientTypes />
      <VideoIntro />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <SeePlansButton />
      <StickyContactBar />
    </main>
  )
}
