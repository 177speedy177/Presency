"use client"
import Image from "next/image"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

const beliefs = [
  {
    title: "Local businesses deserve better online.",
    body: "Most marketing help is built for big brands with big budgets, or it is a cheap template that never gets managed. Presency is built specifically for the local business that wants a sharp website, a strong Google presence, and real reviews, done for them without the big-agency overhead.",
  },
  {
    title: "Showing up better wins the customer.",
    body: "When a customer searches, they choose the business that simply shows up better: a cleaner website, a fuller Google profile, more recent reviews. The work being done is rarely the difference. The presence is. Most great local businesses lose customers to a competitor who is easier to find and easier to trust online.",
  },
  {
    title: "It should be done for you, and obvious in its results.",
    body: "You should not have to learn another dashboard, chase another login, or manage another vendor. We build and manage your website, Google Business Profile, reviews, social, and AI-search visibility for you. Every month you see exactly what changed and what it earned.",
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
                  Founder-built.{" "}
                  <em className="font-display" style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 400 }}>
                    For local businesses.
                  </em>
                </h1>

                <div className="space-y-5 font-body text-lg leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>
                  <p>
                    I study Biomedical Engineering at Penn State, where I spend my time learning how high-performing systems are designed, measured, and improved. The more I looked at local businesses, the more I saw the same pattern: excellent shops, studios, and trades losing customers to competitors who simply show up better online. A sharper website, a stronger Google presence, more reviews. Not better work, just a better presence.
                  </p>
                  <p>
                    I built Presency to give small local businesses that same edge, done for them. The cafe your neighborhood loves, the contractor who has been on that street for decades. They deserve a website, a Google profile, and a reputation online that match the quality of their work.
                  </p>
                  <p>
                    Presency is founder-led by design. You get a real person who builds and manages your presence, not a login and a good luck. Every month you see exactly what changed and what it earned.
                  </p>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {["Founder-led", "Done-for-you", "Direct founder access"].map((t) => (
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
              Start the conversation.
            </h2>
            <p className="font-body text-base mb-8" style={{ color: "var(--text-secondary)" }}>
              A free, no-pressure conversation about your website, your Google presence, and how customers find you. We will show you where you can win, with no commitment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/#contact"
                className="font-body font-medium text-sm px-8 py-4 rounded-lg transition-all duration-200 cursor-pointer"
                style={{ background: "var(--gold)", color: "#0d0c0a" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#b8922e" }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "var(--gold)" }}
              >
                Start the conversation
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
