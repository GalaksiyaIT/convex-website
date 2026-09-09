<script setup>
import { RouterLink } from 'vue-router'
import LegalLayout from '@/components/layout/LegalLayout.vue'
</script>

<template>
  <LegalLayout title="KVKK Aydınlatma Metni" updated-at="31 Ağustos 2026">
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
      <RouterLink to="/iletisim" class="text-pink underline">iletişim sayfamız</RouterLink>
      üzerinden bize ulaşabilirsiniz.
    </p>
  </LegalLayout>
</template>
