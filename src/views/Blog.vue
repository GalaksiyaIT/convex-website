<script setup>
import { RouterLink } from 'vue-router'
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import Card from '@/components/ui/Card.vue'
import Badge from '@/components/ui/Badge.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import { blogPosts } from '@/content/blogPosts'
</script>

<template>
  <PageHero
    eyebrow="Blog"
    title="AutoML, model risk yönetimi ve regülasyon üzerine"
    description="Kredi skorlama modeli kurmak, risk yönetimini iyileştirmek ya da regülasyon gereksinimlerini anlamak isteyenler için pratik yazılar."
  />

  <section class="py-20">
    <Container>
      <div class="grid gap-6 sm:grid-cols-2">
        <RouterLink
          v-for="post in blogPosts"
          :key="post.slug"
          :to="`/blog/${post.slug}`"
          class="block"
        >
          <Card hover class="flex h-full flex-col">
            <Badge tone="navy">{{ post.tag }}</Badge>
            <h2 class="mt-4 text-lg font-semibold leading-snug text-navy-dark">
              {{ post.title }}
            </h2>
            <p class="mt-2 flex-1 text-sm leading-relaxed text-darker-gray">{{ post.excerpt }}</p>
            <div class="mt-5 flex items-center justify-between text-xs text-darker-gray/70">
              <span>{{ post.date }} · {{ post.readTime }} okuma</span>
              <span class="inline-flex items-center gap-1 font-medium text-pink">
                Devamını oku
                <BaseIcon name="arrowRight" sizeClass="w-3 h-3" />
              </span>
            </div>
          </Card>
        </RouterLink>
      </div>
      <p class="mt-10 text-center text-sm text-darker-gray/70">
        Ayda iki yeni yazı yayımlıyoruz. Belirli bir konuda yazı önerisi için
        <RouterLink to="/iletisim" class="font-medium text-pink hover:underline"
          >bize ulaşın</RouterLink
        >.
      </p>
    </Container>
  </section>
</template>
