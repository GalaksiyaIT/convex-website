# Convex — Kurumsal Web Sitesi

Convex ürününü tanıtan pazarlama sitesi ve mevcut müşteriler için yardım merkezi. Sitemap ve içerik
stratejisi `Convex_Site_Plani.pdf` dokümanına dayanır.

## Teknoloji

Vue 3 + Vite + Tailwind CSS v4 — renk paleti, font (Roboto) ve component mimarisi
`automl-ui-new` (Convex ürün arayüzü) ile aynı çizgide tutulacak şekilde kuruldu. Bir CMS
(Strapi vb.) kullanılmıyor; tüm sayfalar `src/views` altında kod olarak yazılıyor.

- `src/style.css` — marka renk token'ları (automl-ui-new/src/style.css ile birebir aynı)
- `src/components/ui` — buton, kart, badge gibi temel bileşenler
- `src/components/sections` — sayfalar arası tekrar eden bölümler (hero, CTA, alıntı vb.)
- `src/components/layout` — header, footer, yasal sayfa düzeni
- `src/router/nav.js` — site haritasının tek kaynağı (header/footer/mobil menü buradan beslenir)
- `src/views` — Faz 1 sayfaların tamamı + Faz 2 sayfaların ilk sürümü

## Geliştirme

Vite 7 / Tailwind v4'ün native bağımlılıkları **Node 20+** gerektirir (bkz. `package.json`
`engines`). Node 20+ kurulu değilse önce onu kurun (ör. `nvm install 20` veya
`brew install node@20`), ardından:

```bash
npm install
npm run dev
```

Sisteminizde birden fazla Node sürümü varsa ve `node -v` 20'nin altındaysa, komutların önüne
`PATH="<node-20-bin-dizini>:$PATH"` ekleyerek çalıştırın.

## Durum

Faz 1 (temel iskelet) sayfalarının tamamı gerçek içerikle yazıldı: Anasayfa, Ürün + 3 modül alt
sayfası, Çözümler, Neden Convex, Güvenlik & Uyumluluk, Hakkımızda, İletişim, yasal sayfalar, Yardım
Merkezi + Başlangıç Kılavuzu. Faz 2 sayfaları (Blog, Referanslar, Vaka Çalışmaları, Eklentiler,
Dokümantasyon, Video Eğitimler, Sürüm Notları, Destek Talebi) da ilk sürümleriyle mevcut; içerikleri
gerçek müşteri/vaka bilgisi geldikçe güncellenmeli. İletişim ve Destek formları henüz bir backend'e
bağlı değil.
