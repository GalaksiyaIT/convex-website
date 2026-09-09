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
      "Model Governance'a champion/challenger karşılaştırma ekranı eklendi.",
      "Experiment Pipeline'da varyans eşiği ile feature selection desteği eklendi.",
      'Prediction izleme ekranında drift uyarıları eklendi.',
    ],
  },
  {
    version: 'v3.3',
    date: '2026-07-15',
    tag: 'İyileştirme',
    items: [
      'Dataset yükleme sırasında şema doğrulama hataları daha açıklayıcı hale getirildi.',
      'Model kartı PDF çıktısına denetim izi özeti eklendi.',
    ],
  },
  {
    version: 'v3.2',
    date: '2026-06-02',
    tag: 'Yeni',
    items: [
      'LightGBM için otomatik hiperparametre arama desteği eklendi.',
      'Application ekranına API anahtarı yönetimi eklendi.',
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
