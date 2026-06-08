"use client"
import { useEffect, useRef, useState } from "react"

type Phase = "enter" | "show" | "exit" | "done"

const SHEET_COUNT = 4  // number of echo layers

const KEYFRAMES = `
@keyframes intro-shimmer {
  0%   { background-position: 100% center; }
  100% { background-position:   0% center; }
}
@keyframes intro-bloom {
  0%, 100% { transform: scale(1);    }
  50%       { transform: scale(1.24); }
}
`

// Shared text style applied to every sheet
const GRADIENT = "linear-gradient(105deg, #6b4f0e 0%, #c9a84c 18%, #f5dfa0 33%, #fff8e7 42%, #f5dfa0 52%, #c9a84c 68%, #6b4f0e 84%, #c9a84c 100%)"

export function IntroAnimation() {
  const [phase, setPhase] = useState<Phase>("enter")
  const started   = useRef(false)
  // One ref per sheet — sheet 0 is the topmost (flies first)
  const sheetRefs = useRef<(HTMLSpanElement | null)[]>(Array(SHEET_COUNT).fill(null))

  // ── Main sequence ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (started.current) return
    started.current = true

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done")
      return
    }

    const t1 = setTimeout(() => setPhase("show"),  40)
    const t2 = setTimeout(() => setPhase("exit"),  1060)
    // Last sheet (i=3) starts flying at delay 225 ms, flight lasts 500 ms → done ~850 ms after exit
    const t3 = setTimeout(() => setPhase("done"),  1060 + 950)

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  // ── Echo-sheet exit ────────────────────────────────────────────────────────
  useEffect(() => {
    if (phase !== "exit") return

    const sheets = sheetRefs.current
    const navEl  = document.querySelector("[data-nav-logo]") as HTMLElement | null
    // Use sheet 0 (top, position:relative, sets container size) for measurement
    const anchor = sheets[0]
    if (!anchor || !navEl) return

    requestAnimationFrame(() => {
      const from = anchor.getBoundingClientRect()
      const to   = navEl.getBoundingClientRect()

      const dx    = (to.left + to.width  / 2) - (from.left + from.width  / 2)
      const dy    = (to.top  + to.height / 2) - (from.top  + from.height / 2)
      const scale = to.height / from.height

      // Arm all sheets: give each a CSS transition-delay so they stagger
      sheets.forEach((el, i) => {
        if (!el) return
        el.style.animation       = "none"
        el.style.transitionDelay = `${i * 80}ms`
        el.style.transition      = [
          "transform 0.50s cubic-bezier(0.22, 1, 0.36, 1)",
          "opacity   0.36s ease",
          "filter    0.28s ease",
        ].join(", ")
      })

      // Fire all sheets to the same destination in the next frame.
      // The staggered transition-delays handle the visual offset.
      requestAnimationFrame(() => {
        sheets.forEach((el) => {
          if (!el) return
          el.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`
          el.style.opacity   = "0"
          el.style.filter    = "blur(3px)"
        })
      })
    })
  }, [phase])

  if (phase === "done") return null

  const isEntering = phase === "enter"
  const isExiting  = phase === "exit"
  const isShowing  = phase === "show"

  const bgOpacity    = isExiting ? 0 : 1
  const bgTransition = isExiting ? "opacity 0.50s cubic-bezier(0.4, 0, 1, 1)" : "none"

  // Shared span style — same for every sheet
  const sheetStyle = (i: number): React.CSSProperties => ({
    // Sheet 0 is the "main" element (relative, defines container height)
    // Sheets 1-3 sit exactly on top of it
    position:       i === 0 ? "relative" : "absolute",
    top:            i === 0 ? undefined  : 0,
    left:           i === 0 ? undefined  : 0,
    // Top sheet (i=0) has the highest z-index so it peels off first visually
    zIndex:         SHEET_COUNT - i,

    fontFamily:    "var(--font-fraunces), serif",
    fontWeight:    300,
    fontSize:      "clamp(4rem, 14vw, 10rem)",
    letterSpacing: "-0.04em",
    // 1.15 gives descenders (the "y" tail) room to breathe
    lineHeight:    "1.15",
    whiteSpace:    "nowrap",

    background:           GRADIENT,
    backgroundSize:       "300% auto",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor:  "transparent",
    backgroundClip:       "text",

    // Entrance: all sheets fade/blur/scale in together (stacked = one word)
    opacity:   isEntering ? 0 : 1,
    filter:    isEntering ? "blur(22px)" : "blur(0px)",
    transform: isEntering ? "scale(0.93)" : "none",

    // Shimmer plays on every sheet during hold (they're stacked, user sees one shimmer)
    animation: isShowing
      ? "intro-shimmer 1.05s ease-in-out 0.50s forwards"
      : "none",

    // Exit transitions are applied imperatively via the useEffect above
    transition: isExiting
      ? "none"
      : [
          "opacity   0.42s ease",
          "filter    0.58s cubic-bezier(0.22, 1, 0.36, 1)",
          "transform 0.58s cubic-bezier(0.22, 1, 0.36, 1)",
        ].join(", "),

    willChange:      "transform, opacity, filter",
    transformOrigin: "center center",
    userSelect:      "none",
    pointerEvents:   "none",
  })

  return (
    <>
      <style>{KEYFRAMES}</style>

      <div
        aria-hidden="true"
        style={{
          position:       "fixed",
          inset:          0,
          zIndex:         9998,
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          paddingTop:    "env(safe-area-inset-top)",
          paddingBottom: "env(safe-area-inset-bottom)",
          paddingLeft:   "env(safe-area-inset-left)",
          paddingRight:  "env(safe-area-inset-right)",
          pointerEvents: "none",
          overflow:      "visible",
        }}
      >
        {/* Dark backdrop */}
        <div style={{
          position:   "absolute",
          inset:      0,
          background: "#0d0c0a",
          opacity:    bgOpacity,
          transition: bgTransition,
        }} />

        {/* Gold radial bloom — breathes during hold */}
        <div style={{
          position:        "absolute",
          inset:           0,
          background:      "radial-gradient(ellipse 60% 50% at 50% 42%, rgba(201,168,76,0.24) 0%, transparent 65%)",
          opacity:         bgOpacity,
          transition:      bgTransition,
          animation:       isShowing ? "intro-bloom 2.8s ease-in-out infinite" : "none",
          transformOrigin: "50% 42%",
        }} />

        {/* Vignette — spotlights the centre */}
        <div style={{
          position:   "absolute",
          inset:      0,
          background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, rgba(0,0,0,0.55) 100%)",
          opacity:    bgOpacity,
          transition: bgTransition,
        }} />

        {/* Film grain */}
        <div style={{
          position:        "absolute",
          inset:           0,
          opacity:         isExiting ? 0 : 0.13,
          transition:      bgTransition,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize:  "120px 120px",
        }} />

        {/* ── Echo sheets ────────────────────────────────────────────────────
         *  All 4 are stacked at centre and look identical.
         *  On exit, sheet 0 (top, z=4) flies first; 1, 2, 3 follow 80 ms apart,
         *  creating a ripple/echo as layers peel off toward the nav logo.
         * ──────────────────────────────────────────────────────────────────── */}
        <div style={{
          position:   "relative",
          display:    "inline-block",
          overflow:   "visible",
          maxWidth:   "calc(100vw - env(safe-area-inset-left) - env(safe-area-inset-right) - 3rem)",
        }}>
          {Array.from({ length: SHEET_COUNT }, (_, i) => (
            <span
              key={i}
              ref={el => { sheetRefs.current[i] = el }}
              style={sheetStyle(i)}
            >
              Presency
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
