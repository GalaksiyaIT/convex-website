<script setup>
defineProps({
  tone: { type: String, default: 'pink' }, // pink | light
})
</script>

<template>
  <span
    class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider"
    :class="tone === 'light' ? 'text-very-light-pink' : 'text-pink'"
  >
    <span
      class="h-1.5 w-1.5 rounded-full"
      :class="tone === 'light' ? 'bg-very-light-pink' : 'bg-pink'"
    />
    <slot />
  </span>
</template>
