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
    title: "We get everything live",
    desc: "For websites, we design and deliver in 2 weeks. For Lead Recovery, your system goes live in minutes using your existing phone number. No new equipment, no app downloads.",
  },
  {
    num: "03",
    title: "Every lead gets followed up",
    desc: "Missed calls get instant texts. Conversations move toward bookings. Review requests go out after jobs. You see every result in a monthly report.",
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
          {/* Connecting line */}
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
              Websites delivered in 2 weeks · Lead Recovery live in minutes
            </span>
          </div>
        </RevealDiv>
      </div>
    </section>
  )
}
