<script setup>
import { ref, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import { searchSite } from '@/content/searchIndex'
import { caps } from '@/utils/caps'

const open = ref(false)
const query = ref('')
const inputRef = ref(null)
const dialogRef = ref(null)
const router = useRouter()

const results = ref([])
watch(query, (q) => {
  results.value = searchSite(q)
})

function show() {
  open.value = true
  query.value = ''
  results.value = []
  nextTick(() => inputRef.value?.focus())
}

function close() {
  open.value = false
}

function go(path) {
  close()
  router.push(path)
}

// Basit odak tuzağı: modal açıkken Tab, sadece dialog içindeki odaklanabilir
// elemanlar arasında dolaşır (arkadaki sayfaya kaçmaz).
function trapTab(event) {
  if (event.key !== 'Tab' || !dialogRef.value) return
  const focusable = dialogRef.value.querySelectorAll('input, button')
  if (!focusable.length) return
  const first = focusable[0]
  const last = focusable[focusable.length - 1]
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

defineExpose({ show })
</script>

<template>
  <button
    class="flex h-9 w-9 items-center justify-center rounded-lg text-navy-dark hover:bg-light-gray-bg"
    aria-label="Sitede ara"
    @click="show"
  >
    <BaseIcon name="search" sizeClass="w-5 h-5" />
  </button>

  <div
    v-if="open"
    class="fixed inset-0 z-[60] flex items-start justify-center bg-navy-dark/40 px-4 pt-24"
    @click.self="close"
    @keydown="trapTab"
  >
    <div
      ref="dialogRef"
      role="dialog"
      aria-modal="true"
      aria-label="Site içinde ara"
      class="w-full max-w-xl rounded-2xl bg-white shadow-2xl"
    >
      <div class="flex items-center gap-3 border-b border-light-gray-border px-4 py-3.5">
        <BaseIcon name="search" sizeClass="w-4 h-4 text-darker-gray/50" />
        <input
          ref="inputRef"
          v-model="query"
          type="text"
          aria-label="Arama sorgusu"
          placeholder="Blog, dokümantasyon veya ürün sayfalarında ara..."
          class="flex-1 text-sm text-navy-dark focus:outline-none"
          @keydown.esc="close"
        />
        <button class="text-xs text-darker-gray/60 hover:text-pink" @click="close">Kapat</button>
      </div>

      <div class="max-h-96 overflow-y-auto p-2">
        <button
          v-for="item in results"
          :key="item.path + item.title"
          class="flex w-full flex-col items-start gap-0.5 rounded-xl px-3 py-2.5 text-left hover:bg-very-light-pink"
          @click="go(item.path)"
        >
          <span class="text-xs font-medium uppercase tracking-wide text-pink">{{
            caps(item.category)
          }}</span>
          <span class="text-sm font-medium text-navy-dark">{{ item.title }}</span>
          <span class="text-xs text-darker-gray">{{ item.description }}</span>
        </button>

        <p v-if="query && !results.length" class="px-3 py-6 text-center text-sm text-darker-gray">
          "{{ query }}" için bir sonuç bulunamadı.
        </p>
        <p v-if="!query" class="px-3 py-6 text-center text-sm text-darker-gray/70">
          Aramaya başlamak için yazın.
        </p>
      </div>
    </div>
  </div>
</template>
