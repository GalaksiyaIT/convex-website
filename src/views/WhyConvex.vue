<script setup>
import { RouterLink } from 'vue-router'
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import AppButton from '@/components/ui/AppButton.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'

const objections = [
  {
    q: 'Manuel/Excel scorecard sürecimize kıyasla ne değişir?',
    a: "Excel'deki veya dağınık scriptlerdeki adımlar, Convex'te tek izlenebilir akışa taşınır — aynı işi yapıyorsunuz, ama artık kim neyi ne zaman değiştirdiğini görebiliyorsunuz.",
  },
  {
    q: 'Ekibimiz kod yazmadan kullanabilir mi?',
    a: 'Evet. Risk ve kredi analistleri, veri bilimci desteği olmadan görsel arayüzden deney kurabilir. İleri düzey kullanıcı isterse parametrelere ince ayar yapar.',
  },
  {
    q: 'Mevcut sistemlerimizle nasıl konuşur?',
    a: 'Çekirdek bankacılık sistemleri, veri ambarları ve karar motorlarıyla API üzerinden konuşur. Detaylar Eklentiler sayfasında.',
    to: '/urun/eklentiler',
    linkLabel: 'Eklentiler sayfasına git',
  },
  {
    q: 'Verimiz nerede duruyor?',
    a: 'On-prem veya cloud — verinizin nerede tutulacağına siz karar verirsiniz. Şifreleme ve KVKK detayları Güvenlik & Uyumluluk sayfasında.',
    to: '/guvenlik',
    linkLabel: 'Güvenlik & Uyumluluk sayfasına git',
  },
]
</script>

<template>
  <PageHero
    eyebrow="Neden Convex"
    title="Sormaktan çekindiğiniz sorulara, dürüst cevaplar"
    description="Satış sürecini kısaltmak için itirazları önden karşılıyoruz."
  >
    <template #actions>
      <AppButton to="/iletisim" showTrailingIcon>Demo Talep Et</AppButton>
    </template>
  </PageHero>

  <section class="py-20">
    <Container narrow>
      <div class="space-y-4">
        <details
          v-for="o in objections"
          :key="o.q"
          class="group rounded-2xl border border-light-gray-border p-6 open:bg-very-light-pink/30"
          open
        >
          <summary
            class="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy-dark"
          >
            {{ o.q }}
            <BaseIcon
              name="chevronDown"
              sizeClass="w-4 h-4 flex-shrink-0 transition-transform group-open:rotate-180"
            />
          </summary>
          <p class="mt-3 text-sm leading-relaxed text-darker-gray">{{ o.a }}</p>
          <RouterLink
            v-if="o.to"
            :to="o.to"
            class="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-pink"
          >
            {{ o.linkLabel }}
            <BaseIcon name="arrowRight" sizeClass="w-3.5 h-3.5" />
          </RouterLink>
        </details>
      </div>
    </Container>
  </section>

  <CtaBanner
    title="Satış ekibinizle bu sayfayı paylaşın"
    description="Neden Convex sayfası, karar sürecinde ekibinizin ihtiyaç duyduğu itiraz karşılıklarını tek yerde toplar."
  />
</template>
