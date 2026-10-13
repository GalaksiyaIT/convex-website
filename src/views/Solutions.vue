<script setup>
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import AppButton from '@/components/ui/AppButton.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'
import { RouterLink } from 'vue-router'
import { computed, onMounted, onBeforeUnmount } from 'vue'
import predictiveVideo from '@/assets/videos/solutions/predictive-modeling.webm'
import predictivePoster from '@/assets/posters/solutions/predictive-modeling.jpg'
import riskVideo from '@/assets/videos/solutions/risk-and-decision-models.webm'
import riskPoster from '@/assets/posters/solutions/risk-and-decision-models.jpg'
import validationVideo from '@/assets/videos/solutions/model-validation.webm'
import validationPoster from '@/assets/posters/solutions/model-validation.jpg'
import { useCopy } from '@/i18n'

const reasonIcons = ['eye', 'server', 'plug', 'workflow', 'gitBranch']
const scenarioIcons = ['barChart', 'shield', 'eye']
// Her senaryonun yanında Claude Motion ile üretilmiş 15 sn'lik sessiz döngü (gerçek Convex ekranları).
const scenarioMedia = [
  { video: predictiveVideo, poster: predictivePoster },
  { video: riskVideo, poster: riskPoster },
  { video: validationVideo, poster: validationPoster },
]
const reduceMotion =
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
const videoEls = []
// Videolar ekrana girince oynar, çıkınca durur (otomatik oynatma ertelense de görünür olunca başlar).
onMounted(() => {
  if (reduceMotion || typeof IntersectionObserver === 'undefined') return
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        const v = e.target
        v.muted = true
        if (e.isIntersecting) v.play().catch(() => {})
        else v.pause()
      }
    },
    { threshold: 0.35 },
  )
  for (const v of videoEls) if (v) io.observe(v)
  onBeforeUnmount(() => io.disconnect())
})

