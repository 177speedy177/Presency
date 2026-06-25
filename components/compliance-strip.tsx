"use client"

const badges = [
  {
    icon: (
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M7 1l5 2v4c0 3-2.5 5.5-5 6C4.5 12.5 2 10 2 7V3l5-2z" stroke="#c9a84c" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M5 7l1.5 1.5L9 5.5" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Locally Focused",
  },
  {
    icon: (
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <rect x="2" y="5" width="10" height="7" rx="1.5" stroke="#c9a84c" strokeWidth="1.3" />
        <path d="M5 5V3.5a2 2 0 0 1 4 0V5" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    label: "Built for Small Business",
  },
  {
    icon: (
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <circle cx="7" cy="7" r="5.5" stroke="#c9a84c" strokeWidth="1.3" />
        <path d="M5 7l1.5 1.5L9 5.5" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Done-for-You, Start to Finish",
  },
  {
    icon: (
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M7 2C4.24 2 2 4.24 2 7s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 2.5v2.75l1.75 1.75" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Direct Founder Access",
  },
]

function BadgeItem({ b }: { b: (typeof badges)[number] }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "7px", flexShrink: 0 }}>
      {b.icon}
      <span
        className="font-mono-label"
        style={{ fontSize: "10px", letterSpacing: "0.1em", color: "rgba(201,168,76,0.85)", whiteSpace: "nowrap" }}
      >
        {b.label.toUpperCase()}
      </span>
    </div>
  )
}

export function ComplianceStrip() {
  return (
    <div
      role="region"
      aria-label="Why Presency"
      style={{
        background: "#13110e",
        borderTop: "1px solid rgba(201,168,76,0.15)",
        borderBottom: "1px solid rgba(201,168,76,0.15)",
        padding: "10px 0",
        overflow: "hidden",
      }}
    >
      {/* Desktop: static centered row */}
      <div
        className="hidden sm:flex max-w-7xl mx-auto px-6"
        style={{ alignItems: "center", justifyContent: "center", flexWrap: "wrap", gap: "24px 36px" }}
      >
        {badges.map((b) => <BadgeItem key={b.label} b={b} />)}
      </div>

      {/* Mobile: infinite marquee */}
      <div className="sm:hidden" style={{ position: "relative" }}>
        <div style={{ display: "flex", gap: "36px", animation: "complianceMarquee 18s linear infinite", width: "max-content" }}>
          {[...badges, ...badges].map((b, i) => <BadgeItem key={i} b={b} />)}
        </div>
        <style>{`
          @keyframes complianceMarquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </div>
  )
}
