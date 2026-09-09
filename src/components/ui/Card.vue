<script setup>
defineProps({
  hover: { type: Boolean, default: false },
})
</script>

<template>
  <div
    class="rounded-2xl border border-light-gray-border bg-white p-6"
    :class="hover ? 'transition-shadow hover:shadow-lg hover:shadow-purple/5' : ''"
  >
    <slot />
  </div>
</template>