const c = useCopy({
  en: {
    reasons: [
      {
        title: 'Explainable & Auditable',
        description:
          'Show auditors and business teams the reasoning behind every prediction with SHAP.',
      },
      {
        title: 'On-Prem or Cloud',
        description: 'Your infrastructure policy decides where your data lives.',
      },
      {
        title: 'Integrates with Your Systems',
        description:
          'Pulls data from your relational databases; live models serve scores to your decision engines via REST API and to bulk jobs via batch.',
      },
      {
        title: 'One End-to-End Platform',
        description: 'From data preparation to deployment, no switching between separate tools.',
      },
      {
        title: 'Regulation-Ready',
        description:
          'The traceability and versioning that model risk management frameworks expect.',
      },
    ],
    scenarios: [
      {
        title: 'Predictive Modeling',
        eyebrow: 'Classification and regression',
        description:
          'Add machine learning alongside your existing statistical methods and boost discriminatory power without changing your decision process.',
        points: [
          'Side-by-side comparison with your current model',
          'Explainable feature engineering with WOE/binning',
          'Approval records in the Model Audit Log, plus a Validation Report',
        ],
      },
      {
        title: 'Risk and Decision Models',
        eyebrow: 'Probability, loss and propensity prediction',
        description:
          'Build probability and loss models with the traceability and versioning that regulators and internal policies expect.',
        points: [
          'Champion/challenger comparison',
          'Monitoring model drift over time',
          'Audit-ready model documentation',
        ],
      },
      {
        title: 'Model Validation',
        eyebrow: 'Internal audit and risk committee',
        description:
          'Open production models to independent review and pass audits without falling back on the “black box” defense.',
        points: [
          'SHAP-based contribution analysis',
          'An audit trail for every model version',
          'Department-based access and Audit Log approval records',
        ],
      },
    ],
    useCases: [
      'Customer acquisition and application scoring',
      'Marketing targeting and response prediction',
      'Customer churn prediction',
      'Fraud detection',
      'Default and loss probability modeling',
      'Early warning and collections prioritization',
      'Model validation and independent review',
      'Scenario and stress test analysis',
      'Audit-ready model reporting',
      'Portfolio-level risk monitoring',
      'Champion/challenger model comparison',
      'Explainability and audit documentation',
    ],
    heroEyebrow: 'Solutions',
    heroTitle: 'Get your models into production in minutes.',
    heroDescription:
      'Convex brings speed and auditability together across predictive modeling, risk modeling and model validation.',
    heroCta: 'Request a Demo',
    reasonsLabel: 'Why teams choose Convex',
    caseStudyLink: 'Read the related case study',
    pointsLabel: 'What matters in this scenario',
    useCasesLabel: 'And more: other use cases Convex covers',
    ctaTitle: 'Let’s assess your use case together',
    ctaDescription: 'Let’s schedule a short demo built around your own data set and requirements.',
  },
  tr: {
    reasons: [
      {
        title: 'Açıklanabilir & Denetlenebilir',
        description:
          'Her tahminin gerekçesi SHAP ile denetçilere ve iş birimlerine gösterilebilir.',
      },
      {
        title: 'On-Prem veya Cloud',
        description: 'Verinin nerede tutulacağına kurumun altyapı politikası karar verir.',
      },
      {
        title: 'Mevcut Sistemlerle Entegre',
        description:
          'Veriyi ilişkisel veritabanlarınızdan alır; canlıdaki model karar motorlarınıza REST API ile, toplu işlerde batch ile skor sunar.',
      },
      {
        title: 'Uçtan Uca Tek Platform',
        description: 'Veri hazırlamaktan deploy’a kadar ayrı araçlar arasında geçiş gerekmez.',
      },
      {
        title: 'Regülasyona Hazır',
        description: 'Model risk yönetimi çerçevelerinin beklediği izlenebilirlik ve versiyonlama.',
      },
    ],
    scenarios: [
      {
        title: 'Tahmin Modelleme',
        eyebrow: 'Sınıflandırma ve regresyon',
        description:
          'Mevcut istatistiksel yöntemlerin yanına makine öğrenmesini katın, ayrım gücünü artırın — karar sürecinizi değiştirmeden.',
        points: [
          'Mevcut modelinizle yan yana karşılaştırma',
          'WOE/binning ile açıklanabilir feature engineering',
          'Model Audit Log ile onay kaydı ve Validation Report',
        ],
      },
      {
        title: 'Risk ve Karar Modelleri',
        eyebrow: 'Olasılık, kayıp ve eğilim tahmini',
        description:
          'Olasılık ve kayıp tahmini gibi modelleri; regülasyonun ya da kurum içi politikaların beklediği izlenebilirlik ve versiyonlamayla kurun.',
        points: [
          'Champion/challenger karşılaştırması',
          'Zaman içinde model sapmasının (drift) izlenmesi',
          'Denetime sunulabilir model dokümantasyonu',
        ],
      },
      {
        title: 'Model Denetimi',
        eyebrow: 'İç denetim ve risk komitesi',
        description:
          'Üretimdeki modelleri bağımsız incelemeye açın — "kara kutu" savunması yapmadan denetimden geçin.',
        points: [
          'SHAP tabanlı katkı analizleri',
          'Tüm model versiyonlarının denetim izi',
          'Departman bazlı erişim ve Audit Log onay kayıtları',
        ],
      },
    ],
    // Somut kullanım senaryolarının tek bakışta tarandığı, sektöre bağlı olmayan bir liste —
    // üç ana senaryonun altını dolduruyor.
    useCases: [
      'Müşteri edinimi ve başvuru skorlama',
      'Pazarlama hedefleme ve yanıt tahmini',
      'Müşteri kaybı (churn) tahmini',
      'Dolandırıcılık (fraud) tespiti',
      'Temerrüt ve kayıp olasılığı modelleme',
      'Erken uyarı ve tahsilat önceliklendirme',
      'Model doğrulama ve bağımsız gözden geçirme',
      'Senaryo ve stres testi analizi',
      'Denetime sunulacak model raporlama',
      'Portföy bazında risk izleme',
      'Champion/challenger model karşılaştırması',
      'Açıklanabilirlik ve denetim dokümantasyonu',
    ],
    heroEyebrow: 'Çözümler',
    heroTitle: 'Modellerinizi dakikalar içinde canlıya alın.',
    heroDescription:
      'Convex, tahmin modelleme, risk modelleme ve model denetiminde hız ile denetlenebilirliği bir arada verir.',
    heroCta: 'Demo Talep Et',
    reasonsLabel: "Ekipler Convex'i neden seçiyor",
    caseStudyLink: 'İlgili vaka çalışmasını oku',
    pointsLabel: 'Bu senaryoda önemli olan',
    useCasesLabel: "Ve dahası — Convex'in kapsadığı diğer senaryolar",
    ctaTitle: 'Senaryonuzu birlikte değerlendirelim',
    ctaDescription: 'Kendi veri setiniz ve gereksinimleriniz üzerinden kısa bir demo planlayalım.',
  },
})

