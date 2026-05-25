import Link from "next/link"

export default function NotFound() {
  return (
    <main
      style={{
        background: "var(--ink)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "480px" }}>
        <p
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: "11px",
            color: "var(--gold)",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            marginBottom: "1.5rem",
          }}
        >
          404
        </p>
        <h1
          style={{
            fontFamily: "var(--font-fraunces), serif",
            fontSize: "clamp(2.2rem, 6vw, 4rem)",
            fontWeight: 300,
            color: "var(--text-primary)",
            lineHeight: 1.1,
            marginBottom: "1rem",
          }}
        >
          Page not{" "}
          <em style={{ fontStyle: "italic", color: "var(--gold-light)", fontWeight: 400 }}>
            found.
          </em>
        </h1>
        <p
          style={{
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            fontSize: "1.05rem",
            color: "rgba(247,244,239,0.6)",
            marginBottom: "2.5rem",
            lineHeight: 1.6,
          }}
        >
          This page doesn&apos;t exist or may have moved. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-block",
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            fontWeight: 500,
            fontSize: "0.9rem",
            padding: "0.875rem 2rem",
            borderRadius: "0.5rem",
            background: "var(--gold)",
            color: "#0d0c0a",
            textDecoration: "none",
          }}
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}
