"use client"
import { useState } from "react"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { CONTACT } from "@/lib/content"

const INPUT_CLS = "w-full font-body text-sm px-4 py-3.5 rounded-lg outline-none transition-all duration-200"
const inputStyle = {
  background: "rgba(0,0,0,0.04)",
  border: "1px solid rgba(201,168,76,0.3)",
  color: "var(--text-primary)",
} as React.CSSProperties

type InputEvt = React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
const onFocus = (e: InputEvt) => {
  e.target.style.borderColor = "var(--gold)"
  e.target.style.background = "rgba(0,0,0,0.06)"
}
const onBlur = (e: InputEvt) => {
  e.target.style.borderColor = "rgba(201,168,76,0.3)"
  e.target.style.background = "rgba(0,0,0,0.04)"
}

const auditItems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M13.5 11.5c-1.1 1.1-2.3 2-3.5 2-2 0-4.5-2.5-5.7-4.5C3.1 7.1 2.3 5.5 3.5 4.3l1.4-1.4c.4-.4 1-.4 1.4 0l2.1 2.8c.4.4.4 1 0 1.4l-1 1C8 9 9 10 10.1 10.6l1.1-1.1c.4-.4 1-.4 1.4 0l2.8 2.1c.4.4.4 1 0 1.4l-2 1.5" stroke="#c9a84c" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Missed call exposure",
    desc: "We map how many calls your practice misses each week: during lunch, after hours, when the front desk is occupied. Every gap is a new-patient opportunity that currently goes uncaptured.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 5h14M3 10h10M3 15h7" stroke="#c9a84c" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Web inquiry response time",
    desc: "How quickly your practice responds to web form submissions. A patient who fills out a contact form and hears nothing within a few hours will typically call someone else.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2l1.8 5.4H17l-4.5 3.3 1.7 5.3L10 13l-4.2 3 1.7-5.3L3 7.4h5.2z" stroke="#c9a84c" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Review presence",
    desc: "How many reviews your practice has, how recent they are, and whether you have a consistent process for collecting them. Reviews are the first thing a prospective new patient checks.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="14" height="12" rx="2" stroke="#c9a84c" strokeOpacity="0.5" strokeWidth="1.5" />
        <path d="M7 4V2M13 4V2M3 9h14" stroke="#c9a84c" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "After-hours coverage",
    desc: "What a patient experiences when they call outside your office hours. Does anything follow up, or does the opportunity disappear until the next business day?",
  },
]

