<script setup>
// automl-ui-new'in "modelRunningFix" dalındaki (henüz main'e alınmamış)
// src/views/ExperimentTraining/components/NeuralNetworkAnimation.vue bileşeninden
// birebir taşındı — aynı "seeded random" dal üretim algoritması, aynı renk kümeleri.
// Orijinali dışarıdan gerçek bir `progress` prop'uyla besleniyordu (API polling);
// burada tamamen dekoratif olduğu için yüzde kendi içinde döngüsel olarak üretiliyor.
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  size: { type: Number, default: 220 }, // px — 360x360 viewBox bu boyuta ölçeklenir
  duration: { type: Number, default: 5 }, // saniye — yüzde halkasının bir turu
  showProgress: { type: Boolean, default: true }, // false: yalnız dal animasyonu (bitmiş sonuç kartları için)
})

const svgEl = ref(null)
const percent = ref(0)
const active = ref(true)
let rafId = null
let startTs = null

function tick(ts) {
  if (startTs === null) startTs = ts
  const cycleMs = props.duration * 1000
  const elapsedMs = (ts - startTs) % cycleMs
  percent.value = Math.round((elapsedMs / cycleMs) * 100)
  rafId = requestAnimationFrame(tick)
}

function syncAnimationState() {
  const svg = svgEl.value
  if (!svg || typeof svg.pauseAnimations !== 'function') return
  if (active.value) svg.unpauseAnimations()
  else svg.pauseAnimations()
}

onMounted(() => {
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
  if (reduceMotion) {
    active.value = false
    percent.value = 42
  } else {
    rafId = requestAnimationFrame(tick)
  }
  syncAnimationState()
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
})

watch(active, syncAnimationState)

const statusLabel = computed(() => (percent.value >= 100 ? 'TAMAMLANDI' : 'ÇALIŞIYOR'))

const RADIUS = 72
const ringCircumference = 2 * Math.PI * RADIUS
const ringOffset = computed(() => ringCircumference * (1 - percent.value / 100))

// Deterministik "sahte rastgele" — her yüklemede aynı dal desenini üretir.
function seededRandom(seed) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

