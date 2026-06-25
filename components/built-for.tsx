"use client"
import { RevealDiv } from "@/components/ui/reveal-div"
import { ToothPattern } from "@/components/ui/tooth-pattern"

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 2a9 9 0 1 0 0 18A9 9 0 0 0 11 2zM11 6v5l3 3" stroke="#7a5c10" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "We do the work, you do not touch the tech",
    body: "Presency builds, hosts, and manages everything. Your website, your Google profile, your reviews and reputation. There is nothing to install and no new system for you to learn. You stay focused on running your business.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="16" height="12" rx="2" stroke="#7a5c10" strokeWidth="1.5" />
        <path d="M7 9h8M7 13h5" stroke="#7a5c10" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Start with what matters most, add the rest over time",
    body: "We begin where it moves the needle for you, then layer on the rest as you are ready. Website, Google presence, reviews, social, AI visibility. There is no pressure and no oversized package you do not need.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 3l1.8 5.4H18l-4.5 3.3 1.7 5.3L11 14l-4.2 3 1.7-5.3L4 8.4h5.2z" stroke="#7a5c10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Direct access to the founder",
    body: "You work with the founder, not a ticket queue or an account rotation. Questions get answered by the person who builds and manages your presence. Founder-led and locally focused.",
  },
]

export function BuiltForLocal() {
  return (
    <section
      id="built-for"
      data-theme="light"
      className="section-pad relative overflow-hidden"
      style={{ background: "#f0ece3" }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 50% at 8% 100%, rgba(201,168,76,0.07) 0%, transparent 55%)" }} />
        <ToothPattern variant={0} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: heading + trust block */}
          <RevealDiv>
            <p className="font-mono-label mb-5" style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#7a5c10" }}>
              BUILT FOR LOCAL BUSINESS
            </p>
            <h2
              className="font-display mb-6 leading-tight"
              style={{ fontSize: "clamp(1.75rem,4vw,3rem)", fontWeight: 300, color: "#1c1810" }}
            >
              Fits how your business{" "}
              <em style={{ fontStyle: "italic", color: "#7a5c10", fontWeight: 400 }}>
                already runs.
              </em>
            </h2>
            <p className="font-body text-base leading-relaxed mb-10" style={{ color: "rgba(28,24,16,0.65)" }}>
              Local businesses are busy and stretched thin. You are already running the day. Presency adds real capability to your online presence without adding work for you, so the gains show up while the effort stays off your plate.
            </p>

            {/* Trust block */}
            <div
              className="rounded-xl p-6"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(201,168,76,0.22)",
                boxShadow: "0 4px 20px rgba(28,24,16,0.05)",
              }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.22)" }}
                >
                  <svg width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M7 1l5 2v4c0 3-2.5 5.5-5 6C4.5 12.5 2 10 2 7V3l5-2z" stroke="#7a5c10" strokeWidth="1.3" strokeLinejoin="round" />
                    <path d="M5 7l1.5 1.5L9 5.5" stroke="#7a5c10" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-body text-sm font-semibold mb-1" style={{ color: "#1c1810" }}>
                    Done-for-you, start to finish.
                  </p>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(28,24,16,0.65)" }}>
                    Presency builds, hosts, and manages everything. Your website, your Google presence, your reviews and reputation. Founder-led and locally focused, so you can stay on what you do best, which is running your business.
                  </p>
                </div>
              </div>
              <p className="font-body text-xs italic" style={{ color: "rgba(28,24,16,0.4)", paddingTop: "0.75rem", borderTop: "1px solid rgba(28,24,16,0.08)" }}>
                One partner for your website, your Google profile, and your reputation.
              </p>
            </div>
          </RevealDiv>

          {/* Right: feature list */}
          <RevealDiv delay={150} className="flex flex-col gap-8">
            {features.map(f => (
              <div key={f.title} className="flex gap-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}
                >
                  {f.icon}
                </div>
                <div>
                  <p className="font-body text-sm font-semibold mb-1" style={{ color: "#1c1810" }}>
                    {f.title}
                  </p>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(28,24,16,0.65)" }}>
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </RevealDiv>

        </div>
      </div>
    </section>
  )
}
