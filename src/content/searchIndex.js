import { blogPosts } from '@/content/blogPosts'
import { docsGuides } from '@/content/docsGuides'
import { videoGuides } from '@/content/videoGuides'

// Site geneli arama — blog, dokümantasyon ve ürün sayfalarını tek kutudan tarar
// (bkz. site planı "Ortak alanlar" bölümü). Bir arama backend'i olmadığı için
// statik bir indeks üzerinden istemci tarafında filtreleniyor.
const productPages = [
  { title: 'Ürün — Genel Bakış', description: 'Uçtan uca AutoML akışı', path: '/urun' },
  {
    title: 'Veri Yönetimi',
    description: 'Veri alma, birleştirme, sürümleme, sentetik veri',
    path: '/urun/veri-yonetimi',
  },
  {
    title: 'Özel Modeller',
    description: 'Dış modelleri getirme, sürümleme, yeniden eğitim',
    path: '/urun/ozel-modeller',
  },
  {
    title: 'Experiment Pipeline',
    description: 'Veri hazırlama, feature engineering, model eğitimi',
    path: '/urun/experiment-pipeline',
  },
  {
    title: 'Model Governance',
    description: 'Yorumlama, raporlar, denetim kaydı, skor kartı',
    path: '/urun/model-governance',
  },
  {
    title: 'Deployment & Application',
    description: 'Canlıya alma, izleme, API ve batch skorlama',
    path: '/urun/deployment',
  },
  {
    title: 'Eklentiler',
    description: 'Veri kaynağı ve algoritma entegrasyonları',
    path: '/urun/eklentiler',
  },
  {
    title: 'Çözümler',
    description: 'Tahmin modelleme, risk modelleme, model denetimi',
    path: '/cozumler',
  },
  {
    title: 'Neden Convex',
    description: 'Sık sorulan itirazlara doğrudan cevaplar',
    path: '/neden-convex',
  },
  {
    title: 'Güvenlik & Uyumluluk',
    description: 'Veri saklama, on-prem/cloud, KVKK uyumu',
    path: '/guvenlik',
  },
]

const helpPages = [
  { title: 'Yardım Merkezi', description: 'SSS ve arama ile giriş noktası', path: '/yardim' },
  {
    title: 'Başlangıç Kılavuzu',
    description: 'İlk gün kurulum ve temel kullanım adımları',
    path: '/yardim/baslangic',
  },
  {
    title: 'Sürüm Notları',
    description: 'Yeni özellik ve iyileştirme duyuruları',
    path: '/yardim/surum-notlari',
  },
  { title: 'Destek Talebi', description: 'Ekibimize doğrudan ulaşın', path: '/yardim/destek' },
]

// Her video eğitimi kendi yazılı sayfasıyla ayrı ayrı aranabilir (blogEntries ile aynı desen).
const videoEntries = videoGuides
  .filter((v) => !v.hidden)
  .map((v) => ({
    title: v.title,
    description: `Video Eğitimler · ${v.module}`,
    path: `/yardim/videolar/${v.slug}`,
  }))

const docPages = docsGuides.flatMap((mod) =>
  mod.guides.map((guide) => ({
    title: guide.title,
    description: `Dokümantasyon · ${mod.title}`,
    path: guide.video ? `/yardim/videolar/${guide.video}` : '/yardim/dokumantasyon',
  })),
)

const blogEntries = blogPosts.map((post) => ({
  title: post.title,
  description: `Blog · ${post.tag}`,
  path: `/blog/${post.slug}`,
}))

export const searchIndex = [
  ...productPages.map((p) => ({ ...p, category: 'Ürün' })),
  ...blogEntries.map((p) => ({ ...p, category: 'Blog' })),
  ...videoEntries.map((p) => ({ ...p, category: 'Video Eğitimler' })),
  ...docPages.map((p) => ({ ...p, category: 'Dokümantasyon' })),
  ...helpPages.map((p) => ({ ...p, category: 'Yardım Merkezi' })),
]

export function searchSite(query) {
  const q = query.trim().toLocaleLowerCase('tr')
  if (!q) return []
  return searchIndex
    .filter(
      (item) =>
        item.title.toLocaleLowerCase('tr').includes(q) ||
        item.description.toLocaleLowerCase('tr').includes(q),
    )
    .slice(0, 20)
}
