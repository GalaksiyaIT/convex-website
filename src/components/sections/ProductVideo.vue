<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import Container from '@/components/ui/Container.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import { videoGuides } from '@/content/videoGuides'

// Ürün sayfalarında ilgili Video Eğitim'i gömer; kaynak tek: content/videoGuides.js (slug ile).
const props = defineProps({
  slug: { type: String, required: true },
  eyebrow: { type: String, default: 'Videoda izleyin' },
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  tone: { type: String, default: 'gray' }, // gray | white
})

const guide = computed(() => videoGuides.find((v) => v.slug === props.slug))
</script>

<template>
  <section v-if="guide?.videoUrl" class="py-20" :class="tone === 'gray' ? 'bg-light-gray-bg' : ''">
    <Container>
      <div class="grid gap-10 lg:grid-cols-5 lg:items-center">
        <div class="lg:col-span-2">
          <SectionHeading
            :eyebrow="eyebrow"
            :title="title || guide.title"
            :description="description || guide.description"
          />
          <RouterLink
            :to="`/yardim/videolar/${guide.slug}`"
            class="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-pink"
          >
            Adım adım yazılı anlatımı oku
            <BaseIcon name="arrowRight" sizeClass="w-3.5 h-3.5" />
          </RouterLink>
        </div>
        <div class="lg:col-span-3">
          <div
            class="overflow-hidden rounded-2xl border border-light-gray-border bg-black shadow-xl shadow-navy-dark/10"
          >
            <video
              :src="guide.videoUrl"
              :poster="guide.posterUrl"
              class="aspect-video w-full"
              controls
              playsinline
              preload="metadata"
            />
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
