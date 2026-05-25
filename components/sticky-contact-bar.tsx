"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

export function StickyContactBar() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Don't show if dismissed this session
    if (sessionStorage.getItem("stickyBarDismissed")) {
      setDismissed(true)
      return
    }

    const handler = () => {
      // Show after scrolling past ~80% of first viewport height
      setVisible(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const handleDismiss = () => {
    setDismissed(true)
    sessionStorage.setItem("stickyBarDismissed", "1")
  }

  const show = visible && !dismissed

  return (
    <div
      aria-hidden={!show}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transform: show ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: show ? "auto" : "none",
      }}
    >
      <div
        style={{
          background: "rgba(13,12,10,0.97)",
          borderTop: "1px solid rgba(201,168,76,0.2)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: "0 -4px 32px rgba(0,0,0,0.5)",
        }}
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6"
          style={{ height: "56px", display: "flex", alignItems: "center", gap: "1rem" }}
        >
          {/* Left: contact info */}
          <div className="flex items-center gap-4 flex-1 min-w-0 overflow-hidden">
            {/* Mail icon */}
            <div
              className="shrink-0 hidden sm:flex w-8 h-8 rounded-lg items-center justify-center"
              style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                <rect x="1" y="3" width="13" height="9" rx="1.5" stroke="#c9a84c" strokeWidth="1.3" />
                <path d="M1 5l6.5 4.5L14 5" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </div>

            <div className="min-w-0">
              <p
                className="font-mono-label truncate"
                style={{ fontSize: "10px", letterSpacing: "0.1em", color: "var(--text-muted)" }}
              >
                QUESTIONS?
              </p>
              <a
                href="mailto:hello@presency.com"
                className="font-body text-sm font-medium truncate block transition-colors duration-200"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--gold)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")
                }
              >
                hello@presency.com
              </a>
            </div>

            {/* Divider */}
            <div
              className="hidden md:block h-7 w-px shrink-0"
              style={{ background: "rgba(201,168,76,0.12)" }}
            />

            {/* Calendly */}
            <div className="hidden md:block min-w-0">
              <p
                className="font-mono-label"
                style={{ fontSize: "10px", letterSpacing: "0.1em", color: "var(--text-muted)" }}
              >
                FREE 15-MIN CALL
              </p>
              <a
                href="https://calendly.com/397jtc/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm font-medium transition-colors duration-200"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--gold)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")
                }
              >
                Book on Calendly →
              </a>
            </div>
          </div>

          {/* Right: CTA + dismiss */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/contact"
              className="font-body font-medium text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap"
              style={{ background: "var(--gold)", color: "var(--ink)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--gold-light)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--gold)"
              }}
            >
              Start free trial
            </Link>

            <button
              onClick={handleDismiss}
              className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
                color: "var(--text-muted)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)"
                e.currentTarget.style.color = "var(--text-secondary)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.04)"
                e.currentTarget.style.color = "var(--text-muted)"
              }}
              aria-label="Dismiss"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
