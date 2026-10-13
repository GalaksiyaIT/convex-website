<script setup>
import { RouterLink } from 'vue-router'
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import { useCopy } from '@/i18n'
import signInImg from '@/assets/screens/getting-started/step-sign-in.webp'
import projectImg from '@/assets/screens/getting-started/step-project.webp'
import datasetImg from '@/assets/screens/getting-started/step-dataset.webp'
import experimentImg from '@/assets/screens/getting-started/step-experiment.webp'
import resultsImg from '@/assets/screens/getting-started/step-results.webp'

// Her adımın altında gerçek bir Convex ekranı (stage kayıtlarından, kişi adı içermeyen kırpımlar).
const stepImages = [signInImg, projectImg, datasetImg, experimentImg, resultsImg]

const c = useCopy({
  en: {
    eyebrow: 'Help Center · Getting Started Guide',
    title: 'Your first-day checklist',
    description:
      'The “read this first” summary of the documentation: the order to follow when you sign in to Convex for the first time.',
    moreTitle: 'Need more detail?',
    moreText:
      'Head to the Documentation page for complete, module-by-module guides covering every step.',
    moreLink: 'Go to Documentation',
    steps: [
      {
        title: 'Sign in to your account',
        description:
          'Sign in to Convex using the invitation created for your organization. If you run into problems, contact your organization’s administrator.',
      },
      {
        title: 'Create your first project',
        description:
          'A project keeps related experiments together. Start with "New Project" on the Projects page; you can link the project to a portfolio and a use case.',
      },
      {
        title: 'Upload a dataset',
        description:
          'On the Data Sets page, use "New Data Set" to upload a CSV file or pull data from your relational database with a query. You can explore the uploaded dataset right away with Visualize Dataset.',
      },
      {
        title: 'Set up your first experiment',
        description:
          'Create your experiment on the Experiments page: choose the problem type and target, apply the feature engineering and feature selection steps, then start training with one or more algorithms.',
      },
      {
        title: 'Compare and report on the results',
        description:
          'Compare the models’ Train and Test scores in Model Results. In Model Governance, interpret the model you selected, generate the Model Report and Validation Report, and record its approval status in the Model Audit Log.',
      },
    ],
  },
  tr: {
    eyebrow: 'Yardım Merkezi · Başlangıç Kılavuzu',
    title: 'İlk gününüzde izleyeceğiniz adımlar',
    description:
      "Dokümantasyon'un 'önce bunu oku' özeti — Convex'e ilk kez giriş yaptığınızda izleyeceğiniz sıra.",
    moreTitle: 'Daha fazla detay mı gerekiyor?',
    moreText:
      'Her adımın modül modül anlatıldığı tam kılavuzlar için Dokümantasyon sayfasına göz atın.',
    moreLink: 'Dokümantasyona git',
    steps: [
      {
        title: 'Hesabınıza giriş yapın',
        description:
          'Kurumunuz için oluşturulan davetle Convex hesabınıza giriş yapın. Sorun yaşarsanız kurum yöneticinizle iletişime geçin.',
      },
      {
        title: 'İlk projenizi oluşturun',
        description:
          'Bir proje, ilişkili deneyleri bir arada tutar. Projects sayfasında "New Project" ile başlayın; projeyi bir portföy ve kullanım senaryosuyla ilişkilendirebilirsiniz.',
      },
      {
        title: 'Dataset yükleyin',
        description:
          'Data Sets sayfasında "New Data Set" ile CSV dosyası yükleyin ya da ilişkisel veritabanınızdan sorguyla veri alın. Yüklenen veri setini Visualize Dataset ile hemen inceleyebilirsiniz.',
      },
      {
        title: 'İlk deneyinizi kurun',
        description:
          'Experiments sayfasında deneyinizi oluşturun; problem tipini ve hedefi seçin, feature engineering ve feature selection adımlarını uygulayıp bir veya birden çok algoritmayla eğitimi başlatın.',
      },
      {
        title: 'Sonuçları karşılaştırın ve raporlayın',
        description:
          "Model Results'ta modellerin Train ve Test skorlarını karşılaştırın. Model Governance'ta seçtiğiniz modeli yorumlayın, Model Report ve Validation Report alın, onay durumunu Model Audit Log'da kaydedin.",
      },
    ],
  },
})
</script>

<template>
  <PageHero :eyebrow="c.eyebrow" :title="c.title" :description="c.description" />

  <section class="py-20">
    <Container narrow>
      <ol class="space-y-8">
        <li v-for="(s, i) in c.steps" :key="s.title" class="flex gap-5">
          <span
            class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-very-light-pink text-sm font-semibold text-pink"
          >
            {{ i + 1 }}
          </span>
          <div class="min-w-0 flex-1">
            <h3 class="font-semibold text-navy-dark">{{ s.title }}</h3>
            <p class="mt-1.5 text-sm leading-relaxed text-darker-gray">{{ s.description }}</p>
            <div
              v-if="stepImages[i]"
              class="mt-4 max-w-xl overflow-hidden rounded-xl border border-light-gray-border bg-white shadow-sm"
            >
              <img :src="stepImages[i]" :alt="s.title" loading="lazy" class="block w-full" />
            </div>
          </div>
        </li>
      </ol>

      <div class="mt-12 rounded-2xl border border-light-gray-border bg-light-gray-bg p-6">
        <div class="flex items-center gap-2">
          <BaseIcon name="bookOpen" sizeClass="w-5 h-5 text-purple" />
          <h3 class="font-semibold text-navy-dark">{{ c.moreTitle }}</h3>
        </div>
        <p class="mt-2 text-sm leading-relaxed text-darker-gray">
          {{ c.moreText }}
        </p>
        <RouterLink
          to="/help/documentation"
          class="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-pink"
        >
          {{ c.moreLink }}
          <BaseIcon name="arrowRight" sizeClass="w-3.5 h-3.5" />
        </RouterLink>
      </div>
    </Container>
  </section>
</template>