const CENTER = 180
const CLUSTER_COLORS = ['#22c55e', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444']

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

function buildCluster(colorIndex, baseAngleDeg) {
  const color = CLUSTER_COLORS[colorIndex]
  const strandCount = 16
  const strands = []
  const dots = []
  const flows = []

  for (let s = 0; s < strandCount; s += 1) {
    const seed = colorIndex * 97 + s * 13
    const angleOffset = (s - strandCount / 2) * 4.6 + (seededRandom(seed) - 0.5) * 5
    const angle = ((baseAngleDeg + angleOffset) * Math.PI) / 180

    const r0 = 74
    const r1 = 95 + seededRandom(seed * 1.7) * 145

    const { path: strandPath, points } = buildHairPath(seed, angle, r0, r1, 4)

    strands.push({
      path: strandPath,
      opacity: 0.28 + seededRandom(seed * 5.1) * 0.28,
      dur: 3 + seededRandom(seed * 4.4) * 3,
      delay: seededRandom(seed * 6.6) * 2,
    })

    const flowCount = seededRandom(seed * 11.2) > 0.5 ? 1 : 0
    for (let f = 0; f < flowCount; f += 1) {
      flows.push({
        path: strandPath,
        dur: 2.2 + seededRandom(seed * (f + 60)) * 1.8,
        delay: seededRandom(seed * (f + 80)) * 2,
      })
    }

    const dotCount = seededRandom(seed * 8.8) > 0.45 ? 1 : 0
    for (let d = 0; d < dotCount; d += 1) {
      const pIndex = Math.min(
        points.length - 1,
        1 + Math.round(seededRandom(seed * (d + 9)) * (points.length - 2)),
      )
      const pt = points[pIndex]
      dots.push({
        x: pt.x,
        y: pt.y,
        r: 1.1 + seededRandom(seed * (d + 20)) * 1.2,
        baseOpacity: 0.35 + seededRandom(seed * (d + 30)) * 0.3,
        dur: 2 + seededRandom(seed * (d + 40)) * 2.5,
        delay: seededRandom(seed * (d + 50)) * 2,
      })
    }
  }

  return { color, strands, dots, flows }
}

const clusters = CLUSTER_COLORS.map((_, i) => buildCluster(i, i * 72 - 90))
</script>

<template>
  <div class="nn-wrapper" :class="{ 'nn-wrapper--paused': !active }">
    <svg ref="svgEl" :width="size" :height="size" viewBox="0 0 360 360" fill="none">
      <g class="nn-burst">
        <g v-for="(cluster, ci) in clusters" :key="`c-${ci}`">
          <path
            v-for="(strand, si) in cluster.strands"
            :key="`s-${ci}-${si}`"
            :d="strand.path"
            fill="none"
            :stroke="cluster.color"
            stroke-width="0.6"
            stroke-linecap="round"
            :opacity="strand.opacity"
            class="nn-strand"
            :style="{ animationDuration: `${strand.dur}s`, animationDelay: `${strand.delay}s` }"
          />
          <circle
            v-for="(dot, di) in cluster.dots"
            :key="`d-${ci}-${di}`"
            :cx="dot.x"
            :cy="dot.y"
            :r="dot.r"
            :fill="cluster.color"
            :opacity="dot.baseOpacity"
            class="nn-thread-dot"
            :style="{ animationDuration: `${dot.dur}s`, animationDelay: `${dot.delay}s` }"
          />
          <circle
            v-for="(flow, fi) in cluster.flows"
            :key="`f-${ci}-${fi}`"
            r="1.8"
            :fill="cluster.color"
            opacity="0"
            class="nn-flow-dot"
          >
            <animateMotion
              :path="flow.path"
              :dur="`${flow.dur}s`"
              :begin="`${flow.delay}s`"
              repeatCount="indefinite"
              keyPoints="0;1"
              keyTimes="0;1"
              calcMode="linear"
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.08;0.85;1"
              :dur="`${flow.dur}s`"
              :begin="`${flow.delay}s`"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </g>

      <!-- Merkez disk -->
      <template v-if="showProgress">
        <circle cx="180" cy="180" r="72" fill="rgba(255,255,255,0.78)" />
        <circle
          cx="180"
          cy="180"
          r="72"
          stroke="rgba(195,22,117,0.14)"
          stroke-width="5"
          fill="none"
        />
        <circle
          cx="180"
          cy="180"
          r="72"
          fill="none"
          stroke="rgb(195,22,117)"
          stroke-width="5"
          stroke-linecap="round"
          transform="rotate(-90 180 180)"
          :stroke-dasharray="ringCircumference"
          :stroke-dashoffset="ringOffset"
          class="nn-progress-ring"
        />
        <text x="180" y="176" text-anchor="middle" dominant-baseline="middle" class="nn-center-pct">
          {{ percent }}%
        </text>
        <text
          x="180"
          y="204"
          text-anchor="middle"
          dominant-baseline="middle"
          class="nn-center-status"
        >
          {{ statusLabel }}
        </text>
      </template>
    </svg>
  </div>
</template>

<style scoped>
.nn-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.nn-strand {
  animation-name: nnStrandPulse;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.nn-wrapper--paused .nn-strand {
  animation-play-state: paused;
}

@keyframes nnStrandPulse {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.75;
  }
}

.nn-thread-dot {
  animation-name: nnDotPulse;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  transform-box: fill-box;
  transform-origin: center;
}

.nn-wrapper--paused .nn-thread-dot {
  animation-play-state: paused;
}

@keyframes nnDotPulse {
  0%,
  100% {
    opacity: 0.35;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.4);
  }
}

.nn-flow-dot {
  filter: drop-shadow(0 0 1.5px currentColor);
}

.nn-progress-ring {
  transition: stroke-dashoffset 0.4s ease;
}

.nn-center-pct {
  font-size: 42px;
  font-weight: 700;
  fill: rgb(195, 22, 117);
  letter-spacing: -1px;
  font-family: inherit;
}

.nn-center-status {
  font-family: ui-monospace, monospace;
  font-size: 10.5px;
  font-weight: 600;
  fill: rgba(38, 71, 141, 0.7);
  letter-spacing: 3px;
  text-transform: uppercase;
}
</style>
