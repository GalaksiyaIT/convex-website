<script setup>
import { ref, onMounted } from 'vue'
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import datasetVideoUrl from '@/assets/videos/dataset-yukleme.webm'
import girisVideoUrl from '@/assets/videos/giris.webm'
import veriGorsellestirmeVideoUrl from '@/assets/videos/veri-gorsellestirme.webm'
import dataSampleVideoUrl from '@/assets/videos/data-sample.webm'
import projectVideoUrl from '@/assets/videos/project.webm'
import portfolioVideoUrl from '@/assets/videos/portfolio.webm'
import useCaseVideoUrl from '@/assets/videos/use-case.webm'
import experimentPipelineVideoUrl from '@/assets/videos/experiment-pipeline.webm'

const videos = ref([
  {
    title: "Convex'e giriş: ilk projenizi oluşturma",
    duration: null,
    module: 'Giriş',
    thumbnailLabel: 'Giriş',
    videoUrl: girisVideoUrl,
  },
  {
    title: 'Dataset yükleme ve şema doğrulama',
    duration: null,
    module: 'Dataset',
    thumbnailLabel: 'Dataset Yükleme',
    videoUrl: datasetVideoUrl,
  },
  {
    title: 'Veri görselleştirme',
    duration: null,
    module: 'Dataset',
    thumbnailLabel: 'Veri Görselleştirme',
    videoUrl: veriGorsellestirmeVideoUrl,
  },
  {
    title: 'Veri örnekleme',
    duration: null,
    module: 'Dataset',
    thumbnailLabel: 'Veri Örnekleme',
    videoUrl: dataSampleVideoUrl,
  },
  {
    title: 'Proje oluşturma ve yönetimi',
    duration: null,
    module: 'Proje',
    thumbnailLabel: 'Proje',
    videoUrl: projectVideoUrl,
  },
  {
    title: 'Portföy yönetimi',
    duration: null,
    module: 'Portföy',
    thumbnailLabel: 'Portföy',
    videoUrl: portfolioVideoUrl,
  },
  {
    title: 'Kullanım senaryosu tanımlama',
    duration: null,
    module: 'Kullanım Senaryosu',
    thumbnailLabel: 'Kullanım Senaryosu',
    videoUrl: useCaseVideoUrl,
  },
  {
    title: 'Experiment Pipeline ile ilk deneyinizi kurma',
    duration: null,
    module: 'Experiment Pipeline',
    thumbnailLabel: 'Experiment Pipeline',
    videoUrl: experimentPipelineVideoUrl,
  },
  { title: 'Model Governance: yorumlama ve onay akışı', duration: '7:20', module: 'Governance' },
  { title: 'Modeli deploy etme ve application oluşturma', duration: '5:54', module: 'Deployment' },
  { title: 'Champion/challenger karşılaştırması', duration: '6:10', module: 'Experiment Pipeline' },
])

const activeVideo = ref(null)

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
    description="Adım adım ekran kayıtları ile Convex'in temel akışlarını izleyerek öğrenin."
  />

  <section class="py-20">
    <Container>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="v in videos"
          :key="v.title"
          class="group"
          :class="v.videoUrl ? 'cursor-pointer' : 'cursor-default'"
          @click="v.videoUrl && (activeVideo = v)"
        >
          <div
            class="relative flex aspect-video flex-col items-center justify-center gap-3 overflow-hidden rounded-xl"
            :class="v.videoUrl ? 'bg-gradient-to-br from-purple to-pink' : 'bg-navy-dark'"
          >
            <p
              v-if="v.thumbnailLabel"
              class="px-4 text-center text-base font-semibold text-white sm:text-lg"
            >
              {{ v.thumbnailLabel }}
            </p>
            <BaseIcon
              name="playCircle"
              sizeClass="w-12 h-12 text-white/80 transition-colors"
              :class="v.videoUrl ? 'group-hover:text-white' : ''"
            />
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
          <p class="mt-3 text-xs font-medium uppercase tracking-wide text-pink">{{ v.module }}</p>
          <h3 class="mt-1 text-sm font-semibold text-navy-dark">{{ v.title }}</h3>
        </div>
      </div>
    </Container>
  </section>

  <div
    v-if="activeVideo"
    class="fixed inset-0 z-[70] flex items-center justify-center bg-navy-dark/80 p-4"
    role="dialog"
    aria-modal="true"
    :aria-label="activeVideo.title"
    @click.self="activeVideo = null"
  >
    <div class="w-full max-w-3xl overflow-hidden rounded-2xl bg-black">
      <div class="flex items-center justify-between p-2 pl-4">
        <p class="text-xs text-white/70">{{ activeVideo.title }}</p>
        <button
          class="rounded-lg px-2 py-1 text-xs text-white/70 hover:text-white"
          @click="activeVideo = null"
        >
          Kapat
        </button>
      </div>
      <div class="aspect-video">
        <video
          :src="activeVideo.videoUrl"
          class="h-full w-full"
          controls
          autoplay
          playsinline
        />
      </div>
    </div>
  </div>
</template>
