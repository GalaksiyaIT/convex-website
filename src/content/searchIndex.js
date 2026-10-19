import { getBlogPosts } from '@/content/blogPosts'
import { getDocsGuides } from '@/content/docsGuides'
import { getVideoGuides } from '@/content/videoGuides'
import { locale } from '@/i18n'

// Site geneli arama — blog, dokümantasyon ve ürün sayfalarını tek kutudan tarar
// (bkz. site planı "Ortak alanlar" bölümü). Bir arama backend'i olmadığı için
// statik bir indeks üzerinden istemci tarafında filtreleniyor. İndeks dil başına
// bir kez kurulup önbelleğe alınıyor.
const productPages = [
  {
    title: { en: 'Product — Overview', tr: 'Ürün — Genel Bakış' },
    description: { en: 'End-to-end AutoML workflow', tr: 'Uçtan uca AutoML akışı' },
    path: '/product',
  },
  {
    title: { en: 'Data Management', tr: 'Veri Yönetimi' },
    description: {
      en: 'Data ingestion, joining, versioning, synthetic data',
      tr: 'Veri alma, birleştirme, sürümleme, sentetik veri',
    },
    path: '/product/data-management',
  },
  {
    title: { en: 'Custom Models', tr: 'Özel Modeller' },
    description: {
      en: 'Importing external models, versioning, retraining',
      tr: 'Dış modelleri getirme, sürümleme, yeniden eğitim',
    },
    path: '/product/custom-models',
  },
  {
    title: 'Experiment Pipeline',
    description: {
      en: 'Data preparation, feature engineering, model training',
      tr: 'Veri hazırlama, feature engineering, model eğitimi',
    },
    path: '/product/experiment-pipeline',
  },
  {
    title: 'Model Governance',
    description: {
      en: 'Interpretation, reports, audit log, scorecard',
      tr: 'Yorumlama, raporlar, denetim kaydı, skor kartı',
    },
    path: '/product/model-governance',
  },
  {
    title: 'Deployment & Application',
    description: {
      en: 'Go-live, monitoring, API and batch scoring',
      tr: 'Canlıya alma, izleme, API ve batch skorlama',
    },
    path: '/product/deployment',
  },
  {
    title: { en: 'Extensions', tr: 'Eklentiler' },
    description: {
      en: 'Data source and algorithm integrations',
      tr: 'Veri kaynağı ve algoritma entegrasyonları',
    },
    path: '/product/extensions',
  },
  {
    title: { en: 'Solutions', tr: 'Çözümler' },
    description: {
      en: 'Predictive modeling, risk modeling, model auditing',
      tr: 'Tahmin modelleme, risk modelleme, model denetimi',
    },
    path: '/solutions',
  },
  {
    title: { en: 'Why Convex', tr: 'Neden Convex' },
    description: {
      en: 'Straight answers to common objections',
      tr: 'Sık sorulan itirazlara doğrudan cevaplar',
    },
    path: '/why-convex',
  },
  {
    title: { en: 'Security & Compliance', tr: 'Güvenlik & Uyumluluk' },
    description: {
      en: 'Data retention, on-prem/cloud, KVKK compliance',
      tr: 'Veri saklama, on-prem/cloud, KVKK uyumu',
    },
    path: '/security',
  },
]

const helpPages = [
  {
    title: { en: 'Help Center', tr: 'Yardım Merkezi' },
    description: {
      en: 'Entry point with FAQs and search',
      tr: 'SSS ve arama ile giriş noktası',
    },
    path: '/help',
  },
  {
    title: { en: 'Getting Started Guide', tr: 'Başlangıç Kılavuzu' },
    description: {
      en: 'Day-one setup and basic usage steps',
      tr: 'İlk gün kurulum ve temel kullanım adımları',
    },
    path: '/help/getting-started',
  },
  {
    title: { en: 'Release Notes', tr: 'Sürüm Notları' },
    description: {
      en: 'New feature and improvement announcements',
      tr: 'Yeni özellik ve iyileştirme duyuruları',
    },
    path: '/help/release-notes',
  },
  {
    title: { en: 'Support Request', tr: 'Destek Talebi' },
    description: { en: 'Reach our team directly', tr: 'Ekibimize doğrudan ulaşın' },
    path: '/help/support',
  },
]

const labels = {
  en: {
    product: 'Product',
    blog: 'Blog',
    videos: 'Video Tutorials',
    docs: 'Documentation',
    help: 'Help Center',
  },
  tr: {
    product: 'Ürün',
    blog: 'Blog',
    videos: 'Video Eğitimler',
    docs: 'Dokümantasyon',
    help: 'Yardım Merkezi',
  },
}

const pick = (value, lang) =>
  value != null && typeof value === 'object' ? (value[lang] ?? value.en) : value

const cache = {}

export function buildSearchIndex(lang) {
  if (cache[lang]) return cache[lang]
  const l = labels[lang] ?? labels.en
  const localize = (p) => ({
    ...p,
    title: pick(p.title, lang),
    description: pick(p.description, lang),
  })

  // Her video eğitimi kendi yazılı sayfasıyla ayrı ayrı aranabilir (blogEntries ile aynı desen).
  // Bölüm filmleri listede yok ama kendi sayfalarıyla aranabilir.
  const videoEntries = getVideoGuides(lang)
    .filter((v) => !v.hidden || v.chapter)
    .map((v) => ({
      title: v.title,
      description: `${l.videos} · ${v.module}`,
      path: `/help/videos/${v.slug}`,
    }))

  const docPages = getDocsGuides(lang).flatMap((mod) =>
    mod.guides.map((guide) => ({
      title: guide.title,
      description: `${l.docs} · ${mod.title}`,
      path: guide.video ? `/help/videos/${guide.video}` : '/help/documentation',
    })),
  )

  const blogEntries = getBlogPosts(lang).map((post) => ({
    title: post.title,
    description: `${l.blog} · ${post.tag}`,
    path: `/blog/${post.slug}`,
  }))

  cache[lang] = [
    ...productPages.map((p) => ({ ...localize(p), category: l.product })),
    ...blogEntries.map((p) => ({ ...p, category: l.blog })),
    ...videoEntries.map((p) => ({ ...p, category: l.videos })),
    ...docPages.map((p) => ({ ...p, category: l.docs })),
    ...helpPages.map((p) => ({ ...localize(p), category: l.help })),
  ]
  return cache[lang]
}

export function searchSite(query) {
  const lang = locale.value
  const q = query.trim().toLocaleLowerCase(lang)
  if (!q) return []
  return buildSearchIndex(lang)
    .filter(
      (item) =>
        item.title.toLocaleLowerCase(lang).includes(q) ||
        item.description.toLocaleLowerCase(lang).includes(q),
    )
    .slice(0, 20)
}
