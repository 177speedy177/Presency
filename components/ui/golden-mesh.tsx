"use client"
import { MeshGradient } from "@paper-design/shaders-react"

const GOLD_COLORS = [
  "#0d0c0a",
  "#12100a",
  "#2e1e06",
  "#6b4312",
  "#a87228",
  "#c9a84c",
  "#e8d08a",
]

interface GoldenMeshProps {
  className?: string
}

export function GoldenMesh({ className }: GoldenMeshProps) {
  return (
    <MeshGradient
      className={className}
      colors={GOLD_COLORS}
      speed={1.4}
      distortion={0.4}
      swirl={0.28}
      maxPixelCount={180000}
      minPixelRatio={1}
    />
  )
}
