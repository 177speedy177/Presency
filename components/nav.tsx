"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  useEffect(() => {
    const ids = ["services", "results", "faq"]
    const visible = new Set<string>()

    const observers = ids.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) visible.add(id)
          else visible.delete(id)
          setActiveSection(ids.find((s) => visible.has(s)) ?? "")
        },
        { threshold: 0.15, rootMargin: "-64px 0px -35% 0px" }
      )
      obs.observe(el)
      return obs
    })

    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  const links = [
    { href: "#services", label: "Services" },
    { href: "#results", label: "Results" },
    { href: "#faq", label: "FAQ" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      data-theme="dark"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "rgba(13,12,10,0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(201,168,76,0.12)",
        boxShadow: scrolled
          ? "0 4px 24px rgba(0,0,0,0.4)"
          : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
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
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => {
              const isActive = l.href.startsWith("#") && l.href === `#${activeSection}`
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-body text-sm nav-link transition-colors duration-200"
                  style={isActive ? { color: "var(--gold)" } : undefined}
                >
                  {l.label}
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/free-audit"
              className="font-body text-sm px-5 py-2 rounded-lg border transition-all duration-200 cursor-pointer"
              style={{
                borderColor: "var(--gold)",
                color: "var(--cream)",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.background = "var(--gold)"
                el.style.color = "var(--ink)"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.background = "transparent"
                el.style.color = "var(--cream)"
              }}
            >
              Free audit
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className="block w-5 h-0.5 transition-all duration-200"
              style={{
                background: "var(--gold)",
                transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : "none",
              }}
            />
            <span
              className="block w-5 h-0.5 transition-all duration-200"
              style={{
                background: "var(--gold)",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-0.5 transition-all duration-200"
              style={{
                background: "var(--gold)",
                transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className="md:hidden transition-all duration-300 overflow-hidden"
        style={{
          maxHeight: menuOpen ? "300px" : "0",
          borderTop: menuOpen ? "1px solid rgba(201,168,76,0.12)" : "none",
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map((l) => {
            const isActive = l.href.startsWith("#") && l.href === `#${activeSection}`
            return (
              <Link
                key={l.href}
                href={l.href}
                className="font-body text-sm py-1 cursor-pointer transition-colors duration-200"
                style={{ color: isActive ? "var(--gold)" : "var(--text-secondary)" }}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            )
          })}
          <Link
            href="/free-audit"
            className="font-body text-sm px-5 py-2.5 rounded-lg border text-center transition-all duration-200 cursor-pointer"
            style={{
              borderColor: "var(--gold)",
              color: "var(--cream)",
              background: "transparent",
            }}
            onClick={() => setMenuOpen(false)}
          >
            Free audit
          </Link>
        </div>
      </div>
    </nav>
  )
}
