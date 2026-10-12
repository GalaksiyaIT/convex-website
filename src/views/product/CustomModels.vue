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

// Tanıtım videosunun "Özel Modeller" bölümüyle (tanitim-03-ozel-modeller) aynı kapsam; stage ekranlarında doğrulandı.
const capabilityIcons = ['upload', 'gitBranch', 'cpu', 'barChart', 'eye', 'server']

const c = useCopy({
  en: {
    heroEyebrow: 'Product · Custom Models',
    heroTitle: 'Bring your own model, manage it in Convex',
    heroDescription:
      'Move externally trained models into Convex; version them, retrain them and put them through the same governance as the rest of your models.',
    cta: 'Request a Demo',
    capabilitiesEyebrow: 'Capabilities',
    capabilitiesTitle: 'External models, held to the same standard',
    capabilities: [
      {
        title: 'Bring Your Model',
        description:
          'Upload your model object (.pkl / .zip) and define the Python version, libraries, project, dataset, target column and problem type.',
      },
      {
        title: 'Versioning',
        description:
          'Each model can carry multiple versions; open a new one with Create Version, and expand the row to see every version.',
      },
      {
        title: 'Retrain and Retest',
        description:
          'Retrain the model on new data, or test the current version against new data — without writing code.',
      },
      {
        title: 'Compare with the Root Model',
        description:
          'Compare a new version with the root model metric by metric using Compare with Root Model, and base the switch on data.',
      },
      {
        title: 'Results and Explainability',
        description:
          'Review performance with Display Model Results, and feature contributions with Feature Importance and SHAP Values.',
      },
      {
        title: 'Distributed Training',
        description:
          'Split retraining on large datasets across multiple machines in distributed mode.',
      },
    ],
    videoTitle: 'Watch custom models in action',
    videoDescription:
      'Bringing in externally trained models, versioning, Retrain/Retest and comparison with the root model.',
    ctaTitle: "Let's bring your existing models into Convex",
    ctaDescription:
      "We'll show you in a demo how the models you train elsewhere are managed in Convex.",
  },
  tr: {
    heroEyebrow: 'Ürün · Özel Modeller',
    heroTitle: "Kendi modelinizi getirin, Convex'te yönetin",
    heroDescription:
      "Dışarıda eğitilmiş modelleri Convex'e taşıyın; sürümleyin, yeniden eğitin ve diğer modellerinizle aynı yönetişimden geçirin.",
    cta: 'Demo Talep Et',
    capabilitiesEyebrow: 'Yetenekler',
    capabilitiesTitle: 'Dış modeller de aynı standartta',
    capabilities: [
      {
        title: 'Modelinizi Getirin',
        description:
          'Model nesnenizi (.pkl / .zip) yükleyin; Python sürümünü, kütüphaneleri, proje, veri seti, hedef sütun ve problem tipini tanımlayın.',
      },
      {
        title: 'Sürümleme',
        description:
          'Her model birden fazla sürüm taşır; Create Version ile yeni sürüm açın, satırı genişletip tüm sürümleri görün.',
      },
      {
        title: 'Retrain ve Retest',
        description:
          'Modeli yeni veriyle yeniden eğitin ya da mevcut sürümü yeni veride test edin — kod yazmadan.',
      },
      {
        title: 'Kök Modelle Karşılaştırma',
        description:
          'Compare with Root Model ile yeni sürümü kök modelle metrik metrik karşılaştırın; geçiş kararını veriye dayandırın.',
      },
      {
        title: 'Sonuçlar ve Açıklanabilirlik',
        description:
          'Display Model Results ile performansı, Feature Importance ve SHAP Values ile değişken katkılarını inceleyin.',
      },
      {
        title: 'Dağıtık Eğitim',
        description: 'Büyük veride yeniden eğitimi dağıtık modda birden fazla makineye bölün.',
      },
    ],
    videoTitle: 'Özel modelleri videoda izleyin',
    videoDescription:
      'Dışarıda eğitilmiş modelleri getirme, sürümleme, Retrain/Retest ve kök modelle karşılaştırma.',
    ctaTitle: "Mevcut modellerinizi Convex'e taşıyalım",
    ctaDescription:
      "Dışarıda eğittiğiniz modellerin Convex'te nasıl yönetileceğini bir demoda gösterelim.",
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
    slug="tanitim-03-ozel-modeller"
    :title="c.videoTitle"
    :description="c.videoDescription"
  />

  <CtaBanner :title="c.ctaTitle" :description="c.ctaDescription" />
</template>
