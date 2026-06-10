"use client"
import { RevealDiv } from "@/components/ui/reveal-div"

const services = [
  {
    num: "01",
    title: "Speed-to-lead capture",
    body: "Every missed call, after-hours call, and web form gets an instant, no-PHI text follow-up from your practice's own number. The patient hears back in seconds, not the next business day.",
    badge: null,
  },
  {
    num: "02",
    title: "One unified inbox",
    body: "All replies from every channel land in one place your front desk manages from any browser. When a conversation turns clinical, staff take it from there. No app to download, no new system to learn.",
    badge: null,
  },
  {
    num: "03",
    title: "Reputation engine",
    body: "After every visit, a warm review request goes out automatically. Google reviews accumulate without anyone on your team having to remember to ask. This compounds into an asset the practice won't want to lose.",
    badge: null,
  },
  {
    num: "04",
    title: "Recall and reactivation",
    body: "Patients due for their next visit or dormant in your records get a personal outreach campaign. A patient who already chose your practice is your easiest conversion. This turns silent records into booked chairs.",
    badge: "Practice Growth",
  },
  {
    num: "05",
    title: "Monthly ROI report",
    body: "Every month you receive a report showing missed calls recovered, conversations started, appointments booked, reviews added, and estimated revenue recovered. This single artifact makes the ROI undeniable.",
    badge: null,
  },
]

function ServiceCard({ s, delay }: { s: (typeof services)[number]; delay: number }) {
  return (
    <RevealDiv
      delay={delay}
      className="rounded-2xl p-7 flex flex-col cursor-default relative"
      style={{
        background: "#ffffff",
        border: "1px solid rgba(201,168,76,0.18)",
        boxShadow: "0 2px 12px rgba(28,24,16,0.05)",
        transition: "border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)"
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(28,24,16,0.1)"
        e.currentTarget.style.transform = "translateY(-3px)"
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "rgba(201,168,76,0.18)"
        e.currentTarget.style.boxShadow = "0 2px 12px rgba(28,24,16,0.05)"
        e.currentTarget.style.transform = "translateY(0)"
      }}
    >
      {s.badge && (
        <div className="absolute top-5 right-5">
          <span
            className="font-mono-label"
            style={{
              fontSize: "9px",
              letterSpacing: "0.1em",
              color: "#7a5c10",
              background: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "999px",
              padding: "2px 8px",
              whiteSpace: "nowrap",
            }}
          >
            {s.badge.toUpperCase()}
          </span>
        </div>
      )}
      <span
        className="font-display mb-5 block"
        style={{ fontSize: "3rem", fontWeight: 100, color: "rgba(201,168,76,0.4)", lineHeight: 1, letterSpacing: "-0.02em" }}
      >
        {s.num}
      </span>
      <h3 className="font-display text-lg mb-3" style={{ fontWeight: 400, color: "#1c1810" }}>
        {s.title}
      </h3>
      <p className="font-body text-sm leading-relaxed flex-1" style={{ color: "rgba(28,24,16,0.65)" }}>
        {s.body}
      </p>
    </RevealDiv>
  )
}

export function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      data-theme="light"
      className="section-pad relative overflow-hidden"
      style={{ background: "#faf7f2" }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 65% 50% at 90% 0%, rgba(201,168,76,0.07) 0%, transparent 55%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <RevealDiv className="text-center mb-14">
          <p className="font-mono-label mb-4" style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#7a5c10" }}>
            WHAT WE DO
          </p>
          <h2
            className="font-display mb-4 mx-auto"
            style={{ fontSize: "clamp(1.75rem,4vw,3rem)", fontWeight: 300, color: "#1c1810", maxWidth: "640px" }}
          >
            Everything inside the system.
          </h2>
          <p className="font-body text-base mx-auto" style={{ color: "rgba(28,24,16,0.62)", maxWidth: "520px" }}>
            Five recurring services running in the background. From the first missed call to a reactivated patient record, every step is covered.
          </p>
        </RevealDiv>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((s, i) => (
            <ServiceCard key={s.num} s={s} delay={i * 80} />
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-6 mt-6 lg:max-w-2xl lg:mx-auto">
          {services.slice(3).map((s, i) => (
            <ServiceCard key={s.num} s={s} delay={(i + 3) * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
