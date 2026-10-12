<script setup>
import { computed } from 'vue'
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import AppButton from '@/components/ui/AppButton.vue'
import Card from '@/components/ui/Card.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'
import ProductVideo from '@/components/sections/ProductVideo.vue'
import { useCopy } from '@/i18n'

const capabilityIcons = [
  'rocket',
  'workflow',
  'layers',
  'server',
  'barChart',
  'mail',
  'gitBranch',
  'plug',
  'database',
]

const c = useCopy({
  en: {
    heroEyebrow: 'Product · Deployment & Application',
    heroTitle: 'Put approved models into production in minutes',
    heroDescription:
      'Deployment & Application turns a model that has cleared governance into an operational decision process — without the integration headaches.',
    cta: 'Request a Demo',
    capabilitiesEyebrow: 'Capabilities',
    capabilitiesTitle: 'From model to operations',
    capabilities: [
      {
        title: 'One-Click Deploy',
        description:
          'Deploy a built application to the environment of your choice in one click — no extra integration burden.',
      },
      {
        title: 'Applications',
        description:
          'Group the models you’re taking live under a single application; built models are attached to the application and deployed together.',
      },
      {
        title: 'Output Options',
        description:
          'Alongside the prediction, choose the outputs you need from Raw Data, Intermediate Variables, Score Card and SHAP Values.',
      },
      {
        title: 'On-Prem or Cloud',
        description:
          'Add your own environments from the Infrastructure screen and run the model in your own data center or in the cloud.',
      },
      {
        title: 'Model Monitoring',
        description:
          'Continuously track the live model’s performance along with PSI, VIF, correlation, SHAP, Confusion Matrix and data quality analyses using Auto Monitoring; see the summary in the Model Report.',
      },
      {
        title: 'Thresholds and Alerts',
        description:
          'Define lower and upper thresholds per metric with Monitoring Profiles; get an alert when a threshold is breached, and receive regular reports in your inbox on schedule.',
      },
      {
        title: 'Champion / Challenger',
        description:
          'Compare a retrained challenger model with the live model, and deploy the new version if it performs better.',
      },
      {
        title: 'REST API Integration',
        description:
          'The live model serves scores to your decision engines and core systems through predict endpoints; get a ready-made example request with Sample API Request.',
      },
      {
        title: 'Batch Scoring',
        description:
          'Build batch scoring flows that read from a database, run the data through the model and write the results back to a database.',
      },
    ],
    deployVideoTitle: 'Watch deployment and monitoring in action',
    deployVideoDescription:
      'Adding environments, one-click deployment, output options, automatic monitoring, the Model Report and the REST API.',
    batchVideoEyebrow: 'Batch scoring',
    batchVideoTitle: 'Batch scoring, from database to database',
    batchVideoDescription:
      'Batch flows read data from a database, run it through the model and write the results back to a database — score large record sets without needing a live API.',
    ctaTitle: 'Shorten your deployment process',
    ctaDescription:
      'We’ll show you the entire flow in a demo, from taking a model live to monitoring and batch scoring.',
  },
  tr: {
    heroEyebrow: 'Ürün · Deployment & Application',
    heroTitle: 'Onaylanan modeli dakikalar içinde üretime alın',
    heroDescription:
      "Deployment & Application, governance'tan geçen modeli operasyonel bir karar sürecine dönüştürür — entegrasyon karmaşası olmadan.",
    cta: 'Demo Talep Et',
    capabilitiesEyebrow: 'Yetenekler',
    capabilitiesTitle: 'Modelden operasyona',
    capabilities: [
      {
        title: 'Tek Tıkla Deploy',
        description:
          'Build edilen uygulamayı seçtiğiniz ortama tek tıkla dağıtın; ek entegrasyon yükü yok.',
      },
      {
        title: 'Applications',
        description:
          'Canlıya alınacak modelleri bir uygulama altında toplayın; build edilen modeller uygulamaya bağlanır ve birlikte dağıtılır.',
      },
      {
        title: 'Çıktı Seçenekleri',
        description:
          'Tahminle birlikte Raw Data, Intermediate Variables, Score Card ve SHAP Values çıktılarından ihtiyacınız olanları seçin.',
      },
      {
        title: 'On-Prem veya Cloud',
        description:
          'Infrastructure ekranından kendi ortamlarınızı ekleyin; model kendi veri merkezinizde ya da bulutta çalışsın.',
      },
      {
        title: 'Model Monitoring',
        description:
          "Auto Monitoring ile canlıdaki modelin performansını, PSI, VIF, korelasyon, SHAP, Confusion Matrix ve veri kalitesi analizlerini sürekli izleyin; Model Report'ta özetini görün.",
      },
      {
        title: 'Eşikler ve Uyarılar',
        description:
          'Monitoring Profiles ile metrik başına alt ve üst eşik tanımlayın; eşik aşılınca uyarı, düzenli raporlar ise zamanında e-postanıza gelsin.',
      },
      {
        title: 'Champion / Challenger',
        description:
          'Yeniden eğitilen challenger modeli canlıdaki modelle karşılaştırın; daha iyiyse yeni sürümü dağıtın.',
      },
      {
        title: 'REST API ile Entegrasyon',
        description:
          'Canlıdaki model, predict uç noktalarıyla karar motorlarınıza ve çekirdek sistemlerinize skor sunar; Sample API Request ile örnek isteği hazır alın.',
      },
      {
        title: 'Batch Skorlama',
        description:
          'Veritabanından okuyup modelden geçiren, sonuçları yine veritabanına yazan toplu skorlama akışları kurun.',
      },
    ],
    deployVideoTitle: 'Dağıtım ve izlemeyi videoda izleyin',
    deployVideoDescription:
      'Ortam ekleme, tek tıkla dağıtım, çıktı seçenekleri, otomatik izleme, Model Report ve REST API.',
    batchVideoEyebrow: 'Batch skorlama',
    batchVideoTitle: 'Toplu skorlama, veritabanından veritabanına',
    batchVideoDescription:
      "Batch akışları veriyi veritabanından okur, modelden geçirir ve sonuçları yine veritabanına yazar — canlı API'ye gerek kalmadan büyük kayıt kümelerini skorlayın.",
    ctaTitle: 'Deploy sürecinizi kısaltın',
    ctaDescription:
      'Modelin canlıya alınmasından izleme ve toplu skorlamaya kadar tüm akışı bir demoda gösterelim.',
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

  <ProductVideo
    slug="tanitim-05-dagitim"
    :title="c.deployVideoTitle"
    :description="c.deployVideoDescription"
  />

  <ProductVideo
    slug="tanitim-06-batch"
    tone="white"
    :eyebrow="c.batchVideoEyebrow"
    :title="c.batchVideoTitle"
    :description="c.batchVideoDescription"
  />

  <CtaBanner :title="c.ctaTitle" :description="c.ctaDescription" />
</template>
