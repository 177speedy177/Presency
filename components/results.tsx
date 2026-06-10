"use client"
import { RevealDiv } from "@/components/ui/reveal-div"

// ── Problem section (replaces the old Results section) ────────────────────────
// Stats are real and cited. Do not add or change numbers without a verified source.

const stats = [
  {
    num: "85%",
    label:
      "of callers who can't reach a business on the first try will not call back. That patient is gone unless someone follows up first.",
    source: "Invoca",
    sourceHref: "https://www.invoca.com/blog/missed-call-statistics/",
  },
  {
    num: "98%",
    label:
      "of text messages are opened. Only 21% of emails are ever read, making a text the most reliable way to recover a missed caller instantly.",
    source: "Forbes",
    sourceHref: "https://www.forbes.com/advisor/business/sms-marketing-statistics/",
  },
]

function StatCard({ num, label, source, sourceHref }: {
  num: string; label: string; source: string; sourceHref: string
}) {
  return (
    <div
      className="rounded-xl p-6"
      style={{
        background: "var(--surface-card)",
        border: "1px solid rgba(201,168,76,0.18)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)"
        e.currentTarget.style.borderColor = "rgba(201,168,76,0.45)"
        e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.08)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)"
        e.currentTarget.style.borderColor = "rgba(201,168,76,0.18)"
        e.currentTarget.style.boxShadow = "none"
      }}
    >
      <div
        className="font-display mb-3 leading-none"
        style={{ fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 300, color: "var(--gold)" }}
      >
        {num}
      </div>
      <p className="font-body text-sm leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>
        {label}
      </p>
      <a
        href={sourceHref}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono-label transition-colors duration-200"
        style={{ fontSize: "10px", color: "var(--text-muted)" }}
        onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold)" }}
        onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)" }}
      >
        {source} ↗
      </a>
    </div>
  )
}

export function Problem() {
  return (
    <section
      id="problem"
      data-theme="light"
      className="section-pad relative overflow-hidden"
      style={{ background: "var(--ink)" }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 70% 10%, rgba(201,168,76,0.10) 0%, transparent 55%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-16">

          {/* Left: editorial copy */}
          <RevealDiv>
            <p className="eyebrow mb-5">THE PROBLEM</p>
            <h2
              className="font-display mb-6 leading-tight"
              style={{ fontSize: "clamp(1.75rem,4vw,3rem)", fontWeight: 300, color: "var(--text-primary)" }}
            >
              Your practice spends money to make the phone ring.{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 400 }}>
                Then no one answers.
              </em>
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Every ad, every referral, every Google search that ends with someone calling your practice is money you already spent. When that call goes to voicemail, or rings through during lunch, or comes in at 7pm after the front desk has left, that caller almost never tries again.
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                They call the practice listed right below you. The one that picked up, or followed up within minutes. The new-patient opportunity was yours. You paid for it. You just did not capture it.
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                This is the problem Presency fixes. Every missed call, every after-hours inquiry, every web form submission gets an instant, personal-feeling follow-up, so the opportunity stays with your practice instead of walking down the street.
              </p>
            </div>
          </RevealDiv>

          {/* Right: stats */}
          <RevealDiv delay={150} className="flex flex-col gap-5">
            <p className="eyebrow mb-1" style={{ color: "var(--text-muted)" }}>WHAT THE RESEARCH SHOWS</p>
            {stats.map((s, i) => (
              <StatCard key={i} {...s} />
            ))}
            <p className="font-body text-xs italic" style={{ color: "var(--text-muted)" }}>
              Stats are real and cited. We do not fabricate numbers.
            </p>
          </RevealDiv>
        </div>
      </div>
    </section>
  )
}
