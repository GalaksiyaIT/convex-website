<script setup>
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import AppButton from '@/components/ui/AppButton.vue'
import Card from '@/components/ui/Card.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'
import NeuralNetworkAnimation from '@/components/ui/NeuralNetworkAnimation.vue'
import ProductVideo from '@/components/sections/ProductVideo.vue'

// Model Results ekranındaki gibi: aynı deneyde seçilen algoritmalar, Train/Test skorlarıyla yan yana.
const liveAlgorithms = [
  { name: 'LightGBM', train: 0.74, test: 0.71 },
  { name: 'CatBoost', train: 0.73, test: 0.7 },
  { name: 'XGBoost', train: 0.75, test: 0.69 },
  { name: 'Random Forest', train: 0.78, test: 0.66 },
  { name: 'Logistic Regression', train: 0.61, test: 0.58 },
]

const capabilities = [
  {
    icon: 'upload',
    title: 'Problem Tanımı ve Veri Keşfi',
    description:
      'Sınıflandırma, regresyon ya da kümeleme; problem tipinizi ve hedef değişkeninizi seçin. Data Exploration ile her sütunun istatistiklerini tek bakışta görün.',
  },
  {
    icon: 'barChart',
    title: 'Veri Dengesi Kontrolü',
    description:
      'Hedef değişkende az görülen sınıflar için Oversampling, Undersampling ya da Class Weight seçin; dengesiz veri modeli yanıltmasın.',
  },
  {
    icon: 'layers',
    title: 'Feature Engineering',
    description:
      'Outlier Detection (Z-Score), Feature Generation (Adaptive Binning/WoE, Fixed Width Binning, kendi formülünüz), Basic Transformation, Missing Value Imputation, Encoding (One-Hot, Label) ve Scaling (Min Max, Standard, Robust, Mean Normalization).',
  },
  {
    icon: 'filter',
    title: 'Feature Selection — 9 yöntem',
    description:
      'Missing Value Threshold, Single Unique Value Filter, Variance Threshold, Correlation Based Filtering, VIF Analysis, Feature Importance Reduction, Univariate Gini Filtering, Stepwise Elimination ve Recursive Feature Elimination.',
  },
  {
    icon: 'gitBranch',
    title: 'İzlenebilir ve Geri Alınabilir',
    description:
      "Uygulanan her adımı Revert ile geri alın ya da iş akışını sıfırlayın. Pipeline Summary'de hangi veri sürümüyle hangi adımların uygulandığını tek ekranda görün.",
  },
  {
    icon: 'cpu',
    title: 'Çoklu Algoritma Eğitimi',
    description:
      "Logistic Regression, LightGBM, XGBoost, CatBoost, Random Forest ve SGD arasından aynı deneyde birden fazlasını seçin, parametrelerini ayarlayın; Model Running'de eğitimi ve kayıtları canlı izleyin.",
  },
  {
    icon: 'server',
    title: 'Dağıtık Eğitim',
    description:
      'Büyük veride dağıtık eğitimi tek anahtarla açın; önerilen worker, CPU ve bellek ayarlarıyla eğitimi birden fazla makineye bölün.',
  },
  {
    icon: 'eye',
    title: 'Yorumlama ve İnce Ayar',
    description:
      'Interpret Model ile modelleri karşılaştırın, değişken katkılarını inceleyin; Tune Model ile Auto Optimize ya da Grid Search kullanarak hiperparametreleri iyileştirin — deneyden çıkmadan.',
  },
  {
    icon: 'workflow',
    title: 'Challenger Karşılaştırma',
    description:
      'Yeniden eğitilen model challenger deneyi olarak oluşur; mevcut modelle metrik metrik karşılaştırıp geçiş kararını veriye dayandırın. Hem deney modellerinde hem özel modellerde.',
  },
]
</script>

<template>
  <PageHero
    eyebrow="Ürün · Experiment Pipeline"
    title="Veriden modele, tek ve izlenebilir akış"
    description="Kod yazmadan deney kurun — problem tanımı, feature engineering, feature selection ve model eğitimi tek akışta."
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

  <!-- Çoklu Algoritma Eğitimi'ni somutlaştıran önizleme — Model Results ekranındaki
       Train/Test skor karşılaştırmasından esinlenildi; değerler örnektir. -->
  <section class="py-20">
    <Container>
      <div class="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p class="text-xs font-semibold uppercase tracking-wide text-pink">Model sonuçları</p>
          <h2 class="mt-1 text-2xl font-semibold text-navy-dark">
            Aynı deneyde birden çok algoritma, tek ekranda
          </h2>
          <p class="mt-3 text-base leading-relaxed text-darker-gray">
            Logistic Regression, LightGBM, XGBoost, CatBoost, Random Forest ve SGD arasından
            seçtiğiniz algoritmaları tek deneyde birlikte eğitin. Eğitim bittiğinde her modelin
            Train ve Test skorları Model Results'ta yan yana gelir; en iyi adayı seçmek için ayrı
            ayrı deney kurmanıza gerek kalmaz.
          </p>
        </div>
        <Card>
          <p class="text-xs font-semibold tracking-wide text-darker-gray/60">
            MODEL RESULTS · risk-model-v3
          </p>
          <div class="mt-4 flex flex-col items-center gap-5 sm:flex-row">
            <NeuralNetworkAnimation :size="160" :duration="4" :show-progress="false" />
            <div class="w-full flex-1 space-y-2">
              <div
                class="flex items-center justify-between px-3 text-[11px] font-medium text-darker-gray/60"
              >
                <span>Model</span><span>Train · Test Gini</span>
              </div>
              <div
                v-for="a in liveAlgorithms"
                :key="a.name"
                class="flex items-center justify-between rounded-lg bg-very-light-blue px-3 py-2 text-xs"
              >
                <span class="font-medium text-navy-dark">{{ a.name }}</span>
                <span class="font-semibold text-navyblue"
                  >{{ a.train.toFixed(2) }} · {{ a.test.toFixed(2) }}</span
                >
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Container>
  </section>

  <ProductVideo
    slug="tanitim-02-deney"
    title="Deney iş akışını baştan sona izleyin"
    description="Problem tanımından feature engineering ve seçimine, model eğitiminden yorumlama ve ince ayara kadar tüm adımlar iki dakikada."
  />

  <section class="py-20">
    <Container narrow>
      <SectionHeading
        align="center"
        eyebrow="Neden önemli"
        title="Ekip eğitimi olmadan, kod yazmadan"
        description="İş ve risk analistleri, veri bilimci olmadan da deney kurabilir — her adım görsel arayüzden yönetilir."
      />
    </Container>
  </section>

  <CtaBanner
    title="Experiment Pipeline'ı kendi veri setinizde görün"
    description="Kısa bir demo ile hazırlama, eğitim ve karşılaştırma adımlarının nasıl işlediğini gösterelim."
  />
</template>
