<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import { getDocsGuides } from '@/content/docsGuides'
import { locale, useCopy } from '@/i18n'

const modules = computed(() => getDocsGuides(locale.value))
const active = ref(0)

const c = useCopy({
  en: {
    eyebrow: 'Help Center · Documentation',
    title: 'Module-by-module user guides',
    description:
      'Guides that map one-to-one to the product modules, designed so you can find answers on your own.',
    footnote:
      'Each topic links to its video tutorial and step-by-step written walkthrough. This section will keep growing over time.',
    helpful: 'Was this helpful?',
    yes: 'Yes, it helped',
    no: 'No, I’d like to open a support ticket',
  },
  tr: {
    eyebrow: 'Yardım Merkezi · Dokümantasyon',
    title: 'Modül modül kullanım kılavuzları',
    description:
      'Ürün modülleriyle birebir eşleşen kılavuzlar — kendi kendinize cevap bulmanız için tasarlandı.',
    footnote:
      'Her başlık, ilgili video eğitime ve adım adım yazılı anlatımına bağlanır. Bu bölüm kademeli olarak genişletilecektir.',
    helpful: 'Bu yardımcı oldu mu?',
    yes: 'Evet, yardımcı oldu',
    no: 'Hayır, destek talebi açmak istiyorum',
  },
})
</script>

<template>
  <PageHero :eyebrow="c.eyebrow" :title="c.title" :description="c.description" />

  <section class="py-20">
    <Container>
      <div class="grid gap-8 lg:grid-cols-4">
        <nav class="lg:col-span-1">
          <ul class="space-y-1">
            <li v-for="(m, i) in modules" :key="m.title">
              <button
                class="flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors"
                :class="
                  active === i
                    ? 'bg-very-light-pink text-pink'
                    : 'text-navy-dark hover:bg-light-gray-bg'
                "
                @click="active = i"
              >
                <BaseIcon :name="m.icon" sizeClass="w-4 h-4 flex-shrink-0" />
                {{ m.title }}
              </button>
            </li>
          </ul>
        </nav>
        <div class="lg:col-span-3">
          <div class="rounded-2xl border border-light-gray-border p-6">
            <h2 class="text-lg font-semibold text-navy-dark">{{ modules[active].title }}</h2>
            <ul class="mt-5 divide-y divide-light-gray-border">
              <li v-for="guide in modules[active].guides" :key="guide.title">
                <RouterLink
                  :to="guide.video ? `/yardim/videolar/${guide.video}` : '/yardim/dokumantasyon'"
                  class="group flex items-center justify-between gap-4 py-3.5 text-sm"
                >
                  <span class="text-navy-dark group-hover:text-pink">{{ guide.title }}</span>
                  <span class="flex items-center gap-1.5 text-xs text-darker-gray/60">
                    <BaseIcon v-if="guide.video" name="playCircle" sizeClass="w-4 h-4 text-pink" />
                    <BaseIcon name="chevronRight" sizeClass="w-4 h-4 text-darker-gray/50" />
                  </span>
                </RouterLink>
              </li>
            </ul>
            <p class="mt-6 border-t border-light-gray-border pt-5 text-xs text-darker-gray/70">
              {{ c.footnote }}
            </p>
          </div>
        </div>
      </div>
    </Container>
  </section>

  <section class="border-t border-light-gray-border py-10">
    <Container narrow class="flex flex-col items-center gap-3 text-center">
      <p class="text-sm text-darker-gray">{{ c.helpful }}</p>
      <div class="flex gap-3">
        <button
          type="button"
          class="rounded-lg border border-light-gray-border px-4 py-2 text-sm font-medium text-navy-dark hover:border-pink hover:text-pink"
        >
          {{ c.yes }}
        </button>
        <RouterLink
          to="/yardim/destek"
          class="rounded-lg border border-light-gray-border px-4 py-2 text-sm font-medium text-navy-dark hover:border-pink hover:text-pink"
        >
          {{ c.no }}
        </RouterLink>
      </div>
    </Container>
  </section>
</template>
