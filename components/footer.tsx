"use client"
import Link from "next/link"
import { CONTACT } from "@/lib/content"

export function Footer() {
  return (
    <footer
      className="py-14"
      style={{
        background: "#0a0908",
        borderTop: "1px solid rgba(201,168,76,0.15)",
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
              Websites, Google, and reputation for
              <br />
              local businesses.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            {[
              {
                heading: "SERVICES",
                links: [
                  { href: "/#what-we-do", label: "Websites" },
                  { href: "/#what-we-do", label: "Google Business Profile" },
                  { href: "/#what-we-do", label: "Reviews & Reputation" },
                  { href: "/#contact", label: "Contact" },
                ],
              },
              {
                heading: "COMPANY",
                links: [
                  { href: "/about", label: "About" },
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
                    <Link key={l.label} href={l.href} className="font-body text-sm link-gold">
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
            <div className="flex flex-col gap-2">
              <a href={`mailto:${CONTACT.email}`} className="font-body text-sm link-gold">
                {CONTACT.email}
              </a>
              <a
                href={CONTACT.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm link-gold"
              >
                Book a quick intro call
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row justify-between gap-2"
          style={{ borderTop: "1px solid rgba(201,168,76,0.06)" }}
        >
          <p className="font-mono-label text-xs" style={{ color: "var(--text-muted)" }}>
            &copy; {new Date().getFullYear()} Presency. All rights reserved.
          </p>
          <p className="font-mono-label text-xs" style={{ color: "var(--text-muted)", opacity: 0.6 }}>
            For local businesses
          </p>
        </div>
      </div>
    </footer>
  )
}
