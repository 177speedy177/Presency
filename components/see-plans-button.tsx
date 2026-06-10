"use client"
import { useState, useEffect } from "react"

export function SeePlansButton() {
  const [show, setShow] = useState(false)
  const [above, setAbove] = useState(true)

  useEffect(() => {
    const plansEl = document.getElementById("plans")
    if (!plansEl) return

    let scrolledEnough = false
    let plansInView = false

    const update = () => setShow(scrolledEnough && !plansInView)

    const onScroll = () => {
      scrolledEnough = window.scrollY > window.innerHeight * 0.4
      const rect = plansEl.getBoundingClientRect()
      setAbove(rect.top > window.innerHeight * 0.5)
      update()
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()

    const obs = new IntersectionObserver(
      ([entry]) => {
        plansInView = entry.isIntersecting
        update()
      },
      { threshold: 0.15, rootMargin: "-64px 0px 0px 0px" }
    )
    obs.observe(plansEl)

    return () => {
      window.removeEventListener("scroll", onScroll)
      obs.disconnect()
    }
  }, [])

  const scrollToPlans = () => {
    document.getElementById("plans")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div
      aria-hidden={!show}
      style={{
        position: "fixed",
        bottom: "calc(68px + env(safe-area-inset-bottom, 0px))",
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        zIndex: 99,
        pointerEvents: show ? "auto" : "none",
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
      }}
    >
      <button
        onClick={scrollToPlans}
        className="font-mono-label cursor-pointer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "7px",
          background: "rgba(13,12,10,0.9)",
          border: "1px solid rgba(201,168,76,0.35)",
          borderRadius: "100px",
          padding: "9px 18px",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          color: "#c9a84c",
          fontSize: "10px",
          letterSpacing: "0.13em",
          boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
          whiteSpace: "nowrap",
          transition: "border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(201,168,76,0.6)"
          e.currentTarget.style.background = "rgba(28,24,16,0.96)"
          e.currentTarget.style.boxShadow = "0 4px 24px rgba(201,168,76,0.18)"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)"
          e.currentTarget.style.background = "rgba(13,12,10,0.9)"
          e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.4)"
        }}
        aria-label={above ? "Scroll down to plans" : "Scroll up to plans"}
      >
        {!above && (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M5 8.5V1.5M1.5 5l3.5-3.5L8.5 5" stroke="#c9a84c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        SEE PLANS
        {above && (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M5 1.5v7M1.5 5l3.5 3.5L8.5 5" stroke="#c9a84c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
    </div>
  )
}
