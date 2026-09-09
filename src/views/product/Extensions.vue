<script setup>
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import AppButton from '@/components/ui/AppButton.vue'
import Card from '@/components/ui/Card.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'

const groups = [
  {
    icon: 'database',
    title: 'Veri Kaynakları',
    items: [
      'Çekirdek bankacılık sistemleri',
      'Veri ambarı / data warehouse bağlantıları',
      'CSV ve düz dosya yüklemeleri',
      'REST API ile veri alımı',
    ],
  },
  {
    icon: 'cpu',
    title: 'Algoritma Paketleri',
    items: [
      'LightGBM',
      'Logistic Regression',
      'Özel skorlama kartı (scorecard) yöntemleri',
      'Kurum-özel algoritma eklentileri',
    ],
  },
  {
    icon: 'plug',
    title: 'Sistem Entegrasyonları',
    items: [
      'Karar motoru entegrasyonu',
      'Kimlik ve erişim yönetimi (SSO)',
      'İzleme ve loglama altyapıları',
      'Bildirim ve iş akışı araçları',
    ],
  },
]
</script>

<template>
  <PageHero
    eyebrow="Ürün · Eklentiler"
    title="Mevcut altyapınızla konuşan bir platform"
    description="Hangi veri kaynaklarına bağlandığını, hangi algoritmalarla genişlediğini burada görün."
  >
    <template #actions>
      <AppButton to="/iletisim" showTrailingIcon>Demo Talep Et</AppButton>
    </template>
  </PageHero>

  <section class="py-20">
    <Container>
      <SectionHeading
        title="Teknik değerlendirme için"
        description="Ekibinizin erken aşamada sorduğu entegrasyon sorularına doğrudan cevap."
      />
      <div class="mt-10 grid gap-6 lg:grid-cols-3">
        <Card v-for="g in groups" :key="g.title">
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

  <CtaBanner
    title="Entegrasyon ihtiyacınızı konuşalım"
    description="Mevcut sistemlerinize nasıl bağlanacağımızı teknik ekibinizle birlikte değerlendirelim."
  />
</template>
