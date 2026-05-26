"use client"
import { useEffect, useRef } from "react"

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let current = 0
    let target = 0
    let rafId: number
    let running = false

    const getTarget = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      return docHeight > 0 ? window.scrollY / docHeight : 0
    }

    const animate = () => {
      current += (target - current) * 0.12
      if (barRef.current) barRef.current.style.transform = `scaleX(${current})`

      if (Math.abs(target - current) > 0.0005) {
        rafId = requestAnimationFrame(animate)
      } else {
        current = target
        if (barRef.current) barRef.current.style.transform = `scaleX(${current})`
        running = false
      }
    }

    const onScroll = () => {
      target = getTarget()
      if (!running) {
        running = true
        rafId = requestAnimationFrame(animate)
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      ref={barRef}
      aria-hidden="true"
      className="fixed top-0 left-0 z-[200] h-[2px] w-full pointer-events-none"
      style={{
        transform: "scaleX(0)",
        transformOrigin: "left center",
        background: "linear-gradient(90deg, #c9a84c, #f5dfa0 50%, #c9a84c)",
        boxShadow: "0 0 8px rgba(201,168,76,0.55)",
      }}
    />
  )
}
