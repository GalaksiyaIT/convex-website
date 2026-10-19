<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import AppButton from '@/components/ui/AppButton.vue'
import Card from '@/components/ui/Card.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'
import ProductVideo from '@/components/sections/ProductVideo.vue'
import { useCopy } from '@/i18n'
import dataImg from '@/assets/screens/product/step-data.webp'
import featuresImg from '@/assets/screens/product/step-features.webp'
import trainingImg from '@/assets/screens/product/step-training.webp'
import interpretImg from '@/assets/screens/product/step-interpret.webp'
import governanceImg from '@/assets/screens/product/step-governance.webp'
import deployImg from '@/assets/screens/product/step-deploy.webp'

// Her adımın yanında gerçek bir Convex ekranı (stage kayıtlarından, kişi adı içermeyen kırpımlar).
const stepMeta = [
  { icon: 'upload', to: '/product/data-management', image: dataImg },
  { icon: 'layers', image: featuresImg },
  {
    icon: 'cpu',
    to: '/product/experiment-pipeline',
    extraTo: '/product/custom-models',
    image: trainingImg,
  },
  { icon: 'eye', image: interpretImg },
  { icon: 'shield', to: '/product/model-governance', image: governanceImg },
  { icon: 'rocket', to: '/product/deployment', image: deployImg },
]

const moduleMeta = [
  { to: '/product/data-management', icon: 'database' },
  { to: '/product/experiment-pipeline', icon: 'layers' },
  { to: '/product/custom-models', icon: 'upload' },
  { to: '/product/model-governance', icon: 'eye' },
  { to: '/product/deployment', icon: 'rocket' },
  { to: '/product/extensions', icon: 'plug' },
]

