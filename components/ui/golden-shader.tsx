"use client"
import { useEffect, useRef } from "react"
import * as THREE from "three"

// GoldenShader — fuses Celestial Bloom, Aurora Borealis, and Celestial Sphere
// into one animated gold background. Colour output remapped through the
// Presency gold palette: ink → gold-dark → gold → gold-light → cream.

const VERTEX = /* glsl */`
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`

const FRAGMENT = /* glsl */`
  precision highp float;
  uniform vec2  iResolution;
  uniform float iTime;
  uniform vec2  iMouse;

  float random(vec2 st) {
    return fract(sin(dot(st, vec2(12.9898, 78.233))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(random(i),               random(i + vec2(1.0, 0.0)), u.x),
      mix(random(i + vec2(0.0, 1.0)), random(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 6; i++) { v += a * noise(p); p *= 2.0; a *= 0.5; }
    return v;
  }

  float fbm4(vec2 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 4; i++) { v += a * noise(p); p *= 2.0; a *= 0.5; }
    return v;
  }

  vec3 goldPalette(float t) {
    t = clamp(t, 0.0, 1.0);
    vec3 c0 = vec3(0.051, 0.047, 0.039);
    vec3 c1 = vec3(0.541, 0.408, 0.125);
    vec3 c2 = vec3(0.788, 0.659, 0.298);
    vec3 c3 = vec3(0.910, 0.816, 0.541);
    vec3 c4 = vec3(0.980, 0.969, 0.949);
    if (t < 0.3) return mix(c0, c1, t / 0.3);
    if (t < 0.6) return mix(c1, c2, (t - 0.3) / 0.3);
    if (t < 0.8) return mix(c2, c3, (t - 0.6) / 0.2);
                 return mix(c3, c4, (t - 0.8) / 0.2);
  }

  void main() {
    vec2 uv  = (gl_FragCoord.xy * 2.0 - iResolution.xy) / iResolution.y;
    vec2 suv = gl_FragCoord.xy / iResolution.xy;
    float t  = iTime * 0.12;

    vec2  pA      = uv; pA.y += 0.55;
    float fA      = fbm4(vec2(pA.x * 1.8, pA.y + t));
    float fA2     = fbm4(vec2(pA.x * 2.6 - t * 0.6, pA.y * 1.2 + t * 0.4));
    float curtain  = smoothstep(0.08, 0.55, fA)  * smoothstep(1.4, -0.2, pA.y);
    float curtain2 = smoothstep(0.12, 0.50, fA2) * smoothstep(1.2, -0.4, pA.y);
    float aurora   = curtain * 0.7 + curtain2 * 0.45;

    float radius     = length(uv);
    float angle      = atan(uv.y, uv.x);
    float bloomNoise = fbm(uv * 3.2 + vec2(t * 0.35, t * 0.22));
    float bloomShape = sin(angle * 7.0 + t * 1.6) * 0.5
                     + sin(angle * 3.0 - t * 0.9) * 0.3;
    float distorted  = radius + bloomShape * 0.09 * bloomNoise;
    float bloomLayer = (1.0 - smoothstep(0.05, 0.75, distorted)) * bloomNoise * 1.4;

    float coreGlow = smoothstep(0.55, 0.0, radius);
    float halo     = smoothstep(0.85, 0.60, radius) * smoothstep(0.40, 0.65, radius) * 0.4;

    vec2  pC    = uv * 1.3;
    float nC1   = fbm(pC + vec2(t * 0.18, t * 0.09));
    float nebula = pow(fbm(pC + nC1 + vec2(t * 0.09, t * 0.05)), 1.8) * 1.6;

    float starRaw = random(suv * 780.0);
    float star    = step(0.9975, starRaw) * (0.5 + 0.5 * sin(iTime * (2.0 + starRaw * 8.0) + starRaw * 50.0));
    float bigRaw  = random(suv * 210.0);
    float bigStar = step(0.9992, bigRaw) * (0.6 + 0.4 * sin(iTime * 1.3 + bigRaw * 30.0));

    vec2  mouseN   = (iMouse - 0.5 * iResolution.xy) / iResolution.y;
    float flare    = smoothstep(0.45, 0.0, length(uv - mouseN)) * (aurora + bloomLayer) * 1.8;

    float intensity = aurora * 0.55 + bloomLayer * 0.70 + nebula * 0.35
                    + coreGlow * 1.10 + halo * 0.50 + flare * 0.40;

    vec3 color = goldPalette(intensity * 0.72);
    color = mix(color, vec3(0.99, 0.97, 0.93), star * 0.90);
    color = mix(color, vec3(1.0,  0.94, 0.82), bigStar * 0.75);
    color = mix(color, vec3(0.98, 0.87, 0.60), coreGlow * 0.35);
    color *= 1.0 - smoothstep(0.35, 1.3, radius * 0.85);
    color  = min(color, vec3(0.82, 0.72, 0.46));

    gl_FragColor = vec4(color, 1.0);
  }
`

interface GoldenShaderProps {
  className?: string
}

export function GoldenShader({ className }: GoldenShaderProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const container = containerRef.current
    if (!container) return

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true })
    const isMobile = window.innerWidth < 768
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.0 : 1.5))
    container.appendChild(renderer.domElement)

    const scene    = new THREE.Scene()
    const camera   = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const clock    = new THREE.Clock()
    const mouse    = new THREE.Vector2(0, 0)

    const uniforms = {
      iTime:       { value: 0 },
      iResolution: { value: new THREE.Vector2() },
      iMouse:      { value: new THREE.Vector2(0, 0) },
    }

    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      new THREE.ShaderMaterial({ vertexShader: VERTEX, fragmentShader: FRAGMENT, uniforms })
    )
    scene.add(mesh)

    const onResize = () => {
      const w = container.clientWidth, h = container.clientHeight
      renderer.setSize(w, h)
      uniforms.iResolution.value.set(w, h)
    }
    onResize()
    window.addEventListener("resize", onResize, { passive: true })

    // RAF-throttled mouse handler — updates at most once per frame
    let rafPending = false
    const onMouse = (e: MouseEvent) => {
      if (rafPending) return
      rafPending = true
      requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect()
        mouse.x = e.clientX - rect.left
        mouse.y = container.clientHeight - (e.clientY - rect.top)
        uniforms.iMouse.value.copy(mouse)
        rafPending = false
      })
    }
    window.addEventListener("mousemove", onMouse, { passive: true })

    let rafId: number
    const animate = () => {
      rafId = requestAnimationFrame(animate)
      uniforms.iTime.value = clock.getElapsedTime()
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", onResize)
      window.removeEventListener("mousemove", onMouse)
      renderer.setAnimationLoop(null)
      const canvas = renderer.domElement
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas)
      mesh.material.dispose()
      mesh.geometry.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={className ?? "w-full h-full absolute inset-0"}
      aria-hidden="true"
    />
  )
}
