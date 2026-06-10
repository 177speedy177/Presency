"use client"
import { useRef, useState } from "react"
import { RevealDiv } from "@/components/ui/reveal-div"

const patientCaptureServices = [
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
    title: "Monthly ROI report",
    body: "Every month you receive a report showing missed calls recovered, conversations started, appointments booked, reviews added, and estimated revenue recovered. This single artifact makes the ROI undeniable.",
    badge: null,
  },
]

const practiceGrowthServices = [
  {
    num: "05",
    title: "Recall campaigns",
    body: "Patients who haven't booked a follow-up visit in a set window get a personalized outreach sequence from your practice's number. Timed and worded to feel like a reminder from a practice that cares, not a marketing blast.",
    badge: "Practice Growth",
  },
  {
    num: "06",
    title: "Reactivation campaigns",
    body: "Patients who went dormant in your records get a targeted re-engagement message. A patient who already chose your practice once is your easiest conversion. This turns a stagnant contact list into a live pipeline.",
    badge: "Practice Growth",
  },
  {
    num: "07",
    title: "Google Business Profile optimization",
    body: "Your GBP listing is often the first thing a prospective patient sees before they ever call. We optimize your profile, manage photos, write service descriptions, and ensure your practice ranks well for local dental searches.",
    badge: "Practice Growth",
  },
  {
    num: "08",
    title: "Competitor tracking",
    body: "We monitor your top local competitors' review volume, ratings, and visibility so you always know where your practice stands. When a gap opens or a competitor gains ground, you know before your patients notice.",
    badge: "Practice Growth",
  },
  {
    num: "09",
    title: "Reputation growth program",
    body: "Beyond automated review requests, this is an active program: response strategy, review volume targets, platform diversification, and a systematic approach to making your practice's reputation a durable competitive advantage.",
    badge: "Practice Growth",
  },
  {
    num: "10",
    title: "Website redesign + monthly optimization",
    body: "We design a fast, SEO-optimized practice website and keep it current with monthly updates. New services, updated hours, treatment landing pages, and ongoing performance tuning. Includes multi-location support.",
    badge: "Practice Growth",
  },
]

const allServices = [...patientCaptureServices, ...practiceGrowthServices]

function CardContent({ s }: { s: (typeof allServices)[number] }) {
  return (
    <>
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
    </>
  )
}

function ServiceCard({ s, delay }: { s: (typeof allServices)[number]; delay: number }) {
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
      <CardContent s={s} />
    </RevealDiv>
  )
}

function ServiceDeck() {
  const [active, setActive] = useState(0)
  const COUNT = allServices.length
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const dy = e.changedTouches[0].clientY - touchStartY.current
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 36) {
      if (dx < 0) setActive(p => (p + 1) % COUNT)
      else setActive(p => (p - 1 + COUNT) % COUNT)
    }
  }

  const cardStyle = (i: number): React.CSSProperties => {
    const rel = (i - active + COUNT) % COUNT
    if (rel === 0) return {
      position: "absolute", top: 0, left: "50%",
      transform: "translateX(-50%) rotate(0deg)", zIndex: 10,
      transition: "transform 0.42s cubic-bezier(0.22,1,0.36,1)",
    }
    if (rel === 1) return {
      position: "absolute", top: "14px", left: "50%",
      transform: "translateX(-44%) rotate(4deg)", zIndex: 5,
      transition: "transform 0.42s cubic-bezier(0.22,1,0.36,1)",
    }
    if (rel === 2) return {
      position: "absolute", top: "24px", left: "50%",
      transform: "translateX(-56%) rotate(-3deg)", zIndex: 3,
      transition: "transform 0.42s cubic-bezier(0.22,1,0.36,1)",
    }
    return {
      position: "absolute", top: "30px", left: "50%",
      transform: "translateX(-50%) rotate(5deg)", zIndex: 1,
      transition: "transform 0.42s cubic-bezier(0.22,1,0.36,1)",
    }
  }

  return (
    <div className="sm:hidden mt-8">
      <div
        style={{ position: "relative", height: "360px", touchAction: "pan-y" }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {allServices.map((s, i) => (
          <div key={s.num} style={{ width: "min(300px, 82vw)", ...cardStyle(i) }}>
            <div
              className="rounded-2xl p-6 flex flex-col relative"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(201,168,76,0.18)",
                boxShadow: "0 4px 20px rgba(28,24,16,0.08)",
              }}
            >
              <CardContent s={s} />
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "12px" }}>
        {allServices.map((_, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            style={{
              width: i === active ? "20px" : "6px",
              height: "6px",
              borderRadius: "999px",
              background: i === active ? "#c9a84c" : "rgba(201,168,76,0.3)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
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
            Two plans, ten services. Patient Capture covers the core. Practice Growth adds active campaigns and a full online presence build-out.
          </p>
        </RevealDiv>

        {/* Desktop grid */}
        <div className="hidden sm:block">
          {/* Patient Capture group */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {patientCaptureServices.map((s, i) => (
              <ServiceCard key={s.num} s={s} delay={i * 60} />
            ))}
          </div>

          {/* Practice Growth divider */}
          <RevealDiv className="flex items-center gap-4 my-10">
            <div className="flex-1 h-px" style={{ background: "rgba(201,168,76,0.18)" }} />
            <span
              className="font-mono-label shrink-0"
              style={{ fontSize: "10px", letterSpacing: "0.14em", color: "#7a5c10" }}
            >
              PRACTICE GROWTH ADDS
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(201,168,76,0.18)" }} />
          </RevealDiv>

          {/* Practice Growth group */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceGrowthServices.map((s, i) => (
              <ServiceCard key={s.num} s={s} delay={i * 60} />
            ))}
          </div>
        </div>

        {/* Mobile swipe deck */}
        <ServiceDeck />
      </div>
    </section>
  )
}
