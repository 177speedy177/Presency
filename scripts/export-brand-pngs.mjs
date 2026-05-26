import sharp from "sharp"
import { writeFileSync } from "fs"

// ── Favicon SVG (512x512, renders crisply at any size) ──────────────────────
const faviconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="#f5dfa0"/>
      <stop offset="40%"  stop-color="#c9a84c"/>
      <stop offset="75%"  stop-color="#e8d08a"/>
      <stop offset="100%" stop-color="#b8922e"/>
    </linearGradient>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="#1c1a17"/>
      <stop offset="100%" stop-color="#0d0c0a"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="96" fill="url(#bg)"/>
  <!-- subtle inner glow ring -->
  <rect width="512" height="512" rx="96" fill="none"
        stroke="rgba(201,168,76,0.18)" stroke-width="6"/>
  <!-- "P" centered -->
  <text
    x="256" y="360"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="340"
    font-weight="400"
    fill="url(#gold)"
    text-anchor="middle"
    letter-spacing="-8"
  >P</text>
</svg>`

// ── Logo SVG — "Presency" wordmark on transparent bg ────────────────────────
const logoSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 200" width="960" height="200">
  <defs>
    <linearGradient id="wordmark" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#f5dfa0"/>
      <stop offset="22%"  stop-color="#c9a84c"/>
      <stop offset="55%"  stop-color="#e8d08a"/>
      <stop offset="80%"  stop-color="#c9a84c"/>
      <stop offset="100%" stop-color="#b8922e"/>
    </linearGradient>
  </defs>
  <text
    x="480" y="155"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="160"
    font-weight="400"
    fill="url(#wordmark)"
    text-anchor="middle"
    letter-spacing="-4"
  >Presency</text>
</svg>`

// ── Logo on dark background ─────────────────────────────────────────────────
const logoDarkSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 200" width="960" height="200">
  <defs>
    <linearGradient id="wordmark" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#f5dfa0"/>
      <stop offset="22%"  stop-color="#c9a84c"/>
      <stop offset="55%"  stop-color="#e8d08a"/>
      <stop offset="80%"  stop-color="#c9a84c"/>
      <stop offset="100%" stop-color="#b8922e"/>
    </linearGradient>
  </defs>
  <rect width="960" height="200" fill="#0d0c0a"/>
  <text
    x="480" y="155"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="160"
    font-weight="400"
    fill="url(#wordmark)"
    text-anchor="middle"
    letter-spacing="-4"
  >Presency</text>
</svg>`

// ── OG image — 1200×630, logo-oriented for social sharing ───────────────────
const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="wm" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#f5dfa0"/>
      <stop offset="22%"  stop-color="#c9a84c"/>
      <stop offset="55%"  stop-color="#e8d08a"/>
      <stop offset="80%"  stop-color="#c9a84c"/>
      <stop offset="100%" stop-color="#b8922e"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#0d0c0a"/>
  <!-- Subtle centered gold glow -->
  <ellipse cx="600" cy="315" rx="520" ry="290" fill="rgba(201,168,76,0.055)"/>
  <!-- Border lines -->
  <line x1="0" y1="5" x2="1200" y2="5" stroke="rgba(201,168,76,0.15)" stroke-width="1"/>
  <line x1="0" y1="625" x2="1200" y2="625" stroke="rgba(201,168,76,0.15)" stroke-width="1"/>
  <!-- Corner accents — top left -->
  <path d="M48 96 L48 48 L96 48" stroke="rgba(201,168,76,0.4)" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <!-- Corner accents — top right -->
  <path d="M1152 96 L1152 48 L1104 48" stroke="rgba(201,168,76,0.4)" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <!-- Corner accents — bottom left -->
  <path d="M48 534 L48 582 L96 582" stroke="rgba(201,168,76,0.4)" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <!-- Corner accents — bottom right -->
  <path d="M1152 534 L1152 582 L1104 582" stroke="rgba(201,168,76,0.4)" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <!-- Wordmark -->
  <text
    x="600" y="322"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="188"
    font-weight="400"
    fill="url(#wm)"
    text-anchor="middle"
    letter-spacing="-5"
  >Presency</text>
  <!-- Divider -->
  <line x1="450" y1="349" x2="750" y2="349" stroke="rgba(201,168,76,0.28)" stroke-width="1"/>
  <!-- Tagline -->
  <text
    x="600" y="393"
    font-family="'Helvetica Neue', Helvetica, Arial, sans-serif"
    font-size="25"
    font-weight="300"
    fill="rgba(247,244,239,0.7)"
    text-anchor="middle"
    letter-spacing="0.5"
  >Online performance for local businesses</text>
  <!-- URL -->
  <text
    x="600" y="445"
    font-family="'Courier New', Courier, monospace"
    font-size="15"
    font-weight="400"
    fill="rgba(201,168,76,0.5)"
    text-anchor="middle"
    letter-spacing="3.5"
  >GETPRESENCY.COM</text>
</svg>`

async function run() {
  // Favicon — 512x512 and 32x32
  await sharp(Buffer.from(faviconSvg))
    .png()
    .toFile("public/presency-favicon-512.png")
  console.log("✓ presency-favicon-512.png")

  await sharp(Buffer.from(faviconSvg))
    .resize(32, 32)
    .png()
    .toFile("public/presency-favicon-32.png")
  console.log("✓ presency-favicon-32.png")

  // Logo — transparent background
  await sharp(Buffer.from(logoSvg))
    .png()
    .toFile("public/presency-logo.png")
  console.log("✓ presency-logo.png  (transparent bg)")

  // Logo — dark background
  await sharp(Buffer.from(logoDarkSvg))
    .png()
    .toFile("public/presency-logo-dark.png")
  console.log("✓ presency-logo-dark.png  (dark bg)")

  // OG image — 1200×630
  await sharp(Buffer.from(ogSvg))
    .png()
    .toFile("public/presency-og.png")
  console.log("✓ presency-og.png  (1200×630 OG image)")

  console.log("\nAll files saved to /public — copy them from there.")
}

run().catch(console.error)