const c = useCopy({
  en: {
    heroEyebrow: 'Product',
    heroTitle: 'End to end, on one platform',
    heroDescription:
      'From data to model, from model to production — the entire process is repeatable and auditable.',
    cta: 'Request a Demo',
    stepsTitle: 'The process, step by step',
    stepsDescription: 'Not an abstract promise — a real production workflow.',
    exploreModule: 'Explore the module',
    enlarge: 'Enlarge',
    close: 'Close',
    steps: [
      {
        title: 'Data Ingestion',
        description:
          'Upload a CSV or pull data from your relational database with a query; merge it, version it and generate synthetic data.',
        quote: '"Data preparation no longer waits on a separate team." — Data Management user',
      },
      {
        title: 'Feature Engineering',
        description:
          'Outlier detection, WOE/binning, missing value imputation, encoding, scaling and 9 feature selection methods — all fully reversible.',
        quote:
          '"We can undo every transformation, which gives us a lot of confidence." — Risk modeling team',
      },
      {
        title: 'Model Training',
        description:
          'Train Logistic Regression, LightGBM, XGBoost, CatBoost, Random Forest and SGD in the same experiment and compare the results side by side. Bring in models you trained elsewhere with Custom Models and manage them in the same workflow.',
        quote:
          '“We tripled the number of experiments and cut the time in half.” — Experiment Pipeline user',
        extraLabel: 'Explore Custom Models',
      },
      {
        title: 'Interpretation',
        description:
          'Explain why every score came out the way it did with SHAP-based contribution analysis.',
        quote:
          '"We can now walk auditors through the model’s logic in minutes." — Internal audit team',
      },
      {
        title: 'Governance',
        description:
          'Model Report, Validation Report, Audit Log, scorecard and scheduler — before anything goes to production.',
        quote:
          '“The audit team can now see how the model makes decisions in minutes.” — Model Governance user',
      },
      {
        title: 'Deploy',
        description:
          'Take the model live in one click, score via REST API or batch, and monitor live performance.',
        quote: '"An approved model can go live within minutes." — Deployment user',
      },
    ],
    videoEyebrow: 'Product film',
    videoTitle: 'Watch Convex from start to finish',
    videoDescription:
      'Every capability, from data to a live model, in a single film: data, experiments, custom models, governance, deployment and batch scoring.',
    modulesTitle: 'Modules',
    modulesDescription: 'Explore each module on its own page.',
    modules: [
      'Data Management',
      'Experiment Pipeline',
      'Custom Models',
      'Model Governance',
      'Deployment & Application',
      'Extensions',
    ],
  },
  tr: {
    heroEyebrow: 'Ürün',
    heroTitle: 'Uçtan uca, tek platformda',
    heroDescription:
      'Veriden modele, modelden üretime — tüm süreç tekrarlanabilir ve denetlenebilir.',
    cta: 'Demo Talep Et',
    stepsTitle: 'Adım adım süreç',
    stepsDescription: 'Soyut bir vaat değil, gerçek bir üretim akışı.',
    exploreModule: 'Modülü incele',
    enlarge: 'Büyüt',
    close: 'Kapat',
    steps: [
      {
        title: 'Veri Yükleme',
        description:
          'CSV yükleyin ya da ilişkisel veritabanınızdan sorguyla veri alın; birleştirin, sürümleyin, sentetik veri üretin.',
        quote: '"Veri hazırlama artık ayrı bir ekip beklemiyor." — Veri Yönetimi kullanıcısı',
      },
      {
        title: 'Feature Engineering',
        description:
          'Aykırı değer tespiti, WOE/binning, eksik değer doldurma, encoding, ölçekleme ve 9 feature selection yöntemi — hepsi geri alınabilir.',
        quote:
          '"Her dönüşümü geri alabiliyoruz, bu bize büyük güven veriyor." — Risk modelleme ekibi',
      },
      {
        title: 'Model Eğitimi',
        description:
          "Logistic Regression, LightGBM, XGBoost, CatBoost, Random Forest ve SGD'yi aynı deneyde eğitip sonuçları yan yana karşılaştırın. Dışarıda eğittiğiniz modelleri de Özel Modeller ile getirip aynı akışta yönetin.",
        quote:
          '“Deneme sayısını üçe katladık, süreyi yarıya indirdik.” — Experiment Pipeline kullanıcısı',
        extraLabel: 'Özel Modelleri incele',
      },
      {
        title: 'Yorumlama',
        description:
          'SHAP tabanlı katkı analizleriyle her skorun neden o sonucu verdiğini açıklayın.',
        quote:
          '"Denetçiye artık modelin mantığını dakikalar içinde anlatabiliyoruz." — İç denetim ekibi',
      },
      {
        title: 'Governance',
        description:
          'Model Report, Validation Report, Audit Log, skor kartı ve zamanlayıcı — üretime çıkmadan önce.',
        quote:
          '“Denetim ekibi artık modelin nasıl karar verdiğini dakikalar içinde görebiliyor.” — Model Governance kullanıcısı',
      },
      {
        title: 'Deploy',
        description:
          'Modeli tek tıkla canlıya alın, REST API ya da batch ile skorlayın, canlı performansı izleyin.',
        quote: '"Onaylanan model dakikalar içinde canlıya çıkabiliyor." — Deployment kullanıcısı',
      },
    ],
    videoEyebrow: 'Tanıtım filmi',
    videoTitle: "Convex'i baştan sona izleyin",
    videoDescription:
      'Veriden canlıdaki modele kadar tüm yetenekler tek bir filmde: veri, deney, özel modeller, yönetişim, dağıtım ve batch skorlama.',
    modulesTitle: 'Modüller',
    modulesDescription: 'Her modülü kendi sayfasında inceleyin.',
    modules: [
      'Veri Yönetimi',
      'Experiment Pipeline',
      'Özel Modeller',
      'Model Governance',
      'Deployment & Application',
      'Eklentiler',
    ],
  },
})

// Adım görseli büyütme penceresi (<dialog>: odak ve Esc tarayıcıda).
const imageDialog = ref(null)
const openStep = ref(null)
function openImage(step) {
  openStep.value = step
  imageDialog.value?.showModal()
}

const steps = computed(() =>
  stepMeta.map((meta, i) => {
    const text = c.value.steps[i]
    return {
      icon: meta.icon,
      to: meta.to,
      image: meta.image,
      title: text.title,
      description: text.description,
      quote: text.quote,
      extra: meta.extraTo ? { to: meta.extraTo, label: text.extraLabel } : undefined,
    }
  }),
)

const modules = computed(() =>
  moduleMeta.map((meta, i) => ({ ...meta, title: c.value.modules[i] })),
)
</script>

