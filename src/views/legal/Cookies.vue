<script setup>
import LegalLayout from '@/components/layout/LegalLayout.vue'
import { locale, t } from '@/i18n'
</script>

<template>
  <LegalLayout
    :title="t({ en: 'Cookie Policy', tr: 'Çerez Politikası' })"
    :updated-at="t({ en: 'August 31, 2026', tr: '31 Ağustos 2026' })"
  >
    <template v-if="locale === 'tr'">
      <p>
        Bu Çerez Politikası, convexweb.galaksiya.net kurumsal web sitesinde kullanılan çerezleri ve
        benzer teknolojileri açıklar.
      </p>
      <h2>Çerez nedir?</h2>
      <p>
        Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınıza kaydedilen küçük metin
        dosyalarıdır; sitenin düzgün çalışmasını ve deneyiminizin iyileştirilmesini sağlar.
      </p>
      <h2>Kullandığımız çerez türleri</h2>
      <ul>
        <li>
          <strong>Zorunlu çerezler:</strong> Sitenin temel işlevleri (ör. menü durumu) için
          gereklidir.
        </li>
        <li>
          <strong>Analitik çerezler:</strong> Sitenin nasıl kullanıldığını anlamamıza yardımcı olur.
        </li>
      </ul>
      <h2>Tercihlerinizi yönetme</h2>
      <p>
        Tarayıcı ayarlarınızdan çerezleri yönetebilir veya silebilirsiniz. Zorunlu çerezlerin devre
        dışı bırakılması, sitenin bazı bölümlerinin beklendiği gibi çalışmamasına neden olabilir.
      </p>
    </template>
    <template v-else>
      <p>
        This Cookie Policy explains the cookies and similar technologies used on the
        convexweb.galaksiya.net corporate website.
      </p>
      <h2>What is a cookie?</h2>
      <p>
        Cookies are small text files saved to your browser when you visit a website; they help the
        site work properly and improve your experience.
      </p>
      <h2>Types of cookies we use</h2>
      <ul>
        <li>
          <strong>Strictly necessary cookies:</strong> Required for the site’s core functions (e.g.
          menu state).
        </li>
        <li><strong>Analytics cookies:</strong> Help us understand how the site is used.</li>
      </ul>
      <h2>Managing your preferences</h2>
      <p>
        You can manage or delete cookies from your browser settings. Disabling strictly necessary
        cookies may cause some parts of the site not to work as expected.
      </p>
    </template>
  </LegalLayout>
</template>
