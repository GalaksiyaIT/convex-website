<script setup>
import { computed } from 'vue'
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import AppButton from '@/components/ui/AppButton.vue'
import Card from '@/components/ui/Card.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import StatBand from '@/components/sections/StatBand.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'
import ProductVideo from '@/components/sections/ProductVideo.vue'
import { caps } from '@/utils/caps'
import { useCopy } from '@/i18n'
import interpretScreen from '@/assets/screens/interpret.jpg'
import validationScreen from '@/assets/screens/validation-report.jpg'

// İlk iki yetenek, Domino Data Lab'ın Model Risk Management sayfasındaki
// "eyebrow + başlık + paragraf" bloğu düzeninde; geri kalanı kart ızgarasında.
const featuredMeta = [
  { icon: 'eye', image: interpretScreen },
  { icon: 'bookOpen', image: validationScreen, reverse: true },
]

const capabilityIcons = [
  'checkCircle',
  'barChart',
  'workflow',
  'gitBranch',
  'layers',
  'upload',
  'rocket',
  'shield',
]

const c = useCopy({
  en: {
    heroEyebrow: 'Product · Model Governance',
    heroTitle: 'Prove why the model made that decision',
    heroDescription:
      'Interpretation, reporting, audit trail, scorecards and retraining — all in one module.',
    cta: 'Request a Demo',
    problemTitle: 'Why the current process falls short',
    problemBody:
      'Documentation scattered across spreadsheets and email threads has to be pieced together for weeks before every audit. The answer to “who approved what, and when?” usually lives in someone’s memory, not in a system.',
    featured: [
      {
        eyebrow: 'Interpretation',
        title: 'Show the reasoning behind every score',
        description:
          'On the Interpret screen, see quantitatively which variables drove a prediction with the SHAP Summary Plot, Correlation Graph, Reason Plot and Summary Table — instead of saying “the model decided so,” you prove where that decision came from.',
        imageAlt:
          'Convex Interpret screen: Summary Plot, Correlation Graph, Reason Plot and Summary Table tabs',
      },
      {
        eyebrow: 'Reports & Audit Log',
        title: 'Stop rewriting documentation for every version',
        description:
          'Export the Model Report as a Word document in one click. Open the Validation Report on screen and validate the model with T-test, binomial test, stability, bootstrap and score distribution tabs — and email the report as a PDF if you like. In the Model Audit Log, approval status and documents live in a single record.',
        imageAlt:
          'Convex Validation Test Report screen: T-Test, Binomial Test, Stability, Bootstrapping and Score Distribution tabs',
      },
    ],
    capabilitiesEyebrow: 'More capabilities',
    capabilitiesTitle: 'Everything auditability requires',
    capabilities: [
      {
        title: 'Model Audit Log',
        description:
          'Keep the model’s approval status and validation documents in a single record, so everything is ready when the auditors arrive.',
      },
      {
        title: 'Score Card and Equation',
        description:
          'Automatically generate and export a scorecard from Logistic Regression models with Target Score, Target Odds and PDO; see the formula clearly in Equation.',
      },
      {
        title: 'Model Flow',
        description:
          'Chain multiple models together and build your own decision flow with field mappings.',
      },
      {
        title: 'Scheduler and Retraining',
        description:
          'Let models retrain automatically at regular intervals: the Short flow reapplies the results of the previous rules as-is, while the Long flow reruns the rules on new data. Or retrain whenever you want with Trigger Retrain.',
      },
      {
        title: 'Champion / Challenger',
        description:
          'A retrained model is created as a challenger; compare it metric by metric with the current model and, if it performs better, take the new version live.',
      },
      {
        title: 'Make Prediction',
        description:
          'Get batch predictions on a new dataset without going live; download test results as CSV and the model object as a zip.',
      },
      {
        title: 'Build and Applications',
        description:
          'Turn the model into a production-ready package with Build; group it under Applications and get it ready for Model Deployment.',
      },
      {
        title: 'Access Control',
        description:
          'Assign models and datasets to departments with Department Assignment, and decide who sees what.',
      },
    ],
    stats: [
      {
        value: '4',
        label: 'interpretation views: Summary, Correlation, Reason Plot, Summary Table',
      },
      {
        value: '2',
        label:
          'automated reports: Model Report (Word) and Validation Report (on screen, PDF by email)',
      },
      { value: 'One record', label: 'Audit Log: approval status and documents' },
    ],
    videoTitle: 'Watch model governance in action',
    videoDescription:
      'Reports, validation, interpretation, scorecards, audit log, model flow, scheduler and build — transparent, auditable models.',
    regulationEyebrow: 'Regulatory perspective',
    regulationTitle: 'Model audit and explainability at the core of the design',
    regulationBody:
      'The model risk expectations of Basel and the BDDK (Turkey’s Banking Regulation and Supervision Agency) require a model to be explainable and traceable, not just accurate. Model Governance makes that part of the everyday workflow rather than an extra process.',
    ctaTitle: 'See your governance process in Convex',
    ctaDescription:
      'We’ll walk you through the interpretation, reporting and audit log screens in a live demo.',
  },
  tr: {
    heroEyebrow: 'Ürün · Model Governance',
    heroTitle: 'Modelin neden o kararı verdiğini kanıtlayın',
    heroDescription:
      'Yorumlama, raporlama, denetim kaydı, skor kartı ve yeniden eğitim — hepsi tek modülde.',
    cta: 'Demo Talep Et',
    problemTitle: 'Mevcut süreç neden yetersiz kalıyor',
    problemBody:
      "Excel'e veya e-posta zincirlerine dağılmış dokümantasyon, denetim öncesi haftalarca toplanmak zorunda kalır. Kim neyi ne zaman onayladı sorusunun cevabı genelde sistemde değil, birinin hafızasındadır.",
    featured: [
      {
        eyebrow: 'Yorumlama',
        title: 'Her skorun arkasındaki gerekçeyi gösterin',
        description:
          'Interpret ekranında SHAP Summary Plot, Correlation Graph, Reason Plot ve Summary Table ile bir tahminin hangi değişkenlerden etkilendiğini sayısal olarak görün — "model böyle karar verdi" demek yerine, o kararın nereden geldiğini kanıtlarsınız.',
        imageAlt:
          'Convex Interpret ekranı: Summary Plot, Correlation Graph, Reason Plot ve Summary Table sekmeleri',
      },
      {
        eyebrow: 'Raporlar & Denetim Kaydı',
        title: 'Dokümantasyonu her sürümde yeniden yazmayın',
        description:
          "Model Report'u tek tıkla Word belgesi olarak alın. Validation Report'u ekranda açın; T-test, binom testi, stabilite, bootstrap ve skor dağılımı sekmeleriyle modeli doğrulayın, isterseniz raporu PDF olarak e-postayla gönderin. Model Audit Log'da onay durumu ve belgeler tek kayıtta durur.",
        imageAlt:
          'Convex Validation Test Report ekranı: T-Test, Binomial Test, Stability, Bootstrapping ve Score Distribution sekmeleri',
      },
    ],
    capabilitiesEyebrow: 'Diğer yetenekler',
    capabilitiesTitle: 'Denetlenebilirlik için gerekenler',
    capabilities: [
      {
        title: 'Model Audit Log',
        description:
          'Modelin onay durumunu ve doğrulama belgelerini tek kayıtta saklayın; denetim anında her şey hazır olsun.',
      },
      {
        title: 'Score Card ve Equation',
        description:
          "Logistic Regression modellerinden skor kartını Target Score, Target Odds ve PDO ile otomatik üretin, dışa aktarın; formülü Equation'da açıkça görün.",
      },
      {
        title: 'Model Flow',
        description:
          'Birden fazla modeli birbirine bağlayın, alan eşlemeleriyle kendi karar akışınızı kurun.',
      },
      {
        title: 'Zamanlayıcı ve Yeniden Eğitim',
        description:
          'Modeller düzenli aralıklarla kendiliğinden yeniden eğitilsin: Short akışta önceki kuralların sonuçları aynen uygulanır, Long akışta kurallar yeni veride yeniden çalışır. Trigger Retrain ile istediğiniz an.',
      },
      {
        title: 'Champion / Challenger',
        description:
          'Yeniden eğitilen model challenger olarak oluşur; mevcut modelle metrik metrik karşılaştırın, daha iyiyse yeni sürümü canlıya alın.',
      },
      {
        title: 'Make Prediction',
        description:
          'Yeni bir veri setiyle, canlıya almadan toplu tahmin alın; test sonuçlarını CSV, model nesnesini zip olarak indirin.',
      },
      {
        title: 'Build ve Applications',
        description:
          "Build ile modeli canlıya hazır bir pakete dönüştürün; Applications altında toplayıp Model Deployment'a hazırlayın.",
      },
      {
        title: 'Erişim Kontrolü',
        description:
          'Department Assignment ile modelleri ve veri setlerini departmanlara atayın; kimin neyi göreceğini siz belirleyin.',
      },
    ],
    // Ürün ekranlarından doğrulanabilir sayılar (müşteri iddiası değil).
    stats: [
      { value: '4', label: 'yorumlama görünümü: Summary, Correlation, Reason Plot, Summary Table' },
      {
        value: '2',
        label: 'otomatik rapor: Model Report (Word) ve Validation Report (ekranda, PDF e-posta)',
      },
      { value: 'Tek kayıt', label: 'Audit Log: onay durumu ve belgeler' },
    ],
    videoTitle: 'Model yönetişimini videoda izleyin',
    videoDescription:
      'Raporlar, doğrulama, yorumlama, skor kartı, denetim kaydı, model akışı, zamanlayıcı ve build — şeffaf ve denetlenebilir modeller.',
    regulationEyebrow: 'Regülasyon perspektifi',
    regulationTitle: 'Model audit ve açıklanabilirlik, tasarımın merkezinde',
    regulationBody:
      "Basel ve BDDK'nın model risk beklentileri, modelin doğru olduğu kadar açıklanabilir ve izlenebilir olmasını da ister. Model Governance bunu ek bir süreç değil, günlük iş akışının parçası yapar.",
    ctaTitle: "Governance sürecinizi Convex'te görün",
    ctaDescription: 'Yorumlama, raporlar ve denetim kaydı ekranlarını canlı bir demoda gösterelim.',
  },
})

