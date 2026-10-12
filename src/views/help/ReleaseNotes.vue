<script setup>
import { computed } from 'vue'
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import Badge from '@/components/ui/Badge.vue'
import { useCopy } from '@/i18n'

const c = useCopy({
  en: {
    eyebrow: 'Help Center · Release Notes',
    title: 'New features and improvements',
    description:
      'A readable version of the changelog shared with the product team — check here to see what’s changed before you dive into a new module.',
    tags: { new: 'New', improvement: 'Improvement' },
    items: [
      [
        'Added a challenger comparison screen for retrained models (experiment models and custom models).',
        'Added variance-threshold feature selection to the Experiment Pipeline.',
        'Added threshold-based alert emails to Model Monitoring via Monitoring Profiles.',
      ],
      [
        'Added Sync Dataset for database-sourced datasets.',
        'The Validation Report can now be emailed as a PDF.',
      ],
      [
        'Added hyperparameter search to Tune Model with Auto Optimize and Grid Search.',
        'Added Sample API Request to Model Deployment.',
      ],
    ],
  },
  tr: {
    eyebrow: 'Yardım Merkezi · Sürüm Notları',
    title: 'Yeni özellikler ve iyileştirmeler',
    description:
      "Ürün ekibiyle paylaşılan changelog'un okunur hâli — yeni bir modülü öğrenmeden önce neyin değiştiğini burada takip edin.",
    tags: { new: 'Yeni', improvement: 'İyileştirme' },
    items: [
      [
        'Yeniden eğitilen modeller için challenger karşılaştırma ekranı eklendi (deney modelleri ve özel modeller).',
        "Experiment Pipeline'da varyans eşiği ile feature selection desteği eklendi.",
        "Model Monitoring'e Monitoring Profiles ile eşik bazlı uyarı e-postaları eklendi.",
      ],
      [
        'Veritabanı kaynaklı veri setleri için Sync Dataset eklendi.',
        'Validation Report PDF olarak e-postayla alınabilir hale geldi.',
      ],
      [
        "Tune Model'e Auto Optimize ve Grid Search ile hiperparametre arama desteği eklendi.",
        "Model Deployment'a Sample API Request eklendi.",
      ],
    ],
  },
})

const releaseMeta = [
  { version: 'v3.4', date: '2026-08-20', tag: 'new' },
  { version: 'v3.3', date: '2026-07-15', tag: 'improvement' },
  { version: 'v3.2', date: '2026-06-02', tag: 'new' },
]

const releases = computed(() =>
  releaseMeta.map((r, i) => ({ ...r, label: c.value.tags[r.tag], items: c.value.items[i] })),
)
</script>

<template>
  <PageHero :eyebrow="c.eyebrow" :title="c.title" :description="c.description" />

  <section class="py-20">
    <Container narrow>
      <div class="space-y-10">
        <article
          v-for="r in releases"
          :key="r.version"
          class="border-l-2 border-light-gray-border pl-6"
        >
          <div class="flex items-center gap-3">
            <h2 class="text-lg font-semibold text-navy-dark">{{ r.version }}</h2>
            <Badge :tone="r.tag === 'new' ? 'pink' : 'neutral'">{{ r.label }}</Badge>
            <span class="text-xs text-darker-gray/70">{{ r.date }}</span>
          </div>
          <ul class="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-darker-gray">
            <li v-for="item in r.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </Container>
  </section>
</template>
