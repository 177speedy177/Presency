"use client"
import { RevealDiv } from "@/components/ui/reveal-div"
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
      className="section-pad"
      style={{ background: "var(--ink)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealDiv className="text-center mb-14">
          <p className="eyebrow mb-4">PLANS</p>
          <h2
            className="font-display mb-4"
            style={{ fontSize: "clamp(1.75rem,4vw,3rem)", fontWeight: 300, color: "var(--text-primary)" }}
          >
            Two plans.{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 400 }}>
              One goal.
            </em>
          </h2>
          <p className="font-body text-base max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
            Both start with a free Patient Capture Audit so you know exactly what you are getting before anything is set up.
          </p>
        </RevealDiv>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PLANS.map((plan, i) => (
            <RevealDiv
              key={plan.id}
              delay={i * 120}
              className="relative flex flex-col rounded-2xl p-8"
              style={{
                background: plan.featured ? "#0d0c0a" : "var(--surface-card)",
                border: plan.featured ? "2px solid var(--gold)" : "1px solid rgba(201,168,76,0.2)",
                boxShadow: plan.featured
                  ? "0 0 40px rgba(201,168,76,0.12), 0 8px 32px rgba(0,0,0,0.3)"
                  : "0 4px 24px rgba(0,0,0,0.06)",
                transition: "box-shadow 0.3s ease, border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (!plan.featured) {
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.45)"
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)"
                }
              }}
              onMouseLeave={(e) => {
                if (!plan.featured) {
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)"
                  e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)"
                }
              }}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span
                    className="font-mono-label text-xs px-3 py-1 rounded-full whitespace-nowrap"
                    style={{ background: "var(--gold)", color: "#0d0c0a" }}
                  >
                    {plan.badge.toUpperCase()}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p
                  className="eyebrow mb-2"
                  style={{ color: plan.featured ? "var(--gold)" : "var(--gold)" }}
                >
                  {plan.name.toUpperCase()}
                </p>

                {SITE_CONFIG.SHOW_PRICES ? (
                  <div className="mb-3">
                    <div className="flex items-baseline gap-1.5">
                      <span
                        className="font-display text-4xl"
                        style={{ fontWeight: 300, color: plan.featured ? "var(--text-primary)" : "var(--text-primary)" }}
                      >
                        ${plan.id === "patient-capture"
                          ? PRICING.patientCapture.monthly
                          : PRICING.practiceGrowth.monthly}
                      </span>
                      <span className="font-body text-sm" style={{ color: plan.featured ? "var(--text-secondary)" : "var(--text-muted)" }}>
                        /mo
                      </span>
                    </div>
                    <p className="font-body text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                      + ${plan.id === "patient-capture"
                        ? PRICING.patientCapture.setup.toLocaleString()
                        : PRICING.practiceGrowth.setup.toLocaleString()} setup
                    </p>
                  </div>
                ) : null}

                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: plan.featured ? "var(--text-secondary)" : "var(--text-secondary)" }}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="flex flex-col gap-2.5 flex-1 mb-8">
                {plan.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span
                      className="font-body text-sm leading-snug"
                      style={{ color: plan.featured ? "var(--text-secondary)" : "var(--text-secondary)" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.note && (
                <p
                  className="font-body text-xs italic mb-6 pb-6"
                  style={{
                    color: "var(--text-muted)",
                    borderBottom: "1px solid rgba(201,168,76,0.1)",
                  }}
                >
                  {plan.note}
                </p>
              )}

              <a
                href="https://calendly.com/397jtc/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center font-body font-medium text-sm py-3 rounded-lg transition-all duration-200 cursor-pointer"
                style={
                  plan.featured
                    ? { background: "var(--gold)", color: "#0d0c0a" }
                    : { background: "transparent", color: "var(--gold)", border: "1px solid rgba(201,168,76,0.35)" }
                }
                onMouseEnter={(e) => {
                  if (plan.featured) {
                    e.currentTarget.style.background = "var(--gold-light)"
                  } else {
                    e.currentTarget.style.background = "rgba(201,168,76,0.08)"
                    e.currentTarget.style.borderColor = "var(--gold)"
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.featured) {
                    e.currentTarget.style.background = "var(--gold)"
                  } else {
                    e.currentTarget.style.background = "transparent"
                    e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)"
                  }
                }}
              >
                {plan.cta}
              </a>
            </RevealDiv>
          ))}
        </div>

        {!SITE_CONFIG.SHOW_PRICES && (
          <RevealDiv delay={250} className="text-center mt-8">
            <p className="font-body text-sm" style={{ color: "var(--text-muted)" }}>
              Pricing is discussed during the free audit. No surprises.
            </p>
          </RevealDiv>
        )}
      </div>
    </section>
  )
}
