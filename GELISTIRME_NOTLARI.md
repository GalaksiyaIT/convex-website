# Convex Web Sitesi — Geliştirme Notları

Bu doküman, `Convex_Site_Plani.pdf` sitemap'ine göre kurulan kurumsal web sitesinde yapılan
çalışmaları ve rakip/analog site incelemesinden hangi tasarım kararının hangi kaynaktan
esinlenildiğini kaydeder.

## 1. Genel Kurulum

- **Stack:** Vue 3 + Vite + Tailwind CSS v4, CMS yok (Strapi vb. kullanılmadı, tüm sayfalar
  `src/views` altında kod olarak yazıldı).
- **Renk paleti, font, component mimarisi:** `automl-ui-new` (Convex ürün arayüzü)
  reposundan birebir alındı — bkz. [src/style.css](src/style.css). Bu doküman boyunca
  yapılan hiçbir değişiklik renk paletine dokunmadı.
- **Marka logosu:** `automl-ui-new/src/assets/icons/logo.svg` dosyasının aslında
  "Experian × Convex" ortak markalı bir logo olduğu fark edildi (o iç araç belirli bir
  müşteri için beyaz etiketlenmiş); bu yüzden kopyalanmadı, paletin aynı renkleriyle
  bağımsız bir "convex" logotype üretildi — [LogoMark.vue](src/components/ui/LogoMark.vue).

## 2. Site Planına (PDF) Uyum

Sitemap'teki tüm sayfalar (Faz 1 + Faz 2) route'landı: Anasayfa, Ürün + 4 alt modül,
Çözümler, Neden Convex, Güvenlik & Uyumluluk, Blog, Referanslar, Vaka Çalışmaları,
Hakkımızda, İletişim, Yardım Merkezi + 5 alt sayfa, 4 yasal sayfa.

İlk taslak sonrası yapılan bir denetimde PDF'in içerik stratejisiyle birebir örtüşmeyen
noktalar bulunup düzeltildi:

| Bulgu | Düzeltme | Dosya |
|---|---|---|
| Anasayfa hero'da "Demo Talep Et" yanında ikinci bir "Ürünü incele" linki vardı — PDF "ikinci bir rakip CTA olmasın" diyor | İkinci link kaldırıldı, tek CTA bırakıldı | `src/views/Home.vue` |
| PDF, 3 modül özetini hero içinde, alıntıyı logo şeridinin hemen altında istiyor | Sayfa sırası buna göre yeniden düzenlendi | `src/views/Home.vue` |
| Ürün sayfasında 6 adımın sadece 2'sine müşteri alıntısı vardı | 6 adımın tamamına alıntı eklendi | `src/views/product/Product.vue` |
| İletişim formu "teşekkür sayfası" yerine sayfa içi mesaj gösteriyordu | Ayrı bir `/iletisim/tesekkur` route'u eklendi | `src/views/ContactThankYou.vue` |
| Dokümantasyon'daki "Hayır, destek talebi açmak istiyorum" butonu hiçbir yere gitmiyordu | `/yardim/destek`'e yönlendiren gerçek link yapıldı | `src/views/help/Documentation.vue` |
| Blog kartları tıklanamıyordu, "yazı sonunda ürün sayfasına geçiş" hiç yoktu | `/blog/:slug` detay sayfası + ilgili ürün sayfasına link eklendi | `src/views/BlogPost.vue`, `src/content/blogPosts.js` |
| Site geneli arama (ortak alanlar listesinde) hiç yoktu | Header'a ürün/blog/dokümantasyon/yardım sayfalarını tarayan arama kutusu eklendi | `src/components/layout/SiteSearch.vue`, `src/content/searchIndex.js` |
| Footer'da sosyal medya linki yoktu | LinkedIn ikonu eklendi (gerçek profil linki bilinmediği için şimdilik tıklanamaz yer tutucu) | `src/components/layout/SiteFooter.vue` |

**Hâlâ açık olan, kod ile çözülemeyecek maddeler** (PDF'in "Sonraki adımlar" bölümünden,
kullanıcı kararı gerektirir):
- İskeletin (Faz 1 sayfa listesi) onaylanması
- 2-3 gerçek referans müşterinin belirlenmesi (şu an tüm testimonial/vaka içeriği
  "Örnek Banka" gibi mock veridir)
- Dokümantasyonun ilk kapsamının gerçek destek talebi verisine göre seçilmesi
- Şirketin gerçek LinkedIn/sosyal medya URL'si

## 3. Rakip/Analog Site İncelemesi — Kimden Ne Alındı

Renk paletine dokunmadan, yalnızca **içerik yapısı ve sayfa iç yerleşimi** için üç site
incelendi: **DataRobot**, **H2O.ai**, **Domino Data Lab** (üçü de kurumsal/regüle sektör
odaklı AutoML/MLOps platformları).

