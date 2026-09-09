<script setup>
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import AppButton from '@/components/ui/AppButton.vue'
import Card from '@/components/ui/Card.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import StatBand from '@/components/sections/StatBand.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'

// İlk iki yetenek, Domino Data Lab'ın Model Risk Management sayfasındaki
// "eyebrow + başlık + paragraf" bloğu düzeninde; geri kalanı kart ızgarasında.
const featured = [
  {
    eyebrow: 'YORUMLAMA',
    title: 'Her skorun arkasındaki gerekçeyi gösterin',
    description:
      'SHAP tabanlı katkı analizleri, bir tahminin hangi değişkenlerden etkilendiğini sayısal gösterir — "model böyle karar verdi" demek yerine, o kararın nereden geldiğini kanıtlarsınız.',
    icon: 'eye',
  },
  {
    eyebrow: 'MODEL KARTI & DENETİM İZİ',
    title: 'Dokümantasyonu her sürümde yeniden yazmayın',
    description:
      'Regülatöre veya iç denetime sunulacak model dokümantasyonu, her yeni model sürümünde otomatik güncellenir: hangi veriyle eğitildi, hangi parametreler kullanıldı, kim onayladı — hepsi tek kayıtta.',
    icon: 'bookOpen',
    reverse: true,
  },
]

const capabilities = [
  {
    icon: 'gitBranch',
    title: 'Model Flow & Versiyonlama',
    description:
      'Bir modelin tüm yaşam döngüsünü — hangi veriyle, hangi parametrelerle eğitildiğini — tek ekranda izleyin.',
  },
  {
    icon: 'checkCircle',
    title: 'Onay Akışı',
    description:
      'Model, üretime geçmeden önce tanımladığınız onay adımlarından (risk, denetim, iş birimi) geçer.',
  },
  {
    icon: 'barChart',
    title: 'Prediction İzleme',
    description:
      'Canlıdaki modelin skor dağılımını ve olası sapmaları (drift) zaman içinde takip edin.',
  },
  {
    icon: 'shield',
    title: 'Erişim Kontrolü',
    description:
      'Kim hangi modeli görebilir, düzenleyebilir veya onaylayabilir — rol bazlı yetkilendirme ile tanımlayın.',
  },
]

const stats = [
  { value: '−70%', label: 'audit hazırlık süresinde azalma' },
  { value: '40+', label: 'tek ekrandan izlenen model' },
  { value: '1x', label: 'ekrandan onay ve denetim izi' },
]
</script>

<template>
  <PageHero
    eyebrow="Ürün · Model Governance"
    title="Modelin neden o kararı verdiğini kanıtlayın"
    description="Yorumlama, onay akışı, denetim izi — hepsi tek modülde."
  >
    <template #actions>
      <AppButton to="/iletisim" showTrailingIcon>Demo Talep Et</AppButton>
    </template>
  </PageHero>

  <!-- Domino Data Lab'ın Model Risk Management sayfasındaki gibi, yeteneklere
       geçmeden önce mevcut sürecin neden yetersiz kaldığını kısaca çerçeveliyoruz. -->
  <section class="border-b border-light-gray-border bg-light-gray-bg py-16">
    <Container narrow>
      <h2 class="text-xl font-semibold text-navy-dark">Mevcut süreç neden yetersiz kalıyor</h2>
      <p class="mt-3 text-base leading-relaxed text-darker-gray">
        Excel'e veya e-posta zincirlerine dağılmış dokümantasyon, denetim öncesi haftalarca
        toplanmak zorunda kalır. Kim neyi ne zaman onayladı sorusunun cevabı genelde sistemde
        değil, birinin hafızasındadır.
      </p>
    </Container>
  </section>

  <section class="py-16">
    <Container>
      <StatBand :stats="stats" />
    </Container>
  </section>

  <section class="pb-8">
    <Container>
      <div class="space-y-16">
        <div
          v-for="f in featured"
          :key="f.title"
          class="grid gap-10 lg:grid-cols-2 lg:items-center"
        >
          <div :class="f.reverse ? 'lg:order-2' : ''">
            <p class="text-xs font-semibold uppercase tracking-wide text-pink">{{ f.eyebrow }}</p>
            <h2 class="mt-2 text-2xl font-semibold text-navy-dark">{{ f.title }}</h2>
            <p class="mt-3 text-base leading-relaxed text-darker-gray">{{ f.description }}</p>
          </div>
          <div
            class="flex aspect-video items-center justify-center rounded-2xl bg-very-light-pink"
            :class="f.reverse ? 'lg:order-1' : ''"
          >
            <BaseIcon :name="f.icon" sizeClass="w-14 h-14 text-pink/60" />
          </div>
        </div>
      </div>
    </Container>
  </section>

  <section class="py-20">
    <Container>
      <SectionHeading eyebrow="Diğer yetenekler" title="Denetlenebilirlik için gerekenler" />
      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card v-for="c in capabilities" :key="c.title">
          <div
            class="flex h-11 w-11 items-center justify-center rounded-xl bg-very-light-pink text-pink"
          >
            <BaseIcon :name="c.icon" sizeClass="w-5 h-5" />
          </div>
          <h3 class="mt-4 text-base font-semibold text-navy-dark">{{ c.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-darker-gray">{{ c.description }}</p>
        </Card>
      </div>
    </Container>
  </section>

  <section class="bg-navy-dark py-20 text-white">
    <Container narrow>
      <SectionHeading
        align="center"
        eyebrow="Regülasyon perspektifi"
        title="Model audit ve açıklanabilirlik, tasarımın merkezinde"
      >
        <p class="mt-4 text-base leading-relaxed text-very-light-blue/80">
          Basel ve BDDK'nın model risk beklentileri, modelin doğru olduğu kadar açıklanabilir ve
          izlenebilir olmasını da ister. Model Governance bunu ek bir süreç değil, günlük iş
          akışının parçası yapar.
        </p>
      </SectionHeading>
    </Container>
  </section>

  <CtaBanner
    title="Governance sürecinizi Convex'te görün"
    description="Model kartı, onay akışı ve yorumlama ekranlarını canlı bir demoda gösterelim."
  />
</template>
