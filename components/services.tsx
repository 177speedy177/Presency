"use client"
import { RevealDiv } from "@/components/ui/reveal-div"
import { ToothPattern } from "@/components/ui/tooth-pattern"

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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <RevealDiv className="text-center mb-14">
          <p className="font-mono-label mb-4" style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#7a5c10" }}>
            WHAT WE DO
          </p>
          <h2
            className="font-display mb-4 mx-auto"
            style={{ fontSize: "clamp(1.75rem,4vw,3rem)", fontWeight: 300, color: "#1c1810", maxWidth: "680px" }}
          >
            Everything your business needs to show up and win online.
          </h2>
          <p className="font-body text-base mx-auto" style={{ color: "rgba(28,24,16,0.65)", maxWidth: "560px" }}>
            Websites, Google, and reputation for local businesses. We start where it matters most and grow with you from there.
          </p>
        </RevealDiv>

        <div className="max-w-3xl mx-auto">
          <RevealDiv>
            <p className="font-body" style={{ fontSize: "1.25rem", lineHeight: 1.7, color: "#1c1810", marginBottom: "1.75rem", fontWeight: 300 }}>
              It begins with a website you are proud to send people to. Clean, fast, and built to turn a visit into a phone call or a booking. For most local businesses, that single change does more than anything else, so it is where we start.
            </p>
          </RevealDiv>

          <RevealDiv delay={80}>
            <p className="font-body" style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "rgba(28,24,16,0.78)", marginBottom: "1.5rem" }}>
              From there, we layer on the rest of your local presence as you are ready for it. We optimize and manage your Google Business Profile so you show up when nearby customers are searching. We build a steady stream of fresh reviews and look after your reputation, responding on your behalf so every rating works in your favor. We keep your social media active with regular, on-brand posts. And we tune your whole presence for AI search and modern visibility, so the new ways people find businesses point them to you.
            </p>
          </RevealDiv>

          <RevealDiv delay={140}>
            <p className="font-body" style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "rgba(28,24,16,0.78)", marginBottom: "1.5rem" }}>
              When it helps, we add a website chat widget with an AI agent that answers questions and captures leads around the clock, plus ongoing hosting and management so the whole thing stays fast, secure, and current without you lifting a finger.
            </p>
          </RevealDiv>

          <RevealDiv delay={200}>
            <div
              className="rounded-2xl"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(201,168,76,0.18)",
                boxShadow: "0 2px 12px rgba(28,24,16,0.05)",
                padding: "1.75rem 2rem",
                margin: "2.5rem 0",
              }}
            >
              <p className="font-mono-label mb-5" style={{ fontSize: "10px", letterSpacing: "0.14em", color: "#7a5c10" }}>
                THE FULL SCOPE
              </p>
              <ul className="font-body" style={{ display: "grid", gap: "0.85rem", color: "rgba(28,24,16,0.82)", fontSize: "1rem", listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Website design and builds",
                  "Google Business Profile optimization and management",
                  "Review and reputation management",
                  "Social media posting and management",
                  "AI-search and visibility optimization",
                  "Website chat widget with an AI agent (add-on)",
                  "Ongoing hosting and management (add-on)",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "baseline", gap: "0.75rem" }}>
                    <span aria-hidden="true" style={{ color: "#c9a84c", fontSize: "0.9rem", lineHeight: 1.6 }}>
                      &#9670;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealDiv>

          <RevealDiv delay={260}>
            <p className="font-body" style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "rgba(28,24,16,0.78)", marginBottom: "2rem" }}>
              Start small with a website, or step into a full local-presence partner. There are no tiers to decode and no pressure. We figure out the right starting point together, in a free conversation about your business.
            </p>
          </RevealDiv>

          <RevealDiv delay={320} className="text-center">
            <a
              href="#contact"
              className="font-mono-label inline-flex items-center justify-center"
              style={{
                fontSize: "12px",
                letterSpacing: "0.12em",
                color: "#1c1810",
                background: "#c9a84c",
                borderRadius: "999px",
                padding: "0.9rem 2rem",
                textDecoration: "none",
                transition: "background-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",
                boxShadow: "0 2px 12px rgba(201,168,76,0.25)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#d8b95e"
                e.currentTarget.style.transform = "translateY(-2px)"
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(201,168,76,0.35)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#c9a84c"
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow = "0 2px 12px rgba(201,168,76,0.25)"
              }}
            >
              NOT SURE WHERE TO START? TELL US ABOUT YOUR BUSINESS
            </a>
          </RevealDiv>
        </div>
      </div>
    </section>
  )
}
