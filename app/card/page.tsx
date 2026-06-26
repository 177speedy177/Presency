"use client"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export default function WelcomePage() {
  return (
    <div style={{ background: "var(--surface)", minHeight: "100vh" }}>
      <Nav />

      <main>
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <section data-theme="light" className="relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-8 pt-28 pb-10 text-center">
            <p
              className="font-mono-label mb-5"
              style={{ fontSize: "11px", color: "#7a5c10", letterSpacing: "0.14em" }}
            >
              WELCOME
            </p>

            <h1
              className="font-display mb-6 leading-tight"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                fontWeight: 300,
                color: "var(--text-primary)",
              }}
            >
              Quick 4-minute overview of{" "}
              <em
                className="font-display"
                style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 400 }}
              >
                what we do
              </em>
            </h1>

            <p
              className="font-body text-base leading-relaxed"
              style={{ color: "var(--text-secondary)", maxWidth: "480px", margin: "0 auto" }}
            >
              As a person who stutters, this video was a nightmare to make. Very raw; enjoy!
            </p>
          </div>
        </section>

        {/* ── Video ──────────────────────────────────────────────────────── */}
        <section data-theme="light" className="pb-14 px-6">
          <div style={{ width: "min(360px, 100%)", margin: "0 auto" }}>
            {/* Portrait container — iPhone front camera 9:16 */}
            <div
              style={{
                aspectRatio: "9 / 16",
                borderRadius: "22px",
                overflow: "hidden",
                border: "1px solid rgba(201,168,76,0.28)",
                boxShadow:
                  "0 0 0 1px rgba(201,168,76,0.08), 0 32px 80px rgba(13,12,10,0.14)",
                background: "#0d0c0a",
              }}
            >
              <video
                src="/welcome-video.mp4"
                controls
                playsInline
                controlsList="nofullscreen"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            <p
              className="font-mono-label text-center mt-4"
              style={{ fontSize: "9px", color: "rgba(13,12,10,0.28)", letterSpacing: "0.12em" }}
            >
              PRESENCY · 4 MIN · FROM THE FOUNDER
            </p>
          </div>
        </section>

        {/* ── Context + CTA ──────────────────────────────────────────────── */}
        <section data-theme="light" className="pb-24 px-6">
          <div
            className="max-w-xl mx-auto rounded-2xl px-8 py-10 text-center"
            style={{
              background: "rgba(201,168,76,0.05)",
              border: "1px solid rgba(201,168,76,0.15)",
            }}
          >
            <p
              className="font-mono-label mb-4"
              style={{ fontSize: "11px", color: "#7a5c10", letterSpacing: "0.14em" }}
            >
              READY TO START?
            </p>

            <h2
              className="font-display mb-4"
              style={{
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                fontWeight: 300,
                color: "var(--text-primary)",
              }}
            >
              See exactly how your local business shows up online
            </h2>

            <p
              className="font-body text-sm leading-relaxed mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              The free local presence audit reviews your website, Google Business Profile,
              reviews, and how easily customers find you in search and AI answers. No pitch,
              no pressure. Just an honest look at what&apos;s working and where you&apos;re
              losing customers to competitors.
            </p>

            <Link
              href="/free-audit"
              className="font-body font-medium inline-block px-8 py-4 rounded-lg transition-all duration-200 cursor-pointer"
              style={{ background: "var(--gold)", color: "#0d0c0a", fontSize: "0.95rem" }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#b8922e"
                e.currentTarget.style.transform = "translateY(-1px)"
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(201,168,76,0.35)"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "var(--gold)"
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              Request your free audit →
            </Link>

            <p
              className="font-mono-label mt-5"
              style={{ fontSize: "9px", color: "rgba(201,168,76,0.4)", letterSpacing: "0.1em" }}
            >
              FREE · NO CREDIT CARD · NO COMMITMENT
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
