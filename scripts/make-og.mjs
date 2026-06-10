// Regenerates public/presency-og.png (1200x630 link-preview card).
// Run from the presency folder: node scripts/make-og.mjs
import sharp from "sharp"
import { fileURLToPath } from "url"
import path from "path"

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const pub = p => path.join(root, "public", p)

const TOOTH =
  "M12 2C9.5 2 8.7 3 7 3C5 3 3 4.5 3 7.5C3 10 4 11.5 4.8 14C5.5 16.5 5.8 22 7.5 22C9.5 22 8.5 16 12 16C15.5 16 14.5 22 16.5 22C18.2 22 18.5 16.5 19.2 14C20 11.5 21 10 21 7.5C21 4.5 19 3 17 3C15.3 3 14.5 2 12 2Z"

const tooth = (x, y, size, rot, op) =>
  `<g transform="translate(${x} ${y}) rotate(${rot} 12 12) scale(${size / 24})">
     <path d="${TOOTH}" fill="none" stroke="#c9a84c" stroke-opacity="${op}" stroke-width="${24 / size * 2.2}"/>
   </g>`

const bg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="50%" cy="38%" r="65%">
      <stop offset="0%" stop-color="#1c1810"/>
      <stop offset="100%" stop-color="#0d0c0a"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#glow)"/>

  ${tooth(70, 80, 150, -16, 0.10)}
  ${tooth(980, 60, 120, 20, 0.09)}
  ${tooth(1020, 420, 170, -24, 0.10)}
  ${tooth(120, 430, 115, 14, 0.08)}

  <!-- corner brackets -->
  <path d="M44 84V44h40" stroke="#c9a84c" stroke-opacity="0.55" stroke-width="2" fill="none"/>
  <path d="M1156 84V44h-40" stroke="#c9a84c" stroke-opacity="0.55" stroke-width="2" fill="none"/>
  <path d="M44 546v40h40" stroke="#c9a84c" stroke-opacity="0.55" stroke-width="2" fill="none"/>
  <path d="M1156 546v40h-40" stroke="#c9a84c" stroke-opacity="0.55" stroke-width="2" fill="none"/>

  <!-- divider under wordmark -->
  <rect x="510" y="368" width="180" height="1" fill="#c9a84c" fill-opacity="0.45"/>

  <text x="600" y="412" text-anchor="middle"
        font-family="Segoe UI, Arial, sans-serif" font-size="30" fill="#e9e4da" letter-spacing="0.5">
    Patient capture for independent dental practices
  </text>

  <text x="600" y="478" text-anchor="middle"
        font-family="Consolas, 'Courier New', monospace" font-size="17" fill="#c9a84c" fill-opacity="0.75" letter-spacing="5">
    GETPRESENCY.COM
  </text>
</svg>`

const wordmark = await sharp(pub("presency-logo.png"))
  .resize({ width: 620 })
  .toBuffer()
const wm = await sharp(wordmark).metadata()

await sharp(Buffer.from(bg))
  .composite([{ input: wordmark, left: Math.round((1200 - 620) / 2), top: Math.round(330 - wm.height) }])
  .png()
  .toFile(pub("presency-og.png"))

console.log("wrote public/presency-og.png")
