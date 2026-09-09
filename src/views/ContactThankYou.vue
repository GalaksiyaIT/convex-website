<script setup>
import { useRoute } from 'vue-router'
import Container from '@/components/ui/Container.vue'
import AppButton from '@/components/ui/AppButton.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'

const route = useRoute()
</script>

<template>
  <section class="flex min-h-[70vh] items-center justify-center py-20">
    <Container narrow class="text-center">
      <div
        class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-very-light-pink text-pink"
      >
        <BaseIcon name="checkCircle" sizeClass="w-7 h-7" />
      </div>
      <h1 class="mt-6 text-3xl font-semibold tracking-tight text-navy-dark">Talebiniz alındı</h1>
      <p class="mt-3 text-base leading-relaxed text-darker-gray">
        Teşekkürler{{ route.query.name ? ' ' + route.query.name : '' }}. Ekibimiz en geç 1 iş günü
        içinde{{ route.query.email ? ` ${route.query.email} adresi üzerinden` : '' }} sizinle
        iletişime geçecek.
      </p>
      <div class="mt-8 flex justify-center gap-4">
        <AppButton to="/">Anasayfaya dön</AppButton>
        <AppButton to="/yardim" variant="secondary">Yardım Merkezi</AppButton>
      </div>
    </Container>
  </section>
</template>
