"use client"
import { useState } from "react"
import Link from "next/link"
import { RevealDiv } from "@/components/ui/reveal-div"

const inputStyle = {
  background: "var(--surface-card)",
  border: "1px solid rgba(201,168,76,0.25)",
  color: "var(--text-primary)",
} as React.CSSProperties

const inputCls = "w-full font-body text-sm px-5 py-3.5 rounded-lg outline-none transition-all duration-200"

export function CTA() {
  const [email, setEmail] = useState("")
  const [businessName, setBusinessName] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !businessName) return
    setLoading(true)
    setError(false)
    try {
      const res = await fetch("https://formspree.io/f/mkoeqqyn", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, businessName }),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      data-theme="light"
      className="section-pad relative overflow-hidden"
      style={{ background: "var(--ink)" }}
    >
      {/* Static gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(201,168,76,0.12) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-8 text-center">
        <RevealDiv>
          <p className="eyebrow mb-6">GET STARTED FREE</p>
        </RevealDiv>

        <RevealDiv delay={80}>
          <h2
            className="font-display mb-5"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 300,
              color: "var(--text-primary)",
              lineHeight: 1.1,
            }}
          >
            Your first{" "}
            <em
              style={{
                fontStyle: "italic",
                color: "var(--gold)",
                fontWeight: 400,
              }}
            >
              14 days
            </em>{" "}
            are free.
          </h2>
        </RevealDiv>

        <RevealDiv delay={160}>
          <p
            className="font-body text-lg mb-6"
            style={{ color: "var(--text-secondary)" }}
          >
            No credit card. No contracts. We set everything up. You just say go.
          </p>
        </RevealDiv>

        <RevealDiv delay={200}>
          {submitted ? (
            <div
              className="rounded-xl py-5 px-8"
              style={{
                background: "rgba(201,168,76,0.08)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              <p
                className="font-display text-lg mb-1"
                style={{ color: "var(--gold)", fontWeight: 300 }}
              >
                You&apos;re on the list.
              </p>
              <p
                className="font-body text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                We&apos;ll be in touch within 24 hours to get you set up.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 mb-6"
            >
              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Business name"
                  required
                  className={inputCls}
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--gold)"
                    e.target.style.background = "rgba(255,255,255,0.95)"
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(201,168,76,0.25)"
                    e.target.style.background = "var(--surface-card)"
                  }}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Business email"
                  required
                  className={inputCls}
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--gold)"
                    e.target.style.background = "rgba(255,255,255,0.95)"
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(201,168,76,0.25)"
                    e.target.style.background = "var(--surface-card)"
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="font-body font-medium text-sm px-7 py-3.5 rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap"
                style={{ background: "var(--gold)", color: "#0d0c0a" }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.currentTarget.style.background = "var(--gold-light)"
                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(201,168,76,0.4)"
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--gold)"
                  e.currentTarget.style.boxShadow = "none"
                }}
              >
                {loading ? "Sending..." : "Claim your spot"}
              </button>
              {error && (
                <p className="font-body text-sm text-center" style={{ color: "rgba(255,120,120,0.8)" }}>
                  Something went wrong. Email us directly at{" "}
                  <a href="mailto:hello@getpresency.com" className="underline" style={{ color: "rgba(255,150,150,0.9)" }}>
                    hello@getpresency.com
                  </a>
                </p>
              )}
            </form>
          )}
        </RevealDiv>

        <RevealDiv delay={320}>
          <div className="mb-6">
            <Link
              href="https://calendly.com/397jtc/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm link-gold"
            >
              Or book a free 15-min call instead →
            </Link>
          </div>
        </RevealDiv>

        <RevealDiv delay={400}>
          <div className="flex flex-wrap justify-center gap-5">
            {["No card required", "Cancel anytime", "10-min setup"].map(
              (t) => (
                <div key={t} className="flex items-center gap-2">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle
                      cx="7"
                      cy="7"
                      r="6.5"
                      stroke="#c9a84c"
                      strokeOpacity="0.4"
                    />
                    <path
                      d="M4.5 7l2 2 3-3"
                      stroke="#c9a84c"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    className="font-body text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {t}
                  </span>
                </div>
              )
            )}
          </div>
        </RevealDiv>
      </div>
    </section>
  )
}
