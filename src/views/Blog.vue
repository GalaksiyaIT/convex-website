<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import Card from '@/components/ui/Card.vue'
import Badge from '@/components/ui/Badge.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import { getBlogPosts } from '@/content/blogPosts'
import { locale, useCopy } from '@/i18n'

const blogPosts = computed(() => getBlogPosts(locale.value))

const c = useCopy({
  en: {
    title: 'On AutoML, model risk management and regulation',
    description:
      'Practical articles for anyone building credit scoring models, strengthening risk management or making sense of regulatory requirements.',
    read: 'read',
    readMore: 'Read more',
    footerBefore: 'We publish two new articles a month. Have a topic you’d like us to cover?',
    footerLink: 'Get in touch',
    footerAfter: '.',
  },
  tr: {
    title: 'AutoML, model risk yönetimi ve regülasyon üzerine',
    description:
      'Kredi skorlama modeli kurmak, risk yönetimini iyileştirmek ya da regülasyon gereksinimlerini anlamak isteyenler için pratik yazılar.',
    read: 'okuma',
    readMore: 'Devamını oku',
    footerBefore: 'Ayda iki yeni yazı yayımlıyoruz. Belirli bir konuda yazı önerisi için',
    footerLink: 'bize ulaşın',
    footerAfter: '.',
  },
})

function formatDate(value) {
  const [y, m, d] = String(value).split('-').map(Number)
  if (!y || !m || !d) return value
  return new Intl.DateTimeFormat(locale.value === 'tr' ? 'tr-TR' : 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(y, m - 1, d))
}
</script>

<template>
  <PageHero eyebrow="Blog" :title="c.title" :description="c.description" />

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
              <span>{{ formatDate(post.date) }} · {{ post.readTime }} {{ c.read }}</span>
              <span class="inline-flex items-center gap-1 font-medium text-pink">
                {{ c.readMore }}
                <BaseIcon name="arrowRight" sizeClass="w-3 h-3" />
              </span>
            </div>
          </Card>
        </RouterLink>
      </div>
      <p class="mt-10 text-center text-sm text-darker-gray/70">
        {{ c.footerBefore }}
        <RouterLink to="/contact" class="font-medium text-pink hover:underline">{{
          c.footerLink
        }}</RouterLink
        >{{ c.footerAfter }}
      </p>
    </Container>
  </section>
</template>
