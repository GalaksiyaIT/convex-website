<script setup>
import { computed } from 'vue'
import Container from '@/components/ui/Container.vue'
import AppButton from '@/components/ui/AppButton.vue'
import { t } from '@/i18n'

const props = defineProps({
  title: { type: String, default: undefined },
  description: { type: String, default: undefined },
  ctaLabel: { type: String, default: undefined },
})

const titleText = computed(
  () =>
    props.title ??
    t({
      en: 'Want to talk to your team about Convex?',
      tr: 'Convex’i ekibinizle konuşmak ister misiniz?',
    }),
)
const descriptionText = computed(
  () =>
    props.description ??
    t({
      en: 'Let us show you how Convex works on your own dataset in a short demo.',
      tr: 'Kısa bir demo ile Convex’in veri setinizde nasıl çalıştığını gösterelim.',
    }),
)
const ctaText = computed(() => props.ctaLabel ?? t({ en: 'Request a Demo', tr: 'Demo Talep Et' }))
</script>

<template>
  <section class="bg-navy-dark">
    <Container>
      <div
        class="flex flex-col items-start gap-6 py-16 sm:flex-row sm:items-center sm:justify-between sm:py-20"
      >
        <div class="max-w-xl">
          <h2 class="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
            {{ titleText }}
          </h2>
          <p class="mt-3 text-base text-very-light-blue/80">
            {{ descriptionText }}
          </p>
        </div>
        <AppButton to="/iletisim" size="lg" showTrailingIcon class="shrink-0">
          {{ ctaText }}
        </AppButton>
      </div>
    </Container>
  </section>
</template>
