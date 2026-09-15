<script setup>
import { RouterLink } from 'vue-router'
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import AppButton from '@/components/ui/AppButton.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import Badge from '@/components/ui/Badge.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import StatBand from '@/components/sections/StatBand.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'

// "Convex Go Brochure"nun "Delayed deployment = Delayed impact" slaytından (Sayfa 2) —
// sektör araştırması rakamları, sorunu somutlaştırmak için sayfanın en üstüne konuldu.
const problemStats = [
  {
    value: '%65',
    label: 'işletme, model devreye alma sürecini "çok yavaş" buluyor',
  },
  {
    value: '%54',
    label: "karar verici, önümüzdeki 3-5 yılda ModelOps'un sektörlerini şekillendireceğini düşünüyor",
  },
]

// "Convex Automated ML Platform Deck" sunumunun "Main Benefits of Convex" karşılaştırma
// tablosundan (Slayt 5) — geleneksel model geliştirme süreciyle kıyaslama.
const comparisonRows = [
  {
    label: 'Uçtan uca süre',
    traditional: '~6 ay',
    convex: 'Denetim ve devreye alma dahil maks. 1-2 gün',
  },
  {
    label: 'Efor',
    traditional: 'En az 500 adam-gün',
    convex: '5-10 adam-gün',
  },
  {
    label: 'Pazara çıkış süresi',
    traditional: '1-1,5 yıl gecikme',
    convex: 'Gerçek zamanlı güncelleme',
  },
]

// Aynı sunumun diğer slaytlarından (GPU ile hızlandırma, model performans etkisi,
// entegre devreye alma) derlenen rakamlar.
const benefitStats = [
  { value: '×5', label: 'daha hızlı deney sonuçları' },
  { value: '%30+', label: 'ML modellerinin geleneksel modellere kattığı minimum performans artışı' },
  { value: '%70-80', label: 'entegre karar motorlarıyla devreye alma süresinde azalma' },
  { value: '×10', label: 'modelleri güncel tutmanın platform maliyetine oranla getirisi (RoI)' },
]

const explainabilityReports = [
  'SHAP Values',
  'Feature Importance',
  'Correlation Analizi',
  'PSI Analizi',
  'VIF Analizi',
  'Percentile Dağılımları',
]

const objections = [
  {
    q: 'Manuel/Excel scorecard sürecimize kıyasla ne değişir?',
    a: "Excel'deki veya dağınık scriptlerdeki adımlar, Convex'te tek izlenebilir akışa taşınır — aynı işi yapıyorsunuz, ama artık kim neyi ne zaman değiştirdiğini görebiliyorsunuz.",
  },
  {
    q: 'Ekibimiz kod yazmadan kullanabilir mi?',
    a: 'Evet. Risk ve kredi analistleri, veri bilimci desteği olmadan görsel arayüzden deney kurabilir. İleri düzey kullanıcı isterse parametrelere ince ayar yapar.',
  },
  {
    q: 'Mevcut sistemlerimizle nasıl konuşur?',
    a: 'Çekirdek bankacılık sistemleri, veri ambarları ve karar motorlarıyla API üzerinden konuşur. Detaylar Eklentiler sayfasında.',
    to: '/urun/eklentiler',
    linkLabel: 'Eklentiler sayfasına git',
  },
  {
    q: 'Verimiz nerede duruyor?',
    a: 'On-prem veya cloud — verinizin nerede tutulacağına siz karar verirsiniz. Şifreleme ve KVKK detayları Güvenlik & Uyumluluk sayfasında.',
    to: '/guvenlik',
    linkLabel: 'Güvenlik & Uyumluluk sayfasına git',
  },
]
</script>

