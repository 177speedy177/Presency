"use client"
import { useRef, useState } from "react"
import Link from "next/link"

// ── Card 1: Missed call → instant dental SMS ──────────────────────────────────
function MissedCallCard() {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "22px",
        border: "1px solid rgba(32,31,27,0.10)",
        boxShadow: "0 24px 80px rgba(32,31,27,0.10)",
        padding: "12px",
        fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
      }}
    >
      <div style={{ display: "inline-flex", alignItems: "center", padding: "3px 9px", borderRadius: "999px", background: "rgba(201,168,76,0.11)", border: "1px solid rgba(201,168,76,0.28)", marginBottom: "10px" }}>
        <span style={{ fontSize: "8px", letterSpacing: "0.08em", fontWeight: 600, color: "#7a5c10" }}>MISSED CALL</span>
      </div>

      <div style={{ background: "#f7f4ef", borderRadius: "12px", padding: "8px 10px", marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={{ width: "26px", height: "26px", borderRadius: "50%", background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M9.5 8.5c-.8.8-1.7 1.5-2.5 1.5C5.5 10 3.5 8 2.5 6.5 1.5 4.8 1 3.5 2 2.5l1-1c.3-.3.8-.3 1 0l1.5 2c.3.3.3.7 0 1L4.7 5.3C5.2 6.3 6 7.2 7 7.7l.8-.8c.3-.3.7-.3 1 0l2 1.5c.3.3.3.7 0 1l-1.3.1z" fill="#c9a84c" />
          </svg>
        </div>
        <div>
          <p style={{ fontSize: "11px", fontWeight: 700, color: "#1a1a1a", margin: 0, lineHeight: 1.2 }}>Philadelphia Dental Group</p>
          <p style={{ fontSize: "9px", color: "rgba(0,0,0,0.4)", margin: 0 }}>Missed call · 6:48 PM</p>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "10px" }}>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div style={{ maxWidth: "88%", background: "rgba(201,168,76,0.12)", borderRadius: "4px 12px 12px 12px", padding: "6px 9px" }}>
            <p style={{ fontSize: "10px", color: "#1a1a1a", margin: 0, lineHeight: 1.4 }}>Hi! Sorry we missed your call. Still looking to schedule an appointment?</p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ maxWidth: "72%", background: "rgba(13,12,10,0.07)", borderRadius: "12px 4px 12px 12px", padding: "6px 9px" }}>
            <p style={{ fontSize: "10px", color: "#1a1a1a", margin: 0, lineHeight: 1.4 }}>Yes, I need a cleaning soon</p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div style={{ maxWidth: "88%", background: "rgba(201,168,76,0.12)", borderRadius: "4px 12px 12px 12px", padding: "6px 9px" }}>
            <p style={{ fontSize: "10px", color: "#1a1a1a", margin: 0, lineHeight: 1.4 }}>We have Thursday at 10am or Friday at 2pm. Which works?</p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ maxWidth: "60%", background: "rgba(13,12,10,0.07)", borderRadius: "12px 4px 12px 12px", padding: "6px 9px" }}>
            <p style={{ fontSize: "10px", color: "#1a1a1a", margin: 0, lineHeight: 1.4 }}>Thursday at 10!</p>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "5px", padding: "5px 8px", background: "rgba(30,140,74,0.07)", borderRadius: "8px", border: "1px solid rgba(30,140,74,0.15)" }}>
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M2 6l3 3 5-5" stroke="#1e8c4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ fontSize: "9px", fontWeight: 600, color: "#1e8c4a" }}>Appointment confirmed in 4 minutes</span>
      </div>
    </div>
  )
}

