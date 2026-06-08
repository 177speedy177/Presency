"use client"
import Link from "next/link"
import { RevealDiv } from "@/components/ui/reveal-div"
import { WordReveal } from "@/components/ui/word-reveal"

// ── SMS conversation data ────────────────────────────────────────────────────
const conversations = [
  {
    business: "Dental Office",
    location: "Philadelphia",
    type: "Dental Office",
    trigger: "Missed call · 6:48 PM",
    messages: [
      { from: "biz", text: "Hi! Sorry we missed your call. Still looking to schedule an appointment?" },
      { from: "customer", text: "Yes! I need a cleaning soon" },
      { from: "biz", text: "We have Thursday at 10am or Friday at 2pm. Which works for you?" },
      { from: "customer", text: "Thursday at 10 works!" },
    ],
    result: "Appointment booked in 4 minutes",
    resultIcon: "calendar",
  },
  {
    business: "Barbershop",
    location: "Philadelphia",
    type: "Barbershop",
    trigger: "Missed call · Sunday 8:14 PM",
    messages: [
      { from: "biz", text: "Hey! We're closed for the evening but we got your call. Want to lock in a time this week?" },
      { from: "customer", text: "Yeah that works, need a fresh cut" },
      { from: "biz", text: "Tuesday at 2pm look good? Or I can check other spots" },
      { from: "customer", text: "Tuesday works, see you then" },
    ],
    result: "New customer booked after-hours",
    resultIcon: "check",
  },
  {
    business: "Restaurant",
    location: "Philadelphia",
    type: "Restaurant",
    trigger: "Reactivation text · sent 3:00 PM",
    messages: [
      { from: "biz", text: "Hey! It's been a while. We have a special running this weekend. Want to grab your table?" },
      { from: "customer", text: "Oh nice! Yeah let's do Saturday" },
      { from: "biz", text: "Saturday at 7pm is open. Shall I put you down?" },
      { from: "customer", text: "Yes please! Looking forward to it" },
    ],
    result: "Dormant customer reactivated",
    resultIcon: "refresh",
  },
]

const businessCategories = [
  "Barbershops", "Restaurants", "Dental Offices", "Auto Shops",
  "Gyms & Fitness", "Law Offices", "Nail Salons", "Coffee Shops",
  "Contractors", "Retail Stores", "Med Spas", "Medical Practices",
]

// ── Result icon ──────────────────────────────────────────────────────────────
function ResultIcon({ type }: { type: string }) {
  if (type === "calendar") return (
    <svg width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="1" y="2" width="12" height="11" rx="2" stroke="#c9a84c" strokeWidth="1.5" />
      <path d="M1 6h12M5 1v2M9 1v2" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
  if (type === "refresh") return (
    <svg width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M12 7A5 5 0 1 1 7 2M12 2v4H8" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
  return (
    <svg width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7l4 4 6-6" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

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
          <p className="eyebrow mb-4">SEE IT IN ACTION</p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontWeight: 300,
              color: "var(--text-primary)",
            }}
          >
            <WordReveal segments={[
              { text: "Every missed call," },
              { text: "followed up instantly.", italic: true, color: "var(--gold)", fontWeight: 400 },
            ]} />
          </h2>
          <p className="font-body text-sm mt-3" style={{ color: "var(--text-muted)" }}>
            Real examples of what your customers receive the moment a call is missed.
          </p>
        </RevealDiv>

        {/* Cards — mobile scroll / desktop grid */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory md:snap-none -mx-6 md:mx-0 px-6 md:px-0">
          {conversations.map((convo, i) => (
            <RevealDiv
              key={convo.business}
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
              {/* Header */}
              <div className="p-6 pb-3">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <p className="font-body text-sm font-semibold leading-snug" style={{ color: "var(--text-primary)" }}>
                      {convo.business}
                    </p>
                    <p className="font-mono-label" style={{ fontSize: "9px", color: "var(--text-muted)", letterSpacing: "0.1em" }}>
                      {convo.type.toUpperCase()} · {convo.location.toUpperCase()}
                    </p>
                  </div>
                  <div
                    className="shrink-0 rounded-full px-2 py-0.5 font-mono-label"
                    style={{ background: "rgba(201,168,76,0.1)", fontSize: "9px", color: "var(--gold)", letterSpacing: "0.08em" }}
                  >
                    TEXT
                  </div>
                </div>

                {/* Trigger event */}
                <div
                  className="rounded-lg px-3 py-2 mb-4 flex items-center gap-2"
                  style={{ background: "rgba(13,12,10,0.04)", border: "1px solid rgba(13,12,10,0.07)" }}
                >
                  <svg width="10" height="10" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M7 1a6 6 0 1 0 0 12A6 6 0 0 0 7 1zM7 4v4l2.5 1.5" stroke="rgba(13,12,10,0.4)" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span className="font-mono-label" style={{ fontSize: "9px", color: "rgba(13,12,10,0.45)", letterSpacing: "0.08em" }}>
                    {convo.trigger.toUpperCase()}
                  </span>
                </div>

                {/* SMS conversation */}
                <div className="flex flex-col gap-2">
                  {convo.messages.map((msg, mi) => (
                    <div
                      key={mi}
                      className={`flex ${msg.from === "biz" ? "justify-start" : "justify-end"}`}
                    >
                      <div
                        className="font-body text-xs leading-relaxed px-3 py-2 rounded-2xl"
                        style={{
                          maxWidth: "82%",
                          background: msg.from === "biz"
                            ? "rgba(201,168,76,0.1)"
                            : "rgba(13,12,10,0.07)",
                          color: "var(--text-secondary)",
                          borderRadius: msg.from === "biz"
                            ? "4px 16px 16px 16px"
                            : "16px 4px 16px 16px",
                        }}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: "1px", background: "rgba(201,168,76,0.12)", margin: "0 1.5rem" }} />

              {/* Result */}
              <div
                className="p-6 pt-4 flex-1"
                style={{ background: "rgba(201,168,76,0.04)" }}
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--gold)" }} />
                  <span className="font-mono-label" style={{ fontSize: "9px", color: "var(--gold)", letterSpacing: "0.1em" }}>
                    RESULT · via Presency
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <ResultIcon type={convo.resultIcon} />
                  <p className="font-body text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                    {convo.result}
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
                We&apos;re actively building our Philadelphia roster. Spots are limited by area.
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
