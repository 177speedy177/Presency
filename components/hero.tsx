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
  2 → "Social Presence" follows
  3 → brand reveal ("Presency")
  4 → overlay fades out, hero content fades in
  5 → overlay unmounted
*/
type Phase = 0 | 1 | 2 | 3 | 4 | 5

// A simulated review response card shown in the hero right column
function ReviewMockup({ visible }: { visible: boolean }) {
  return (
    <div style={{ perspective: "1200px" }}>
      <div
        style={{
          animation: visible ? "cardFlyIn 0.9s cubic-bezier(0.2, 0.8, 0.3, 1) 0.2s both" : "none",
          opacity: visible ? undefined : 0,
        }}
      >
        <div
          className="rounded-2xl p-5 max-w-sm ml-auto relative overflow-hidden"
          style={{
            background: "rgba(13,12,10,0.75)",
            border: "1px solid rgba(201,168,76,0.22)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.08)",
          }}
        >
          {visible && (
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.07) 50%, transparent 70%)",
                animation: "glassShimmer 0.75s ease-out 0.95s both",
                pointerEvents: "none",
                zIndex: 10,
              }}
            />
          )}
        {/* Google header */}
        <div className="flex items-center gap-2 mb-4">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
            style={{ background: "rgba(201,168,76,0.15)", color: "var(--gold)" }}
          >
            G
          </div>
          <div>
            <p className="font-body text-xs font-medium" style={{ color: "var(--text-primary)" }}>
              Google Review
            </p>
            <p className="font-mono-label" style={{ fontSize: "9px", color: "var(--text-muted)" }}>
              JOE&apos;S CUTS · FISHTOWN, PHILADELPHIA
            </p>
          </div>
          <div
            className="ml-auto flex items-center gap-1 rounded-full px-2 py-0.5"
            style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.2)" }}
          >
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="8" height="8" viewBox="0 0 14 14" fill="#c9a84c" aria-hidden="true">
                <path d="M7 1l1.5 4.5H14l-4 2.8 1.5 4.7L7 10l-4.5 3 1.5-4.7-4-2.8h5.5z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Customer review */}
        <div
          className="rounded-xl p-3.5 mb-3"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p
            className="font-body text-xs leading-relaxed mb-2"
            style={{ color: "var(--text-secondary)" }}
          >
            &ldquo;Best barbershop in Fishtown, hands down. Always packed but the wait is worth it.&rdquo;
          </p>
          <p className="font-mono-label" style={{ fontSize: "9px", color: "var(--text-muted)" }}>
            MARCUS T. · 2 DAYS AGO
          </p>
        </div>

        {/* AI response */}
        <div
          className="rounded-xl p-3.5"
          style={{
            background: "rgba(201,168,76,0.06)",
            borderLeft: "2px solid rgba(201,168,76,0.45)",
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div
              className="rounded-full px-2 py-0.5 flex items-center gap-1"
              style={{ background: "rgba(201,168,76,0.15)" }}
            >
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                <circle cx="4" cy="4" r="3.5" stroke="#c9a84c" strokeWidth="0.8" />
                <path d="M2.5 4l1.5 1.5L6 2.5" stroke="#c9a84c" strokeWidth="0.8" strokeLinecap="round" />
              </svg>
              <span className="font-mono-label" style={{ fontSize: "8px", color: "var(--gold)", letterSpacing: "0.08em" }}>
                RESPONDED · 4 MIN
              </span>
            </div>
          </div>
          <p
            className="font-body text-xs leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Marcus, thank you so much! We work hard to make every visit worth the trip. We&apos;ll keep the chairs hot for you. See you next time.
          </p>
          <p className="font-mono-label mt-1.5" style={{ fontSize: "9px", color: "var(--text-muted)" }}>
            JOE&apos;S CUTS TEAM · via Presency
          </p>
        </div>

        {/* Bottom: stats */}
        <div className="flex items-center justify-between mt-4 pt-3" style={{ borderTop: "1px solid rgba(201,168,76,0.08)" }}>
          {[
            { val: "4.8★", sub: "rating" },
            { val: "94", sub: "reviews" },
            { val: "100%", sub: "responded" },
          ].map((s) => (
            <div key={s.sub} className="text-center">
              <div className="font-display text-sm" style={{ fontWeight: 300, color: "var(--gold)" }}>
                {s.val}
              </div>
              <div className="font-mono-label" style={{ fontSize: "8px", color: "var(--text-muted)", letterSpacing: "0.08em" }}>
                {s.sub.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
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
      setTimeout(() => setPhase(2), 1900),   // "Optimizing Your" appears below
      setTimeout(() => setPhase(3), 2150),   // "Social Presence" staggers in
      setTimeout(() => setPhase(4), 3400),   // overlay fades
      setTimeout(() => setPhase(5), 4400),   // overlay unmounts
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

          {/* Skip button — visible and prominent */}
          <button
            onClick={() => setPhase(5)}
            className="absolute bottom-8 right-8 font-mono-label text-xs cursor-pointer transition-all duration-200 rounded-lg px-4 py-2"
            style={{
              color: "rgba(247,244,239,0.75)",
              letterSpacing: "0.1em",
              opacity: phase >= 1 ? 1 : 0,
              transition: "opacity 0.4s ease, background 0.2s ease, color 0.2s ease",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--gold)"
              e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"
              e.currentTarget.style.background = "rgba(201,168,76,0.08)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(247,244,239,0.75)"
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"
              e.currentTarget.style.background = "rgba(255,255,255,0.06)"
            }}
            aria-label="Skip intro"
          >
            SKIP ↓
          </button>

          {/* Corner accents */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[
              { top: "5%", left: "4%", rotate: "0deg" },
              { top: "5%", right: "4%", left: "auto", rotate: "90deg" },
              { bottom: "5%", left: "4%", top: "auto", rotate: "270deg" },
              { bottom: "5%", right: "4%", top: "auto", left: "auto", rotate: "180deg" },
            ].map((pos, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: "56px",
                  height: "56px",
                  ...pos,
                  opacity: phase >= 1 ? 0.5 : 0,
                  transition: `opacity 0.8s ease-out ${200 + i * 80}ms`,
                }}
              >
                <svg viewBox="0 0 56 56" fill="none" style={{ transform: `rotate(${pos.rotate})` }}>
                  <path d="M3 53 L3 3 L53 3" stroke="rgba(201,168,76,0.6)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                </svg>
              </div>
            ))}
          </div>

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
                  fontSize: "clamp(5rem, 28vw, 9.5rem)",
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
                Social Presence
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
              <span className="eyebrow mb-6 block">Putting Philly on the map, one business at a time</span>
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
                We build your website{" "}
                <em
                  className="font-display"
                  style={{
                    fontStyle: "italic",
                    color: "var(--gold-light)",
                    fontWeight: 400,
                  }}
                >
                  and handle your reviews.
                </em>
              </h1>
            </div>

            {/* Subheading */}
            <div data-animate style={enterStyle}>
              <p
                className="font-body text-xl leading-relaxed mb-8 max-w-lg"
                style={{ color: "var(--text-secondary)" }}
              >
                More customers, better first impressions, no extra work on your end.
              </p>
            </div>


            {/* CTAs */}
            <div data-animate style={enterStyle}>
              <div className="flex flex-wrap gap-4 mb-6">
                <Link
                  href="/contact"
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
                  Start free, 14 days
                </Link>
                <a
                  href="#results"
                  className="font-body font-medium px-7 py-3.5 rounded-lg border transition-all duration-200 cursor-pointer"
                  style={{
                    borderColor: "rgba(201,168,76,0.35)",
                    color: "var(--text-primary)",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--gold)"
                    e.currentTarget.style.background = "rgba(201,168,76,0.06)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)"
                    e.currentTarget.style.background = "transparent"
                  }}
                >
                  See the results ↓
                </a>
              </div>
            </div>

          </div>

          {/* Mobile-only compact review card */}
          <div className="lg:hidden" data-animate style={enterStyle}>
            <div
              className="rounded-xl p-4 mt-2"
              style={{
                background: "rgba(13,12,10,0.6)",
                border: "1px solid rgba(201,168,76,0.2)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "var(--gold)" }}>G</div>
                <div>
                  <p className="font-body text-xs font-medium" style={{ color: "var(--text-primary)" }}>Google Review</p>
                  <p className="font-mono-label" style={{ fontSize: "9px", color: "var(--text-muted)" }}>JOE&apos;S CUTS · FISHTOWN</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, i) => <svg key={i} width="9" height="9" viewBox="0 0 14 14" fill="#c9a84c" aria-hidden="true"><path d="M7 1l1.5 4.5H14l-4 2.8 1.5 4.7L7 10l-4.5 3 1.5-4.7-4-2.8h5.5z" /></svg>)}
                </div>
              </div>
              <p className="font-body text-xs leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>
                &ldquo;Best barbershop in Fishtown, hands down.&rdquo;
              </p>
              <div className="rounded-lg p-3" style={{ background: "rgba(201,168,76,0.06)", borderLeft: "2px solid rgba(201,168,76,0.4)" }}>
                <p className="font-body text-xs mb-1" style={{ color: "var(--gold)", fontSize: "9px", letterSpacing: "0.08em" }}>RESPONDED · 4 MIN · via Presency</p>
                <p className="font-body text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Marcus, thank you! We work hard to make every visit worth the trip. See you next time.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Review mockup card */}
          <div
            className="hidden lg:block"
            data-animate
            style={enterStyle}
          >
            <ReviewMockup visible={phase >= 5} />
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
