// Central nav model — mirrors the sitemap in Convex_Site_Plani.pdf so header,
// footer and mobile menu stay in sync with a single source of truth.

export const productLinks = [
  { to: '/urun', label: 'Genel Bakış', description: 'Uçtan uca AutoML akışı' },
  {
    to: '/urun/veri-yonetimi',
    label: 'Veri Yönetimi',
    description: 'Veri alma, birleştirme, sürümleme, sentetik veri',
  },
  {
    to: '/urun/experiment-pipeline',
    label: 'Experiment Pipeline',
    description: 'Veri hazırlama, feature engineering, model eğitimi',
  },
  {
    to: '/urun/ozel-modeller',
    label: 'Özel Modeller',
    description: 'Dış modelleri getirme, sürümleme, yeniden eğitim',
  },
  {
    to: '/urun/model-governance',
    label: 'Model Governance',
    description: 'Yorumlama, raporlar, denetim kaydı, skor kartı',
  },
  {
    to: '/urun/deployment',
    label: 'Deployment & Application',
    description: 'Canlıya alma, izleme, API ve batch skorlama',
  },
  {
    to: '/urun/eklentiler',
    label: 'Eklentiler',
    description: 'Veri kaynağı ve algoritma entegrasyonları',
  },
]

export const resourceLinks = [
  { to: '/referanslar', label: 'Referanslar', description: 'Müşteri alıntıları' },
  { to: '/vaka-calismalari', label: 'Vaka Çalışmaları', description: 'Detaylı başarı hikayeleri' },
  { to: '/blog', label: 'Blog', description: 'AutoML ve model risk yönetimi yazıları' },
]

export const primaryNav = [
  { to: '/urun', label: 'Ürün', children: productLinks },
  { to: '/cozumler', label: 'Çözümler' },
  { to: '/neden-convex', label: 'Neden Convex' },
  { to: '/guvenlik', label: 'Güvenlik & Uyumluluk' },
  { to: '/blog', label: 'Kaynaklar', children: resourceLinks },
]

export const helpLinks = [
  { to: '/yardim', label: 'Yardım Merkezi' },
  { to: '/yardim/baslangic', label: 'Başlangıç Kılavuzu' },
  { to: '/yardim/dokumantasyon', label: 'Dokümantasyon' },
  { to: '/yardim/videolar', label: 'Video Eğitimler' },
  { to: '/yardim/surum-notlari', label: 'Sürüm Notları' },
  { to: '/yardim/destek', label: 'Destek Talebi' },
]

export const legalLinks = [
  { to: '/gizlilik-politikasi', label: 'Gizlilik Politikası' },
  { to: '/kvkk-aydinlatma-metni', label: 'KVKK Aydınlatma Metni' },
  { to: '/kullanim-sartlari', label: 'Kullanım Şartları' },
  { to: '/cerez-politikasi', label: 'Çerez Politikası' },
]

export const companyLinks = [
  { to: '/hakkimizda', label: 'Hakkımızda' },
  { to: '/iletisim', label: 'İletişim / Demo Talebi' },
]
