"use client"
import { useRef, useState } from "react"

// ── Card 1: Missed call → instant dental SMS ──────────────────────────────────
function MissedCallCard() {
  return (
    <div style={{ background: "#fff", borderRadius: "20px", border: "1px solid rgba(201,168,76,0.22)", boxShadow: "0 20px 60px rgba(28,24,16,0.12)", padding: "12px", fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}>
      <div style={{ display: "inline-flex", alignItems: "center", padding: "3px 9px", borderRadius: "999px", background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)", marginBottom: "10px" }}>
        <span style={{ fontSize: "8px", letterSpacing: "0.08em", fontWeight: 600, color: "#7a5c10" }}>MISSED CALL</span>
      </div>
      <div style={{ background: "#f7f4ef", borderRadius: "12px", padding: "8px 10px", marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={{ width: "26px", height: "26px", borderRadius: "50%", background: "rgba(201,168,76,0.14)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M9.5 8.5c-.8.8-1.7 1.5-2.5 1.5C5.5 10 3.5 8 2.5 6.5 1.5 4.8 1 3.5 2 2.5l1-1c.3-.3.8-.3 1 0l1.5 2c.3.3.3.7 0 1L4.7 5.3C5.2 6.3 6 7.2 7 7.7l.8-.8c.3-.3.7-.3 1 0l2 1.5c.3.3.3.7 0 1l-1.3.1z" fill="#c9a84c" /></svg>
        </div>
        <div>
          <p style={{ fontSize: "11px", fontWeight: 700, color: "#1a1a1a", margin: 0, lineHeight: 1.2 }}>Your Practice</p>
          <p style={{ fontSize: "9px", color: "rgba(0,0,0,0.4)", margin: 0 }}>Missed call · 6:48 PM</p>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "10px" }}>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div style={{ maxWidth: "88%", background: "rgba(201,168,76,0.11)", borderRadius: "4px 12px 12px 12px", padding: "6px 9px" }}>
            <p style={{ fontSize: "10px", color: "#1a1a1a", margin: 0, lineHeight: 1.4 }}>Hi! Sorry we missed your call. Still looking to schedule an appointment?</p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ maxWidth: "72%", background: "rgba(13,12,10,0.07)", borderRadius: "12px 4px 12px 12px", padding: "6px 9px" }}>
            <p style={{ fontSize: "10px", color: "#1a1a1a", margin: 0, lineHeight: 1.4 }}>Yes, I need a cleaning soon</p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div style={{ maxWidth: "88%", background: "rgba(201,168,76,0.11)", borderRadius: "4px 12px 12px 12px", padding: "6px 9px" }}>
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
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l3 3 5-5" stroke="#1e8c4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span style={{ fontSize: "9px", fontWeight: 600, color: "#1e8c4a" }}>Appointment confirmed in 4 minutes</span>
      </div>
    </div>
  )
}

// ── Card 2: Capture audit score ───────────────────────────────────────────────
function AuditCard() {
  const rows = [
    { label: "Missed call response", value: "Active", color: "#1e8c4a" },
    { label: "Web inquiry follow-up", value: "Active", color: "#1e8c4a" },
    { label: "Review requests",       value: "Active", color: "#1e8c4a" },
  ]
  const checks = ["Zero missed opportunities", "Instant follow-up live", "Unified inbox connected", "Monthly report active"]
  return (
    <div style={{ background: "#fff", borderRadius: "20px", border: "1px solid rgba(201,168,76,0.22)", boxShadow: "0 20px 60px rgba(28,24,16,0.12)", padding: "16px", fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}>
      <div style={{ display: "inline-flex", alignItems: "center", padding: "3px 9px", borderRadius: "999px", background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)", marginBottom: "12px" }}>
        <span style={{ fontSize: "8px", letterSpacing: "0.08em", fontWeight: 600, color: "#7a5c10" }}>PATIENT CAPTURE AUDIT</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
        <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "rgba(201,168,76,0.1)", border: "2px solid rgba(201,168,76,0.45)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <span style={{ fontSize: "12px", fontWeight: 700, color: "#7a5c10" }}>94</span>
        </div>
        <p style={{ fontSize: "13px", fontWeight: 700, color: "#1a1a1a", margin: 0 }}>Capture score</p>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
          <span style={{ fontSize: "10px", color: "rgba(0,0,0,0.48)" }}>Patient capture rate</span>
          <span style={{ fontSize: "10px", fontWeight: 600, color: "#7a5c10" }}>94/100</span>
        </div>
        <div style={{ height: "3px", borderRadius: "999px", background: "rgba(32,31,27,0.08)" }}>
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

// ── Card 3: Reputation ────────────────────────────────────────────────────────
function ReviewCard() {
  return (
    <div style={{ background: "#fff", borderRadius: "20px", border: "1px solid rgba(201,168,76,0.22)", boxShadow: "0 20px 60px rgba(28,24,16,0.12)", padding: "12px", fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}>
      <div style={{ display: "inline-flex", alignItems: "center", padding: "3px 9px", borderRadius: "999px", background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)", marginBottom: "10px" }}>
        <span style={{ fontSize: "8px", letterSpacing: "0.08em", fontWeight: 600, color: "#7a5c10" }}>REPUTATION</span>
      </div>
      <div style={{ background: "#f7f4ef", borderRadius: "12px", padding: "8px 10px", marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={{ width: "26px", height: "26px", borderRadius: "50%", background: "rgba(201,168,76,0.14)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M7 1l1.5 3.5H13l-3.5 2.5 1.3 4L7 9 3.2 11l1.3-4L1 4.5h4.5z" fill="#c9a84c" fillOpacity="0.7" /></svg>
        </div>
        <div>
          <p style={{ fontSize: "11px", fontWeight: 700, color: "#1a1a1a", margin: 0, lineHeight: 1.2 }}>Your Practice</p>
          <p style={{ fontSize: "9px", color: "rgba(0,0,0,0.4)", margin: 0 }}>Review request sent · After visit</p>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "10px" }}>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div style={{ maxWidth: "90%", background: "rgba(201,168,76,0.11)", borderRadius: "4px 12px 12px 12px", padding: "6px 9px" }}>
            <p style={{ fontSize: "10px", color: "#1a1a1a", margin: 0, lineHeight: 1.4 }}>Thank you for visiting us today! If you have a moment, we would love to hear about your experience.</p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ maxWidth: "80%", background: "rgba(13,12,10,0.07)", borderRadius: "12px 4px 12px 12px", padding: "6px 9px" }}>
            <div style={{ display: "flex", gap: "2px", marginBottom: "3px" }}>
              {[1,2,3,4,5].map(s => <svg key={s} width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M5 1l1.1 2.6H9L6.8 5.3l.8 2.7L5 6.5l-2.6 1.5.8-2.7L1 3.6h2.9z" fill="#c9a84c" /></svg>)}
            </div>
            <p style={{ fontSize: "10px", color: "#1a1a1a", margin: 0, lineHeight: 1.4 }}>Great staff, very gentle and thorough.</p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "5px", padding: "5px 8px", background: "rgba(30,140,74,0.07)", borderRadius: "8px", border: "1px solid rgba(30,140,74,0.15)" }}>
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l3 3 5-5" stroke="#1e8c4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
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
    if (rel === 0) return { position: "absolute", top: 0, left: "50%", transform: "translateX(-50%) rotate(0deg)", zIndex: 10, transition: "transform 0.42s cubic-bezier(0.22,1,0.36,1)", willChange: "transform" }
    if (rel === 1) return { position: "absolute", top: "12px", left: "50%", transform: "translateX(-50%) rotate(7deg)", zIndex: 5, transition: "transform 0.42s cubic-bezier(0.22,1,0.36,1)", willChange: "transform" }
    return { position: "absolute", top: "12px", left: "50%", transform: "translateX(-50%) rotate(-7deg)", zIndex: 3, transition: "transform 0.42s cubic-bezier(0.22,1,0.36,1)", willChange: "transform" }
  }

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(158deg, #fdf9f0 0%, #f7f4ef 55%, #ede8dc 100%)",
        minHeight: "100vh",
      }}
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 75% 55% at 50% -5%, rgba(201,168,76,0.12) 0%, transparent 60%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 80% 50%, rgba(201,168,76,0.08) 0%, transparent 40%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full" style={{ paddingTop: "8.5rem", paddingBottom: "5rem" }}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: text, centered within column ── */}
          <div className="flex flex-col items-center text-center">
            <p
              className="font-mono-label hero-item"
              style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#7a5c10", marginBottom: "1.5rem", animationDelay: "0ms" }}
            >
              FOR INDEPENDENT DENTAL PRACTICES · PHILADELPHIA
            </p>

            <h1
              className="font-display hero-item"
              style={{
                fontSize: "clamp(2.1rem, 4.6vw, 3.8rem)",
                fontWeight: 300,
                color: "#1c1810",
                lineHeight: 1.12,
                letterSpacing: "-0.025em",
                marginBottom: "1.4rem",
                animationDelay: "70ms",
              }}
            >
              Every missed call is a patient walking into{" "}
              <em className="gold-text-sheen" style={{ fontStyle: "italic", fontWeight: 400, color: "#7a5c10" }}>
                another office.
              </em>
            </h1>

            <div
              className="hero-item"
              style={{ height: "1px", width: "48px", background: "#c9a84c", opacity: 0.5, marginBottom: "1.4rem", animationDelay: "140ms" }}
            />

            <p
              className="font-body hero-item"
              style={{
                fontSize: "clamp(0.95rem, 1.6vw, 1.06rem)",
                color: "rgba(28,24,16,0.65)",
                marginBottom: "2.5rem",
                lineHeight: 1.72,
                maxWidth: "440px",
                animationDelay: "200ms",
              }}
            >
              Presency handles new-patient capture, automated review building, patient reactivation, and monthly ROI reporting, so your practice grows without adding overhead.
            </p>

            <div className="hero-item flex gap-3 items-center justify-center flex-wrap" style={{ marginBottom: "2rem", animationDelay: "275ms" }}>
              <a
                href="https://calendly.com/397jtc/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer font-body font-medium text-center px-7 py-3.5 rounded-lg transition-all duration-200 cursor-pointer"
                style={{ background: "#c9a84c", color: "#0d0c0a", fontSize: "0.95rem", boxShadow: "0 4px 20px rgba(201,168,76,0.3)" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#b8922e"; e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(201,168,76,0.38)" }}
                onMouseLeave={e => { e.currentTarget.style.background = "#c9a84c"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(201,168,76,0.3)" }}
              >
                Get your free Patient Capture Audit
              </a>
              <a
                href="#calculator"
                className="font-body font-medium text-center px-5 py-3.5 rounded-lg transition-all duration-200 cursor-pointer"
                style={{ background: "transparent", color: "#1c1810", fontSize: "0.95rem", border: "1px solid rgba(28,24,16,0.2)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.6)"; e.currentTarget.style.background = "rgba(201,168,76,0.06)" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(28,24,16,0.2)"; e.currentTarget.style.background = "transparent" }}
              >
                See what missed calls cost you
              </a>
            </div>


            {/* Mobile swipeable deck */}
            <div className="lg:hidden mt-10 w-full">
              <div style={{ position: "relative", height: "380px", touchAction: "pan-y" }} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                {mobileCards.map((card, i) => (
                  <div key={i} style={{ width: "min(300px, 86vw)", ...deckStyle(i) }}>{card}</div>
                ))}
              </div>
              <div role="tablist" aria-label="Card navigation" style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "20px" }}>
                {cardLabels.map((label, i) => (
                  <button
                    key={i} role="tab" aria-label={label} aria-selected={activeCard === i}
                    onClick={() => setActiveCard(i)}
                    style={{ width: activeCard === i ? "22px" : "8px", height: "8px", borderRadius: "999px", background: activeCard === i ? "#c9a84c" : "rgba(28,24,16,0.18)", border: "none", cursor: "pointer", transition: "all 0.3s ease", padding: 0 }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: floating cards (desktop only) ── */}
          <div className="hidden lg:block relative" style={{ height: "640px" }}>
            <div className="float-card float-card-missed" style={{ position: "absolute", top: "8px", right: 0, width: "282px", zIndex: 2 }}>
              <MissedCallCard />
            </div>
            <div className="float-card float-card-audit" style={{ position: "absolute", top: "208px", left: 0, width: "210px", zIndex: 3 }}>
              <AuditCard />
            </div>
            <div className="float-card float-card-review" style={{ position: "absolute", bottom: "4px", right: "22px", width: "234px", zIndex: 1 }}>
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
        .hero-item { animation: heroFadeUp 0.65s ease-out both; }
        @keyframes floatDrift {
          0%, 100% { translate: 0 0; }
          50%       { translate: 0 -8px; }
        }
        .float-card {
          transition: transform 0.38s cubic-bezier(0.22,1,0.36,1), filter 0.38s ease;
          will-change: transform;
          animation: floatDrift 7s ease-in-out infinite;
        }
        .float-card-missed { transform: rotate(-1.5deg); animation-duration: 7.5s; }
        .float-card-audit  { transform: rotate(0.8deg);  animation-duration: 8.5s; animation-delay: -2.5s; }
        .float-card-review { transform: rotate(-0.5deg); animation-duration: 9.5s; animation-delay: -5s; }
        .float-card-missed:hover { transform: rotate(-1.5deg) translateY(-8px) scale(1.03); filter: drop-shadow(0 16px 32px rgba(28,24,16,0.16)); z-index: 10 !important; }
        .float-card-audit:hover  { transform: rotate(0.8deg)  translateY(-8px) scale(1.03); filter: drop-shadow(0 16px 32px rgba(28,24,16,0.16)); z-index: 10 !important; }
        .float-card-review:hover { transform: rotate(-0.5deg) translateY(-8px) scale(1.03); filter: drop-shadow(0 16px 32px rgba(28,24,16,0.16)); z-index: 10 !important; }
        @media (prefers-reduced-motion: reduce) {
          .hero-item { animation: none; }
          .float-card { transition: none; animation: none; }
        }
      `}</style>
    </section>
  )
}
