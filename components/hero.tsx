"use client"
import { useEffect, useState } from "react"
import Link from "next/link"

// ── Card 1: Google Business Profile — real dark-mode map ──────────────────────
function GoogleCard() {
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
      {/* Real Google Maps screenshot */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <div style={{ height: "80px", borderRadius: "12px", overflow: "hidden", marginBottom: "12px" }}>
        <img
          src="/map-philly.png"
          alt="Philadelphia area Google Maps view"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", display: "block" }}
        />
      </div>

      {/* Business name + Google G */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "4px" }}>
        <p style={{ fontSize: "13px", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.2 }}>Fishtown Dental Studio</p>
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" style={{ flexShrink: 0, opacity: 0.55, marginTop: "1px" }}>
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "4px" }}>
        <div style={{ display: "flex", gap: "1px" }}>
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#fbbc04" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          ))}
        </div>
        <span style={{ fontSize: "11px", fontWeight: 600, color: "#1a1a1a" }}>4.8</span>
        <span style={{ fontSize: "10px", color: "rgba(0,0,0,0.42)" }}>· Dentist · Philadelphia, PA</span>
      </div>
      <p style={{ fontSize: "11px", color: "#1e8c4a", fontWeight: 500, marginBottom: "10px" }}>Open today</p>
      <div style={{ display: "flex", gap: "6px", marginBottom: "12px" }}>
        {["Website", "Directions", "Call"].map(label => (
          <div key={label} style={{ flex: 1, textAlign: "center", padding: "5px 0", borderRadius: "8px", background: "rgba(32,31,27,0.05)", border: "1px solid rgba(32,31,27,0.08)", fontSize: "10px", fontWeight: 500, color: "#1a1a1a" }}>
            {label}
          </div>
        ))}
      </div>
      <div style={{ display: "inline-flex", alignItems: "center", padding: "3px 9px", borderRadius: "999px", background: "rgba(201,168,76,0.11)", border: "1px solid rgba(201,168,76,0.28)" }}>
        <span style={{ fontSize: "8px", letterSpacing: "0.08em", fontWeight: 600, color: "#7a5c10" }}>GOOGLE PRESENCE</span>
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

// ── Card 3: Audit Score ───────────────────────────────────────────────────────
function AuditCard() {
  const metrics = [
    { label: "Website clarity", value: "92/100", bar: 92 },
    { label: "Mobile experience", value: "Fast" },
    { label: "Google profile",   value: "Optimized" },
    { label: "Trust signals",    value: "Improved" },
  ]
  const checks = ["Clear first impression", "Better mobile layout", "Stronger calls to action", "Google profile aligned"]

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
      {/* Header: Score + 92 circle */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
        <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(201,168,76,0.12)", border: "2px solid rgba(201,168,76,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <span style={{ fontSize: "11px", fontWeight: 700, color: "#7a5c10" }}>92</span>
        </div>
        <p style={{ fontSize: "12px", fontWeight: 700, color: "#1a1a1a" }}>Score</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "12px" }}>
        {metrics.map(m => (
          <div key={m.label}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
              <span style={{ fontSize: "10px", color: "rgba(0,0,0,0.48)" }}>{m.label}</span>
              <span style={{ fontSize: "10px", fontWeight: 600, color: "#1e8c4a" }}>{m.value}</span>
            </div>
            {m.bar && (
              <div style={{ height: "3px", borderRadius: "999px", background: "rgba(32,31,27,0.07)" }}>
                <div style={{ height: "100%", width: `${m.bar}%`, borderRadius: "999px", background: "linear-gradient(90deg,#c9a84c,#e8c96d)" }} />
              </div>
            )}
          </div>
        ))}
      </div>
      <div style={{ height: "1px", background: "rgba(32,31,27,0.07)", marginBottom: "10px" }} />
      <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "12px" }}>
        {checks.map(item => (
          <div key={item} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
            <span style={{ fontSize: "10px", color: "#c9a84c", flexShrink: 0, fontWeight: 700 }}>✓</span>
            <span style={{ fontSize: "10px", color: "rgba(0,0,0,0.52)" }}>{item}</span>
          </div>
        ))}
      </div>
      {/* Golden bubble badge */}
      <div style={{ display: "inline-flex", alignItems: "center", padding: "3px 9px", borderRadius: "999px", background: "rgba(201,168,76,0.11)", border: "1px solid rgba(201,168,76,0.28)" }}>
        <span style={{ fontSize: "8px", letterSpacing: "0.08em", fontWeight: 600, color: "#7a5c10" }}>PRESENCE AUDIT</span>
      </div>
    </div>
  )
}

