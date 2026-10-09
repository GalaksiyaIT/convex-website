<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import Container from '@/components/ui/Container.vue'
import Badge from '@/components/ui/Badge.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'
import { blogPosts } from '@/content/blogPosts'

const route = useRoute()
const post = computed(() => blogPosts.find((p) => p.slug === route.params.slug))
</script>

<template>
  <template v-if="post">
    <section class="border-b border-light-gray-border bg-very-light-pink">
      <Container narrow>
        <div class="py-14 sm:py-16">
          <RouterLink
            to="/blog"
            class="inline-flex items-center gap-1.5 text-sm font-medium text-pink"
          >
            <BaseIcon name="arrowRight" sizeClass="w-3.5 h-3.5 rotate-180" />
            Bloga dön
          </RouterLink>
          <Badge tone="navy" class="mt-5">{{ post.tag }}</Badge>
          <h1 class="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-navy-dark">
            {{ post.title }}
          </h1>
          <p class="mt-3 text-sm text-darker-gray/70">
            {{ post.date }} · {{ post.readTime }} okuma
          </p>
        </div>
      </Container>
    </section>

    <section class="py-16">
      <Container narrow>
        <div class="prose-convex space-y-5 text-base leading-relaxed text-darker-gray">
          <p v-for="(paragraph, i) in post.body" :key="i">{{ paragraph }}</p>
        </div>

        <div
          v-if="post.relatedTo"
          class="mt-10 rounded-2xl border border-light-gray-border bg-light-gray-bg p-6"
        >
          <p class="text-xs font-semibold uppercase tracking-wide text-darker-gray/60">
            İlgili ürün sayfası
          </p>
          <RouterLink
            :to="post.relatedTo"
            class="mt-2 inline-flex items-center gap-1.5 text-base font-medium text-pink"
          >
            {{ post.relatedLabel }}
            <BaseIcon name="arrowRight" sizeClass="w-4 h-4" />
          </RouterLink>
        </div>
      </Container>
    </section>

    <CtaBanner />
  </template>

  <template v-else>
    <section class="flex min-h-[50vh] items-center justify-center py-20">
      <Container narrow class="text-center">
        <h1 class="text-2xl font-semibold text-navy-dark">Yazı bulunamadı</h1>
        <RouterLink
          to="/blog"
          class="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-pink"
        >
          Bloga dön
        </RouterLink>
      </Container>
    </section>
  </template>
</template>
