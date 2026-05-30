"use client"
import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"

const GoldenMesh = dynamic(
  () => import("@/components/ui/golden-mesh").then((m) => ({ default: m.GoldenMesh })),
  { ssr: false }
)

/*
  Intro animation phases (tightened to ~3.2s total):
  0 → overlay visible, content blank
  1 → "Optimizing Your" focuses in
  2 → "Online Presence" follows
  3 → brand reveal ("Presency")
  4 → overlay fades out, hero content fades in
  5 → overlay unmounted
*/
type Phase = 0 | 1 | 2 | 3 | 4 | 5

function GoogleReviewCard({ visible }: { visible: boolean }) {
  return (
    <div style={{ perspective: "1200px" }}>
      <div
        style={{
          animation: visible ? "cardFlyIn 0.9s cubic-bezier(0.2, 0.8, 0.3, 1) 0.2s both" : "none",
          opacity: visible ? undefined : 0,
          maxWidth: "360px",
          marginLeft: "auto",
        }}
      >
        <div
          style={{
            borderRadius: "16px",
            background: "rgba(13,12,10,0.88)",
            border: "1px solid rgba(201,168,76,0.2)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
            padding: "20px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {visible && (
            <div
              aria-hidden="true"
              style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%)",
                animation: "glassShimmer 0.75s ease-out 0.95s both",
                pointerEvents: "none",
                zIndex: 10,
              }}
            />
          )}

          {/* Reviewer row */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "12px" }}>
            {/* Avatar */}
            <div
              style={{
                width: "40px", height: "40px", borderRadius: "50%", flexShrink: 0,
                background: "linear-gradient(135deg, #4285f4 0%, #0f9d58 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "17px", fontWeight: 600, color: "#fff",
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              }}
            >
              M
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontWeight: 600, fontSize: "14px", color: "rgba(250,247,242,0.95)", lineHeight: 1.2, marginBottom: "2px" }}>
                Marcus Thompson
              </p>
              <p style={{ fontSize: "12px", color: "rgba(250,247,242,0.38)", fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}>
                Local Guide · 14 reviews
              </p>
            </div>
            {/* Google G */}
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" style={{ flexShrink: 0, opacity: 0.55 }}>
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>

          {/* Stars + date */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
            <div style={{ display: "flex", gap: "2px" }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#c9a84c" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <span style={{ fontSize: "12px", color: "rgba(250,247,242,0.35)", fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}>
              2 days ago
            </span>
          </div>

          {/* Review text */}
          <p style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontSize: "14px", lineHeight: 1.65, color: "rgba(250,247,242,0.80)", marginBottom: "16px" }}>
            Best spot in the neighborhood. Walked in not knowing what to expect and left a regular customer. Service is fast, quality is great, and everyone&apos;s super welcoming.
          </p>

          {/* Separator */}
          <div style={{ height: "1px", background: "rgba(201,168,76,0.1)", marginBottom: "14px" }} />

          {/* Owner response */}
          <div>
            <p style={{ fontSize: "11px", color: "rgba(201,168,76,0.55)", fontFamily: "var(--font-dm-sans), system-ui, sans-serif", marginBottom: "6px" }}>
              Response from owner · <span style={{ color: "rgba(250,247,242,0.28)" }}>3 minutes ago</span>
            </p>
            <p style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontSize: "13px", lineHeight: 1.6, color: "rgba(250,247,242,0.60)" }}>
              Marcus, thank you so much! We love hearing that. Can&apos;t wait to see you again soon.
            </p>
          </div>

          {/* Attribution */}
          <p
            className="font-mono-label"
            style={{ marginTop: "14px", fontSize: "8px", color: "rgba(201,168,76,0.3)", letterSpacing: "0.12em", textAlign: "right" }}
          >
            SAMPLE RESPONSE · WRITTEN BY PRESENCY
          </p>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  const [phase, setPhase] = useState<Phase>(0)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) { setPhase(5); return }

    const timers = [
      setTimeout(() => setPhase(1),  120),   // "Presency" brand reveal
      setTimeout(() => setPhase(2),  950),   // "Optimizing Your" appears below
      setTimeout(() => setPhase(3), 1200),   // "Online Presence" staggers in
      setTimeout(() => setPhase(4), 2450),   // overlay fades
      setTimeout(() => setPhase(5), 3450),   // overlay unmounts
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  useEffect(() => {
    if (phase !== 4) return
    const hero = heroRef.current
    if (!hero) return
    hero.querySelectorAll<HTMLElement>("[data-animate]").forEach((el, i) => {
      setTimeout(() => {
        el.style.opacity = "1"
        el.style.transform = "translateY(0)"
      }, i * 110)
    })
  }, [phase])

  const enterStyle: React.CSSProperties = {
    opacity: 0,
    transform: "translateY(18px)",
    transition: "opacity 0.55s ease-out, transform 0.55s ease-out",
  }

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--ink)" }}
    >
      {/* Golden mesh shader background */}
      <div className="absolute inset-0">
        <GoldenMesh className="w-full h-full" />
      </div>

      {/* Dark vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, transparent 30%, rgba(13,12,10,0.55) 100%)",
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Intro overlay ──────────────────────────────────────────────────── */}
      {phase < 5 && (
        <div
          aria-hidden="true"
          className="absolute inset-0 z-20 flex items-center justify-center text-center px-6"
          style={{
            background: "radial-gradient(ellipse at 50% 52%, rgba(35,25,8,1) 0%, rgba(13,12,10,1) 65%)",
            opacity: phase === 4 ? 0 : 1,
            transition: "opacity 0.9s ease-out",
            pointerEvents: phase >= 4 ? "none" : "auto",
          }}
        >
          {/* Ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 60%)",
              animation: "ambientPulse 4s ease-in-out infinite",
            }}
          />

          {/* Enhanced background warmth — appears with the brand reveal */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.1) 0%, transparent 55%)",
              opacity: phase >= 1 ? 1 : 0,
              transition: "opacity 1.2s ease-out",
            }}
          />


          {/* Brand first, tagline below — single flex column, no overlap */}
          <div
            style={{
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "1rem",
            }}
          >
            {/* Brand reveal — appears first */}
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: phase >= 1 ? 1 : 0,
                transform: phase >= 1 ? "scale(1) translateY(0)" : "scale(1.07) translateY(10px)",
                filter: phase >= 1 ? "blur(0px)" : "blur(12px)",
                transition: "opacity 0.9s ease-out, transform 0.9s ease-out, filter 0.9s ease-out",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "120%",
                  height: "200%",
                  top: "-50%",
                  left: "-10%",
                  background: "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.18) 0%, transparent 65%)",
                  animation: phase >= 1 ? "goldGlow 3.5s ease-in-out infinite" : "none",
                  pointerEvents: "none",
                }}
              />
              <p
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontWeight: 300,
                  fontSize: "clamp(3.8rem, 21vw, 9.5rem)",
                  letterSpacing: "-0.045em",
                  lineHeight: 1.1,
                  paddingBottom: "0.08em",
                  background: "linear-gradient(105deg, #c9a84c 0%, #f5dfa0 22%, #fff8e7 38%, #e8c96d 52%, #c9a84c 65%, #f0dfa0 82%, #b8922e 100%)",
                  backgroundSize: "300% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  position: "relative",
                  zIndex: 1,
                  animation: phase >= 1 ? "textShimmer 5s linear infinite" : "none",
                }}
              >
                Presency
              </p>
            </div>

            {/* Divider line — expands when tagline appears */}
            <div
              style={{
                height: "1px",
                width: phase >= 2 ? "80px" : "0px",
                background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.55), transparent)",
                margin: "0.5rem auto",
                transition: "width 0.9s cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDelay: "100ms",
              }}
            />

            {/* Tagline — appears below brand after delay */}
            <div style={{ lineHeight: 1.2 }}>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(1.4rem, 5.5vw, 2.2rem)",
                  color: "rgba(255,251,240,0.92)",
                  letterSpacing: "-0.01em",
                  opacity: phase >= 2 ? 1 : 0,
                  transform: phase >= 2 ? "translateY(0)" : "translateY(18px)",
                  filter: phase >= 2 ? "blur(0px)" : "blur(8px)",
                  transition: "opacity 0.65s ease-out, transform 0.65s ease-out, filter 0.65s ease-out",
                }}
              >
                Optimizing Your
              </p>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.4rem, 5.5vw, 2.2rem)",
                  letterSpacing: "-0.01em",
                  marginTop: "0.08em",
                  background: "linear-gradient(120deg, #f5dfa0 0%, #c9a84c 45%, #e8d08a 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  opacity: phase >= 3 ? 1 : 0,
                  transform: phase >= 3 ? "translateY(0)" : "translateY(18px)",
                  filter: phase >= 3 ? "blur(0px)" : "blur(8px)",
                  transition: "opacity 0.65s ease-out, transform 0.65s ease-out, filter 0.65s ease-out",
                }}
              >
                Online Presence
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── Hero content ───────────────────────────────────────────────────── */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20 w-full"
        style={{
          opacity: phase >= 4 ? 1 : 0,
          transition: "opacity 0.8s ease-out",
        }}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div data-animate style={enterStyle}>
              <span className="eyebrow mb-6 block">Bringing Philly Businesses the Exposure They Deserve</span>
            </div>

            {/* H1 */}
            <div data-animate style={enterStyle}>
              <h1
                className="font-display mb-5 leading-[1.05]"
                style={{
                  fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                  fontWeight: 300,
                  color: "var(--text-primary)",
                }}
              >
                Your customers look you up before they call.{" "}
                <em
                  className="font-display"
                  style={{
                    fontStyle: "italic",
                    color: "var(--gold-light)",
                    fontWeight: 400,
                  }}
                >
                  Make sure they like what they see.
                </em>
              </h1>
            </div>

            {/* Subheading */}
            <div data-animate style={enterStyle}>
              <p
                className="font-body text-xl leading-relaxed mb-8 max-w-lg"
                style={{ color: "var(--text-secondary)" }}
              >
                We build modern websites and keep your Google presence looking active, professional, and trustworthy. No tech work on your end.
              </p>
            </div>

            {/* CTAs */}
            <div data-animate style={enterStyle}>
              <div className="flex flex-wrap gap-4 mb-3">
                <Link
                  href="/free-audit"
                  className="font-body font-medium px-7 py-3.5 rounded-lg transition-all duration-200 cursor-pointer"
                  style={{ background: "var(--gold)", color: "var(--ink)" }}
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
                  Get my free presence audit
                </Link>
              </div>
              <p className="font-body text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
                Or{" "}
                <Link href="/#services" className="link-gold-light">
                  see what&apos;s included →
                </Link>
              </p>
              <p className="font-body text-xs" style={{ color: "var(--text-muted)" }}>
                No Google password required. Cancel anytime.
              </p>
            </div>
          </div>

          {/* Right: Google review card — desktop only */}
          <div className="hidden lg:block" data-animate style={enterStyle}>
            <GoogleReviewCard visible={phase >= 5} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ambientPulse {
          0%, 100% { opacity: 0.6; }
          50%       { opacity: 1; }
        }
        @keyframes goldGlow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.06); }
        }
        @keyframes textShimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -100% center; }
        }
        @keyframes cardFlyIn {
          0%   { opacity: 0; transform: translateY(56px) translateX(18px) scale(0.87) rotateX(16deg) rotateY(-10deg); filter: blur(12px); }
          55%  { opacity: 1; transform: translateY(-8px) translateX(-2px) scale(1.02) rotateX(-2deg) rotateY(0.5deg); filter: blur(0); }
          75%  { transform: translateY(4px) translateX(1px) scale(0.997) rotateX(0.5deg); }
          100% { opacity: 1; transform: translateY(0) translateX(0) scale(1) rotateX(0) rotateY(0); filter: blur(0); }
        }
        @keyframes glassShimmer {
          0%   { transform: translateX(-120%) skewX(-20deg); opacity: 0; }
          15%  { opacity: 1; }
          100% { transform: translateX(300%) skewX(-20deg); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; }
        }
      `}</style>
    </section>
  )
}
