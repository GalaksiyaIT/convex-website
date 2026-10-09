<script setup>
import { caps } from '@/utils/caps'

defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  align: { type: String, default: 'left' }, // left | center
})
</script>

<template>
  <div :class="align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'">
    <p v-if="eyebrow" class="text-xs font-semibold uppercase tracking-wider text-pink mb-3">
      {{ caps(eyebrow) }}
    </p>
    <h2 class="text-3xl sm:text-4xl font-semibold text-navy-dark tracking-tight">
      {{ title }}
    </h2>
    <p v-if="description" class="mt-4 text-base leading-relaxed text-darker-gray">
      {{ description }}
    </p>
    <slot />
  </div>
</template>
