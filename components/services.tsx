"use client"
import { RevealDiv } from "@/components/ui/reveal-div"
import { ToothPattern } from "@/components/ui/tooth-pattern"

const NAMES = ["Websites", "Google Business Profile", "Reviews", "Social Media", "AI Visibility"]

const SERVICES = [
  {
    n: "01",
    name: "Website",
    line: "A fast, modern site that turns visitors into calls and bookings. The foundation everything else builds on.",
    start: true,
  },
  {
    n: "02",
    name: "Google Business Profile",
    line: "Optimized and managed so you show up in the map when nearby customers search.",
  },
  {
    n: "03",
    name: "Reviews & Reputation",
    line: "A steady stream of fresh reviews, with every rating answered on your behalf.",
  },
  {
    n: "04",
    name: "Social Media",
    line: "Consistent, on-brand posts that keep you visible, without you posting a thing.",
  },
  {
    n: "05",
    name: "AI & Search Visibility",
    line: "Found the new way people search, including Google AI and ChatGPT.",
  },
]

export function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      data-theme="light"
      className="section-pad relative overflow-hidden"
      style={{ background: "#faf7f2" }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 65% 50% at 90% 0%, rgba(201,168,76,0.07) 0%, transparent 55%)" }} />
        <ToothPattern variant={1} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <RevealDiv className="text-center mb-9">
          <p className="font-mono-label mb-4" style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#7a5c10" }}>
            WHAT WE DO
          </p>
          <h2
            className="font-display mb-4 mx-auto"
            style={{ fontSize: "clamp(1.75rem,4vw,3rem)", fontWeight: 300, color: "#1c1810", maxWidth: "640px" }}
          >
            Everything your business needs to show up and win online.
          </h2>
          <p className="font-body text-base mx-auto" style={{ color: "rgba(28,24,16,0.65)" }}>
            Start with a website. Add the rest as you grow.
          </p>
        </RevealDiv>

        {/* Name them all */}
        <RevealDiv delay={60} className="flex flex-wrap justify-center gap-2 mb-12">
          {NAMES.map(n => (
            <span
              key={n}
              className="font-mono-label"
              style={{
                fontSize: "11px",
                letterSpacing: "0.04em",
                color: "#7a5c10",
                background: "rgba(201,168,76,0.1)",
                border: "1px solid rgba(201,168,76,0.28)",
                borderRadius: "999px",
                padding: "6px 14px",
              }}
            >
              {n}
            </span>
          ))}
        </RevealDiv>

        {/* Walk through each, start to grow */}
        <div>
          {SERVICES.map((s, i) => (
            <RevealDiv key={s.n} delay={i * 70}>
              <div
                className="flex gap-5 sm:gap-7 items-start py-6"
                style={{ borderTop: i === 0 ? "none" : "1px solid rgba(28,24,16,0.09)" }}
              >
                <span
                  className="font-display shrink-0"
                  style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 300, color: "rgba(201,168,76,0.5)", lineHeight: 1, letterSpacing: "-0.02em", minWidth: "2ch" }}
                >
                  {s.n}
                </span>
                <div className="pt-1">
                  <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                    <h3 className="font-display" style={{ fontSize: "1.3rem", fontWeight: 400, color: "#1c1810" }}>
                      {s.name}
                    </h3>
                    {s.start && (
                      <span
                        className="font-mono-label"
                        style={{ fontSize: "9px", letterSpacing: "0.12em", color: "#0d0c0a", background: "#c9a84c", borderRadius: "999px", padding: "3px 9px" }}
                      >
                        START HERE
                      </span>
                    )}
                  </div>
                  <p className="font-body" style={{ fontSize: "1rem", lineHeight: 1.6, color: "rgba(28,24,16,0.7)" }}>
                    {s.line}
                  </p>
                </div>
              </div>
            </RevealDiv>
          ))}
        </div>

        <RevealDiv delay={420} className="mt-8 text-center">
          <p className="font-body text-sm" style={{ color: "rgba(28,24,16,0.55)" }}>
            Add-ons when you want them: a 24/7 website chat widget with an AI agent, plus ongoing hosting and management.
          </p>
        </RevealDiv>

        <RevealDiv delay={480} className="text-center mt-10">
          <a
            href="#contact"
            className="btn-shimmer font-body font-medium text-sm py-3.5 px-8 rounded-lg inline-block transition-all duration-200 cursor-pointer"
            style={{ background: "#c9a84c", color: "#0d0c0a" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#b8922e" }}
            onMouseLeave={e => { e.currentTarget.style.background = "#c9a84c" }}
          >
            Not sure where to start? Tell us about your business
          </a>
        </RevealDiv>
      </div>
    </section>
  )
}
