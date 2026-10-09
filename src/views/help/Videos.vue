<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import VideoCover from '@/components/ui/VideoCover.vue'
import { videoGuides } from '@/content/videoGuides'
import { caps } from '@/utils/caps'

const videos = ref(videoGuides.filter((v) => !v.hidden).map((v) => ({ ...v })))

function formatDuration(seconds) {
  const m = Math.floor(seconds / 60)
  const s = Math.round(seconds % 60)
    .toString()
    .padStart(2, '0')
  return `${m}:${s}`
}

onMounted(() => {
  for (const item of videos.value) {
    if (!item.videoUrl) continue
    const probe = document.createElement('video')
    probe.preload = 'metadata'
    probe.src = item.videoUrl
    probe.onloadedmetadata = () => {
      item.duration = formatDuration(probe.duration)
    }
  }
})
</script>

<template>
  <PageHero
    eyebrow="Yardım Merkezi · Video Eğitimler"
    title="Okumaktansa izlemeyi mi tercih edersiniz?"
    description="Her adımın yazılı anlatımını okuyun, altındaki ekran kaydıyla izleyerek pekiştirin."
  />

  <section class="py-20">
    <Container>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <RouterLink
          v-for="(v, i) in videos"
          :key="v.slug"
          :to="`/yardim/videolar/${v.slug}`"
          class="group block"
        >
          <div
            class="relative flex aspect-video flex-col items-center justify-center gap-3 overflow-hidden rounded-xl"
            :class="v.videoUrl ? 'bg-gradient-to-br from-purple to-pink' : 'bg-navy-dark'"
          >
            <!-- Tüm kartlar aynı üretilmiş kapağı kullanır (başlık ortadaki boşlukta);
                 posterUrl yalnız video oynatıcısında kapak olarak kullanılır. -->
            <VideoCover :title="v.title" :label="v.thumbnailLabel" :seed="i" />
            <span
              v-if="v.duration"
              class="absolute bottom-2 right-2 rounded px-1.5 py-0.5 text-[11px] text-white"
              :class="v.videoUrl ? 'bg-navy-dark/70' : 'bg-black/50'"
            >
              {{ v.duration }}
            </span>
            <span
              v-else-if="!v.videoUrl"
              class="absolute bottom-2 right-2 rounded bg-black/50 px-1.5 py-0.5 text-[11px] text-white/70"
            >
              Yakında
            </span>
          </div>
          <p class="mt-3 text-xs font-medium uppercase tracking-wide text-pink">
            {{ caps(v.module) }}
          </p>
          <h3 class="mt-1 text-sm font-semibold text-navy-dark">{{ v.title }}</h3>
          <p class="mt-1.5 text-xs leading-relaxed text-darker-gray">{{ v.description }}</p>
          <span class="mt-2 inline-flex items-center gap-1 text-xs font-medium text-pink">
            Yazıyı oku
            <BaseIcon name="arrowRight" sizeClass="w-3 h-3" />
          </span>
        </RouterLink>
      </div>
    </Container>
  </section>
</template>
