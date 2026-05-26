"use client"
import { RevealDiv } from "@/components/ui/reveal-div"
import Link from "next/link"

const StarRow = ({ count, dim }: { count: number; dim?: boolean }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        width="13"
        height="13"
        viewBox="0 0 14 14"
        fill={i < count ? "#c9a84c" : "transparent"}
        stroke={i < count ? "none" : "rgba(201,168,76,0.25)"}
        strokeWidth="1"
        aria-hidden="true"
        style={{ opacity: dim && i >= count ? 0.3 : 1 }}
      >
        <path d="M7 1l1.5 4.5H14l-4 2.8 1.5 4.7L7 10l-4.5 3 1.5-4.7-4-2.8h5.5z" />
      </svg>
    ))}
  </div>
)

const ReviewItem = ({
  author,
  text,
  stars,
  response,
  timeAgo,
  dim,
}: {
  author: string
  text: string
  stars: number
  response?: string
  timeAgo: string
  dim?: boolean
}) => (
  <div
    className="rounded-xl p-4 mb-3"
    style={{
      background: "var(--surface-card)",
      border: "1px solid rgba(201,168,76,0.12)",
      opacity: dim ? 0.6 : 1,
    }}
  >
    <div className="flex items-start gap-3 mb-2">
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-medium"
        style={{ background: "rgba(201,168,76,0.15)", color: "var(--gold)" }}
      >
        {author[0]}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 mb-1">
          <span className="font-body text-xs font-medium" style={{ color: "var(--text-primary)" }}>
            {author}
          </span>
          <span className="font-mono-label text-xs" style={{ color: "var(--text-muted)", fontSize: "10px" }}>
            {timeAgo}
          </span>
        </div>
        <StarRow count={stars} dim={dim} />
      </div>
    </div>
    <p className="font-body text-xs leading-relaxed mb-2" style={{ color: "var(--text-secondary)" }}>
      {text}
    </p>
    {response ? (
      <div
        className="rounded-lg p-3 mt-2"
        style={{
          background: "rgba(201,168,76,0.06)",
          borderLeft: "2px solid rgba(201,168,76,0.4)",
        }}
      >
        <p
          className="font-body text-xs mb-1.5"
          style={{ color: "var(--text-muted)", fontStyle: "italic" }}
        >
          Response from owner · 3 min ago
        </p>
        <p className="font-body text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          {response}
        </p>
      </div>
    ) : (
      <div
        className="rounded-lg p-2.5 mt-2 flex items-center gap-2"
        style={{ background: "rgba(255,50,50,0.05)", border: "1px dashed rgba(255,100,100,0.15)" }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <circle cx="6" cy="6" r="5.5" stroke="rgba(255,100,100,0.4)" />
          <path d="M6 3.5v3M6 8v.5" stroke="rgba(255,100,100,0.5)" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        <p className="font-mono-label" style={{ fontSize: "9px", color: "rgba(255,120,120,0.5)", letterSpacing: "0.1em" }}>
          NO RESPONSE · 14 DAYS LATER
        </p>
      </div>
    )}
  </div>
)

export function BeforeAfter() {
  return (
    <section
      data-theme="light"
      className="section-pad relative overflow-hidden"
      style={{ background: "var(--ink)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <RevealDiv className="text-center mb-14">
          <p className="eyebrow mb-4">THE DIFFERENCE</p>
          <h2
            className="font-display mb-4"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontWeight: 300,
              color: "var(--text-primary)",
            }}
          >
            Your Google profile{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 400 }}>
              before and after.
            </em>
          </h2>
          <p
            className="font-body text-base max-w-lg mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            This is what customers see when they search for you. Which business would you choose?
          </p>
        </RevealDiv>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* BEFORE */}
          <RevealDiv
            delay={0}
            className="rounded-2xl overflow-hidden cursor-default"
            style={{
              border: "1px solid rgba(255,100,100,0.25)",
              background: "var(--surface-card)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"
              ;(e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 36px rgba(0,0,0,0.1)"
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"
              ;(e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.05)"
            }}
          >
            {/* Header */}
            <div
              className="px-6 py-4 flex items-center gap-3"
              style={{
                background: "rgba(255,100,100,0.06)",
                borderBottom: "1px solid rgba(255,100,100,0.12)",
              }}
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ background: "rgba(255,100,100,0.15)" }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M6 2v4M6 8.5v.5" stroke="rgba(255,120,120,0.8)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p
                  className="font-mono-label"
                  style={{ fontSize: "10px", letterSpacing: "0.12em", color: "rgba(255,120,120,0.7)" }}
                >
                  WITHOUT PRESENCY
                </p>
              </div>
            </div>

            <div className="p-6">
              {/* Profile header */}
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-lg font-bold shrink-0"
                  style={{ background: "rgba(255,255,255,0.06)", color: "var(--text-muted)" }}
                >
                  ?
                </div>
                <div>
                  <p
                    className="font-body font-semibold text-sm mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Joe&apos;s Barbershop
                  </p>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="font-display text-xl"
                      style={{ fontWeight: 300, color: "rgba(255,180,50,0.6)" }}
                    >
                      3.2
                    </span>
                    <StarRow count={3} dim />
                    <span className="font-body text-xs" style={{ color: "var(--text-muted)" }}>
                      (12 reviews)
                    </span>
                  </div>
                  <p className="font-body text-xs" style={{ color: "var(--text-muted)" }}>
                    Barbershop · Philadelphia, PA
                  </p>
                </div>
              </div>

              {/* Reviews */}
              <ReviewItem
                author="Mike D."
                text="Great cut but the wait was crazy long. Would be nice if someone replied to these things."
                stars={3}
                timeAgo="3 weeks ago"
              />
              <ReviewItem
                author="Sarah K."
                text="Came here twice, never going back. No one ever responds to reviews here."
                stars={2}
                timeAgo="1 month ago"
              />
              <ReviewItem
                author="James L."
                text="Best fade in the neighborhood, honestly."
                stars={5}
                timeAgo="2 months ago"
              />

              {/* Impact note */}
              <div
                className="rounded-xl p-4 mt-2"
                style={{
                  background: "rgba(255,50,50,0.05)",
                  border: "1px solid rgba(255,100,100,0.12)",
                }}
              >
                <p className="font-body text-xs leading-relaxed" style={{ color: "rgba(255,150,150,0.7)" }}>
                  <strong style={{ color: "rgba(255,150,150,0.9)" }}>Result:</strong> Customers see unanswered complaints. Ranking drops. New customers choose a competitor with better engagement.
                </p>
              </div>
            </div>
          </RevealDiv>

          {/* AFTER */}
          <RevealDiv
            delay={150}
            className="rounded-2xl overflow-hidden cursor-default"
            style={{
              border: "2px solid rgba(201,168,76,0.4)",
              background: "var(--surface-card)",
              boxShadow: "0 0 40px rgba(201,168,76,0.12), 0 4px 24px rgba(0,0,0,0.05)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"
              ;(e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 60px rgba(201,168,76,0.2), 0 16px 40px rgba(0,0,0,0.08)"
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"
              ;(e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 40px rgba(201,168,76,0.12), 0 4px 24px rgba(0,0,0,0.05)"
            }}
          >
            {/* Header */}
            <div
              className="px-6 py-4 flex items-center gap-3"
              style={{
                background: "rgba(201,168,76,0.07)",
                borderBottom: "1px solid rgba(201,168,76,0.18)",
              }}
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ background: "rgba(201,168,76,0.2)" }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2.5 6l3 3 4-5" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p
                  className="font-mono-label"
                  style={{ fontSize: "10px", letterSpacing: "0.12em", color: "var(--gold)" }}
                >
                  WITH PRESENCY
                </p>
              </div>
            </div>

            <div className="p-6">
              {/* Profile header */}
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-lg font-bold shrink-0"
                  style={{
                    background: "rgba(201,168,76,0.12)",
                    border: "1px solid rgba(201,168,76,0.25)",
                    color: "var(--gold)",
                  }}
                >
                  J
                </div>
                <div>
                  <p
                    className="font-body font-semibold text-sm mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Joe&apos;s Barbershop
                  </p>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="font-display text-xl"
                      style={{ fontWeight: 300, color: "var(--gold)" }}
                    >
                      4.2
                    </span>
                    <StarRow count={4} />
                    <span className="font-body text-xs" style={{ color: "var(--text-muted)" }}>
                      (28 reviews)
                    </span>
                  </div>
                  <p className="font-body text-xs" style={{ color: "var(--text-muted)" }}>
                    Barbershop · Philadelphia, PA
                  </p>
                </div>
              </div>

              {/* Reviews with responses */}
              <ReviewItem
                author="Mike D."
                text="Great cut but the wait was crazy long. Would be nice if someone replied to these things."
                stars={3}
                timeAgo="3 weeks ago"
                response="Hey Mike, thanks for the honest feedback! We hear you. We've added a third chair and wait times are way down. Come back and we'll make it right. Joe"
              />
              <ReviewItem
                author="Emily R."
                text="Finally a barbershop that actually responds. Booked for my husband and he loved it."
                stars={5}
                timeAgo="1 week ago"
                response="Emily, thanks for giving us a shot! Glad your husband had a great visit. We will have him looking sharp every time. See you both soon. Joe and the crew"
              />

              {/* Impact note */}
              <div
                className="rounded-xl p-4 mt-2"
                style={{
                  background: "rgba(201,168,76,0.06)",
                  border: "1px solid rgba(201,168,76,0.15)",
                }}
              >
                <p className="font-body text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  <strong style={{ color: "var(--gold)" }}>Result:</strong> Every review responded to within 4 minutes. Rating climbs. Google ranks you higher. New customers see an active, trustworthy business.
                </p>
              </div>
            </div>
          </RevealDiv>
        </div>

        {/* CTA nudge */}
        <RevealDiv delay={300} className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-body font-medium text-sm px-7 py-3.5 rounded-lg transition-all duration-200 cursor-pointer"
            style={{ background: "var(--gold)", color: "#0d0c0a" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--gold-light)"
              e.currentTarget.style.transform = "translateY(-1px)"
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(201,168,76,0.35)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--gold)"
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "none"
            }}
          >
            Get this for my business
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <p className="font-body text-xs mt-3" style={{ color: "var(--text-muted)" }}>
            Free 14-day trial · No credit card required
          </p>
        </RevealDiv>
      </div>
    </section>
  )
}