const reasons = computed(() => c.value.reasons.map((r, i) => ({ ...r, icon: reasonIcons[i] })))
const scenarios = computed(() =>
  c.value.scenarios.map((s, i) => ({ ...s, icon: scenarioIcons[i], ...scenarioMedia[i] })),
)
</script>

<template>
  <PageHero :eyebrow="c.heroEyebrow" :title="c.heroTitle" :description="c.heroDescription">
    <template #actions>
      <AppButton to="/contact" showTrailingIcon>{{ c.heroCta }}</AppButton>
    </template>
  </PageHero>

  <!-- Kısa "neden Convex" özeti: 5'li nedenler ızgarası. -->
  <section class="border-b border-light-gray-border bg-light-gray-bg py-14">
    <Container>
      <p class="text-xs font-semibold uppercase tracking-wide text-darker-gray/60">
        {{ c.reasonsLabel }}
      </p>
      <div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        <div v-for="r in reasons" :key="r.title">
          <BaseIcon :name="r.icon" sizeClass="w-5 h-5 text-pink" />
          <h3 class="mt-3 text-sm font-semibold text-navy-dark">{{ r.title }}</h3>
          <p class="mt-1.5 text-xs leading-relaxed text-darker-gray">{{ r.description }}</p>
        </div>
      </div>
    </Container>
  </section>

  <section class="py-20">
    <Container>
      <div class="space-y-16">
        <div
          v-for="(s, i) in scenarios"
          :key="s.title"
          class="grid gap-10 lg:grid-cols-2 lg:items-center"
        >
          <div :class="i % 2 === 1 ? 'lg:order-2' : ''">
            <div
              class="flex h-11 w-11 items-center justify-center rounded-xl bg-very-light-pink text-pink"
            >
              <BaseIcon :name="s.icon" sizeClass="w-5 h-5" />
            </div>
            <p class="mt-4 text-xs font-semibold uppercase tracking-wide text-pink">
              {{ s.eyebrow }}
            </p>
            <h2 class="mt-1 text-2xl font-semibold text-navy-dark">{{ s.title }}</h2>
            <p class="mt-3 text-base leading-relaxed text-darker-gray">{{ s.description }}</p>
            <p class="mt-6 text-xs font-semibold uppercase tracking-wide text-darker-gray/60">
              {{ c.pointsLabel }}
            </p>
            <ul class="mt-3 space-y-2.5">
              <li
                v-for="p in s.points"
                :key="p"
                class="flex items-start gap-2 text-sm text-navy-dark"
              >
                <BaseIcon name="check" sizeClass="w-4 h-4 text-pink mt-0.5 flex-shrink-0" />
                {{ p }}
              </li>
            </ul>
            <RouterLink
              to="/case-studies"
              class="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-pink"
            >
              {{ c.caseStudyLink }}
              <BaseIcon name="arrowRight" sizeClass="w-3.5 h-3.5" />
            </RouterLink>
          </div>
          <div
            class="overflow-hidden rounded-2xl border border-light-gray-border bg-very-light-pink shadow-xl shadow-navy-dark/10"
            :class="i % 2 === 1 ? 'lg:order-1' : ''"
          >
            <video
              :ref="(el) => (videoEls[i] = el)"
              :src="s.video"
              :poster="s.poster"
              class="aspect-video w-full"
              muted
              loop
              playsinline
              preload="metadata"
              :autoplay="!reduceMotion"
              :controls="reduceMotion"
              :aria-label="s.title"
            />
          </div>
        </div>
      </div>
    </Container>
  </section>

  <section class="bg-light-gray-bg py-16">
    <Container>
      <p class="text-xs font-semibold uppercase tracking-wide text-darker-gray/60">
        {{ c.useCasesLabel }}
      </p>
      <div class="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="uc in c.useCases"
          :key="uc"
          class="flex items-start gap-2 text-sm text-navy-dark"
        >
          <BaseIcon name="check" sizeClass="w-4 h-4 text-pink mt-0.5 flex-shrink-0" />
          {{ uc }}
        </div>
      </div>
    </Container>
  </section>

  <CtaBanner :title="c.ctaTitle" :description="c.ctaDescription" />
</template>
