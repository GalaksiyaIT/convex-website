<script setup>
import { RouterLink } from 'vue-router'
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import AppButton from '@/components/ui/AppButton.vue'
import Card from '@/components/ui/Card.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'

const steps = [
  {
    icon: 'upload',
    title: 'Veri Yükleme',
    description:
      "Dataset'lerinizi veya çekirdek bankacılık verilerini doğrudan bağlayın. Şema kontrolü otomatik çalışır.",
    quote: '"Veri hazırlama artık ayrı bir ekip beklemiyor." — Experiment Pipeline kullanıcısı',
  },
  {
    icon: 'layers',
    title: 'Feature Engineering',
    description: 'WOE/binning, eksik değer doldurma, özellik üretimi — hepsi izlenebilir.',
    quote: '"Her dönüşümü geri alabiliyoruz, bu bize büyük güven veriyor." — Risk modelleme ekibi',
  },
  {
    icon: 'cpu',
    title: 'Model Eğitimi',
    description: 'LightGBM, Logistic Regression ve daha fazlasını paralel deneyin.',
    quote:
      '“Deneme sayısını üçe katladık, süreyi yarıya indirdik.” — Experiment Pipeline kullanıcısı',
  },
  {
    icon: 'eye',
    title: 'Yorumlama',
    description: 'SHAP tabanlı katkı analizleriyle her skorun neden o sonucu verdiğini açıklayın.',
    quote: '"Denetçiye artık modelin mantığını dakikalar içinde anlatabiliyoruz." — İç denetim ekibi',
  },
  {
    icon: 'shield',
    title: 'Governance',
    description: 'Model kartı, denetim izi, onay akışı — üretime çıkmadan önce.',
    quote:
      '“Denetim ekibi artık modelin nasıl karar verdiğini dakikalar içinde görebiliyor.” — Model Governance kullanıcısı',
    to: '/urun/model-governance',
  },
  {
    icon: 'rocket',
    title: 'Deploy',
    description: 'Onaylanan modeli skorlama uygulamasına bağlayın, canlı performansı izleyin.',
    quote: '"Onaylanan model aynı gün içinde canlıya çıkabiliyor." — Deployment kullanıcısı',
    to: '/urun/deployment',
  },
]

const modules = [
  { to: '/urun/experiment-pipeline', icon: 'layers', title: 'Experiment Pipeline' },
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
          </div>
        </div>
      </div>
    </Container>
  </section>

  <section class="bg-light-gray-bg py-20">
    <Container>
      <SectionHeading
        title="Modüller"
        description="Her modülü kendi sayfasında inceleyin."
      />
      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
