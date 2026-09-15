<script setup>
import { RouterLink } from 'vue-router'
import Container from '@/components/ui/Container.vue'
import AppButton from '@/components/ui/AppButton.vue'
import Eyebrow from '@/components/ui/Eyebrow.vue'
import Card from '@/components/ui/Card.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import LogoStrip from '@/components/sections/LogoStrip.vue'
import TestimonialCarousel from '@/components/sections/TestimonialCarousel.vue'
import StatBand from '@/components/sections/StatBand.vue'
import VideoShowcase from '@/components/sections/VideoShowcase.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'
import NeuralNetworkAnimation from '@/components/ui/NeuralNetworkAnimation.vue'

const stats = [
  { value: '−60%', label: 'model geliştirme süresi' },
  { value: '×3', label: 'paralel çalıştırılan deneme sayısı' },
  { value: '−70%', label: 'denetime hazırlık süresi' },
  { value: '+8p', label: 'Gini katsayısında iyileşme' },
]

const modules = [
  {
    icon: 'layers',
    title: 'Experiment Pipeline',
    description: 'Veriden modele: feature engineering ve eğitim tek akışta.',
    to: '/urun/experiment-pipeline',
  },
  {
    icon: 'eye',
    title: 'Model Governance',
    description: 'Yorumlayın, denetleyin, onaylayın.',
    to: '/urun/model-governance',
  },
  {
    icon: 'rocket',
    title: 'Deployment & Application',
    description: 'Onaylanan modeli dakikalar içinde canlıya alın.',
    to: '/urun/deployment',
  },
]
</script>

