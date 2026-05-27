"use client"
import { useRef } from "react"

export function MagneticWrapper({
  children,
  strength = 0.3,
  className,
  style,
}: {
  children: React.ReactNode
  strength?: number
  className?: string
  style?: React.CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const dx = (e.clientX - (r.left + r.width / 2)) * strength
    const dy = (e.clientY - (r.top + r.height / 2)) * strength
    el.style.transition = "transform 0.12s ease"
    el.style.transform = `translate(${dx}px, ${dy}px)`
  }

  const onMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transition = "transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
    el.style.transform = "translate(0, 0)"
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{ display: "inline-block", ...style }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  )
}
