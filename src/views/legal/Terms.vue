<script setup>
import LegalLayout from '@/components/layout/LegalLayout.vue'
import { locale, t } from '@/i18n'
</script>

<template>
  <LegalLayout
    :title="t({ en: 'Terms of Use', tr: 'Kullanım Şartları' })"
    :updated-at="t({ en: 'August 31, 2026', tr: '31 Ağustos 2026' })"
  >
    <template v-if="locale === 'tr'">
      <p>
        Bu Kullanım Şartları, convex.ai kurumsal web sitesini ("Site") ziyaret eden veya kullanan
        herkes için geçerlidir. Siteyi kullanarak bu şartları kabul etmiş sayılırsınız.
      </p>
      <h2>Sitenin amacı</h2>
      <p>
        Site; Convex ürününü tanıtmak, mevcut müşterilere yardım kaynağı sunmak ve demo/iletişim
        taleplerini almak amacıyla işletilir. Convex ürününün kendisi, ayrı bir hizmet sözleşmesi
        kapsamında sunulur.
      </p>
      <h2>Fikri mülkiyet</h2>
      <p>
        Site üzerindeki tüm içerik, marka, logo ve tasarım unsurları Galaksiya Bilişim'e aittir ve
        ilgili fikri mülkiyet mevzuatı kapsamında korunur.
      </p>
      <h2>Sorumluluk sınırı</h2>
      <p>
        Site üzerindeki bilgiler genel bilgilendirme amaçlıdır. Galaksiya, sitede yer alan
        bilgilerin güncelliğini sağlamak için makul çabayı gösterir ancak kesinlik garantisi vermez.
      </p>
      <h2>Değişiklikler</h2>
      <p>
        Bu Kullanım Şartları zaman zaman güncellenebilir; güncel sürüm her zaman bu sayfada
        yayımlanır.
      </p>
    </template>
    <template v-else>
      <p>
        These Terms of Use apply to everyone who visits or uses the convex.ai corporate website (the
        "Site"). By using the Site, you are deemed to have accepted these terms.
      </p>
      <h2>Purpose of the Site</h2>
      <p>
        The Site is operated to introduce the Convex product, provide help resources to existing
        customers, and receive demo and contact requests. The Convex product itself is provided
        under a separate service agreement.
      </p>
      <h2>Intellectual property</h2>
      <p>
        All content, trademarks, logos and design elements on the Site belong to Galaksiya Bilişim
        and are protected under the applicable intellectual property legislation.
      </p>
      <h2>Limitation of liability</h2>
      <p>
        The information on the Site is provided for general informational purposes. Galaksiya makes
        reasonable efforts to keep the information on the Site up to date but does not guarantee its
        accuracy.
      </p>
      <h2>Changes</h2>
      <p>
        These Terms of Use may be updated from time to time; the current version is always published
        on this page.
      </p>
    </template>
  </LegalLayout>
</template>
