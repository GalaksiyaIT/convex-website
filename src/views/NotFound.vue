<script setup>
import Container from '@/components/ui/Container.vue'
import AppButton from '@/components/ui/AppButton.vue'
import { useCopy } from '@/i18n'

const c = useCopy({
  en: {
    title: 'We couldn’t find the page you’re looking for',
    body: 'The link may be broken or the page may have moved.',
    home: 'Back to home',
    help: 'Help Center',
  },
  tr: {
    title: 'Aradığınız sayfa bulunamadı',
    body: 'Bağlantı hatalı olabilir veya sayfa taşınmış olabilir.',
    home: 'Anasayfaya dön',
    help: 'Yardım Merkezi',
  },
})
</script>

<template>
  <section class="flex min-h-[70vh] items-center justify-center py-20">
    <Container narrow class="text-center">
      <p class="text-sm font-semibold uppercase tracking-wider text-pink">404</p>
      <h1 class="mt-3 text-3xl font-semibold text-navy-dark">{{ c.title }}</h1>
      <p class="mt-3 text-base text-darker-gray">
        {{ c.body }}
      </p>
      <div class="mt-8 flex justify-center gap-4">
        <AppButton to="/">{{ c.home }}</AppButton>
        <AppButton to="/yardim" variant="secondary">{{ c.help }}</AppButton>
      </div>
    </Container>
  </section>
</template>
