"use client"
import { RevealDiv } from "@/components/ui/reveal-div"

const stats = [
  {
    num: "85%",
    label: "of callers who can't reach a business on the first try will not call back. That patient is gone unless someone follows up first.",
    source: "Invoca",
    sourceHref: "https://www.invoca.com/blog/missed-call-statistics/",
  },
  {
    num: "5 min",
    label: "is the window before a new-patient lead goes cold. Businesses that follow up within 5 minutes are 100 times more likely to make contact. After 30 minutes, the opportunity is effectively gone.",
    source: "Harvard Business Review",
    sourceHref: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads",
  },
  {
    num: "98%",
    label: "of text messages are opened. Only 21% of emails are ever read, making a text the most reliable way to recover a missed caller instantly.",
    source: "Forbes",
    sourceHref: "https://www.forbes.com/advisor/business/sms-marketing-statistics/",
  },
]

function StatBlock({ num, label, source, sourceHref, last }: {
  num: string; label: string; source: string; sourceHref: string; last?: boolean
}) {
  return (
    <div
      className="flex gap-6 lg:gap-8 items-start py-7"
      style={{ borderBottom: last ? "none" : "1px solid rgba(28,24,16,0.1)" }}
    >
      <div
        className="font-display leading-none shrink-0"
        style={{ fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)", fontWeight: 300, color: "#1c1810", letterSpacing: "-0.03em", minWidth: "140px" }}
      >
        {num}
      </div>
      <div className="pt-1">
        <p className="font-body text-sm leading-relaxed mb-3" style={{ color: "rgba(28,24,16,0.65)" }}>
          {label}
        </p>
        <a
          href={sourceHref}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono-label transition-colors duration-200"
          style={{ fontSize: "10px", letterSpacing: "0.1em", color: "rgba(28,24,16,0.38)" }}
          onMouseEnter={e => { e.currentTarget.style.color = "#7a5c10" }}
          onMouseLeave={e => { e.currentTarget.style.color = "rgba(28,24,16,0.38)" }}
        >
          SOURCE: {source.toUpperCase()} ↗
        </a>
      </div>
    </div>
  )
}

export function Problem() {
  return (
    <section
      id="problem"
      data-theme="light"
      className="section-pad relative overflow-hidden"
      style={{ background: "#f7f4ef" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left: editorial copy */}
          <RevealDiv>
            <p className="font-mono-label mb-5" style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#7a5c10" }}>
              THE PROBLEM
            </p>
            <h2
              className="font-display mb-6 leading-tight"
              style={{ fontSize: "clamp(1.75rem,4vw,3rem)", fontWeight: 300, color: "#1c1810" }}
            >
              Your marketing budget earns the call.{" "}
              <em style={{ fontStyle: "italic", color: "#7a5c10", fontWeight: 400 }}>
                Your response earns the patient.
              </em>
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed" style={{ color: "rgba(28,24,16,0.65)" }}>
                Every ad, every referral, every Google search that ends with someone calling your practice is money you already spent. When that call goes to voicemail, or rings through during lunch, or comes in at 7pm after the front desk has left, that caller almost never tries again.
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: "rgba(28,24,16,0.65)" }}>
                They call the practice listed right below you. The one that picked up, or followed up within minutes. The new-patient opportunity was yours. You paid for it. You just did not capture it.
              </p>
            </div>
          </RevealDiv>

          {/* Right: editorial stats */}
          <RevealDiv delay={150}>
            <p className="font-mono-label mb-2" style={{ fontSize: "10px", letterSpacing: "0.12em", color: "rgba(28,24,16,0.4)" }}>
              WHAT THE RESEARCH SHOWS
            </p>
            {stats.map((s, i) => (
              <StatBlock key={i} {...s} last={i === stats.length - 1} />
            ))}
          </RevealDiv>

        </div>
      </div>
    </section>
  )
}
