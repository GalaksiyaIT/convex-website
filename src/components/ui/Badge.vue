<script setup>
defineProps({
  tone: { type: String, default: 'neutral' }, // neutral | pink | success | warning | navy
})
</script>

<template>
  <span
    class="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium"
    :class="{
      'border-light-gray-border bg-light-gray-bg text-darker-gray': tone === 'neutral',
      'border-light-pink bg-very-light-pink text-pink': tone === 'pink',
      'border-success-100/40 bg-success-50 text-success-150': tone === 'success',
      'border-warning-100/40 bg-warning-50 text-warning-150': tone === 'warning',
      'border-navyblue/20 bg-very-light-blue text-navyblue': tone === 'navy',
    }"
  >
    <slot />
  </span>
</template>
