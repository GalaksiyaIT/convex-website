<script setup>
import { reactive, ref } from 'vue'
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import AppButton from '@/components/ui/AppButton.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'

const form = reactive({
  topic: 'Genel Soru',
  email: '',
  message: '',
})
const submitted = ref(false)
const topics = [
  'Genel Soru',
  'Dataset / Veri',
  'Experiment Pipeline',
  'Model Governance',
  'Deployment',
  'Faturalandırma',
]

function handleSubmit() {
  submitted.value = true
}
</script>

<template>
  <PageHero
    eyebrow="Yardım Merkezi · Destek Talebi"
    title="Ekibimize doğrudan ulaşın"
    description="Dokümantasyon veya SSS'de aradığınızı bulamadıysanız, aşağıdaki formla bir destek talebi açabilirsiniz."
  />

  <section class="py-20">
    <Container narrow>
      <form v-if="!submitted" class="space-y-5" @submit.prevent="handleSubmit">
        <label class="block">
          <span class="text-sm font-medium text-navy-dark">Konu</span>
          <select
            v-model="form.topic"
            class="mt-1.5 block w-full rounded-lg border border-light-gray-border px-3.5 py-2.5 text-sm text-navy-dark focus:border-pink focus:outline-none"
          >
            <option v-for="t in topics" :key="t" :value="t">{{ t }}</option>
          </select>
        </label>
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
          <span class="text-sm font-medium text-navy-dark">Talebinizi açıklayın</span>
          <textarea
            v-model="form.message"
            rows="5"
            required
            class="mt-1.5 block w-full rounded-lg border border-light-gray-border px-3.5 py-2.5 text-sm text-navy-dark focus:border-pink focus:outline-none"
            placeholder="Karşılaştığınız sorunu veya sorunuzu mümkün olduğunca detaylı yazın."
          />
        </label>
        <AppButton type="submit" size="lg" showTrailingIcon>Destek Talebi Gönder</AppButton>
      </form>

      <div v-else class="rounded-2xl border border-light-gray-border bg-very-light-pink/40 p-8">
        <BaseIcon name="checkCircle" sizeClass="w-8 h-8 text-pink" />
        <h2 class="mt-4 text-xl font-semibold text-navy-dark">Destek talebiniz alındı</h2>
        <p class="mt-2 text-sm leading-relaxed text-darker-gray">
          Ekibimiz {{ form.email }} adresi üzerinden en kısa sürede sizinle iletişime geçecek.
        </p>
      </div>
    </Container>
  </section>
</template>
