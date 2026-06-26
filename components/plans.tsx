"use client"
import { RevealDiv } from "@/components/ui/reveal-div"
import { ToothPattern } from "@/components/ui/tooth-pattern"

const STEPS = [
  {
    label: "Step one",
    title: "We talk",
    body: "A free conversation about your business, your goals, and where customers are slipping away.",
  },
  {
    label: "Step two",
    title: "We start where it matters",
    body: "Usually a professional website, the foundation everything else builds on.",
  },
  {
    label: "Step three",
    title: "We grow your presence",
    body: "Layer in Google Business Profile, reviews, social, and AI visibility as it makes sense, all done for you.",
  },
]

export function Plans() {
  return (
    <section
      id="plans"
      data-theme="light"
      className="section-pad relative overflow-hidden"
      style={{ background: "#faf7f2" }}
    >
      <ToothPattern variant={1} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <RevealDiv className="text-center mb-14">
          <p className="font-mono-label mb-4" style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#7a5c10" }}>
            HOW WE WORK
          </p>
          <h2
            className="font-display mb-4"
            style={{ fontSize: "clamp(1.75rem,4vw,3rem)", fontWeight: 300, color: "#1c1810" }}
          >
            Start small, <span style={{ fontStyle: "italic", color: "#c9a84c" }}>grow into the rest</span>
          </h2>
          <p className="font-body text-base max-w-lg mx-auto" style={{ color: "rgba(28,24,16,0.65)" }}>
            Every engagement begins with a free, no-pressure conversation about your goals.
          </p>
        </RevealDiv>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {STEPS.map((step, i) => (
            <RevealDiv
              key={step.title}
              delay={i * 120}
              className="relative flex flex-col rounded-2xl p-8"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(201,168,76,0.2)",
                boxShadow: "0 4px 20px rgba(28,24,16,0.06)",
                transition: "box-shadow 0.3s ease, border-color 0.3s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)"
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(28,24,16,0.1)"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)"
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(28,24,16,0.06)"
              }}
            >
              <p className="font-mono-label mb-3" style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#7a5c10" }}>
                {step.label.toUpperCase()}
              </p>
              <h3 className="font-display mb-3" style={{ fontSize: "1.5rem", fontWeight: 300, color: "#1c1810" }}>
                {step.title}
              </h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(28,24,16,0.65)" }}>
                {step.body}
              </p>
            </RevealDiv>
          ))}
        </div>

        <RevealDiv delay={420} className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block text-center font-body font-medium text-sm py-3 px-8 rounded-lg transition-all duration-200 cursor-pointer btn-shimmer"
            style={{ background: "#c9a84c", color: "#0d0c0a" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#b8922e" }}
            onMouseLeave={e => { e.currentTarget.style.background = "#c9a84c" }}
          >
            Start the conversation
          </a>
        </RevealDiv>

        <RevealDiv delay={500} className="text-center mt-8">
          <p className="font-body text-sm" style={{ color: "rgba(28,24,16,0.48)" }}>
            No tiers, no pressure. We scope the right starting point with you, free.
          </p>
        </RevealDiv>
      </div>
    </section>
  )
}
