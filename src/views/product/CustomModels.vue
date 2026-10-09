<script setup>
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import AppButton from '@/components/ui/AppButton.vue'
import Card from '@/components/ui/Card.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'
import ProductVideo from '@/components/sections/ProductVideo.vue'

// Tanıtım videosunun "Özel Modeller" bölümüyle (tanitim-03-ozel-modeller) aynı kapsam; stage ekranlarında doğrulandı.
const capabilities = [
  {
    icon: 'upload',
    title: 'Modelinizi Getirin',
    description:
      'Model nesnenizi (.pkl / .zip) yükleyin; Python sürümünü, kütüphaneleri, proje, veri seti, hedef sütun ve problem tipini tanımlayın.',
  },
  {
    icon: 'gitBranch',
    title: 'Sürümleme',
    description:
      'Her model birden fazla sürüm taşır; Create Version ile yeni sürüm açın, satırı genişletip tüm sürümleri görün.',
  },
  {
    icon: 'cpu',
    title: 'Retrain ve Retest',
    description:
      'Modeli yeni veriyle yeniden eğitin ya da mevcut sürümü yeni veride test edin — kod yazmadan.',
  },
  {
    icon: 'barChart',
    title: 'Kök Modelle Karşılaştırma',
    description:
      'Compare with Root Model ile yeni sürümü kök modelle metrik metrik karşılaştırın; geçiş kararını veriye dayandırın.',
  },
  {
    icon: 'eye',
    title: 'Sonuçlar ve Açıklanabilirlik',
    description:
      'Display Model Results ile performansı, Feature Importance ve SHAP Values ile değişken katkılarını inceleyin.',
  },
  {
    icon: 'server',
    title: 'Dağıtık Eğitim',
    description: 'Büyük veride yeniden eğitimi dağıtık modda birden fazla makineye bölün.',
  },
]
</script>

<template>
  <PageHero
    eyebrow="Ürün · Özel Modeller"
    title="Kendi modelinizi getirin, Convex'te yönetin"
    description="Dışarıda eğitilmiş modelleri Convex'e taşıyın; sürümleyin, yeniden eğitin ve diğer modellerinizle aynı yönetişimden geçirin."
  >
    <template #actions>
      <AppButton to="/iletisim" showTrailingIcon>Demo Talep Et</AppButton>
    </template>
  </PageHero>

  <section class="py-20">
    <Container>
      <SectionHeading eyebrow="Yetenekler" title="Dış modeller de aynı standartta" />
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
    slug="tanitim-03-ozel-modeller"
    title="Özel modelleri videoda izleyin"
    description="Dışarıda eğitilmiş modelleri getirme, sürümleme, Retrain/Retest ve kök modelle karşılaştırma."
  />

  <CtaBanner
    title="Mevcut modellerinizi Convex'e taşıyalım"
    description="Dışarıda eğittiğiniz modellerin Convex'te nasıl yönetileceğini bir demoda gösterelim."
  />
</template>
