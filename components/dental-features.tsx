"use client"
import { RevealDiv } from "@/components/ui/reveal-div"
import { SITE_CONFIG } from "@/lib/content"

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 2a9 9 0 1 0 0 18A9 9 0 0 0 11 2zM11 6v5l3 3" stroke="#c9a84c" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Works with your existing phone number",
    body: "No call forwarding, no new phone lines, no hardware. The system layers on top of your current number so your patients always see the same number they already have.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="16" height="12" rx="2" stroke="#c9a84c" strokeOpacity="0.7" strokeWidth="1.5" />
        <path d="M7 9h8M7 13h5" stroke="#c9a84c" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Works alongside your practice software",
    body: "Dentrix, Open Dental, Eaglesoft, or anything else. Because the system operates at the phone and web-form layer, it does not touch your PMS and requires no integration or IT work.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 3l1.8 5.4H18l-4.5 3.3 1.7 5.3L11 14l-4.2 3 1.7-5.3L4 8.4h5.2z" stroke="#c9a84c" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "No new equipment or staff training",
    body: "Your team does not download an app or learn a new system. They access the unified inbox from any browser. Onboarding is a 30-minute walkthrough, not a week of training.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 3C6.58 3 3 6.58 3 11s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" stroke="#c9a84c" strokeOpacity="0.7" strokeWidth="1.5" />
        <path d="M8 11l2 2 4-4" stroke="#c9a84c" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "No patient health information in automated messages",
    body: "Automated follow-up messages are appointment-invitation messages only. They contain no protected health information. Anything involving clinical details is routed to your front desk.",
  },
]

export function DentalFeatures() {
  return (
    <section
      id="dental-features"
      data-theme="light"
      className="section-pad"
      style={{ background: "var(--ink)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: heading + compliance block */}
          <RevealDiv>
            <p className="eyebrow mb-5">BUILT FOR DENTAL PRACTICES</p>
            <h2
              className="font-display mb-6 leading-tight"
              style={{ fontSize: "clamp(1.75rem,3.5vw,2.75rem)", fontWeight: 300, color: "var(--text-primary)" }}
            >
              Fits your practice{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 400 }}>
                as it already runs.
              </em>
            </h2>
            <p className="font-body text-base leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>
              Independent dental practices have existing workflows, existing software, and staff who are already stretched. This system is designed to add capability without adding complexity.
            </p>

            {/* Compliance block — language controlled by SITE_CONFIG.HIPAA_ACTIVE */}
            <div
              className="rounded-xl p-6"
              style={{
                background: "rgba(201,168,76,0.05)",
                border: "1px solid rgba(201,168,76,0.18)",
              }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M7 1l5 2v4c0 3-2.5 5.5-5 6C4.5 12.5 2 10 2 7V3l5-2z" stroke="#c9a84c" strokeWidth="1.3" strokeLinejoin="round" />
                    <path d="M5 7l1.5 1.5L9 5.5" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-body text-sm font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                    {SITE_CONFIG.HIPAA_ACTIVE
                      ? "HIPAA-compliant. Business Associate Agreement included."
                      : "Built around HIPAA requirements."}
                  </p>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {SITE_CONFIG.HIPAA_ACTIVE
                      ? "The system operates on HIPAA-compliant infrastructure. A signed Business Associate Agreement is included with every engagement. We are a business associate of your practice."
                      : "The system is designed from the ground up to keep patient health information out of automated messages. Every workflow is built around this principle. Practices handling protected health information should confirm compliance requirements with their own counsel."}
                  </p>
                </div>
              </div>
            </div>
          </RevealDiv>

          {/* Right: feature list */}
          <RevealDiv delay={150} className="flex flex-col gap-7">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.15)" }}
                >
                  {f.icon}
                </div>
                <div>
                  <p className="font-body text-sm font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                    {f.title}
                  </p>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </RevealDiv>
        </div>
      </div>
    </section>
  )
}
