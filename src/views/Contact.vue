<script setup>
import { computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import AppButton from '@/components/ui/AppButton.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import { useCopy } from '@/i18n'

const router = useRouter()

const form = reactive({
  name: '',
  company: '',
  email: '',
  message: '',
})

function handleSubmit() {
  // Bu form henüz bir backend'e bağlı değil; Faz 1 kapsamında görsel akışı ve
  // alan setini doğrulamak için istemci tarafında bırakıldı. Site planı bu adım
  // için ayrı bir teşekkür sayfasını şart koşuyor (bkz. İletişim içerik stratejisi).
  router.push({ name: 'contact-thank-you', query: { name: form.name, email: form.email } })
}

// Posta adresi özel isim olduğu için iki dilde de aynı kalır.
const IZMIR_ADDRESS = 'Ege Teknopark, Ege Üniversitesi, 35100 Bornova/İzmir · +90 (232) 373 55 11'

const c = useCopy({
  en: {
    eyebrow: 'Contact',
    title: 'Request a demo',
    description:
      'Fill out the form and our team will usually get back to you within 1 business day.',
    nameLabel: 'Full name',
    namePlaceholder: 'Your full name',
    companyLabel: 'Organization',
    companyPlaceholder: 'Your organization’s name',
    emailLabel: 'Email',
    emailPlaceholder: 'name@company.com',
    messageLabel: 'Briefly describe your needs',
    messagePlaceholder: 'E.g. we’re evaluating moving our existing models to Convex.',
    submit: 'Request a Demo',
    note: 'Average response time: 1 business day. Your information is used only to evaluate your request.',
    otherChannels: 'Other ways to reach us',
    emailChannel: 'Email',
    izmirOffice: 'İzmir Office',
  },
  tr: {
    eyebrow: 'İletişim',
    title: 'Demo talep edin',
    description: 'Formu doldurun, ekibimiz genellikle 1 iş günü içinde size dönüş yapar.',
    nameLabel: 'Ad Soyad',
    namePlaceholder: 'Adınız Soyadınız',
    companyLabel: 'Kurum',
    companyPlaceholder: 'Kurumunuzun adı',
    emailLabel: 'E-posta',
    emailPlaceholder: 'ornek@kurum.com',
    messageLabel: 'Kısa ihtiyaç açıklaması',
    messagePlaceholder: "Örn. mevcut modellerimizi Convex'e taşımayı değerlendiriyoruz.",
    submit: 'Demo Talep Et',
    note: 'Ortalama dönüş süresi: 1 iş günü. Bilgileriniz yalnızca talebinizi değerlendirmek için kullanılır.',
    otherChannels: 'Diğer iletişim kanalları',
    emailChannel: 'E-posta',
    izmirOffice: 'İzmir Ofisi',
  },
})

const channels = computed(() => [
  { icon: 'mail', label: c.value.emailChannel, value: 'info@galaksiya.com.tr' },
  { icon: 'mapPin', label: c.value.izmirOffice, value: IZMIR_ADDRESS },
])
</script>

<template>
  <PageHero :eyebrow="c.eyebrow" :title="c.title" :description="c.description" />

  <section class="py-20">
    <Container>
      <div class="grid gap-12 lg:grid-cols-5">
        <div class="lg:col-span-3">
          <form class="space-y-5" @submit.prevent="handleSubmit">
            <div class="grid gap-5 sm:grid-cols-2">
              <label class="block">
                <span class="text-sm font-medium text-navy-dark">{{ c.nameLabel }}</span>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="mt-1.5 block w-full rounded-lg border border-light-gray-border px-3.5 py-2.5 text-sm text-navy-dark focus:border-pink focus:outline-none"
                  :placeholder="c.namePlaceholder"
                />
              </label>
              <label class="block">
                <span class="text-sm font-medium text-navy-dark">{{ c.companyLabel }}</span>
                <input
                  v-model="form.company"
                  type="text"
                  required
                  class="mt-1.5 block w-full rounded-lg border border-light-gray-border px-3.5 py-2.5 text-sm text-navy-dark focus:border-pink focus:outline-none"
                  :placeholder="c.companyPlaceholder"
                />
              </label>
            </div>
            <label class="block">
              <span class="text-sm font-medium text-navy-dark">{{ c.emailLabel }}</span>
              <input
                v-model="form.email"
                type="email"
                required
                class="mt-1.5 block w-full rounded-lg border border-light-gray-border px-3.5 py-2.5 text-sm text-navy-dark focus:border-pink focus:outline-none"
                :placeholder="c.emailPlaceholder"
              />
            </label>
            <label class="block">
              <span class="text-sm font-medium text-navy-dark">{{ c.messageLabel }}</span>
              <textarea
                v-model="form.message"
                rows="4"
                required
                class="mt-1.5 block w-full rounded-lg border border-light-gray-border px-3.5 py-2.5 text-sm text-navy-dark focus:border-pink focus:outline-none"
                :placeholder="c.messagePlaceholder"
              />
            </label>
            <AppButton type="submit" size="lg" showTrailingIcon>{{ c.submit }}</AppButton>
            <p class="text-xs text-darker-gray/70">
              {{ c.note }}
            </p>
          </form>
        </div>

        <div class="lg:col-span-2">
          <div class="rounded-2xl border border-light-gray-border p-6">
            <h3 class="text-sm font-semibold uppercase tracking-wide text-darker-gray/60">
              {{ c.otherChannels }}
            </h3>
            <ul class="mt-5 space-y-4">
              <li v-for="ch in channels" :key="ch.icon" class="flex items-start gap-3">
                <div
                  class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-very-light-pink text-pink"
                >
                  <BaseIcon :name="ch.icon" sizeClass="w-4 h-4" />
                </div>
                <div>
                  <p class="text-xs text-darker-gray/70">{{ ch.label }}</p>
                  <p class="text-sm font-medium text-navy-dark">{{ ch.value }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
