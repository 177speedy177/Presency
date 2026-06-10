"use client"
import Image from "next/image"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { CONTACT } from "@/lib/content"

const beliefs = [
  {
    title: "Independent practices deserve better tools.",
    body: "Most patient-capture software is built for large groups. It is expensive, hard to implement, and not designed for a two-person front desk at an independent practice. Presency is built specifically for the independent practice that wants the same capability without the enterprise overhead.",
  },
  {
    title: "A missed call is not a small problem.",
    body: "For a practice where a new patient is worth thousands of dollars over their lifetime, a missed call that books at a competing practice is a real loss. The problem is not that the practice does not care. It is that most practices have no system in place to catch the call when staff are occupied.",
  },
  {
    title: "Technology should work for your staff, not the other way around.",
    body: "If a front desk coordinator has to learn a new software system, remember to check another inbox, or change how they handle calls, the tool will not get used. Every workflow we build is designed to be invisible to your staff and obvious in its results.",
  },
]

export default function AboutPage() {
  return (
    <div style={{ background: "var(--surface)", minHeight: "100vh" }}>
      <Nav />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden" data-theme="light">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 55% 30%, rgba(201,168,76,0.08) 0%, transparent 55%)" }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

              {/* Left: Text */}
              <div className="max-w-xl">
                <p className="font-mono-label mb-5" style={{ fontSize: "11px", color: "#7a5c10", letterSpacing: "0.14em" }}>
                  FROM THE FOUNDER
                </p>
                <h1
                  className="font-display mb-6 leading-tight"
                  style={{ fontSize: "clamp(2.4rem,5vw,3.8rem)", fontWeight: 300, color: "var(--text-primary)" }}
                >
                  Philly-built.{" "}
                  <em className="font-display" style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 400 }}>
                    For Philly practices.
                  </em>
                </h1>

                <div className="space-y-5 font-body text-lg leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>
                  <p>
                    I study Biomedical Engineering at Penn State, where I spend my time learning how high-performing systems are designed, measured, and improved. Exploring the operational side of healthcare, I kept seeing the same failure in my home city: great independent practices losing patients to bigger groups, not because the clinical care was worse, but because the phone went to voicemail or the web form sat unanswered for a day.
                  </p>
                  <p>
                    I built Presency specifically for independent dental practices that do excellent work and should not be losing new patients to a process failure. The dentist your family loves, the practice that has been on that block for decades. They deserve the same capture capability that the large groups have.
                  </p>
                  <p>
                    Presency is small by design. Every practice gets a real setup, not a software login and a good luck. Every month you see exactly what the system captured.
                  </p>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {["Philadelphia-based", "BAA included", "Direct founder access"].map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <circle cx="7" cy="7" r="6.5" stroke="#c9a84c" strokeOpacity="0.5" />
                        <path d="M4.5 7l2 2 3-3" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="font-body text-sm" style={{ color: "var(--text-secondary)" }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Photo */}
              <div className="relative w-full max-w-md mx-auto lg:ml-auto">
                <div
                  className="relative w-full rounded-2xl overflow-hidden"
                  style={{ aspectRatio: "4/5", border: "1px solid rgba(201,168,76,0.25)", boxShadow: "0 0 60px rgba(201,168,76,0.08), 0 24px 64px rgba(0,0,0,0.15)" }}
                >
                  <Image
                    src="/joey.png"
                    alt="Joey, founder of Presency"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                    sizes="(max-width: 1024px) 90vw, 46vw"
                    priority
                  />
                  <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent 55%, rgba(13,12,10,0.4) 100%)" }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What we believe */}
        <section className="py-20 relative" data-theme="light" style={{ background: "var(--ink)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="font-mono-label mb-12" style={{ fontSize: "11px", color: "#7a5c10", letterSpacing: "0.14em" }}>
              HOW WE THINK ABOUT THIS
            </p>

            <div className="grid md:grid-cols-3 gap-10">
              {beliefs.map((b) => (
                <div key={b.title}>
                  <h2
                    className="font-display text-xl mb-4 leading-tight"
                    style={{ fontWeight: 300, color: "var(--text-primary)" }}
                  >
                    {b.title}
                  </h2>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {b.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" data-theme="light" style={{ background: "var(--ink)" }}>
          <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
            <p className="font-mono-label mb-6" style={{ fontSize: "11px", color: "#7a5c10", letterSpacing: "0.14em" }}>
              READY TO START
            </p>
            <h2 className="font-display text-3xl mb-5" style={{ fontWeight: 300, color: "var(--text-primary)" }}>
              Start with a free Patient Capture Audit.
            </h2>
            <p className="font-body text-base mb-8" style={{ color: "var(--text-secondary)" }}>
              A 30-minute call where we map every gap in your new-patient follow-up and show you exactly what can be captured. No commitment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={CONTACT.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body font-medium text-sm px-8 py-4 rounded-lg transition-all duration-200 cursor-pointer"
                style={{ background: "var(--gold)", color: "#0d0c0a" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#b8922e" }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "var(--gold)" }}
              >
                Book a free 30-min audit
              </a>
              <Link
                href="/contact"
                className="font-body font-medium text-sm px-8 py-4 rounded-lg transition-all duration-200 cursor-pointer"
                style={{ background: "transparent", color: "var(--text-primary)", border: "1px solid rgba(201,168,76,0.3)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.6)" }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)" }}
              >
                Send a message
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
