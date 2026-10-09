<script setup>
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import Badge from '@/components/ui/Badge.vue'

const releases = [
  {
    version: 'v3.4',
    date: '2026-08-20',
    tag: 'Yeni',
    items: [
      'Yeniden eğitilen modeller için challenger karşılaştırma ekranı eklendi (deney modelleri ve özel modeller).',
      "Experiment Pipeline'da varyans eşiği ile feature selection desteği eklendi.",
      "Model Monitoring'e Monitoring Profiles ile eşik bazlı uyarı e-postaları eklendi.",
    ],
  },
  {
    version: 'v3.3',
    date: '2026-07-15',
    tag: 'İyileştirme',
    items: [
      'Veritabanı kaynaklı veri setleri için Sync Dataset eklendi.',
      'Validation Report PDF olarak e-postayla alınabilir hale geldi.',
    ],
  },
  {
    version: 'v3.2',
    date: '2026-06-02',
    tag: 'Yeni',
    items: [
      "Tune Model'e Auto Optimize ve Grid Search ile hiperparametre arama desteği eklendi.",
      "Model Deployment'a Sample API Request eklendi.",
    ],
  },
]
</script>

<template>
  <PageHero
    eyebrow="Yardım Merkezi · Sürüm Notları"
    title="Yeni özellikler ve iyileştirmeler"
    description="Ürün ekibiyle paylaşılan changelog'un okunur hâli — yeni bir modülü öğrenmeden önce neyin değiştiğini burada takip edin."
  />

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
            <Badge :tone="r.tag === 'Yeni' ? 'pink' : 'neutral'">{{ r.tag }}</Badge>
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
