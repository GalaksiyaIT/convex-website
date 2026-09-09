<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import { docsGuides as modules } from '@/content/docsGuides'

const active = ref(0)
</script>

<template>
  <PageHero
    eyebrow="Yardım Merkezi · Dokümantasyon"
    title="Modül modül kullanım kılavuzları"
    description="Ürün modülleriyle birebir eşleşen kılavuzlar — kendi kendinize cevap bulmanız için tasarlandı."
  />

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
              <li
                v-for="guide in modules[active].guides"
                :key="guide"
                class="flex items-center justify-between gap-4 py-3.5 text-sm"
              >
                <span class="text-navy-dark">{{ guide }}</span>
                <BaseIcon name="chevronRight" sizeClass="w-4 h-4 text-darker-gray/50" />
              </li>
            </ul>
            <p class="mt-6 border-t border-light-gray-border pt-5 text-xs text-darker-gray/70">
              Bu bölüm; en çok destek talebi alan konulardan başlanarak kademeli olarak
              genişletilecektir.
            </p>
          </div>
        </div>
      </div>
    </Container>
  </section>

  <section class="border-t border-light-gray-border py-10">
    <Container narrow class="flex flex-col items-center gap-3 text-center">
      <p class="text-sm text-darker-gray">Bu yardımcı oldu mu?</p>
      <div class="flex gap-3">
        <button
          type="button"
          class="rounded-lg border border-light-gray-border px-4 py-2 text-sm font-medium text-navy-dark hover:border-pink hover:text-pink"
        >
          Evet, yardımcı oldu
        </button>
        <RouterLink
          to="/yardim/destek"
          class="rounded-lg border border-light-gray-border px-4 py-2 text-sm font-medium text-navy-dark hover:border-pink hover:text-pink"
        >
          Hayır, destek talebi açmak istiyorum
        </RouterLink>
      </div>
    </Container>
  </section>
</template>
