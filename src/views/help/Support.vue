<script setup>
import { reactive, ref } from 'vue'
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import AppButton from '@/components/ui/AppButton.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import { t, useCopy } from '@/i18n'

const form = reactive({
  topic: 'general',
  email: '',
  message: '',
})
const submitted = ref(false)
const topics = [
  { value: 'general', label: { en: 'General Question', tr: 'Genel Soru' } },
  { value: 'data', label: { en: 'Dataset / Data', tr: 'Dataset / Veri' } },
  { value: 'experiment', label: 'Experiment Pipeline' },
  { value: 'governance', label: 'Model Governance' },
  { value: 'deployment', label: 'Deployment' },
  { value: 'billing', label: { en: 'Billing', tr: 'Faturalandırma' } },
]

const c = useCopy({
  en: {
    eyebrow: 'Help Center · Support Request',
    title: 'Reach our team directly',
    description:
      'If you couldn’t find what you need in the documentation or FAQ, open a support ticket using the form below.',
    topic: 'Topic',
    email: 'Email',
    emailPlaceholder: 'name@company.com',
    message: 'Describe your request',
    messagePlaceholder: 'Describe the issue or question you have in as much detail as possible.',
    submit: 'Submit Support Request',
    successTitle: 'Your support request has been received',
    successBefore: 'Our team will get back to you at',
    successAfter: 'as soon as possible.',
  },
  tr: {
    eyebrow: 'Yardım Merkezi · Destek Talebi',
    title: 'Ekibimize doğrudan ulaşın',
    description:
      "Dokümantasyon veya SSS'de aradığınızı bulamadıysanız, aşağıdaki formla bir destek talebi açabilirsiniz.",
    topic: 'Konu',
    email: 'E-posta',
    emailPlaceholder: 'ornek@kurum.com',
    message: 'Talebinizi açıklayın',
    messagePlaceholder: 'Karşılaştığınız sorunu veya sorunuzu mümkün olduğunca detaylı yazın.',
    submit: 'Destek Talebi Gönder',
    successTitle: 'Destek talebiniz alındı',
    successBefore: 'Ekibimiz',
    successAfter: 'adresi üzerinden en kısa sürede sizinle iletişime geçecek.',
  },
})

function handleSubmit() {
  submitted.value = true
}
</script>

<template>
  <PageHero :eyebrow="c.eyebrow" :title="c.title" :description="c.description" />

  <section class="py-20">
    <Container narrow>
      <form v-if="!submitted" class="space-y-5" @submit.prevent="handleSubmit">
        <label class="block">
          <span class="text-sm font-medium text-navy-dark">{{ c.topic }}</span>
          <select
            v-model="form.topic"
            class="mt-1.5 block w-full rounded-lg border border-light-gray-border px-3.5 py-2.5 text-sm text-navy-dark focus:border-pink focus:outline-none"
          >
            <option v-for="tp in topics" :key="tp.value" :value="tp.value">
              {{ t(tp.label) }}
            </option>
          </select>
        </label>
        <label class="block">
          <span class="text-sm font-medium text-navy-dark">{{ c.email }}</span>
          <input
            v-model="form.email"
            type="email"
            required
            class="mt-1.5 block w-full rounded-lg border border-light-gray-border px-3.5 py-2.5 text-sm text-navy-dark focus:border-pink focus:outline-none"
            :placeholder="c.emailPlaceholder"
          />
        </label>
        <label class="block">
          <span class="text-sm font-medium text-navy-dark">{{ c.message }}</span>
          <textarea
            v-model="form.message"
            rows="5"
            required
            class="mt-1.5 block w-full rounded-lg border border-light-gray-border px-3.5 py-2.5 text-sm text-navy-dark focus:border-pink focus:outline-none"
            :placeholder="c.messagePlaceholder"
          />
        </label>
        <AppButton type="submit" size="lg" showTrailingIcon>{{ c.submit }}</AppButton>
      </form>

      <div v-else class="rounded-2xl border border-light-gray-border bg-very-light-pink/40 p-8">
        <BaseIcon name="checkCircle" sizeClass="w-8 h-8 text-pink" />
        <h2 class="mt-4 text-xl font-semibold text-navy-dark">{{ c.successTitle }}</h2>
        <p class="mt-2 text-sm leading-relaxed text-darker-gray">
          {{ c.successBefore }} {{ form.email }} {{ c.successAfter }}
        </p>
      </div>
    </Container>
  </section>
</template>
