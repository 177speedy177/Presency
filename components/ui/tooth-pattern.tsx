"use client"
import { useLayoutEffect, useRef, useState } from "react"

const TOOTH_PATH =
  "M12 2C9.5 2 8.7 3 7 3C5 3 3 4.5 3 7.5C3 10 4 11.5 4.8 14C5.5 16.5 5.8 22 7.5 22C9.5 22 8.5 16 12 16C15.5 16 14.5 22 16.5 22C18.2 22 18.5 16.5 19.2 14C20 11.5 21 10 21 7.5C21 4.5 19 3 17 3C15.3 3 14.5 2 12 2Z"

const DRIFT_CLASSES = ["tooth-drift-a", "tooth-drift-b", "tooth-drift-c"]

// Deterministic PRNG so a section's scatter is stable across renders
function mulberry32(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

type Tooth = { x: number; y: number; size: number; rot: number; op: number }

function generate(w: number, h: number, seed: number): Tooth[] {
  const rand = mulberry32(seed * 7919 + 1013)
  // Density scales with section height: roughly one tooth per 200px, capped
  const count = Math.max(2, Math.min(9, Math.round(h / 200)))
  const teeth: Tooth[] = []
  for (let i = 0; i < count; i++) {
    const size = 110 + rand() * 120
    // 34px y-margins cover rotation overhang (~14px) plus max drift (14px)
    const xMax = Math.max(w - size - 24, 0)
    const yMax = Math.max(h - size - 68, 0)
    // Best-candidate sampling: try several spots, keep the one farthest from
    // every placed tooth. Produces an even spread instead of random clumps.
    let best: { x: number; y: number } | null = null
    let bestDist = -1
    for (let c = 0; c < 12; c++) {
      const x = 12 + rand() * xMax
      const y = 34 + rand() * yMax
      const dist = teeth.length
        ? Math.min(
            ...teeth.map(t =>
              Math.hypot(t.x + t.size / 2 - (x + size / 2), t.y + t.size / 2 - (y + size / 2))
            )
          )
        : Infinity
      if (dist > bestDist) {
        bestDist = dist
        best = { x, y }
      }
    }
    if (!best) continue
    teeth.push({ x: best.x, y: best.y, size, rot: -40 + rand() * 80, op: 0.09 + rand() * 0.05 })
  }
  return teeth
}

export function ToothPattern({
  variant = 0,
  opacity = 1,
}: {
  /** Seed for this section's scatter; give adjacent sections different variants */
  variant?: number
  /** Multiplier on each tooth's base opacity */
  opacity?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [teeth, setTeeth] = useState<Tooth[]>([])

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () => {
      const { width, height } = el.getBoundingClientRect()
      if (width > 0 && height > 0) setTeeth(generate(width, height, variant))
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [variant])

  return (
    <div
      ref={ref}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
      data-tooth-pattern={variant}
    >
      {teeth.map((t, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={DRIFT_CLASSES[i % DRIFT_CLASSES.length]}
          style={{
            position: "absolute",
            top: `${t.y}px`,
            left: `${t.x}px`,
            width: `${t.size}px`,
            height: `${t.size}px`,
            transform: `rotate(${t.rot}deg)`,
          }}
        >
          <path
            d={TOOTH_PATH}
            fill="none"
            stroke="#b8922e"
            strokeOpacity={Math.min(t.op * opacity, 1)}
            strokeWidth="2.4"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      ))}
    </div>
  )
}
