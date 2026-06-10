// Rebuilds app/favicon.ico from the brand mark (public/presency-favicon-32.png).
// ICO container with embedded PNGs (16px + 32px + 48px), supported since Vista.
// Run from the presency folder: node scripts/make-favicon.mjs
import sharp from "sharp"
import fs from "fs"
import { fileURLToPath } from "url"
import path from "path"

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const src = path.join(root, "public", "presency-favicon-512.png")

const sizes = [16, 32, 48]
const pngs = await Promise.all(
  sizes.map(s => sharp(src).resize(s, s).png().toBuffer())
)

const header = Buffer.alloc(6)
header.writeUInt16LE(0, 0) // reserved
header.writeUInt16LE(1, 2) // type: icon
header.writeUInt16LE(pngs.length, 4)

const entries = []
let offset = 6 + 16 * pngs.length
pngs.forEach((png, i) => {
  const e = Buffer.alloc(16)
  e.writeUInt8(sizes[i] === 256 ? 0 : sizes[i], 0) // width
  e.writeUInt8(sizes[i] === 256 ? 0 : sizes[i], 1) // height
  e.writeUInt8(0, 2) // palette
  e.writeUInt8(0, 3) // reserved
  e.writeUInt16LE(1, 4) // color planes
  e.writeUInt16LE(32, 6) // bits per pixel
  e.writeUInt32LE(png.length, 8)
  e.writeUInt32LE(offset, 12)
  offset += png.length
  entries.push(e)
})

fs.writeFileSync(path.join(root, "app", "favicon.ico"), Buffer.concat([header, ...entries, ...pngs]))
console.log("wrote app/favicon.ico")
