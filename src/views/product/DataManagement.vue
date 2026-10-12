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

// Tanıtım videosunun "Veri" bölümüyle (tanitim-01-veri) aynı kapsam; stage ekranlarında doğrulandı.
const capabilityIcons = [
  'upload',
  'database',
  'workflow',
  'gitBranch',
  'filter',
  'barChart',
  'cpu',
  'layers',
]

const c = useCopy({
  en: {
    heroEyebrow: 'Product · Data Management',
    heroTitle: 'Bring your data together in one place, version it, enrich it',
    heroDescription:
      'Pull data from files or databases, merge it and generate synthetic data — every change becomes a traceable version.',
    cta: 'Request a Demo',
    capabilitiesEyebrow: 'Capabilities',
    capabilitiesTitle: 'From raw data to experiment-ready datasets',
    capabilities: [
      {
        title: 'Data Sources',
        description:
          'Upload a CSV from your computer, or connect to your relational database and build your query with Query Builder, preview it and turn it into a dataset.',
      },
      {
        title: 'Synchronization',
        description:
          'Refresh database-backed datasets with a single click using Sync, so your models always run on the latest data.',
      },
      {
        title: 'Merging and Polygons',
        description:
          'Combine different sources into a single dataset with JOIN, WHERE and GROUP BY steps using Merged dataset; bring region and location data into your analysis with point in polygon.',
      },
      {
        title: 'Versioning',
        description:
          'Every change — including sampling, new versions and synthetic data — becomes a new version, so you always know which model was trained on which data.',
      },
      {
        title: 'Sampling',
        description:
          'Draw samples from large datasets based on your target variable and speed up your experiments.',
      },
      {
        title: 'Visualization',
        description:
          'Get to know your data in one click with Distribution, Violin and Count Plots and the Correlation Matrix.',
      },
      {
        title: 'Synthetic Data',
        description:
          'Generate realistic synthetic data from your own data with CTGAN or CART; measure quality with privacy, utility and similarity scores, and compare it to the original with the Evolution Report.',
      },
      {
        title: 'Portfolios and Use Cases',
        description:
          'Organize your projects by portfolio and use case, and assign datasets and projects to departments.',
      },
    ],
    videoTitle: 'Watch data management in action',
    videoDescription:
      'Data ingestion, synchronization, polygon merging, synthetic data and versioning in a minute and a half.',
    ctaTitle: "Let's talk about bringing your data into Convex",
    ctaDescription:
      "We'll show you in a demo how we connect to your data sources and how your datasets are managed.",
  },
  tr: {
    heroEyebrow: 'Ürün · Veri Yönetimi',
    heroTitle: 'Verinizi tek yerde toplayın, sürümleyin, zenginleştirin',
    heroDescription:
      'Dosyadan ya da veritabanından veri alın, birleştirin, sentetik veri üretin — her değişiklik izlenebilir bir sürüm olur.',
    cta: 'Demo Talep Et',
    capabilitiesEyebrow: 'Yetenekler',
    capabilitiesTitle: 'Veriden deneye hazır veri setine',
    capabilities: [
      {
        title: 'Veri Kaynakları',
        description:
          'Bilgisayarınızdan CSV yükleyin ya da ilişkisel veritabanınıza bağlanıp Query Builder ile sorgunuzu kurun, önizleyin ve veri setine dönüştürün.',
      },
      {
        title: 'Senkronizasyon',
        description:
          'Veritabanı kaynaklı veri setlerini Sync ile tek tuşla güncelleyin; modelleriniz hep en güncel veriyle çalışsın.',
      },
      {
        title: 'Birleştirme ve Poligon',
        description:
          'Merged dataset ile farklı kaynakları JOIN, WHERE, GROUP BY adımlarıyla tek veri setinde toplayın; point in polygon ile bölge ve konum verisini analize katın.',
      },
      {
        title: 'Sürümleme',
        description:
          'Örnekleme, yeni sürüm ve sentetik veri dahil her değişiklik yeni bir sürüm olur; hangi modelin hangi veriyle eğitildiğini her zaman bilin.',
      },
      {
        title: 'Örnekleme',
        description:
          'Büyük verilerden hedef değişkeninize göre örneklem alın, denemelerinizi hızlandırın.',
      },
      {
        title: 'Görselleştirme',
        description:
          'Distribution, Violin ve Count Plots ile Correlation Matrix sayesinde verinizi tek tıkla tanıyın.',
      },
      {
        title: 'Sentetik Veri',
        description:
          'Kendi verinizden CTGAN ya da CART ile gerçekçi sentetik veri üretin; gizlilik, fayda ve benzerlik puanlarıyla kaliteyi ölçün, Evolution Report ile orijinalle karşılaştırın.',
      },
      {
        title: 'Portföy ve Kullanım Senaryoları',
        description:
          'Projelerinizi portföy ve kullanım senaryolarına göre düzenleyin; veri setlerini ve projeleri departmanlara atayın.',
      },
    ],
    videoTitle: 'Veri yönetimini videoda izleyin',
    videoDescription:
      'Veri alma, senkronizasyon, poligon birleştirme, sentetik veri ve sürümleme bir buçuk dakikada.',
    ctaTitle: "Verinizi Convex'e taşımayı konuşalım",
    ctaDescription:
      'Veri kaynaklarınıza nasıl bağlanacağımızı ve veri setlerinizin nasıl yönetileceğini bir demoda gösterelim.',
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

  <ProductVideo slug="tanitim-01-veri" :title="c.videoTitle" :description="c.videoDescription" />

  <CtaBanner :title="c.ctaTitle" :description="c.ctaDescription" />
</template>
