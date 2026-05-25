"use client"
import { useRef, useEffect } from "react"
import { RevealDiv } from "@/components/ui/reveal-div"

interface VideoIntroProps {
  videoUrl?: string
}

export function VideoIntro({ videoUrl }: VideoIntroProps) {
  return (
    <section
      id="video"
      data-theme="light"
      className="section-pad"
      style={{ background: "var(--ink)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <RevealDiv>
            <p className="eyebrow mb-4">FROM THE FOUNDER</p>

            {/* Founder avatar */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className="relative shrink-0"
                style={{ width: 56, height: 56 }}
              >
                <div
                  className="w-full h-full rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(201,168,76,0.2) 0%, rgba(201,168,76,0.08) 100%)",
                    border: "2px solid rgba(201,168,76,0.4)",
                    boxShadow: "0 0 20px rgba(201,168,76,0.15)",
                  }}
                >
                  <span
                    className="font-display"
                    style={{ fontSize: "1.4rem", fontWeight: 400, color: "var(--gold)", letterSpacing: "-0.02em" }}
                  >
                    J
                  </span>
                </div>
                {/* Online indicator */}
                <div
                  className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2"
                  style={{ background: "#22c55e", borderColor: "var(--ink)" }}
                />
              </div>
              <div>
                <p className="font-body text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  Joey
                </p>
                <p className="font-body text-xs" style={{ color: "var(--text-muted)" }}>
                  Founder, Presency · Philadelphia
                </p>
              </div>
            </div>

            <h2
              className="font-display mb-6 leading-tight"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 300,
                color: "var(--text-primary)",
              }}
            >
              Hi, I&apos;m Joey. Here&apos;s exactly what{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--gold-light)",
                  fontWeight: 400,
                }}
              >
                Presency
              </em>{" "}
              does for your business.
            </h2>
            <p
              className="font-body text-lg leading-relaxed mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              I built Presency after watching incredible Philly businesses get
              overlooked online simply because they never learned the tools. The
              barbershop on your block, the dentist your family loves, the
              restaurant that&apos;s been there for decades. They do great work
              and deserve to be found. Watch this 2-minute intro to see how we
              make that happen.
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {["No contracts", "Cancel anytime", "10-min setup"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="7" cy="7" r="6.5" stroke="#c9a84c" strokeOpacity="0.5" />
                    <path
                      d="M4.5 7l2 2 3-3"
                      stroke="#c9a84c"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    className="font-body text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </RevealDiv>

          {/* Right: Video player */}
          <RevealDiv delay={150}>
            <div
              className="relative w-full rounded-xl overflow-hidden"
              style={{
                border: "1px solid rgba(201,168,76,0.3)",
                background: "var(--ink-3)",
                aspectRatio: "16/9",
              }}
            >
              {videoUrl ? (
                videoUrl.includes("youtube") ||
                videoUrl.includes("loom") ||
                videoUrl.includes("vimeo") ? (
                  <iframe
                    src={videoUrl}
                    title="Presency introduction video"
                    className="w-full h-full"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={videoUrl}
                    controls
                    className="w-full h-full object-cover"
                    title="Presency introduction video"
                  />
                )
              ) : (
                /* Premium placeholder */
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                  {/* Gold radial glow */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at center, rgba(201,168,76,0.07) 0%, transparent 70%)",
                    }}
                  />
                  {/* Play button */}
                  <div
                    className="relative flex items-center justify-center"
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      border: "2px solid rgba(201,168,76,0.4)",
                      background: "rgba(201,168,76,0.06)",
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M8 5.14v13.72a1 1 0 0 0 1.5.87l11-6.86a1 1 0 0 0 0-1.74l-11-6.86A1 1 0 0 0 8 5.14z"
                        fill="rgba(201,168,76,0.5)"
                      />
                    </svg>
                  </div>

                  <div className="text-center relative z-10 px-8">
                    <p
                      className="font-display text-base mb-1"
                      style={{ color: "var(--text-secondary)", fontWeight: 300 }}
                    >
                      2-minute founder intro
                    </p>
                    <p
                      className="font-mono-label text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Coming soon
                    </p>
                  </div>

                  {/* Decorative lines */}
                  <div
                    className="absolute bottom-4 left-4 right-4 h-px"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)" }}
                  />
                  <div
                    className="absolute top-4 left-4 right-4 h-px"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)" }}
                  />
                </div>
              )}
            </div>

            {/* Duration badge */}
            <div className="flex items-center gap-2 mt-3 pl-1">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--gold)" }}
              />
              <span
                className="font-mono-label text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                ~2 minutes · no sales pitch
              </span>
            </div>
          </RevealDiv>
        </div>
      </div>
    </section>
  )
}
