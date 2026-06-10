"use client"
import { RevealDiv } from "@/components/ui/reveal-div"
import { ToothPattern } from "@/components/ui/tooth-pattern"
import { PLANS, PRICING, SITE_CONFIG } from "@/lib/content"

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
    <path d="M3 7l3 3 5-5" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

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
            PLANS
          </p>
          <h2
            className="font-display mb-4"
            style={{ fontSize: "clamp(1.75rem,4vw,3rem)", fontWeight: 300, color: "#1c1810" }}
          >
            Two plans. One goal.
          </h2>
          <p className="font-body text-base max-w-lg mx-auto" style={{ color: "rgba(28,24,16,0.65)" }}>
            Both start with a free Patient Capture Audit so you know exactly what you are getting before anything is set up.
          </p>
        </RevealDiv>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {PLANS.map((plan, i) => {
            const isFeatured = plan.featured
            const textHead = isFeatured ? "#f7f4ef" : "#1c1810"
            const textBody = isFeatured ? "rgba(247,244,239,0.65)" : "rgba(28,24,16,0.65)"
            const textMuted = isFeatured ? "rgba(247,244,239,0.42)" : "rgba(28,24,16,0.4)"

            return (
              <RevealDiv
                key={plan.id}
                delay={i * 120}
                className={`relative flex flex-col rounded-2xl p-8${isFeatured ? " glow-breathe" : ""}`}
                style={{
                  background: isFeatured ? "#13110e" : "#ffffff",
                  border: isFeatured ? "1px solid rgba(201,168,76,0.55)" : "1px solid rgba(201,168,76,0.2)",
                  boxShadow: isFeatured
                    ? "0 0 50px rgba(201,168,76,0.12), 0 16px 48px rgba(0,0,0,0.2)"
                    : "0 4px 20px rgba(28,24,16,0.06)",
                  transition: "box-shadow 0.3s ease, border-color 0.3s ease",
                }}
                onMouseEnter={e => {
                  if (!isFeatured) {
                    e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)"
                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(28,24,16,0.1)"
                  }
                }}
                onMouseLeave={e => {
                  if (!isFeatured) {
                    e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)"
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(28,24,16,0.06)"
                  }
                }}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className="font-mono-label text-xs px-3 py-1 rounded-full whitespace-nowrap"
                      style={{ background: "#c9a84c", color: "#0d0c0a" }}
                    >
                      {plan.badge.toUpperCase()}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <p className="font-mono-label mb-3" style={{ fontSize: "11px", letterSpacing: "0.14em", color: isFeatured ? "#c9a84c" : "#7a5c10" }}>
                    {plan.name.toUpperCase()}
                  </p>

                  {SITE_CONFIG.SHOW_PRICES && (
                    <div className="mb-4">
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-display text-4xl" style={{ fontWeight: 300, color: textHead }}>
                          ${plan.id === "patient-capture" ? PRICING.patientCapture.monthly : PRICING.practiceGrowth.monthly}
                        </span>
                        <span className="font-body text-sm" style={{ color: textMuted }}>/mo</span>
                      </div>
                      <p className="font-body text-xs mt-1" style={{ color: textMuted }}>
                        + ${(plan.id === "patient-capture" ? PRICING.patientCapture.setup : PRICING.practiceGrowth.setup).toLocaleString()} setup
                      </p>
                    </div>
                  )}

                  <p className="font-body text-sm leading-relaxed" style={{ color: textBody }}>
                    {plan.description}
                  </p>
                </div>

                <ul className="flex flex-col gap-2.5 flex-1 mb-8">
                  {plan.includes.map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="font-body text-sm leading-snug" style={{ color: textBody }}>{item}</span>
                    </li>
                  ))}
                </ul>

                {plan.note && (
                  <p className="font-body text-xs italic mb-6" style={{ color: textMuted, borderTop: `1px solid ${isFeatured ? "rgba(201,168,76,0.15)" : "rgba(28,24,16,0.1)"}`, paddingTop: "1rem" }}>
                    {plan.note}
                  </p>
                )}

                <a
                  href="https://calendly.com/397jtc/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center font-body font-medium text-sm py-3 rounded-lg transition-all duration-200 cursor-pointer${isFeatured ? " btn-shimmer" : ""}`}
                  style={
                    isFeatured
                      ? { background: "#c9a84c", color: "#0d0c0a" }
                      : { background: "transparent", color: "#7a5c10", border: "1px solid rgba(201,168,76,0.4)" }
                  }
                  onMouseEnter={e => {
                    if (isFeatured) { e.currentTarget.style.background = "#b8922e" }
                    else { e.currentTarget.style.background = "rgba(201,168,76,0.08)"; e.currentTarget.style.borderColor = "#c9a84c" }
                  }}
                  onMouseLeave={e => {
                    if (isFeatured) { e.currentTarget.style.background = "#c9a84c" }
                    else { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)" }
                  }}
                >
                  {plan.cta}
                </a>
              </RevealDiv>
            )
          })}
        </div>

        <RevealDiv delay={260} className="text-center mt-8">
          <p className="font-body text-sm" style={{ color: "rgba(28,24,16,0.48)" }}>
            {SITE_CONFIG.SHOW_PRICES
              ? "Setup fees apply. All terms are laid out clearly during your free audit, before anything is signed."
              : `Plans start at $${SITE_CONFIG.STARTING_AT_PRICE}/month. Exact pricing is set during your free audit, no surprises.`}
          </p>
        </RevealDiv>
      </div>
    </section>
  )
}
