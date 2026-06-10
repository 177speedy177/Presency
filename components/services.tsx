"use client"
import { RevealDiv } from "@/components/ui/reveal-div"

const services = [
  {
    num: "01",
    title: "Never miss a new patient",
    body: "Every missed call and after-hours call gets an instant, automatic text follow-up from your practice's own number. The patient stays in your funnel instead of calling the practice next door.",
    note: null,
  },
  {
    num: "02",
    title: "Turn web inquiries into appointments",
    body: "Every contact form submission gets an immediate follow-up text. All replies, whether from a missed call or a web form, land in one unified inbox your front desk can manage from any browser.",
    note: null,
  },
  {
    num: "03",
    title: "Build a 5-star reputation automatically",
    body: "After every visit, your practice sends a warm, automatic review request. Reviews accumulate without anyone on your team having to remember to ask.",
    note: null,
  },
  {
    num: "04",
    title: "Bring patients back",
    body: "Recall and reactivation campaigns reach patients who are due for their next visit or who have not been in for a while, turning a dormant record into a booked appointment.",
    note: "Part of the Practice Growth plan. Requires patient consent and active compliance setup.",
  },
  {
    num: "05",
    title: "Built for dental practices",
    body: "The system works with your existing phone number and practice management software. No new equipment, no new apps for staff, and no patient health information in any automated message.",
    note: null,
  },
]

export function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      data-theme="light"
      className="section-pad"
      style={{ background: "var(--ink)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealDiv className="mb-16">
          <p className="eyebrow mb-4">WHAT WE DO</p>
          <h2
            className="font-display mb-4 max-w-2xl"
            style={{ fontSize: "clamp(1.75rem,4vw,3rem)", fontWeight: 300, color: "var(--text-primary)" }}
          >
            Five outcomes.{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 400 }}>
              Zero patient leaks.
            </em>
          </h2>
          <p className="font-body text-base max-w-xl" style={{ color: "var(--text-secondary)" }}>
            Each outcome is a specific place your practice was losing new patients. We close all of them.
          </p>
        </RevealDiv>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((s, i) => (
            <RevealDiv
              key={s.num}
              delay={i * 100}
              className="rounded-2xl p-7 flex flex-col"
              style={{
                background: "var(--surface-card)",
                border: "1px solid rgba(201,168,76,0.15)",
                transition: "border-color 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"
                e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.06)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              <span
                className="font-display mb-4 block"
                style={{ fontSize: "3rem", fontWeight: 100, color: "rgba(201,168,76,0.25)", lineHeight: 1 }}
              >
                {s.num}
              </span>
              <h3 className="font-display text-lg mb-3" style={{ fontWeight: 400, color: "var(--text-primary)" }}>
                {s.title}
              </h3>
              <p className="font-body text-sm leading-relaxed flex-1" style={{ color: "var(--text-secondary)" }}>
                {s.body}
              </p>
            </RevealDiv>
          ))}

          {/* Row 2: items 4 and 5 centered */}
          {services.slice(3).map((s, i) => (
            <RevealDiv
              key={s.num}
              delay={(i + 3) * 100}
              className="rounded-2xl p-7 flex flex-col"
              style={{
                background: "var(--surface-card)",
                border: "1px solid rgba(201,168,76,0.15)",
                transition: "border-color 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"
                e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.06)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              <span
                className="font-display mb-4 block"
                style={{ fontSize: "3rem", fontWeight: 100, color: "rgba(201,168,76,0.25)", lineHeight: 1 }}
              >
                {s.num}
              </span>
              <h3 className="font-display text-lg mb-3" style={{ fontWeight: 400, color: "var(--text-primary)" }}>
                {s.title}
              </h3>
              <p className="font-body text-sm leading-relaxed flex-1" style={{ color: "var(--text-secondary)" }}>
                {s.body}
              </p>
              {s.note && (
                <p
                  className="font-body text-xs italic mt-4 pt-4"
                  style={{
                    color: "var(--text-muted)",
                    borderTop: "1px solid rgba(201,168,76,0.1)",
                  }}
                >
                  {s.note}
                </p>
              )}
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  )
}
