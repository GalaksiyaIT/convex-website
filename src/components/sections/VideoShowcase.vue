<script setup>
import { ref } from 'vue'
import Container from '@/components/ui/Container.vue'
import AppButton from '@/components/ui/AppButton.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'

defineProps({
  title: { type: String, default: 'Agentic AI ile çalışıyoruz' },
  description: {
    type: String,
    default:
      'Convex, yapay zeka ajanlarını iş akışına nasıl kattığımızı kısa bir videoda anlatıyor.',
  },
  ctaLabel: { type: String, default: 'Videoyu izle' },
  // Gerçek video eklendiğinde: youtube/vimeo embed linki (ör. https://www.youtube.com/embed/XXXXXXXXXXX)
  videoUrl: { type: String, default: null },
})

const open = ref(false)
</script>

<template>
  <section class="relative overflow-hidden bg-navy-dark py-24 text-white">
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple/40 via-navy-dark to-navy-dark"
    />
    <div
      class="pointer-events-none absolute -left-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-pink/30 blur-3xl"
    />
    <div
      class="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-purple/40 blur-3xl"
    />

    <Container>
      <div class="relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 class="text-3xl font-semibold tracking-tight sm:text-4xl">{{ title }}</h2>
          <p class="mt-4 max-w-md text-base leading-relaxed text-very-light-blue/80">
            {{ description }}
          </p>
          <AppButton class="mt-8" size="lg" icon="playCircle" @click="open = true">
            {{ ctaLabel }}
          </AppButton>
        </div>

        <button
          type="button"
          class="group relative mx-auto flex aspect-video w-full max-w-lg items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-transform hover:scale-[1.02]"
          :aria-label="ctaLabel"
          @click="open = true"
        >
          <span class="absolute h-20 w-20 animate-ping rounded-full bg-pink/50" />
          <span
            class="relative flex h-20 w-20 items-center justify-center rounded-full bg-pink text-white shadow-lg shadow-pink/40 transition-transform group-hover:scale-110"
          >
            <BaseIcon name="playCircle" sizeClass="w-10 h-10" />
          </span>
        </button>
      </div>
    </Container>

    <div
      v-if="open"
      class="fixed inset-0 z-[70] flex items-center justify-center bg-navy-dark/80 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Video"
      @click.self="open = false"
    >
      <div class="w-full max-w-3xl overflow-hidden rounded-2xl bg-black">
        <div class="flex items-center justify-end p-2">
          <button
            class="rounded-lg px-2 py-1 text-xs text-white/70 hover:text-white"
            @click="open = false"
          >
            Kapat
          </button>
        </div>
        <div class="aspect-video">
          <iframe
            v-if="videoUrl"
            :src="videoUrl"
            class="h-full w-full"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowfullscreen
          />
          <div
            v-else
            class="flex h-full w-full flex-col items-center justify-center gap-2 text-center text-white/70"
          >
            <BaseIcon name="playCircle" sizeClass="w-10 h-10" />
            <p class="text-sm">Video yakında eklenecek.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