<template>
  <!-- Hero: tek cümlelik konumlandırma + ürün ekranı. Site planı burada tek, net bir
       çağrı istiyor — ikinci bir rakip CTA yok (bkz. Anasayfa içerik stratejisi). -->
  <section class="relative overflow-hidden bg-very-light-pink border-b border-light-gray-border">
    <div
      class="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-light-pink/60 blur-3xl"
    />
    <div
      class="pointer-events-none absolute top-40 -left-24 h-72 w-72 rounded-full bg-very-light-blue blur-3xl"
    />
    <Container>
      <div class="relative grid gap-12 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <Eyebrow>AutoML · Model Risk Yönetimi</Eyebrow>
          <h1 class="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-navy-dark">
            Kredi risk modellerini dakikalar içinde canlıya alın.
          </h1>
          <p class="mt-6 text-lg leading-relaxed text-darker-gray">
            Convex, bankacılık ve finans kuruluşları için uçtan uca bir AutoML platformu. Veri
            hazırlamaktan canlıya almaya, her adım denetlenebilir.
          </p>
          <div class="mt-8">
            <AppButton to="/iletisim" size="lg" showTrailingIcon>Demo Talep Et</AppButton>
          </div>
        </div>

        <div class="relative">
          <div
            class="rounded-2xl border border-light-gray-border bg-white shadow-2xl shadow-navy-dark/10"
          >
            <div class="flex items-center gap-1.5 border-b border-light-gray-border px-4 py-3">
              <span class="h-2.5 w-2.5 rounded-full bg-light-gray-border" />
              <span class="h-2.5 w-2.5 rounded-full bg-light-gray-border" />
              <span class="h-2.5 w-2.5 rounded-full bg-light-gray-border" />
              <span class="ml-3 text-xs text-darker-gray/60"
                >Experiment Pipeline · risk-model-v3</span
              >
            </div>
            <div class="grid grid-cols-5 gap-3 p-5">
              <div class="col-span-2 space-y-2 rounded-xl bg-very-light-blue p-3">
                <p class="text-[11px] font-semibold uppercase tracking-wide text-navyblue">
                  Adımlar
                </p>
                <div
                  v-for="(step, i) in [
                    'Veri Yükleme',
                    'Feature Eng.',
                    'Model Eğitimi',
                    'Governance',
                    'Deploy',
                  ]"
                  :key="step"
                  class="flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs"
                  :class="i === 2 ? 'bg-purple text-white' : 'bg-white text-navy-dark'"
                >
                  <span
                    class="flex h-4 w-4 items-center justify-center rounded-full text-[10px]"
                    :class="i === 2 ? 'bg-white/20' : 'bg-very-light-pink text-pink'"
                    >{{ i + 1 }}</span
                  >
                  {{ step }}
                </div>
              </div>
              <div class="col-span-3 space-y-3">
                <div class="rounded-xl border border-light-gray-border p-3">
                  <p class="text-[11px] font-semibold uppercase tracking-wide text-darker-gray/60">
                    Model Eğitimi — Canlı
                  </p>
                  <div class="mt-2 flex flex-col items-center">
                    <NeuralNetworkAnimation :size="140" :duration="4" />
                    <div class="-mt-2 text-center text-xs text-navy-dark">
                      <p class="font-medium">LightGBM · Fold 4/5</p>
                      <p class="mt-1 text-darker-gray/60">Paralel deneme sayısı: 6</p>
                    </div>
                  </div>
                </div>
                <div class="rounded-xl border border-light-gray-border p-3">
                  <p class="text-[11px] font-semibold uppercase tracking-wide text-darker-gray/60">
                    Governance Durumu
                  </p>
                  <div class="mt-2 flex items-center gap-2">
                    <BaseIcon name="checkCircle" sizeClass="w-4 h-4 text-success-150" />
                    <span class="text-xs text-navy-dark"
                      >Denetim onayı tamamlandı — deploy’a hazır</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>

  <!-- Üç modül özeti — site planında hero içeriğinin bir parçası olarak tarif edilir. -->
  <section class="py-20">
    <Container>
      <SectionHeading
        eyebrow="Üç modülde tek akış"
        title="Veriden canlıya, dakikalar içinde"
        description="Üç modül, tek akış: model yaşam döngüsünün tamamı Convex'te."
      />
      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <RouterLink v-for="mod in modules" :key="mod.to" :to="mod.to">
          <Card hover class="h-full">
            <div
              class="flex h-11 w-11 items-center justify-center rounded-xl bg-very-light-pink text-pink"
            >
              <BaseIcon :name="mod.icon" sizeClass="w-5 h-5" />
            </div>
            <h3 class="mt-4 text-lg font-semibold text-navy-dark">{{ mod.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-darker-gray">{{ mod.description }}</p>
            <span class="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-pink">
              İncele
              <BaseIcon name="arrowRight" sizeClass="w-3.5 h-3.5" />
            </span>
          </Card>
        </RouterLink>
      </div>
    </Container>
  </section>

  <VideoShowcase />

  <!-- "Hemen altında": müşteri logosu şeridi + Vaka Çalışmaları'ndan tek cümlelik alıntı.
       Rakamları önce, alıntıyı ardından göstermek daha ikna edici oluyor (bkz. H2O.ai,
       Domino Data Lab gibi benzer platformların anasayfa düzeni). -->
  <section class="border-t border-light-gray-border bg-light-gray-bg py-16">
    <Container>
      <LogoStrip />
      <div class="mt-12 mx-auto max-w-4xl">
        <StatBand :stats="stats" />
      </div>
      <div class="mt-10">
        <TestimonialCarousel />
      </div>
    </Container>
  </section>

  <section class="py-20">
    <Container narrow class="text-center">
      <SectionHeading
        align="center"
        eyebrow="Bankacılık ve finans için"
        title="Hızlı çalışın. Denetimde şaşırmayın."
        description="Kredi skorlama, risk modelleme ve model denetiminde hem hız hem denetlenebilirlik."
      />
      <RouterLink
        to="/cozumler"
        class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-pink"
      >
        Çözümleri incele
        <BaseIcon name="arrowRight" sizeClass="w-4 h-4" />
      </RouterLink>
    </Container>
  </section>

  <CtaBanner />
</template>
