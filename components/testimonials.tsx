"use client"
import Link from "next/link"
import { RevealDiv } from "@/components/ui/reveal-div"

const samples = [
  {
    business: "Joe's Cuts",
    location: "Fishtown",
    type: "Barbershop",
    reviewer: "Marcus T.",
    stars: 5,
    review: "Best cuts in Fishtown. Been coming here for years — always packed but always worth the wait.",
    response: "Marcus, that means everything to us. Worth the wait is exactly what we shoot for. We'll keep the chairs hot. See you soon. Joe and the crew",
  },
  {
    business: "Bella Vista Bistro",
    location: "South Philly",
    type: "Restaurant",
    reviewer: "Sarah K.",
    stars: 3,
    review: "Food was great but waited 45 minutes for our table even with a reservation. Frustrating.",
    response: "Sarah, thank you for being honest. A 45-minute wait with a reservation is not okay, and we know it. We're adjusting our system this week. We'd love to make it right on your next visit.",
  },
  {
    business: "Fishtown Dental",
    location: "Fishtown",
    type: "Dental Office",
    reviewer: "David R.",
    stars: 5,
    review: "Dr. Kim made my kids actually excited about going to the dentist. Thought that was impossible.",
    response: "David, turning dentist anxiety into dentist excitement is our favorite kind of win. We love having your family — see you at the next visit!",
  },
]

const businessCategories = [
  "Barbershops", "Restaurants", "Dental Offices", "Auto Shops",
  "Gyms & Fitness", "Law Offices", "Nail Salons", "Coffee Shops",
  "Contractors", "Retail Stores", "Med Spas", "Medical Practices",
]

const StarRow = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="12" height="12" viewBox="0 0 14 14"
        fill={i < count ? "#c9a84c" : "rgba(201,168,76,0.2)"} aria-hidden="true">
        <path d="M7 1l1.5 4.5H14l-4 2.8 1.5 4.7L7 10l-4.5 3 1.5-4.7-4-2.8h5.5z" />
      </svg>
    ))}
  </div>
)

export function Testimonials() {
  return (
    <section
      data-theme="light"
      className="section-pad relative overflow-hidden"
      style={{ background: "var(--ink)" }}
    >
      {/* Subtle gold radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <RevealDiv className="text-center mb-14">
          <p className="eyebrow mb-4">SEE THE WORK</p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontWeight: 300,
              color: "var(--text-primary)",
            }}
          >
            What we&apos;d write{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 400 }}>
              for your business.
            </em>
          </h2>
          <p className="font-body text-sm mt-3" style={{ color: "var(--text-muted)" }}>
            Sample responses — the same quality we&apos;d craft for you.
          </p>
        </RevealDiv>

        {/* Cards — mobile scroll / desktop grid */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory md:snap-none -mx-6 md:mx-0 px-6 md:px-0">
          {samples.map((s, i) => (
            <RevealDiv
              key={s.business}
              delay={i * 120}
              className="flex flex-col rounded-2xl overflow-hidden shrink-0 md:shrink snap-start"
              style={{
                background: "rgba(255,255,255,0.9)",
                border: "1px solid rgba(201,168,76,0.18)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)",
                width: "min(85vw, 360px)",
                minWidth: "min(85vw, 360px)",
              }}
            >
              {/* Review half */}
              <div className="p-6 pb-4">
                {/* Business + Google badge */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <p className="font-body text-sm font-semibold leading-snug" style={{ color: "var(--text-primary)" }}>
                      {s.business}
                    </p>
                    <p className="font-mono-label" style={{ fontSize: "9px", color: "var(--text-muted)", letterSpacing: "0.1em" }}>
                      {s.type.toUpperCase()} · {s.location.toUpperCase()}
                    </p>
                  </div>
                  <div
                    className="shrink-0 rounded-full px-2 py-0.5 font-mono-label"
                    style={{ background: "rgba(201,168,76,0.1)", fontSize: "9px", color: "var(--gold)", letterSpacing: "0.08em" }}
                  >
                    GOOGLE
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <StarRow count={s.stars} />
                  <span className="font-body text-xs" style={{ color: "var(--text-muted)" }}>{s.reviewer}</span>
                </div>

                <p className="font-body text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  &ldquo;{s.review}&rdquo;
                </p>
              </div>

              {/* Divider */}
              <div style={{ height: "1px", background: "rgba(201,168,76,0.12)", margin: "0 1.5rem" }} />

              {/* Response half */}
              <div
                className="p-6 pt-4 flex-1"
                style={{ background: "rgba(201,168,76,0.04)" }}
              >
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--gold)" }} />
                  <span className="font-mono-label" style={{ fontSize: "9px", color: "var(--gold)", letterSpacing: "0.1em" }}>
                    OWNER RESPONSE · via Presency
                  </span>
                </div>
                <p className="font-body text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {s.response}
                </p>
              </div>
            </RevealDiv>
          ))}
        </div>

        {/* Scrolling business type strip */}
        <RevealDiv delay={300} className="mt-12 overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
          <div
            className="flex gap-8 whitespace-nowrap"
            style={{ animation: "marqueeScroll 28s linear infinite" }}
          >
            {[...businessCategories, ...businessCategories].map((name, i) => (
              <span
                key={i}
                className="font-body text-sm shrink-0"
                style={{ color: "var(--text-muted)" }}
              >
                {name}
                <span style={{ marginLeft: "2rem", color: "rgba(201,168,76,0.3)" }}>·</span>
              </span>
            ))}
          </div>
          <style>{`
            @keyframes marqueeScroll {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </RevealDiv>

        {/* "Be one of the first" callout */}
        <RevealDiv delay={400}>
          <div
            className="mt-10 rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-5"
            style={{
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            <div>
              <p className="font-display text-lg font-light mb-1" style={{ color: "var(--text-primary)" }}>
                Be one of the first in your neighborhood.
              </p>
              <p className="font-body text-sm" style={{ color: "var(--text-muted)" }}>
                We&apos;re actively building our Philadelphia roster — spots are limited by area.
              </p>
            </div>
            <Link
              href="/contact"
              className="font-body font-medium text-sm px-6 py-3 rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0"
              style={{ background: "var(--gold)", color: "var(--ink)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold-dark)"; e.currentTarget.style.color = "#fff" }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "var(--ink)" }}
            >
              Claim your spot →
            </Link>
          </div>
        </RevealDiv>
      </div>
    </section>
  )
}
