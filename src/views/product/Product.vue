<script setup>
import { RouterLink } from 'vue-router'
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import AppButton from '@/components/ui/AppButton.vue'
import Card from '@/components/ui/Card.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'
import ProductVideo from '@/components/sections/ProductVideo.vue'

const steps = [
  {
    icon: 'upload',
    title: 'Veri Yükleme',
    description:
      'CSV yükleyin ya da ilişkisel veritabanınızdan sorguyla veri alın; birleştirin, sürümleyin, sentetik veri üretin.',
    quote: '"Veri hazırlama artık ayrı bir ekip beklemiyor." — Veri Yönetimi kullanıcısı',
    to: '/urun/veri-yonetimi',
  },
  {
    icon: 'layers',
    title: 'Feature Engineering',
    description:
      'Aykırı değer tespiti, WOE/binning, eksik değer doldurma, encoding, ölçekleme ve 9 feature selection yöntemi — hepsi geri alınabilir.',
    quote: '"Her dönüşümü geri alabiliyoruz, bu bize büyük güven veriyor." — Risk modelleme ekibi',
  },
  {
    icon: 'cpu',
    title: 'Model Eğitimi',
    description:
      "Logistic Regression, LightGBM, XGBoost, CatBoost, Random Forest ve SGD'yi aynı deneyde eğitip sonuçları yan yana karşılaştırın. Dışarıda eğittiğiniz modelleri de Özel Modeller ile getirip aynı akışta yönetin.",
    quote:
      '“Deneme sayısını üçe katladık, süreyi yarıya indirdik.” — Experiment Pipeline kullanıcısı',
    to: '/urun/experiment-pipeline',
    extra: { to: '/urun/ozel-modeller', label: 'Özel Modelleri incele' },
  },
  {
    icon: 'eye',
    title: 'Yorumlama',
    description: 'SHAP tabanlı katkı analizleriyle her skorun neden o sonucu verdiğini açıklayın.',
    quote:
      '"Denetçiye artık modelin mantığını dakikalar içinde anlatabiliyoruz." — İç denetim ekibi',
  },
  {
    icon: 'shield',
    title: 'Governance',
    description:
      'Model Report, Validation Report, Audit Log, skor kartı ve zamanlayıcı — üretime çıkmadan önce.',
    quote:
      '“Denetim ekibi artık modelin nasıl karar verdiğini dakikalar içinde görebiliyor.” — Model Governance kullanıcısı',
    to: '/urun/model-governance',
  },
  {
    icon: 'rocket',
    title: 'Deploy',
    description:
      'Modeli tek tıkla canlıya alın, REST API ya da batch ile skorlayın, canlı performansı izleyin.',
    quote: '"Onaylanan model dakikalar içinde canlıya çıkabiliyor." — Deployment kullanıcısı',
    to: '/urun/deployment',
  },
]

const modules = [
  { to: '/urun/veri-yonetimi', icon: 'database', title: 'Veri Yönetimi' },
  { to: '/urun/experiment-pipeline', icon: 'layers', title: 'Experiment Pipeline' },
  { to: '/urun/ozel-modeller', icon: 'upload', title: 'Özel Modeller' },
  { to: '/urun/model-governance', icon: 'eye', title: 'Model Governance' },
  { to: '/urun/deployment', icon: 'rocket', title: 'Deployment & Application' },
  { to: '/urun/eklentiler', icon: 'plug', title: 'Eklentiler' },
]
</script>

<template>
  <PageHero
    eyebrow="Ürün"
    title="Uçtan uca, tek platformda"
    description="Veriden modele, modelden üretime — tüm süreç tekrarlanabilir ve denetlenebilir."
  >
    <template #actions>
      <AppButton to="/iletisim" showTrailingIcon>Demo Talep Et</AppButton>
    </template>
  </PageHero>

  <section class="py-20">
    <Container>
      <SectionHeading
        title="Adım adım süreç"
        description="Soyut bir vaat değil, gerçek bir üretim akışı."
      />
      <div class="mt-10 space-y-4">
        <div
          v-for="(step, i) in steps"
          :key="step.title"
          class="flex flex-col gap-4 rounded-2xl border border-light-gray-border p-6 sm:flex-row sm:items-start"
        >
          <div class="flex items-center gap-4 sm:w-64 sm:flex-shrink-0">
            <span
              class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-very-light-pink text-sm font-semibold text-pink"
              >{{ i + 1 }}</span
            >
            <div class="flex items-center gap-2">
              <BaseIcon :name="step.icon" sizeClass="w-4 h-4 text-purple" />
              <h3 class="font-semibold text-navy-dark">{{ step.title }}</h3>
            </div>
          </div>
          <div class="flex-1">
            <p class="text-sm leading-relaxed text-darker-gray">{{ step.description }}</p>
            <p v-if="step.quote" class="mt-2 text-sm italic text-pink/80">{{ step.quote }}</p>
            <RouterLink
              v-if="step.to"
              :to="step.to"
              class="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-pink"
            >
              Modülü incele
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
        </div>
      </div>
    </Container>
  </section>

  <ProductVideo
    slug="tanitim-filmi"
    eyebrow="Tanıtım filmi"
    title="Convex'i baştan sona izleyin"
    description="Veriden canlıdaki modele kadar tüm yetenekler tek bir filmde: veri, deney, özel modeller, yönetişim, dağıtım ve batch skorlama."
  />

  <section class="py-20">
    <Container>
      <SectionHeading title="Modüller" description="Her modülü kendi sayfasında inceleyin." />
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
</template>