| Kaynak | Gözlemlenen kalıp | Nereye uygulandı |
|---|---|---|
| H2O.ai (anasayfa) | Müşteri logosu şeridinin hero'nun hemen altında yer alması | Zaten mevcuttu, PDF'in kendi isteğiyle de örtüştüğü doğrulandı — `LogoStrip.vue` |
| H2O.ai (finans sektörü sayfası: "%70 Scam Reduction" + CDO alıntısı yan yana) | Büyük rakam ile alıntının birlikte, rakamın önce gösterilmesi | Anasayfa'da rakam şeridi + alıntı sıralaması — `src/views/Home.vue` |
| H2O.ai (finans sektörü sayfası: "Why Leading Banks Choose H2O.ai" 5'li ızgara) | Kısa başlık + tek cümlelik gerekçelerden oluşan hızlı-nedenler ızgarası | Çözümler sayfası "Bankalar Convex'i neden seçiyor" bölümü — `src/views/Solutions.vue` |
| H2O.ai (finans sektörü sayfası: KYC, loan automation, fraud investigation... uzun somut liste) | Onlarca kısa, somut kullanım senaryosunun tek ızgarada taranabilir şekilde sıralanması | Çözümler sayfası "Ve dahası" bölümü (12 senaryo) — `src/views/Solutions.vue` |
| Domino Data Lab (anasayfa: "50% reduction / 6X faster / 40% cost" 4'lü rakam bandı) | Büyük, kalın rakam + kısa açıklamadan oluşan istatistik şeridi bileşeni | Yeni `StatBand.vue` bileşeni; Anasayfa ve Model Governance sayfasında kullanıldı |
| Domino Data Lab (müşteri hikayeleri: "6 months → 6 days" gibi ultra-kısa önce/sonra özeti) | Tam vaka metninden önce, tek bakışta anlaşılan önce→sonra ifadesi | Vaka Çalışmaları'ndaki her kartın başına eklendi ("Haftalar → Günler" vb.) — `src/views/CaseStudies.vue` |
| Domino Data Lab (Model Risk Management sayfası: eyebrow + kalın başlık + paragraf blokları, ikon-kart yerine) | Bir yeteneğin daha uzun anlatılması gereken yerlerde kart yerine "nefes alan" blok düzeni | Model Governance sayfasının ilk 2 özelliği — `src/views/product/ModelGovernance.vue` |
| Domino Data Lab (Model Risk Management sayfası: "Legacy MRM systems lack full AI lifecycle governance...") | Yeteneklere geçmeden önce, mevcut/manuel sürecin neden yetersiz kaldığını kısaca çerçeveleme | Model Governance sayfasına "Mevcut süreç neden yetersiz kalıyor" bölümü eklendi |
| Domino Data Lab (gerçek regülasyon adlarını anma: SR 11-7, EU AI Act) | Jenerik "regülasyon" yerine somut çerçeve/otorite adı verme | Türkiye bankacılık bağlamına uyarlanarak Basel çerçevesi ve BDDK adı anıldı — `Solutions.vue`, `ModelGovernance.vue` |
| DataRobot (anasayfa) | İncelendi; site "agentic AI" mesajlaşmasına kaymış durumda, Convex'in AutoML/kredi skorlama odağıyla doğrudan örtüşen az sayıda kalıp vardı. 3 modül/persona kartı düzeni zaten bizim "Experiment Pipeline / Model Governance / Deployment" yapımızla örtüşüyordu — ek bir değişiklik yapılmadı |

**Bilinçli olarak alınmayan bir kalıp:** DataRobot'un anasayfasında yer alan "3X Leader in
the Gartner® Magic Quadrant™" gibi analist tanınırlığı rozetleri. Bu, mock/placeholder veri
(ör. "Örnek Banka" testimonial'ları) ile aynı kategoride değildir — gerçekte sahip
olunmayan bir üçüncü taraf onayını iddia etmek olur, bu yüzden hiçbir sayfaya eklenmedi.

## 4. Değiştirilmeyenler

- **Renk paleti** — `src/style.css`'teki `--color-*` token'ları kurulumdan bu yana hiç
  değişmedi.
- **Component mimarisi** — `<script setup>` composition API, Tailwind utility-first
  yaklaşım, `BaseIcon` deseni; hepsi `automl-ui-new` ile aynı çizgide kaldı.

## 5. Teknik/SEO/Erişilebilirlik Denetimi ve Düzeltmeleri

"Kodda ve sitede eksik kalan var mı?" sorusu üzerine yapılan ayrı bir teknik denetimde
bulunup düzeltilen maddeler:

| Bulgu | Düzeltme |
|---|---|
| `robots.txt` / `sitemap.xml` yoktu | `public/robots.txt`, `public/sitemap.xml` eklendi (placeholder domain: `convex.ai`) |
| Tüm sayfalar aynı `<title>`/meta description'ı paylaşıyordu | `src/router/index.js`'e her route için `meta.title`/`meta.description` + bunları `document.title` ve meta etiketine yazan bir `afterEach` hook'u eklendi; blog yazıları için başlık kendi içeriğinden türetiliyor |
| Open Graph / Twitter Card etiketi yoktu | `index.html`'e statik varsayılanlar eklendi (not: site SSR/prerender kullanmadığı için bunlar route bazında değişmez — bkz. Bilinen Sınırlamalar) |
| `.env.example` yoktu | Eklendi (`VITE_APP_URL`) |
| Header'daki Ürün/Kaynaklar açılır menüleri sadece mouse hover ile açılıyordu | `focusin`/`focusout`/`Escape` ve `aria-haspopup`/`aria-expanded` eklendi — klavye ile gezinilebilir hale geldi (dokunmatik/tablet için hâlâ kısmi, aşağıya bakın) |
| Arama modal'ında `role`/`aria-modal`/odak tuzağı yoktu | `SiteSearch.vue`'ya `role="dialog"`, `aria-modal="true"`, `aria-label` ve Tab tuşunu modal içinde döngüleyen basit bir odak tuzağı eklendi |
| Bazı dosyalarda küçük harf `router-link`, geri kalanında `RouterLink` bileşeni | `Blog.vue`'da düzeltildi; `Kvkk.vue`, `Privacy.vue`, `Terms.vue` için bkz. Bilinen Sınırlamalar (ortam sorunu) |

## 6. Bilinen Sınırlamalar

- Tüm testimonial, vaka çalışması ve blog içeriği **mock/placeholder** veridir ("Örnek
  Banka", "A. Yılmaz" vb.) — gerçek referans müşteri onayı alındıkça güncellenmelidir.
- İletişim ve Destek formları henüz bir backend'e bağlı değildir (istemci tarafında kalan
  bir akış).
- Footer'daki LinkedIn ikonu gerçek bir profile bağlı değildir.
- Site, SSR/prerender kullanmayan saf bir Vite SPA'dır. Blog gibi organik SEO trafiği
  hedefleyen sayfalar için bu, arama motoru indexleme açısından ideal değildir; ayrıca
  paylaşım kartlarındaki (WhatsApp/LinkedIn önizlemesi) başlık/açıklama her zaman
  `index.html`'deki statik varsayılanı gösterir, route'a özel değişmez. İleride SSG
  (`vite-plugin-ssr`, Nuxt'a geçiş vb.) değerlendirilmeli.
- Production dağıtım config'i (nginx/Docker/Vercel/Netlify) henüz eklenmedi —
  `automl-ui-new`'in aksine bu repo şu an sadece `npm run build` çıktısını üretiyor.
  SPA olduğu için hosting tarafında tüm route'ları `index.html`'e yönlendiren bir
  rewrite kuralı gerekir.
- `/cerez-politikasi` sayfası "analitik çerezler" kullanıldığından bahsediyor ama site
  şu an hiçbir analytics/çerez izni (consent banner) kullanmıyor — sayfa içeriği ile
  gerçek durum arasında bir tutarsızlık var; ya sayfa metni güncellenmeli ya da
  gerçek bir çerez izni akışı eklenmeli.
- Anasayfadaki "ürün ekranı" tamamen CSS ile üretilmiş bir mockup'tır, gerçek bir Convex
  ekran görüntüsü değildir.
- Test dosyası yoktur (`automl-ui-new`'in aksine).
- ~~**Ortam anomalisi:** `src/views/legal/` klasöründeki dosyalar geçici olarak işletim
  sistemi seviyesinde yazma engeline takılmıştı.~~ Sorun kendiliğinden çözüldü; `Kvkk.vue` ve
  `Privacy.vue`'daki `router-link` kullanımları da `RouterLink` bileşenine çevrilerek geri
  kalan kod tabanıyla tutarlı hale getirildi.

## 7. Metin/Kopya Sıkılaştırma Turu

Rakip sitelerin (DataRobot, H2O.ai, Domino Data Lab) başlık/metin tarzı (vuruculuk, kısalık,
detay seviyesi) referans alınarak pazarlama sayfalarındaki başlık ve açıklamalar sadeleştirildi:
Home, Ürün, Çözümler, Neden Convex, Güvenlik, Model Governance, Experiment Pipeline,
Eklentiler, Hakkımızda, Vaka Çalışmaları, Başlangıç Kılavuzu. Uzun, çok maddeli cümleler
kısa/vurucu fragmanlara indirildi (ör. "Yorumlayın, denetleyin, onaylayın.",
"Kredi, risk, denetim — tek platform").

**Bilinçli olarak bu turun dışında tutulanlar:**
- **Referanslar sayfasındaki testimonial alıntıları** — bunlar gerçek kişi ağzından çıkan
  konuşma diliyle yazıldı; pazarlama diline çevirmek sahiciliğini azaltır.
- **Blog yazılarının gövde metni** (`src/content/blogPosts.js`) — bunlar SEO/organik trafik
  hedefleyen uzun-format içerik, kısa reklam metni değil.
- **Yardım Merkezi'nin işlevsel/dokümantasyon içeriği** (Dokümantasyon, Destek, Sürüm
  Notları gövde metinleri) — sadece PageHero başlık/açıklamaları sıkılaştırıldı, adım adım
  talimatlar netlik için olduğu gibi bırakıldı.
- **Yasal sayfalar** — hukuki/uyumluluk metni "vuruculuk" için kısaltılacak bir tür değil.