// ── Main Hero ─────────────────────────────────────────────────────────────────
export function Hero() {
  const [activeCard, setActiveCard] = useState(0)
  const CARD_COUNT = 3

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard(prev => (prev + 1) % CARD_COUNT)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  const cardLabels = ["Google presence", "Website redesign", "Audit score"]

  const enterStyle: React.CSSProperties = {
    opacity: 0,
    transform: "translateY(22px)",
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
              className="font-display hero-item"
              style={{ fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 300, color: "#7a5c10", lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: "1.1rem", animationDelay: "70ms" }}
            >
              Make your local business<br />
              look like the obvious choice
            </h1>

            <p
              className="font-body hero-item"
              style={{ fontSize: "clamp(0.92rem,1.6vw,1.05rem)", fontStyle: "italic", color: "rgba(13,12,10,0.46)", marginBottom: "0.85rem", lineHeight: 1.55, animationDelay: "140ms" }}
            >
              Before customers call, book, or visit, they judge what they see.
            </p>

            {/* Thin separator */}
            <div className="hero-item" style={{ height: "1px", background: "rgba(13,12,10,0.10)", maxWidth: "460px", marginBottom: "0.85rem", animationDelay: "175ms" }} />

            <p
              className="font-body hero-item"
              style={{ fontSize: "clamp(0.92rem,1.6vw,1rem)", color: "rgba(13,12,10,0.50)", marginBottom: "2.5rem", lineHeight: 1.7, maxWidth: "460px", animationDelay: "210ms" }}
            >
              Presency redesigns outdated websites and improves your Google presence so Philly customers trust you before they ever walk in.
            </p>

            <div className="hero-item flex flex-wrap gap-3 items-center" style={{ marginBottom: "1.5rem", animationDelay: "280ms" }}>
              <Link
                href="/free-audit"
                className="font-body font-medium inline-block px-7 py-3.5 rounded-lg transition-all duration-200 cursor-pointer"
                style={{ background: "var(--gold)", color: "#0d0c0a", fontSize: "0.95rem" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#d4b05a"; e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(201,168,76,0.32)" }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none" }}
              >
                Get my free presence audit
              </Link>
              <Link
                href="/#services"
                className="font-body font-medium inline-block px-5 py-3.5 rounded-lg transition-all duration-200 cursor-pointer"
                style={{ background: "transparent", color: "var(--ink)", fontSize: "0.95rem", border: "1px solid rgba(13,12,10,0.18)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(13,12,10,0.38)"; e.currentTarget.style.background = "rgba(13,12,10,0.04)" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(13,12,10,0.18)"; e.currentTarget.style.background = "transparent" }}
              >
                See what we fix
              </Link>
            </div>

            <p
              className="font-mono-label hero-item"
              style={{ fontSize: "0.64rem", letterSpacing: "0.09em", color: "rgba(13,12,10,0.30)", lineHeight: 1.6, animationDelay: "350ms" }}
            >
              WEBSITE REDESIGNS&nbsp;&nbsp;·&nbsp;&nbsp;GOOGLE PRESENCE CLEANUP&nbsp;&nbsp;·&nbsp;&nbsp;NO CONTRACTS
            </p>

            {/* ── Mobile carousel ── */}
            <div className="lg:hidden mt-12">
              {/* Grid stack — all cards overlap, opacity controls visibility */}
              <div style={{ display: "grid" }}>
                {[<GoogleCard key="g" />, <WebsiteCard key="w" />, <AuditCard key="a" />].map((card, i) => (
                  <div
                    key={i}
                    style={{
                      gridColumn: 1,
                      gridRow: 1,
                      opacity: activeCard === i ? 1 : 0,
                      transform: activeCard === i ? "translateY(0)" : "translateY(8px)",
                      transition: "opacity 0.5s ease, transform 0.5s ease",
                      pointerEvents: activeCard === i ? "auto" : "none",
                    }}
                  >
                    {card}
                  </div>
                ))}
              </div>

              {/* Dots */}
              <div role="tablist" aria-label="Card navigation" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", marginTop: "14px" }}>
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
          <div className="hidden lg:block relative" style={{ height: "560px" }}>
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: "radial-gradient(circle at 58% 52%,rgba(203,174,78,0.13) 0%,transparent 60%)" }} />
            {/* Google card — top right */}
            <div className="float-card float-card-google" style={{ position: "absolute", top: 0, right: 0, width: "278px", zIndex: 2 }}>
              <GoogleCard />
            </div>
            {/* Audit card — middle left */}
            <div className="float-card float-card-audit" style={{ position: "absolute", top: "195px", left: 0, width: "208px", zIndex: 3 }}>
              <AuditCard />
            </div>
            {/* Website card — bottom right */}
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