<template>
  <PageHero :eyebrow="c.heroEyebrow" :title="c.heroTitle" :description="c.heroDescription">
    <template #actions>
      <AppButton to="/contact" showTrailingIcon>{{ c.cta }}</AppButton>
    </template>
  </PageHero>

  <ProductVideo
    slug="product-film"
    :eyebrow="c.videoEyebrow"
    :title="c.videoTitle"
    :description="c.videoDescription"
  />

  <section class="py-20">
    <Container>
      <SectionHeading :title="c.stepsTitle" :description="c.stepsDescription" />
      <div class="mt-10 space-y-4">
        <div
          v-for="(step, i) in steps"
          :key="step.icon"
          class="grid gap-6 rounded-2xl border border-light-gray-border p-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] lg:items-start"
        >
          <div>
            <div class="flex items-center gap-4">
              <span
                class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-very-light-pink text-sm font-semibold text-pink"
                >{{ i + 1 }}</span
              >
              <div class="flex items-center gap-2">
                <BaseIcon :name="step.icon" sizeClass="w-4 h-4 text-purple" />
                <h3 class="font-semibold text-navy-dark">{{ step.title }}</h3>
              </div>
            </div>
            <p class="mt-4 text-sm leading-relaxed text-darker-gray">{{ step.description }}</p>
            <p v-if="step.quote" class="mt-2 text-sm italic text-pink/80">{{ step.quote }}</p>
            <RouterLink
              v-if="step.to"
              :to="step.to"
              class="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-pink"
            >
              {{ c.exploreModule }}
              <BaseIcon name="arrowRight" sizeClass="w-3.5 h-3.5" />
            </RouterLink>
            <RouterLink
              v-if="step.extra"
              :to="step.extra.to"
              class="mt-3 ml-5 inline-flex items-center gap-1.5 text-sm font-medium text-pink"
            >
              {{ step.extra.label }}
              <BaseIcon name="arrowRight" sizeClass="w-3.5 h-3.5" />
            </RouterLink>
          </div>
          <!-- Ekran görüntüsü okunur boyutta; tıklayınca tam boy açılır. -->
          <button
            v-if="step.image"
            type="button"
            class="group relative block cursor-zoom-in overflow-hidden rounded-xl border border-light-gray-border bg-white shadow-sm"
            :aria-label="`${c.enlarge}: ${step.title}`"
            @click="openImage(step)"
          >
            <img
              :src="step.image"
              :alt="step.title"
              loading="lazy"
              class="max-h-80 w-full object-cover object-left-top"
            />
            <span
              class="absolute bottom-2 right-2 rounded-md bg-navy-dark/75 px-2 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
              >{{ c.enlarge }}</span
            >
          </button>
        </div>
      </div>
    </Container>
  </section>

  <section class="py-20">
    <Container>
      <SectionHeading :title="c.modulesTitle" :description="c.modulesDescription" />
      <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6">
        <RouterLink v-for="m in modules" :key="m.to" :to="m.to">
          <Card hover class="h-full text-center">
            <div
              class="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-very-light-pink text-pink"
            >
              <BaseIcon :name="m.icon" sizeClass="w-5 h-5" />
            </div>
            <h3 class="mt-4 text-sm font-semibold text-navy-dark">{{ m.title }}</h3>
          </Card>
        </RouterLink>
      </div>
    </Container>
  </section>

  <CtaBanner />

  <dialog
    ref="imageDialog"
    class="m-auto max-h-[92vh] w-[min(94vw,1100px)] rounded-2xl bg-white p-0 backdrop:bg-navy-dark/80"
    :aria-label="openStep?.title"
    @click.self="imageDialog?.close()"
  >
    <div class="flex items-center justify-between border-b border-light-gray-border px-5 py-3">
      <span class="text-sm font-semibold text-navy-dark">{{ openStep?.title }}</span>
      <form method="dialog">
        <button
          class="rounded-lg p-1.5 text-darker-gray hover:text-navy-dark"
          :aria-label="c.close"
        >
          <BaseIcon name="close" sizeClass="w-5 h-5" />
        </button>
      </form>
    </div>
    <img v-if="openStep" :src="openStep.image" :alt="openStep.title" class="w-full" />
  </dialog>
</template>
