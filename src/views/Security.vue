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
import { computed } from 'vue'
import { useCopy } from '@/i18n'

const topicIcons = ['lock', 'server', 'checkCircle', 'shield', 'building', 'gitBranch']

const c = useCopy({
  en: {
    principles: [
      'End-to-end encryption',
      'On-Prem/Cloud option',
      'KVKK-compliant process',
      'Role-based access',
      'Complete audit trail',
    ],
    topics: [
      {
        title: 'Data Storage and Encryption',
        description: 'Data is encrypted at rest and in transit; sensitive fields can be masked.',
      },
      {
        title: 'On-Prem or Cloud',
        description: 'In your own data center or in the cloud: your call.',
      },
      {
        title: 'Certifications',
        description: 'We share the reports and documents your security assessment requires.',
      },
      {
        title: 'KVKK Compliance',
        description:
          'Personal data processing is designed to meet the requirements of KVKK, Turkey’s Personal Data Protection Law.',
      },
      {
        title: 'Access and Authorization',
        description: 'You define who can see which data, models and reports.',
      },
      {
        title: 'Audit Trail',
        description: 'From data access to model approval, every action is logged.',
      },
    ],
    heroEyebrow: 'Security & Compliance',
    heroTitle: 'We answer before your security team has to ask',
    heroDescription:
      'Everything enterprise security teams ask first before a purchase, in one place.',
    heroCta: 'Request a Demo',
    securityDocCta: 'Request the Security Document (PDF)',
    legalEyebrow: 'Legal',
    legalTitle: 'Privacy notices and policies',
    legalDescription: 'For details on how we process personal data, see the pages below.',
    kvkkLink: 'KVKK Privacy Notice',
    privacyLink: 'Privacy Policy',
    ctaTitle: 'Let’s set up a call with your security team',
    ctaDescription: 'Discuss your technical security questions directly with our engineering team.',
  },
  tr: {
    principles: [
      'Uçtan uca şifreleme',
      'On-Prem/Cloud seçeneği',
      'KVKK uyumlu süreç',
      'Rol bazlı erişim',
      'Tam denetim izi',
    ],
    topics: [
      {
        title: 'Veri Saklama ve Şifreleme',
        description:
          'Veriler bekleme ve iletim sırasında şifrelenir; hassas alanlar maskelenebilir.',
      },
      {
        title: 'On-Prem veya Cloud',
        description: 'Kendi veri merkezinizde ya da bulutta — tercih sizin.',
      },
      {
        title: 'Sertifikasyonlar',
        description: 'Güvenlik değerlendirmeniz için gereken rapor ve belgeler paylaşılır.',
      },
      {
        title: 'KVKK Uyumu',
        description: 'Kişisel veri işleme, KVKK gereksinimlerine uygun tasarlanır.',
      },
      {
        title: 'Erişim ve Yetkilendirme',
        description: 'Kimin hangi veriyi, modeli ve raporu göreceğini siz tanımlarsınız.',
      },
      {
        title: 'Denetim İzi',
        description: 'Veri erişiminden model onayına, her işlem kayıt altında.',
      },
    ],
    heroEyebrow: 'Güvenlik & Uyumluluk',
    heroTitle: 'Güvenlik ekibiniz sormadan, biz cevaplıyoruz',
    heroDescription:
      'Kurumsal güvenlik ekiplerinin satın alma öncesi ilk sorduğu konuları topladık.',
    heroCta: 'Demo Talep Et',
    securityDocCta: 'Güvenlik Dokümanı Talep Et (PDF)',
    legalEyebrow: 'Yasal',
    legalTitle: 'Aydınlatma metinleri ve politikalar',
    legalDescription:
      'Kişisel veri işleme süreçlerimiz hakkında detaylı bilgiye aşağıdaki sayfalardan ulaşabilirsiniz.',
    kvkkLink: 'KVKK Aydınlatma Metni',
    privacyLink: 'Gizlilik Politikası',
    ctaTitle: 'Güvenlik ekibinizle bir görüşme planlayalım',
    ctaDescription:
      'Teknik güvenlik sorularınızı doğrudan mühendislik ekibimizle konuşabilirsiniz.',
  },
})

const topics = computed(() => c.value.topics.map((t, i) => ({ ...t, icon: topicIcons[i] })))
</script>

<template>
  <PageHero
    tone="dark"
    :eyebrow="c.heroEyebrow"
    :title="c.heroTitle"
    :description="c.heroDescription"
  >
    <template #actions>
      <AppButton to="/contact" showTrailingIcon>{{ c.heroCta }}</AppButton>
      <AppButton to="/contact" variant="secondary">{{ c.securityDocCta }}</AppButton>
    </template>
  </PageHero>

  <div class="border-b border-light-gray-border bg-navy-dark py-6">
    <Container>
      <div class="flex flex-wrap items-center justify-center gap-3">
        <Badge v-for="p in c.principles" :key="p" tone="pink">{{ p }}</Badge>
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
        :eyebrow="c.legalEyebrow"
        :title="c.legalTitle"
        :description="c.legalDescription"
      />
      <div class="mt-6 flex flex-wrap justify-center gap-4">
        <RouterLink to="/kvkk-notice" class="text-sm font-medium text-pink hover:underline">
          {{ c.kvkkLink }}
        </RouterLink>
        <RouterLink to="/privacy-policy" class="text-sm font-medium text-pink hover:underline">
          {{ c.privacyLink }}
        </RouterLink>
      </div>
    </Container>
  </section>

  <CtaBanner :title="c.ctaTitle" :description="c.ctaDescription" />
</template>
