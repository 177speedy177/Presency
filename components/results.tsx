"use client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { RevealDiv } from "@/components/ui/reveal-div"

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
    num: 35, suffix: "%", decimals: 0,
    label: "more revenue earned by businesses that respond to reviews",
    source: "Harvard Business School",
    sourceHref: "https://hbswk.hbs.edu",
  },
  {
    num: 75, suffix: "%", decimals: 0,
    label: "of consumers judge a company's credibility based on its website design",
    source: "Stanford Web Credibility Research",
    sourceHref: "https://credibility.stanford.edu/guidelines/index.html",
  },
  {
    num: 1.7, suffix: "×", decimals: 1,
    label: "more trustworthy: how actively responding to reviews changes how customers perceive your business",
    source: "Podium: State of Online Reviews",
    sourceHref: "https://www.podium.com/resources/",
  },
  {
    num: 58, suffix: "%", decimals: 0,
    label: "of all website traffic comes from mobile — a non-mobile site is invisible to most of your customers",
    source: "Statista, 2024",
    sourceHref: "https://www.statista.com/statistics/277125/share-of-website-traffic-coming-from-mobile-devices/",
  },
]

const researchCards = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="18" height="12" rx="2" stroke="#c9a84c" strokeWidth="1.5"/>
        <path d="M8 20h6M11 16v4" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    headline: "First impressions are instant.",
    body: "Visitors form an opinion about your website in 50 milliseconds. An outdated or slow site signals an unprofessional business before a single word is read.",
    source: "Behaviour & Information Technology, Lindgaard et al.",
    sourceHref: "https://doi.org/10.1080/01449290500330448",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M3 17l4-8 4 5 3-3 5 6" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    headline: "Reviews directly drive ranking.",
    body: "Online reviews and owner responses account for roughly 17% of Google's local search ranking algorithm, more than your website or backlinks.",
    source: "Moz Local Search Ranking Factors",
    sourceHref: "https://moz.com/local-search-ranking-factors",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="9" r="4" stroke="#c9a84c" strokeWidth="1.5"/>
        <path d="M3 19c0-4 3.6-7 8-7s8 3 8 7" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    headline: "Buyers check before they visit.",
    body: "87% of consumers used Google to evaluate a local business in the past year. Your reviews, responses, and profile are your real storefront.",
    source: "BrightLocal Consumer Survey",
    sourceHref: "https://www.brightlocal.com/research/local-consumer-review-survey/",
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
            Your presence{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 400 }}>
              pays.
            </em>
          </h2>
          <p
            className="font-body text-base max-w-lg mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            This isn&apos;t opinion. It&apos;s documented across peer-reviewed studies,
            consumer surveys, and published research.
          </p>
        </RevealDiv>

        {/* Primary stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {primaryStats.map((stat, i) => (
            <AnimatedStat key={i} {...stat} />
          ))}
        </div>

        {/* Research insight cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {researchCards.map((card, i) => (
            <RevealDiv
              key={card.headline}
              delay={i * 120}
              className="rounded-xl p-6"
              style={{
                background: "var(--surface-card)",
                border: "1px solid rgba(201,168,76,0.2)",
                boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                transition: "opacity 0.7s ease, transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)"
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.45)"
                e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.1), 0 0 16px rgba(201,168,76,0.08)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)"
                e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.05)"
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ background: "rgba(201,168,76,0.1)" }}
              >
                {card.icon}
              </div>
              <h3
                className="font-display text-lg mb-2"
                style={{ fontWeight: 400, color: "var(--text-primary)" }}
              >
                {card.headline}
              </h3>
              <p
                className="font-body text-sm leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                {card.body}
              </p>
              <a
                href={card.sourceHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-label transition-colors duration-200"
                style={{ fontSize: "10px", color: "var(--text-muted)" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold)" }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)" }}
              >
                {card.source} ↗
              </a>
            </RevealDiv>
          ))}
        </div>

        <RevealDiv delay={400} className="text-center mt-14">
          <p
            className="font-body text-base"
            style={{ color: "var(--text-secondary)" }}
          >
            Your competitors are already losing customers by ignoring reviews.{" "}
            <Link href="/contact" className="link-gold-light">
              Book a free call →
            </Link>
          </p>
        </RevealDiv>
      </div>
    </section>
  )
}
