"use client"
import Image from "next/image"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

const beliefs = [
  {
    title: "Local businesses deserve better tools.",
    body: "Most agencies build websites for other agencies to admire. We build them for customers to use. A local business doesn't need a design award. It needs a call button that works on a phone, a site that loads fast, and reviews that prove it's legit.",
  },
  {
    title: "Technology should work for you, not the other way around.",
    body: "You shouldn't have to learn a CMS, log into a dashboard, or respond to 30 reviews a week. That's our job. You run the business. We handle the part that happens on a screen.",
  },
  {
    title: "Reputation is built in the details.",
    body: "Every review that goes unanswered is a customer who felt ignored. Every slow-loading page is a lead that bounced. The details add up. We pay attention to them so you don't have to.",
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
            style={{
              background:
                "radial-gradient(ellipse at 55% 30%, rgba(201,168,76,0.08) 0%, transparent 55%)",
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

              {/* Left: Text */}
              <div className="max-w-xl">
                <p
                  className="font-mono-label mb-5"
                  style={{ fontSize: "10px", color: "var(--gold)", letterSpacing: "0.14em" }}
                >
                  FROM THE FOUNDER
                </p>
                <h1
                  className="font-display mb-6 leading-tight"
                  style={{
                    fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                    fontWeight: 300,
                    color: "var(--text-primary)",
                  }}
                >
                  Philly-built.{" "}
                  <em
                    className="font-display"
                    style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 400 }}
                  >
                    For Philly businesses.
                  </em>
                </h1>

                <div
                  className="space-y-5 font-body text-lg leading-relaxed mb-10"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <p>
                    Growing up in Philadelphia, I watched great local businesses slowly lose
                    customers to chains that just had better-looking websites and more polished
                    Google reviews. The barbershop on your block. The dentist your family loves.
                    The spot that&apos;s been there for decades. They&apos;re doing better work
                    than the competition. They just don&apos;t show it online.
                  </p>
                  <p>
                    I started Presency to fix that. Not with generic templates or automated
                    spam. With real, hand-crafted work: a website that actually represents
                    your business, and review responses that sound like a human being wrote them,
                    because one did.
                  </p>
                  <p>
                    Presency is small by design. Every client gets direct access to me.
                    Every response is reviewed before it goes out. That&apos;s how I want
                    to run this.
                  </p>
                </div>

                {/* Trust signals */}
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {[
                    "Philadelphia-based",
                    "No contracts",
                    "Direct founder access",
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <circle cx="7" cy="7" r="6.5" stroke="#c9a84c" strokeOpacity="0.5" />
                        <path
                          d="M4.5 7l2 2 3-3"
                          stroke="#c9a84c"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="font-body text-sm" style={{ color: "var(--text-secondary)" }}>
                        {t}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Photo */}
              <div className="relative w-full max-w-md mx-auto lg:ml-auto">
                <div
                  className="relative w-full rounded-2xl overflow-hidden"
                  style={{
                    aspectRatio: "4/5",
                    border: "1px solid rgba(201,168,76,0.25)",
                    boxShadow:
                      "0 0 60px rgba(201,168,76,0.08), 0 24px 64px rgba(0,0,0,0.5)",
                  }}
                >
                  <Image
                    src="/joey.png"
                    alt="Joey, Founder of Presency"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                    sizes="(max-width: 1024px) 90vw, 46vw"
                    priority
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 55%, rgba(13,12,10,0.5) 100%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What we believe */}
        <section
          className="py-20 relative"
          data-theme="light"
          style={{ borderTop: "1px solid rgba(201,168,76,0.08)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.05) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-14">
              <p
                className="font-mono-label mb-3"
                style={{ fontSize: "10px", color: "var(--gold)", letterSpacing: "0.14em" }}
              >
                HOW WE THINK
              </p>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 3rem)",
                  fontWeight: 300,
                  color: "var(--text-primary)",
                }}
              >
                What we believe.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {beliefs.map((b, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    border: "1px solid rgba(201,168,76,0.18)",
                  }}
                >
                  <div
                    className="w-7 h-px mb-6"
                    style={{ background: "var(--gold)", opacity: 0.6 }}
                  />
                  <h3
                    className="font-display text-lg mb-3 leading-snug"
                    style={{ fontWeight: 400, color: "var(--text-primary)" }}
                  >
                    {b.title}
                  </h3>
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {b.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" data-theme="light">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div
              className="rounded-2xl px-8 py-12 text-center"
              style={{
                background: "rgba(201,168,76,0.05)",
                border: "1px solid rgba(201,168,76,0.18)",
              }}
            >
              <p
                className="font-mono-label mb-4"
                style={{ fontSize: "10px", color: "var(--gold)", letterSpacing: "0.14em" }}
              >
                READY TO START?
              </p>
              <h2
                className="font-display mb-4"
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  fontWeight: 300,
                  color: "var(--text-primary)",
                }}
              >
                Let&apos;s see what your business looks like online.
              </h2>
              <p
                className="font-body text-base mb-8 max-w-lg mx-auto"
                style={{ color: "var(--text-secondary)" }}
              >
                Start with a free audit. We&apos;ll tell you exactly what&apos;s working,
                what&apos;s hurting you, and what we&apos;d do about it.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/free-audit"
                  className="font-body font-medium text-sm px-7 py-3.5 rounded-lg transition-all duration-200 cursor-pointer"
                  style={{ background: "var(--gold)", color: "#0d0c0a" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#d4b05a"
                    e.currentTarget.style.transform = "translateY(-1px)"
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(201,168,76,0.35)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--gold)"
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >
                  Get my free presence audit
                </Link>
                <Link
                  href="/contact"
                  className="font-body font-medium text-sm px-7 py-3.5 rounded-lg border transition-all duration-200 cursor-pointer"
                  style={{
                    borderColor: "rgba(201,168,76,0.35)",
                    color: "var(--text-primary)",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--gold)"
                    e.currentTarget.style.background = "rgba(201,168,76,0.06)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)"
                    e.currentTarget.style.background = "transparent"
                  }}
                >
                  Contact us directly
                </Link>
              </div>
              <p
                className="font-mono-label mt-6"
                style={{ fontSize: "9px", color: "rgba(201,168,76,0.35)", letterSpacing: "0.1em" }}
              >
                FREE AUDIT · NO CREDIT CARD · NO CONTRACTS
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
