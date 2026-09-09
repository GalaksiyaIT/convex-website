<script setup>
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import Badge from '@/components/ui/Badge.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'

const stories = [
  {
    company: 'Örnek Banka',
    sector: 'Bankacılık',
    before: 'Haftalar',
    after: 'Günler',
    title: 'Kredi skorlama modeli geliştirme süresi %60 kısaldı',
    summary:
      "Scorecard modeli Experiment Pipeline'da yeniden kuruldu; birden çok algoritma aynı anda karşılaştırıldı. Sonuç: haftalar yerine günler.",
    metrics: [
      { label: 'Geliştirme süresi', value: '−60%' },
      { label: 'Gini katsayısı', value: '+8 puan' },
      { label: 'Denetime hazırlık', value: 'Günler içinde' },
    ],
  },
  {
    company: 'Örnek Finans',
    sector: 'Finans',
    before: 'Manuel dokümantasyon',
    after: 'Otomatik model kartı',
    title: 'Model denetim süreçleri Model Governance ile otomatikleşti',
    summary:
      "İç denetim, model kararlarını incelemek için manuel dokümantasyona bağımlıydı. Model Governance'ın otomatik model kartı ve denetim iziyle inceleme süresi kısaldı.",
    metrics: [
      { label: 'Audit hazırlık süresi', value: '−70%' },
      { label: 'İzlenen model sayısı', value: '40+' },
      { label: 'Onay adımı', value: 'Tek ekran' },
    ],
  },
  {
    company: 'Örnek Katılım Bankası',
    sector: 'Bankacılık',
    before: '1 deneme/hafta',
    after: '3 deneme/hafta',
    title: 'Risk modelleme ekibi deneme sayısını üçe katladı',
    summary:
      "PD ve LGD modellerinde her deney manuel scriptle yürütülüyordu. Experiment Pipeline'a geçişle paralel deneme kapasitesi arttı, sonuçlar otomatik karşılaştırıldı.",
    metrics: [
      { label: 'Deneme sayısı', value: '×3' },
      { label: 'Model geliştirme süresi', value: '−50%' },
      { label: 'Tekrarlanabilirlik', value: 'Tam versiyonlama' },
    ],
  },
]
</script>

<template>
  <PageHero
    eyebrow="Vaka Çalışmaları"
    title="Somut sonuçların arkasındaki hikaye"
    description="Referanslar'daki kısa alıntıların arkasındaki hikaye — ölçülebilir sonuçlarla."
  />

  <section class="py-20">
    <Container>
      <div class="space-y-12">
        <article
          v-for="s in stories"
          :key="s.title"
          class="rounded-2xl border border-light-gray-border p-8"
        >
          <div class="flex flex-wrap items-center gap-3">
            <Badge tone="pink">{{ s.sector }}</Badge>
            <span class="text-sm font-medium text-darker-gray">{{ s.company }}</span>
          </div>
          <div class="mt-4 flex items-center gap-3 text-lg font-semibold text-navy-dark sm:text-xl">
            <span class="text-darker-gray/60 line-through decoration-2">{{ s.before }}</span>
            <BaseIcon name="arrowRight" sizeClass="w-4 h-4 text-pink" />
            <span class="text-pink">{{ s.after }}</span>
          </div>
          <h2 class="mt-3 text-2xl font-semibold text-navy-dark">{{ s.title }}</h2>
          <p class="mt-3 max-w-3xl text-base leading-relaxed text-darker-gray">{{ s.summary }}</p>
          <div
            class="mt-6 grid grid-cols-3 gap-4 border-t border-light-gray-border pt-6 sm:max-w-md"
          >
            <div v-for="m in s.metrics" :key="m.label">
              <p class="text-xl font-semibold text-pink">{{ m.value }}</p>
              <p class="mt-1 text-xs text-darker-gray">{{ m.label }}</p>
            </div>
          </div>
        </article>
      </div>
    </Container>
  </section>

  <CtaBanner
    title="Sıradaki başarı hikayesi sizinki olsun"
    description="Ekibinizin senaryosunu değerlendirelim ve nasıl bir sonuç hedefleyebileceğimizi konuşalım."
  />
</template>
