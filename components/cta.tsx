"use client"
import Link from "next/link"
import { RevealDiv } from "@/components/ui/reveal-div"
import { ToothPattern } from "@/components/ui/tooth-pattern"
import { CONTACT } from "@/lib/content"

export function AuditCTA() {
  return (
    <section
      className="section-pad relative overflow-hidden"
      data-theme="light"
      style={{ background: "#f0ece3" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.1) 0%, transparent 60%)" }}
      />
      <ToothPattern variant={1} />

      <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-8 text-center">
        <RevealDiv>
          <p className="font-mono-label mb-6" style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#7a5c10" }}>
            FREE · 30 MINUTES · NO COMMITMENT
          </p>
        </RevealDiv>

        <RevealDiv delay={80}>
          <h2
            className="font-display mb-5"
            style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 300, color: "#1c1810", lineHeight: 1.1 }}
          >
            Find out where your practice is{" "}
            <em className="gold-text-sheen" style={{ fontStyle: "italic", color: "#7a5c10", fontWeight: 400 }}>
              losing patients.
            </em>
          </h2>
        </RevealDiv>

        <RevealDiv delay={160}>
          <p className="font-body text-base mb-8" style={{ color: "rgba(28,24,16,0.65)" }}>
            The Patient Capture Audit maps every place a new-patient opportunity could be slipping through. Missed calls, after-hours gaps, web inquiry response time, review presence. You get a clear picture in a 30-minute call.
          </p>
        </RevealDiv>

        <RevealDiv delay={220}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <a
              href={CONTACT.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer font-body font-medium text-sm px-8 py-4 rounded-lg transition-all duration-200 cursor-pointer"
              style={{ background: "#c9a84c", color: "#0d0c0a" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#b8922e"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(201,168,76,0.35)" }}
              onMouseLeave={e => { e.currentTarget.style.background = "#c9a84c"; e.currentTarget.style.boxShadow = "none" }}
            >
              Book your free Patient Capture Audit
            </a>
            <Link
              href="/contact"
              className="font-body font-medium text-sm px-8 py-4 rounded-lg transition-all duration-200 cursor-pointer"
              style={{ background: "transparent", color: "#1c1810", border: "1px solid rgba(28,24,16,0.2)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.6)"; e.currentTarget.style.background = "rgba(201,168,76,0.06)" }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(28,24,16,0.2)"; e.currentTarget.style.background = "transparent" }}
            >
              Send us a message
            </Link>
          </div>
        </RevealDiv>

        <RevealDiv delay={300}>
          <div className="flex flex-wrap justify-center gap-6">
            {["No commitment required", "Results in 2 business days"].map(t => (
              <div key={t} className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <circle cx="7" cy="7" r="6.5" stroke="#c9a84c" strokeOpacity="0.6" />
                  <path d="M4.5 7l2 2 3-3" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-body text-xs" style={{ color: "rgba(28,24,16,0.55)" }}>{t}</span>
              </div>
            ))}
          </div>
        </RevealDiv>
      </div>
    </section>
  )
}
