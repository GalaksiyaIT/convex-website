<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import LogoMark from '@/components/ui/LogoMark.vue'
import AppButton from '@/components/ui/AppButton.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import SiteSearch from '@/components/layout/SiteSearch.vue'
import { primaryNav } from '@/router/nav'

const route = useRoute()
const openMenu = ref(null) // desktop dropdown key
const mobileOpen = ref(false)
const mobileSubOpen = ref(null)

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.convex.ai'

function isActive(item) {
  if (item.children) {
    return item.children.some((c) => route.path.startsWith(c.to)) || route.path.startsWith(item.to)
  }
  return route.path === item.to
}

function closeMobile() {
  mobileOpen.value = false
  mobileSubOpen.value = null
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-light-gray-border bg-white/90 backdrop-blur">
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
      <RouterLink to="/" class="flex items-center gap-2" @click="closeMobile">
        <LogoMark sizeClass="h-7 w-auto" />
      </RouterLink>

      <nav class="hidden lg:flex items-center gap-1">
        <div
          v-for="item in primaryNav"
          :key="item.label"
          class="relative"
          @mouseenter="item.children ? (openMenu = item.label) : null"
          @mouseleave="item.children ? (openMenu = null) : null"
          @focusin="item.children ? (openMenu = item.label) : null"
          @focusout="item.children ? (openMenu = null) : null"
          @keydown.esc="openMenu = null"
        >
          <RouterLink
            :to="item.to"
            class="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
            :class="isActive(item) ? 'text-pink' : 'text-navy-dark hover:text-pink'"
            :aria-haspopup="item.children ? 'true' : undefined"
            :aria-expanded="item.children ? String(openMenu === item.label) : undefined"
          >
            {{ item.label }}
            <BaseIcon v-if="item.children" name="chevronDown" sizeClass="w-3.5 h-3.5" />
          </RouterLink>

          <div
            v-if="item.children && openMenu === item.label"
            class="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3"
          >
            <div
              class="rounded-2xl border border-light-gray-border bg-white p-2 shadow-xl shadow-navy-dark/5"
            >
              <RouterLink
                v-for="child in item.children"
                :key="child.to"
                :to="child.to"
                class="block rounded-xl px-4 py-3 hover:bg-very-light-pink"
              >
                <p class="text-sm font-semibold text-navy-dark">{{ child.label }}</p>
                <p v-if="child.description" class="mt-0.5 text-xs text-darker-gray">
                  {{ child.description }}
                </p>
              </RouterLink>
            </div>
          </div>
        </div>
        <RouterLink
          to="/yardim"
          class="rounded-lg px-3 py-2 text-sm font-medium transition-colors"
          :class="route.path.startsWith('/yardim') ? 'text-pink' : 'text-navy-dark hover:text-pink'"
        >
          Yardım Merkezi
        </RouterLink>
      </nav>

      <div class="hidden lg:flex items-center gap-1">
        <SiteSearch />
        <a
          :href="APP_URL"
          class="rounded-lg px-3 py-2 text-sm font-medium text-navy-dark hover:text-pink transition-colors"
        >
          Uygulamaya Git
        </a>
        <AppButton to="/iletisim" size="sm" class="ml-2">Demo Talep Et</AppButton>
      </div>

      <div class="flex items-center gap-1 lg:hidden">
        <SiteSearch />
        <button
          class="inline-flex h-9 w-9 items-center justify-center rounded-lg text-navy-dark"
          @click="mobileOpen = !mobileOpen"
          aria-label="Menüyü aç"
        >
          <BaseIcon :name="mobileOpen ? 'close' : 'menu'" sizeClass="w-6 h-6" />
        </button>
      </div>
    </div>

    <div v-if="mobileOpen" class="lg:hidden border-t border-light-gray-border bg-white">
      <div class="max-h-[calc(100vh-4rem)] overflow-y-auto px-6 py-4">
        <div v-for="item in primaryNav" :key="item.label" class="py-1">
          <button
            v-if="item.children"
            class="flex w-full items-center justify-between py-2 text-left text-sm font-semibold text-navy-dark"
            @click="mobileSubOpen = mobileSubOpen === item.label ? null : item.label"
          >
            {{ item.label }}
            <BaseIcon
              name="chevronDown"
              sizeClass="w-4 h-4"
              :class="mobileSubOpen === item.label ? 'rotate-180' : ''"
            />
          </button>
          <RouterLink
            v-else
            :to="item.to"
            class="block py-2 text-sm font-semibold text-navy-dark"
            @click="closeMobile"
          >
            {{ item.label }}
          </RouterLink>
          <div v-if="item.children && mobileSubOpen === item.label" class="pl-3 pb-2">
            <RouterLink
              v-for="child in item.children"
              :key="child.to"
              :to="child.to"
              class="block py-2 text-sm text-darker-gray"
              @click="closeMobile"
            >
              {{ child.label }}
            </RouterLink>
          </div>
        </div>
        <RouterLink
          to="/yardim"
          class="block py-2 text-sm font-semibold text-navy-dark"
          @click="closeMobile"
        >
          Yardım Merkezi
        </RouterLink>
        <div class="mt-4 flex flex-col gap-3 border-t border-light-gray-border pt-4">
          <a :href="APP_URL" class="text-sm font-medium text-navy-dark">Uygulamaya Git</a>
          <AppButton to="/iletisim" @click="closeMobile">Demo Talep Et</AppButton>
        </div>
      </div>
    </div>
  </header>
</template>
