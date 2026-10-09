<script setup>
import QuoteCard from '@/components/sections/QuoteCard.vue'
import Marquee from '@/components/ui/MarqueeRow.vue'
import { testimonials } from '@/content/testimonials'
</script>

<template>
  <div class="[mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
    <Marquee :duration="42" gap="1.5rem">
      <div v-for="t in testimonials" :key="t.name" class="h-72 w-[360px] sm:w-[420px]">
        <QuoteCard
          :quote="t.quote"
          :name="t.name"
          :title="t.title"
          :company="t.company"
          :avatar="t.avatar"
        />
      </div>
    </Marquee>
  </div>
</template>
