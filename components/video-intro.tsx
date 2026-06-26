"use client"
import Image from "next/image"
import { RevealDiv } from "@/components/ui/reveal-div"
import { ToothPattern } from "@/components/ui/tooth-pattern"

export function FounderNote() {
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
              Built so local businesses can compete online.
            </h2>

            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed" style={{ color: "rgba(28,24,16,0.65)" }}>
                I kept watching great local businesses lose customers to ones that simply showed up better online. Not better work, just a sharper website, a stronger Google presence, more reviews.
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: "rgba(28,24,16,0.65)" }}>
                Presency gives you that same edge, done for you. And you work directly with me, the founder, not a ticket queue.
              </p>
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