// ── Card 2: Patient Capture Audit ─────────────────────────────────────────────
function AuditCard() {
  const rows = [
    { label: "Missed call response", value: "Active",   color: "#1e8c4a" },
    { label: "Web inquiry follow-up", value: "Active",   color: "#1e8c4a" },
    { label: "Review requests",       value: "Active",   color: "#1e8c4a" },
  ]
  const checks = [
    "Zero patient leaks",
    "Instant follow-up live",
    "Unified inbox connected",
    "Monthly report active",
  ]

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "22px",
        border: "1px solid rgba(32,31,27,0.10)",
        boxShadow: "0 24px 80px rgba(32,31,27,0.10)",
        padding: "16px",
        fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
      }}
    >
      <div style={{ display: "inline-flex", alignItems: "center", padding: "3px 9px", borderRadius: "999px", background: "rgba(201,168,76,0.11)", border: "1px solid rgba(201,168,76,0.28)", marginBottom: "12px" }}>
        <span style={{ fontSize: "8px", letterSpacing: "0.08em", fontWeight: 600, color: "#7a5c10" }}>PATIENT CAPTURE AUDIT</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
        <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "rgba(201,168,76,0.10)", border: "2px solid rgba(201,168,76,0.45)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <span style={{ fontSize: "12px", fontWeight: 700, color: "#7a5c10" }}>94</span>
        </div>
        <p style={{ fontSize: "13px", fontWeight: 700, color: "#1a1a1a" }}>Capture score</p>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
          <span style={{ fontSize: "10px", color: "rgba(0,0,0,0.48)" }}>Patient capture rate</span>
          <span style={{ fontSize: "10px", fontWeight: 600, color: "#7a5c10" }}>94/100</span>
        </div>
        <div style={{ height: "3px", borderRadius: "999px", background: "rgba(32,31,27,0.07)" }}>
          <div style={{ height: "100%", width: "94%", borderRadius: "999px", background: "linear-gradient(90deg,#c9a84c,#e8c96d)" }} />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "7px", marginBottom: "12px" }}>
        {rows.map(r => (
          <div key={r.label} style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontSize: "10px", color: "rgba(0,0,0,0.48)" }}>{r.label}</span>
            <span style={{ fontSize: "10px", fontWeight: 600, color: r.color }}>{r.value}</span>
          </div>
        ))}
      </div>

      <div style={{ height: "1px", background: "rgba(32,31,27,0.07)", marginBottom: "10px" }} />

      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {checks.map(item => (
          <div key={item} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
            <span style={{ fontSize: "10px", color: "#c9a84c", flexShrink: 0, fontWeight: 700 }}>✓</span>
            <span style={{ fontSize: "10px", color: "rgba(0,0,0,0.52)" }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Card 3: Reputation — auto review request ──────────────────────────────────
function ReviewCard() {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "22px",
        border: "1px solid rgba(32,31,27,0.10)",
        boxShadow: "0 24px 80px rgba(32,31,27,0.10)",
        padding: "12px",
        fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
      }}
    >
      <div style={{ display: "inline-flex", alignItems: "center", padding: "3px 9px", borderRadius: "999px", background: "rgba(201,168,76,0.11)", border: "1px solid rgba(201,168,76,0.28)", marginBottom: "10px" }}>
        <span style={{ fontSize: "8px", letterSpacing: "0.08em", fontWeight: 600, color: "#7a5c10" }}>REPUTATION</span>
      </div>

      <div style={{ background: "#f7f4ef", borderRadius: "12px", padding: "8px 10px", marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={{ width: "26px", height: "26px", borderRadius: "50%", background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M7 1l1.5 3.5H13l-3.5 2.5 1.3 4L7 9 3.2 11l1.3-4L1 4.5h4.5z" fill="#c9a84c" fillOpacity="0.7" />
          </svg>
        </div>
        <div>
          <p style={{ fontSize: "11px", fontWeight: 700, color: "#1a1a1a", margin: 0, lineHeight: 1.2 }}>Philadelphia Dental Group</p>
          <p style={{ fontSize: "9px", color: "rgba(0,0,0,0.4)", margin: 0 }}>Review request sent · After visit</p>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "10px" }}>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div style={{ maxWidth: "90%", background: "rgba(201,168,76,0.12)", borderRadius: "4px 12px 12px 12px", padding: "6px 9px" }}>
            <p style={{ fontSize: "10px", color: "#1a1a1a", margin: 0, lineHeight: 1.4 }}>Thank you for visiting us today! If you have a moment, we would love to hear about your experience.</p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ maxWidth: "80%", background: "rgba(13,12,10,0.07)", borderRadius: "12px 4px 12px 12px", padding: "6px 9px" }}>
            <div style={{ display: "flex", gap: "2px", marginBottom: "3px" }}>
              {[1,2,3,4,5].map(s => (
                <svg key={s} width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M5 1l1.1 2.6H9L6.8 5.3l.8 2.7L5 6.5l-2.6 1.5.8-2.7L1 3.6h2.9z" fill="#c9a84c" />
                </svg>
              ))}
            </div>
            <p style={{ fontSize: "10px", color: "#1a1a1a", margin: 0, lineHeight: 1.4 }}>Great staff, very gentle and thorough.</p>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "5px", padding: "5px 8px", background: "rgba(30,140,74,0.07)", borderRadius: "8px", border: "1px solid rgba(30,140,74,0.15)" }}>
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M2 6l3 3 5-5" stroke="#1e8c4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ fontSize: "9px", fontWeight: 600, color: "#1e8c4a" }}>New 5-star review added</span>
      </div>
    </div>
  )
}


