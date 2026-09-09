<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  sizeClass: {
    type: String,
    default: 'w-5 h-5',
  },
})

// Minimal outline icon set (24x24, stroke=currentColor) — kept in one file so the
// marketing site doesn't need an icon-package dependency for a few dozen glyphs.
const paths = {
  arrowRight: 'M5 12h14M13 6l6 6-6 6',
  arrowUpRight: 'M7 17 17 7M8 7h9v9',
  check: 'M5 13l4 4L19 7',
  checkCircle: 'M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  chevronDown: 'M6 9l6 6 6-6',
  chevronRight: 'M9 6l6 6-6 6',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6 6 18',
  search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35',
  shield: 'M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z',
  database:
    'M12 5c4.42 0 8-1.34 8-3s-3.58-3-8-3-8 1.34-8 3 3.58 3 8 3ZM4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3',
  layers: 'M12 2 2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5',
  cpu: 'M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3M7 7h10v10H7V7Z',
  eye: 'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  rocket: 'M13 3s5 1 7 8c-2 1-4 1-6 0-1 2-1 4 0 6-7-2-8-7-8-7l7-7ZM6 15l-3 6 6-3',
  plug: 'M9 3v4M15 3v4M6 7h12v4a6 6 0 0 1-12 0V7ZM12 17v4',
  bookOpen: 'M12 5c-2-1.5-5-2-8-1v14c3-1 6-.5 8 1 2-1.5 5-2 8-1V4c-3-1-6-.5-8 1Z',
  lifeBuoy:
    'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5.5 5.5l4 4M18.5 5.5l-4 4M5.5 18.5l4-4M18.5 18.5l-4-4',
  playCircle: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-1.5-13 6 4.5-6 4.5V8Z',
  gitBranch:
    'M6 3v10a4 4 0 0 0 4 4h4M6 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-14a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 4v3',
  mail: 'M3 6h18v12H3V6Zm0 0 9 7 9-7',
  phone: 'M6 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2C11 19 5 13 4 5a2 2 0 0 1 2-2Z',
  mapPin:
    'M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  building:
    'M4 21V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v17M12 21v-9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v9M4 21h16M7 7h1M7 11h1M7 15h1M14 12h1M14 16h1',
  quote:
    'M7 7c-2.5 1-4 3.2-4 6a3 3 0 0 0 3 3 3 3 0 0 0 3-3c0-1.4-.9-2.6-2.2-2.9C7.2 8.9 8 7.8 9.5 7L7 7Zm10 0c-2.5 1-4 3.2-4 6a3 3 0 0 0 3 3 3 3 0 0 0 3-3c0-1.4-.9-2.6-2.2-2.9C17.2 8.9 18 7.8 19.5 7L17 7Z',
  lock: 'M6 11V7a6 6 0 1 1 12 0v4M5 11h14v10H5V11Zm7 4v3',
  server: 'M3 4h18v6H3V4Zm0 10h18v6H3v-6Zm4 1v0m0-11v0M7 8v0',
  barChart: 'M5 21V10M12 21V4M19 21v-7',
  upload: 'M12 16V4m0 0-4 4m4-4 4 4M4 20h16',
  filter: 'M4 5h16l-6 8v6l-4-2v-4L4 5Z',
  workflow: 'M4 5h6v4H4V5Zm10 0h6v4h-6V5ZM4 15h6v4H4v-4Zm10 0h6v4h-6v-4ZM10 7h4M17 9v4h-3',
}

// Solid brand marks — rendered fill=currentColor instead of the stroke style used
// by the rest of the set, since a letterform logo doesn't read correctly as an outline.
const filledPaths = {
  linkedin:
    'M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.5 8.75h3.9V20.5h-3.9V8.75Zm6.6 0h3.74v1.6h.05c.52-.94 1.8-1.93 3.7-1.93 3.96 0 4.7 2.5 4.7 5.76v6.32h-3.9v-5.6c0-1.34-.02-3.06-1.94-3.06-1.95 0-2.25 1.45-2.25 2.96v5.7h-3.9V8.75Z',
}

const d = computed(() => paths[props.name] ?? '')
const filledD = computed(() => filledPaths[props.name] ?? '')
</script>

<template>
  <span
    v-if="!d && !filledD"
    class="inline-flex items-center justify-center rounded bg-red-100 text-[10px] px-1 text-red-600"
  >
    {{ name }}
  </span>
  <svg
    v-else-if="filledD"
    :class="['block flex-shrink-0', sizeClass]"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path :d="filledD" />
  </svg>
  <svg
    v-else
    :class="['block flex-shrink-0', sizeClass]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.7"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path :d="d" />
  </svg>
</template>
