<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import Container from '@/components/ui/Container.vue'
import Card from '@/components/ui/Card.vue'
import Badge from '@/components/ui/Badge.vue'
import { getVideoGuides } from '@/content/videoGuides'
import { getDocsGuides } from '@/content/docsGuides'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import { locale, useCopy } from '@/i18n'

const query = ref('')

const c = useCopy({
  en: {
    eyebrow: 'Help Center',
    title: 'How can we help?',
    subtitle: 'Search the documentation, FAQs and video tutorials.',
    placeholder: 'E.g. data upload, Audit Log, Model Monitoring...',
    explore: 'Explore',
    faqTitle: 'Frequently asked questions',
    noResults: 'No results match your search.',
    openTicket: 'Open a support ticket',
    notFound: 'Can’t find what you’re looking for?',
    shortcuts: [
      {
        tag: 'Guide',
        title: 'Getting Started Guide',
        description: 'Setup and core usage steps for your first day.',
        meta: '5 steps',
      },
      {
        tag: 'Documentation',
        title: 'Documentation',
        description: 'Module-by-module user guides.',
        meta: (n) => `${n} modules`,
      },
      {
        tag: 'Video',
        title: 'Video Tutorials',
        description: 'A written walkthrough and screen recording for every step.',
        meta: (n) => `${n} videos`,
      },
      {
        tag: 'Release Notes',
        title: 'Release Notes',
        description: 'Announcements of new features and improvements.',
        meta: '3 releases',
      },
    ],
    faqs: [
      {
        q: 'How do I upload a new dataset?',
        a: 'The full set of dataset upload steps is covered under Documentation > Data Management: you can upload a CSV from your computer, pull data from your relational database with a query, or merge existing datasets.',
      },
      {
        q: 'Where do I track a model’s approval status?',
        a: 'In Model Governance, the Model Audit Log screen (under the model’s More actions menu) keeps the approval status and related documents in a single record. You can review the Validation Report on screen or have it emailed to you as a PDF.',
      },
      {
        q: 'What changed in the new release, and how do I keep up?',
        a: 'Every change is published on the Release Notes page as a readable summary of the changelog shared by the product team.',
      },
      {
        q: 'I couldn’t find a quick answer to my question. What should I do?',
        a: 'Open a ticket from the Support Request page; it will be routed to the right team.',
      },
    ],
  },
  tr: {
    eyebrow: 'Yardım Merkezi',
    title: 'Size nasıl yardımcı olabiliriz?',
    subtitle: 'Dokümantasyonda, sık sorulan sorularda veya video eğitimlerde arama yapın.',
    placeholder: 'Örn. veri yükleme, Audit Log, Model Monitoring...',
    explore: 'İncele',
    faqTitle: 'Sık sorulan sorular',
    noResults: 'Aramanızla eşleşen bir sonuç bulunamadı.',
    openTicket: 'Destek talebi açın',
    notFound: 'Aradığınızı bulamadınız mı?',
    shortcuts: [
      {
        tag: 'Kılavuz',
        title: 'Başlangıç Kılavuzu',
        description: 'İlk gün izlenecek kurulum ve temel kullanım adımları.',
        meta: '5 adım',
      },
      {
        tag: 'Dokümantasyon',
        title: 'Dokümantasyon',
        description: 'Modül modül kullanım kılavuzları.',
        meta: (n) => `${n} modül`,
      },
      {
        tag: 'Video',
        title: 'Video Eğitimler',
        description: 'Her adımın yazılı anlatımı ve ekran kaydı.',
        meta: (n) => `${n} video`,
      },
      {
        tag: 'Sürüm Notları',
        title: 'Sürüm Notları',
        description: 'Yeni özellik ve iyileştirme duyuruları.',
        meta: '3 sürüm',
      },
    ],
    faqs: [
      {
        q: 'Yeni bir dataset nasıl yüklerim?',
        a: 'Dataset yükleme adımlarının tamamı Dokümantasyon > Veri Yönetimi bölümünde anlatılıyor; bilgisayarınızdan CSV yükleyebilir, ilişkisel veritabanınızdan sorguyla veri alabilir ya da mevcut veri setlerini birleştirebilirsiniz.',
      },
      {
        q: 'Bir modelin onay durumunu nerede takip ederim?',
        a: "Model Governance'ta modelin More actions menüsündeki Model Audit Log ekranında onay durumu ve ilgili belgeler tek kayıtta tutulur. Validation Report'u ekranda inceleyebilir, isterseniz PDF olarak e-postayla da alabilirsiniz.",
      },
      {
        q: 'Yeni sürümde neler değişti, nasıl takip ederim?',
        a: "Tüm değişiklikler Sürüm Notları sayfasında, ürün ekibinin paylaştığı changelog'un okunur bir özeti olarak yayımlanır.",
      },
      {
        q: 'Bir soruma hızlıca cevap bulamadım, ne yapmalıyım?',
        a: 'Destek Talebi sayfasından bir talep açabilirsiniz; talebiniz ilgili ekibe yönlendirilir.',
      },
    ],
  },
})

