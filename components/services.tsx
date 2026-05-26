"use client"
import Link from "next/link"
import { RevealDiv } from "@/components/ui/reveal-div"

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
    <path d="M3 8l3.5 3.5 6.5-7" stroke="#c9a84c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export function Services() {
  return (
    <section
      id="services"
      data-theme="light"
      className="section-pad"
      style={{ background: "var(--ink)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <RevealDiv className="text-center mb-16">
          <p className="eyebrow mb-4">WHAT WE DO</p>
          <h2
            className="font-display mb-4"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontWeight: 300,
              color: "var(--text-primary)",
            }}
          >
            Choose your level of{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--gold)" }}>growth.</em>
          </h2>
          <p
            className="font-body text-lg max-w-xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Two services, fully managed. You run your business. We handle everything online.
          </p>
        </RevealDiv>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-6 max-w-4xl mx-auto">

          {/* ── Card 1: Website Redesign ── */}
          <RevealDiv
            delay={0}
            className="relative flex flex-col rounded-2xl p-8 cursor-pointer"
            style={{
              background: "rgba(255,255,255,0.85)",
              border: "1px solid rgba(201,168,76,0.22)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              transition: "opacity 0.7s ease, transform 0.7s ease, box-shadow 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)"
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.12), 0 0 20px rgba(201,168,76,0.1)"
              e.currentTarget.style.transform = "translateY(-3px)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(201,168,76,0.22)"
              e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.08)"
              e.currentTarget.style.transform = "translateY(0)"
            }}
          >
            <div className="mb-5">
              <p className="eyebrow mb-3">WEBSITE REDESIGN</p>
              <div className="flex items-baseline gap-1.5 mb-1">
                <span
                  className="font-display text-4xl"
                  style={{ fontWeight: 300, color: "var(--text-primary)" }}
                >
                  $1,199
                </span>
                <span className="font-body text-sm" style={{ color: "var(--text-muted)" }}>
                  one-time
                </span>
              </div>
              <p className="font-body text-sm italic mb-4" style={{ color: "var(--text-secondary)" }}>
                A modern, high-converting website. Built once, yours forever.
              </p>
              <p className="font-body text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                We design and build a fast, mobile-first website that actually converts
                visitors into customers. Clean, professional, and tailored to your business.
              </p>
            </div>

            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {[
                "Custom design matched to your brand",
                "Mobile-first, fast-loading build",
                "SEO-ready structure and metadata",
                "Contact form and Google Maps integration",
                "2 rounds of revisions",
                "Delivered in 2 weeks",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="font-body text-sm leading-snug" style={{ color: "var(--text-secondary)" }}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="block text-center font-body font-medium text-sm py-3 rounded-lg transition-all duration-200 cursor-pointer"
              style={{
                background: "transparent",
                color: "var(--gold)",
                border: "1px solid rgba(201,168,76,0.35)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(201,168,76,0.1)"
                e.currentTarget.style.borderColor = "var(--gold)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent"
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)"
              }}
            >
              Get a free quote
            </Link>
            <p className="font-body text-xs italic text-center mt-3" style={{ color: "var(--gold)" }}>
              Freelancers charge $2,000–$5,000 for this. Not here.
            </p>
          </RevealDiv>

          {/* ── Card 2: Online Presence Plan (featured) ── */}
          <RevealDiv
            delay={120}
            dataTheme="dark"
            className="relative flex flex-col rounded-2xl p-8 cursor-pointer"
            style={{
              background: "#0d0c0a",
              border: "2px solid var(--gold)",
              boxShadow: "0 0 40px rgba(201,168,76,0.12), 0 8px 32px rgba(0,0,0,0.4)",
              transition: "opacity 0.7s ease, transform 0.7s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 60px rgba(201,168,76,0.2), 0 12px 48px rgba(0,0,0,0.5)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 40px rgba(201,168,76,0.12), 0 8px 32px rgba(0,0,0,0.4)"
            }}
          >
            {/* Most Popular badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span
                className="font-mono-label text-xs px-3 py-1 rounded-full"
                style={{ background: "var(--gold)", color: "#0d0c0a" }}
              >
                MOST POPULAR
              </span>
            </div>

            <div className="mb-5">
              <p className="eyebrow mb-3" style={{ color: "var(--gold)" }}>
                ONLINE PRESENCE PLAN
              </p>
              <div className="flex items-baseline gap-1.5 mb-1">
                <span
                  className="font-display text-4xl"
                  style={{ fontWeight: 300, color: "var(--text-primary)" }}
                >
                  $199
                </span>
                <span className="font-body text-sm" style={{ color: "var(--text-secondary)" }}>
                  /month
                </span>
              </div>
              <p className="font-body text-sm italic mb-4" style={{ color: "var(--text-secondary)" }}>
                Your reputation, handled for you.
              </p>
              <p className="font-body text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                We handle your Google review responses so every customer feels heard
                and your ranking keeps climbing. Set it up once, we do the rest.
              </p>
            </div>

            <div
              className="rounded-xl p-4 mb-4"
              style={{
                background: "rgba(201,168,76,0.07)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <p
                className="font-mono-label mb-3"
                style={{ fontSize: "10px", letterSpacing: "0.14em", color: "var(--gold)" }}
              >
                CORE SERVICE: REVIEW RESPONSES
              </p>
              <ul className="flex flex-col gap-2.5">
                {[
                  "Every Google review responded to, on your behalf",
                  "Responses posted within 4 minutes",
                  "Custom brand voice that sounds like you",
                  "5-star and negative review handling",
                  "Professionally written, never robotic",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="font-body text-sm leading-snug" style={{ color: "var(--text-secondary)" }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-4" style={{ borderTop: "1px solid rgba(201,168,76,0.12)" }} />

            <p
              className="font-mono-label mb-3"
              style={{ fontSize: "10px", letterSpacing: "0.14em", color: "var(--text-muted)" }}
            >
              ALSO INCLUDED
            </p>
            <ul className="flex flex-col gap-2.5 mb-8 flex-1">
              {[
                "Monthly performance report",
                "Google Business Profile optimization",
                "Cancel anytime, no contracts",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="font-body text-sm leading-snug" style={{ color: "var(--text-secondary)" }}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="block text-center font-body font-medium text-sm py-3 rounded-lg transition-all duration-200 cursor-pointer"
              style={{ background: "var(--gold)", color: "#0d0c0a" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--gold-light)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--gold)"
              }}
            >
              Start free, 14 days
            </Link>
          </RevealDiv>
        </div>

        {/* Not sure CTA */}
        <div className="text-center mb-5">
          <p className="font-body text-sm" style={{ color: "var(--text-muted)" }}>
            Not sure which fits?{" "}
            <Link href="/contact" className="link-gold-light">
              Book a free 15-min call
            </Link>
          </p>
        </div>

        {/* Bundle callout */}
        <RevealDiv
          delay={250}
          className="max-w-4xl mx-auto rounded-2xl p-6 mt-2"
          style={{
            background: "rgba(201,168,76,0.05)",
            border: "1px solid rgba(201,168,76,0.2)",
          }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p
                className="font-mono-label mb-1"
                style={{ fontSize: "10px", letterSpacing: "0.14em", color: "var(--gold)" }}
              >
                BUNDLE OFFER
              </p>
              <p className="font-display text-lg" style={{ fontWeight: 300, color: "var(--text-primary)" }}>
                Website Redesign + Online Presence Plan
              </p>
              <p className="font-body text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
                Get both services together at one bundled rate. Less than paying for each separately.
              </p>
            </div>
            <div className="text-center sm:text-right shrink-0">
              <p className="font-display text-3xl" style={{ fontWeight: 300, color: "var(--text-primary)" }}>
                $1,350
              </p>
              <p className="font-body text-xs" style={{ color: "var(--text-muted)" }}>
                first month · then $199/mo
              </p>
            </div>
          </div>
        </RevealDiv>
      </div>
    </section>
  )
}
