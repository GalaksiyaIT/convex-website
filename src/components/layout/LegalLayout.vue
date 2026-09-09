<script setup>
import Container from '@/components/ui/Container.vue'

defineProps({
  title: { type: String, required: true },
  updatedAt: { type: String, default: '' },
})
</script>

<template>
  <section class="border-b border-light-gray-border bg-light-gray-bg py-14">
    <Container narrow>
      <h1 class="text-3xl font-semibold tracking-tight text-navy-dark">{{ title }}</h1>
      <p v-if="updatedAt" class="mt-2 text-sm text-darker-gray/70">
        Son güncelleme: {{ updatedAt }}
      </p>
    </Container>
  </section>
  <section class="py-14">
    <Container narrow>
      <div
        class="prose-convex space-y-6 text-sm leading-relaxed text-darker-gray [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-navy-dark [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2"
      >
        <slot />
      </div>
    </Container>
  </section>
</template>
