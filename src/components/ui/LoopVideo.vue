<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Sessiz, döngüde oynayan tanıtım videosu (Claude Motion filmleri). Ekrana girince oynar,
// çıkınca durur; hareketi azaltma tercihi olanlarda otomatik oynamaz, kontroller görünür.
defineProps({
  src: { type: String, required: true },
  poster: { type: String, default: undefined },
  label: { type: String, default: undefined },
})

const el = ref(null)
const reduceMotion =
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
let io = null

onMounted(() => {
  const v = el.value
  if (!v || reduceMotion || typeof IntersectionObserver === 'undefined') return
  v.muted = true
  io = new IntersectionObserver(
    ([e]) => {
      if (e.isIntersecting) v.play().catch(() => {})
      else v.pause()
    },
    { threshold: 0.35 },
  )
  io.observe(v)
})
onBeforeUnmount(() => io?.disconnect())
</script>

<template>
  <video
    ref="el"
    :src="src"
    :poster="poster"
    class="aspect-video w-full"
    muted
    loop
    playsinline
    preload="metadata"
    :autoplay="!reduceMotion"
    :controls="reduceMotion"
    :aria-label="label"
  />
</template>
