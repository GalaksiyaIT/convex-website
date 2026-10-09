// NeuralNetworkAnimation.vue'daki dal üretim algoritmasının statik kapaklar için çıkarılmış hali:
// aynı seeded-random mantığı, aynı renk kümeleri. `seedShift` her kapağa farklı bir desen verir.
export const CLUSTER_COLORS = ['#22c55e', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444']
const CENTER = 180

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

function buildHairPath(seed, angle, r0, r1, segments) {
  let cx = CENTER + r0 * Math.cos(angle)
  let cy = CENTER + r0 * Math.sin(angle)
  let d = `M ${cx.toFixed(1)} ${cy.toFixed(1)}`
  const points = [{ x: cx, y: cy }]

  for (let i = 1; i <= segments; i += 1) {
    const t = i / segments
    const r = r0 + (r1 - r0) * t
    const wobAmp = 20 * Math.sin(t * Math.PI)
    const wob = (seededRandom(seed * 17.3 + i * 6.1) - 0.5) * 2 * wobAmp
    const drift = (seededRandom(seed * 4.7 + i * 2.9) - 0.5) * 0.35
    const segAngle = angle + drift * t
    const nx = -Math.sin(segAngle)
    const ny = Math.cos(segAngle)
    const px = CENTER + r * Math.cos(segAngle) + nx * wob
    const py = CENTER + r * Math.sin(segAngle) + ny * wob
    const c1x = cx + (px - cx) * 0.5 + nx * wob * 0.4
    const c1y = cy + (py - cy) * 0.5 + ny * wob * 0.4

    d += ` Q ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${px.toFixed(1)} ${py.toFixed(1)}`
    cx = px
    cy = py
    points.push({ x: cx, y: cy })
  }

  return { path: d, points }
}

export function buildClusters(seedShift = 0) {
  return CLUSTER_COLORS.map((color, colorIndex) => {
    const baseAngleDeg = colorIndex * 72 - 90 + seedShift * 11
    const strands = []
    const dots = []

    for (let s = 0; s < 16; s += 1) {
      const seed = colorIndex * 97 + s * 13 + seedShift * 331
      const angleOffset = (s - 8) * 4.6 + (seededRandom(seed) - 0.5) * 5
      const angle = ((baseAngleDeg + angleOffset) * Math.PI) / 180
      const r1 = 95 + seededRandom(seed * 1.7) * 145
      const { path, points } = buildHairPath(seed, angle, 74, r1, 4)

      strands.push({ path, opacity: 0.35 + seededRandom(seed * 5.1) * 0.35 })

      if (seededRandom(seed * 8.8) > 0.45) {
        const idx = Math.min(
          points.length - 1,
          1 + Math.round(seededRandom(seed * 9) * (points.length - 2)),
        )
        dots.push({ x: points[idx].x, y: points[idx].y, r: 1.2 + seededRandom(seed * 20) * 1.3 })
      }
    }

    return { color, strands, dots }
  })
}

// ---- Tam kart sürümü: dallar ortadaki elipsten (başlığın durduğu boşluk) başlayıp kartın
// kenarlarına uzanır. Video kitindeki nn_burst.burst_fullscreen ile aynı geometri; böylece
// liste kapakları videoların açılış kartlarıyla birebir aynı görünür.
function edgeDistance(x, y, w, h, a) {
  const dx = Math.cos(a)
  const dy = Math.sin(a)
  const ts = []
  if (dx > 1e-6) ts.push((w - x) / dx)
  if (dx < -1e-6) ts.push(-x / dx)
  if (dy > 1e-6) ts.push((h - y) / dy)
  if (dy < -1e-6) ts.push(-y / dy)
  return Math.min(...ts)
}

export function buildCoverClusters(
  seedShift = 0,
  { w = 640, h = 360, rx = 150, ry = 62, perCluster = 22 } = {},
) {
  const cx = w / 2
  const cy = h / 2
  return CLUSTER_COLORS.map((color, ci) => {
    const base = ci * 72 - 90 + seedShift * 9
    const strands = []
    const dots = []
    for (let s = 0; s < perCluster; s += 1) {
      const seed = ci * 97 + s * 13 + seedShift * 331
      const off = (s - perCluster / 2) * (74 / perCluster) + (seededRandom(seed) - 0.5) * 4
      const a = ((base + off) * Math.PI) / 180
      const sx = cx + rx * Math.cos(a)
      const sy = cy + ry * Math.sin(a)
      const len =
        Math.max(30, edgeDistance(sx, sy, w, h, a)) * (0.5 + seededRandom(seed * 1.7) * 0.7)
      let px0 = sx
      let py0 = sy
      let d = `M ${sx.toFixed(1)} ${sy.toFixed(1)}`
      const anchors = []
      for (let i = 1; i <= 5; i += 1) {
        const t = i / 5
        const amp = 0.09 * len * Math.sin(t * Math.PI)
        const wob = (seededRandom(seed * 17.3 + i * 6.1) - 0.5) * 2 * amp
        const drift = (seededRandom(seed * 4.7 + i * 2.9) - 0.5) * 0.35
        const aa = a + drift * t
        const nx = -Math.sin(aa)
        const ny = Math.cos(aa)
        const px = sx + len * t * Math.cos(aa) + nx * wob
        const py = sy + len * t * Math.sin(aa) + ny * wob
        const c1x = px0 + (px - px0) * 0.5 + nx * wob * 0.4
        const c1y = py0 + (py - py0) * 0.5 + ny * wob * 0.4
        d += ` Q ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${px.toFixed(1)} ${py.toFixed(1)}`
        px0 = px
        py0 = py
        anchors.push({ x: px, y: py })
      }
      strands.push({ path: d, opacity: 0.4 + seededRandom(seed * 5.1) * 0.35 })
      for (let k = 0; k < 2; k += 1) {
        if (seededRandom(seed * (8.8 + k)) > 0.45) {
          const p =
            anchors[
              Math.min(
                anchors.length - 1,
                Math.round(seededRandom(seed * (9 + k * 3)) * (anchors.length - 1)),
              )
            ]
          dots.push({ x: p.x, y: p.y, r: 1.3 + seededRandom(seed * (20 + k)) * 1.4 })
        }
      }
    }
    return { color, strands, dots }
  })
}
