<script setup>
import Container from '@/components/ui/Container.vue'
import PageHero from '@/components/sections/PageHero.vue'
import AppButton from '@/components/ui/AppButton.vue'
import Card from '@/components/ui/Card.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import CtaBanner from '@/components/sections/CtaBanner.vue'
import ProductVideo from '@/components/sections/ProductVideo.vue'

const capabilities = [
  {
    icon: 'rocket',
    title: 'Tek Tıkla Deploy',
    description:
      'Build edilen uygulamayı seçtiğiniz ortama tek tıkla dağıtın; ek entegrasyon yükü yok.',
  },
  {
    icon: 'workflow',
    title: 'Applications',
    description:
      'Canlıya alınacak modelleri bir uygulama altında toplayın; build edilen modeller uygulamaya bağlanır ve birlikte dağıtılır.',
  },
  {
    icon: 'layers',
    title: 'Çıktı Seçenekleri',
    description:
      'Tahminle birlikte Raw Data, Intermediate Variables, Score Card ve SHAP Values çıktılarından ihtiyacınız olanları seçin.',
  },
  {
    icon: 'server',
    title: 'On-Prem veya Cloud',
    description:
      'Infrastructure ekranından kendi ortamlarınızı ekleyin; model kendi veri merkezinizde ya da bulutta çalışsın.',
  },
  {
    icon: 'barChart',
    title: 'Model Monitoring',
    description:
      "Auto Monitoring ile canlıdaki modelin performansını, PSI, VIF, korelasyon, SHAP, Confusion Matrix ve veri kalitesi analizlerini sürekli izleyin; Model Report'ta özetini görün.",
  },
  {
    icon: 'mail',
    title: 'Eşikler ve Uyarılar',
    description:
      'Monitoring Profiles ile metrik başına alt ve üst eşik tanımlayın; eşik aşılınca uyarı, düzenli raporlar ise zamanında e-postanıza gelsin.',
  },
  {
    icon: 'gitBranch',
    title: 'Champion / Challenger',
    description:
      'Yeniden eğitilen challenger modeli canlıdaki modelle karşılaştırın; daha iyiyse yeni sürümü dağıtın.',
  },
  {
    icon: 'plug',
    title: 'REST API ile Entegrasyon',
    description:
      'Canlıdaki model, predict uç noktalarıyla karar motorlarınıza ve çekirdek sistemlerinize skor sunar; Sample API Request ile örnek isteği hazır alın.',
  },
  {
    icon: 'database',
    title: 'Batch Skorlama',
    description:
      'Veritabanından okuyup modelden geçiren, sonuçları yine veritabanına yazan toplu skorlama akışları kurun.',
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

  <ProductVideo
    slug="tanitim-05-dagitim"
    title="Dağıtım ve izlemeyi videoda izleyin"
    description="Ortam ekleme, tek tıkla dağıtım, çıktı seçenekleri, otomatik izleme, Model Report ve REST API."
  />

  <ProductVideo
    slug="tanitim-06-batch"
    tone="white"
    eyebrow="Batch skorlama"
    title="Toplu skorlama, veritabanından veritabanına"
    description="Batch akışları veriyi veritabanından okur, modelden geçirir ve sonuçları yine veritabanına yazar — canlı API'ye gerek kalmadan büyük kayıt kümelerini skorlayın."
  />

  <CtaBanner
    title="Deploy sürecinizi kısaltın"
    description="Modelin canlıya alınmasından izleme ve toplu skorlamaya kadar tüm akışı bir demoda gösterelim."
  />
</template>
