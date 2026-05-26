"use client"
import { RevealDiv } from "@/components/ui/reveal-div"

const testimonials = [
  {
    quote:
      "I was getting maybe one review a month and never had time to respond. Now every review gets answered faster than I can even read it. My Google rating went from 4.1 to 4.7 in four months.",
    name: "Tony Russo",
    role: "Owner, Russo's Plumbing & Heating",
    location: "Northeast Philadelphia",
    initials: "TR",
    stars: 5,
    date: "4 months ago",
  },
  {
    quote:
      "My clients started mentioning they found me because of my reviews. That never happened before. Presency made my shop look active and professional online even when I'm slammed on a Saturday.",
    name: "Keisha Williams",
    role: "Owner, Style by Keisha",
    location: "West Philadelphia",
    initials: "KW",
    stars: 5,
    date: "2 months ago",
  },
  {
    quote:
      "We were nervous about AI writing responses for us. But the voice they set up sounds exactly like our front desk. We've gotten three new patients who specifically mentioned our Google reviews.",
    name: "Dr. Marco Gentile",
    role: "Owner, Gentile Family Dental",
    location: "South Philadelphia",
    initials: "MG",
    stars: 5,
    date: "6 weeks ago",
  },
]

const businessCategories = [
  "Barbershops", "Restaurants", "Dental Offices", "Auto Shops",
  "Gyms & Fitness", "Law Offices", "Nail Salons", "Coffee Shops",
  "Contractors", "Retail Stores", "Med Spas", "Medical Practices",
]

const StarRow = ({ count }: { count: number }) => (
  <div className="flex gap-0.5 mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#c9a84c" aria-hidden="true">
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
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <RevealDiv className="text-center mb-14">
          <p className="eyebrow mb-4">REAL RESULTS</p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontWeight: 300,
              color: "var(--text-primary)",
            }}
          >
            What Philly business owners{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 400 }}>
              actually say.
            </em>
          </h2>
        </RevealDiv>

        {/* Mobile: horizontal scroll snap / Desktop: grid */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory md:snap-none -mx-6 md:mx-0 px-6 md:px-0">
          {testimonials.map((t, i) => (
            <RevealDiv
              key={t.name}
              delay={i * 120}
              className="flex flex-col rounded-2xl p-7 shrink-0 md:shrink snap-start"
              style={{
                background: "rgba(255,255,255,0.9)",
                border: "1px solid rgba(201,168,76,0.18)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)",
                width: "min(85vw, 360px)",
                minWidth: "min(85vw, 360px)",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <StarRow count={t.stars} />
                <span className="font-body text-xs" style={{ color: "var(--text-muted)" }}>{t.date}</span>
              </div>

              {/* Quote mark */}
              <div
                className="font-display mb-3 leading-none select-none"
                style={{ fontSize: "2.5rem", color: "rgba(201,168,76,0.25)", lineHeight: 1 }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              <p
                className="font-body text-base leading-relaxed flex-1 mb-6"
                style={{ color: "var(--text-secondary)" }}
              >
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(201,168,76,0.15)",
                    border: "1px solid rgba(201,168,76,0.3)",
                  }}
                >
                  <span
                    className="font-display text-xs"
                    style={{ color: "var(--gold)", fontWeight: 500, letterSpacing: "0.05em" }}
                  >
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p
                    className="font-body text-sm font-medium leading-snug"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="font-body text-xs leading-snug"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {t.role} · {t.location}
                  </p>
                </div>
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

        {/* Aggregate credibility bar */}
        <RevealDiv delay={400} className="mt-10 flex flex-wrap justify-center gap-8">
          {[
            { value: "4.8★", label: "avg Google rating after 6 months" },
            { value: "40+", label: "Philadelphia businesses served" },
            { value: "100%", label: "reviews responded to, every time" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div
                className="font-display text-2xl mb-1"
                style={{ fontWeight: 300, color: "var(--gold)" }}
              >
                {item.value}
              </div>
              <div
                className="font-body text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </RevealDiv>
      </div>
    </section>
  )
}
