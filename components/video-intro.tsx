"use client"
import { useState } from "react"
import Image from "next/image"
import { RevealDiv } from "@/components/ui/reveal-div"
import { ToothPattern } from "@/components/ui/tooth-pattern"

export function FounderNote() {
  const [expanded, setExpanded] = useState(false)
  return (
    <section
      id="founder"
      data-theme="light"
      className="section-pad relative overflow-hidden"
      style={{ background: "#faf7f2" }}
    >
      <ToothPattern variant={2} />
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text */}
          <RevealDiv className="flex flex-col items-center text-center">
            <p className="font-mono-label mb-4" style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#7a5c10" }}>
              FROM THE FOUNDER
            </p>

            <h2
              className="font-display mb-5 leading-tight"
              style={{ fontSize: "clamp(1.75rem,4vw,3rem)", fontWeight: 300, color: "#1c1810" }}
            >
              Built because good care deserves better systems.
            </h2>

            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed" style={{ color: "rgba(28,24,16,0.65)" }}>
                As a Biomedical Engineering student at Penn State, I've spent years learning how high-performing systems are designed, measured, and improved. While exploring the operational side of healthcare, I kept noticing the same issue: exceptional practices losing opportunities not because of the care they provide, but because inquiries weren't being captured or followed up with consistently.
              </p>
              <p className={`font-body text-base leading-relaxed${expanded ? "" : " hidden sm:block"}`} style={{ color: "rgba(28,24,16,0.65)" }}>
                A missed call. A delayed response. A prospective patient choosing another office.
              </p>
              <p className={`font-body text-base leading-relaxed${expanded ? "" : " hidden sm:block"}`} style={{ color: "rgba(28,24,16,0.65)" }}>
                Presency exists to help solve that gap. We build practical, reliable follow-up systems that help independent practices respond faster, stay organized, and create a better experience from the very first interaction.
              </p>
              <p className={`font-body text-base leading-relaxed${expanded ? "" : " hidden sm:block"}`} style={{ color: "rgba(28,24,16,0.65)" }}>
                When you work with Presency, you work directly with me, the founder. The goal isn't to sell another marketing service. It's to build systems that support the quality of care your practice already provides.
              </p>
              <button
                onClick={() => setExpanded(e => !e)}
                aria-expanded={expanded}
                className="sm:hidden font-mono-label cursor-pointer self-center"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.13em",
                  color: "#7a5c10",
                  background: "transparent",
                  border: "none",
                  padding: "4px 8px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                {expanded ? "READ LESS" : "READ MORE"}
                <svg
                  width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true"
                  style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}
                >
                  <path d="M2 4l4 4 4-4" stroke="#7a5c10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-2 mt-6">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <circle cx="7" cy="7" r="6.5" stroke="#c9a84c" strokeOpacity="0.5" />
                <path d="M4.5 7l2 2 3-3" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-body text-sm" style={{ color: "rgba(28,24,16,0.65)" }}>Direct founder access</span>
            </div>
          </RevealDiv>

          {/* Right: Founder photo */}
          <RevealDiv delay={150}>
            <div
              className="relative w-full rounded-2xl overflow-hidden mx-auto"
              style={{
                aspectRatio: "4/5",
                maxWidth: "400px",
                border: "1px solid rgba(201,168,76,0.25)",
                boxShadow: "0 0 60px rgba(201,168,76,0.08), 0 24px 64px rgba(28,24,16,0.12)",
              }}
            >
              <Image
                src="/joey.png"
                alt="Joey, founder of Presency, Penn State Biomedical Engineering"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="(max-width: 1024px) 90vw, 40vw"
                priority
              />
            </div>
          </RevealDiv>

        </div>
      </div>
    </section>
  )
}
