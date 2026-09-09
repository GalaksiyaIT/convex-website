<script setup>
defineProps({
  narrow: { type: Boolean, default: false },
})
</script>

<template>
  <div class="mx-auto w-full px-6 lg:px-8" :class="narrow ? 'max-w-3xl' : 'max-w-7xl'">
    <slot />
  </div>
</template>
