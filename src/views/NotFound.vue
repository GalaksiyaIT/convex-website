<script setup>
import Container from '@/components/ui/Container.vue'
import AppButton from '@/components/ui/AppButton.vue'
</script>

<template>
  <section class="flex min-h-[70vh] items-center justify-center py-20">
    <Container narrow class="text-center">
      <p class="text-sm font-semibold uppercase tracking-wider text-pink">404</p>
      <h1 class="mt-3 text-3xl font-semibold text-navy-dark">Aradığınız sayfa bulunamadı</h1>
      <p class="mt-3 text-base text-darker-gray">
        Bağlantı hatalı olabilir veya sayfa taşınmış olabilir.
      </p>
      <div class="mt-8 flex justify-center gap-4">
        <AppButton to="/">Anasayfaya dön</AppButton>
        <AppButton to="/yardim" variant="secondary">Yardım Merkezi</AppButton>
      </div>
    </Container>
  </section>
</template>
