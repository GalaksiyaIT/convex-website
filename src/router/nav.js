// Central nav model — mirrors the sitemap in Convex_Site_Plani.pdf so header,
// footer and mobile menu stay in sync with a single source of truth.
// Labels/descriptions are `{ en, tr }` pairs; resolve them with `t()` from '@/i18n'.

export const productLinks = [
  {
    to: '/product',
    label: { en: 'Overview', tr: 'Genel Bakış' },
    description: { en: 'End-to-end AutoML workflow', tr: 'Uçtan uca AutoML akışı' },
  },
  {
    to: '/product/data-management',
    label: { en: 'Data Management', tr: 'Veri Yönetimi' },
    description: {
      en: 'Data ingestion, merging, versioning, synthetic data',
      tr: 'Veri alma, birleştirme, sürümleme, sentetik veri',
    },
  },
  {
    to: '/product/experiment-pipeline',
    label: { en: 'Experiment Pipeline', tr: 'Experiment Pipeline' },
    description: {
      en: 'Data preparation, feature engineering, model training',
      tr: 'Veri hazırlama, feature engineering, model eğitimi',
    },
  },
  {
    to: '/product/custom-models',
    label: { en: 'Custom Models', tr: 'Özel Modeller' },
    description: {
      en: 'Import, version and retrain external models',
      tr: 'Dış modelleri getirme, sürümleme, yeniden eğitim',
    },
  },
  {
    to: '/product/model-governance',
    label: { en: 'Model Governance', tr: 'Model Governance' },
    description: {
      en: 'Interpretation, reports, audit log, scorecard',
      tr: 'Yorumlama, raporlar, denetim kaydı, skor kartı',
    },
  },
  {
    to: '/product/deployment',
    label: { en: 'Deployment & Application', tr: 'Deployment & Application' },
    description: {
      en: 'Go-live, monitoring, API and batch scoring',
      tr: 'Canlıya alma, izleme, API ve batch skorlama',
    },
  },
  {
    to: '/product/extensions',
    label: { en: 'Extensions', tr: 'Eklentiler' },
    description: {
      en: 'Data source and algorithm integrations',
      tr: 'Veri kaynağı ve algoritma entegrasyonları',
    },
  },
]

export const resourceLinks = [
  {
    to: '/references',
    label: { en: 'References', tr: 'Referanslar' },
    description: { en: 'Customer quotes', tr: 'Müşteri alıntıları' },
  },
  {
    to: '/case-studies',
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
  { key: 'product', to: '/product', label: { en: 'Product', tr: 'Ürün' }, children: productLinks },
  { key: 'solutions', to: '/solutions', label: { en: 'Solutions', tr: 'Çözümler' } },
  { key: 'why', to: '/why-convex', label: { en: 'Why Convex', tr: 'Neden Convex' } },
  {
    key: 'security',
    to: '/security',
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
  { to: '/help', label: { en: 'Help Center', tr: 'Yardım Merkezi' } },
  { to: '/help/getting-started', label: { en: 'Getting Started', tr: 'Başlangıç Kılavuzu' } },
  { to: '/help/documentation', label: { en: 'Documentation', tr: 'Dokümantasyon' } },
  { to: '/help/videos', label: { en: 'Video Tutorials', tr: 'Video Eğitimler' } },
  { to: '/help/release-notes', label: { en: 'Release Notes', tr: 'Sürüm Notları' } },
  { to: '/help/support', label: { en: 'Support Request', tr: 'Destek Talebi' } },
]

export const legalLinks = [
  { to: '/privacy-policy', label: { en: 'Privacy Policy', tr: 'Gizlilik Politikası' } },
  {
    to: '/kvkk-notice',
    label: { en: 'KVKK Privacy Notice', tr: 'KVKK Aydınlatma Metni' },
  },
  { to: '/terms-of-use', label: { en: 'Terms of Use', tr: 'Kullanım Şartları' } },
  { to: '/cookie-policy', label: { en: 'Cookie Policy', tr: 'Çerez Politikası' } },
]

export const companyLinks = [
  { to: '/about', label: { en: 'About Us', tr: 'Hakkımızda' } },
  { to: '/contact', label: { en: 'Contact / Request a Demo', tr: 'İletişim / Demo Talebi' } },
]
