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
      'Regüle ve yüksek riskli sektörlerde çalıştığımız için her özelliği "bu nasıl denetlenir" sorusuyla tasarlıyoruz.',
  },
  {
    icon: 'cpu',
    title: 'Mühendislik disiplini',
    description:
      'Risk modelleme ve karar otomasyonunda yıllarca saha deneyimi olan bir ekip geliştiriyor.',
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
    title="Galaksiya, model geliştirme altyapısı kurar"
    description="Convex, Galaksiya'nın regüle ve veri yoğun sektörlere yönelik AutoML ve model risk yönetimi ürünüdür."
  />

  <section class="py-20">
    <Container narrow>
      <SectionHeading title="Kim olduğumuz" />
      <p class="mt-4 text-base leading-relaxed text-darker-gray">
        Galaksiya adını, evrendeki her yıldızın, gezegenin ve hücrenin birbirine bağlanarak tek bir
        bütün oluşturmasından alır. Şirket de çalışanlarını, ürünlerini ve müşterilerini aynı
        şekilde görür:
      </p>
      <blockquote
        class="mt-5 border-l-2 border-pink pl-4 text-base italic leading-relaxed text-darker-gray"
      >
        "we position all our employees, products, solutions, and customers as members of a network"
        <footer class="mt-1 text-xs not-italic text-darker-gray/60">— Galaksiya, "About Us"</footer>
      </blockquote>
      <p class="mt-5 text-base leading-relaxed text-darker-gray">
        Convex bu yaklaşımın somut bir çıktısı: deneyleri tekrarlanabilir kılmak, modeli denetime
        hazırlamak, ekip içi bilgi kaybını önlemek — bankacılıktan sigortacılığa, perakendeden
        telekoma, veriye dayalı karar alan her ekibin her gün karşılaştığı sorunlara doğrudan cevap.
      </p>
      <p class="mt-4 text-base leading-relaxed text-darker-gray">
        Ürünü, güçlü değerlere ve bütünlük anlayışına dayanan bir mühendislik ekibiyle
        geliştiriyoruz — her karar, "bu üretimde nasıl denetlenir" sorusundan geçiyor.
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