export default function FreeAuditPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    const data = new FormData(e.currentTarget)
    try {
      const res = await fetch(CONTACT.formspree, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
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
    <div style={{ background: "var(--surface)", minHeight: "100vh" }}>
      <Nav />

      <main className="relative overflow-hidden" data-theme="light">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 60% 20%, rgba(201,168,76,0.09) 0%, transparent 55%)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 20% 80%, rgba(201,168,76,0.05) 0%, transparent 50%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-24">
          {/* Header */}
          <div className="max-w-2xl mb-16">
            <p className="font-mono-label mb-4" style={{ fontSize: "10px", color: "var(--gold)", letterSpacing: "0.14em" }}>
              FREE · NO COMMITMENT
            </p>
            <h1
              className="font-display mb-5 leading-tight"
              style={{ fontSize: "clamp(2.4rem,5.5vw,4rem)", fontWeight: 300, color: "var(--text-primary)" }}
            >
              Find out exactly where your practice is{" "}
              <em className="font-display" style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 400 }}>
                losing new patients.
              </em>
            </h1>
            <p className="font-body text-lg leading-relaxed" style={{ color: "var(--text-secondary)", maxWidth: "520px" }}>
              The Patient Capture Audit maps every gap in your new-patient follow-up: missed calls, after-hours coverage, web inquiry response, and review presence. You get a clear report back within 48 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Left: What we check */}
            <div>
              <p className="font-mono-label mb-8" style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.14em" }}>
                WHAT WE CHECK
              </p>
              <div className="flex flex-col gap-8">
                {auditItems.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.15)" }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-body text-sm font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                        {item.title}
                      </p>
                      <p className="font-body text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-xl px-5 py-4" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.15)" }}>
                <div className="flex items-start gap-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-0.5 shrink-0">
                    <path d="M8 1l1.5 4.5H14l-4 2.8 1.5 4.7L8 10l-4.5 3 1.5-4.7-4-2.8h5.5z" fill="rgba(201,168,76,0.4)" />
                  </svg>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    This is a real, manual audit done by a person. Not an automated report. We look at your actual practice before we send anything back.
                  </p>
                </div>
              </div>

              <p className="font-body text-xs italic mt-5" style={{ color: "var(--text-muted)" }}>
                Do not enter any patient names, health information, or appointment details in this form.
              </p>
            </div>

            {/* Right: Form */}
            <div>
              <div
                className="rounded-2xl p-8"
                style={{ background: "rgba(255,255,255,0.8)", border: "1px solid rgba(201,168,76,0.18)", boxShadow: "0 4px 32px rgba(0,0,0,0.07)" }}
              >
                {submitted ? (
                  <div className="py-8 text-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                      style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)" }}
                    >
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                        <path d="M4.5 11l4 4 9-9" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="font-display text-2xl mb-2" style={{ fontWeight: 300, color: "var(--text-primary)" }}>
                      Audit request received.
                    </p>
                    <p className="font-body text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
                      We will review your practice and send your Patient Capture Audit back within 48 hours.
                    </p>
                    <Link href="/" className="font-body text-sm" style={{ color: "var(--gold)" }}>
                      Back to home →
                    </Link>
                  </div>
                ) : (
                  <>
                    <p className="font-display text-xl mb-1" style={{ fontWeight: 300, color: "var(--text-primary)" }}>
                      Request your free audit
                    </p>
                    <p className="font-body text-sm mb-7" style={{ color: "var(--text-muted)" }}>
                      Takes 60 seconds. Report back within 48 hours.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <div>
                        <label htmlFor="practiceName" className="font-mono-label text-xs block mb-2" style={{ color: "var(--text-muted)", letterSpacing: "0.1em" }}>
                          PRACTICE NAME *
                        </label>
                        <input
                          id="practiceName"
                          name="practiceName"
                          type="text"
                          required
                          placeholder="Philadelphia Family Dental"
                          className={INPUT_CLS}
                          style={inputStyle}
                          onFocus={onFocus}
                          onBlur={onBlur}
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="font-mono-label text-xs block mb-2" style={{ color: "var(--text-muted)", letterSpacing: "0.1em" }}>
                          PRACTICE EMAIL *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@yourpractice.com"
                          className={INPUT_CLS}
                          style={inputStyle}
                          onFocus={onFocus}
                          onBlur={onBlur}
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="city" className="font-mono-label text-xs block mb-2" style={{ color: "var(--text-muted)", letterSpacing: "0.1em" }}>
                            CITY / NEIGHBORHOOD
                          </label>
                          <input
                            id="city"
                            name="city"
                            type="text"
                            placeholder="Center City, Philadelphia"
                            className={INPUT_CLS}
                            style={inputStyle}
                            onFocus={onFocus}
                            onBlur={onBlur}
                          />
                        </div>
                        <div>
                          <label htmlFor="locations" className="font-mono-label text-xs block mb-2" style={{ color: "var(--text-muted)", letterSpacing: "0.1em" }}>
                            NUMBER OF LOCATIONS
                          </label>
                          <input
                            id="locations"
                            name="locations"
                            type="text"
                            placeholder="1"
                            className={INPUT_CLS}
                            style={inputStyle}
                            onFocus={onFocus}
                            onBlur={onBlur}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="website" className="font-mono-label text-xs block mb-2" style={{ color: "var(--text-muted)", letterSpacing: "0.1em" }}>
                          PRACTICE WEBSITE
                        </label>
                        <input
                          id="website"
                          name="website"
                          type="url"
                          placeholder="https://yourpractice.com"
                          className={INPUT_CLS}
                          style={inputStyle}
                          onFocus={onFocus}
                          onBlur={onBlur}
                        />
                      </div>

                      <input type="hidden" name="_subject" value="Patient Capture Audit Request" />

                      {error && (
                        <p className="font-body text-sm text-center" style={{ color: "rgba(255,120,120,0.8)" }}>
                          Something went wrong. Email us at{" "}
                          <a href={`mailto:${CONTACT.email}`} className="underline">
                            {CONTACT.email}
                          </a>
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={loading}
                        className="font-body font-medium text-sm py-4 rounded-lg transition-all duration-200 cursor-pointer mt-1"
                        style={{ background: "var(--gold)", color: "#0d0c0a" }}
                        onMouseEnter={(e) => { if (!loading) { e.currentTarget.style.background = "#d4b05a"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(201,168,76,0.35)" } }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.boxShadow = "none" }}
                      >
                        {loading ? "Sending..." : "Request my free Patient Capture Audit"}
                      </button>
                    </form>

                    <p className="font-mono-label text-center mt-5" style={{ fontSize: "9px", color: "rgba(201,168,76,0.35)", letterSpacing: "0.1em" }}>
                      DO NOT ENTER PATIENT NAMES OR HEALTH INFORMATION
                    </p>
                  </>
                )}
              </div>

              <p className="font-body text-sm text-center mt-5" style={{ color: "var(--text-muted)" }}>
                Prefer a call?{" "}
                <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer" className="link-gold">
                  Book 30 minutes on Calendly →
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
