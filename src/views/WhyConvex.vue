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
import { useCopy } from '@/i18n'

// "Convex Go Brochure"nun "Delayed deployment = Delayed impact" slaytından (Sayfa 2) —
// sektör araştırması rakamları, sorunu somutlaştırmak için sayfanın en üstüne konuldu.
// comparisonRows: "Convex Automated ML Platform Deck" sunumunun "Main Benefits of Convex"
// karşılaştırma tablosundan (Slayt 5) — geleneksel model geliştirme süreciyle kıyaslama.
// benefitStats: Aynı sunumun diğer slaytlarından (GPU ile hızlandırma, model performans etkisi,
// entegre devreye alma) derlenen rakamlar.
const explainabilityReportsEn = [
  'SHAP Values',
  'Feature Importance',
  'Correlation Analysis',
  'PSI Analysis',
  'VIF Analysis',
  'Percentile Distributions',
]

const c = useCopy({
  en: {
    problemStats: [
      {
        value: '65%',
        label: 'of businesses find their model deployment process “too slow”',
      },
      {
        value: '54%',
        label:
          'of decision-makers believe ModelOps will shape their industry over the next 3–5 years',
      },
    ],
    comparisonRows: [
      {
        label: 'End-to-end time',
        traditional: '~6 months',
        convex: 'Minutes, including validation and deployment',
      },
      {
        label: 'Effort',
        traditional: 'At least 500 person-days',
        convex: '5–10 person-days',
      },
      {
        label: 'Time to market',
        traditional: '1–1.5 year delay',
        convex: 'Real-time updates',
      },
    ],
    benefitStats: [
      { value: '5×', label: 'faster experiment results' },
      {
        value: '30%+',
        label: 'minimum performance uplift ML models add over traditional models',
      },
      { value: '70–80%', label: 'shorter deployment time with integrated decision engines' },
      {
        value: '10×',
        label: 'return on keeping models up to date, relative to platform cost (RoI)',
      },
    ],
    explainabilityReports: explainabilityReportsEn,
    objections: [
      {
        q: 'What changes compared with our manual/Excel scorecard process?',
        a: 'The steps that live in Excel or scattered scripts move into a single, traceable flow in Convex. You do the same work, but now you can see who changed what, and when.',
      },
      {
        q: 'Can our team use it without writing code?',
        a: 'Yes. Business and risk analysts can set up experiments in the visual interface without data science support. Advanced users can fine-tune parameters whenever they want.',
      },
      {
        q: 'How does it talk to our existing systems?',
        a: 'It pulls data from your relational databases with queries and keeps it current with Sync. Live models serve scores to your decision engines and core systems via REST API, and to bulk jobs via batch. Details are on the Extensions page.',
        to: '/urun/eklentiler',
        linkLabel: 'Go to the Extensions page',
      },
      {
        q: 'Where does our data live?',
        a: 'On-prem or cloud: you decide where your data is stored. Encryption and KVKK details are on the Security & Compliance page.',
        to: '/guvenlik',
        linkLabel: 'Go to the Security & Compliance page',
      },
    ],
    heroEyebrow: 'Why Convex',
    heroTitle: 'Honest answers to the questions you hesitate to ask',
    heroDescription:
      'We shorten your decision process with numbers, comparisons and straight answers.',
    heroCta: 'Request a Demo',
    problemQuote:
      '“Model deployment speed is no longer just a technical issue. It’s a strategic one.”',
    problemSource:
      'Source: Experian 2023 Survey on Model Building and ModelOps; Experian & Forrester Consulting study, 2024.',
    numbersEyebrow: 'Convex by the Numbers',
    numbersTitle: 'Compared with traditional model development',
    numbersDescription: 'Two processes doing the same job: one takes months, the other minutes.',
    traditionalLabel: 'Traditional Approach',
    numbersSource: 'Source: “Convex Automated ML Platform Deck” product presentation.',
    transparencyEyebrow: 'Transparency',
    transparencyTitle: 'Full visibility for regulators and auditors',
    brochureSource: '— Convex Go product brochure',
    transparencyLead:
      'Convex lays out the reasoning behind every prediction in concrete reports, never asking you to “just trust us.” Analyses generated automatically during model development can be used directly in audit and regulatory discussions:',
    transparencyBody:
      'SHAP-based contribution analysis shows which variables drive each score, while PSI and VIF analyses measure model stability and multicollinearity between variables. All of it is part of automatically generated model documentation, with no code required.',
    faqEyebrow: 'Common Objections',
    faqTitle: 'Still have questions?',
    faqDescription: 'We address the objections we hear most often during the decision process.',
    ctaTitle: 'Share this page with your sales team',
    ctaDescription:
      'The Why Convex page brings together, in one place, the answers your team needs during the decision process.',
  },
  tr: {
    problemStats: [
      {
        value: '%65',
        label: 'işletme, model devreye alma sürecini "çok yavaş" buluyor',
      },
      {
        value: '%54',
        label:
          "karar verici, önümüzdeki 3-5 yılda ModelOps'un sektörlerini şekillendireceğini düşünüyor",
      },
    ],
    comparisonRows: [
      {
        label: 'Uçtan uca süre',
        traditional: '~6 ay',
        convex: 'Denetim ve devreye alma dahil dakikalar içinde',
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
    ],
    benefitStats: [
      { value: '×5', label: 'daha hızlı deney sonuçları' },
      {
        value: '%30+',
        label: 'ML modellerinin geleneksel modellere kattığı minimum performans artışı',
      },
      { value: '%70-80', label: 'entegre karar motorlarıyla devreye alma süresinde azalma' },
      {
        value: '×10',
        label: 'modelleri güncel tutmanın platform maliyetine oranla getirisi (RoI)',
      },
    ],
    explainabilityReports: [
      'SHAP Values',
      'Feature Importance',
      'Correlation Analizi',
      'PSI Analizi',
      'VIF Analizi',
      'Percentile Dağılımları',
    ],
    objections: [
      {
        q: 'Manuel/Excel scorecard sürecimize kıyasla ne değişir?',
        a: "Excel'deki veya dağınık scriptlerdeki adımlar, Convex'te tek izlenebilir akışa taşınır — aynı işi yapıyorsunuz, ama artık kim neyi ne zaman değiştirdiğini görebiliyorsunuz.",
      },
      {
        q: 'Ekibimiz kod yazmadan kullanabilir mi?',
        a: 'Evet. İş ve risk analistleri, veri bilimci desteği olmadan görsel arayüzden deney kurabilir. İleri düzey kullanıcı isterse parametrelere ince ayar yapar.',
      },
      {
        q: 'Mevcut sistemlerimizle nasıl konuşur?',
        a: 'Veriyi ilişkisel veritabanlarınızdan sorguyla alır, Sync ile güncel tutar. Canlıdaki model karar motorlarınıza ve çekirdek sistemlerinize REST API ile, toplu işlerde batch ile skor sunar. Detaylar Eklentiler sayfasında.',
        to: '/urun/eklentiler',
        linkLabel: 'Eklentiler sayfasına git',
      },
      {
        q: 'Verimiz nerede duruyor?',
        a: 'On-prem veya cloud — verinizin nerede tutulacağına siz karar verirsiniz. Şifreleme ve KVKK detayları Güvenlik & Uyumluluk sayfasında.',
        to: '/guvenlik',
        linkLabel: 'Güvenlik & Uyumluluk sayfasına git',
      },
    ],
    heroEyebrow: 'Neden Convex',
    heroTitle: 'Sormaktan çekindiğiniz sorulara, dürüst cevaplar',
    heroDescription:
      'Rakamlar, karşılaştırmalar ve dürüst cevaplarla karar sürecinizi kısaltıyoruz.',
    heroCta: 'Demo Talep Et',
    problemQuote:
      '"Model devreye alma hızı artık sadece teknik bir mesele değil — stratejik bir mesele."',
    problemSource:
      'Kaynak: Experian 2023 Survey on Model Building and ModelOps; Experian & Forrester Consulting araştırması, 2024.',
    numbersEyebrow: 'Sayılarla Convex',
    numbersTitle: 'Geleneksel model geliştirmeye kıyasla',
    numbersDescription: 'Aynı işi yapan iki süreç — biri aylar sürüyor, diğeri dakikalar.',
    traditionalLabel: 'Geleneksel Yöntem',
    numbersSource: 'Kaynak: "Convex Automated ML Platform Deck" ürün sunumu.',
    transparencyEyebrow: 'Şeffaflık',
    transparencyTitle: 'Regülatöre ve denetçiye tam görünürlük',
    brochureSource: '— Convex Go ürün broşürü',
    transparencyLead:
      'Convex, her tahminin arkasındaki gerekçeyi "güvenin bize" demek zorunda kalmadan, somut raporlarla ortaya koyar. Model geliştirme sürecinde otomatik üretilen analizler, denetim ve regülasyon görüşmelerinde doğrudan kullanılabilir:',
    transparencyBody:
      'SHAP tabanlı katkı analizleri her skorun hangi değişkenlerden etkilendiğini gösterirken; PSI ve VIF analizleri model kararlılığını ve değişkenler arası çoklu doğrusallığı ölçer. Hepsi, kod yazmadan, otomatik oluşturulan model dokümantasyonunun bir parçasıdır.',
    faqEyebrow: 'Sık Sorulan İtirazlar',
    faqTitle: 'Hâlâ aklınızda soru işareti mi var?',
    faqDescription: 'Karar sürecinde en sık duyduğumuz itirazları önden karşılıyoruz.',
    ctaTitle: 'Satış ekibinizle bu sayfayı paylaşın',
    ctaDescription:
      'Neden Convex sayfası, karar sürecinde ekibinizin ihtiyaç duyduğu itiraz karşılıklarını tek yerde toplar.',
  },
})
</script>

<template>
  <PageHero :eyebrow="c.heroEyebrow" :title="c.heroTitle" :description="c.heroDescription">
    <template #actions>
      <AppButton to="/iletisim" showTrailingIcon>{{ c.heroCta }}</AppButton>
    </template>
  </PageHero>

  <!-- Problem çerçevesi: "Convex Go Brochure" sunumunun "Delayed deployment = Delayed impact"
       slaytından (Sayfa 2) — sektöre ait araştırma rakamları. Sunumdan gelen içeriklerin daha
       görünür/dikkat çekici olması için sayfanın en üstüne alındı. -->
  <section class="bg-navy-dark py-16 text-white">
    <Container narrow>
      <blockquote
        class="border-l-2 border-pink pl-4 text-lg italic leading-relaxed text-very-light-blue/90 sm:text-xl"
      >
        {{ c.problemQuote }}
      </blockquote>
      <div class="mt-8 grid gap-6 sm:grid-cols-2">
        <div v-for="s in c.problemStats" :key="s.label">
          <p class="text-3xl font-semibold text-pink sm:text-4xl">{{ s.value }}</p>
          <p class="mt-1.5 text-sm leading-relaxed text-very-light-blue/70">{{ s.label }}</p>
        </div>
      </div>
      <p class="mt-6 text-xs text-very-light-blue/40">
        {{ c.problemSource }}
      </p>
    </Container>
  </section>

  <!-- Sayılarla Convex: içerik "Convex Automated ML Platform Deck" sunumunun "Main Benefits
       of Convex" karşılaştırma tablosu ve ilgili slaytlarından (GPU hızlandırma, model
       performans etkisi, entegre devreye alma) derlendi. -->
  <section class="border-y border-light-gray-border bg-light-gray-bg py-20">
    <Container narrow>
      <SectionHeading
        :eyebrow="c.numbersEyebrow"
        :title="c.numbersTitle"
        :description="c.numbersDescription"
      />
      <div class="mt-10 grid gap-4">
        <div
          v-for="row in c.comparisonRows"
          :key="row.label"
          class="grid gap-3 rounded-2xl border border-light-gray-border bg-white p-5 sm:grid-cols-[1fr_1.3fr_1.3fr] sm:items-center"
        >
          <p class="text-sm font-semibold text-navy-dark">{{ row.label }}</p>
          <div class="rounded-lg bg-light-gray-bg px-3.5 py-2.5 text-sm text-darker-gray">
            <span
              class="block text-[11px] font-semibold uppercase tracking-wide text-darker-gray/50"
              >{{ c.traditionalLabel }}</span
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
        <StatBand :stats="c.benefitStats" />
      </div>
      <p class="mt-4 text-xs text-darker-gray/50">
        {{ c.numbersSource }}
      </p>
    </Container>
  </section>

  <!-- İçerik "Convex Go Brochure" ve "Convex Platform Deck" sunumlarındaki
       "full transparency for auditors and regulators" ve SHAP/Feature Importance/PSI/VIF
       raporlarından esinlenildi. Eyebrow, kaynağın kendi özellik adı olan "Full transparency"
       ile birebir eşleşsin diye "Şeffaflık" olarak seçildi. -->
  <section class="bg-navy-dark py-20 text-white">
    <Container narrow>
      <p class="text-xs font-semibold uppercase tracking-wide text-pink">
        {{ c.transparencyEyebrow }}
      </p>
      <h2 class="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
        {{ c.transparencyTitle }}
      </h2>
      <blockquote class="mt-5 border-l-2 border-pink pl-4 text-base italic text-very-light-blue/90">
        "Ensure full visibility and explainability for auditors and regulators with ease."
        <footer class="mt-1 text-xs not-italic text-very-light-blue/60">
          {{ c.brochureSource }}
        </footer>
      </blockquote>
      <p class="mt-4 text-base leading-relaxed text-very-light-blue/80">
        {{ c.transparencyLead }}
      </p>
      <div class="mt-6 flex flex-wrap gap-2">
        <Badge v-for="r in c.explainabilityReports" :key="r" tone="pink">{{ r }}</Badge>
      </div>
      <p class="mt-6 text-sm leading-relaxed text-very-light-blue/70">
        {{ c.transparencyBody }}
      </p>
    </Container>
  </section>

  <section class="py-20">
    <Container narrow>
      <SectionHeading :eyebrow="c.faqEyebrow" :title="c.faqTitle" :description="c.faqDescription" />
      <div class="mt-10 space-y-4">
        <details
          v-for="o in c.objections"
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

  <CtaBanner :title="c.ctaTitle" :description="c.ctaDescription" />
</template>
