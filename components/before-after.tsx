"use client"
import { RevealDiv } from "@/components/ui/reveal-div"
import Link from "next/link"

// ── Shared mini components ───────────────────────────────────────────────────

function CallEvent({ time, label, missed }: { time: string; label: string; missed?: boolean }) {
  return (
    <div
      className="rounded-xl p-3 mb-3 flex items-center gap-3"
      style={{
        background: missed ? "rgba(255,50,50,0.05)" : "rgba(201,168,76,0.06)",
        border: `1px solid ${missed ? "rgba(255,100,100,0.15)" : "rgba(201,168,76,0.15)"}`,
      }}
    >
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
        style={{ background: missed ? "rgba(255,100,100,0.1)" : "rgba(201,168,76,0.12)" }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path
            d="M9.5 8.5c-.8.8-1.7 1.5-2.5 1.5C5.5 10 3.5 8 2.5 6.5 1.5 4.8 1 3.5 2 2.5l1-1c.3-.3.8-.3 1 0l1.5 2c.3.3.3.7 0 1L4.7 5.3C5.2 6.3 6 7.2 7 7.7l.8-.8c.3-.3.7-.3 1 0l2 1.5c.3.3.3.7 0 1l-1.3.1z"
            fill={missed ? "rgba(255,100,100,0.5)" : "#c9a84c"}
          />
        </svg>
      </div>
      <div>
        <p className="font-mono-label" style={{ fontSize: "9px", letterSpacing: "0.1em", color: missed ? "rgba(255,120,120,0.7)" : "var(--text-muted)" }}>
          {label}
        </p>
        <p className="font-body text-xs font-medium" style={{ color: missed ? "rgba(255,150,150,0.8)" : "var(--text-secondary)" }}>
          {time}
        </p>
      </div>
    </div>
  )
}

function SMSBubble({ from, text, time }: { from: "biz" | "customer"; text: string; time?: string }) {
  return (
    <div className={`flex flex-col mb-2 ${from === "biz" ? "items-start" : "items-end"}`}>
      {time && (
        <span className="font-mono-label mb-1" style={{ fontSize: "8px", color: "var(--text-muted)", letterSpacing: "0.06em" }}>
          {time}
        </span>
      )}
      <div
        className="font-body text-xs leading-relaxed px-3 py-2"
        style={{
          maxWidth: "85%",
          background: from === "biz" ? "rgba(201,168,76,0.12)" : "rgba(13,12,10,0.07)",
          color: "var(--text-secondary)",
          borderRadius: from === "biz" ? "4px 14px 14px 14px" : "14px 4px 14px 14px",
        }}
      >
        {text}
      </div>
    </div>
  )
}

function NoResponseBlock() {
  return (
    <div
      className="rounded-xl p-3 mt-2 flex items-center gap-2"
      style={{ background: "rgba(255,50,50,0.05)", border: "1px dashed rgba(255,100,100,0.15)" }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <circle cx="6" cy="6" r="5.5" stroke="rgba(255,100,100,0.4)" />
        <path d="M6 3.5v3M6 8v.5" stroke="rgba(255,100,100,0.5)" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
      <p className="font-mono-label" style={{ fontSize: "9px", color: "rgba(255,120,120,0.5)", letterSpacing: "0.1em" }}>
        NO FOLLOW-UP · 2 HOURS LATER
      </p>
    </div>
  )
}

// ── Section ──────────────────────────────────────────────────────────────────

export function BeforeAfter() {
  return (
    <section
      data-theme="light"
      className="section-pad relative overflow-hidden"
      style={{ background: "var(--ink)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <RevealDiv className="text-center mb-14">
          <p className="eyebrow mb-4">BEFORE &amp; AFTER</p>
          <h2
            className="font-display mb-4"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontWeight: 300,
              color: "var(--text-primary)",
            }}
          >
            A missed call{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 400 }}>
              before and after.
            </em>
          </h2>
          <p
            className="font-body text-base max-w-lg mx-auto mb-3"
            style={{ color: "var(--text-secondary)" }}
          >
            The same scenario. Two completely different outcomes based on whether your follow-up system is on.
          </p>
          <p className="font-mono-label" style={{ fontSize: "9px", color: "rgba(201,168,76,0.35)", letterSpacing: "0.1em" }}>
            ILLUSTRATIVE EXAMPLE · NOT REAL DATA
          </p>
        </RevealDiv>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          {/* ── BEFORE ── */}
          <RevealDiv
            delay={0}
            className="rounded-2xl overflow-hidden cursor-default"
            style={{
              border: "1px solid rgba(255,100,100,0.25)",
              background: "var(--surface-card)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"
              ;(e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 36px rgba(0,0,0,0.1)"
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"
              ;(e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.05)"
            }}
          >
            <div
              className="px-6 py-4 flex items-center gap-3"
              style={{
                background: "rgba(255,100,100,0.06)",
                borderBottom: "1px solid rgba(255,100,100,0.12)",
              }}
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ background: "rgba(255,100,100,0.15)" }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M6 2v4M6 8.5v.5" stroke="rgba(255,120,120,0.8)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <p
                className="font-mono-label"
                style={{ fontSize: "10px", letterSpacing: "0.12em", color: "rgba(255,120,120,0.7)" }}
              >
                WITHOUT PRESENCY
              </p>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="font-body text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                  River Blvd Auto
                </p>
                <p className="font-body text-xs" style={{ color: "var(--text-muted)" }}>
                  Auto Repair · Philadelphia, PA
                </p>
              </div>

              <CallEvent
                time="7:02 PM"
                label="MISSED CALL · NO ANSWER"
                missed
              />

              <NoResponseBlock />

              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(255,100,100,0.4)" }} />
                  <p className="font-body text-xs" style={{ color: "rgba(255,150,150,0.7)" }}>
                    Caller Googles competitors
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(255,100,100,0.4)" }} />
                  <p className="font-body text-xs" style={{ color: "rgba(255,150,150,0.7)" }}>
                    Books with a shop 3 blocks away
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(255,100,100,0.4)" }} />
                  <p className="font-body text-xs" style={{ color: "rgba(255,150,150,0.7)" }}>
                    Never calls River Blvd again
                  </p>
                </div>
              </div>

              <div
                className="rounded-xl p-4 mt-4"
                style={{
                  background: "rgba(255,50,50,0.05)",
                  border: "1px solid rgba(255,100,100,0.12)",
                }}
              >
                <p className="font-body text-xs leading-relaxed" style={{ color: "rgba(255,150,150,0.7)" }}>
                  <strong style={{ color: "rgba(255,150,150,0.9)" }}>Result:</strong> A warm lead gone cold. No conversation, no booking. That customer is now someone else&apos;s regular.
                </p>
              </div>
            </div>
          </RevealDiv>

          {/* ── AFTER ── */}
          <RevealDiv
            delay={150}
            className="rounded-2xl overflow-hidden cursor-default"
            style={{
              border: "2px solid rgba(201,168,76,0.4)",
              background: "var(--surface-card)",
              boxShadow: "0 0 40px rgba(201,168,76,0.12), 0 4px 24px rgba(0,0,0,0.05)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"
              ;(e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 60px rgba(201,168,76,0.2), 0 16px 40px rgba(0,0,0,0.08)"
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"
              ;(e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 40px rgba(201,168,76,0.12), 0 4px 24px rgba(0,0,0,0.05)"
            }}
          >
            <div
              className="px-6 py-4 flex items-center gap-3"
              style={{
                background: "rgba(201,168,76,0.07)",
                borderBottom: "1px solid rgba(201,168,76,0.18)",
              }}
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ background: "rgba(201,168,76,0.2)" }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2.5 6l3 3 4-5" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p
                className="font-mono-label"
                style={{ fontSize: "10px", letterSpacing: "0.12em", color: "var(--gold)" }}
              >
                WITH PRESENCY
              </p>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="font-body text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                  River Blvd Auto
                </p>
                <p className="font-body text-xs" style={{ color: "var(--text-muted)" }}>
                  Auto Repair · Philadelphia, PA
                </p>
              </div>

              <CallEvent
                time="7:02 PM"
                label="MISSED CALL · INSTANT REPLY SENT"
              />

              <SMSBubble
                from="biz"
                time="7:02 PM"
                text="Hey! Sorry we missed your call. This is River Blvd Auto. Still looking to get your car in?"
              />
              <SMSBubble
                from="customer"
                text="Yes! Need an oil change ASAP"
              />
              <SMSBubble
                from="biz"
                text="We can do tomorrow morning at 9am or 11am. Which works?"
              />
              <SMSBubble
                from="customer"
                text="9am perfect!"
              />

              <div
                className="rounded-xl p-4 mt-3"
                style={{
                  background: "rgba(201,168,76,0.06)",
                  border: "1px solid rgba(201,168,76,0.15)",
                }}
              >
                <p className="font-body text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  <strong style={{ color: "var(--gold)" }}>Result:</strong> Appointment booked in 3 minutes. Customer retained. Review request sent after the visit.
                </p>
              </div>
            </div>
          </RevealDiv>
        </div>

        {/* CTA nudge */}
        <RevealDiv delay={300} className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-body font-medium text-sm px-7 py-3.5 rounded-lg transition-all duration-200 cursor-pointer"
            style={{ background: "var(--gold)", color: "#0d0c0a" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--gold-light)"
              e.currentTarget.style.transform = "translateY(-1px)"
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(201,168,76,0.35)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--gold)"
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "none"
            }}
          >
            Stop missing leads
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <p className="font-body text-xs mt-3" style={{ color: "var(--text-muted)" }}>
            Free 14-day trial · No credit card required
          </p>
        </RevealDiv>
      </div>
    </section>
  )
}
