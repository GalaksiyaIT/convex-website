<script setup>
import { RouterLink } from 'vue-router'
import LogoMark from '@/components/ui/LogoMark.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import { productLinks, resourceLinks, helpLinks, legalLinks, companyLinks } from '@/router/nav'

// Şirketin gerçek sosyal medya profil linki henüz belirlenmedi; uydurma bir URL
// koymamak için ikon şimdilik tıklanamaz bir yer tutucu olarak duruyor.
const linkedinUrl = null
</script>

<template>
  <footer class="border-t border-light-gray-border bg-light-gray-bg">
    <div class="mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
        <div class="col-span-2 sm:col-span-3 lg:col-span-2">
          <LogoMark sizeClass="h-7 w-auto" />
          <p class="mt-4 max-w-xs text-sm leading-relaxed text-darker-gray">
            Bankacılık ve finans kuruluşları için AutoML, kredi skorlama ve model risk yönetimi
            platformu. Galaksiya tarafından geliştirilir.
          </p>
          <div class="mt-5 flex items-center gap-3">
            <a
              v-if="linkedinUrl"
              :href="linkedinUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-8 w-8 items-center justify-center rounded-lg border border-light-gray-border text-darker-gray hover:border-pink hover:text-pink"
              aria-label="LinkedIn"
            >
              <BaseIcon name="linkedin" sizeClass="w-4 h-4" />
            </a>
            <span
              v-else
              class="flex h-8 w-8 items-center justify-center rounded-lg border border-light-gray-border text-darker-gray/40"
              title="LinkedIn profili eklenecek"
            >
              <BaseIcon name="linkedin" sizeClass="w-4 h-4" />
            </span>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-navy-dark">Ürün</h3>
          <ul class="mt-4 space-y-3">
            <li v-for="link in productLinks" :key="link.to">
              <RouterLink :to="link.to" class="text-sm text-darker-gray hover:text-pink">
                {{ link.label }}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/cozumler" class="text-sm text-darker-gray hover:text-pink"
                >Çözümler</RouterLink
              >
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-navy-dark">Kaynaklar</h3>
          <ul class="mt-4 space-y-3">
            <li v-for="link in resourceLinks" :key="link.to">
              <RouterLink :to="link.to" class="text-sm text-darker-gray hover:text-pink">
                {{ link.label }}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/guvenlik" class="text-sm text-darker-gray hover:text-pink"
                >Güvenlik & Uyumluluk</RouterLink
              >
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-navy-dark">Yardım Merkezi</h3>
          <ul class="mt-4 space-y-3">
            <li v-for="link in helpLinks" :key="link.to">
              <RouterLink :to="link.to" class="text-sm text-darker-gray hover:text-pink">
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-navy-dark">Şirket</h3>
          <ul class="mt-4 space-y-3">
            <li v-for="link in companyLinks" :key="link.to">
              <RouterLink :to="link.to" class="text-sm text-darker-gray hover:text-pink">
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-12 flex flex-col gap-4 border-t border-light-gray-border pt-8 sm:flex-row sm:items-center sm:justify-between"
      >
        <p class="text-xs text-darker-gray/70">
          © {{ new Date().getFullYear() }} Galaksiya Bilişim. Tüm hakları saklıdır.
        </p>
        <ul class="flex flex-wrap gap-x-6 gap-y-2">
          <li v-for="link in legalLinks" :key="link.to">
            <RouterLink :to="link.to" class="text-xs text-darker-gray/70 hover:text-pink">
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
