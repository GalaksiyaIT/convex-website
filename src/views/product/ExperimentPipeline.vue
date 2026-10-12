<script setup>
import { computed } from 'vue'
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import AppButton from '@/components/ui/AppButton.vue'
import Card from '@/components/ui/Card.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'
import NeuralNetworkAnimation from '@/components/ui/NeuralNetworkAnimation.vue'
import ProductVideo from '@/components/sections/ProductVideo.vue'
import { useCopy } from '@/i18n'

// Model Results ekranındaki gibi: aynı deneyde seçilen algoritmalar, Train/Test skorlarıyla yan yana.
const liveAlgorithms = [
  { name: 'LightGBM', train: 0.74, test: 0.71 },
  { name: 'CatBoost', train: 0.73, test: 0.7 },
  { name: 'XGBoost', train: 0.75, test: 0.69 },
  { name: 'Random Forest', train: 0.78, test: 0.66 },
  { name: 'Logistic Regression', train: 0.61, test: 0.58 },
]

const capabilityIcons = [
  'upload',
  'barChart',
  'layers',
  'filter',
  'gitBranch',
  'cpu',
  'server',
  'eye',
  'workflow',
]

const c = useCopy({
  en: {
    heroEyebrow: 'Product · Experiment Pipeline',
    heroTitle: 'From data to model in one traceable workflow',
    heroDescription:
      'Set up experiments without writing code — problem definition, feature engineering, feature selection and model training in a single workflow.',
    cta: 'Request a Demo',
    capabilitiesEyebrow: 'Capabilities',
    capabilitiesTitle: 'What’s inside an experiment',
    capabilities: [
      {
        title: 'Problem Definition and Data Exploration',
        description:
          'Classification, regression or clustering: choose your problem type and target variable. See the statistics for every column at a glance with Data Exploration.',
      },
      {
        title: 'Class Balance Check',
        description:
          'Choose Oversampling, Undersampling or Class Weight for rare classes in the target variable, so imbalanced data doesn’t mislead your model.',
      },
      {
        title: 'Feature Engineering',
        description:
          'Outlier Detection (Z-Score), Feature Generation (Adaptive Binning/WoE, Fixed Width Binning, your own formula), Basic Transformation, Missing Value Imputation, Encoding (One-Hot, Label) and Scaling (Min Max, Standard, Robust, Mean Normalization).',
      },
      {
        title: 'Feature Selection — 9 methods',
        description:
          'Missing Value Threshold, Single Unique Value Filter, Variance Threshold, Correlation Based Filtering, VIF Analysis, Feature Importance Reduction, Univariate Gini Filtering, Stepwise Elimination and Recursive Feature Elimination.',
      },
      {
        title: 'Traceable and Reversible',
        description:
          'Undo any applied step with Revert, or reset the whole workflow. See which steps were applied to which data version on a single screen in the Pipeline Summary.',
      },
      {
        title: 'Multi-Algorithm Training',
        description:
          'Pick several of Logistic Regression, LightGBM, XGBoost, CatBoost, Random Forest and SGD in the same experiment and tune their parameters; follow training and logs live in Model Running.',
      },
      {
        title: 'Distributed Training',
        description:
          'Turn on distributed training for large datasets with a single switch, and split training across multiple machines with recommended worker, CPU and memory settings.',
      },
      {
        title: 'Interpretation and Fine-Tuning',
        description:
          'Compare models and examine feature contributions with Interpret Model; improve hyperparameters with Auto Optimize or Grid Search in Tune Model — without leaving the experiment.',
      },
      {
        title: 'Challenger Comparison',
        description:
          'A retrained model is created as a challenger experiment; compare it metric by metric with the current model and base the switch on data. Works for both experiment models and custom models.',
      },
    ],
    resultsEyebrow: 'Model results',
    resultsTitle: 'Multiple algorithms in one experiment, on one screen',
    resultsBody:
      'Train the algorithms you choose from Logistic Regression, LightGBM, XGBoost, CatBoost, Random Forest and SGD together in a single experiment. When training finishes, each model’s Train and Test scores line up side by side in Model Results — no need to set up separate experiments to pick the best candidate.',
    videoTitle: 'Watch the experiment workflow end to end',
    videoDescription:
      'Every step, from problem definition through feature engineering and selection to model training, interpretation and fine-tuning, in two minutes.',
    whyEyebrow: 'Why it matters',
    whyTitle: 'No team training, no code',
    whyDescription:
      'Business and risk analysts can set up experiments without a data scientist — every step is managed from a visual interface.',
    ctaTitle: 'See Experiment Pipeline on your own dataset',
    ctaDescription:
      'In a short demo, we’ll show you how the preparation, training and comparison steps work.',
  },
  tr: {
    heroEyebrow: 'Ürün · Experiment Pipeline',
    heroTitle: 'Veriden modele, tek ve izlenebilir akış',
    heroDescription:
      'Kod yazmadan deney kurun — problem tanımı, feature engineering, feature selection ve model eğitimi tek akışta.',
    cta: 'Demo Talep Et',
    capabilitiesEyebrow: 'Yetenekler',
    capabilitiesTitle: 'Bir deneyde neler var',
    capabilities: [
      {
        title: 'Problem Tanımı ve Veri Keşfi',
        description:
          'Sınıflandırma, regresyon ya da kümeleme; problem tipinizi ve hedef değişkeninizi seçin. Data Exploration ile her sütunun istatistiklerini tek bakışta görün.',
      },
      {
        title: 'Veri Dengesi Kontrolü',
        description:
          'Hedef değişkende az görülen sınıflar için Oversampling, Undersampling ya da Class Weight seçin; dengesiz veri modeli yanıltmasın.',
      },
      {
        title: 'Feature Engineering',
        description:
          'Outlier Detection (Z-Score), Feature Generation (Adaptive Binning/WoE, Fixed Width Binning, kendi formülünüz), Basic Transformation, Missing Value Imputation, Encoding (One-Hot, Label) ve Scaling (Min Max, Standard, Robust, Mean Normalization).',
      },
      {
        title: 'Feature Selection — 9 yöntem',
        description:
          'Missing Value Threshold, Single Unique Value Filter, Variance Threshold, Correlation Based Filtering, VIF Analysis, Feature Importance Reduction, Univariate Gini Filtering, Stepwise Elimination ve Recursive Feature Elimination.',
      },
      {
        title: 'İzlenebilir ve Geri Alınabilir',
        description:
          "Uygulanan her adımı Revert ile geri alın ya da iş akışını sıfırlayın. Pipeline Summary'de hangi veri sürümüyle hangi adımların uygulandığını tek ekranda görün.",
      },
      {
        title: 'Çoklu Algoritma Eğitimi',
        description:
          "Logistic Regression, LightGBM, XGBoost, CatBoost, Random Forest ve SGD arasından aynı deneyde birden fazlasını seçin, parametrelerini ayarlayın; Model Running'de eğitimi ve kayıtları canlı izleyin.",
      },
      {
        title: 'Dağıtık Eğitim',
        description:
          'Büyük veride dağıtık eğitimi tek anahtarla açın; önerilen worker, CPU ve bellek ayarlarıyla eğitimi birden fazla makineye bölün.',
      },
      {
        title: 'Yorumlama ve İnce Ayar',
        description:
          'Interpret Model ile modelleri karşılaştırın, değişken katkılarını inceleyin; Tune Model ile Auto Optimize ya da Grid Search kullanarak hiperparametreleri iyileştirin — deneyden çıkmadan.',
      },
      {
        title: 'Challenger Karşılaştırma',
        description:
          'Yeniden eğitilen model challenger deneyi olarak oluşur; mevcut modelle metrik metrik karşılaştırıp geçiş kararını veriye dayandırın. Hem deney modellerinde hem özel modellerde.',
      },
    ],
    resultsEyebrow: 'Model sonuçları',
    resultsTitle: 'Aynı deneyde birden çok algoritma, tek ekranda',
    resultsBody:
      "Logistic Regression, LightGBM, XGBoost, CatBoost, Random Forest ve SGD arasından seçtiğiniz algoritmaları tek deneyde birlikte eğitin. Eğitim bittiğinde her modelin Train ve Test skorları Model Results'ta yan yana gelir; en iyi adayı seçmek için ayrı ayrı deney kurmanıza gerek kalmaz.",
    videoTitle: 'Deney iş akışını baştan sona izleyin',
    videoDescription:
      'Problem tanımından feature engineering ve seçimine, model eğitiminden yorumlama ve ince ayara kadar tüm adımlar iki dakikada.',
    whyEyebrow: 'Neden önemli',
    whyTitle: 'Ekip eğitimi olmadan, kod yazmadan',
    whyDescription:
      'İş ve risk analistleri, veri bilimci olmadan da deney kurabilir — her adım görsel arayüzden yönetilir.',
    ctaTitle: "Experiment Pipeline'ı kendi veri setinizde görün",
    ctaDescription:
      'Kısa bir demo ile hazırlama, eğitim ve karşılaştırma adımlarının nasıl işlediğini gösterelim.',
  },
})

