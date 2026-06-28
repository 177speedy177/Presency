// Presency client-preview publisher.
//
// Copies sample client sites into public/p/<slug>/ and wraps each in a
// branded Presency "preview -> reveal" page. Enforces a hard cap so no more
// than MAX_LIVE client previews are live at once. Never publishes private
// files (lead-data.md), zips, or the single-file review/preview exports.
//
// Source folders may carry a leading "DONE " marker (your finished flag) and
// other casing/spacing; the slug is normalized from the folder name, so
// "DONE finn-plumbing" publishes to /p/finn-plumbing/.
//
// Usage (run from the presency repo root):
//   node scripts/publish-previews.mjs status            show what's live / available
//   node scripts/publish-previews.mjs add-new           publish every client not yet live
//   node scripts/publish-previews.mjs add <slug...>     publish/refresh specific clients
//   node scripts/publish-previews.mjs remove <slug...>  take specific previews down

import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

// ── Config ────────────────────────────────────────────────────────────────
const CLIENTS_DIR = "C:/Users/397jt/presency-sites/clients" // where your source sites live
const MAX_LIVE = 100                                        // hard cap of live client previews
const RESERVED = new Set(["test-preview"])                  // system pages that don't count

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const PREVIEWS_DIR = path.join(ROOT, "public", "p")

// Clean display names for slugs the auto-prettifier gets wrong.
const NAME_OVERRIDES = {
  "mjw-plumbing-heating": "MJW Plumbing & Heating",
  "neca": "NECA Electrical",
  "r-g-williams-plumbing-heating-drain": "R G Williams Plumbing-Heating & Drain",
}

const ACRONYMS = new Set(["llc", "hvac", "ac", "pa", "nj", "usa", "ii", "iii"])

// Files that must NEVER be published.
function isExcluded(srcPath) {
  const b = path.basename(srcPath).toLowerCase()
  return (
    b === "lead-data.md" ||
    b === ".gitkeep" ||
    b.endsWith(".zip") ||
    /-(review|preview)\.html$/.test(b)
  )
}

// ── Naming ───────────────────────────────────────────────────────────────────
const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

// Folder name -> URL slug. Strips a leading "DONE " marker and normalizes.
function slugify(folder) {
  return folder
    .replace(/^done\s+/i, "")
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
}

function prettify(slug) {
  const out = []
  for (const w of slug.split("-")) {
    if (!w) continue
    if (w === "s" && out.length) { out[out.length - 1] += "'s"; continue }
    if (ACRONYMS.has(w)) { out.push(w.toUpperCase()); continue }
    out.push(w.charAt(0).toUpperCase() + w.slice(1))
  }
  return out.join(" ")
}

const displayName = slug => NAME_OVERRIDES[slug] || prettify(slug)
const domainFor = name => name.toLowerCase().replace(/[^a-z0-9]/g, "") + ".com"

async function dirsIn(dir) {
  try {
    const ents = await fs.readdir(dir, { withFileTypes: true })
    return ents.filter(e => e.isDirectory()).map(e => e.name)
  } catch { return [] }
}
async function liveSlugs() {
  return (await dirsIn(PREVIEWS_DIR)).filter(s => !RESERVED.has(s))
}

// Valid source sites: { folder, slug, name }. Skips folders without an
// index.html, and warns on any two folders that collide to the same slug.
async function sourceEntries() {
  const folders = await dirsIn(CLIENTS_DIR)
  const bySlug = new Map()
  const entries = []
  for (const folder of folders.sort()) {
    try { await fs.access(path.join(CLIENTS_DIR, folder, "index.html")) }
    catch { continue }
    const slug = slugify(folder)
    if (!slug) continue
    if (bySlug.has(slug)) {
      console.log(`WARN: "${folder}" and "${bySlug.get(slug)}" both map to /p/${slug}/. Keeping the first.`)
      continue
    }
    bySlug.set(slug, folder)
    entries.push({ folder, slug, name: displayName(slug) })
  }
  return entries
}

