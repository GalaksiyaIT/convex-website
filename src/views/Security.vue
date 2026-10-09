<script setup>
import { RouterLink } from 'vue-router'
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import AppButton from '@/components/ui/AppButton.vue'
import Card from '@/components/ui/Card.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import Badge from '@/components/ui/Badge.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'

const principles = [
  'Uçtan uca şifreleme',
  'On-Prem/Cloud seçeneği',
  'KVKK uyumlu süreç',
  'Rol bazlı erişim',
  'Tam denetim izi',
]

const topics = [
  {
    icon: 'lock',
    title: 'Veri Saklama ve Şifreleme',
    description: 'Veriler bekleme ve iletim sırasında şifrelenir; hassas alanlar maskelenebilir.',
  },
  {
    icon: 'server',
    title: 'On-Prem veya Cloud',
    description: 'Kendi veri merkezinizde ya da bulutta — tercih sizin.',
  },
  {
    icon: 'checkCircle',
    title: 'Sertifikasyonlar',
    description: 'Güvenlik değerlendirmeniz için gereken rapor ve belgeler paylaşılır.',
  },
  {
    icon: 'shield',
    title: 'KVKK Uyumu',
    description: 'Kişisel veri işleme, KVKK gereksinimlerine uygun tasarlanır.',
  },
  {
    icon: 'building',
    title: 'Erişim ve Yetkilendirme',
    description: 'Kimin hangi veriyi, modeli ve raporu göreceğini siz tanımlarsınız.',
  },
  {
    icon: 'gitBranch',
    title: 'Denetim İzi',
    description: 'Veri erişiminden model onayına, her işlem kayıt altında.',
  },
]
</script>

<template>
  <PageHero
    tone="dark"
    eyebrow="Güvenlik & Uyumluluk"
    title="Güvenlik ekibiniz sormadan, biz cevaplıyoruz"
    description="Kurumsal güvenlik ekiplerinin satın alma öncesi ilk sorduğu konuları topladık."
  >
    <template #actions>
      <AppButton to="/iletisim" showTrailingIcon>Demo Talep Et</AppButton>
      <AppButton to="/iletisim" variant="secondary">Güvenlik Dokümanı Talep Et (PDF)</AppButton>
    </template>
  </PageHero>

  <div class="border-b border-light-gray-border bg-navy-dark py-6">
    <Container>
      <div class="flex flex-wrap items-center justify-center gap-3">
        <Badge v-for="p in principles" :key="p" tone="pink">{{ p }}</Badge>
      </div>
    </Container>
  </div>

  <section class="py-20">
    <Container>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card v-for="t in topics" :key="t.title">
          <div
            class="flex h-11 w-11 items-center justify-center rounded-xl bg-very-light-pink text-pink"
          >
            <BaseIcon :name="t.icon" sizeClass="w-5 h-5" />
          </div>
          <h3 class="mt-4 text-base font-semibold text-navy-dark">{{ t.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-darker-gray">{{ t.description }}</p>
        </Card>
      </div>
    </Container>
  </section>

  <section class="bg-light-gray-bg py-20">
    <Container narrow>
      <SectionHeading
        align="center"
        eyebrow="Yasal"
        title="Aydınlatma metinleri ve politikalar"
        description="Kişisel veri işleme süreçlerimiz hakkında detaylı bilgiye aşağıdaki sayfalardan ulaşabilirsiniz."
      />
      <div class="mt-6 flex flex-wrap justify-center gap-4">
        <RouterLink
          to="/kvkk-aydinlatma-metni"
          class="text-sm font-medium text-pink hover:underline"
        >
          KVKK Aydınlatma Metni
        </RouterLink>
        <RouterLink to="/gizlilik-politikasi" class="text-sm font-medium text-pink hover:underline">
          Gizlilik Politikası
        </RouterLink>
      </div>
    </Container>
  </section>

  <CtaBanner
    title="Güvenlik ekibinizle bir görüşme planlayalım"
    description="Teknik güvenlik sorularınızı doğrudan mühendislik ekibimizle konuşabilirsiniz."
  />
</template>
