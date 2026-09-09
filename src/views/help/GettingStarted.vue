<script setup>
import { RouterLink } from 'vue-router'
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'

const steps = [
  {
    title: 'Hesabınıza giriş yapın',
    description:
      'Kurumunuz için oluşturulan davetle Convex hesabınıza giriş yapın. Sorun yaşarsanız kurum yöneticinizle iletişime geçin.',
  },
  {
    title: 'İlk projenizi oluşturun',
    description:
      'Bir proje, ilişkili dataset\'leri ve deneyleri bir arada tutar. Sol menüden "Yeni Proje" ile başlayın.',
  },
  {
    title: 'Dataset yükleyin',
    description:
      'CSV dosyası yükleyebilir veya kurumunuzun veritabanı/çekirdek bankacılık sistemine bağlanabilirsiniz. Şema doğrulaması otomatik yapılır.',
  },
  {
    title: 'İlk deneyinizi kurun',
    description:
      'Experiment Pipeline üzerinden feature engineering adımlarını tanımlayıp bir veya birden çok algoritma ile eğitim başlatın.',
  },
  {
    title: "Sonuçları karşılaştırın ve governance'a gönderin",
    description:
      'Eğitilen modelleri Gini, KS gibi metriklerle karşılaştırın; seçtiğiniz modeli onay akışına gönderin.',
  },
]
</script>

<template>
  <PageHero
    eyebrow="Yardım Merkezi · Başlangıç Kılavuzu"
    title="İlk gününüzde izleyeceğiniz adımlar"
    description="Dokümantasyon'un 'önce bunu oku' özeti — Convex'e ilk kez giriş yaptığınızda izleyeceğiniz sıra."
  />

  <section class="py-20">
    <Container narrow>
      <ol class="space-y-8">
        <li v-for="(s, i) in steps" :key="s.title" class="flex gap-5">
          <span
            class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-very-light-pink text-sm font-semibold text-pink"
          >
            {{ i + 1 }}
          </span>
          <div>
            <h3 class="font-semibold text-navy-dark">{{ s.title }}</h3>
            <p class="mt-1.5 text-sm leading-relaxed text-darker-gray">{{ s.description }}</p>
          </div>
        </li>
      </ol>

      <div class="mt-12 rounded-2xl border border-light-gray-border bg-light-gray-bg p-6">
        <div class="flex items-center gap-2">
          <BaseIcon name="bookOpen" sizeClass="w-5 h-5 text-purple" />
          <h3 class="font-semibold text-navy-dark">Daha fazla detay mı gerekiyor?</h3>
        </div>
        <p class="mt-2 text-sm leading-relaxed text-darker-gray">
          Her adımın modül modül anlatıldığı tam kılavuzlar için Dokümantasyon sayfasına göz atın.
        </p>
        <RouterLink
          to="/yardim/dokumantasyon"
          class="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-pink"
        >
          Dokümantasyona git
          <BaseIcon name="arrowRight" sizeClass="w-3.5 h-3.5" />
        </RouterLink>
      </div>
    </Container>
  </section>
</template>
