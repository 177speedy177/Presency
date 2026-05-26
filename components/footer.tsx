"use client"
import Link from "next/link"

export function Footer() {
  return (
    <footer
      data-theme="light"
      className="py-14"
      style={{
        background: "var(--ink-2)",
        borderTop: "1px solid rgba(201,168,76,0.2)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="mb-3">
              <span
                className="font-display leading-none"
                style={{
                  fontWeight: 400,
                  fontSize: "1.55rem",
                  letterSpacing: "-0.025em",
                  background: "linear-gradient(135deg, #f5dfa0 0%, #c9a84c 38%, #e8d08a 62%, #b8922e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 10px rgba(201,168,76,0.28))",
                }}
              >
                Presency
              </span>
            </div>
            <p className="font-body text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Online performance for local businesses.
              <br />
              Websites built. Reviews handled.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            {[
              {
                heading: "SERVICES",
                links: [
                  { href: "#services", label: "Pricing" },
                  { href: "#results", label: "Results" },
                  { href: "#faq", label: "FAQ" },
                ],
              },
              {
                heading: "COMPANY",
                links: [
                  { href: "/contact", label: "Contact" },
                  { href: "/privacy", label: "Privacy Policy" },
                  { href: "/terms", label: "Terms of Service" },
                ],
              },
            ].map((group) => (
              <div key={group.heading}>
                <p className="eyebrow mb-3" style={{ color: "var(--text-muted)", fontSize: "10px" }}>
                  {group.heading}
                </p>
                <nav className="flex flex-col gap-2">
                  {group.links.map((l) => (
                    <Link key={l.href} href={l.href} className="font-body text-sm link-gold">
                      {l.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow mb-3" style={{ color: "var(--text-muted)", fontSize: "10px" }}>
              REACH US
            </p>
            <a
              href="mailto:hello@getpresency.com"
              className="font-body text-sm link-gold"
            >
              hello@getpresency.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row justify-between gap-2"
          style={{ borderTop: "1px solid rgba(201,168,76,0.06)" }}
        >
          <p className="font-mono-label text-xs" style={{ color: "var(--text-muted)" }}>
            © 2026 Presency. Made in Philadelphia, PA.
          </p>
          <p className="font-mono-label text-xs" style={{ color: "var(--text-muted)", opacity: 0.6 }}>
            From $199/month · No contracts
          </p>
        </div>
      </div>
    </footer>
  )
}
