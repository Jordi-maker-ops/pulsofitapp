// Generates the PulsoFit brand source images (icon + splash) for @capacitor/assets.
// Pure geometry (no fonts): a lime heartbeat/"pulse" mark + the brand's rotated
// square node, on the app's dark surface. Rasterized with sharp.
import sharp from 'sharp'
import { mkdirSync } from 'node:fs'

const LIME = '#A6FF3D'
const DIR = new URL('../assets/', import.meta.url)
mkdirSync(DIR, { recursive: true })

// The mark: a green dumbbell with an apple beside it (training + diet).
// Authored in a 0..1024 box so it can be nested at any size/position.
const mark = `
  <svg x="{X}" y="{Y}" width="{W}" height="{W}" viewBox="0 0 1024 1024">
    <defs>
      <radialGradient id="glow" cx="50%" cy="51%" r="50%">
        <stop offset="0%" stop-color="${LIME}" stop-opacity="0.26"/>
        <stop offset="100%" stop-color="${LIME}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="505" cy="522" r="380" fill="url(#glow)"/>
    <g fill="${LIME}" transform="translate(8 -6)">
      <!-- Dumbbell -->
      <rect x="186" y="430" width="44"  height="184" rx="16"/>
      <rect x="238" y="460" width="34"  height="124" rx="12"/>
      <rect x="272" y="497" width="176" height="50"  rx="22"/>
      <rect x="448" y="460" width="34"  height="124" rx="12"/>
      <rect x="490" y="430" width="44"  height="184" rx="16"/>
      <!-- Apple -->
      <path d="M700 470
               C 660 432, 598 448, 594 515
               C 590 584, 636 652, 700 652
               C 764 652, 810 584, 806 515
               C 802 448, 740 432, 700 470 Z"/>
      <!-- stem -->
      <rect x="692" y="430" width="16" height="48" rx="8"/>
      <!-- leaf -->
      <path d="M712 452 C 736 430, 772 434, 784 448 C 764 474, 728 472, 712 452 Z"/>
    </g>
  </svg>`

const place = (w, canvas = 1024) => {
  const x = Math.round((canvas - w) / 2)
  const y = Math.round((canvas - w) / 2)
  return mark.replace('{X}', x).replace('{Y}', y).replaceAll('{W}', w)
}

// Dark background gradients matching the app surface.
const iconBg = (size) => `
  <defs>
    <radialGradient id="bg" cx="50%" cy="34%" r="80%">
      <stop offset="0%" stop-color="#1A1D26"/>
      <stop offset="60%" stop-color="#0C0D12"/>
      <stop offset="100%" stop-color="#08080B"/>
    </radialGradient>
  </defs>
  <rect width="${size}" height="${size}" fill="url(#bg)"/>`

const svg = (size, inner) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">${inner}</svg>`

async function png(name, size, inner) {
  const out = new URL(name, DIR)
  await sharp(Buffer.from(svg(size, inner))).png().toFile(out.pathname)
  console.log('wrote', name, `${size}x${size}`)
}

// iOS / full icon: dark gradient bg + centered mark.
await png('icon-only.png', 1024, iconBg(1024) + place(720))
// Android adaptive: separate background + foreground (mark kept inside safe zone).
await png('icon-background.png', 1024, iconBg(1024))
await png('icon-foreground.png', 1024, place(760))
// Splash (light + dark identical — the app is dark-only): mark centered on bg.
const splashInner = (s) => `
  <defs>
    <radialGradient id="sbg" cx="50%" cy="38%" r="75%">
      <stop offset="0%" stop-color="#16181F"/>
      <stop offset="60%" stop-color="#0C0D12"/>
      <stop offset="100%" stop-color="#08080B"/>
    </radialGradient>
  </defs>
  <rect width="${s}" height="${s}" fill="url(#sbg)"/>` +
  place(820, s)
await png('splash.png', 2732, splashInner(2732))
await png('splash-dark.png', 2732, splashInner(2732))
