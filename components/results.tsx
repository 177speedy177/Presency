"use client"
import { useEffect, useRef, useState } from "react"
import { RevealDiv } from "@/components/ui/reveal-div"
import { ToothPattern } from "@/components/ui/tooth-pattern"

// Counts up from 0 to the numeric part of `value` when scrolled into view.
// "85%" -> animates 0..85 with "%" suffix; "7x" -> 0..7 with "x" suffix.
function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? Number(match[1]) : 0
  const suffix = match ? match[2] : value
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(target)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    setDisplay(0)
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        io.disconnect()
        const t0 = performance.now()
        const dur = 1400
        const tick = (now: number) => {
          const p = Math.min((now - t0) / dur, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setDisplay(Math.round(eased * target))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.6 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target])

  return <span ref={ref}>{display}{suffix}</span>
}

const stats = [
  {
    num: "85%",
    label: "of callers who get sent to your voicemail never call back. For a new or urgent patient, voicemail is not a fallback. It is the moment they move on to the next practice.",
    source: "Invoca",
    sourceHref: "https://www.invoca.com/blog/missed-call-statistics/",
  },
  {
    num: "7x",
    label: "more likely to have a meaningful conversation with a new lead when you respond within the first hour. Most practices take far longer, if they respond at all. Speed is the whole game.",
    source: "Harvard Business Review",
    sourceHref: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads",
  },
  {
    num: "98%",
    label: "of text messages are opened. Only 21% of emails are ever read, making a text the most reliable way to recover a missed caller instantly.",
    source: "Forbes",
    sourceHref: "https://www.forbes.com/advisor/business/sms-marketing-statistics/",
  },
]

function StatBlock({ num, label, source, sourceHref, last }: {
  num: string; label: string; source: string; sourceHref: string; last?: boolean
}) {
  return (
    <div
      className="flex gap-4 sm:gap-6 lg:gap-8 items-start py-5 sm:py-7"
      style={{ borderBottom: last ? "none" : "1px solid rgba(28,24,16,0.1)" }}
    >
      <div
        className="font-display leading-none shrink-0 min-w-[84px] sm:min-w-[140px]"
        style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)", fontWeight: 300, color: "#1c1810", letterSpacing: "-0.03em" }}
      >
        <CountUp value={num} />
      </div>
      <div className="pt-1">
        <p className="font-body text-sm leading-relaxed mb-3" style={{ color: "rgba(28,24,16,0.65)" }}>
          {label}
        </p>
        <a
          href={sourceHref}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono-label transition-colors duration-200"
          style={{ fontSize: "10px", letterSpacing: "0.1em", color: "rgba(28,24,16,0.55)" }}
          onMouseEnter={e => { e.currentTarget.style.color = "#7a5c10" }}
          onMouseLeave={e => { e.currentTarget.style.color = "rgba(28,24,16,0.55)" }}
        >
          {source.toUpperCase()} ↗
        </a>
      </div>
    </div>
  )
}

export function Problem() {
  return (
    <section
      id="problem"
      data-theme="light"
      className="section-pad relative overflow-hidden"
      style={{ background: "#f7f4ef" }}
    >
      <ToothPattern variant={3} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left: editorial copy */}
          <RevealDiv>
            <p className="font-mono-label mb-5" style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#7a5c10" }}>
              WHY IT MATTERS
            </p>
            <h2
              className="font-display mb-6 leading-tight"
              style={{ fontSize: "clamp(1.75rem,4vw,3rem)", fontWeight: 300, color: "#1c1810" }}
            >
              Your marketing budget earns the call.{" "}
              <em style={{ fontStyle: "italic", color: "#7a5c10", fontWeight: 400 }}>
                Your response earns the patient.
              </em>
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed" style={{ color: "rgba(28,24,16,0.65)" }}>
                Most practices count on voicemail to catch the calls they cannot answer. It does not. Industry research (Hiya, Invoca, RingCentral) finds that the majority of callers who reach a voicemail hang up without leaving a message, and the new and urgent patients you most want to reach are the least likely to wait for the beep.
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: "rgba(28,24,16,0.65)" }}>
                Every ad, every referral, every Google search that ends in a call is money you already spent. When that call lands in a voicemail box, the caller almost never tries again. They call the practice listed right below you, the one that followed up within minutes. The opportunity was yours. You paid for it. Voicemail just quietly let it go.
              </p>
            </div>
          </RevealDiv>

          {/* Right: editorial stats */}
          <RevealDiv delay={150}>
            <p className="font-mono-label mb-2" style={{ fontSize: "10px", letterSpacing: "0.12em", color: "rgba(28,24,16,0.4)" }}>
              WHAT THE RESEARCH SHOWS
            </p>
            {stats.map((s, i) => (
              <StatBlock key={i} {...s} last={i === stats.length - 1} />
            ))}
          </RevealDiv>

        </div>
      </div>
    </section>
  )
}