const capabilities = computed(() =>
  c.value.capabilities.map((item, i) => ({ ...item, icon: capabilityIcons[i] })),
)
</script>

<template>
  <PageHero :eyebrow="c.heroEyebrow" :title="c.heroTitle" :description="c.heroDescription">
    <template #actions>
      <AppButton to="/iletisim" showTrailingIcon>{{ c.cta }}</AppButton>
    </template>
  </PageHero>

  <section class="py-20">
    <Container>
      <SectionHeading :eyebrow="c.capabilitiesEyebrow" :title="c.capabilitiesTitle" />
      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card v-for="cap in capabilities" :key="cap.icon">
          <div
            class="flex h-11 w-11 items-center justify-center rounded-xl bg-very-light-pink text-pink"
          >
            <BaseIcon :name="cap.icon" sizeClass="w-5 h-5" />
          </div>
          <h3 class="mt-4 text-base font-semibold text-navy-dark">{{ cap.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-darker-gray">{{ cap.description }}</p>
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
          <p class="text-xs font-semibold uppercase tracking-wide text-pink">
            {{ c.resultsEyebrow }}
          </p>
          <h2 class="mt-1 text-2xl font-semibold text-navy-dark">
            {{ c.resultsTitle }}
          </h2>
          <p class="mt-3 text-base leading-relaxed text-darker-gray">
            {{ c.resultsBody }}
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

  <ProductVideo slug="tanitim-02-deney" :title="c.videoTitle" :description="c.videoDescription" />

  <section class="py-20">
    <Container narrow>
      <SectionHeading
        align="center"
        :eyebrow="c.whyEyebrow"
        :title="c.whyTitle"
        :description="c.whyDescription"
      />
    </Container>
  </section>

  <CtaBanner :title="c.ctaTitle" :description="c.ctaDescription" />
</template>
