"use client"
import { RevealDiv } from "@/components/ui/reveal-div"
import { ToothPattern } from "@/components/ui/tooth-pattern"
import { SITE_CONFIG } from "@/lib/content"

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 2a9 9 0 1 0 0 18A9 9 0 0 0 11 2zM11 6v5l3 3" stroke="#7a5c10" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Works with your existing phone number",
    body: "Your practice phone number stays the same. No new phone lines, no hardware. We handle the setup, and your patients see your practice number on every follow-up message.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="16" height="12" rx="2" stroke="#7a5c10" strokeWidth="1.5" />
        <path d="M7 9h8M7 13h5" stroke="#7a5c10" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Works alongside your practice software",
    body: "Dentrix, Open Dental, Eaglesoft, or anything else. Patient Capture operates at the phone and web-form layer, so it needs no integration or IT work. Growth campaigns run on a secure patient list export that you review and approve.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 3l1.8 5.4H18l-4.5 3.3 1.7 5.3L11 14l-4.2 3 1.7-5.3L4 8.4h5.2z" stroke="#7a5c10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "No new equipment or extended staff training",
    body: "Your team doesn't download an app or learn a new system. They access the unified inbox from any browser. Onboarding is a 30-minute walkthrough, not a week of training.",
  },
]

export function DentalFeatures() {
  return (
    <section
      id="dental-features"
      data-theme="light"
      className="section-pad relative overflow-hidden"
      style={{ background: "#f0ece3" }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 50% at 8% 100%, rgba(201,168,76,0.07) 0%, transparent 55%)" }} />
        <ToothPattern variant={0} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: heading + compliance block */}
          <RevealDiv>
            <p className="font-mono-label mb-5" style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#7a5c10" }}>
              BUILT FOR DENTAL PRACTICES
            </p>
            <h2
              className="font-display mb-6 leading-tight"
              style={{ fontSize: "clamp(1.75rem,4vw,3rem)", fontWeight: 300, color: "#1c1810" }}
            >
              Fits your practice{" "}
              <em style={{ fontStyle: "italic", color: "#7a5c10", fontWeight: 400 }}>
                as it already runs.
              </em>
            </h2>
            <p className="font-body text-base leading-relaxed mb-10" style={{ color: "rgba(28,24,16,0.65)" }}>
              Independent dental practices have existing workflows, existing software, and staff who are already stretched. This system is designed to add capability without adding complexity.
            </p>

            {/* Compliance & Trust block — single home for all compliance claims */}
            <div
              className="rounded-xl p-6"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(201,168,76,0.22)",
                boxShadow: "0 4px 20px rgba(28,24,16,0.05)",
              }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.22)" }}
                >
                  <svg width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M7 1l5 2v4c0 3-2.5 5.5-5 6C4.5 12.5 2 10 2 7V3l5-2z" stroke="#7a5c10" strokeWidth="1.3" strokeLinejoin="round" />
                    <path d="M5 7l1.5 1.5L9 5.5" stroke="#7a5c10" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-body text-sm font-semibold mb-1" style={{ color: "#1c1810" }}>
                    {SITE_CONFIG.COMPLIANCE_LIVE
                      ? "Built on HIPAA-compliant infrastructure. Business Associate Agreement provided to every practice."
                      : "Built around HIPAA requirements."}
                  </p>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(28,24,16,0.65)" }}>
                    {SITE_CONFIG.COMPLIANCE_LIVE
                      ? "The system operates on HIPAA-compliant infrastructure. A signed Business Associate Agreement is included with every engagement. No patient health information travels through automated messages. Anything involving clinical details is handled by your front desk."
                      : "The system is designed to keep patient health information out of automated messages. Every workflow is built around this principle. Practices handling protected health information should confirm compliance requirements with their own counsel."}
                  </p>
                </div>
              </div>
              <p className="font-body text-xs italic" style={{ color: "rgba(28,24,16,0.4)", paddingTop: "0.75rem", borderTop: "1px solid rgba(28,24,16,0.08)" }}>
                Practices handling protected health information should confirm compliance requirements with their own counsel.
              </p>
            </div>
          </RevealDiv>

          {/* Right: feature list */}
          <RevealDiv delay={150} className="flex flex-col gap-8">
            {features.map(f => (
              <div key={f.title} className="flex gap-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}
                >
                  {f.icon}
                </div>
                <div>
                  <p className="font-body text-sm font-semibold mb-1" style={{ color: "#1c1810" }}>
                    {f.title}
                  </p>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(28,24,16,0.65)" }}>
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
