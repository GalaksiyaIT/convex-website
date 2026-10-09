<script setup>
import BaseIcon from '@/components/ui/BaseIcon.vue'

defineProps({
  quote: { type: String, required: true },
  name: { type: String, required: true },
  title: { type: String, required: true },
  company: { type: String, required: true },
  avatar: { type: String, default: null }, // yer tutucu stok fotoğraf yolu (bkz. src/assets/avatars/README.md)
})
</script>

<template>
  <figure
    class="flex h-full flex-col rounded-2xl border border-light-gray-border bg-very-light-pink/40 p-8"
  >
    <BaseIcon name="quote" sizeClass="w-8 h-8 text-pink/50" />
    <blockquote class="mt-4 flex-1 text-lg leading-relaxed text-navy-dark">
      "{{ quote }}"
    </blockquote>
    <figcaption class="mt-6 flex items-center gap-3">
      <img
        v-if="avatar"
        :src="avatar"
        :alt="name"
        class="h-10 w-10 flex-shrink-0 rounded-full object-cover"
      />
      <span
        v-else
        class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-very-light-pink text-pink"
      >
        <BaseIcon name="user" sizeClass="w-5 h-5" />
      </span>
      <span class="text-sm">
        <span class="block font-semibold text-navy-dark">{{ name }}</span>
        <span class="text-darker-gray">{{ title }}, {{ company }}</span>
      </span>
    </figcaption>
  </figure>
</template>
