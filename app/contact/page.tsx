"use client"
import { useState } from "react"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import Link from "next/link"

// Module-level constants — no recreation on every render
const INPUT_CLS = "w-full font-body text-sm px-4 py-3 rounded-lg outline-none transition-all duration-200"
const inputStyle = {
  background: "rgba(255,255,255,0.9)",
  border: "1px solid rgba(201,168,76,0.25)",
  color: "var(--text-primary)",
} as React.CSSProperties

type FocusEvt = React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
const onFocus = (e: FocusEvt) => {
  e.target.style.borderColor = "var(--gold)"
  e.target.style.background = "white"
}
const onBlur = (e: FocusEvt) => {
  e.target.style.borderColor = "rgba(201,168,76,0.25)"
  e.target.style.background = "rgba(255,255,255,0.9)"
}

function Field({
  id,
  label,
  type = "text",
  required = false,
}: {
  id: string
  label: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={id} className="font-mono-label text-xs block mb-2" style={{ color: "var(--text-muted)" }}>
        {label}
      </label>
      <input
        id={id} name={id} type={type} required={required}
        className={INPUT_CLS} style={inputStyle} onFocus={onFocus} onBlur={onBlur}
      />
    </div>
  )
}

export default function ContactPage() {
  const [selectedPackage, setSelectedPackage] = useState("")
  const [contactMethod, setContactMethod] = useState<"call" | "email" | "">("")
  const [callType, setCallType] = useState<"video" | "phone" | "">("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const data = new FormData(e.currentTarget)
    if (selectedPackage) data.set("package", selectedPackage)
    if (contactMethod) data.set("contactMethod", contactMethod)
    if (contactMethod === "call" && callType) data.set("callType", callType)
    try {
      await fetch("https://formspree.io/f/mkoeqqyn", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      })
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main data-theme="light" style={{ background: "var(--ink)" }}>
      <Nav />

      <div className="min-h-screen pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left: Form */}
            <div>
              <p className="eyebrow mb-4">GET IN TOUCH</p>
              <h1
                className="font-display mb-4 leading-tight"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 300, color: "var(--text-primary)" }}
              >
                Let&apos;s talk about{" "}
                <em style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 400 }}>
                  your business.
                </em>
              </h1>
              <p className="font-body text-lg mb-10" style={{ color: "var(--text-secondary)" }}>
                No pitch, no pressure. Tell us how you&apos;d like to connect and we&apos;ll make it work.
              </p>

              {submitted ? (
                <div
                  className="rounded-xl py-10 px-8 text-center"
                  style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.3)" }}
                >
                  <p className="font-display text-2xl mb-2" style={{ color: "var(--gold)", fontWeight: 300 }}>
                    Message received.
                  </p>
                  <p className="font-body text-sm" style={{ color: "var(--text-secondary)" }}>
                    You&apos;ll hear from Joey directly within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field id="fullName" label="FULL NAME *" required />
                    <Field id="businessName" label="BUSINESS NAME *" required />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="businessType" className="font-mono-label text-xs block mb-2" style={{ color: "var(--text-muted)" }}>
                        BUSINESS TYPE *
                      </label>
                      <select
                        id="businessType" name="businessType" required
                        className={INPUT_CLS + " cursor-pointer"}
                        style={{ ...inputStyle, appearance: "none" } as React.CSSProperties}
                        onFocus={onFocus} onBlur={onBlur}
                      >
                        <option value="" style={{ background: "var(--ink-2)" }}>Select type...</option>
                        {["Restaurant", "Salon / Barbershop", "Dental / Medical", "Auto Shop", "Gym / Fitness", "Other"].map((t) => (
                          <option key={t} value={t} style={{ background: "var(--ink-2)" }}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <Field id="city" label="CITY *" required />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field id="email" label="EMAIL *" type="email" required />
                    <div>
                      <label htmlFor="phone" className="font-mono-label text-xs block mb-2" style={{ color: "var(--text-muted)" }}>
                        PHONE <span style={{ opacity: 0.5 }}>(optional)</span>
                      </label>
                      <input
                        id="phone" name="phone" type="tel"
                        className={INPUT_CLS} style={inputStyle} onFocus={onFocus} onBlur={onBlur}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="challenge" className="font-mono-label text-xs block mb-2" style={{ color: "var(--text-muted)" }}>
                      WHAT&apos;S YOUR BIGGEST CHALLENGE RIGHT NOW?
                    </label>
                    <textarea
                      id="challenge" name="challenge" rows={4}
                      className={INPUT_CLS + " resize-none"}
                      style={inputStyle} onFocus={onFocus} onBlur={onBlur}
                    />
                  </div>

                  <div>
                    <p className="font-mono-label text-xs mb-3" style={{ color: "var(--text-muted)" }}>
                      PACKAGE INTEREST
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {["Website Redesign ($1,199 one-time)", "Online Presence Plan ($199/month)", "Both", "Not sure yet"].map((pkg) => {
                        const active = selectedPackage === pkg
                        return (
                          <button
                            key={pkg}
                            type="button"
                            onClick={() => setSelectedPackage(active ? "" : pkg)}
                            className="flex items-center gap-2 cursor-pointer transition-all duration-200 rounded-lg px-3 py-2"
                            style={{
                              background: active ? "rgba(201,168,76,0.12)" : "transparent",
                              border: `1px solid ${active ? "rgba(201,168,76,0.5)" : "rgba(201,168,76,0.18)"}`,
                            }}
                          >
                            <div
                              className="w-4 h-4 rounded-full border flex items-center justify-center shrink-0"
                              style={{ borderColor: active ? "var(--gold)" : "rgba(201,168,76,0.4)" }}
                            >
                              {active && <div className="w-2 h-2 rounded-full" style={{ background: "var(--gold)" }} />}
                            </div>
                            <span className="font-body text-sm" style={{ color: active ? "var(--gold)" : "var(--text-secondary)" }}>
                              {pkg}
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div>
                    <p className="font-mono-label text-xs mb-3" style={{ color: "var(--text-muted)" }}>
                      HOW WOULD YOU LIKE TO CONNECT?
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { id: "call" as const, label: "15-min call", desc: "Quick intro over video or phone" },
                        { id: "email" as const, label: "Email thread", desc: "No calls — keep it in writing" },
                      ].map(({ id, label, desc }) => {
                        const active = contactMethod === id
                        return (
                          <button
                            key={id}
                            type="button"
                            onClick={() => {
                              const next = active ? "" : id
                              setContactMethod(next)
                              if (next !== "call") setCallType("")
                            }}
                            className="flex items-start gap-3 cursor-pointer transition-all duration-200 rounded-lg px-4 py-3 text-left"
                            style={{
                              background: active ? "rgba(201,168,76,0.12)" : "transparent",
                              border: `1px solid ${active ? "rgba(201,168,76,0.5)" : "rgba(201,168,76,0.18)"}`,
                              minWidth: "160px",
                            }}
                          >
                            <div
                              className="w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5"
                              style={{ borderColor: active ? "var(--gold)" : "rgba(201,168,76,0.4)" }}
                            >
                              {active && <div className="w-2 h-2 rounded-full" style={{ background: "var(--gold)" }} />}
                            </div>
                            <div>
                              <p className="font-body text-sm font-medium leading-snug" style={{ color: active ? "var(--gold)" : "var(--text-primary)" }}>
                                {label}
                              </p>
                              <p className="font-body text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                                {desc}
                              </p>
                            </div>
                          </button>
                        )
                      })}
                    </div>

                    {/* Sub-row: video vs phone — slides in when "call" is selected */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateRows: contactMethod === "call" ? "1fr" : "0fr",
                        transition: "grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      <div style={{ overflow: "hidden" }}>
                        <div
                          className="flex flex-wrap gap-2 pt-3 pl-1"
                          style={{
                            opacity: contactMethod === "call" ? 1 : 0,
                            transition: "opacity 0.25s ease 0.1s",
                          }}
                        >
                          <p className="font-mono-label text-xs w-full mb-1" style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}>
                            VIDEO OR PHONE?
                          </p>
                          {[
                            {
                              id: "video" as const,
                              label: "Video call",
                              icon: (
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                  <rect x="2" y="6" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
                                  <path d="M16 10l6-4v12l-6-4V10z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                                </svg>
                              ),
                            },
                            {
                              id: "phone" as const,
                              label: "Phone call",
                              icon: (
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                  <path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.6 3.6a1 1 0 0 1-.25 1L6.6 10.8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              ),
                            },
                          ].map(({ id, label, icon }) => {
                            const active = callType === id
                            return (
                              <button
                                key={id}
                                type="button"
                                onClick={() => setCallType(active ? "" : id)}
                                className="flex items-center gap-2 cursor-pointer transition-all duration-200 rounded-lg px-3 py-2"
                                style={{
                                  background: active ? "rgba(201,168,76,0.12)" : "rgba(255,255,255,0.8)",
                                  border: `1px solid ${active ? "rgba(201,168,76,0.5)" : "rgba(201,168,76,0.2)"}`,
                                  color: active ? "var(--gold)" : "var(--text-muted)",
                                }}
                              >
                                {icon}
                                <span className="font-body text-sm" style={{ color: active ? "var(--gold)" : "var(--text-secondary)" }}>
                                  {label}
                                </span>
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full font-body font-medium text-sm py-4 rounded-lg transition-all duration-200 cursor-pointer"
                    style={{ background: "var(--gold)", color: "var(--ink)" }}
                    onMouseEnter={(e) => {
                      if (!loading) {
                        e.currentTarget.style.background = "var(--gold-light)"
                        e.currentTarget.style.boxShadow = "0 8px 24px rgba(201,168,76,0.35)"
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "var(--gold)"
                      e.currentTarget.style.boxShadow = "none"
                    }}
                  >
                    {loading ? "Sending..." : "Send message"}
                  </button>
                </form>
              )}
            </div>

            {/* Right: What happens next */}
            <div className="lg:pt-32">
              <div
                className="rounded-2xl p-8"
                style={{ background: "var(--ink-2)", border: "1px solid rgba(201,168,76,0.1)" }}
              >
                <p className="eyebrow mb-6" style={{ color: "var(--gold)" }}>WHAT HAPPENS NEXT</p>
                <div className="space-y-8">
                  {[
                    { num: "1", title: "You submit", desc: "Fill out the form. Takes about 3 minutes." },
                    {
                      num: "2",
                      title: "We review in 24 hrs",
                      desc: contactMethod === "email"
                        ? "We look at your business and your current Google presence, then put together a clear plan."
                        : "We look at your business, check your current Google presence, and prep for the call.",
                    },
                    {
                      num: "3",
                      title: contactMethod === "email" ? "We follow up by email" : "We hop on a call",
                      desc: contactMethod === "email"
                        ? "We'll send you a clear breakdown of what we'd do for your business — no call needed."
                        : "15 minutes. We show you exactly what we'd do for your business and what to expect.",
                    },
                  ].map((step) => (
                    <div key={step.num} className="flex gap-5">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)" }}
                      >
                        <span className="font-display text-sm" style={{ color: "var(--gold)", fontWeight: 400 }}>
                          {step.num}
                        </span>
                      </div>
                      <div>
                        <p className="font-body font-medium text-sm mb-1" style={{ color: "var(--text-primary)" }}>
                          {step.title}
                        </p>
                        <p className="font-body text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8" style={{ borderTop: "1px solid rgba(201,168,76,0.08)" }}>
                  {contactMethod !== "email" && (
                    <p className="font-body text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      Prefer to skip straight to a call?{" "}
                      <Link
                        href="https://calendly.com/397jtc/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-gold-light"
                      >
                        Book directly on Calendly →
                      </Link>
                    </p>
                  )}
                  {contactMethod === "email" && (
                    <p className="font-body text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      Changed your mind?{" "}
                      <button
                        type="button"
                        onClick={() => setContactMethod("call")}
                        className="link-gold-light cursor-pointer"
                        style={{ background: "none", border: "none", padding: 0 }}
                      >
                        Switch to a call instead →
                      </button>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
