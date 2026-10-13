<script setup>
import { computed, ref, watch, onBeforeUnmount } from 'vue'
import Container from '@/components/ui/Container.vue'
import AppButton from '@/components/ui/AppButton.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import { t } from '@/i18n'

const props = defineProps({
  title: { type: String, default: undefined },
  description: { type: String, default: undefined },
  ctaLabel: { type: String, default: undefined },
  // Gerçek video eklendiğinde: youtube/vimeo embed linki (ör. https://www.youtube.com/embed/XXXXXXXXXXX)
  videoUrl: { type: String, default: null },
  // Sitede barındırılan video dosyası (öncelikli) ve önizleme karesi.
  videoSrc: { type: String, default: null },
  poster: { type: String, default: null },
})

const titleText = computed(
  () => props.title ?? t({ en: 'We work with agentic AI', tr: 'Agentic AI ile çalışıyoruz' }),
)
const descriptionText = computed(
  () =>
    props.description ??
    t({
      en: 'A short video on how Convex brings AI agents into the workflow.',
      tr: 'Convex, yapay zeka ajanlarını iş akışına nasıl kattığımızı kısa bir videoda anlatıyor.',
    }),
)
const ctaText = computed(() => props.ctaLabel ?? t({ en: 'Watch the video', tr: 'Videoyu izle' }))

const open = ref(false)

// Pencere açıkken Esc ile kapanır; kapanınca video DOM'dan kalktığı için durur.
function onKey(e) {
  if (e.key === 'Escape') open.value = false
}
watch(open, (v) => {
  if (typeof window === 'undefined') return
  if (v) window.addEventListener('keydown', onKey)
  else window.removeEventListener('keydown', onKey)
})
onBeforeUnmount(() => typeof window !== 'undefined' && window.removeEventListener('keydown', onKey))
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
          <h2 class="text-3xl font-semibold tracking-tight sm:text-4xl">{{ titleText }}</h2>
          <p class="mt-4 max-w-md text-base leading-relaxed text-very-light-blue/80">
            {{ descriptionText }}
          </p>
          <AppButton class="mt-8" size="lg" icon="playCircle" @click="open = true">
            {{ ctaText }}
          </AppButton>
        </div>

        <button
          type="button"
          class="group relative mx-auto flex aspect-video w-full max-w-lg items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-transform hover:scale-[1.02]"
          :aria-label="ctaText"
          @click="open = true"
        >
          <img
            v-if="poster"
            :src="poster"
            alt=""
            loading="lazy"
            class="absolute inset-0 h-full w-full rounded-2xl object-cover"
          />
          <!-- Kapak varken oynat düğmesi kapaktaki başlığın üstüne binmesin diye sağ alt köşede. -->
          <span
            class="absolute flex items-center justify-center"
            :class="poster ? 'bottom-4 right-4' : ''"
          >
            <span
              class="absolute animate-ping rounded-full bg-pink/50"
              :class="poster ? 'h-14 w-14' : 'h-20 w-20'"
            />
            <span
              class="relative flex items-center justify-center rounded-full bg-pink text-white shadow-lg shadow-pink/40 transition-transform group-hover:scale-110"
              :class="poster ? 'h-14 w-14' : 'h-20 w-20'"
            >
              <BaseIcon name="playCircle" :sizeClass="poster ? 'w-7 h-7' : 'w-10 h-10'" />
            </span>
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
            {{ t({ en: 'Close', tr: 'Kapat' }) }}
          </button>
        </div>
        <div class="aspect-video">
          <video
            v-if="videoSrc"
            :src="videoSrc"
            :poster="poster"
            class="h-full w-full"
            controls
            autoplay
            playsinline
          />
          <iframe
            v-else-if="videoUrl"
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
            <p class="text-sm">
              {{ t({ en: 'Video coming soon.', tr: 'Video yakında eklenecek.' }) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