const featured = computed(() =>
  featuredMeta.map((meta, i) => ({ ...meta, ...c.value.featured[i] })),
)

const capabilities = computed(() =>
  c.value.capabilities.map((item, i) => ({ ...item, icon: capabilityIcons[i] })),
)
</script>

<template>
  <PageHero :eyebrow="c.heroEyebrow" :title="c.heroTitle" :description="c.heroDescription">
    <template #actions>
      <AppButton to="/contact" showTrailingIcon>{{ c.cta }}</AppButton>
    </template>
  </PageHero>

  <ProductVideo
    tone="white"
    slug="intro-model-governance"
    :title="c.videoTitle"
    :description="c.videoDescription"
  />

  <!-- Domino Data Lab'ın Model Risk Management sayfasındaki gibi, yeteneklere
       geçmeden önce mevcut sürecin neden yetersiz kaldığını kısaca çerçeveliyoruz. -->
  <section class="border-b border-light-gray-border bg-light-gray-bg py-16">
    <Container narrow>
      <h2 class="text-xl font-semibold text-navy-dark">{{ c.problemTitle }}</h2>
      <p class="mt-3 text-base leading-relaxed text-darker-gray">
        {{ c.problemBody }}
      </p>
    </Container>
  </section>

  <section class="py-16">
    <Container>
      <StatBand :stats="c.stats" />
    </Container>
  </section>

  <section class="pb-8">
    <Container>
      <div class="space-y-16">
        <div v-for="f in featured" :key="f.icon" class="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div :class="f.reverse ? 'lg:order-2' : ''">
            <p class="text-xs font-semibold uppercase tracking-wide text-pink">
              {{ caps(f.eyebrow) }}
            </p>
            <h2 class="mt-2 text-2xl font-semibold text-navy-dark">{{ f.title }}</h2>
            <p class="mt-3 text-base leading-relaxed text-darker-gray">{{ f.description }}</p>
          </div>
          <div
            v-if="f.image"
            class="overflow-hidden rounded-2xl border border-light-gray-border shadow-xl shadow-navy-dark/10"
            :class="f.reverse ? 'lg:order-1' : ''"
          >
            <img
              :src="f.image"
              :alt="f.imageAlt"
              loading="lazy"
              class="aspect-video w-full object-cover"
            />
          </div>
          <div
            v-else
            class="flex aspect-video items-center justify-center rounded-2xl bg-very-light-pink"
            :class="f.reverse ? 'lg:order-1' : ''"
          >
            <BaseIcon :name="f.icon" sizeClass="w-14 h-14 text-pink/60" />
          </div>
        </div>
      </div>
    </Container>
  </section>

  <section class="py-20">
    <Container>
      <SectionHeading :eyebrow="c.capabilitiesEyebrow" :title="c.capabilitiesTitle" />
      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

  <section class="bg-navy-dark py-20 text-white">
    <Container narrow>
      <SectionHeading align="center" :eyebrow="c.regulationEyebrow" :title="c.regulationTitle">
        <p class="mt-4 text-base leading-relaxed text-very-light-blue/80">
          {{ c.regulationBody }}
        </p>
      </SectionHeading>
    </Container>
  </section>

  <CtaBanner :title="c.ctaTitle" :description="c.ctaDescription" />
</template>
