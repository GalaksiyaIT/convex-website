// Central nav model — mirrors the sitemap in Convex_Site_Plani.pdf so header,
// footer and mobile menu stay in sync with a single source of truth.
// Labels/descriptions are `{ en, tr }` pairs; resolve them with `t()` from '@/i18n'.

export const productLinks = [
  {
    to: '/urun',
    label: { en: 'Overview', tr: 'Genel Bakış' },
    description: { en: 'End-to-end AutoML workflow', tr: 'Uçtan uca AutoML akışı' },
  },
  {
    to: '/urun/veri-yonetimi',
    label: { en: 'Data Management', tr: 'Veri Yönetimi' },
    description: {
      en: 'Data ingestion, merging, versioning, synthetic data',
      tr: 'Veri alma, birleştirme, sürümleme, sentetik veri',
    },
  },
  {
    to: '/urun/experiment-pipeline',
    label: { en: 'Experiment Pipeline', tr: 'Experiment Pipeline' },
    description: {
      en: 'Data preparation, feature engineering, model training',
      tr: 'Veri hazırlama, feature engineering, model eğitimi',
    },
  },
  {
    to: '/urun/ozel-modeller',
    label: { en: 'Custom Models', tr: 'Özel Modeller' },
    description: {
      en: 'Import, version and retrain external models',
      tr: 'Dış modelleri getirme, sürümleme, yeniden eğitim',
    },
  },
  {
    to: '/urun/model-governance',
    label: { en: 'Model Governance', tr: 'Model Governance' },
    description: {
      en: 'Interpretation, reports, audit log, scorecard',
      tr: 'Yorumlama, raporlar, denetim kaydı, skor kartı',
    },
  },
  {
    to: '/urun/deployment',
    label: { en: 'Deployment & Application', tr: 'Deployment & Application' },
    description: {
      en: 'Go-live, monitoring, API and batch scoring',
      tr: 'Canlıya alma, izleme, API ve batch skorlama',
    },
  },
  {
    to: '/urun/eklentiler',
    label: { en: 'Extensions', tr: 'Eklentiler' },
    description: {
      en: 'Data source and algorithm integrations',
      tr: 'Veri kaynağı ve algoritma entegrasyonları',
    },
  },
]

export const resourceLinks = [
  {
    to: '/referanslar',
    label: { en: 'References', tr: 'Referanslar' },
    description: { en: 'Customer quotes', tr: 'Müşteri alıntıları' },
  },
  {
    to: '/vaka-calismalari',
    label: { en: 'Case Studies', tr: 'Vaka Çalışmaları' },
    description: { en: 'In-depth success stories', tr: 'Detaylı başarı hikayeleri' },
  },
  {
    to: '/blog',
    label: { en: 'Blog', tr: 'Blog' },
    description: {
      en: 'Articles on AutoML and model risk management',
      tr: 'AutoML ve model risk yönetimi yazıları',
    },
  },
]

export const primaryNav = [
  { key: 'product', to: '/urun', label: { en: 'Product', tr: 'Ürün' }, children: productLinks },
  { key: 'solutions', to: '/cozumler', label: { en: 'Solutions', tr: 'Çözümler' } },
  { key: 'why', to: '/neden-convex', label: { en: 'Why Convex', tr: 'Neden Convex' } },
  {
    key: 'security',
    to: '/guvenlik',
    label: { en: 'Security & Compliance', tr: 'Güvenlik & Uyumluluk' },
  },
  {
    key: 'resources',
    to: '/blog',
    label: { en: 'Resources', tr: 'Kaynaklar' },
    children: resourceLinks,
  },
]

export const helpLinks = [
  { to: '/yardim', label: { en: 'Help Center', tr: 'Yardım Merkezi' } },
  { to: '/yardim/baslangic', label: { en: 'Getting Started', tr: 'Başlangıç Kılavuzu' } },
  { to: '/yardim/dokumantasyon', label: { en: 'Documentation', tr: 'Dokümantasyon' } },
  { to: '/yardim/videolar', label: { en: 'Video Tutorials', tr: 'Video Eğitimler' } },
  { to: '/yardim/surum-notlari', label: { en: 'Release Notes', tr: 'Sürüm Notları' } },
  { to: '/yardim/destek', label: { en: 'Support Request', tr: 'Destek Talebi' } },
]

export const legalLinks = [
  { to: '/gizlilik-politikasi', label: { en: 'Privacy Policy', tr: 'Gizlilik Politikası' } },
  {
    to: '/kvkk-aydinlatma-metni',
    label: { en: 'KVKK Privacy Notice', tr: 'KVKK Aydınlatma Metni' },
  },
  { to: '/kullanim-sartlari', label: { en: 'Terms of Use', tr: 'Kullanım Şartları' } },
  { to: '/cerez-politikasi', label: { en: 'Cookie Policy', tr: 'Çerez Politikası' } },
]

export const companyLinks = [
  { to: '/hakkimizda', label: { en: 'About Us', tr: 'Hakkımızda' } },
  { to: '/iletisim', label: { en: 'Contact / Request a Demo', tr: 'İletişim / Demo Talebi' } },
]
