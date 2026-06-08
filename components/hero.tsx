"use client"
import { useRef, useState } from "react"
import Link from "next/link"

// ── Card 1: SMS Text-Back — missed call conversation ─────────────────────────
function SMSCard() {
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
      {/* Phone header */}
      <div style={{ background: "#f7f4ef", borderRadius: "12px", padding: "8px 10px", marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={{ width: "26px", height: "26px", borderRadius: "50%", background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M9.5 8.5c-.8.8-1.7 1.5-2.5 1.5C5.5 10 3.5 8 2.5 6.5 1.5 4.8 1 3.5 2 2.5l1-1c.3-.3.8-.3 1 0l1.5 2c.3.3.3.7 0 1L4.7 5.3C5.2 6.3 6 7.2 7 7.7l.8-.8c.3-.3.7-.3 1 0l2 1.5c.3.3.3.7 0 1l-1.3.1z" fill="#c9a84c" />
          </svg>
        </div>
        <div>
          <p style={{ fontSize: "11px", fontWeight: 700, color: "#1a1a1a", margin: 0, lineHeight: 1.2 }}>River Blvd Auto</p>
          <p style={{ fontSize: "9px", color: "rgba(0,0,0,0.4)", margin: 0 }}>Missed call · 7:02 PM</p>
        </div>
      </div>

      {/* SMS bubbles */}
      <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "10px" }}>
        {/* Business text */}
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div style={{ maxWidth: "88%", background: "rgba(201,168,76,0.12)", borderRadius: "4px 12px 12px 12px", padding: "6px 9px" }}>
            <p style={{ fontSize: "10px", color: "#1a1a1a", margin: 0, lineHeight: 1.4 }}>Hey! Sorry we missed you. Still looking to get your car in?</p>
          </div>
        </div>
        {/* Customer reply */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ maxWidth: "72%", background: "rgba(13,12,10,0.07)", borderRadius: "12px 4px 12px 12px", padding: "6px 9px" }}>
            <p style={{ fontSize: "10px", color: "#1a1a1a", margin: 0, lineHeight: 1.4 }}>Yes! Need an oil change ASAP</p>
          </div>
        </div>
        {/* Business */}
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div style={{ maxWidth: "88%", background: "rgba(201,168,76,0.12)", borderRadius: "4px 12px 12px 12px", padding: "6px 9px" }}>
            <p style={{ fontSize: "10px", color: "#1a1a1a", margin: 0, lineHeight: 1.4 }}>We have tomorrow at 9am or 11am. Which works?</p>
          </div>
        </div>
        {/* Customer */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ maxWidth: "60%", background: "rgba(13,12,10,0.07)", borderRadius: "12px 4px 12px 12px", padding: "6px 9px" }}>
            <p style={{ fontSize: "10px", color: "#1a1a1a", margin: 0, lineHeight: 1.4 }}>9am! Thanks</p>
          </div>
        </div>
      </div>

      {/* Result strip */}
      <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "10px", padding: "5px 8px", background: "rgba(30,140,74,0.07)", borderRadius: "8px", border: "1px solid rgba(30,140,74,0.15)" }}>
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M2 6l3 3 5-5" stroke="#1e8c4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ fontSize: "9px", fontWeight: 600, color: "#1e8c4a" }}>Booked in 3 minutes</span>
      </div>

      {/* Badge */}
      <div style={{ display: "inline-flex", alignItems: "center", padding: "3px 9px", borderRadius: "999px", background: "rgba(201,168,76,0.11)", border: "1px solid rgba(201,168,76,0.28)" }}>
        <span style={{ fontSize: "8px", letterSpacing: "0.08em", fontWeight: 600, color: "#7a5c10" }}>LEAD RECOVERY</span>
      </div>
    </div>
  )
}

