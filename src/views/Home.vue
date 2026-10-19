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
import agenticVideo from '@/assets/videos/motion/agentic-ai.webm'
import agenticPoster from '@/assets/posters/motion/agentic-ai.jpg'
import CtaBanner from '@/components/sections/CtaBanner.vue'
import { computed, ref } from 'vue'
import { useCopy, locale } from '@/i18n'
import hizliBakisTrUrl from '@/assets/videos/irem/hizli-bakis.webm'
import hizliBakisTrPoster from '@/assets/posters/hizli-bakis.jpg'
import { quickLookEn } from '@/content/en/videoMedia'
import heroLayers from '@/assets/screens/hero-layers.webp'

// Hero görseli: gerçek ekranlardan katmanlı kompozisyon (okunur boyutta). Hızlı bakış
// döngüsü (36 sn) görselin üstündeki oynat düğmesiyle bir pencerede açılır; <dialog>
// odak yönetimini ve Esc ile kapanmayı tarayıcıya bırakır.
const tourDialog = ref(null)
const tourVideo = ref(null)
const hizliBakisUrl = computed(() =>
  locale.value === 'tr' ? hizliBakisTrUrl : quickLookEn.videoUrl,
)
const hizliBakisPoster = computed(() =>
  locale.value === 'tr' ? hizliBakisTrPoster : quickLookEn.posterUrl,
)

function openTour() {
  tourDialog.value?.showModal()
  tourVideo.value?.play().catch(() => {})
}
function onTourClose() {
  tourVideo.value?.pause()
}

const moduleMeta = [
  { icon: 'database', to: '/product/data-management' },
  { icon: 'layers', to: '/product/experiment-pipeline' },
  { icon: 'upload', to: '/product/custom-models' },
  { icon: 'eye', to: '/product/model-governance' },
  { icon: 'rocket', to: '/product/deployment' },
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
    tourButton: 'Watch the 36-second tour',
    heroImageAlt:
      'Convex screens: a Model Report with ROC and PRC AUC scores, model training progress and a Validation Report stability table',
    closeLabel: 'Close',
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
    tourButton: '36 saniyelik turu izle',
    heroImageAlt:
      'Convex ekranları: ROC ve PRC AUC skorlarıyla Model Report, model eğitim ilerlemesi ve Validation Report stabilite tablosu',
    closeLabel: 'Kapat',
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
      <div
        class="relative grid gap-12 py-16 sm:py-24 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center"
      >
        <div>
          <Eyebrow>{{ c.heroEyebrow }}</Eyebrow>
          <h1 class="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-navy-dark">
            {{ c.heroTitle }}
          </h1>
          <p class="mt-6 text-lg leading-relaxed text-darker-gray">
            {{ c.heroLead }}
          </p>
          <div class="mt-8">
            <AppButton to="/contact" size="lg" showTrailingIcon>{{ c.heroCta }}</AppButton>
          </div>
        </div>

        <!-- Gerçek ekranlardan katmanlı görsel: Model Report, eğitim ilerlemesi ve
             Validation Report (kişi adı/token içermeyen kareler). -->
        <div class="relative">
          <img
            :src="heroLayers"
            :alt="c.heroImageAlt"
            width="1200"
            height="680"
            class="w-full lg:-mr-8 lg:w-[calc(100%+2rem)]"
            fetchpriority="high"
          />
          <div class="mt-4 flex flex-wrap items-center justify-between gap-2 text-sm">
            <button
              type="button"
              class="inline-flex items-center gap-2 rounded-full bg-button-pink py-2 pl-3 pr-4 font-medium text-white shadow-sm shadow-pink/20 transition-colors hover:bg-pink"
              @click="openTour"
            >
              <BaseIcon name="playCircle" sizeClass="w-4 h-4" />
              {{ c.tourButton }}
            </button>
            <RouterLink
              to="/help/videos/product-film"
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

  <dialog
    ref="tourDialog"
    class="m-auto w-[min(92vw,1100px)] rounded-2xl bg-navy-dark p-0 backdrop:bg-navy-dark/80"
    :aria-label="c.videoLabel"
    @close="onTourClose"
  >
    <form method="dialog" class="flex justify-end p-2">
      <button class="rounded-lg p-2 text-white/80 hover:text-white" :aria-label="c.closeLabel">
        <BaseIcon name="close" sizeClass="w-5 h-5" />
      </button>
    </form>
    <video
      ref="tourVideo"
      :src="hizliBakisUrl"
      :poster="hizliBakisPoster"
      class="aspect-video w-full"
      controls
      loop
      muted
      playsinline
      preload="none"
      :aria-label="c.videoLabel"
    />
  </dialog>

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

  <VideoShowcase :video-src="agenticVideo" :poster="agenticPoster" />

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
        to="/solutions"
        class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-pink"
      >
        {{ c.speedLink }}
        <BaseIcon name="arrowRight" sizeClass="w-4 h-4" />
      </RouterLink>
    </Container>
  </section>

  <CtaBanner />
</template>
