import { blogPosts } from '@/content/blogPosts'
import { docsGuides } from '@/content/docsGuides'

// Site geneli arama — blog, dokümantasyon ve ürün sayfalarını tek kutudan tarar
// (bkz. site planı "Ortak alanlar" bölümü). Bir arama backend'i olmadığı için
// statik bir indeks üzerinden istemci tarafında filtreleniyor.
const productPages = [
  { title: 'Ürün — Genel Bakış', description: 'Uçtan uca AutoML akışı', path: '/urun' },
  {
    title: 'Experiment Pipeline',
    description: 'Veri hazırlama, feature engineering, model eğitimi',
    path: '/urun/experiment-pipeline',
  },
  {
    title: 'Model Governance',
    description: 'Yorumlama, denetim, onay süreçleri',
    path: '/urun/model-governance',
  },
  {
    title: 'Deployment & Application',
    description: 'Modelleri canlıya alma ve uygulamalar',
    path: '/urun/deployment',
  },
  {
    title: 'Eklentiler',
    description: 'Veri kaynağı ve algoritma entegrasyonları',
    path: '/urun/eklentiler',
  },
  {
    title: 'Çözümler',
    description: 'Kredi skorlama, risk modelleme, model denetimi',
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
  { title: 'Video Eğitimler', description: 'Adım adım ekran kayıtları', path: '/yardim/videolar' },
  {
    title: 'Sürüm Notları',
    description: 'Yeni özellik ve iyileştirme duyuruları',
    path: '/yardim/surum-notlari',
  },
  { title: 'Destek Talebi', description: 'Ekibimize doğrudan ulaşın', path: '/yardim/destek' },
]

const docPages = docsGuides.flatMap((mod) =>
  mod.guides.map((guide) => ({
    title: guide,
    description: `Dokümantasyon · ${mod.title}`,
    path: '/yardim/dokumantasyon',
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
