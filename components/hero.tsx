"use client"
import { useRef, useState } from "react"

// ── Card 1: New website going live ────────────────────────────────────────────
function MissedCallCard() {
  return (
    <div style={{ background: "#fff", borderRadius: "20px", border: "1px solid rgba(201,168,76,0.22)", boxShadow: "0 20px 60px rgba(28,24,16,0.12)", padding: "12px", fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}>
      <div style={{ display: "inline-flex", alignItems: "center", padding: "3px 9px", borderRadius: "999px", background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)", marginBottom: "10px" }}>
        <span style={{ fontSize: "8px", letterSpacing: "0.08em", fontWeight: 600, color: "#7a5c10" }}>WEBSITE</span>
      </div>
      {/* Browser window mockup */}
      <div style={{ borderRadius: "12px", border: "1px solid rgba(28,24,16,0.1)", overflow: "hidden", marginBottom: "10px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "5px", padding: "6px 9px", background: "#f7f4ef", borderBottom: "1px solid rgba(28,24,16,0.07)" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "rgba(28,24,16,0.16)" }} />
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "rgba(28,24,16,0.16)" }} />
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "rgba(28,24,16,0.16)" }} />
          <div style={{ flex: 1, marginLeft: "4px", height: "13px", borderRadius: "4px", background: "#fff", border: "1px solid rgba(28,24,16,0.08)", display: "flex", alignItems: "center", padding: "0 6px" }}>
            <span style={{ fontSize: "7px", color: "rgba(0,0,0,0.4)" }}>yourbusiness.com</span>
          </div>
        </div>
        <div style={{ background: "#fff" }}>
          {/* mini-site nav */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "7px 10px", borderBottom: "1px solid rgba(28,24,16,0.06)" }}>
            <span style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "10px", fontWeight: 600, color: "#1c1810" }}>Oakwood</span>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <span style={{ fontSize: "6px", color: "rgba(28,24,16,0.5)" }}>Work</span>
              <span style={{ fontSize: "6px", color: "rgba(28,24,16,0.5)" }}>About</span>
              <span style={{ fontSize: "6px", fontWeight: 600, color: "#7a5c10", background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "999px", padding: "2px 6px" }}>Call</span>
            </div>
          </div>
          {/* mini-site hero */}
          <div style={{ background: "linear-gradient(135deg,#1c1810,#2a2218)", padding: "13px 12px" }}>
            <p style={{ fontSize: "5px", letterSpacing: "0.12em", color: "rgba(201,168,76,0.85)", margin: "0 0 5px", fontWeight: 600 }}>LOCAL · TRUSTED SINCE 2012</p>
            <p style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "13px", lineHeight: 1.14, color: "#f7f4ef", margin: "0 0 4px", fontWeight: 500 }}>Built to last, made local.</p>
            <p style={{ fontSize: "6px", lineHeight: 1.4, color: "rgba(247,244,239,0.6)", margin: "0 0 8px" }}>Trusted by the neighborhood for over a decade.</p>
            <span style={{ display: "inline-block", fontSize: "6px", fontWeight: 600, color: "#0d0c0a", background: "linear-gradient(90deg,#c9a84c,#e8c96d)", borderRadius: "4px", padding: "4px 9px" }}>Get a quote</span>
          </div>
          {/* mini-site review strip */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "4px", padding: "7px" }}>
            <div style={{ display: "flex", gap: "1px" }}>
              {[1,2,3,4,5].map(s => <svg key={s} width="7" height="7" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M5 1l1.1 2.6H9L6.8 5.3l.8 2.7L5 6.5l-2.6 1.5.8-2.7L1 3.6h2.9z" fill="#c9a84c" /></svg>)}
            </div>
            <span style={{ fontSize: "7px", color: "rgba(28,24,16,0.55)", fontWeight: 500 }}>4.9 · 240+ reviews</span>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "5px", padding: "5px 8px", background: "rgba(30,140,74,0.07)", borderRadius: "8px", border: "1px solid rgba(30,140,74,0.15)" }}>
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l3 3 5-5" stroke="#1e8c4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span style={{ fontSize: "9px", fontWeight: 600, color: "#1e8c4a" }}>Site live · Mobile-ready</span>
      </div>
    </div>
  )
}

