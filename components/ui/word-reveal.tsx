"use client"
import { useEffect, useRef, useState } from "react"

export interface WordRevealSegment {
  text: string
  italic?: boolean
  color?: string
  fontWeight?: number
}

export function WordReveal({
  segments,
  className,
  style,
  stagger = 55,
  threshold = 0.3,
}: {
  segments: WordRevealSegment[]
  className?: string
  style?: React.CSSProperties
  stagger?: number
  threshold?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true)
      return
    }
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  const words = segments.flatMap((seg) =>
    seg.text.trim().split(/\s+/).map((word) => ({
      word,
      italic: seg.italic,
      color: seg.color,
      fontWeight: seg.fontWeight,
    }))
  )

  return (
    <span ref={ref} className={className} style={style}>
      {words.map((w, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            overflow: "hidden",
            paddingBottom: "0.1em",
            marginBottom: "-0.1em",
            verticalAlign: "bottom",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontStyle: w.italic ? "italic" : "inherit",
              color: w.color,
              fontWeight: w.fontWeight,
              transform: revealed ? "translateY(0)" : "translateY(112%)",
              transition: `transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${i * stagger}ms`,
            }}
          >
            {w.word}{i < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </span>
  )
}