// ── Main Hero ─────────────────────────────────────────────────────────────────
export function Hero() {
  const [activeCard, setActiveCard] = useState(0)
  const CARD_COUNT = 3
  const cardLabels = ["Missed call follow-up", "Patient Capture Audit", "Reputation"]
  const mobileCards = [<MissedCallCard key="m" />, <AuditCard key="a" />, <ReviewCard key="r" />]

  const touchStartX = useRef(0)
  const touchStartY = useRef(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const dy = e.changedTouches[0].clientY - touchStartY.current
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 38) {
      if (dx < 0) setActiveCard(p => (p + 1) % CARD_COUNT)
      else setActiveCard(p => (p - 1 + CARD_COUNT) % CARD_COUNT)
    }
  }

  const deckStyle = (i: number): React.CSSProperties => {
    const rel = (i - activeCard + CARD_COUNT) % CARD_COUNT
    if (rel === 0) return {
      position: "absolute", top: 0, left: "50%",
      transform: "translateX(-50%) rotate(0deg)",
      zIndex: 10,
      transition: "transform 0.42s cubic-bezier(0.22,1,0.36,1)",
      willChange: "transform",
    }
    if (rel === 1) return {
      position: "absolute", top: "12px", left: "50%",
      transform: "translateX(-50%) rotate(7deg)",
      zIndex: 5,
      transition: "transform 0.42s cubic-bezier(0.22,1,0.36,1)",
      willChange: "transform",
    }
    return {
      position: "absolute", top: "12px", left: "50%",
      transform: "translateX(-50%) rotate(-7deg)",
      zIndex: 3,
      transition: "transform 0.42s cubic-bezier(0.22,1,0.36,1)",
      willChange: "transform",
    }
  }

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#F7F4EC", minHeight: "100vh" }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{ background: "linear-gradient(158deg,#fdf9f0 0%,#F7F4EC 50%,#ede8dc 100%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 50% -8%,rgba(201,168,76,0.16) 0%,transparent 65%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 78% 48%,rgba(203,174,78,0.14) 0%,transparent 38%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 95% 90% at 50% 50%,transparent 58%,rgba(13,12,10,0.04) 100%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full" style={{ paddingTop: "8rem", paddingBottom: "5rem" }}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: text ──────────────────────────────────────────────── */}
          <div>
            <p className="eyebrow hero-item" style={{ marginBottom: "1.5rem", animationDelay: "0ms" }}>
              For independent dental practices
            </p>

            <h1
              className="font-display hero-item text-center lg:text-left"
              style={{ fontSize: "clamp(2rem,5vw,4rem)", fontWeight: 300, color: "#7a5c10", lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: "1.1rem", animationDelay: "70ms" }}
            >
              Every missed call is a patient walking into another office.
            </h1>

            <p
              className="hidden lg:block font-body hero-item"
              style={{ fontSize: "clamp(0.92rem,1.6vw,1.05rem)", fontStyle: "italic", color: "rgba(13,12,10,0.46)", marginBottom: "0.85rem", lineHeight: 1.55, animationDelay: "140ms" }}
            >
              Your practice spends money to make the phone ring.
            </p>

            <div className="hidden lg:block hero-item" style={{ height: "1px", background: "rgba(13,12,10,0.10)", maxWidth: "460px", marginBottom: "0.85rem", animationDelay: "175ms" }} />

            <p
              className="hidden lg:block font-body hero-item"
              style={{ fontSize: "clamp(0.92rem,1.6vw,1rem)", color: "rgba(13,12,10,0.50)", marginBottom: "2.5rem", lineHeight: 1.7, maxWidth: "460px", animationDelay: "210ms" }}
            >
              Presency makes sure every missed call, after-hours call, and web inquiry to your practice gets an instant follow-up, so the patients you already paid to attract actually book.
            </p>

            <div className="hero-item flex gap-3 items-center" style={{ marginBottom: "1.5rem", animationDelay: "280ms" }}>
              <a
                href="https://calendly.com/397jtc/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body font-medium flex-1 lg:flex-none text-center px-7 py-3.5 rounded-lg transition-all duration-200 cursor-pointer"
                style={{ background: "var(--gold)", color: "#0d0c0a", fontSize: "0.95rem" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#d4b05a"; e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(201,168,76,0.32)" }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none" }}
              >
                Get your free Patient Capture Audit
              </a>
              <a
                href="#problem"
                className="font-body font-medium flex-1 lg:flex-none text-center px-5 py-3.5 rounded-lg transition-all duration-200 cursor-pointer"
                style={{ background: "transparent", color: "var(--ink)", fontSize: "0.95rem", border: "1px solid rgba(13,12,10,0.18)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(13,12,10,0.38)"; e.currentTarget.style.background = "rgba(13,12,10,0.04)" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(13,12,10,0.18)"; e.currentTarget.style.background = "transparent" }}
              >
                See what missed calls cost you
              </a>
            </div>

            <p
              className="font-mono-label hero-item text-center lg:text-left"
              style={{ fontSize: "0.64rem", letterSpacing: "0.09em", color: "rgba(13,12,10,0.30)", lineHeight: 1.6, animationDelay: "350ms" }}
            >
              INSTANT FOLLOW-UP&nbsp;&nbsp;·&nbsp;&nbsp;PRIVACY-FIRST DESIGN&nbsp;&nbsp;·&nbsp;&nbsp;DENTAL PRACTICES
            </p>

            {/* ── Mobile swipeable deck ── */}
            <div className="lg:hidden mt-10">
              <div
                style={{ position: "relative", height: "380px", touchAction: "pan-y" }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {mobileCards.map((card, i) => (
                  <div key={i} style={{ width: "min(300px, 86vw)", ...deckStyle(i) }}>
                    {card}
                  </div>
                ))}
              </div>

              <div role="tablist" aria-label="Card navigation" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", marginTop: "20px" }}>
                {cardLabels.map((label, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-label={label}
                    aria-selected={activeCard === i}
                    onClick={() => setActiveCard(i)}
                    style={{
                      width: activeCard === i ? "22px" : "8px",
                      height: "8px",
                      borderRadius: "999px",
                      background: activeCard === i ? "var(--gold)" : "rgba(13,12,10,0.15)",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      padding: 0,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: floating cards (desktop) ──────────────────────────── */}
          <div className="hidden lg:block relative" style={{ height: "660px" }}>
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: "radial-gradient(circle at 58% 52%,rgba(203,174,78,0.13) 0%,transparent 60%)" }} />
            <div className="float-card float-card-missed" style={{ position: "absolute", top: 0, right: 0, width: "278px", zIndex: 2 }}>
              <MissedCallCard />
            </div>
            <div className="float-card float-card-audit" style={{ position: "absolute", top: "195px", left: 0, width: "208px", zIndex: 3 }}>
              <AuditCard />
            </div>
            <div className="float-card float-card-review" style={{ position: "absolute", bottom: 0, right: "20px", width: "230px", zIndex: 1 }}>
              <ReviewCard />
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-item {
          animation: heroFadeUp 0.65s ease-out both;
        }
        .float-card {
          transition: transform 0.38s cubic-bezier(0.22, 1, 0.36, 1),
                      filter 0.38s ease;
          will-change: transform;
        }
        .float-card-missed  { transform: rotate(-1.5deg); }
        .float-card-audit   { transform: rotate(0.8deg);  }
        .float-card-review  { transform: rotate(-0.5deg); }
        .float-card-missed:hover  { transform: rotate(-1.5deg) translateY(-10px) scale(1.03); filter: drop-shadow(0 20px 40px rgba(13,12,10,0.14)); z-index: 10 !important; }
        .float-card-audit:hover   { transform: rotate(0.8deg)  translateY(-10px) scale(1.03); filter: drop-shadow(0 20px 40px rgba(13,12,10,0.14)); z-index: 10 !important; }
        .float-card-review:hover  { transform: rotate(-0.5deg) translateY(-10px) scale(1.03); filter: drop-shadow(0 20px 40px rgba(13,12,10,0.14)); z-index: 10 !important; }
        @media (prefers-reduced-motion: reduce) {
          .hero-item { animation: none; }
          .float-card { transition: none; }
        }
      `}</style>
    </section>
  )
}