// ── Wrapper template ─────────────────────────────────────────────────────────
function wrapperHtml(name, domain, slug) {
  const N = esc(name)
  const SITE = `/p/${slug}/site/index.html` // absolute so it resolves with or without a trailing slash
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex">
  <title>${N} &mdash; a sample site by Presency</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { height: 100%; }
    body { font-family: "Inter", system-ui, sans-serif; background: radial-gradient(ellipse 90% 60% at 50% 25%, #1c1810 0%, #0d0c0a 100%); color: #f7f4ef; overflow-x: hidden; }
    #intro { min-height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px 22px 56px; gap: 8px; }
    .brand { font-family: "Fraunces", Georgia, serif; font-size: 26px; font-weight: 600; letter-spacing: -0.02em; background: linear-gradient(135deg, #f5dfa0, #c9a84c 55%, #b8922e); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 26px; }
    .eyebrow { font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: #c9a84c; margin-bottom: 12px; }
    h1 { font-family: "Fraunces", Georgia, serif; font-weight: 600; font-size: clamp(30px, 7vw, 46px); line-height: 1.1; margin-bottom: 14px; }
    .sub { font-size: 15px; line-height: 1.6; color: rgba(247,244,239,0.62); max-width: 34ch; margin-bottom: 26px; }
    .open-btn { font-family: inherit; font-size: 15px; font-weight: 600; cursor: pointer; color: #0d0c0a; background: linear-gradient(135deg, #e8c96d, #c9a84c); border: none; border-radius: 12px; padding: 14px 28px; box-shadow: 0 8px 30px rgba(201,168,76,0.3); transition: transform .15s ease, box-shadow .15s ease; margin-bottom: 34px; }
    .open-btn:hover { transform: translateY(-1px); box-shadow: 0 12px 38px rgba(201,168,76,0.4); }
    .preview { width: min(440px, 90vw); cursor: pointer; border-radius: 16px; overflow: hidden; border: 1px solid rgba(201,168,76,0.3); box-shadow: 0 30px 70px rgba(0,0,0,0.5); background: #fff; transition: transform .2s ease, box-shadow .2s ease; }
    .preview:hover { transform: translateY(-3px); box-shadow: 0 36px 80px rgba(0,0,0,0.6); }
    .chrome { display: flex; align-items: center; gap: 6px; padding: 9px 12px; background: #f1ece3; border-bottom: 1px solid rgba(0,0,0,0.06); }
    .dot { width: 9px; height: 9px; border-radius: 50%; background: rgba(0,0,0,0.18); }
    .addr { flex: 1; margin-left: 8px; height: 20px; border-radius: 5px; background: #fff; border: 1px solid rgba(0,0,0,0.08); font-size: 10px; color: rgba(0,0,0,0.45); display: flex; align-items: center; padding: 0 9px; }
    .screen { position: relative; overflow: hidden; background: #fff; }
    #thumb { width: 1200px; height: 760px; border: 0; transform-origin: top left; pointer-events: none; }
    .hint { position: absolute; bottom: 12px; left: 50%; transform: translateX(-50%); background: rgba(13,12,10,0.82); color: #f7f4ef; backdrop-filter: blur(6px); font-size: 12px; font-weight: 500; letter-spacing: 0.03em; padding: 8px 16px; border-radius: 999px; border: 1px solid rgba(201,168,76,0.4); pointer-events: none; white-space: nowrap; }
    .footnote { font-size: 12px; color: rgba(247,244,239,0.4); margin-top: 26px; }
    #full { position: fixed; inset: 0; z-index: 9999; display: none; flex-direction: column; background: #fff; }
    body.open #intro { display: none; }
    body.open #full { display: flex; }
    body.open { overflow: hidden; }
    .topbar { flex: 0 0 auto; display: flex; align-items: center; gap: 12px; padding: 0 14px; height: 46px; background: #0d0c0a; border-bottom: 1px solid rgba(201,168,76,0.25); }
    .tb-back { font-family: inherit; font-size: 13px; cursor: pointer; color: rgba(247,244,239,0.7); background: none; border: none; display: flex; align-items: center; gap: 5px; padding: 6px 4px; }
    .tb-back:hover { color: #f7f4ef; }
    .tb-brand { font-family: "Fraunces", Georgia, serif; font-weight: 600; font-size: 15px; background: linear-gradient(135deg, #f5dfa0, #c9a84c); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
    .tb-spacer { flex: 1; }
    .tb-cta { font-size: 12.5px; font-weight: 600; text-decoration: none; white-space: nowrap; color: #0d0c0a; background: linear-gradient(135deg, #e8c96d, #c9a84c); padding: 7px 14px; border-radius: 8px; }
    #fullFrame { flex: 1; width: 100%; border: 0; }
    @media (max-width: 420px) { .tb-label { display: none; } }
  </style>
</head>
<body>
  <section id="intro">
    <div class="brand">Presency</div>
    <div class="eyebrow">A sample website built for</div>
    <h1>${N}</h1>
    <p class="sub">Here is what your online presence could look like. Take a look at the live site.</p>
    <button class="open-btn" onclick="reveal()">View the site &rarr;</button>
    <div class="preview" onclick="reveal()">
      <div class="chrome">
        <span class="dot"></span><span class="dot"></span><span class="dot"></span>
        <div class="addr">${domain}</div>
      </div>
      <div class="screen">
        <iframe id="thumb" src="${SITE}" tabindex="-1" scrolling="no" aria-hidden="true"></iframe>
        <div class="hint">Tap to explore &rarr;</div>
      </div>
    </div>
    <div class="footnote">Built by Presency &middot; getpresency.com</div>
  </section>
  <section id="full">
    <div class="topbar">
      <button class="tb-back" onclick="back()">&larr; Back</button>
      <span class="tb-brand">Presency</span>
      <span class="tb-label" style="font-size:12.5px;color:rgba(247,244,239,0.5)">sample for ${N}</span>
      <span class="tb-spacer"></span>
      <a class="tb-cta" href="https://getpresency.com/#contact">Make it yours</a>
    </div>
    <iframe id="fullFrame" title="${N} website"></iframe>
  </section>
  <script>
    function fitThumb() {
      var t = document.getElementById('thumb');
      var screen = t.parentElement;
      var w = screen.clientWidth;
      var scale = w / 1200;
      t.style.transform = 'scale(' + scale + ')';
      screen.style.height = (760 * scale) + 'px';
    }
    function reveal() {
      var ff = document.getElementById('fullFrame');
      if (!ff.getAttribute('src')) ff.setAttribute('src', '${SITE}');
      document.body.classList.add('open');
      window.scrollTo(0, 0);
    }
    function back() { document.body.classList.remove('open'); }
    window.addEventListener('load', fitThumb);
    window.addEventListener('resize', fitThumb);
  </script>
</body>
</html>
`
}

// ── Operations ────────────────────────────────────────────────────────────
async function publishEntry({ folder, slug, name }) {
  const src = path.join(CLIENTS_DIR, folder)
  const dest = path.join(PREVIEWS_DIR, slug)
  const site = path.join(dest, "site")
  await fs.rm(dest, { recursive: true, force: true })
  await fs.mkdir(site, { recursive: true })
  await fs.cp(src, site, { recursive: true, filter: s => !isExcluded(s) })
  await fs.writeFile(path.join(dest, "index.html"), wrapperHtml(name, domainFor(name), slug), "utf8")
}

async function removeOne(slug) {
  const dest = path.join(PREVIEWS_DIR, slug)
  try { await fs.access(dest) } catch { return false }
  await fs.rm(dest, { recursive: true, force: true })
  return true
}

function gitHint() {
  console.log("\nTo deploy, run:")
  console.log("  git add public/p")
  console.log('  git commit -m "Update client previews"')
  console.log("  git push\n")
}

async function status() {
  const live = (await liveSlugs()).sort()
  const src = await sourceEntries()
  const liveSet = new Set(live)
  const notLive = src.filter(e => !liveSet.has(e.slug))
  console.log(`\nLIVE (${live.length}/${MAX_LIVE}):`)
  for (const s of live) console.log(`  /p/${s}/   ->  ${displayName(s)}`)
  if (!live.length) console.log("  (none yet)")
  console.log(`\nAVAILABLE in clients/ but not live (${notLive.length}):`)
  for (const e of notLive) console.log(`  ${e.slug}   ->  ${e.name}`)
  if (!notLive.length) console.log("  (none)")
  console.log("")
}

// ── CLI ─────────────────────────────────────────────────────────────────────
const [cmd, ...args] = process.argv.slice(2)

if (cmd === "remove") {
  if (!args.length) { console.log("Usage: remove <slug...>"); process.exit(1) }
  let removed = 0
  for (const s of args) {
    if (await removeOne(s)) { console.log(`removed  /p/${s}/`); removed++ }
    else console.log(`(not live) ${s}`)
  }
  if (removed) gitHint()
} else if (cmd === "add" || cmd === "add-new") {
  const live = new Set(await liveSlugs())
  const src = await sourceEntries()
  let targets = cmd === "add-new"
    ? src.filter(e => !live.has(e.slug))
    : src.filter(e => args.includes(e.slug))
  if (cmd === "add") {
    const found = new Set(targets.map(e => e.slug))
    for (const a of args) if (!found.has(a)) console.log(`SKIP ${a}: no source folder maps to that slug`)
    if (!targets.length) { console.log("Nothing to publish."); process.exit(1) }
  }

  const refreshing = targets.filter(e => live.has(e.slug)).length
  const room = MAX_LIVE - (live.size - refreshing)
  const skipped = []
  if (targets.length > room) {
    skipped.push(...targets.slice(room))
    targets = targets.slice(0, room)
    console.log(`\nCap is ${MAX_LIVE}. Only room for ${room} more.`)
  }
  for (const e of targets) {
    try { await publishEntry(e); console.log(`published  /p/${e.slug}/   ->  ${e.name}`) }
    catch (err) { console.log(`SKIP ${e.slug}: ${err.message}`) }
  }
  if (skipped.length) {
    console.log(`\nNot published (would exceed ${MAX_LIVE}): ${skipped.map(e => e.slug).join(", ")}`)
    console.log("Remove some first:  node scripts/publish-previews.mjs remove <slug...>")
  }
  if (targets.length) gitHint()
} else {
  await status()
  console.log("Commands: status | add-new | add <slug...> | remove <slug...>")
}
