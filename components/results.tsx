"use client"
import { useEffect, useRef, useState } from "react"
import { RevealDiv } from "@/components/ui/reveal-div"
import { WordReveal } from "@/components/ui/word-reveal"

function useCountUp(target: number, decimals = 0, duration = 1800) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let startTime: number
    const step = (ts: number) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(parseFloat((eased * target).toFixed(decimals)))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [started, target, decimals, duration])

  return { count, ref }
}

function AnimatedStat({ num, suffix, decimals = 0, label, source, sourceHref }: {
  num: number; suffix: string; decimals?: number; label: string; source: string; sourceHref: string
}) {
  const { count, ref } = useCountUp(num, decimals)
  return (
    <div
      ref={ref}
      className="text-center rounded-xl p-6"
      style={{
        background: "var(--surface-card)",
        border: "1px solid rgba(201,168,76,0.18)",
        boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)"
        e.currentTarget.style.borderColor = "rgba(201,168,76,0.45)"
        e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.1), 0 0 16px rgba(201,168,76,0.08)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)"
        e.currentTarget.style.borderColor = "rgba(201,168,76,0.18)"
        e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.05)"
      }}
    >
      <div
        className="font-display mb-2 leading-none"
        style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 300, color: "var(--gold)" }}
      >
        {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}{suffix}
      </div>
      <p className="font-body text-sm leading-snug mb-3" style={{ color: "var(--text-secondary)" }}>
        {label}
      </p>
      <a
        href={sourceHref}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono-label transition-colors duration-200"
        style={{ fontSize: "10px", color: "var(--text-muted)" }}
        onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold)" }}
        onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)" }}
      >
        {source} ↗
      </a>
    </div>
  )
}

const primaryStats = [
  {
    num: 98, suffix: "%", decimals: 0,
    label: "of text messages are opened. Only 21% of emails are ever read, making texts the most reliable way to reach a customer instantly",
    source: "Forbes",
    sourceHref: "https://www.forbes.com/advisor/business/sms-marketing-statistics/",
  },
  {
    num: 75, suffix: "%", decimals: 0,
    label: "of consumers judge a company's credibility based on its website design",
    source: "Stanford Web Credibility Research",
    sourceHref: "https://credibility.stanford.edu/guidelines/index.html",
  },
  {
    num: 85, suffix: "%", decimals: 0,
    label: "of callers who can't reach a business on the first try will not call back. That lead is gone unless you reach out first.",
    source: "Invoca",
    sourceHref: "https://www.invoca.com/blog/missed-call-statistics/",
  },
  {
    num: 58, suffix: "%", decimals: 0,
    label: "of all website traffic comes from mobile. A non-mobile site is invisible to most of your customers",
    source: "Statista, 2024",
    sourceHref: "https://www.statista.com/statistics/277125/share-of-website-traffic-coming-from-mobile-devices/",
  },
]


export function Results() {
  return (
    <section
      id="results"
      data-theme="light"
      className="section-pad relative overflow-hidden"
      style={{ background: "var(--ink)" }}
    >
      {/* Ambient gold glows */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 70% 15%, rgba(201,168,76,0.13) 0%, transparent 55%)",
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 15% 85%, rgba(201,168,76,0.08) 0%, transparent 50%)",
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.03) 0%, transparent 70%)",
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <RevealDiv className="text-center mb-16">
          <p className="eyebrow mb-4">WHAT THE RESEARCH SHOWS</p>
          <h2
            className="font-display mb-4"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontWeight: 300,
              color: "var(--text-primary)",
            }}
          >
            <WordReveal segments={[
              { text: "The numbers behind" },
              { text: "why this matters.", italic: true, color: "var(--gold)", fontWeight: 400 },
            ]} />
          </h2>
          <p
            className="font-body text-base max-w-lg mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Based on research from Forbes, Stanford Web Credibility Lab, Invoca, and Statista.
          </p>
        </RevealDiv>

        {/* Primary stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {primaryStats.map((stat, i) => (
            <AnimatedStat key={i} {...stat} />
          ))}
        </div>

      </div>
    </section>
  )
}
