<script setup>
// Video Eğitimler listesi için üretilmiş kapak. Videoların açılış kartlarıyla aynı görünüm:
// ortada boş bir elips (başlık burada), renkli dallar elipsten kartın kenarlarına uzanır.
// `seed` her videoya farklı bir desen verir. Süre rozeti üst bileşende (Videos.vue) çizilir.
import { computed } from 'vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import { buildCoverClusters } from '@/utils/neuralBranches'

const props = defineProps({
  title: { type: String, required: true },
  label: { type: String, default: null },
  seed: { type: Number, default: 0 },
})

const clusters = computed(() => buildCoverClusters(props.seed))
</script>

<template>
  <div class="absolute inset-0 bg-[#221a29]">
    <svg
      class="absolute inset-0 h-full w-full"
      viewBox="0 0 640 360"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      <g v-for="(cluster, ci) in clusters" :key="ci">
        <path
          v-for="(strand, si) in cluster.strands"
          :key="`s-${si}`"
          :d="strand.path"
          :stroke="cluster.color"
          stroke-width="1.1"
          stroke-linecap="round"
          :opacity="strand.opacity"
        />
        <circle
          v-for="(dot, di) in cluster.dots"
          :key="`d-${di}`"
          :cx="dot.x"
          :cy="dot.y"
          :r="dot.r"
          :fill="cluster.color"
        />
      </g>
      <ellipse cx="320" cy="180" rx="146" ry="58" fill="#221a29" opacity="0.85" />
    </svg>

    <div
      class="absolute inset-0 flex flex-col items-center justify-center gap-2 px-[26%] text-center"
    >
      <p class="text-sm font-semibold leading-tight text-white sm:text-base">
        {{ label || title }}
      </p>
      <BaseIcon
        name="playCircle"
        sizeClass="w-8 h-8 text-white/90 drop-shadow transition-transform group-hover:scale-110"
      />
    </div>
  </div>
</template>
