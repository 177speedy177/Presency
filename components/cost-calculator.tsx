"use client"
import { useEffect, useRef, useState } from "react"
import { RevealDiv } from "@/components/ui/reveal-div"
import { ToothPattern } from "@/components/ui/tooth-pattern"

function fmt(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })
}

// Tweens the displayed number toward the target whenever it changes
function useAnimatedNumber(target: number) {
  const [val, setVal] = useState(target)
  const valRef = useRef(target)
  const raf = useRef(0)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      valRef.current = target
      setVal(target)
      return
    }
    const from = valRef.current
    const t0 = performance.now()
    const dur = 500
    cancelAnimationFrame(raf.current)
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      const v = Math.round(from + (target - from) * eased)
      valRef.current = v
      setVal(v)
      if (p < 1) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [target])

  return val
}

export function MissedCallCalculator() {
  const [avgValue, setAvgValue] = useState(350)
  const [missedPerWeek, setMissedPerWeek] = useState(5)

  // 85% of callers who miss don't call back (Invoca)
  const monthlyMissed = missedPerWeek * (52 / 12)
  const monthlyLost = Math.round(monthlyMissed * avgValue * 0.85)
  const annualLost = monthlyLost * 12
  const displayMonthly = useAnimatedNumber(monthlyLost)
  const displayAnnual = useAnimatedNumber(annualLost)

  return (
    <section
      id="calculator"
      data-theme="light"
      className="section-pad relative overflow-hidden"
      style={{ background: "#f0ece3" }}
    >
      <ToothPattern variant={2} />
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <RevealDiv className="text-center mb-10">
          <p className="font-mono-label mb-4" style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#7a5c10" }}>
            MISSED-CALL COST ESTIMATOR
          </p>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(1.75rem,4vw,3rem)", fontWeight: 300, color: "#1c1810", lineHeight: 1.2, marginBottom: "0.75rem" }}
          >
            See what your missed calls are worth.
          </h2>
          <p className="font-body text-sm" style={{ color: "rgba(28,24,16,0.65)", maxWidth: "440px", margin: "0 auto" }}>
            Adjust the numbers to match your practice. All estimates are calculated in your browser, no data is stored or sent.
          </p>
        </RevealDiv>

        <RevealDiv delay={100}>
          <div
            className="rounded-2xl p-8 lg:p-10"
            style={{ background: "#ffffff", border: "1px solid rgba(201,168,76,0.2)", boxShadow: "0 8px 40px rgba(28,24,16,0.07)" }}
          >
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {/* Input 1 */}
              <div>
                <label className="font-body text-sm font-medium block mb-2" style={{ color: "#1c1810" }}>
                  Average new-patient value
                  <span className="font-body font-normal text-xs ml-2" style={{ color: "rgba(28,24,16,0.45)" }}>(consultation, first visit)</span>
                </label>
                <div style={{ position: "relative" }}>
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-body font-medium text-sm" style={{ color: "rgba(28,24,16,0.5)" }}>$</span>
                  <input
                    type="number"
                    min={50}
                    max={5000}
                    value={avgValue}
                    onChange={e => setAvgValue(Math.max(50, Math.min(5000, Number(e.target.value))))}
                    className="w-full font-body text-sm rounded-lg pl-8 pr-4 py-3"
                    style={{ border: "1px solid rgba(201,168,76,0.3)", background: "#faf7f2", color: "#1c1810", outline: "none" }}
                    onFocus={e => { e.currentTarget.style.borderColor = "#c9a84c" }}
                    onBlur={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)" }}
                  />
                </div>
                <input
                  type="range" min={50} max={2000} step={25} value={avgValue}
                  onChange={e => setAvgValue(Number(e.target.value))}
                  className="w-full mt-3 calc-range"
                  style={{ accentColor: "#c9a84c" }}
                  aria-label="Average new patient value slider"
                />
                <div className="flex justify-between font-mono-label mt-1" style={{ fontSize: "9px", color: "rgba(28,24,16,0.35)", letterSpacing: "0.06em" }}>
                  <span>$50</span><span>$2,000+</span>
                </div>
              </div>

              {/* Input 2 */}
              <div>
                <label className="font-body text-sm font-medium block mb-2" style={{ color: "#1c1810" }}>
                  Estimated missed calls per week
                  <span className="font-body font-normal text-xs ml-2" style={{ color: "rgba(28,24,16,0.45)" }}>(unanswered new-patient calls)</span>
                </label>
                <div style={{ position: "relative" }}>
                  <input
                    type="number"
                    min={1}
                    max={50}
                    value={missedPerWeek}
                    onChange={e => setMissedPerWeek(Math.max(1, Math.min(50, Number(e.target.value))))}
                    className="w-full font-body text-sm rounded-lg px-4 py-3"
                    style={{ border: "1px solid rgba(201,168,76,0.3)", background: "#faf7f2", color: "#1c1810", outline: "none" }}
                    onFocus={e => { e.currentTarget.style.borderColor = "#c9a84c" }}
                    onBlur={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)" }}
                  />
                </div>
                <input
                  type="range" min={1} max={30} step={1} value={missedPerWeek}
                  onChange={e => setMissedPerWeek(Number(e.target.value))}
                  className="w-full mt-3"
                  style={{ accentColor: "#c9a84c" }}
                  aria-label="Missed calls per week slider"
                />
                <div className="flex justify-between font-mono-label mt-1" style={{ fontSize: "9px", color: "rgba(28,24,16,0.35)", letterSpacing: "0.06em" }}>
                  <span>1/week</span><span>30+/week</span>
                </div>
              </div>
            </div>

            {/* Result */}
            <div
              className="rounded-xl p-6 text-center"
              style={{ background: "linear-gradient(135deg, #1c1810 0%, #2a2218 100%)", border: "1px solid rgba(201,168,76,0.25)" }}
            >
              <p className="font-mono-label mb-3" style={{ fontSize: "10px", letterSpacing: "0.12em", color: "rgba(201,168,76,0.7)" }}>
                ESTIMATED UNREALIZED NEW-PATIENT REVENUE
              </p>
              <div className="flex items-center justify-center gap-10 flex-wrap">
                <div>
                  <p className="font-display leading-none" style={{ fontSize: "clamp(2.5rem,5vw,3.5rem)", fontWeight: 300, color: "#c9a84c", letterSpacing: "-0.02em" }}>
                    {fmt(displayMonthly)}
                  </p>
                  <p className="font-body text-sm mt-1" style={{ color: "rgba(247,244,239,0.55)" }}>per month</p>
                </div>
                <div style={{ width: "1px", height: "48px", background: "rgba(201,168,76,0.2)", flexShrink: 0 }} />
                <div>
                  <p className="font-display leading-none" style={{ fontSize: "clamp(2rem,4vw,2.75rem)", fontWeight: 300, color: "rgba(201,168,76,0.7)", letterSpacing: "-0.02em" }}>
                    {fmt(displayAnnual)}
                  </p>
                  <p className="font-body text-sm mt-1" style={{ color: "rgba(247,244,239,0.45)" }}>per year</p>
                </div>
              </div>
              <p className="font-body text-xs mt-4" style={{ color: "rgba(247,244,239,0.6)" }}>
                Based on 85% callback abandonment (Invoca). Assumes missed calls are new-patient inquiries. Your audit gives you the real number.
              </p>
            </div>

            <div className="text-center mt-6">
              <a
                href="https://calendly.com/397jtc/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer font-body font-medium text-sm px-8 py-3.5 rounded-lg transition-all duration-200 cursor-pointer inline-block"
                style={{ background: "#c9a84c", color: "#0d0c0a", boxShadow: "0 4px 18px rgba(201,168,76,0.28)" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#b8922e"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(201,168,76,0.38)" }}
                onMouseLeave={e => { e.currentTarget.style.background = "#c9a84c"; e.currentTarget.style.boxShadow = "0 4px 18px rgba(201,168,76,0.28)" }}
              >
                Book a free Patient Capture Audit
              </a>
              <p className="font-body text-xs mt-3" style={{ color: "rgba(28,24,16,0.55)" }}>
                30 minutes. No commitment.
              </p>
            </div>
          </div>
        </RevealDiv>
      </div>
    </section>
  )
}
