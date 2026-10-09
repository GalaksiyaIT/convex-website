<script setup>
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import AppButton from '@/components/ui/AppButton.vue'
import Card from '@/components/ui/Card.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'
import { RouterLink } from 'vue-router'

const reasons = [
  {
    icon: 'eye',
    title: 'Açıklanabilir & Denetlenebilir',
    description: 'Her tahminin gerekçesi SHAP ile denetçilere ve iş birimlerine gösterilebilir.',
  },
  {
    icon: 'server',
    title: 'On-Prem veya Cloud',
    description: 'Verinin nerede tutulacağına kurumun altyapı politikası karar verir.',
  },
  {
    icon: 'plug',
    title: 'Mevcut Sistemlerle Entegre',
    description:
      'Veriyi ilişkisel veritabanlarınızdan alır; canlıdaki model karar motorlarınıza REST API ile, toplu işlerde batch ile skor sunar.',
  },
  {
    icon: 'workflow',
    title: 'Uçtan Uca Tek Platform',
    description: 'Veri hazırlamaktan deploy’a kadar ayrı araçlar arasında geçiş gerekmez.',
  },
  {
    icon: 'gitBranch',
    title: 'Regülasyona Hazır',
    description: 'Model risk yönetimi çerçevelerinin beklediği izlenebilirlik ve versiyonlama.',
  },
]

const scenarios = [
  {
    icon: 'barChart',
    title: 'Tahmin Modelleme',
    eyebrow: 'Sınıflandırma ve regresyon',
    description:
      'Mevcut istatistiksel yöntemlerin yanına makine öğrenmesini katın, ayrım gücünü artırın — karar sürecinizi değiştirmeden.',
    points: [
      'Mevcut modelinizle yan yana karşılaştırma',
      'WOE/binning ile açıklanabilir feature engineering',
      'Model Audit Log ile onay kaydı ve Validation Report',
    ],
  },
  {
    icon: 'shield',
    title: 'Risk ve Karar Modelleri',
    eyebrow: 'Olasılık, kayıp ve eğilim tahmini',
    description:
      'Olasılık ve kayıp tahmini gibi modelleri; regülasyonun ya da kurum içi politikaların beklediği izlenebilirlik ve versiyonlamayla kurun.',
    points: [
      'Champion/challenger karşılaştırması',
      'Zaman içinde model sapmasının (drift) izlenmesi',
      'Denetime sunulabilir model dokümantasyonu',
    ],
  },
  {
    icon: 'eye',
    title: 'Model Denetimi',
    eyebrow: 'İç denetim ve risk komitesi',
    description:
      'Üretimdeki modelleri bağımsız incelemeye açın — "kara kutu" savunması yapmadan denetimden geçin.',
    points: [
      'SHAP tabanlı katkı analizleri',
      'Tüm model versiyonlarının denetim izi',
      'Departman bazlı erişim ve Audit Log onay kayıtları',
    ],
  },
]

// Somut kullanım senaryolarının tek bakışta tarandığı, sektöre bağlı olmayan bir liste —
// üç ana senaryonun altını dolduruyor.
const useCases = [
  'Müşteri edinimi ve başvuru skorlama',
  'Pazarlama hedefleme ve yanıt tahmini',
  'Müşteri kaybı (churn) tahmini',
  'Dolandırıcılık (fraud) tespiti',
  'Temerrüt ve kayıp olasılığı modelleme',
  'Erken uyarı ve tahsilat önceliklendirme',
  'Model doğrulama ve bağımsız gözden geçirme',
  'Senaryo ve stres testi analizi',
  'Denetime sunulacak model raporlama',
  'Portföy bazında risk izleme',
  'Champion/challenger model karşılaştırması',
  'Açıklanabilirlik ve denetim dokümantasyonu',
]
</script>

<template>
  <PageHero
    eyebrow="Çözümler"
    title="Modellerinizi dakikalar içinde canlıya alın."
    description="Convex, tahmin modelleme, risk modelleme ve model denetiminde hız ile denetlenebilirliği bir arada verir."
  >
    <template #actions>
      <AppButton to="/iletisim" showTrailingIcon>Demo Talep Et</AppButton>
    </template>
  </PageHero>

  <!-- Kısa "neden Convex" özeti: 5'li nedenler ızgarası. -->
  <section class="border-b border-light-gray-border bg-light-gray-bg py-14">
    <Container>
      <p class="text-xs font-semibold uppercase tracking-wide text-darker-gray/60">
        Ekipler Convex'i neden seçiyor
      </p>
      <div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        <div v-for="r in reasons" :key="r.title">
          <BaseIcon :name="r.icon" sizeClass="w-5 h-5 text-pink" />
          <h3 class="mt-3 text-sm font-semibold text-navy-dark">{{ r.title }}</h3>
          <p class="mt-1.5 text-xs leading-relaxed text-darker-gray">{{ r.description }}</p>
        </div>
      </div>
    </Container>
  </section>

  <section class="py-20">
    <Container>
      <div class="space-y-16">
        <div
          v-for="(s, i) in scenarios"
          :key="s.title"
          class="grid gap-10 lg:grid-cols-2 lg:items-center"
        >
          <div :class="i % 2 === 1 ? 'lg:order-2' : ''">
            <div
              class="flex h-11 w-11 items-center justify-center rounded-xl bg-very-light-pink text-pink"
            >
              <BaseIcon :name="s.icon" sizeClass="w-5 h-5" />
            </div>
            <p class="mt-4 text-xs font-semibold uppercase tracking-wide text-pink">
              {{ s.eyebrow }}
            </p>
            <h2 class="mt-1 text-2xl font-semibold text-navy-dark">{{ s.title }}</h2>
            <p class="mt-3 text-base leading-relaxed text-darker-gray">{{ s.description }}</p>
            <RouterLink
              to="/vaka-calismalari"
              class="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-pink"
            >
              İlgili vaka çalışmasını oku
              <BaseIcon name="arrowRight" sizeClass="w-3.5 h-3.5" />
            </RouterLink>
          </div>
          <Card :class="i % 2 === 1 ? 'lg:order-1' : ''">
            <p class="text-xs font-semibold uppercase tracking-wide text-darker-gray/60">
              Bu senaryoda önemli olan
            </p>
            <ul class="mt-3 space-y-3">
              <li
                v-for="p in s.points"
                :key="p"
                class="flex items-start gap-2 text-sm text-navy-dark"
              >
                <BaseIcon name="check" sizeClass="w-4 h-4 text-pink mt-0.5 flex-shrink-0" />
                {{ p }}
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </Container>
  </section>

  <section class="bg-light-gray-bg py-16">
    <Container>
      <p class="text-xs font-semibold uppercase tracking-wide text-darker-gray/60">
        Ve dahası — Convex'in kapsadığı diğer senaryolar
      </p>
      <div class="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="uc in useCases" :key="uc" class="flex items-start gap-2 text-sm text-navy-dark">
          <BaseIcon name="check" sizeClass="w-4 h-4 text-pink mt-0.5 flex-shrink-0" />
          {{ uc }}
        </div>
      </div>
    </Container>
  </section>

  <CtaBanner
    title="Senaryonuzu birlikte değerlendirelim"
    description="Kendi veri setiniz ve gereksinimleriniz üzerinden kısa bir demo planlayalım."
  />
</template>
