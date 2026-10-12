<script setup>
import { useRoute } from 'vue-router'
import Container from '@/components/ui/Container.vue'
import AppButton from '@/components/ui/AppButton.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import { useCopy } from '@/i18n'

const route = useRoute()

const c = useCopy({
  en: {
    title: 'We’ve received your request',
    thanks: 'Thank you',
    bodyStart: 'Our team will get in touch with you',
    viaEmail: (email) => ` at ${email}`,
    bodyEnd: 'within 1 business day.',
    home: 'Back to home',
    help: 'Help Center',
  },
  tr: {
    title: 'Talebiniz alındı',
    thanks: 'Teşekkürler',
    bodyStart: 'Ekibimiz en geç 1 iş günü içinde',
    viaEmail: (email) => ` ${email} adresi üzerinden`,
    bodyEnd: 'sizinle iletişime geçecek.',
    home: 'Anasayfaya dön',
    help: 'Yardım Merkezi',
  },
})
</script>

<template>
  <section class="flex min-h-[70vh] items-center justify-center py-20">
    <Container narrow class="text-center">
      <div
        class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-very-light-pink text-pink"
      >
        <BaseIcon name="checkCircle" sizeClass="w-7 h-7" />
      </div>
      <h1 class="mt-6 text-3xl font-semibold tracking-tight text-navy-dark">{{ c.title }}</h1>
      <p class="mt-3 text-base leading-relaxed text-darker-gray">
        {{ c.thanks }}{{ route.query.name ? ' ' + route.query.name : '' }}. {{ c.bodyStart
        }}{{ route.query.email ? c.viaEmail(route.query.email) : '' }} {{ c.bodyEnd }}
      </p>
      <div class="mt-8 flex justify-center gap-4">
        <AppButton to="/">{{ c.home }}</AppButton>
        <AppButton to="/yardim" variant="secondary">{{ c.help }}</AppButton>
      </div>
    </Container>
  </section>
</template>
