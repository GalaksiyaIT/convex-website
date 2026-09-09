<script setup>
import Container from '@/components/ui/Container.vue'
import AppButton from '@/components/ui/AppButton.vue'

defineProps({
  title: { type: String, default: 'Convex’i ekibinizle konuşmak ister misiniz?' },
  description: {
    type: String,
    default: 'Kısa bir demo ile Convex’in veri setinizde nasıl çalıştığını gösterelim.',
  },
  ctaLabel: { type: String, default: 'Demo Talep Et' },
})
</script>

<template>
  <section class="bg-navy-dark">
    <Container>
      <div
        class="flex flex-col items-start gap-6 py-16 sm:flex-row sm:items-center sm:justify-between sm:py-20"
      >
        <div class="max-w-xl">
          <h2 class="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
            {{ title }}
          </h2>
          <p class="mt-3 text-base text-very-light-blue/80">
            {{ description }}
          </p>
        </div>
        <AppButton to="/iletisim" size="lg" showTrailingIcon class="shrink-0">
          {{ ctaLabel }}
        </AppButton>
      </div>
    </Container>
  </section>
</template>