<template>
  <PageHero
    eyebrow="Neden Convex"
    title="Sormaktan çekindiğiniz sorulara, dürüst cevaplar"
    description="Rakamlar, karşılaştırmalar ve dürüst cevaplarla karar sürecinizi kısaltıyoruz."
  >
    <template #actions>
      <AppButton to="/iletisim" showTrailingIcon>Demo Talep Et</AppButton>
    </template>
  </PageHero>

  <!-- Problem çerçevesi: "Convex Go Brochure" sunumunun "Delayed deployment = Delayed impact"
       slaytından (Sayfa 2) — sektöre ait araştırma rakamları. Sunumdan gelen içeriklerin daha
       görünür/dikkat çekici olması için sayfanın en üstüne alındı. -->
  <section class="bg-navy-dark py-16 text-white">
    <Container narrow>
      <blockquote class="border-l-2 border-pink pl-4 text-lg italic leading-relaxed text-very-light-blue/90 sm:text-xl">
        "Model devreye alma hızı artık sadece teknik bir mesele değil — stratejik bir mesele."
      </blockquote>
      <div class="mt-8 grid gap-6 sm:grid-cols-2">
        <div v-for="s in problemStats" :key="s.label">
          <p class="text-3xl font-semibold text-pink sm:text-4xl">{{ s.value }}</p>
          <p class="mt-1.5 text-sm leading-relaxed text-very-light-blue/70">{{ s.label }}</p>
        </div>
      </div>
      <p class="mt-6 text-xs text-very-light-blue/40">
        Kaynak: Experian 2023 Survey on Model Building and ModelOps; Experian &amp; Forrester
        Consulting araştırması, 2024.
      </p>
    </Container>
  </section>

  <!-- Sayılarla Convex: içerik "Convex Automated ML Platform Deck" sunumunun "Main Benefits
       of Convex" karşılaştırma tablosu ve ilgili slaytlarından (GPU hızlandırma, model
       performans etkisi, entegre devreye alma) derlendi. -->
  <section class="border-y border-light-gray-border bg-light-gray-bg py-20">
    <Container narrow>
      <SectionHeading
        eyebrow="Sayılarla Convex"
        title="Geleneksel model geliştirmeye kıyasla"
        description="Aynı işi yapan iki süreç — biri aylar, diğeri günler sürüyor."
      />
      <div class="mt-10 grid gap-4">
        <div
          v-for="row in comparisonRows"
          :key="row.label"
          class="grid gap-3 rounded-2xl border border-light-gray-border bg-white p-5 sm:grid-cols-[1fr_1.3fr_1.3fr] sm:items-center"
        >
          <p class="text-sm font-semibold text-navy-dark">{{ row.label }}</p>
          <div class="rounded-lg bg-light-gray-bg px-3.5 py-2.5 text-sm text-darker-gray">
            <span class="block text-[11px] font-semibold uppercase tracking-wide text-darker-gray/50"
              >Geleneksel Yöntem</span
            >
            {{ row.traditional }}
          </div>
          <div class="rounded-lg bg-very-light-pink px-3.5 py-2.5 text-sm font-medium text-purple">
            <span class="block text-[11px] font-semibold uppercase tracking-wide text-pink/70"
              >Convex</span
            >
            {{ row.convex }}
          </div>
        </div>
      </div>
      <div class="mt-10">
        <StatBand :stats="benefitStats" />
      </div>
      <p class="mt-4 text-xs text-darker-gray/50">
        Kaynak: "Convex Automated ML Platform Deck" ürün sunumu.
      </p>
    </Container>
  </section>

  <!-- İçerik "Convex Go Brochure" ve "Convex Platform Deck" sunumlarındaki
       "full transparency for auditors and regulators" ve SHAP/Feature Importance/PSI/VIF
       raporlarından esinlenildi. Eyebrow, kaynağın kendi özellik adı olan "Full transparency"
       ile birebir eşleşsin diye "Şeffaflık" olarak seçildi. -->
  <section class="bg-navy-dark py-20 text-white">
    <Container narrow>
      <p class="text-xs font-semibold uppercase tracking-wide text-pink">Şeffaflık</p>
      <h2 class="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
        Regülatöre ve denetçiye tam görünürlük
      </h2>
      <blockquote class="mt-5 border-l-2 border-pink pl-4 text-base italic text-very-light-blue/90">
        "Ensure full visibility and explainability for auditors and regulators with ease."
        <footer class="mt-1 text-xs not-italic text-very-light-blue/60">
          — Convex Go ürün broşürü
        </footer>
      </blockquote>
      <p class="mt-4 text-base leading-relaxed text-very-light-blue/80">
        Convex, her tahminin arkasındaki gerekçeyi "güvenin bize" demek zorunda kalmadan, somut
        raporlarla ortaya koyar. Model geliştirme sürecinde otomatik üretilen analizler, denetim
        ve regülasyon görüşmelerinde doğrudan kullanılabilir:
      </p>
      <div class="mt-6 flex flex-wrap gap-2">
        <Badge v-for="r in explainabilityReports" :key="r" tone="pink">{{ r }}</Badge>
      </div>
      <p class="mt-6 text-sm leading-relaxed text-very-light-blue/70">
        SHAP tabanlı katkı analizleri her skorun hangi değişkenlerden etkilendiğini gösterirken;
        PSI ve VIF analizleri model kararlılığını ve değişkenler arası çoklu doğrusallığı ölçer.
        Hepsi, kod yazmadan, otomatik oluşturulan model dokümantasyonunun bir parçasıdır.
      </p>
    </Container>
  </section>

  <section class="py-20">
    <Container narrow>
      <SectionHeading
        eyebrow="Sık Sorulan İtirazlar"
        title="Hâlâ aklınızda soru işareti mi var?"
        description="Karar sürecinde en sık duyduğumuz itirazları önden karşılıyoruz."
      />
      <div class="mt-10 space-y-4">
        <details
          v-for="o in objections"
          :key="o.q"
          class="group rounded-2xl border border-light-gray-border p-6 open:bg-very-light-pink/30"
          open
        >
          <summary
            class="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy-dark"
          >
            {{ o.q }}
            <BaseIcon
              name="chevronDown"
              sizeClass="w-4 h-4 flex-shrink-0 transition-transform group-open:rotate-180"
            />
          </summary>
          <p class="mt-3 text-sm leading-relaxed text-darker-gray">{{ o.a }}</p>
          <RouterLink
            v-if="o.to"
            :to="o.to"
            class="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-pink"
          >
            {{ o.linkLabel }}
            <BaseIcon name="arrowRight" sizeClass="w-3.5 h-3.5" />
          </RouterLink>
        </details>
      </div>
    </Container>
  </section>

  <CtaBanner
    title="Satış ekibinizle bu sayfayı paylaşın"
    description="Neden Convex sayfası, karar sürecinde ekibinizin ihtiyaç duyduğu itiraz karşılıklarını tek yerde toplar."
  />
</template>
