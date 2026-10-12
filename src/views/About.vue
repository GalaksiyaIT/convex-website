<script setup>
import { computed } from 'vue'
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import Card from '@/components/ui/Card.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'
import { useCopy } from '@/i18n'

const c = useCopy({
  en: {
    eyebrow: 'About Us',
    title: 'Galaksiya builds model development infrastructure',
    description:
      'Convex is Galaksiya’s AutoML and model risk management product for regulated, data-intensive industries.',
    whoTitle: 'Who we are',
    whoP1:
      'Galaksiya takes its name from the way every star, planet and cell in the universe connects to form a single whole. The company sees its people, products and customers the same way:',
    whoP2:
      'Convex is a tangible outcome of that approach: making experiments reproducible, getting models audit-ready and preventing knowledge loss within teams — a direct answer to the problems every data-driven team faces daily, from banking and insurance to retail and telecom.',
    whoP3:
      'We build the product with an engineering team grounded in strong values and a sense of integrity — every decision passes through the question “how will this be audited in production?”',
    valuesTitle: 'What we care about',
    values: [
      {
        title: 'Auditability comes first',
        description:
          'Because we work in regulated, high-risk industries, we design every feature around the question “how will this be audited?”',
      },
      {
        title: 'Engineering discipline',
        description:
          'Built by a team with years of hands-on experience in risk modeling and decision automation.',
      },
      {
        title: 'Transparent communication',
        description:
          'We share our product roadmap and our limits openly, and steer clear of overblown promises.',
      },
    ],
    ctaTitle: 'Meet our team',
    ctaDescription:
      'Let’s schedule a call to walk through the product, your use case and our team.',
  },
  tr: {
    eyebrow: 'Hakkımızda',
    title: 'Galaksiya, model geliştirme altyapısı kurar',
    description:
      "Convex, Galaksiya'nın regüle ve veri yoğun sektörlere yönelik AutoML ve model risk yönetimi ürünüdür.",
    whoTitle: 'Kim olduğumuz',
    whoP1:
      'Galaksiya adını, evrendeki her yıldızın, gezegenin ve hücrenin birbirine bağlanarak tek bir bütün oluşturmasından alır. Şirket de çalışanlarını, ürünlerini ve müşterilerini aynı şekilde görür:',
    whoP2:
      'Convex bu yaklaşımın somut bir çıktısı: deneyleri tekrarlanabilir kılmak, modeli denetime hazırlamak, ekip içi bilgi kaybını önlemek — bankacılıktan sigortacılığa, perakendeden telekoma, veriye dayalı karar alan her ekibin her gün karşılaştığı sorunlara doğrudan cevap.',
    whoP3:
      'Ürünü, güçlü değerlere ve bütünlük anlayışına dayanan bir mühendislik ekibiyle geliştiriyoruz — her karar, "bu üretimde nasıl denetlenir" sorusundan geçiyor.',
    valuesTitle: 'Neye önem veriyoruz',
    values: [
      {
        title: 'Denetlenebilirlik önce gelir',
        description:
          'Regüle ve yüksek riskli sektörlerde çalıştığımız için her özelliği "bu nasıl denetlenir" sorusuyla tasarlıyoruz.',
      },
      {
        title: 'Mühendislik disiplini',
        description:
          'Risk modelleme ve karar otomasyonunda yıllarca saha deneyimi olan bir ekip geliştiriyor.',
      },
      {
        title: 'Şeffaf iletişim',
        description:
          'Ürün yol haritamızı ve sınırlarımızı açıkça paylaşırız; abartılı vaatlerden kaçınırız.',
      },
    ],
    ctaTitle: 'Ekibimizle tanışın',
    ctaDescription:
      'Ürünü, kullanım senaryonuzu ve ekibimizi tanımak için bir görüşme planlayalım.',
  },
})

const valueIcons = ['shield', 'cpu', 'eye']
const values = computed(() => c.value.values.map((v, i) => ({ ...v, icon: valueIcons[i] })))
</script>

<template>
  <PageHero :eyebrow="c.eyebrow" :title="c.title" :description="c.description" />

  <section class="py-20">
    <Container narrow>
      <SectionHeading :title="c.whoTitle" />
      <p class="mt-4 text-base leading-relaxed text-darker-gray">
        {{ c.whoP1 }}
      </p>
      <blockquote
        class="mt-5 border-l-2 border-pink pl-4 text-base italic leading-relaxed text-darker-gray"
      >
        "we position all our employees, products, solutions, and customers as members of a network"
        <footer class="mt-1 text-xs not-italic text-darker-gray/60">— Galaksiya, "About Us"</footer>
      </blockquote>
      <p class="mt-5 text-base leading-relaxed text-darker-gray">
        {{ c.whoP2 }}
      </p>
      <p class="mt-4 text-base leading-relaxed text-darker-gray">
        {{ c.whoP3 }}
      </p>
    </Container>
  </section>

  <section class="bg-light-gray-bg py-20">
    <Container>
      <SectionHeading align="center" :title="c.valuesTitle" />
      <div class="mt-10 grid gap-6 sm:grid-cols-3">
        <Card v-for="v in values" :key="v.icon">
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

  <CtaBanner :title="c.ctaTitle" :description="c.ctaDescription" />
</template>
