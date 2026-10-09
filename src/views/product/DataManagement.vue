<script setup>
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import AppButton from '@/components/ui/AppButton.vue'
import Card from '@/components/ui/Card.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'
import ProductVideo from '@/components/sections/ProductVideo.vue'

// Tanıtım videosunun "Veri" bölümüyle (tanitim-01-veri) aynı kapsam; stage ekranlarında doğrulandı.
const capabilities = [
  {
    icon: 'upload',
    title: 'Veri Kaynakları',
    description:
      'Bilgisayarınızdan CSV yükleyin ya da ilişkisel veritabanınıza bağlanıp Query Builder ile sorgunuzu kurun, önizleyin ve veri setine dönüştürün.',
  },
  {
    icon: 'database',
    title: 'Senkronizasyon',
    description:
      'Veritabanı kaynaklı veri setlerini Sync ile tek tuşla güncelleyin; modelleriniz hep en güncel veriyle çalışsın.',
  },
  {
    icon: 'workflow',
    title: 'Birleştirme ve Poligon',
    description:
      'Merged dataset ile farklı kaynakları JOIN, WHERE, GROUP BY adımlarıyla tek veri setinde toplayın; point in polygon ile bölge ve konum verisini analize katın.',
  },
  {
    icon: 'gitBranch',
    title: 'Sürümleme',
    description:
      'Örnekleme, yeni sürüm ve sentetik veri dahil her değişiklik yeni bir sürüm olur; hangi modelin hangi veriyle eğitildiğini her zaman bilin.',
  },
  {
    icon: 'filter',
    title: 'Örnekleme',
    description:
      'Büyük verilerden hedef değişkeninize göre örneklem alın, denemelerinizi hızlandırın.',
  },
  {
    icon: 'barChart',
    title: 'Görselleştirme',
    description:
      'Distribution, Violin ve Count Plots ile Correlation Matrix sayesinde verinizi tek tıkla tanıyın.',
  },
  {
    icon: 'cpu',
    title: 'Sentetik Veri',
    description:
      'Kendi verinizden CTGAN ya da CART ile gerçekçi sentetik veri üretin; gizlilik, fayda ve benzerlik puanlarıyla kaliteyi ölçün, Evolution Report ile orijinalle karşılaştırın.',
  },
  {
    icon: 'layers',
    title: 'Portföy ve Kullanım Senaryoları',
    description:
      'Projelerinizi portföy ve kullanım senaryolarına göre düzenleyin; veri setlerini ve projeleri departmanlara atayın.',
  },
]
</script>

<template>
  <PageHero
    eyebrow="Ürün · Veri Yönetimi"
    title="Verinizi tek yerde toplayın, sürümleyin, zenginleştirin"
    description="Dosyadan ya da veritabanından veri alın, birleştirin, sentetik veri üretin — her değişiklik izlenebilir bir sürüm olur."
  >
    <template #actions>
      <AppButton to="/iletisim" showTrailingIcon>Demo Talep Et</AppButton>
    </template>
  </PageHero>

  <section class="py-20">
    <Container>
      <SectionHeading eyebrow="Yetenekler" title="Veriden deneye hazır veri setine" />
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

  <ProductVideo
    slug="tanitim-01-veri"
    title="Veri yönetimini videoda izleyin"
    description="Veri alma, senkronizasyon, poligon birleştirme, sentetik veri ve sürümleme bir buçuk dakikada."
  />

  <CtaBanner
    title="Verinizi Convex'e taşımayı konuşalım"
    description="Veri kaynaklarınıza nasıl bağlanacağımızı ve veri setlerinizin nasıl yönetileceğini bir demoda gösterelim."
  />
</template>
