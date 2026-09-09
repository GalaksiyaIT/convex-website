<script setup>
import { computed } from 'vue'

const props = defineProps({
  tone: { type: String, default: 'light' }, // light | dark
  stats: {
    type: Array,
    required: true, // [{ value, label }]
  },
})

// sm:grid-cols-2 sm:grid-cols-3 sm:grid-cols-4 — literal classes above so Tailwind's
// scanner picks them all up even though only one is ever applied at runtime.
const colsClass = computed(() => `sm:grid-cols-${Math.min(props.stats.length, 4)}`)
</script>

<template>
  <div
    class="grid grid-cols-2 gap-8 rounded-2xl border p-8"
    :class="[
      colsClass,
      tone === 'dark' ? 'border-white/10 bg-white/5' : 'border-light-gray-border bg-light-gray-bg',
    ]"
  >
    <div v-for="stat in stats" :key="stat.label" class="text-center sm:text-left">
      <p
        class="text-3xl font-semibold tracking-tight sm:text-4xl"
        :class="tone === 'dark' ? 'text-white' : 'text-pink'"
      >
        {{ stat.value }}
      </p>
      <p class="mt-1.5 text-sm leading-snug" :class="tone === 'dark' ? 'text-very-light-blue/70' : 'text-darker-gray'">
        {{ stat.label }}
      </p>
    </div>
  </div>
</template>
