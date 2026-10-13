<script setup>
import { computed } from 'vue'
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import AppButton from '@/components/ui/AppButton.vue'
import Card from '@/components/ui/Card.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'
import { useCopy } from '@/i18n'
import LoopVideo from '@/components/ui/LoopVideo.vue'
import dataInScoresOutVideo from '@/assets/videos/motion/data-in-scores-out.webm'
import dataInScoresOutPoster from '@/assets/posters/motion/data-in-scores-out.jpg'

const groupIcons = ['database', 'cpu', 'plug']

const c = useCopy({
  en: {
    heroEyebrow: 'Product · Extensions',
    heroTitle: 'A platform that speaks to your existing infrastructure',
    heroDescription:
      'See which data sources it connects to and which algorithms it extends with, all in one place.',
    cta: 'Request a Demo',
    sectionTitle: 'For your technical evaluation',
    sectionDescription: 'Straight answers to the integration questions your team asks early on.',
    groups: [
      {
        title: 'Data Sources',
        items: [
          'CSV file upload',
          'Relational databases (queries via Query Builder)',
          'Multi-source merging with Merged dataset',
          'Refreshing database-backed datasets with Sync',
        ],
      },
      {
        title: 'Algorithm Packages',
        items: [
          'Logistic Regression, LightGBM, XGBoost, CatBoost, Random Forest, SGD',
          'Score Card generation (Target Score, Target Odds, PDO)',
          'Synthetic data: CTGAN and CART',
          'Custom Models: bring your own model (.pkl / .zip)',
        ],
      },
      {
        title: 'System Integrations',
        items: [
          'Decision engine integration via REST API (predict)',
          'Batch scoring: from database to database',
          'Identity and access management (SSO)',
          'Monitoring reports and alerts by email',
        ],
      },
    ],
    ctaTitle: "Let's talk about your integration needs",
    ctaDescription:
      'Let’s evaluate together with your technical team how we connect to your existing systems.',
  },
  tr: {
    heroEyebrow: 'Ürün · Eklentiler',
    heroTitle: 'Mevcut altyapınızla konuşan bir platform',
    heroDescription:
      'Hangi veri kaynaklarına bağlandığını, hangi algoritmalarla genişlediğini burada görün.',
    cta: 'Demo Talep Et',
    sectionTitle: 'Teknik değerlendirme için',
    sectionDescription: 'Ekibinizin erken aşamada sorduğu entegrasyon sorularına doğrudan cevap.',
    groups: [
      {
        title: 'Veri Kaynakları',
        items: [
          'CSV dosya yükleme',
          'İlişkisel veritabanları (Query Builder ile sorgu)',
          'Merged dataset ile çoklu kaynak birleştirme',
          'Sync ile veritabanı kaynaklı veri setlerini güncelleme',
        ],
      },
      {
        title: 'Algoritma Paketleri',
        items: [
          'Logistic Regression, LightGBM, XGBoost, CatBoost, Random Forest, SGD',
          'Score Card üretimi (Target Score, Target Odds, PDO)',
          'Sentetik veri: CTGAN ve CART',
          'Özel Modeller: kendi modelinizi (.pkl / .zip) getirin',
        ],
      },
      {
        title: 'Sistem Entegrasyonları',
        items: [
          'REST API (predict) ile karar motoru entegrasyonu',
          'Batch skorlama: veritabanından veritabanına',
          'Kimlik ve erişim yönetimi (SSO)',
          'E-posta ile izleme raporları ve uyarılar',
        ],
      },
    ],
    ctaTitle: 'Entegrasyon ihtiyacınızı konuşalım',
    ctaDescription:
      'Mevcut sistemlerinize nasıl bağlanacağımızı teknik ekibinizle birlikte değerlendirelim.',
  },
})

const groups = computed(() => c.value.groups.map((group, i) => ({ ...group, icon: groupIcons[i] })))
</script>

<template>
  <PageHero :eyebrow="c.heroEyebrow" :title="c.heroTitle" :description="c.heroDescription">
    <template #actions>
      <AppButton to="/contact" showTrailingIcon>{{ c.cta }}</AppButton>
    </template>
  </PageHero>

  <!-- Claude Motion filmi: veriyi veritabanından alma → batch skorlama → REST ile anlık skor. -->
  <section class="bg-light-gray-bg py-16">
    <Container>
      <div
        class="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-light-gray-border shadow-xl shadow-navy-dark/10"
      >
        <LoopVideo
          :src="dataInScoresOutVideo"
          :poster="dataInScoresOutPoster"
          :label="c.heroTitle"
        />
      </div>
    </Container>
  </section>

  <section class="py-20">
    <Container>
      <SectionHeading :title="c.sectionTitle" :description="c.sectionDescription" />
      <div class="mt-10 grid gap-6 lg:grid-cols-3">
        <Card v-for="g in groups" :key="g.icon">
          <div
            class="flex h-11 w-11 items-center justify-center rounded-xl bg-very-light-pink text-pink"
          >
            <BaseIcon :name="g.icon" sizeClass="w-5 h-5" />
          </div>
          <h3 class="mt-4 text-base font-semibold text-navy-dark">{{ g.title }}</h3>
          <ul class="mt-3 space-y-2">
            <li
              v-for="item in g.items"
              :key="item"
              class="flex items-start gap-2 text-sm text-darker-gray"
            >
              <BaseIcon name="check" sizeClass="w-4 h-4 text-pink mt-0.5 flex-shrink-0" />
              {{ item }}
            </li>
          </ul>
        </Card>
      </div>
    </Container>
  </section>

  <CtaBanner :title="c.ctaTitle" :description="c.ctaDescription" />
</template>
