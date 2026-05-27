"use client"
import Image from "next/image"
import { RevealDiv } from "@/components/ui/reveal-div"

export function VideoIntro() {
  return (
    <section
      id="founder"
      data-theme="light"
      className="section-pad"
      style={{ background: "var(--ink)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Text */}
          <RevealDiv>
            <p className="eyebrow mb-4">FROM THE FOUNDER</p>

            <h2
              className="font-display mb-6 leading-tight"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 300,
                color: "var(--text-primary)",
              }}
            >
              Philly-built.{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 400 }}>
                For Philly businesses.
              </em>
            </h2>

            <p
              className="font-body text-lg leading-relaxed mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              Growing up in Philly, I saw great local businesses lose customers
              to chains that just had a better Google page. The barbershop on
              your block, the dentist your family loves, the spot that&apos;s
              been there for decades. They all do better work than the
              competition. They just don&apos;t show it online. I built
              Presency to fix that.
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {["No contracts", "Cancel anytime", "10-min setup"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <circle cx="7" cy="7" r="6.5" stroke="#c9a84c" strokeOpacity="0.5" />
                    <path
                      d="M4.5 7l2 2 3-3"
                      stroke="#c9a84c"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-body text-sm" style={{ color: "var(--text-secondary)" }}>
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </RevealDiv>

          {/* Right: Founder photo */}
          <RevealDiv delay={150}>
            <div
              className="relative w-full rounded-2xl overflow-hidden mx-auto"
              style={{
                aspectRatio: "4/5",
                maxWidth: "460px",
                border: "1px solid rgba(201,168,76,0.25)",
                boxShadow: "0 0 60px rgba(201,168,76,0.08), 0 24px 64px rgba(0,0,0,0.5)",
              }}
            >
              <Image
                src="/joey.png"
                alt="Joey, Founder of Presency"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="(max-width: 1024px) 90vw, 46vw"
                priority
              />
              {/* Subtle gold vignette at the bottom */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 55%, rgba(13,12,10,0.45) 100%)",
                }}
              />
              {/* Name badge */}
              <div
                className="absolute bottom-5 left-5 right-5 flex items-center gap-3"
              >
                <div>
                  <p
                    className="font-body text-sm font-medium"
                    style={{ color: "rgba(247,244,239,0.95)" }}
                  >
                    Joey
                  </p>
                  <p
                    className="font-mono-label"
                    style={{ fontSize: "10px", color: "var(--gold)", letterSpacing: "0.1em" }}
                  >
                    FOUNDER · PRESENCY · PHILADELPHIA
                  </p>
                </div>
              </div>
            </div>
          </RevealDiv>

        </div>
      </div>
    </section>
  )
}
