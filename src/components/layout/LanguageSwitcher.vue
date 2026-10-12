<script setup>
import { LOCALES, locale, setLocale } from '@/i18n'

const labels = { en: 'English', tr: 'Türkçe' }
</script>

<template>
  <div
    v-if="LOCALES.length > 1"
    class="inline-flex items-center rounded-lg border border-light-gray-border p-0.5 text-xs font-semibold"
    role="group"
    :aria-label="locale === 'tr' ? 'Dil seçimi' : 'Language'"
  >
    <button
      v-for="code in LOCALES"
      :key="code"
      type="button"
      class="rounded-md px-2 py-1 uppercase transition-colors"
      :class="code === locale ? 'bg-navy-dark text-white' : 'text-darker-gray hover:text-pink'"
      :aria-pressed="code === locale"
      :title="labels[code]"
      :lang="code"
      @click="setLocale(code)"
    >
      {{ code }}
    </button>
  </div>
</template>
