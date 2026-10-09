<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import Badge from '@/components/ui/Badge.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'
import { testimonials } from '@/content/testimonials'

const sectors = ['Tümü', ...new Set(testimonials.map((t) => t.sector))]
const activeSector = ref('Tümü')
const filtered = computed(() =>
  activeSector.value === 'Tümü'
    ? testimonials
    : testimonials.filter((t) => t.sector === activeSector.value),
)
</script>

<template>
  <PageHero
    eyebrow="Referanslar"
    title="Convex'e güvenen ekipler"
    description="Karar sürecinizin sonunda hızlıca göz atabileceğiniz, kanıt yoğun bir liste."
  />

  <section class="py-20">
    <Container>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="s in sectors"
          :key="s"
          class="rounded-full border px-4 py-1.5 text-sm font-medium transition-colors"
          :class="
            activeSector === s
              ? 'border-pink bg-very-light-pink text-pink'
              : 'border-light-gray-border text-darker-gray hover:border-pink hover:text-pink'
          "
          @click="activeSector = s"
        >
          {{ s }}
        </button>
      </div>

      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <figure
          v-for="t in filtered"
          :key="t.name"
          class="flex flex-col rounded-2xl border border-light-gray-border p-6"
        >
          <BaseIcon name="quote" sizeClass="w-6 h-6 text-pink/50" />
          <blockquote class="mt-4 flex-1 text-sm leading-relaxed text-navy-dark">
            "{{ t.quote }}"
          </blockquote>
          <figcaption class="mt-6">
            <div class="flex items-center gap-3">
              <img
                :src="t.avatar"
                :alt="t.name"
                class="h-10 w-10 flex-shrink-0 rounded-full object-cover"
              />
              <div>
                <p class="text-sm font-semibold text-navy-dark">{{ t.name }}</p>
                <p class="text-xs text-darker-gray">{{ t.title }}, {{ t.company }}</p>
              </div>
            </div>
            <div class="mt-3 flex items-center justify-between">
              <Badge tone="pink">{{ t.sector }}</Badge>
              <RouterLink
                :to="t.caseStudy"
                class="inline-flex items-center gap-1 text-xs font-medium text-pink"
              >
                Tüm hikayeyi oku
                <BaseIcon name="arrowRight" sizeClass="w-3 h-3" />
              </RouterLink>
            </div>
          </figcaption>
        </figure>
      </div>
    </Container>
  </section>

  <CtaBanner />
</template>
