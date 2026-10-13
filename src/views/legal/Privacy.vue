<script setup>
import { RouterLink } from 'vue-router'
import LegalLayout from '@/components/layout/LegalLayout.vue'
import { locale, t } from '@/i18n'
</script>

<template>
  <LegalLayout
    :title="t({ en: 'Privacy Policy', tr: 'Gizlilik Politikası' })"
    :updated-at="t({ en: 'August 31, 2026', tr: '31 Ağustos 2026' })"
  >
    <template v-if="locale === 'tr'">
      <p>
        Bu Gizlilik Politikası, Galaksiya Bilişim ("Galaksiya", "biz") tarafından geliştirilen
        Convex platformunu ve kurumsal web sitesini kullanan ziyaretçi ve müşterilerimize ait
        bilgilerin nasıl toplandığını, kullanıldığını ve korunduğunu açıklar.
      </p>
      <h2>Topladığımız bilgiler</h2>
      <p>
        Web sitemiz üzerinden demo talebi veya destek talebi formlarını doldurduğunuzda; ad, kurum,
        e-posta adresi ve ilettiğiniz mesaj içeriği tarafımızla paylaşılır. Site kullanımına dair
        teknik veriler (tarayıcı bilgisi, sayfa görüntülemeleri) analitik amaçlarla toplanabilir.
      </p>
      <h2>Bilgilerin kullanım amacı</h2>
      <ul>
        <li>Demo ve destek taleplerinize dönüş yapmak</li>
        <li>Ürün ve hizmetlerimizle ilgili talep ettiğiniz bilgileri iletmek</li>
        <li>Site deneyimini ve içeriğini iyileştirmek</li>
      </ul>
      <h2>Bilgilerin paylaşımı</h2>
      <p>
        Kişisel verileriniz, yasal zorunluluklar dışında üçüncü taraflarla paylaşılmaz. Hizmet
        sağlayıcılarımızla (ör. e-posta altyapısı) yalnızca hizmetin sunulması için gerekli ölçüde
        veri paylaşımı yapılabilir.
      </p>
      <h2>İletişim</h2>
      <p>
        Gizlilik uygulamalarımızla ilgili sorularınız için
        <RouterLink to="/contact" class="text-pink underline">iletişim sayfamızdan</RouterLink>
        bize ulaşabilirsiniz. Kişisel verilerinizin işlenmesine dair haklarınız için
        <RouterLink to="/kvkk-notice" class="text-pink underline">KVKK Aydınlatma Metni</RouterLink>
        sayfasını inceleyebilirsiniz.
      </p>
    </template>
    <template v-else>
      <p>
        This Privacy Policy explains how Galaksiya Bilişim ("Galaksiya", "we") collects, uses and
        protects information belonging to visitors and customers who use the Convex platform it
        develops and its corporate website.
      </p>
      <h2>Information we collect</h2>
      <p>
        When you fill in the demo request or support request forms on our website, your name,
        organization, email address and the content of your message are shared with us. Technical
        data about site usage (browser information, page views) may be collected for analytics
        purposes.
      </p>
      <h2>How we use information</h2>
      <ul>
        <li>To respond to your demo and support requests</li>
        <li>To send you the information you request about our products and services</li>
        <li>To improve the site experience and content</li>
      </ul>
      <h2>Sharing of information</h2>
      <p>
        Your personal data is not shared with third parties except where required by law. Data may
        be shared with our service providers (e.g. email infrastructure) only to the extent
        necessary to provide the service.
      </p>
      <h2>Contact</h2>
      <p>
        For questions about our privacy practices, you can reach us through our
        <RouterLink to="/contact" class="text-pink underline">contact page</RouterLink>. For your
        rights regarding the processing of your personal data, please see the
        <RouterLink to="/kvkk-notice" class="text-pink underline">KVKK Privacy Notice</RouterLink>
        page.
      </p>
    </template>
  </LegalLayout>
</template>
