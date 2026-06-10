"use client"
import { useRef, useEffect } from "react"
import { RevealDiv } from "@/components/ui/reveal-div"
import Link from "next/link"

const steps = [
  {
    num: "01",
    title: "Free Patient Capture Audit",
    desc: "We map exactly where your practice is losing new-patient opportunities: missed calls, after-hours gaps, web inquiry response time, and review presence. You get a clear picture before anything else.",
  },
  {
    num: "02",
    title: "We set everything up",
    desc: "Connected to your existing phone number and practice software. No new equipment, no app downloads for your staff. Most practices are live within 10 business days, with a 30-minute walkthrough for your front desk.",
  },
  {
    num: "03",
    title: "Every opportunity gets captured",
    desc: "Missed calls, after-hours calls, and web inquiries all get instant follow-up. Reviews go out automatically after visits. You see every result in a monthly report.",
  },
]

export function HowItWorks() {
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = lineRef.current
    if (!el) return
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) return
    el.style.transformOrigin = "left center"
    el.style.transform = "scaleX(0)"
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          el.style.transition = "transform 1s cubic-bezier(0.4, 0, 0.2, 1)"
          el.style.transform = "scaleX(1)"
        }, 300)
        observer.disconnect()
      }
    }, { threshold: 0.4 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="how-it-works"
      data-theme="light"
      className="section-pad relative"
      style={{ background: "#f0ece3" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealDiv className="text-center mb-16">
          <p className="font-mono-label mb-4" style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#7a5c10" }}>
            HOW IT WORKS
          </p>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(1.75rem,4vw,3rem)", fontWeight: 300, color: "#1c1810" }}
          >
            Simple to start. Live in 10 days.
          </h2>
        </RevealDiv>

        <div className="relative grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Connecting line */}
          <div
            ref={lineRef}
            className="hidden md:block absolute pointer-events-none"
            style={{
              top: "calc(3rem + 2px)",
              left: "calc(100% / 6)",
              right: "calc(100% / 6)",
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.4) 15%, rgba(201,168,76,0.4) 85%, transparent)",
            }}
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <RevealDiv key={step.num} delay={i * 150} className="relative text-center">
              <div className="mb-5 relative">
                <span
                  className="font-display leading-none block"
                  style={{ fontSize: "clamp(3.5rem,8vw,6rem)", fontWeight: 100, color: "rgba(201,168,76,0.5)", letterSpacing: "-0.02em" }}
                >
                  {step.num}
                </span>
                <div
                  className="mx-auto w-3 h-3 rounded-full -mt-3 relative z-10"
                  style={{ background: "#c9a84c", boxShadow: "0 0 12px rgba(201,168,76,0.5)" }}
                />
              </div>
              <h3 className="font-display text-xl mb-3" style={{ fontWeight: 400, color: "#1c1810" }}>
                {step.title}
              </h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(28,24,16,0.62)" }}>
                {step.desc}
              </p>
            </RevealDiv>
          ))}
        </div>

        <RevealDiv delay={450} className="mt-16 text-center">
          <a
            href="https://calendly.com/397jtc/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-medium text-sm px-8 py-3.5 rounded-lg transition-all duration-200 cursor-pointer inline-block"
            style={{ background: "#c9a84c", color: "#0d0c0a" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#b8922e"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(201,168,76,0.35)" }}
            onMouseLeave={e => { e.currentTarget.style.background = "#c9a84c"; e.currentTarget.style.boxShadow = "none" }}
          >
            Start with a free Patient Capture Audit
          </a>
          <p className="font-body text-sm mt-4" style={{ color: "rgba(28,24,16,0.42)" }}>
            30 minutes. No commitment required.{" "}
            <Link href="/contact" style={{ color: "#7a5c10", transition: "color 200ms" }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#c9a84c" }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#7a5c10" }}>
              Or send us a message instead.
            </Link>
          </p>
        </RevealDiv>
      </div>
    </section>
  )
}
