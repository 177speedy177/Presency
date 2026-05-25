"use client"
import { useRef, useEffect } from "react"

export function RevealDiv({
  delay,
  className,
  style,
  children,
  onMouseEnter,
  onMouseLeave,
  dataTheme,
}: {
  delay?: number
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>
  dataTheme?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reveal = () => {
      setTimeout(() => {
        el.style.opacity = "1"
        el.style.transform = "translateY(0)"
      }, delay ?? 0)
    }

    // If already in or near viewport (handles direct anchor navigation), reveal immediately
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight * 1.1) {
      reveal()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal()
          observer.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px 40px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(24px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        ...style,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      data-theme={dataTheme}
    >
      {children}
    </div>
  )
}