// ── Card 2: Website Redesigned — mini Presency site preview ──────────────────
function WebsiteCard() {
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
      {/* Mini website preview — inset, rounded corners */}
      <div style={{ borderRadius: "14px", overflow: "hidden", marginBottom: "10px" }}>

        {/* Dark hero section */}
        <div style={{ background: "#0d0c0a", position: "relative", overflow: "hidden", height: "110px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          {/* Animated gold glow */}
          <div className="mini-gold-pulse" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 90% 70% at 50% 40%, rgba(201,168,76,0.26) 0%, transparent 65%)" }} />
          <div className="mini-ambient" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 55% 50% at 15% 80%, rgba(201,168,76,0.07) 0%, transparent 65%)" }} />
          {/* Grain */}
          <div style={{ position: "absolute", inset: 0, opacity: 0.15, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`, backgroundSize: "120px 120px" }} />
          {/* Wordmark */}
          <span className="mini-text-shimmer" style={{ position: "relative", fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontSize: "22px", letterSpacing: "-0.04em", lineHeight: 1, background: "linear-gradient(105deg, #c9a84c 0%, #f5dfa0 22%, #fff8e7 38%, #e8c96d 52%, #c9a84c 65%, #f0dfa0 82%, #b8922e 100%)", backgroundSize: "300% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "5px" }}>
            Presency
          </span>
          {/* Sub-header */}
          <p style={{ position: "relative", fontSize: "8px", color: "rgba(250,247,242,0.45)", fontFamily: "var(--font-dm-sans), sans-serif", letterSpacing: "0.08em", margin: 0 }}>
            WE BUILD WEBSITES
          </p>
        </div>

        {/* Fake content section below — on-brand cream/gold palette */}
        <div style={{ background: "#f7f4ec", padding: "12px 14px" }}>
          {/* Fake section title */}
          <div style={{ height: "7px", width: "45%", background: "rgba(122,92,16,0.22)", borderRadius: "4px", marginBottom: "10px" }} />
          {/* Fake text lines */}
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <div style={{ height: "5px", width: "100%", background: "rgba(122,92,16,0.10)", borderRadius: "3px" }} />
            <div style={{ height: "5px", width: "88%", background: "rgba(122,92,16,0.10)", borderRadius: "3px" }} />
            <div style={{ height: "5px", width: "74%", background: "rgba(122,92,16,0.10)", borderRadius: "3px" }} />
          </div>
          {/* Fake service blocks */}
          <div style={{ display: "flex", gap: "5px", marginTop: "10px" }}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{ flex: 1, height: "22px", borderRadius: "6px", background: "rgba(201,168,76,0.10)", border: "1px solid rgba(201,168,76,0.20)" }} />
            ))}
          </div>
        </div>
      </div>

      {/* Golden bubble badge */}
      <div style={{ display: "inline-flex", alignItems: "center", padding: "3px 9px", borderRadius: "999px", background: "rgba(201,168,76,0.11)", border: "1px solid rgba(201,168,76,0.28)" }}>
        <span style={{ fontSize: "8px", letterSpacing: "0.08em", fontWeight: 600, color: "#7a5c10" }}>WEBSITE REDESIGN</span>
      </div>
    </div>
  )
}

// ── Card 3: Free Audit Score ──────────────────────────────────────────────────
function AuditCard() {
  const rows = [
    { label: "Mobile experience",  value: "Fast",      color: "#1e8c4a" },
    { label: "Lead follow-up",     value: "Active",    color: "#1e8c4a" },
    { label: "Trust signals",      value: "Improved",  color: "#1e8c4a" },
  ]
  const checks = [
    "Clear first impression",
    "Better mobile layout",
    "Stronger calls to action",
    "Instant lead follow-up",
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
      {/* Score header */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
        <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "rgba(201,168,76,0.10)", border: "2px solid rgba(201,168,76,0.45)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <span style={{ fontSize: "12px", fontWeight: 700, color: "#7a5c10" }}>92</span>
        </div>
        <p style={{ fontSize: "13px", fontWeight: 700, color: "#1a1a1a" }}>Score</p>
      </div>

      {/* Website clarity bar */}
      <div style={{ marginBottom: "10px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
          <span style={{ fontSize: "10px", color: "rgba(0,0,0,0.48)" }}>Website clarity</span>
          <span style={{ fontSize: "10px", fontWeight: 600, color: "#7a5c10" }}>92/100</span>
        </div>
        <div style={{ height: "3px", borderRadius: "999px", background: "rgba(32,31,27,0.07)" }}>
          <div style={{ height: "100%", width: "92%", borderRadius: "999px", background: "linear-gradient(90deg,#c9a84c,#e8c96d)" }} />
        </div>
      </div>

      {/* Status rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: "7px", marginBottom: "12px" }}>
        {rows.map(r => (
          <div key={r.label} style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontSize: "10px", color: "rgba(0,0,0,0.48)" }}>{r.label}</span>
            <span style={{ fontSize: "10px", fontWeight: 600, color: r.color }}>{r.value}</span>
          </div>
        ))}
      </div>

      <div style={{ height: "1px", background: "rgba(32,31,27,0.07)", marginBottom: "10px" }} />

      {/* Checklist */}
      <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "12px" }}>
        {checks.map(item => (
          <div key={item} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
            <span style={{ fontSize: "10px", color: "#c9a84c", flexShrink: 0, fontWeight: 700 }}>✓</span>
            <span style={{ fontSize: "10px", color: "rgba(0,0,0,0.52)" }}>{item}</span>
          </div>
        ))}
      </div>

      {/* Badge */}
      <div style={{ display: "inline-flex", alignItems: "center", padding: "3px 9px", borderRadius: "999px", background: "rgba(201,168,76,0.11)", border: "1px solid rgba(201,168,76,0.28)" }}>
        <span style={{ fontSize: "8px", letterSpacing: "0.08em", fontWeight: 600, color: "#7a5c10" }}>FREE AUDIT</span>
      </div>
    </div>
  )
}


// ── Main Hero ─────────────────────────────────────────────────────────────────
export function Hero() {
  const [activeCard, setActiveCard] = useState(0)
  const CARD_COUNT = 3
  const cardLabels = ["Missed call follow-up", "Website redesign", "Free audit"]
  const mobileCards = [<SMSCard key="s" />, <WebsiteCard key="w" />, <AuditCard key="a" />]

  // ── Swipe detection ──────────────────────────────────────────────────────────
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

  // ── Per-card position in the stacked deck ───────────────────────────────────
  const deckStyle = (i: number): React.CSSProperties => {
    const rel = (i - activeCard + CARD_COUNT) % CARD_COUNT
    if (rel === 0) return {  // front
      position: "absolute", top: 0, left: "50%",
      transform: "translateX(-50%) rotate(0deg)",
      zIndex: 10,
      transition: "transform 0.42s cubic-bezier(0.22,1,0.36,1)",
      willChange: "transform",
    }
    if (rel === 1) return {  // back-right
      position: "absolute", top: "12px", left: "50%",
      transform: "translateX(-50%) rotate(7deg)",
      zIndex: 5,
      transition: "transform 0.42s cubic-bezier(0.22,1,0.36,1)",
      willChange: "transform",
    }
    return {                 // back-left
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
      {/* Background depth */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{ background: "linear-gradient(158deg,#fdf9f0 0%,#F7F4EC 50%,#ede8dc 100%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 50% -8%,rgba(201,168,76,0.16) 0%,transparent 65%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 78% 48%,rgba(203,174,78,0.14) 0%,transparent 38%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 95% 90% at 50% 50%,transparent 58%,rgba(13,12,10,0.04) 100%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full" style={{ paddingTop: "8rem", paddingBottom: "5rem" }}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: text ────────────────────────────────────────────── */}
          <div>
            <p className="eyebrow hero-item" style={{ marginBottom: "1.5rem", animationDelay: "0ms" }}>
              Attention Philly
            </p>

            <h1
              className="font-display hero-item text-center lg:text-left"
              style={{ fontSize: "clamp(2rem,5vw,4rem)", fontWeight: 300, color: "#7a5c10", lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: "1.1rem", animationDelay: "70ms" }}
            >
              Make your local business<br />
              look like the obvious choice
            </h1>

            <p
              className="hidden lg:block font-body hero-item"
              style={{ fontSize: "clamp(0.92rem,1.6vw,1.05rem)", fontStyle: "italic", color: "rgba(13,12,10,0.46)", marginBottom: "0.85rem", lineHeight: 1.55, animationDelay: "140ms" }}
            >
              Before customers call, book, or visit, they judge what they see.
            </p>

            {/* Thin separator */}
            <div className="hidden lg:block hero-item" style={{ height: "1px", background: "rgba(13,12,10,0.10)", maxWidth: "460px", marginBottom: "0.85rem", animationDelay: "175ms" }} />

            <p
              className="hidden lg:block font-body hero-item"
              style={{ fontSize: "clamp(0.92rem,1.6vw,1rem)", color: "rgba(13,12,10,0.50)", marginBottom: "2.5rem", lineHeight: 1.7, maxWidth: "460px", animationDelay: "210ms" }}
            >
              Presency redesigns outdated websites and makes sure every missed call gets an instant follow-up, so Philly customers find you, trust you, and book with you.
            </p>

            <div className="hero-item flex flex-wrap gap-3 items-center" style={{ marginBottom: "1.5rem", animationDelay: "280ms" }}>
              <Link
                href="/free-audit"
                className="font-body font-medium block lg:inline-block text-center px-7 py-3.5 rounded-lg transition-all duration-200 cursor-pointer w-full lg:w-auto"
                style={{ background: "var(--gold)", color: "#0d0c0a", fontSize: "0.95rem" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#d4b05a"; e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(201,168,76,0.32)" }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none" }}
              >
                Get my free audit
              </Link>
              <Link
                href="/#services"
                className="font-body font-medium block lg:inline-block text-center px-5 py-3.5 rounded-lg transition-all duration-200 cursor-pointer w-full lg:w-auto"
                style={{ background: "transparent", color: "var(--ink)", fontSize: "0.95rem", border: "1px solid rgba(13,12,10,0.18)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(13,12,10,0.38)"; e.currentTarget.style.background = "rgba(13,12,10,0.04)" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(13,12,10,0.18)"; e.currentTarget.style.background = "transparent" }}
              >
                See how it works
              </Link>
            </div>

            <p
              className="font-mono-label hero-item text-center lg:text-left"
              style={{ fontSize: "0.64rem", letterSpacing: "0.09em", color: "rgba(13,12,10,0.30)", lineHeight: 1.6, animationDelay: "350ms" }}
            >
              WEBSITE REDESIGNS&nbsp;&nbsp;·&nbsp;&nbsp;LEAD RECOVERY&nbsp;&nbsp;·&nbsp;&nbsp;NO CONTRACTS
            </p>

            {/* ── Mobile stacked deck (swipe to change) ── */}
            <div className="lg:hidden mt-10">
              {/* Stack container — overflow visible so rotated corners peek out */}
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

              {/* Dots */}
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

          {/* ── Right: floating cards (desktop only) ──────────────────── */}
          {/* Exact original layout — SMS replaces the old Google Maps card */}
          {/* Height = SMS (~300px) + 80px gap + Website (~244px) = 624px min → 660px */}
          <div className="hidden lg:block relative" style={{ height: "660px" }}>
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: "radial-gradient(circle at 58% 52%,rgba(203,174,78,0.13) 0%,transparent 60%)" }} />
            {/* SMS card — top right (same slot/size as old Google card) */}
            <div className="float-card float-card-google" style={{ position: "absolute", top: 0, right: 0, width: "278px", zIndex: 2 }}>
              <SMSCard />
            </div>
            {/* Audit card — middle left (same slot as old Audit card) */}
            <div className="float-card float-card-audit" style={{ position: "absolute", top: "195px", left: 0, width: "208px", zIndex: 3 }}>
              <AuditCard />
            </div>
            {/* Website card — bottom right (unchanged) */}
            <div className="float-card float-card-website" style={{ position: "absolute", bottom: 0, right: "20px", width: "215px", zIndex: 1 }}>
              <WebsiteCard />
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
        @keyframes miniGoldPulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.06); }
        }
        .mini-gold-pulse {
          animation: miniGoldPulse 3.8s ease-in-out infinite;
        }
        @keyframes miniAmbient {
          0%, 100% { opacity: 0.55; }
          60%       { opacity: 0.85; }
        }
        .mini-ambient {
          animation: miniAmbient 5s ease-in-out infinite;
        }
        @keyframes miniTextShimmer {
          0%   { background-position: 0% center; }
          100% { background-position: -200% center; }
        }
        .mini-text-shimmer {
          animation: miniTextShimmer 4.5s linear infinite;
        }
        /* ── Floating card hover interactions (desktop) ── */
        .float-card {
          transition: transform 0.38s cubic-bezier(0.22, 1, 0.36, 1),
                      filter 0.38s ease;
          will-change: transform;
        }
        .float-card-google {
          transform: rotate(-1.5deg);
        }
        .float-card-audit {
          transform: rotate(0.8deg);
        }
        .float-card-website {
          transform: rotate(-0.5deg);
        }
        .float-card-google:hover {
          transform: rotate(-1.5deg) translateY(-10px) scale(1.03);
          filter: drop-shadow(0 20px 40px rgba(13,12,10,0.14));
          z-index: 10 !important;
        }
        .float-card-audit:hover {
          transform: rotate(0.8deg) translateY(-10px) scale(1.03);
          filter: drop-shadow(0 20px 40px rgba(13,12,10,0.14));
          z-index: 10 !important;
        }
        .float-card-website:hover {
          transform: rotate(-0.5deg) translateY(-10px) scale(1.03);
          filter: drop-shadow(0 20px 40px rgba(13,12,10,0.14));
          z-index: 10 !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-item, .mini-gold-pulse, .mini-ambient, .mini-text-shimmer { animation: none; }
          .float-card { transition: none; }
        }
      `}</style>
    </section>
  )
}
