<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import AppButton from '@/components/ui/AppButton.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'

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

const channels = [
  { icon: 'mail', label: 'E-posta', value: 'info@galaksiya.com.tr' },
  {
    icon: 'mapPin',
    label: 'İzmir Ofisi',
    value: 'Ege Teknopark, Ege Üniversitesi, 35100 Bornova/İzmir · +90 (232) 373 55 11',
  },
  {
    icon: 'building',
    label: 'Ankara Ofisi',
    value:
      'İşçi Blokları Mah. Mevlana Bulvarı (Konya Yolu), Ege Plaza No:182B Kat:3 No:5, Çankaya/Ankara · +90 (312) 473 38 25',
  },
]
</script>

<template>
  <PageHero
    eyebrow="İletişim"
    title="Demo talep edin"
    description="Formu doldurun, ekibimiz genellikle 1 iş günü içinde size dönüş yapar."
  />

  <section class="py-20">
    <Container>
      <div class="grid gap-12 lg:grid-cols-5">
        <div class="lg:col-span-3">
          <form class="space-y-5" @submit.prevent="handleSubmit">
            <div class="grid gap-5 sm:grid-cols-2">
              <label class="block">
                <span class="text-sm font-medium text-navy-dark">Ad Soyad</span>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="mt-1.5 block w-full rounded-lg border border-light-gray-border px-3.5 py-2.5 text-sm text-navy-dark focus:border-pink focus:outline-none"
                  placeholder="Adınız Soyadınız"
                />
              </label>
              <label class="block">
                <span class="text-sm font-medium text-navy-dark">Kurum</span>
                <input
                  v-model="form.company"
                  type="text"
                  required
                  class="mt-1.5 block w-full rounded-lg border border-light-gray-border px-3.5 py-2.5 text-sm text-navy-dark focus:border-pink focus:outline-none"
                  placeholder="Kurumunuzun adı"
                />
              </label>
            </div>
            <label class="block">
              <span class="text-sm font-medium text-navy-dark">E-posta</span>
              <input
                v-model="form.email"
                type="email"
                required
                class="mt-1.5 block w-full rounded-lg border border-light-gray-border px-3.5 py-2.5 text-sm text-navy-dark focus:border-pink focus:outline-none"
                placeholder="ornek@kurum.com"
              />
            </label>
            <label class="block">
              <span class="text-sm font-medium text-navy-dark">Kısa ihtiyaç açıklaması</span>
              <textarea
                v-model="form.message"
                rows="4"
                required
                class="mt-1.5 block w-full rounded-lg border border-light-gray-border px-3.5 py-2.5 text-sm text-navy-dark focus:border-pink focus:outline-none"
                placeholder="Örn. kredi skorlama modellerimizi Convex'e taşımayı değerlendiriyoruz."
              />
            </label>
            <AppButton type="submit" size="lg" showTrailingIcon>Demo Talep Et</AppButton>
            <p class="text-xs text-darker-gray/70">
              Ortalama dönüş süresi: 1 iş günü. Bilgileriniz yalnızca talebinizi değerlendirmek için
              kullanılır.
            </p>
          </form>
        </div>

        <div class="lg:col-span-2">
          <div class="rounded-2xl border border-light-gray-border p-6">
            <h3 class="text-sm font-semibold uppercase tracking-wide text-darker-gray/60">
              Diğer iletişim kanalları
            </h3>
            <ul class="mt-5 space-y-4">
              <li v-for="c in channels" :key="c.label" class="flex items-start gap-3">
                <div
                  class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-very-light-pink text-pink"
                >
                  <BaseIcon :name="c.icon" sizeClass="w-4 h-4" />
                </div>
                <div>
                  <p class="text-xs text-darker-gray/70">{{ c.label }}</p>
                  <p class="text-sm font-medium text-navy-dark">{{ c.value }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
