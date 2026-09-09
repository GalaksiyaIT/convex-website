<script setup>
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import Card from '@/components/ui/Card.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'

const values = [
  {
    icon: 'shield',
    title: 'Denetlenebilirlik önce gelir',
    description:
      'Bankacılık ve finans alanında çalıştığımız için her özelliği "bu nasıl denetlenir" sorusuyla tasarlıyoruz.',
  },
  {
    icon: 'cpu',
    title: 'Mühendislik disiplini',
    description: 'Kredi skorlama ve risk modellemede yıllarca saha deneyimi olan bir ekip geliştiriyor.',
  },
  {
    icon: 'eye',
    title: 'Şeffaf iletişim',
    description:
      'Ürün yol haritamızı ve sınırlarımızı açıkça paylaşırız; abartılı vaatlerden kaçınırız.',
  },
]
</script>

<template>
  <PageHero
    eyebrow="Hakkımızda"
    title="Galaksiya, bankacılık için model geliştirme altyapısı kurar"
    description="Convex, Galaksiya'nın bankacılık ve finans sektörüne yönelik AutoML ve model risk yönetimi ürünüdür."
  />

  <section class="py-20">
    <Container narrow>
      <SectionHeading title="Kim olduğumuz" />
      <p class="mt-4 text-base leading-relaxed text-darker-gray">
        Galaksiya, bankacılık sektörüne veri bilimi ve yazılım mühendisliği çözümleri üreten bir
        ekip. Convex bu deneyimden doğdu: deneyleri tekrarlanabilir kılmak, modeli denetime
        hazırlamak, ekip içi bilgi kaybını önlemek — kredi skorlama ve risk modelleme ekiplerinin
        her gün karşılaştığı sorunlara doğrudan cevap.
      </p>
      <p class="mt-4 text-base leading-relaxed text-darker-gray">
        Ürünü, regülasyon ortamını yakından bilen bir mühendislik ekibiyle geliştiriyoruz — her
        karar, "bu üretimde nasıl denetlenir" sorusundan geçiyor.
      </p>
    </Container>
  </section>

  <section class="bg-light-gray-bg py-20">
    <Container>
      <SectionHeading align="center" title="Neye önem veriyoruz" />
      <div class="mt-10 grid gap-6 sm:grid-cols-3">
        <Card v-for="v in values" :key="v.title">
          <div
            class="flex h-11 w-11 items-center justify-center rounded-xl bg-very-light-pink text-pink"
          >
            <BaseIcon :name="v.icon" sizeClass="w-5 h-5" />
          </div>
          <h3 class="mt-4 text-base font-semibold text-navy-dark">{{ v.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-darker-gray">{{ v.description }}</p>
        </Card>
      </div>
    </Container>
  </section>

  <CtaBanner
    title="Ekibimizle tanışın"
    description="Ürünü, kullanım senaryonuzu ve ekibimizi tanımak için bir görüşme planlayalım."
  />
</template>
