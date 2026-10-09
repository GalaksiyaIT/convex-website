<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import Container from '@/components/ui/Container.vue'
import Badge from '@/components/ui/Badge.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'
import { videoGuides } from '@/content/videoGuides'

const route = useRoute()
const guide = computed(() => videoGuides.find((v) => v.slug === route.params.slug))
const duration = ref(guide.value?.duration ?? null)
const videoEl = ref(null)
const currentTime = ref(0)

function formatDuration(seconds) {
  const m = Math.floor(seconds / 60)
  const s = Math.round(seconds % 60)
    .toString()
    .padStart(2, '0')
  return `${m}:${s}`
}

const activeStepIndex = computed(() => {
  const steps = guide.value?.steps
  if (!steps || steps.length === 0) return -1
  let index = 0
  for (let i = 0; i < steps.length; i += 1) {
    if (currentTime.value >= steps[i].time) index = i
  }
  return index
})

function seekToStep(step) {
  if (!videoEl.value) return
  videoEl.value.currentTime = step.time
  videoEl.value.play()
}

// Bileşen video sayfaları arasında yeniden kullanılır (arama, geri/ileri): süre ve
// oynatma konumu her slug değişiminde sıfırlanıp yeniden hesaplanır.
watch(
  guide,
  (g) => {
    duration.value = g?.duration ?? null
    currentTime.value = 0
    if (!g?.videoUrl) return
    const probe = document.createElement('video')
    probe.preload = 'metadata'
    probe.src = g.videoUrl
    probe.onloadedmetadata = () => {
      if (guide.value === g) duration.value = formatDuration(probe.duration)
    }
  },
  { immediate: true },
)

// Sıradaki video: `next` alanı (seri) varsa o, yoksa listede görünen sıradaki video.
// `comingNext`: serinin henüz yayımlanmamış sıradaki bölümü (yalnız yazı).
const nextGuide = computed(() => {
  const g = guide.value
  if (!g || g.hidden) return null
  if (g.next) return videoGuides.find((v) => v.slug === g.next) ?? null
  const visible = videoGuides.filter((v) => !v.hidden)
  return visible[visible.findIndex((v) => v.slug === g.slug) + 1] ?? null
})
</script>

<template>
  <template v-if="guide">
    <section class="border-b border-light-gray-border bg-very-light-pink">
      <Container narrow>
        <div class="py-14 sm:py-16">
          <div>
            <RouterLink
              to="/yardim/videolar"
              class="inline-flex items-center gap-1.5 text-sm font-medium text-pink"
            >
              <BaseIcon name="arrowRight" sizeClass="w-3.5 h-3.5 rotate-180" />
              Video Eğitimlere dön
            </RouterLink>
          </div>
          <Badge tone="navy" class="mt-5">{{ guide.module }}</Badge>
          <h1 class="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-navy-dark">
            {{ guide.title }}
          </h1>
          <p v-if="duration" class="mt-3 text-sm text-darker-gray/70">{{ duration }} video</p>
        </div>
      </Container>
    </section>

    <section class="py-16">
      <Container narrow>
        <div class="prose-convex space-y-5 text-base leading-relaxed text-darker-gray">
          <p v-for="(paragraph, i) in guide.body" :key="i">{{ paragraph }}</p>
        </div>

        <div v-if="guide.videoUrl" class="mt-10">
          <p class="text-xs font-semibold uppercase tracking-wide text-darker-gray/60">Video</p>
          <div class="mt-3 overflow-hidden rounded-2xl border border-light-gray-border bg-black">
            <video
              ref="videoEl"
              :src="guide.videoUrl"
              :poster="guide.posterUrl"
              class="aspect-video w-full"
              controls
              playsinline
              @timeupdate="currentTime = $event.target.currentTime"
            />
          </div>

          <ol v-if="guide.steps?.length" class="mt-4 space-y-2">
            <li v-for="(step, i) in guide.steps" :key="i">
              <button
                type="button"
                class="flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors"
                :class="
                  i === activeStepIndex
                    ? 'border-pink/40 bg-very-light-pink text-navy-dark'
                    : 'border-light-gray-border bg-white text-darker-gray/80 hover:border-pink/30'
                "
                @click="seekToStep(step)"
              >
                <span
                  class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold"
                  :class="
                    i === activeStepIndex
                      ? 'bg-pink text-white'
                      : 'bg-light-gray-bg text-darker-gray/60'
                  "
                >
                  {{ i + 1 }}
                </span>
                <span>{{ step.text }}</span>
              </button>
            </li>
          </ol>
        </div>
        <div
          v-else
          class="mt-10 rounded-2xl border border-light-gray-border bg-light-gray-bg p-6 text-center text-sm text-darker-gray"
        >
          Bu adımın video kaydı yakında eklenecek.
        </div>

        <div v-if="guide.comingNext || nextGuide" class="mt-10 space-y-3">
          <p
            v-if="guide.comingNext"
            class="rounded-xl border border-dashed border-light-gray-border px-4 py-3 text-sm text-darker-gray"
          >
            Serinin sıradaki bölümü yakında:
            <span class="font-semibold text-navy-dark">{{ guide.comingNext }}</span>
          </p>
          <RouterLink
            v-if="nextGuide"
            :to="`/yardim/videolar/${nextGuide.slug}`"
            class="group flex items-center justify-between gap-4 rounded-2xl border border-light-gray-border p-5 transition-colors hover:border-pink/40 hover:bg-very-light-pink"
          >
            <span>
              <span class="block text-xs font-semibold text-pink">Sıradaki video</span>
              <span class="mt-1 block font-semibold text-navy-dark group-hover:text-pink">
                {{ nextGuide.title }}
              </span>
            </span>
            <BaseIcon name="arrowRight" sizeClass="w-5 h-5 text-pink shrink-0" />
          </RouterLink>
        </div>
      </Container>
    </section>

    <CtaBanner />
  </template>

  <template v-else>
    <section class="flex min-h-[50vh] items-center justify-center py-20">
      <Container narrow class="text-center">
        <h1 class="text-2xl font-semibold text-navy-dark">Video bulunamadı</h1>
        <RouterLink
          to="/yardim/videolar"
          class="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-pink"
        >
          Video Eğitimlere dön
        </RouterLink>
      </Container>
    </section>
  </template>
</template>
