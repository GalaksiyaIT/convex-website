<script setup>
import BaseIcon from '@/components/ui/BaseIcon.vue'

defineProps({
  quote: { type: String, required: true },
  name: { type: String, required: true },
  title: { type: String, required: true },
  company: { type: String, required: true },
})
</script>

<template>
  <figure class="rounded-2xl border border-light-gray-border bg-very-light-pink/40 p-8">
    <BaseIcon name="quote" sizeClass="w-8 h-8 text-pink/50" />
    <blockquote class="mt-4 text-lg leading-relaxed text-navy-dark">"{{ quote }}"</blockquote>
    <figcaption class="mt-6 text-sm">
      <span class="font-semibold text-navy-dark">{{ name }}</span>
      <span class="text-darker-gray"> · {{ title }}, {{ company }}</span>
    </figcaption>
  </figure>
</template>
