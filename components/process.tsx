"use client"
import { useRef, useEffect } from "react"
import { RevealDiv } from "@/components/ui/reveal-div"

const steps = [
  {
    num: "01",
    title: "Tell us about your business",
    desc: "Fill out a short form about your goals, your brand, and which service fits. No technical knowledge needed.",
  },
  {
    num: "02",
    title: "We build or connect",
    desc: "For websites, we design and deliver in 2 weeks. For review responses, we connect to your Google Business Profile securely. You authorize in two clicks, no password or tech knowledge needed.",
  },
  {
    num: "03",
    title: "Your online presence works for you",
    desc: "A website that converts. Reviews that get answered in minutes. Monthly reports so you can see exactly what's improving.",
  },
]

export function Process() {
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = lineRef.current
    if (!el) return
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) return

    el.style.transformOrigin = "left center"
    el.style.transform = "scaleX(0)"

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.transition = "transform 1s cubic-bezier(0.4, 0, 0.2, 1)"
            el.style.transform = "scaleX(1)"
          }, 300)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      data-theme="light"
      className="section-pad relative"
      style={{ background: "var(--ink)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealDiv className="text-center mb-16">
          <p className="eyebrow mb-4">HOW IT WORKS</p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontWeight: 300,
              color: "var(--text-primary)",
            }}
          >
            Simple to start.{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 400 }}>
              Built to last.
            </em>
          </h2>
        </RevealDiv>

        <div className="relative grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Connecting line: spans from center of col-1 to center of col-3 */}
          <div
            ref={lineRef}
            className="hidden md:block absolute pointer-events-none"
            style={{
              top: "calc(3rem + 2px)",
              left: "calc(100% / 6)",
              right: "calc(100% / 6)",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(201,168,76,0.3) 15%, rgba(201,168,76,0.3) 85%, transparent)",
            }}
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <RevealDiv key={step.num} delay={i * 150} className="relative text-center">
              {/* Step number */}
              <div className="mb-5 relative">
                <span
                  className="font-display leading-none block"
                  style={{
                    fontSize: "clamp(3.5rem, 8vw, 6rem)",
                    fontWeight: 100,
                    color: "rgba(201,168,76,0.25)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {step.num}
                </span>
                {/* Gold dot */}
                <div
                  className="mx-auto w-3 h-3 rounded-full -mt-3 relative z-10"
                  style={{
                    background: "var(--gold)",
                    boxShadow: "0 0 12px rgba(201,168,76,0.5)",
                  }}
                />
              </div>

              <h3
                className="font-display text-xl mb-3"
                style={{ fontWeight: 400, color: "var(--text-primary)" }}
              >
                {step.title}
              </h3>
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {step.desc}
              </p>
            </RevealDiv>
          ))}
        </div>

        {/* Bottom note */}
        <RevealDiv delay={450} className="mt-16 text-center">
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{
              background: "rgba(201,168,76,0.06)",
              border: "1px solid rgba(201,168,76,0.15)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="7" stroke="#c9a84c" strokeOpacity="0.5" />
              <path d="M8 5v3l2 2" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span
              className="font-body text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              Websites delivered in 2 weeks · Review responses live in 10 minutes
            </span>
          </div>
        </RevealDiv>
      </div>
    </section>
  )
}
