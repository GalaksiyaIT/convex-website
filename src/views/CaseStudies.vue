<script setup>
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import Badge from '@/components/ui/Badge.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'
import { useCopy } from '@/i18n'

const c = useCopy({
  en: {
    eyebrow: 'Case Studies',
    title: 'The story behind tangible results',
    description:
      'The story behind the short quotes on our References page — with measurable results.',
    ctaTitle: 'Make the next success story yours',
    ctaDescription:
      'Let’s look at your team’s use case and talk through the outcomes you can realistically aim for.',
    stories: [
      {
        company: 'Sample Bank',
        sector: 'Banking',
        before: 'Weeks',
        after: 'Minutes',
        title: 'Credit scoring model development time cut by 60%',
        summary:
          'The scorecard model was rebuilt in Experiment Pipeline, with multiple algorithms compared side by side. The result: minutes instead of weeks.',
        metrics: [
          { label: 'Development time', value: '−60%' },
          { label: 'Gini coefficient', value: '+8 pts' },
          { label: 'Audit readiness', value: 'Within minutes' },
        ],
      },
      {
        company: 'Sample Finance',
        sector: 'Finance',
        before: 'Manual documentation',
        after: 'Automated model report',
        title: 'Model audit processes automated with Model Governance',
        summary:
          'Internal audit depended on manual documentation to review model decisions. With Model Governance’s automated Model Report, Validation Report and Audit Log, review time dropped sharply.',
        metrics: [
          { label: 'Audit prep time', value: '−70%' },
          { label: 'Models monitored', value: '40+' },
          { label: 'Approval step', value: 'Single screen' },
        ],
      },
      {
        company: 'Sample Participation Bank',
        sector: 'Banking',
        before: '1 experiment/week',
        after: '3 experiments/week',
        title: 'Risk modeling team tripled its experiment throughput',
        summary:
          'Every PD and LGD experiment used to run through manual scripts. After moving to Experiment Pipeline, multiple algorithms were trained in a single experiment and results were compared automatically.',
        metrics: [
          { label: 'Experiments', value: '×3' },
          { label: 'Model development time', value: '−50%' },
          { label: 'Reproducibility', value: 'Full versioning' },
        ],
      },
    ],
  },
  tr: {
    eyebrow: 'Vaka Çalışmaları',
    title: 'Somut sonuçların arkasındaki hikaye',
    description: "Referanslar'daki kısa alıntıların arkasındaki hikaye — ölçülebilir sonuçlarla.",
    ctaTitle: 'Sıradaki başarı hikayesi sizinki olsun',
    ctaDescription:
      'Ekibinizin senaryosunu değerlendirelim ve nasıl bir sonuç hedefleyebileceğimizi konuşalım.',
    stories: [
      {
        company: 'Örnek Banka',
        sector: 'Bankacılık',
        before: 'Haftalar',
        after: 'Dakikalar',
        title: 'Kredi skorlama modeli geliştirme süresi %60 kısaldı',
        summary:
          "Scorecard modeli Experiment Pipeline'da yeniden kuruldu; birden çok algoritma aynı anda karşılaştırıldı. Sonuç: haftalar yerine dakikalar.",
        metrics: [
          { label: 'Geliştirme süresi', value: '−60%' },
          { label: 'Gini katsayısı', value: '+8 puan' },
          { label: 'Denetime hazırlık', value: 'Dakikalar içinde' },
        ],
      },
      {
        company: 'Örnek Finans',
        sector: 'Finans',
        before: 'Manuel dokümantasyon',
        after: 'Otomatik model raporu',
        title: 'Model denetim süreçleri Model Governance ile otomatikleşti',
        summary:
          "İç denetim, model kararlarını incelemek için manuel dokümantasyona bağımlıydı. Model Governance'ın otomatik Model Report, Validation Report ve Audit Log kaydıyla inceleme süresi kısaldı.",
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
          "PD ve LGD modellerinde her deney manuel scriptle yürütülüyordu. Experiment Pipeline'a geçişle birden fazla algoritma aynı deneyde eğitildi, sonuçlar otomatik karşılaştırıldı.",
        metrics: [
          { label: 'Deneme sayısı', value: '×3' },
          { label: 'Model geliştirme süresi', value: '−50%' },
          { label: 'Tekrarlanabilirlik', value: 'Tam versiyonlama' },
        ],
      },
    ],
  },
})
</script>

<template>
  <PageHero :eyebrow="c.eyebrow" :title="c.title" :description="c.description" />

  <section class="py-20">
    <Container>
      <div class="space-y-12">
        <article
          v-for="s in c.stories"
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

  <CtaBanner :title="c.ctaTitle" :description="c.ctaDescription" />
</template>
