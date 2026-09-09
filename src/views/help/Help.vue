<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import Container from '@/components/ui/Container.vue'
import Card from '@/components/ui/Card.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'

const query = ref('')

const shortcuts = [
  {
    to: '/yardim/baslangic',
    icon: 'rocket',
    title: 'Başlangıç Kılavuzu',
    description: 'İlk gün izlenecek kurulum ve temel kullanım adımları',
  },
  {
    to: '/yardim/dokumantasyon',
    icon: 'bookOpen',
    title: 'Dokümantasyon',
    description: 'Modül modül kullanım kılavuzları',
  },
  {
    to: '/yardim/videolar',
    icon: 'playCircle',
    title: 'Video Eğitimler',
    description: 'Adım adım ekran kayıtları',
  },
  {
    to: '/yardim/surum-notlari',
    icon: 'gitBranch',
    title: 'Sürüm Notları',
    description: 'Yeni özellik ve iyileştirme duyuruları',
  },
]

const faqs = [
  {
    q: 'Yeni bir dataset nasıl yüklerim?',
    a: 'Dataset yükleme adımlarının tamamı Dokümantasyon > Dataset Yükleme bölümünde anlatılıyor; CSV, veritabanı bağlantısı ve API ile yükleme seçeneklerinin hepsi desteklenir.',
  },
  {
    q: 'Model Governance onay akışını kim yönetir?',
    a: 'Onay akışındaki adımları (risk, denetim, iş birimi) kurum yöneticiniz tanımlar. Kendi rolünüzle ilgili yetkileri göremiyorsanız Destek Talebi açabilirsiniz.',
  },
  {
    q: 'Yeni sürümde neler değişti, nasıl takip ederim?',
    a: "Tüm değişiklikler Sürüm Notları sayfasında, ürün ekibinin paylaştığı changelog'un okunur bir özeti olarak yayımlanır.",
  },
  {
    q: 'Bir soruma hızlıca cevap bulamadım, ne yapmalıyım?',
    a: 'Destek Talebi sayfasından bir talep açabilirsiniz; talebiniz ilgili ekibe yönlendirilir.',
  },
]

const filteredFaqs = computed(() => {
  if (!query.value.trim()) return faqs
  const q = query.value.toLocaleLowerCase('tr')
  return faqs.filter(
    (f) => f.q.toLocaleLowerCase('tr').includes(q) || f.a.toLocaleLowerCase('tr').includes(q),
  )
})
</script>

<template>
  <section class="border-b border-light-gray-border bg-very-light-pink">
    <Container>
      <div class="py-16 sm:py-20 text-center max-w-2xl mx-auto">
        <p class="text-xs font-semibold uppercase tracking-wider text-pink">Yardım Merkezi</p>
        <h1 class="mt-4 text-4xl font-semibold tracking-tight text-navy-dark">
          Size nasıl yardımcı olabiliriz?
        </h1>
        <p class="mt-4 text-base text-darker-gray">
          Dokümantasyonda, sık sorulan sorularda veya video eğitimlerde arama yapın.
        </p>
        <div class="mt-8 relative">
          <BaseIcon
            name="search"
            sizeClass="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-darker-gray/50"
          />
          <input
            v-model="query"
            type="text"
            placeholder="Örn. dataset yükleme, model onayı, API anahtarı..."
            class="w-full rounded-xl border border-light-gray-border bg-white py-3.5 pl-11 pr-4 text-sm text-navy-dark shadow-sm focus:border-pink focus:outline-none"
          />
        </div>
      </div>
    </Container>
  </section>

  <section class="py-16">
    <Container>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <RouterLink v-for="s in shortcuts" :key="s.to" :to="s.to">
          <Card hover class="h-full">
            <div
              class="flex h-11 w-11 items-center justify-center rounded-xl bg-very-light-pink text-pink"
            >
              <BaseIcon :name="s.icon" sizeClass="w-5 h-5" />
            </div>
            <h3 class="mt-4 text-sm font-semibold text-navy-dark">{{ s.title }}</h3>
            <p class="mt-1.5 text-xs leading-relaxed text-darker-gray">{{ s.description }}</p>
          </Card>
        </RouterLink>
      </div>
    </Container>
  </section>

  <section class="bg-light-gray-bg py-16">
    <Container narrow>
      <h2 class="text-xl font-semibold text-navy-dark">Sık sorulan sorular</h2>
      <div class="mt-6 space-y-3">
        <details
          v-for="f in filteredFaqs"
          :key="f.q"
          class="group rounded-xl border border-light-gray-border bg-white p-5"
        >
          <summary
            class="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-navy-dark"
          >
            {{ f.q }}
            <BaseIcon
              name="chevronDown"
              sizeClass="w-4 h-4 flex-shrink-0 transition-transform group-open:rotate-180"
            />
          </summary>
          <p class="mt-3 text-sm leading-relaxed text-darker-gray">{{ f.a }}</p>
        </details>
        <p v-if="!filteredFaqs.length" class="text-sm text-darker-gray">
          Aramanızla eşleşen bir sonuç bulunamadı.
          <RouterLink to="/yardim/destek" class="font-medium text-pink hover:underline"
            >Destek talebi açın</RouterLink
          >.
        </p>
      </div>
    </Container>
  </section>

  <section class="py-16">
    <Container narrow class="text-center">
      <p class="text-sm text-darker-gray">Aradığınızı bulamadınız mı?</p>
      <RouterLink
        to="/yardim/destek"
        class="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-pink"
      >
        Destek talebi açın
        <BaseIcon name="arrowRight" sizeClass="w-3.5 h-3.5" />
      </RouterLink>
    </Container>
  </section>
</template>
