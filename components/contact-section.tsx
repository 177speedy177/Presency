"use client"
import { useState } from "react"
import { RevealDiv } from "@/components/ui/reveal-div"
import { ToothPattern } from "@/components/ui/tooth-pattern"
import { CONTACT } from "@/lib/content"

type Status = "idle" | "sending" | "sent" | "error"

const inputStyle: React.CSSProperties = {
  border: "1px solid rgba(201,168,76,0.3)",
  background: "#faf7f2",
  color: "#1c1810",
  outline: "none",
}

function Field({
  label, name, type = "text", required = false, placeholder, textarea = false,
}: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string; textarea?: boolean
}) {
  const common = {
    id: name,
    name,
    required,
    placeholder,
    className: "w-full font-body text-sm rounded-lg px-4 py-3 transition-colors duration-200",
    style: inputStyle,
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => { e.currentTarget.style.borderColor = "#c9a84c" },
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)" },
  }
  return (
    <div>
      <label htmlFor={name} className="font-body text-xs font-medium block mb-1.5" style={{ color: "rgba(28,24,16,0.6)" }}>
        {label}{required && <span style={{ color: "#b8922e" }}> *</span>}
      </label>
      {textarea
        ? <textarea {...common} rows={4} style={{ ...inputStyle, resize: "vertical" }} />
        : <input {...common} type={type} />}
    </div>
  )
}

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setStatus("sending")
    try {
      const res = await fetch(CONTACT.formspree, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
      if (res.ok) { setStatus("sent"); form.reset() }
      else setStatus("error")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section
      id="contact"
      data-theme="light"
      className="section-pad relative overflow-hidden"
      style={{ background: "#f7f4ef" }}
    >
      <ToothPattern variant={2} />
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: editorial */}
          <RevealDiv>
            <p className="font-mono-label mb-5" style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#7a5c10" }}>
              GET IN TOUCH
            </p>
            <h2
              className="font-display mb-6 leading-tight"
              style={{ fontSize: "clamp(1.75rem,4vw,3rem)", fontWeight: 300, color: "#1c1810" }}
            >
              Tell us about your{" "}
              <em style={{ fontStyle: "italic", color: "#7a5c10", fontWeight: 400 }}>
                business.
              </em>
            </h2>
            <p className="font-body text-base leading-relaxed mb-8" style={{ color: "rgba(28,24,16,0.65)" }}>
              No forms-into-the-void, no sales pressure. Send a few details and you will hear back from Joey directly. We will talk through where customers are slipping away and the simplest place to start.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                "You work directly with the founder, not a queue",
                "A free, no-pressure conversation to start",
                "We build, host, and manage everything for you",
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
                    <circle cx="7" cy="7" r="6.5" stroke="#c9a84c" strokeOpacity="0.6" />
                    <path d="M4.5 7l2 2 3-3" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-body text-sm" style={{ color: "rgba(28,24,16,0.7)" }}>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${CONTACT.email}`}
              className="font-body text-sm transition-colors duration-200"
              style={{ color: "#7a5c10" }}
              onMouseEnter={e => { e.currentTarget.style.color = "#b8922e" }}
              onMouseLeave={e => { e.currentTarget.style.color = "#7a5c10" }}
            >
              Prefer email? {CONTACT.email}
            </a>
          </RevealDiv>

          {/* Right: form card */}
          <RevealDiv delay={120}>
            <div
              className="rounded-2xl p-7 lg:p-8"
              style={{ background: "#ffffff", border: "1px solid rgba(201,168,76,0.22)", boxShadow: "0 8px 40px rgba(28,24,16,0.07)" }}
            >
              {status === "sent" ? (
                <div className="text-center py-10">
                  <div
                    className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.35)" }}
                  >
                    <svg width="22" height="22" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3 7l3 3 5-5" stroke="#7a5c10" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl mb-2" style={{ fontWeight: 400, color: "#1c1810" }}>
                    Message sent.
                  </h3>
                  <p className="font-body text-sm" style={{ color: "rgba(28,24,16,0.6)" }}>
                    Thanks for reaching out. You will hear back from Joey shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Your name" name="name" required placeholder="Jordan Lee" />
                    <Field label="Business name" name="business" placeholder="Oakwood Co." />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Email" name="email" type="email" required placeholder="you@business.com" />
                    <Field label="Phone" name="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Type of business" name="business_type" placeholder="Roofing, salon, cafe..." />
                    <Field label="Current website" name="website" placeholder="If you have one" />
                  </div>
                  <Field label="What do you need help with?" name="message" required textarea placeholder="Tell us a little about your goals." />

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-shimmer font-body font-medium text-sm py-3.5 rounded-lg transition-all duration-200 cursor-pointer mt-1"
                    style={{ background: "#c9a84c", color: "#0d0c0a", opacity: status === "sending" ? 0.6 : 1 }}
                    onMouseEnter={e => { if (status !== "sending") e.currentTarget.style.background = "#b8922e" }}
                    onMouseLeave={e => { e.currentTarget.style.background = "#c9a84c" }}
                  >
                    {status === "sending" ? "Sending..." : "Send message"}
                  </button>

                  {status === "error" && (
                    <p className="font-body text-xs text-center" style={{ color: "#b4452e" }}>
                      Something went wrong. Please email {CONTACT.email} directly.
                    </p>
                  )}
                  <p className="font-body text-xs text-center" style={{ color: "rgba(28,24,16,0.45)" }}>
                    No commitment. We reply personally.
                  </p>
                </form>
              )}
            </div>
          </RevealDiv>

        </div>
      </div>
    </section>
  )
}
