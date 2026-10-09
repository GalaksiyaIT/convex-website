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
import { ref, onMounted } from 'vue'
import hizliBakisUrl from '@/assets/videos/irem/hizli-bakis.webm'
import hizliBakisPoster from '@/assets/posters/hizli-bakis.jpg'

// Ürün ekranlarından doğrulanabilir sayılar (müşteri iddiası değil).
const stats = [
  { value: '6', label: 'algoritma: LR, LightGBM, XGBoost, CatBoost, Random Forest, SGD' },
  { value: '9', label: 'feature selection yöntemi' },
  { value: '2', label: 'sentetik veri yöntemi: CTGAN ve CART' },
  { value: '1 tık', label: 'ile modeli canlıya dağıtım' },
]

const heroVideo = ref(null)
const reduceMotion =
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

onMounted(() => {
  const v = heroVideo.value
  if (!v) return
  v.muted = true // autoplay için tarayıcılar sessiz olmasını şart koşar
  if (!reduceMotion) v.play().catch(() => {})
})

const modules = [
  {
    icon: 'database',
    title: 'Veri Yönetimi',
    description: 'Veriyi alın, birleştirin, sürümleyin, sentetik veri üretin.',
    to: '/urun/veri-yonetimi',
  },
  {
    icon: 'layers',
    title: 'Experiment Pipeline',
    description: 'Kod yazmadan feature engineering ve model eğitimi.',
    to: '/urun/experiment-pipeline',
  },
  {
    icon: 'upload',
    title: 'Özel Modeller',
    description: 'Kendi modelinizi getirin, sürümleyin, yeniden eğitin.',
    to: '/urun/ozel-modeller',
  },
  {
    icon: 'eye',
    title: 'Model Governance',
    description: 'Yorumlayın, raporlayın, denetim kaydını tutun.',
    to: '/urun/model-governance',
  },
  {
    icon: 'rocket',
    title: 'Deployment & Application',
    description: 'Canlıya alın, izleyin, API ve batch ile skorlayın.',
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
            Yarının Kararını Bugün Kurun.
          </h1>
          <p class="mt-6 text-lg leading-relaxed text-darker-gray">
            Convex, kuruluşlar için uçtan uca bir AutoML platformu. Veri hazırlamaktan canlıya
            almaya, her adım denetlenebilir.
          </p>
          <div class="mt-8">
            <AppButton to="/iletisim" size="lg" showTrailingIcon>Demo Talep Et</AppButton>
          </div>
        </div>

        <!-- Hızlı bakış: gerçek ürün ekranlarından 36 sn'lik sessiz döngü (tanıtım filmi
             çekimlerinden; kişi adı/token görünen kareler çıkarıldı). Hareketi azaltma tercihi
             olanlarda otomatik oynatılmaz, kapak + oynatıcı kontrolleri gösterilir. -->
        <div class="relative">
          <div
            class="overflow-hidden rounded-2xl border border-light-gray-border bg-navy-dark shadow-2xl shadow-navy-dark/10"
          >
            <video
              ref="heroVideo"
              :src="hizliBakisUrl"
              :poster="hizliBakisPoster"
              class="aspect-video w-full"
              muted
              loop
              playsinline
              preload="metadata"
              :controls="reduceMotion"
              :autoplay="!reduceMotion"
              aria-label="Convex'e hızlı bakış: veri birleştirme, deney, eğitim, doğrulama, dağıtım ve izleme ekranları"
            />
          </div>
          <div class="mt-4 flex flex-wrap items-center justify-between gap-2 text-sm">
            <span class="text-darker-gray">Ürün ekranlarından kısa bir tur</span>
            <RouterLink
              to="/yardim/videolar/tanitim-filmi"
              class="inline-flex items-center gap-1.5 font-medium text-pink"
            >
              Tam tanıtım filmini izle (7 dk)
              <BaseIcon name="arrowRight" sizeClass="w-3.5 h-3.5" />
            </RouterLink>
          </div>
        </div>
      </div>
    </Container>
  </section>

  <!-- Üç modül özeti — site planında hero içeriğinin bir parçası olarak tarif edilir. -->
  <section class="py-20">
    <Container>
      <SectionHeading
        eyebrow="Tek platformda tek akış"
        title="Veriden canlıya, dakikalar içinde"
        description="Veriden canlıdaki modele: model yaşam döngüsünün tamamı Convex'te."
      />
      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
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
        eyebrow="Hız ve Denetlenebilirlik"
        title="Hızlı çalışın. Denetimde şaşırmayın."
        description="Model geliştirme, risk yönetimi ve model denetiminde hem hız hem denetlenebilirlik."
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
