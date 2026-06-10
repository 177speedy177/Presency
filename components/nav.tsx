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
    const ids = ["plans", "faq"]
    const visible = new Set<string>()
    const observers = ids.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) visible.add(id)
        else visible.delete(id)
        setActiveSection(ids.find(s => visible.has(s)) ?? "")
      }, { threshold: 0.15, rootMargin: "-64px 0px -35% 0px" })
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  const links = [
    { href: "#plans", label: "Plans" },
    { href: "#faq", label: "FAQ" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  const bg = scrolled || menuOpen
    ? "rgba(247,244,239,0.96)"
    : "rgba(247,244,239,0.7)"

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: bg,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(201,168,76,0.18)",
        boxShadow: scrolled ? "0 2px 20px rgba(28,24,16,0.08)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer" onClick={() => setMenuOpen(false)}>
            <span
              data-nav-logo
              className="font-display"
              style={{
                fontWeight: 400,
                fontSize: "1.55rem",
                letterSpacing: "-0.025em",
                background: "linear-gradient(135deg, #b8922e 0%, #c9a84c 30%, #e8c96d 55%, #c9a84c 75%, #8a6820 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                paddingBottom: "3px",
              }}
            >
              Presency
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => {
              const isActive = l.href.startsWith("#") && l.href === `#${activeSection}`
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-body text-sm transition-colors duration-200"
                  style={{ color: isActive ? "#7a5c10" : "rgba(28,24,16,0.6)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#1c1810" }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = isActive ? "#7a5c10" : "rgba(28,24,16,0.6)" }}
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
              style={{ borderColor: "#c9a84c", color: "#1c1810", background: "transparent" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#c9a84c"; e.currentTarget.style.color = "#0d0c0a" }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#1c1810" }}
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
            {[
              menuOpen ? "rotate(45deg) translate(3px, 3px)" : "none",
              menuOpen ? "none" : "none",
              menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "none",
            ].map((transform, idx) => (
              <span
                key={idx}
                className="block w-5 h-0.5 transition-all duration-200"
                style={{
                  background: "#1c1810",
                  transform,
                  opacity: idx === 1 && menuOpen ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className="md:hidden transition-all duration-300 overflow-hidden"
        style={{
          maxHeight: menuOpen ? "320px" : "0",
          borderTop: menuOpen ? "1px solid rgba(201,168,76,0.15)" : "none",
          background: "rgba(247,244,239,0.98)",
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-sm py-1 cursor-pointer transition-colors duration-200"
              style={{ color: "rgba(28,24,16,0.7)" }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/free-audit"
            className="font-body text-sm px-5 py-2.5 rounded-lg border text-center transition-all duration-200 cursor-pointer"
            style={{ borderColor: "#c9a84c", color: "#1c1810", background: "transparent" }}
            onClick={() => setMenuOpen(false)}
          >
            Free audit
          </Link>
        </div>
      </div>
    </nav>
  )
}