const shortcutPaths = [
  '/yardim/baslangic',
  '/yardim/dokumantasyon',
  '/yardim/videolar',
  '/yardim/surum-notlari',
]

const shortcuts = computed(() => {
  const counts = [
    null,
    getDocsGuides(locale.value).length,
    getVideoGuides(locale.value).filter((v) => !v.hidden).length,
    null,
  ]
  return c.value.shortcuts.map((s, i) => ({
    ...s,
    to: shortcutPaths[i],
    meta: typeof s.meta === 'function' ? s.meta(counts[i]) : s.meta,
  }))
})

const filteredFaqs = computed(() => {
  const faqs = c.value.faqs
  if (!query.value.trim()) return faqs
  const lang = locale.value === 'tr' ? 'tr' : 'en'
  const q = query.value.toLocaleLowerCase(lang)
  return faqs.filter(
    (f) => f.q.toLocaleLowerCase(lang).includes(q) || f.a.toLocaleLowerCase(lang).includes(q),
  )
})
</script>

<template>
  <section class="border-b border-light-gray-border bg-very-light-pink">
    <Container>
      <div class="py-16 sm:py-20 text-center max-w-2xl mx-auto">
        <p class="text-xs font-semibold uppercase tracking-wider text-pink">{{ c.eyebrow }}</p>
        <h1 class="mt-4 text-4xl font-semibold tracking-tight text-navy-dark">
          {{ c.title }}
        </h1>
        <p class="mt-4 text-base text-darker-gray">
          {{ c.subtitle }}
        </p>
        <div class="mt-8 relative">
          <BaseIcon
            name="search"
            sizeClass="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-darker-gray/50"
          />
          <input
            v-model="query"
            type="text"
            :placeholder="c.placeholder"
            class="w-full rounded-xl border border-light-gray-border bg-white py-3.5 pl-11 pr-4 text-sm text-navy-dark shadow-sm focus:border-pink focus:outline-none"
          />
        </div>
      </div>
    </Container>
  </section>

  <section class="py-16">
    <Container>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <RouterLink v-for="s in shortcuts" :key="s.to" :to="s.to" class="block">
          <Card hover class="flex h-full flex-col">
            <Badge tone="navy">{{ s.tag }}</Badge>
            <h3 class="mt-4 text-base font-semibold leading-snug text-navy-dark">
              {{ s.title }}
            </h3>
            <p class="mt-2 flex-1 text-sm leading-relaxed text-darker-gray">
              {{ s.description }}
            </p>
            <div class="mt-5 flex items-center justify-between text-xs text-darker-gray/70">
              <span>{{ s.meta }}</span>
              <span class="inline-flex items-center gap-1 font-medium text-pink">
                {{ c.explore }}
                <BaseIcon name="arrowRight" sizeClass="w-3 h-3" />
              </span>
            </div>
          </Card>
        </RouterLink>
      </div>
    </Container>
  </section>

  <section class="bg-light-gray-bg py-16">
    <Container narrow>
      <h2 class="text-xl font-semibold text-navy-dark">{{ c.faqTitle }}</h2>
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
          {{ c.noResults }}
          <RouterLink to="/yardim/destek" class="font-medium text-pink hover:underline">{{
            c.openTicket
          }}</RouterLink
          >.
        </p>
      </div>
    </Container>
  </section>

  <section class="py-16">
    <Container narrow class="text-center">
      <p class="text-sm text-darker-gray">{{ c.notFound }}</p>
      <RouterLink
        to="/yardim/destek"
        class="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-pink"
      >
        {{ c.openTicket }}
        <BaseIcon name="arrowRight" sizeClass="w-3.5 h-3.5" />
      </RouterLink>
    </Container>
  </section>
</template>
