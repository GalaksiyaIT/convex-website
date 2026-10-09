<script setup>
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import AppButton from '@/components/ui/AppButton.vue'
import Card from '@/components/ui/Card.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import StatBand from '@/components/sections/StatBand.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'
import ProductVideo from '@/components/sections/ProductVideo.vue'
import { caps } from '@/utils/caps'
import interpretScreen from '@/assets/screens/interpret.jpg'
import validationScreen from '@/assets/screens/validation-report.jpg'

// İlk iki yetenek, Domino Data Lab'ın Model Risk Management sayfasındaki
// "eyebrow + başlık + paragraf" bloğu düzeninde; geri kalanı kart ızgarasında.
const featured = [
  {
    eyebrow: 'Yorumlama',
    title: 'Her skorun arkasındaki gerekçeyi gösterin',
    description:
      'Interpret ekranında SHAP Summary Plot, Correlation Graph, Reason Plot ve Summary Table ile bir tahminin hangi değişkenlerden etkilendiğini sayısal olarak görün — "model böyle karar verdi" demek yerine, o kararın nereden geldiğini kanıtlarsınız.',
    icon: 'eye',
    image: interpretScreen,
    imageAlt:
      'Convex Interpret ekranı: Summary Plot, Correlation Graph, Reason Plot ve Summary Table sekmeleri',
  },
  {
    eyebrow: 'Raporlar & Denetim Kaydı',
    title: 'Dokümantasyonu her sürümde yeniden yazmayın',
    description:
      "Model Report'u tek tıkla Word belgesi olarak alın. Validation Report'u ekranda açın; T-test, binom testi, stabilite, bootstrap ve skor dağılımı sekmeleriyle modeli doğrulayın, isterseniz raporu PDF olarak e-postayla gönderin. Model Audit Log'da onay durumu ve belgeler tek kayıtta durur.",
    icon: 'bookOpen',
    image: validationScreen,
    imageAlt:
      'Convex Validation Test Report ekranı: T-Test, Binomial Test, Stability, Bootstrapping ve Score Distribution sekmeleri',
    reverse: true,
  },
]

const capabilities = [
  {
    icon: 'checkCircle',
    title: 'Model Audit Log',
    description:
      'Modelin onay durumunu ve doğrulama belgelerini tek kayıtta saklayın; denetim anında her şey hazır olsun.',
  },
  {
    icon: 'barChart',
    title: 'Score Card ve Equation',
    description:
      "Logistic Regression modellerinden skor kartını Target Score, Target Odds ve PDO ile otomatik üretin, dışa aktarın; formülü Equation'da açıkça görün.",
  },
  {
    icon: 'workflow',
    title: 'Model Flow',
    description:
      'Birden fazla modeli birbirine bağlayın, alan eşlemeleriyle kendi karar akışınızı kurun.',
  },
  {
    icon: 'gitBranch',
    title: 'Zamanlayıcı ve Yeniden Eğitim',
    description:
      'Modeller düzenli aralıklarla kendiliğinden yeniden eğitilsin: Short akışta önceki kuralların sonuçları aynen uygulanır, Long akışta kurallar yeni veride yeniden çalışır. Trigger Retrain ile istediğiniz an.',
  },
  {
    icon: 'layers',
    title: 'Champion / Challenger',
    description:
      'Yeniden eğitilen model challenger olarak oluşur; mevcut modelle metrik metrik karşılaştırın, daha iyiyse yeni sürümü canlıya alın.',
  },
  {
    icon: 'upload',
    title: 'Make Prediction',
    description:
      'Yeni bir veri setiyle, canlıya almadan toplu tahmin alın; test sonuçlarını CSV, model nesnesini zip olarak indirin.',
  },
  {
    icon: 'rocket',
    title: 'Build ve Applications',
    description:
      "Build ile modeli canlıya hazır bir pakete dönüştürün; Applications altında toplayıp Model Deployment'a hazırlayın.",
  },
  {
    icon: 'shield',
    title: 'Erişim Kontrolü',
    description:
      'Department Assignment ile modelleri ve veri setlerini departmanlara atayın; kimin neyi göreceğini siz belirleyin.',
  },
]

// Ürün ekranlarından doğrulanabilir sayılar (müşteri iddiası değil).
const stats = [
  { value: '4', label: 'yorumlama görünümü: Summary, Correlation, Reason Plot, Summary Table' },
  {
    value: '2',
    label: 'otomatik rapor: Model Report (Word) ve Validation Report (ekranda, PDF e-posta)',
  },
  { value: 'Tek kayıt', label: 'Audit Log: onay durumu ve belgeler' },
]
</script>

<template>
  <PageHero
    eyebrow="Ürün · Model Governance"
    title="Modelin neden o kararı verdiğini kanıtlayın"
    description="Yorumlama, raporlama, denetim kaydı, skor kartı ve yeniden eğitim — hepsi tek modülde."
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
        toplanmak zorunda kalır. Kim neyi ne zaman onayladı sorusunun cevabı genelde sistemde değil,
        birinin hafızasındadır.
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
            <p class="text-xs font-semibold uppercase tracking-wide text-pink">
              {{ caps(f.eyebrow) }}
            </p>
            <h2 class="mt-2 text-2xl font-semibold text-navy-dark">{{ f.title }}</h2>
            <p class="mt-3 text-base leading-relaxed text-darker-gray">{{ f.description }}</p>
          </div>
          <div
            v-if="f.image"
            class="overflow-hidden rounded-2xl border border-light-gray-border shadow-xl shadow-navy-dark/10"
            :class="f.reverse ? 'lg:order-1' : ''"
          >
            <img
              :src="f.image"
              :alt="f.imageAlt"
              loading="lazy"
              class="aspect-video w-full object-cover"
            />
          </div>
          <div
            v-else
            class="flex aspect-video items-center justify-center rounded-2xl bg-very-light-pink"
            :class="f.reverse ? 'lg:order-1' : ''"
          >
            <BaseIcon :name="f.icon" sizeClass="w-14 h-14 text-pink/60" />
          </div>
        </div>
      </div>
    </Container>
  </section>

  <ProductVideo
    slug="tanitim-04-model-yonetisimi"
    title="Model yönetişimini videoda izleyin"
    description="Raporlar, doğrulama, yorumlama, skor kartı, denetim kaydı, model akışı, zamanlayıcı ve build — şeffaf ve denetlenebilir modeller."
  />

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
    description="Yorumlama, raporlar ve denetim kaydı ekranlarını canlı bir demoda gösterelim."
  />
</template>
