<script setup>
import { RouterLink } from 'vue-router'
import LegalLayout from '@/components/layout/LegalLayout.vue'
import { locale, t } from '@/i18n'
</script>

<template>
  <LegalLayout
    :title="t({ en: 'KVKK Privacy Notice', tr: 'KVKK Aydınlatma Metni' })"
    :updated-at="t({ en: 'August 31, 2026', tr: '31 Ağustos 2026' })"
  >
    <template v-if="locale === 'tr'">
      <p>
        6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, veri sorumlusu sıfatıyla
        Galaksiya Bilişim tarafından işlenen kişisel verilerinize ilişkin olarak sizi bilgilendirmek
        isteriz.
      </p>
      <h2>Kişisel verilerin işlenme amacı</h2>
      <p>
        Web sitemiz üzerinden ilettiğiniz iletişim ve destek talebi formlarındaki ad, kurum, e-posta
        ve mesaj bilgileriniz; talebinizin değerlendirilmesi, sizinle iletişime geçilmesi ve talep
        edilen bilgilerin sunulması amacıyla işlenir.
      </p>
      <h2>Kişisel verilerin aktarılması</h2>
      <p>
        Kişisel verileriniz, yasal yükümlülüklerimiz dışında yurt içinde veya yurt dışında üçüncü
        kişilerle paylaşılmaz; yalnızca hizmetin sunulmasını sağlayan teknik altyapı
        sağlayıcılarımızla sınırlı ölçüde paylaşılabilir.
      </p>
      <h2>Kişisel veri sahibinin hakları</h2>
      <ul>
        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
        <li>İşlenmişse buna ilişkin bilgi talep etme</li>
        <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
        <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
        <li>KVKK'da öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme</li>
      </ul>
      <p>
        Haklarınızı kullanmak için
        <RouterLink to="/contact" class="text-pink underline">iletişim sayfamız</RouterLink>
        üzerinden bize ulaşabilirsiniz.
      </p>
    </template>
    <template v-else>
      <p>
        Pursuant to the Turkish Personal Data Protection Law No. 6698 ("KVKK"), Galaksiya Bilişim,
        in its capacity as data controller, would like to inform you about the personal data it
        processes about you.
      </p>
      <h2>Purpose of processing personal data</h2>
      <p>
        The name, organization, email and message information you submit through the contact and
        support request forms on our website is processed in order to evaluate your request, contact
        you and provide the information you have requested.
      </p>
      <h2>Transfer of personal data</h2>
      <p>
        Your personal data is not shared with third parties in Türkiye or abroad, except for our
        legal obligations; it may be shared, to a limited extent, only with the technical
        infrastructure providers that enable us to deliver the service.
      </p>
      <h2>Rights of the data subject</h2>
      <ul>
        <li>To learn whether your personal data is being processed</li>
        <li>If it has been processed, to request information about it</li>
        <li>To learn the purpose of processing and whether it is used in line with that purpose</li>
        <li>To request correction if it has been processed incompletely or inaccurately</li>
        <li>To request its deletion or destruction under the conditions set out in KVKK</li>
      </ul>
      <p>
        To exercise your rights, you can reach us through our
        <RouterLink to="/contact" class="text-pink underline">contact page</RouterLink>.
      </p>
    </template>
  </LegalLayout>
</template>
