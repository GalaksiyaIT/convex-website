<script setup>
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import AppButton from '@/components/ui/AppButton.vue'
import Card from '@/components/ui/Card.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'
import NeuralNetworkAnimation from '@/components/ui/NeuralNetworkAnimation.vue'

const liveAlgorithms = [
  { name: 'LightGBM', gini: 0.71 },
  { name: 'Logistic Regression', gini: 0.58 },
  { name: 'Random Forest', gini: 0.66 },
]

const capabilities = [
  {
    icon: 'upload',
    title: 'Veri Hazırlama',
    description:
      'CSV, veritabanı veya çekirdek bankacılık kaynaklarından veri alın; şema doğrulama otomatik çalışır.',
  },
  {
    icon: 'filter',
    title: 'Feature Selection',
    description:
      'Eksik değer eşiği, tekil değer filtresi ve varyans eşiği ile gereksiz özellikleri eleyin.',
  },
  {
    icon: 'layers',
    title: 'Feature Engineering',
    description: 'WOE/binning, encoding, ölçekleme — hepsi geri alınabilir.',
  },
  {
    icon: 'cpu',
    title: 'Çoklu Algoritma Eğitimi',
    description:
      'LightGBM, Logistic Regression ve daha fazlasını paralel çalıştırıp Gini, KS, AUC gibi metriklerle karşılaştırın.',
  },
  {
    icon: 'barChart',
    title: 'Challenger Karşılaştırma',
    description:
      'Yeni modeli mevcut üretim modeliyle yan yana karşılaştırıp geçiş kararını veriye dayandırın.',
  },
  {
    icon: 'gitBranch',
    title: 'Tekrarlanabilirlik',
    description:
      'Her deney sürümlenir; hangi veri ve parametrelerle hangi sonucun alındığını her zaman görün.',
  },
]
</script>

<template>
  <PageHero
    eyebrow="Ürün · Experiment Pipeline"
    title="Veriden modele, tek ve izlenebilir akış"
    description="Kod yazmadan deney kurun — veri hazırlama, feature engineering ve model eğitimi tek ekranda."
  >
    <template #actions>
      <AppButton to="/iletisim" showTrailingIcon>Demo Talep Et</AppButton>
    </template>
  </PageHero>

  <section class="py-20">
    <Container>
      <SectionHeading eyebrow="Yetenekler" title="Bir deneyde neler var" />
      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card v-for="c in capabilities" :key="c.title">
          <div
            class="flex h-11 w-11 items-center justify-center rounded-xl bg-very-light-pink text-pink"
          >
            <BaseIcon :name="c.icon" sizeClass="w-5 h-5" />
          </div>
          <h3 class="mt-4 text-base font-semibold text-navy-dark">{{ c.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-darker-gray">{{ c.description }}</p>
        </Card>
      </div>
    </Container>
  </section>

  <!-- Çoklu Algoritma Eğitimi'ni somutlaştıran canlı önizleme — ModelRunning ekranındaki
       "Current Process" panelinden esinlenildi, gerçek eğitim süresini değil hızı temsil eder. -->
  <section class="py-20">
    <Container>
      <div class="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p class="text-xs font-semibold uppercase tracking-wide text-pink">Canlı önizleme</p>
          <h2 class="mt-1 text-2xl font-semibold text-navy-dark">
            Aynı anda birden çok algoritma, tek ekranda
          </h2>
          <p class="mt-3 text-base leading-relaxed text-darker-gray">
            LightGBM, Logistic Regression ve daha fazlasını paralel çalıştırın; her biri için Gini
            gibi metrikler eğitim ilerledikçe canlı güncellenir. En iyi adayı seçmek için ayrı ayrı
            deney kurmanıza gerek kalmaz.
          </p>
        </div>
        <Card>
          <p class="text-xs font-semibold uppercase tracking-wide text-darker-gray/60">
            Current Process · risk-model-v3
          </p>
          <div class="mt-4 flex items-center gap-5">
            <NeuralNetworkAnimation :size="160" :duration="4" />
            <div class="flex-1 space-y-2">
              <div
                v-for="a in liveAlgorithms"
                :key="a.name"
                class="flex items-center justify-between rounded-lg bg-very-light-blue px-3 py-2 text-xs"
              >
                <span class="font-medium text-navy-dark">{{ a.name }}</span>
                <span class="font-semibold text-navyblue">Gini {{ a.gini.toFixed(2) }}</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Container>
  </section>

  <section class="bg-light-gray-bg py-20">
    <Container narrow>
      <SectionHeading
        align="center"
        eyebrow="Neden önemli"
        title="Ekip eğitimi olmadan, kod yazmadan"
        description="Risk ve kredi analistleri, veri bilimci olmadan da deney kurabilir — her adım görsel arayüzden yönetilir."
      />
    </Container>
  </section>

  <CtaBanner
    title="Experiment Pipeline'ı kendi veri setinizde görün"
    description="Kısa bir demo ile hazırlama, eğitim ve karşılaştırma adımlarının nasıl işlediğini gösterelim."
  />
</template>
