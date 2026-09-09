<script setup>
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import AppButton from '@/components/ui/AppButton.vue'
import Card from '@/components/ui/Card.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'

const capabilities = [
  {
    icon: 'rocket',
    title: 'Tek Tıkla Deploy',
    description: 'Onaylanan modeli, ek entegrasyon yükü olmadan skorlama servisine bağlayın.',
  },
  {
    icon: 'workflow',
    title: 'Application Oluşturma',
    description:
      'Model çıktısını iş birimlerinin kullanacağı bir uygulamaya (scorecard, karar ekranı) dönüştürün.',
  },
  {
    icon: 'server',
    title: 'On-Prem veya Cloud',
    description:
      'Kurumun altyapı tercihine göre modeli kendi veri merkezinizde ya da bulutta çalıştırın.',
  },
  {
    icon: 'barChart',
    title: 'Canlı Performans İzleme',
    description: 'Skor dağılımı, yanıt süresi ve model sapmasını canlı ortamda sürekli izleyin.',
  },
  {
    icon: 'gitBranch',
    title: 'Kademeli Geçiş',
    description:
      'Yeni modeli mevcut model ile paralel çalıştırıp (champion/challenger) kademeli geçiş yapın.',
  },
  {
    icon: 'plug',
    title: 'API ile Entegrasyon',
    description:
      'Skorlama sonucunu mevcut karar motorlarınıza ve çekirdek bankacılık sistemlerinize API ile aktarın.',
  },
]
</script>

<template>
  <PageHero
    eyebrow="Ürün · Deployment & Application"
    title="Onaylanan modeli dakikalar içinde üretime alın"
    description="Deployment & Application, governance'tan geçen modeli operasyonel bir karar sürecine dönüştürür — entegrasyon karmaşası olmadan."
  >
    <template #actions>
      <AppButton to="/iletisim" showTrailingIcon>Demo Talep Et</AppButton>
    </template>
  </PageHero>

  <section class="py-20">
    <Container>
      <SectionHeading eyebrow="Yetenekler" title="Modelden operasyona" />
      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card v-for="c in capabilities" :key="c.title">
          <div
            class="flex h-11 w-11 items-center justify-center rounded-xl bg-very-light-pink text-pink"
          >
            <BaseIcon :name="c.icon" sizeClass="w-5 h-5" />
          </div>
          <h3 class="mt-4 text-base font-semibold text-navy-dark">{{ c.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-darker-gray">{{ c.description }}</p>
        </Card>
      </div>
    </Container>
  </section>

  <CtaBanner
    title="Deploy sürecinizi kısaltın"
    description="Modelin canlıya alınmasından skorlama uygulamasına kadar tüm akışı bir demoda gösterelim."
  />
</template>
