<script setup>
defineProps({
  sizeClass: { type: String, default: 'h-7 w-auto' },
})

// Standalone Convex wordmark — the SVG copied from the product repo (logo.svg)
// turned out to be an "Experian × Convex" co-branded lockup used for one specific
// deployment, not a generic mark, so it isn't reused here. Keeps the brand's
// dot-grid motif (see automl-ui-new BaseIcon set) with the palette from style.css.
</script>

<template>
  <svg :class="sizeClass" viewBox="0 0 150 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <circle cx="7" cy="9" r="4.4" fill="#AF1685" />
      <circle cx="19" cy="7" r="3" fill="#6D2077" />
      <circle cx="7" cy="21" r="2.6" fill="#C1188B" />
      <circle cx="19" cy="21" r="4" fill="#6D2077" />
    </g>
    <text
      x="32"
      y="23"
      font-family="Roboto, sans-serif"
      font-size="20"
      font-weight="600"
      fill="#141926"
    >
      convex
    </text>
  </svg>
</template>
