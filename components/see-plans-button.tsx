"use client"
import { useState, useEffect } from "react"

export function SeePlansButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const section = document.getElementById("services")
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show only when section has scrolled fully above the viewport
        setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0)
      },
      { threshold: 0 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const scrollToPlans = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div
      aria-hidden={!visible}
      style={{
        position: "fixed",
        bottom: "72px",   // 56px bar + 16px gap
        left: "50%",
        transform: `translateX(-50%) translateY(${visible ? "0px" : "12px"})`,
        opacity: visible ? 1 : 0,
        zIndex: 99,
        transition: "opacity 0.3s ease, transform 0.3s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <button
        onClick={scrollToPlans}
        className="flex items-center gap-2 font-mono-label cursor-pointer"
        style={{
          background: "rgba(13,12,10,0.9)",
          border: "1px solid rgba(201,168,76,0.35)",
          borderRadius: "100px",
          padding: "9px 18px",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          color: "var(--gold)",
          fontSize: "10px",
          letterSpacing: "0.13em",
          boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
          whiteSpace: "nowrap",
          transition: "border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease",
          animation: "seePlansPulse 2.8s ease-in-out infinite",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(201,168,76,0.6)"
          e.currentTarget.style.background = "rgba(201,168,76,0.1)"
          e.currentTarget.style.boxShadow = "0 4px 24px rgba(201,168,76,0.2)"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)"
          e.currentTarget.style.background = "rgba(13,12,10,0.9)"
          e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.4)"
        }}
        aria-label="Scroll back to pricing plans"
      >
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
          <path d="M5.5 9.5V1.5M1.5 5.5l4-4 4 4" stroke="#c9a84c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        SEE PLANS
      </button>
      <style>{`
        @keyframes seePlansPulse {
          0%, 100% { box-shadow: 0 4px 24px rgba(0,0,0,0.4), 0 0 0 0 rgba(201,168,76,0); }
          50%       { box-shadow: 0 4px 24px rgba(0,0,0,0.4), 0 0 0 5px rgba(201,168,76,0.12); }
        }
      `}</style>
    </div>
  )
}
