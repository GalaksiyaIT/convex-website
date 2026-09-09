<script setup>
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'

const videos = [
  { title: "Convex'e giriş: ilk projenizi oluşturma", duration: '4:12', module: 'Başlangıç' },
  { title: 'Dataset yükleme ve şema doğrulama', duration: '6:48', module: 'Dataset' },
  {
    title: 'Experiment Pipeline ile ilk deneyinizi kurma',
    duration: '9:35',
    module: 'Experiment Pipeline',
  },
  { title: 'Model Governance: yorumlama ve onay akışı', duration: '7:20', module: 'Governance' },
  { title: 'Modeli deploy etme ve application oluşturma', duration: '5:54', module: 'Deployment' },
  { title: 'Champion/challenger karşılaştırması', duration: '6:10', module: 'Experiment Pipeline' },
]
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
        <div v-for="v in videos" :key="v.title" class="group cursor-pointer">
          <div
            class="relative flex aspect-video items-center justify-center rounded-xl bg-navy-dark"
          >
            <BaseIcon
              name="playCircle"
              sizeClass="w-12 h-12 text-white/80 group-hover:text-white transition-colors"
            />
            <span
              class="absolute bottom-2 right-2 rounded bg-black/50 px-1.5 py-0.5 text-[11px] text-white"
            >
              {{ v.duration }}
            </span>
          </div>
          <p class="mt-3 text-xs font-medium uppercase tracking-wide text-pink">{{ v.module }}</p>
          <h3 class="mt-1 text-sm font-semibold text-navy-dark">{{ v.title }}</h3>
        </div>
      </div>
    </Container>
  </section>
</template>
