<script setup>
import Container from '@/components/ui/Container.vue'

defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  tone: { type: String, default: 'light' }, // light | dark
})
</script>

<template>
  <section
    class="relative overflow-hidden border-b"
    :class="
      tone === 'dark'
        ? 'bg-navy-dark border-navy-dark text-white'
        : 'bg-very-light-pink border-light-gray-border'
    "
  >
    <div
      class="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl"
      :class="tone === 'dark' ? 'bg-purple/30' : 'bg-light-pink/70'"
    />
    <Container>
      <div class="relative py-16 sm:py-20 max-w-3xl">
        <p
          v-if="eyebrow"
          class="text-xs font-semibold uppercase tracking-wider mb-4"
          :class="tone === 'dark' ? 'text-very-light-pink' : 'text-pink'"
        >
          {{ eyebrow }}
        </p>
        <h1
          class="text-4xl sm:text-5xl font-semibold tracking-tight"
          :class="tone === 'dark' ? 'text-white' : 'text-navy-dark'"
        >
          {{ title }}
        </h1>
        <p
          v-if="description"
          class="mt-5 text-lg leading-relaxed"
          :class="tone === 'dark' ? 'text-very-light-blue/80' : 'text-darker-gray'"
        >
          {{ description }}
        </p>
        <div v-if="$slots.actions" class="mt-8 flex flex-wrap items-center gap-4">
          <slot name="actions" />
        </div>
      </div>
    </Container>
  </section>
</template>
