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
import { computed, ref, onMounted } from 'vue'
import { useCopy } from '@/i18n'
import hizliBakisUrl from '@/assets/videos/irem/hizli-bakis.webm'
import hizliBakisPoster from '@/assets/posters/hizli-bakis.jpg'

const heroVideo = ref(null)
const reduceMotion =
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

onMounted(() => {
  const v = heroVideo.value
  if (!v) return
  v.muted = true // autoplay için tarayıcılar sessiz olmasını şart koşar
  if (!reduceMotion) v.play().catch(() => {})
})

const moduleMeta = [
  { icon: 'database', to: '/urun/veri-yonetimi' },
  { icon: 'layers', to: '/urun/experiment-pipeline' },
  { icon: 'upload', to: '/urun/ozel-modeller' },
  { icon: 'eye', to: '/urun/model-governance' },
  { icon: 'rocket', to: '/urun/deployment' },
]

const c = useCopy({
  en: {
    // Ürün ekranlarından doğrulanabilir sayılar (müşteri iddiası değil).
    stats: [
      { value: '6', label: 'algorithms: LR, LightGBM, XGBoost, CatBoost, Random Forest, SGD' },
      { value: '9', label: 'feature selection methods' },
      { value: '2', label: 'synthetic data methods: CTGAN and CART' },
      { value: '1 click', label: 'to deploy a model to production' },
    ],
    modules: [
      {
        title: 'Data Management',
        description: 'Ingest, join and version your data, and generate synthetic data.',
      },
      {
        title: 'Experiment Pipeline',
        description: 'Feature engineering and model training, no code required.',
      },
      {
        title: 'Custom Models',
        description: 'Bring your own models, version them and retrain them.',
      },
      {
        title: 'Model Governance',
        description: 'Explain, report and keep a complete audit trail.',
      },
      {
        title: 'Deployment & Application',
        description: 'Go live, monitor, and score via API or batch.',
      },
    ],
    heroEyebrow: 'AutoML · Model Risk Management',
    heroTitle: 'Build Tomorrow’s Decisions Today.',
    heroLead:
      'Convex is an end-to-end AutoML platform for enterprises. From data preparation to deployment, every step is auditable.',
    heroCta: 'Request a Demo',
    videoLabel:
      'A quick look at Convex: data joining, experiment, training, validation, deployment and monitoring screens',
    videoCaption: 'A quick tour of the product',
    videoLink: 'Watch the full product film (7 min)',
    flowEyebrow: 'One platform, one flow',
    flowTitle: 'From data to production in minutes',
    flowDescription:
      'From raw data to a model in production: the entire model lifecycle in Convex.',
    explore: 'Explore',
    speedEyebrow: 'Speed and Auditability',
    speedTitle: 'Move fast. No surprises at audit time.',
    speedDescription:
      'Speed and auditability across model development, risk management and model validation.',
    speedLink: 'Explore solutions',
  },
  tr: {
    stats: [
      { value: '6', label: 'algoritma: LR, LightGBM, XGBoost, CatBoost, Random Forest, SGD' },
      { value: '9', label: 'feature selection yöntemi' },
      { value: '2', label: 'sentetik veri yöntemi: CTGAN ve CART' },
      { value: '1 tık', label: 'ile modeli canlıya dağıtım' },
    ],
    modules: [
      {
        title: 'Veri Yönetimi',
        description: 'Veriyi alın, birleştirin, sürümleyin, sentetik veri üretin.',
      },
      {
        title: 'Experiment Pipeline',
        description: 'Kod yazmadan feature engineering ve model eğitimi.',
      },
      {
        title: 'Özel Modeller',
        description: 'Kendi modelinizi getirin, sürümleyin, yeniden eğitin.',
      },
      {
        title: 'Model Governance',
        description: 'Yorumlayın, raporlayın, denetim kaydını tutun.',
      },
      {
        title: 'Deployment & Application',
        description: 'Canlıya alın, izleyin, API ve batch ile skorlayın.',
      },
    ],
    heroEyebrow: 'AutoML · Model Risk Yönetimi',
    heroTitle: 'Yarının Kararını Bugün Kurun.',
    heroLead:
      'Convex, kuruluşlar için uçtan uca bir AutoML platformu. Veri hazırlamaktan canlıya almaya, her adım denetlenebilir.',
    heroCta: 'Demo Talep Et',
    videoLabel:
      "Convex'e hızlı bakış: veri birleştirme, deney, eğitim, doğrulama, dağıtım ve izleme ekranları",
    videoCaption: 'Ürün ekranlarından kısa bir tur',
    videoLink: 'Tam tanıtım filmini izle (7 dk)',
    flowEyebrow: 'Tek platformda tek akış',
    flowTitle: 'Veriden canlıya, dakikalar içinde',
    flowDescription: "Veriden canlıdaki modele: model yaşam döngüsünün tamamı Convex'te.",
    explore: 'İncele',
    speedEyebrow: 'Hız ve Denetlenebilirlik',
    speedTitle: 'Hızlı çalışın. Denetimde şaşırmayın.',
    speedDescription:
      'Model geliştirme, risk yönetimi ve model denetiminde hem hız hem denetlenebilirlik.',
    speedLink: 'Çözümleri incele',
  },
})

const modules = computed(() => c.value.modules.map((text, i) => ({ ...moduleMeta[i], ...text })))
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
          <Eyebrow>{{ c.heroEyebrow }}</Eyebrow>
          <h1 class="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-navy-dark">
            {{ c.heroTitle }}
          </h1>
          <p class="mt-6 text-lg leading-relaxed text-darker-gray">
            {{ c.heroLead }}
          </p>
          <div class="mt-8">
            <AppButton to="/iletisim" size="lg" showTrailingIcon>{{ c.heroCta }}</AppButton>
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
              :aria-label="c.videoLabel"
            />
          </div>
          <div class="mt-4 flex flex-wrap items-center justify-between gap-2 text-sm">
            <span class="text-darker-gray">{{ c.videoCaption }}</span>
            <RouterLink
              to="/yardim/videolar/tanitim-filmi"
              class="inline-flex items-center gap-1.5 font-medium text-pink"
            >
              {{ c.videoLink }}
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
        :eyebrow="c.flowEyebrow"
        :title="c.flowTitle"
        :description="c.flowDescription"
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
              {{ c.explore }}
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
        <StatBand :stats="c.stats" />
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
        :eyebrow="c.speedEyebrow"
        :title="c.speedTitle"
        :description="c.speedDescription"
      />
      <RouterLink
        to="/cozumler"
        class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-pink"
      >
        {{ c.speedLink }}
        <BaseIcon name="arrowRight" sizeClass="w-4 h-4" />
      </RouterLink>
    </Container>
  </section>

  <CtaBanner />
</template>
