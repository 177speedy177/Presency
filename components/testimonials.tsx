"use client"
import { RevealDiv } from "@/components/ui/reveal-div"
import { WordReveal } from "@/components/ui/word-reveal"
import { CONTACT } from "@/lib/content"

const conversations = [
  {
    label: "MISSED CALL · AFTER HOURS",
    trigger: "Patient called at 6:48 PM · Front desk closed",
    messages: [
      { from: "biz", text: "Hi! You reached Philadelphia Family Dental. We missed your call but wanted to reach out. Still looking to schedule?" },
      { from: "patient", text: "Yes, I need to get in for a cleaning" },
      { from: "biz", text: "We have Thursday at 10am or Friday at 2pm available. Which works best?" },
      { from: "patient", text: "Thursday at 10 is perfect" },
    ],
    result: "New patient booked in 4 minutes",
    resultIcon: "calendar",
  },
  {
    label: "WEB FORM FOLLOW-UP",
    trigger: "Patient submitted contact form · 12:14 PM",
    messages: [
      { from: "biz", text: "Hi! We got your message from our website. Thanks for reaching out to Center City Dental. What can we help you with?" },
      { from: "patient", text: "Looking for a new dentist, need a checkup and x-rays" },
      { from: "biz", text: "Happy to help! Are mornings or afternoons generally better for you?" },
      { from: "patient", text: "Afternoons work. Wednesday or Thursday if possible" },
    ],
    result: "Web inquiry converted same day",
    resultIcon: "check",
  },
  {
    label: "POST-VISIT REVIEW REQUEST",
    trigger: "2 hours after appointment",
    messages: [
      { from: "biz", text: "Hi! Thanks for coming in today. We hope your visit went well. If you have a moment, a quick Google review means a lot to independent practices like ours." },
      { from: "patient", text: "Of course! Dr. Patel was great, very thorough" },
      { from: "biz", text: "So glad to hear it. Here is the direct link: [review link]" },
      { from: "patient", text: "Done! Left you 5 stars" },
    ],
    result: "5-star review collected",
    resultIcon: "star",
  },
]

function ResultIcon({ type }: { type: string }) {
  if (type === "calendar") return (
    <svg width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="1" y="2" width="12" height="11" rx="2" stroke="#c9a84c" strokeWidth="1.5" />
      <path d="M1 6h12M5 1v2M9 1v2" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
  if (type === "star") return (
    <svg width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M7 1l1.5 4.5H13l-4 2.8 1.5 4.7L7 10l-4.5 3 1.5-4.7-4-2.8h5.5z" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
  return (
    <svg width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7l4 4 6-6" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      data-theme="light"
      className="section-pad relative overflow-hidden"
      style={{ background: "var(--ink)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 60%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <RevealDiv className="text-center mb-14">
          <p className="eyebrow mb-4">HOW IT WORKS IN PRACTICE</p>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 300, color: "var(--text-primary)" }}
          >
            <WordReveal segments={[
              { text: "Every opportunity," },
              { text: "followed up instantly.", italic: true, color: "var(--gold)", fontWeight: 400 },
            ]} />
          </h2>
          <p className="font-body text-sm mt-3" style={{ color: "var(--text-muted)" }}>
            Illustrative examples of what a patient receives when your practice uses Presency.
          </p>
        </RevealDiv>

        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory md:snap-none -mx-6 md:mx-0 px-6 md:px-0">
          {conversations.map((convo, i) => (
            <RevealDiv
              key={convo.label}
              delay={i * 120}
              className="flex flex-col rounded-2xl overflow-hidden shrink-0 md:shrink snap-start"
              style={{
                background: "rgba(255,255,255,0.9)",
                border: "1px solid rgba(201,168,76,0.18)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)",
                width: "min(85vw, 360px)",
                minWidth: "min(85vw, 360px)",
              }}
            >
              <div className="p-6 pb-3">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <p className="font-mono-label" style={{ fontSize: "9px", color: "var(--text-muted)", letterSpacing: "0.1em" }}>
                    {convo.label}
                  </p>
                  <div
                    className="shrink-0 rounded-full px-2 py-0.5 font-mono-label"
                    style={{ background: "rgba(201,168,76,0.1)", fontSize: "9px", color: "var(--gold)", letterSpacing: "0.08em" }}
                  >
                    ILLUSTRATIVE
                  </div>
                </div>

                <div
                  className="rounded-lg px-3 py-2 mb-4 flex items-center gap-2"
                  style={{ background: "rgba(13,12,10,0.04)", border: "1px solid rgba(13,12,10,0.07)" }}
                >
                  <svg width="10" height="10" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M7 1a6 6 0 1 0 0 12A6 6 0 0 0 7 1zM7 4v4l2.5 1.5" stroke="rgba(13,12,10,0.4)" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span className="font-mono-label" style={{ fontSize: "9px", color: "rgba(13,12,10,0.45)", letterSpacing: "0.08em" }}>
                    {convo.trigger.toUpperCase()}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  {convo.messages.map((msg, mi) => (
                    <div key={mi} className={`flex ${msg.from === "biz" ? "justify-start" : "justify-end"}`}>
                      <div
                        className="font-body text-xs leading-relaxed px-3 py-2 rounded-2xl"
                        style={{
                          maxWidth: "82%",
                          background: msg.from === "biz" ? "rgba(201,168,76,0.1)" : "rgba(13,12,10,0.07)",
                          color: "var(--text-secondary)",
                          borderRadius: msg.from === "biz" ? "4px 16px 16px 16px" : "16px 4px 16px 16px",
                        }}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ height: "1px", background: "rgba(201,168,76,0.12)", margin: "0 1.5rem" }} />

              <div className="p-6 pt-4 flex-1" style={{ background: "rgba(201,168,76,0.04)" }}>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--gold)" }} />
                  <span className="font-mono-label" style={{ fontSize: "9px", color: "var(--gold)", letterSpacing: "0.1em" }}>
                    RESULT · via Presency
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <ResultIcon type={convo.resultIcon} />
                  <p className="font-body text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                    {convo.result}
                  </p>
                </div>
              </div>
            </RevealDiv>
          ))}
        </div>

        <RevealDiv delay={400}>
          <div
            className="mt-10 rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-5"
            style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.2)" }}
          >
            <div>
              <p className="font-display text-lg font-light mb-1" style={{ color: "var(--text-primary)" }}>
                See how this would work for your practice.
              </p>
              <p className="font-body text-sm" style={{ color: "var(--text-muted)" }}>
                We run a free Patient Capture Audit before recommending anything.
              </p>
            </div>
            <a
              href={CONTACT.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-medium text-sm px-6 py-3 rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0"
              style={{ background: "var(--gold)", color: "#0d0c0a" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#d4b05a" }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--gold)" }}
            >
              Book a free 15-min call
            </a>
          </div>
        </RevealDiv>
      </div>
    </section>
  )
}
