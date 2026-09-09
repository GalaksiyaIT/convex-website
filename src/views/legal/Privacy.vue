<script setup>
import { RouterLink } from 'vue-router'
import LegalLayout from '@/components/layout/LegalLayout.vue'
</script>

<template>
  <LegalLayout title="Gizlilik Politikası" updated-at="31 Ağustos 2026">
    <p>
      Bu Gizlilik Politikası, Galaksiya Bilişim ("Galaksiya", "biz") tarafından geliştirilen Convex
      platformunu ve kurumsal web sitesini kullanan ziyaretçi ve müşterilerimize ait bilgilerin
      nasıl toplandığını, kullanıldığını ve korunduğunu açıklar.
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
      <RouterLink to="/iletisim" class="text-pink underline">iletişim sayfamızdan</RouterLink>
      bize ulaşabilirsiniz. Kişisel verilerinizin işlenmesine dair haklarınız için
      <RouterLink to="/kvkk-aydinlatma-metni" class="text-pink underline"
        >KVKK Aydınlatma Metni</RouterLink
      >
      sayfasını inceleyebilirsiniz.
    </p>
  </LegalLayout>
</template>