// ── Card 2: Google Business Profile optimization ──────────────────────────────
function AuditCard() {
  const rows = [
    { label: "Photos & categories", value: "Done",   color: "#1e8c4a" },
    { label: "Weekly posts",        value: "Active", color: "#1e8c4a" },
    { label: "Map pack ranking",    value: "Rising", color: "#1e8c4a" },
  ]
  const checks = ["Showing in the map pack", "Posts publishing weekly", "Questions answered", "Reviews flowing in"]
  return (
    <div style={{ background: "#fff", borderRadius: "20px", border: "1px solid rgba(201,168,76,0.22)", boxShadow: "0 20px 60px rgba(28,24,16,0.12)", padding: "16px", fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}>
      <div style={{ display: "inline-flex", alignItems: "center", padding: "3px 9px", borderRadius: "999px", background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)", marginBottom: "12px" }}>
        <span style={{ fontSize: "8px", letterSpacing: "0.08em", fontWeight: 600, color: "#7a5c10" }}>GOOGLE BUSINESS PROFILE</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
        <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "rgba(201,168,76,0.1)", border: "2px solid rgba(201,168,76,0.45)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <span style={{ fontSize: "12px", fontWeight: 700, color: "#7a5c10" }}>94</span>
        </div>
        <p style={{ fontSize: "13px", fontWeight: 700, color: "#1a1a1a", margin: 0 }}>Profile score</p>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
          <span style={{ fontSize: "10px", color: "rgba(0,0,0,0.48)" }}>Profile strength</span>
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
        <span style={{ fontSize: "8px", letterSpacing: "0.08em", fontWeight: 600, color: "#7a5c10" }}>REVIEWS</span>
      </div>
      <div style={{ background: "#f7f4ef", borderRadius: "12px", padding: "8px 10px", marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={{ width: "26px", height: "26px", borderRadius: "50%", background: "rgba(201,168,76,0.14)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M7 1l1.5 3.5H13l-3.5 2.5 1.3 4L7 9 3.2 11l1.3-4L1 4.5h4.5z" fill="#c9a84c" fillOpacity="0.7" /></svg>
        </div>
        <div>
          <p style={{ fontSize: "11px", fontWeight: 700, color: "#1a1a1a", margin: 0, lineHeight: 1.2 }}>Your Business</p>
          <p style={{ fontSize: "9px", color: "rgba(0,0,0,0.4)", margin: 0 }}>Review request sent · Just now</p>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "10px" }}>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div style={{ maxWidth: "90%", background: "rgba(201,168,76,0.11)", borderRadius: "4px 12px 12px 12px", padding: "6px 9px" }}>
            <p style={{ fontSize: "10px", color: "#1a1a1a", margin: 0, lineHeight: 1.4 }}>Thanks for stopping by! If you have a minute, we would love to hear about your experience.</p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ maxWidth: "80%", background: "rgba(13,12,10,0.07)", borderRadius: "12px 4px 12px 12px", padding: "6px 9px" }}>
            <div style={{ display: "flex", gap: "2px", marginBottom: "3px" }}>
              {[1,2,3,4,5].map(s => <svg key={s} width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M5 1l1.1 2.6H9L6.8 5.3l.8 2.7L5 6.5l-2.6 1.5.8-2.7L1 3.6h2.9z" fill="#c9a84c" /></svg>)}
            </div>
            <p style={{ fontSize: "10px", color: "#1a1a1a", margin: 0, lineHeight: 1.4 }}>Friendly team and great service. Highly recommend.</p>
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
  const cardLabels = ["Website", "Google Business Profile", "Reviews"]
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
              WEBSITES · GOOGLE · REVIEWS · FOR LOCAL BUSINESSES
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
              Be the business local customers{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "#7a5c10" }}>
                find first
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
              Presency builds your website, runs your Google presence, and manages your reviews, so local customers find you, trust you, and choose you.
            </p>

            <div className="hero-item flex gap-3 items-center justify-center flex-wrap" style={{ marginBottom: "2rem", animationDelay: "275ms" }}>
              <a
                href="#contact"
                className="btn-shimmer font-body font-medium text-center px-7 py-3.5 rounded-lg transition-all duration-200 cursor-pointer"
                style={{ background: "#c9a84c", color: "#0d0c0a", fontSize: "0.95rem", boxShadow: "0 4px 20px rgba(201,168,76,0.3)" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#b8922e"; e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(201,168,76,0.38)" }}
                onMouseLeave={e => { e.currentTarget.style.background = "#c9a84c"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(201,168,76,0.3)" }}
              >
                Let&apos;s talk
              </a>
              <a
                href="#what-we-do"
                className="font-body font-medium text-center px-5 py-3.5 rounded-lg transition-all duration-200 cursor-pointer"
                style={{ background: "transparent", color: "#1c1810", fontSize: "0.95rem", border: "1px solid rgba(28,24,16,0.2)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.6)"; e.currentTarget.style.background = "rgba(201,168,76,0.06)" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(28,24,16,0.2)"; e.currentTarget.style.background = "transparent" }}
              >
                See what we do
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
          <div className="hidden lg:block relative" style={{ height: "700px" }}>
            <div className="float-card float-card-missed" style={{ position: "absolute", top: "36px", right: 0, width: "248px", zIndex: 2 }}>
              <MissedCallCard />
            </div>
            <div className="float-card float-card-audit" style={{ position: "absolute", top: "250px", left: 0, width: "248px", zIndex: 3 }}>
              <AuditCard />
            </div>
            <div className="float-card float-card-review" style={{ position: "absolute", bottom: "20px", right: "8px", width: "248px", zIndex: 1 }}>
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
