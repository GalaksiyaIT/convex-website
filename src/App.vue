<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'

const route = useRoute()
const isBare = computed(() => route.meta?.bareLayout === true)
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <SiteHeader v-if="!isBare" />
    <main class="flex-1">
      <router-view />
    </main>
    <SiteFooter v-if="!isBare" />
  </div>
</template>
