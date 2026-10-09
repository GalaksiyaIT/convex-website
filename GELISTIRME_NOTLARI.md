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

## 8. Canlı Eğitim Animasyonu (Yüzde + Dallanan Sinir Uçları)

`automl-ui-new`'deki `ModelRunning.vue` ekranının "Current Process" panelinden esinlenerek bir
"model eğitiliyor" animasyonu eklendi. `main` dalındaki `ModelRunning.vue`'da bu daire aslında
statik bir renkli daire + değişen bir sayıdan ibaret (gerçek bir animasyon değil); ama kullanıcı
elle çizdiği bir referans görselle ("yüzdenin çevresinde renkli dallanmalar") ısrar edince
`origin/modelRunningFix` adlı, henüz `main`'e alınmamış bir dalda gerçek kaynağı bulundu:
`src/views/ExperimentTraining/components/NeuralNetworkAnimation.vue`. O bileşen birebir taşındı:
[`src/components/ui/NeuralNetworkAnimation.vue`](src/components/ui/NeuralNetworkAnimation.vue).

Algoritma aynen korundu: merkezde bir ilerleme halkası + yüzde + durum etiketi ("ÇALIŞIYOR" /
"TAMAMLANDI"), çevresinde 5 renk kümesi (yeşil, mavi, mor, turuncu, kırmızı — automl-ui-new'in
kendi paleti, site markasının mor/pembesi değil, kaynağa sadık kalmak için birebir korundu), her
kümede "seeded random" ile üretilen 16 adet organik, dalgalı "tel/dal" (`buildHairPath`), bazı
dallarda nabız gibi atan uç noktaları, bazılarında da SVG `<animateMotion>` ile dal boyunca akan
küçük "sinyal" noktaları var. Orijinalde `progress` dışarıdan (gerçek API polling ile) besleniyordu;
burada tamamen dekoratif olduğu için yüzde `requestAnimationFrame` ile kendi içinde döngüsel
üretiliyor. `prefers-reduced-motion: reduce` tercih edilirse tüm animasyonlar durur (SVG'nin
native `pauseAnimations()` API'siyle SMIL animasyonları, CSS `animation-play-state` ile de
CSS animasyonları duraklatılıyor — orijinal bileşenin kendi duraklatma mekanizması).

(Bu son hale gelene kadar iki ara adım denenip kullanıcı geri bildirimiyle elendi: önce sadece
yüzde halkası + tamamlanma onay ikonu, sonra yüzdesiz/katmanlı bir "girdi→gizli katman→çıktı"
ağ diyagramı. Kullanıcının asıl istediği, ekran görüntüsüyle netleşen bu üçüncü tasarımdı.)

Üç yerde kullanıldı:
- [Home.vue](src/views/Home.vue) hero mockup'ında, önceden statik olan "Model Performansı — Gini"
  çubuk grafiğinin yerine "Model Eğitimi — Canlı" paneli.
- [ExperimentPipeline.vue](src/views/product/ExperimentPipeline.vue)'da "Çoklu Algoritma Eğitimi"
  yeteneğini somutlaştıran yeni bir "Canlı önizleme" bölümü (animasyon + algoritma/Gini listesi).
- [Solutions.vue](src/views/Solutions.vue)'da "Bankalar Convex'i neden seçiyor" başlığının
  yanında, hız iddiasını destekleyen küçük bir rozet (pill yerine, animasyona yer açmak için
  `rounded-2xl` bir kutuya çevrildi).

Animasyon tamamen dekoratiftir — gerçek bir eğitim sürecine bağlı değildir, sadece "dakikalar
içinde" hız iddiasını ve modelin arka planda aktif çalıştığı hissini görsel olarak pekiştirir.

## 9. Sayılarla Convex (Neden Convex sayfası)

Kullanıcının Masaüstü'ndeki gerçek dosyalardan (~/Downloads/Convex Go Brochure - Updated Dec
2025.pdf ve ~/Downloads/Convex Automated ML Platform Deck_ Customer Sharing.pptx) tekrar
okunarak "neden Convex tercih edilir" argümanları çıkarıldı ve
[WhyConvex.vue](src/views/WhyConvex.vue)'ye yeni bir "Sayılarla Convex" bölümü eklendi
(itiraz-karşılama akordiyonu ile Açıklanabilirlik bölümü arasında).

Not: Bu sunumlar teknik olarak Experian'ın kendi markasıyla sattığı "Experian Convex" /
"Convex Go" ürünlerine ait — ama Galaksiya'nın kendi sitesinde (galaksiya.com) "Experian
Convex" ayrı bir müşteri vaka çalışması olarak listeleniyor, yani Galaksiya'nın geliştirdiği
aynı platformun Experian tarafından beyaz etiketli/ortak markalı satışı. Bu yüzden rakamlar
Convex'in kendi platform performansına ait, doğrudan kullanılabilir kabul edildi.

Eklenenler ("Convex Automated ML Platform Deck"nin "Main Benefits of Convex" tablosundan,
Slayt 5, ve ilgili diğer slaytlardan):
- Geleneksel yöntem vs Convex karşılaştırma kartları: Süre (~6 ay → maks. 1-2 gün, denetim
  ve devreye alma dahil), Efor (min. 500 adam-gün → 5-10 adam-gün), Pazara çıkış süresi
  (1-1,5 yıl gecikme → gerçek zamanlı güncelleme).
- 4'lü istatistik bandı (StatBand): ×5 daha hızlı deney sonuçları (Slayt 3), %30+ ML
  modellerinin geleneksel modellere kattığı minimum performans artışı (Slayt 6), %70-80 entegre
  karar motorlarıyla devreye alma süresinde azalma (Slayt 8, orijinalde "PowerCurve" adı
  geçiyordu — Experian'ın kendi decisioning ürünü olduğu için genelleştirildi), ×10 modelleri
  güncel tutmanın platform maliyetine oranla getirisi/RoI (Slayt 6).

Kullanılmayanlar (kaynakta var ama siteye taşınmadı): Slayt 9'daki uzun özellik listesi (çoğu
zaten Experiment Pipeline/Model Governance sayfalarında ayrı ayrı anlatılıyor, tekrar olurdu);
Slayt 10'daki isimsiz "Tier 2 Private Bank in Turkey" vaka çalışması rakamları (9 ay → dakikalar,
%15 kampanya yanıt artışı, %80 churn tahmin doğruluğu) — gerçek ama anonim bir müşteriye ait
olduğu için, mevcut mock testimonial/vaka içeriğiyle karıştırılmaması adına şimdilik eklenmedi;
gerçek referans onaylandığında Vaka Çalışmaları sayfasına eklenmesi daha uygun olur.

**Sonradan yapılan iki düzeltme:**
- "Süre" satırının etiketi "Uçtan uca süre" olarak değiştirildi — Home.vue'daki
  "−60% model geliştirme süresi" istatistiğiyle karıştırılmasın diye (o sadece geliştirme
  aşamasını ölçüyor, buradaki ise denetim + devreye alma dahil tüm süreci).
- Açıklanabilirlik bölümündeki görünür alıntı kaynağıyla ("— Convex Go ürün broşürü") tutarlı
  olması için, istatistik bandının altına da görünür bir kaynak notu eklendi: `Kaynak: "Convex
  Automated ML Platform Deck" ürün sunumu.`
- "Açıklanabilirlik" kelimesi kaldırıldı; eyebrow, kaynağın kendi özellik adı olan "Full
  transparency"yle birebir eşleşsin diye "Şeffaflık" yapıldı.

**Sayfa sırası yeniden düzenlendi** (sunumdan gelen içerikler daha görünür/dikkat çekici olsun
diye en üste alındı): PageHero → **Problem çerçevesi (yeni)** → Sayılarla Convex → Şeffaflık →
İtirazlar akordiyonu → CtaBanner. Önceden itirazlar en üstteydi, sunum içerikleri en altta kalıyordu.

Yeni eklenen "Problem çerçevesi" bölümü, "Convex Go Brochure"un "Delayed deployment = Delayed
impact" slaytından (Sayfa 2) geliyor: %65 (işletmelerin model devreye almayı "çok yavaş" bulma
oranı — Experian 2023 Survey on Model Building and ModelOps) ve %54 (ModelOps'un önümüzdeki
3-5 yılda sektörü şekillendireceğini düşünen karar verici oranı — Experian & Forrester Consulting
2024) rakamları, sayfanın en üstünde, PageHero'dan hemen sonra bir navy bölüm olarak veriliyor.
Bunlar Convex'in kendi başarı rakamları değil, üçüncü taraf sektör araştırması olduğu için kaynak
notu görünür şekilde eklendi (Sayılarla Convex ve Açıklanabilirlik/Şeffaflık bölümlerindeki
kaynak gösterme pratiğiyle tutarlı).

## 10. Yardım Merkezi — İlk Gerçek Video

Kullanıcının verdiği `video.webm` (Convex/Experian giriş ekranını ve "You can unlock the value
in your data" mesajını gösteren, ~15 saniyelik bir ürün tanıtım kaydı) projeye eklendi:
[`src/assets/videos/dataset-yukleme.webm`](src/assets/videos/dataset-yukleme.webm).

[Videos.vue](src/views/help/Videos.vue)'daki "Dataset yükleme ve şema doğrulama" kartı artık
tıklanınca gerçek videoyu oynatan bir modal açıyor (`VideoShowcase.vue`'daki modal desenine
benzer, ama iframe yerine native `<video>` elementi kullanıyor çünkü yerel bir dosya, embed
linki değil). Süre etiketi elle yazılmadı — `onMounted`'da video metadata'sı okunup gerçek süre
("0:15") otomatik hesaplanıyor, böylece yanlış/uydurma bir süre gösterilmiyor.

Diğer 5 video kartı hâlâ gerçek dosyası olmayan mock placeholder'lar (süre etiketleri de mock
veri — "4:12" gibi); bunlar artık tıklanamaz (cursor-pointer ve hover efekti kaldırıldı), çünkü
tıklanabilir ama hiçbir şey yapmayan bir buton yanıltıcı olurdu. İleride gerçek videosu olmayan
yeni bir kart eklenirse (süre alanı `null` bırakılırsa) kart otomatik olarak "Yakında" rozeti
gösterir.

Dataset kartının önizleme alanı, düz siyah kutu yerine mor→pembe degradeli bir zemin üzerinde
"Dataset Yükleme" yazısı ve play butonu gösterecek şekilde güncellendi (kullanıcı geri
bildirimiyle: önce dosya kartı + ilerleme çubuğu içeren daha ayrıntılı bir mockup denendi,
"bu olmaz" denilince sade bir metin+degrade tasarıma geçildi; ilk metin denemesi "Veri Seti
Yükleme" idi ama sayfanın geri kalanında (kart başlığı, module etiketi, docsGuides.js,
GettingStarted.vue) tutarlı olarak "Dataset" — İngilizce terim — kullanıldığı fark edilince
"Dataset Yükleme"ye düzeltildi). Diğer kartlar (henüz videosu olmayanlar) sade navy kutu olarak
bırakıldı; sadece gerçek videosu olan kartlar özelleştirildi.

İkinci bir kısa video (`video.webm`, ~3 saniye, aynı "You can unlock the value in your data"
Convex/Experian giriş ekranı kaydı) [src/assets/videos/giris.webm](src/assets/videos/giris.webm)
olarak eklendi ve ilk karta ("Convex'e giriş: ilk projenizi oluşturma") bağlandı. Bu vesileyle
kart mockup'ı genelleştirildi: artık `v.module === 'Dataset'` gibi tek bir karta özel kontrol
yerine, her `videos` öğesi kendi `videoUrl` + `thumbnailLabel` alanlarını taşıyor — gerçek
videosu olan her kart otomatik olarak degrade zemin + etiket + dinamik süre alıyor, yeni bir
video eklemek için tek yapılması gereken listeye bu iki alanı eklemek. Kartın eski "Başlangıç"
module etiketi kullanıcı isteğiyle "Giriş" olarak değiştirildi.

Üçüncü bir video (`video 2.webm`, ~23 saniye) [src/assets/videos/veri-gorsellestirme.webm]
(src/assets/videos/veri-gorsellestirme.webm) olarak eklendi ve "Veri Görselleştirme" adıyla
Dataset kartından hemen sonraya yerleştirildi (module: 'Dataset'). Genelleştirilmiş kart yapısı
sayesinde ekleme sadece `videos` listesine yeni bir öğe eklemekten ibaretti — süre otomatik
algılandı (0:24), thumbnail otomatik degrade+etiket aldı.

Dördüncü bir video (`video.webm`, ~34 saniye) [src/assets/videos/data-sample.webm]
(src/assets/videos/data-sample.webm) olarak eklendi; kart adı sonradan "Data Sample" → "Veri
Örnekleme" olarak değiştirildi (module: 'Dataset'). Aynı şablon: listeye tek bir öğe eklemek
yeterli oldu, süre otomatik algılandı (0:34).

Beşinci, altıncı ve yedinci videolar (`03_project_test.webm`, `04_portfolio_test.webm`,
`05_use_case_test.webm`) sırasıyla [project.webm](src/assets/videos/project.webm),
[portfolio.webm](src/assets/videos/portfolio.webm) ve [use-case.webm]
(src/assets/videos/use-case.webm) olarak eklendi; Veri Örnekleme kartından hemen sonraya,
dosya adlarındaki numaralandırmaya (03/04/05) uygun sırayla yerleştirildi. Bunlar Dataset
modülünden farklı bir konuyu (Proje, Portföy, Kullanım Senaryosu — automl-ui-new'de
"Projects / Portfolio / Use Case" sekmeleri) gösterdiği için kendi module etiketlerini aldı:
'Proje', 'Portföy', 'Kullanım Senaryosu'. Süreler otomatik algılandı (0:22, 0:10, 0:11).

Sekizinci video (`video.webm`, ~28 MB — şimdiye kadarki en büyük dosya) [experiment-pipeline.webm]
(src/assets/videos/experiment-pipeline.webm) olarak eklendi ve önceden sadece mock süreli
("9:35") statik bir placeholder olan "Experiment Pipeline ile ilk deneyinizi kurma" kartına
bağlandı. Kart artık diğerleriyle aynı degrade+etiket görünümünü alıyor, süre gerçek videodan
otomatik algılandı (5:11, eski mock değeri değil).

Dokuzuncu video (`video.webm`, ~754 KB) [scorecard.webm](src/assets/videos/scorecard.webm)
olarak eklendi ve Experiment Pipeline kartından hemen sonraya "Skorlama Kartı (Score Card)"
adıyla yerleştirildi (module: 'Score Card', site genelinde "scorecard" için kullanılan
"skorlama kartı" terimiyle tutarlı). Süre otomatik algılandı (0:07).

Onuncu video (Playwright test-results klasöründen: `08_application_test-...-chromium/video.webm`,
~823 KB) [application.webm](src/assets/videos/application.webm) olarak eklendi ve Score Card
kartından hemen sonraya "Application oluşturma" adıyla yerleştirildi (module: 'Application').
Süre otomatik algılandı (0:10).

On birinci–on yedinci videolar: kullanıcının verdiği 7 senaryo kaydı (`1_steps_1_5.webm` …
`7_step19.webm`) `src/assets/videos/mg-*.webm` olarak eklendi ve kullanıcının verdiği tam
başlıklarla ("Model Governance – … (Adım N)") "Model Governance" module'ü altında sıralandı:
Deney Arama ve Model Reports (Adım 1-5), Interpret (Adım 6-11), Test Sonuçlarını İndirme
(Adım 13), Model Nesnesini İndirme (Adım 14), Model Audit Log Oluşturma ve Doğrulama
(Adım 16-17), Model Build İşlemi (Adım 18), Yeni Dataset ile Prediction (Adım 19).

Bu 7 gerçek videoyla, önceden tek bir mock placeholder olan "Model Governance: yorumlama ve
onay akışı" (duration: '7:20', gerçek videosu yok) kartı kaldırıldı — artık aynı konuyu çok
daha spesifik ve gerçek içerikle 7 ayrı kart kapsıyor, mock kartı yanında tutmak yanıltıcı
olurdu. Süreler otomatik algılandı (0:08, 0:55, 0:06, 0:06, 0:08, 0:05, 0:27).

On sekizinci video (Playwright test-results klasöründen: `_scenario_custom_model_ful-...-
create-retrain-retest--chromium/video.webm`, ~12 MB) [custom-model.webm]
(src/assets/videos/custom-model.webm) olarak eklendi ve Model Governance – Prediction
kartından hemen sonraya "Custom Model: oluşturma, yeniden eğitme ve yeniden test etme"
adıyla yerleştirildi (module: 'Custom Model'). Süre otomatik algılandı (2:31).

## 11. Anasayfa Sloganı

Birkaç turda beyin fırtınası yapılan slogan önerilerinden kullanıcı "Yarının kararını bugün
kurun." cümlesini seçti. Önce [Home.vue](src/views/Home.vue) hero bölümünde H1'in altında ayrı
bir vurgu satırı olarak eklendi, sonra kullanıcı isteğiyle eski H1'in ("Kredi risk modellerini
dakikalar içinde canlıya alın.") yerine geçti — artık anasayfanın ana başlığı bu slogan.

Not: Açıklama paragrafı ("Convex, bankacılık ve finans kuruluşları için...") hâlâ değişmedi —
sektör vurgusunu genişletme kararı (bkz. bir önceki konuşma) henüz uygulanmadı, bu yüzden H1
artık sektör-bağımsız ama hemen altındaki paragraf hâlâ bankacılık/finansa özel. Kullanıcı
sektör genişletme kararını netleştirdiğinde bu tutarsızlık ele alınmalı.

Anasayfadan kaldırılan eski H1 ("Kredi risk modellerini dakikalar içinde canlıya alın.") boşa
gitmedi — [Solutions.vue](src/views/Solutions.vue)'un PageHero başlığı olarak kullanıldı
(eski başlık "Kredi, risk, denetim — tek platform" idi). Çözümler sayfası zaten tamamen kredi
skorlama/risk modelleme senaryolarına odaklandığı için bu başlık konuyla birebir örtüşüyor.

## 12. Sektör Vurgusunun Genişletilmesi (Bankacılık → Tüm Sektörler)

Kullanıcı, sitenin sadece bankacılık/finans için değil tüm sektörler için konumlanmasını istedi.
Genel site çerçevesi (sayfa-özel senaryolar değil) şu dosyalarda güncellendi:
- [Home.vue](src/views/Home.vue): hero açıklaması ve alt bölümdeki "Bankacılık ve finans için"
  eyebrow'u → "Her sektör için"; ilgili description'daki "kredi skorlama, risk modelleme" →
  "model geliştirme, risk yönetimi".
- [SiteFooter.vue](src/components/layout/SiteFooter.vue): marka açıklamasından "bankacılık ve
  finans kuruluşları" ve "kredi skorlama" ifadeleri kaldırıldı.
- [About.vue](src/views/About.vue): PageHero başlığı/açıklaması, "Kim olduğumuz" metni ve
  "Denetlenebilirlik önce gelir" / "Mühendislik disiplini" değer kartları — hepsi bankacılığa
  özel ifadelerden arındırıldı, "regüle ve yüksek riskli sektörler" gibi genel bir çerçeveye
  taşındı. (Bu, Galaksiya'nın kendi sitesindeki (galaksiya.com) gerçek çok-sektörlü
  konumlandırmasıyla da tutarlı — bkz. bölüm 9'daki not.)
- [router/index.js](src/router/index.js): site geneli varsayılan meta açıklaması ve Hakkımızda
  sayfasının meta açıklaması güncellendi.
- [Security.vue](src/views/Security.vue): "Banka ve finans güvenlik ekipleri" → "Kurumsal
  güvenlik ekipleri".

**Bilinçli olarak henüz dokunulmayan, kullanıcıyla netleştirilmesi gereken yerler:**
- **[Solutions.vue](src/views/Solutions.vue)** — sayfa baştan sona kredi skorlama/risk
  modelleme senaryoları üzerine kurulu (ve bu konuşmadan hemen önce kullanıcı isteğiyle H1'i
  de "Kredi risk modellerini dakikalar içinde canlıya alın." yapıldı). Bu sayfayı tamamen
  sektör-bağımsız hale getirmek, gerçekte var olmayan başka sektörlere ait somut senaryolar
  uydurmayı gerektirir — bunun yerine bankacılığı "örnek/vitrin sektör" olarak koruyup
  ("Çözümler" sayfasını finans-özel bir alt sayfa gibi ele alıp) genel sitenin geri kalanını
  sektör-bağımsız tutmak daha tutarlı bir seçenek gibi duruyor, ama bu kullanıcı kararı.
- **[LogoStrip.vue](src/components/sections/LogoStrip.vue)** — "Bankacılık ve finans
  sektöründeki ekipler tarafından kullanılıyor" ifadesi, altındaki logoların hepsi GERÇEK banka/
  finans kurumu logosu olduğu için hâlâ doğru; "tüm sektörler" diye genelleştirmek, o an sitede
  görünen gerçek logolarla çelişir ve yanıltıcı olur. Bu yüzden değiştirilmedi.
- **[CaseStudies.vue](src/views/CaseStudies.vue)** ve testimonial'lar — hepsi "Örnek Banka",
  "Örnek Finans" gibi mock banka/finans şirketleri. Sektör çeşitliliği eklemek (ör. "Örnek
  Sigorta", "Örnek Perakende") yeni mock içerik uydurmayı gerektirir.
- Ürün sayfalarındaki "çekirdek bankacılık sistemleri" ifadeleri (Product, Deployment,
  ExperimentPipeline, Extensions, GettingStarted) bilinçli olarak bırakıldı — bunlar zaten
  "CSV, veritabanı veya çekirdek bankacılık kaynakları" gibi bir örnek listesinin parçası,
  tek başına sektör-münhasırlığı iddia etmiyor.

**Düzeltme:** Kullanıcı "her sektör" / "tüm sektör" gibi açık, genelleyici ifadelerin de
yazılmamasını istedi — sadece bankacılık-özel dil kaldırılsın, ama yerine "her sektöre hitap
ediyoruz" diye yeni bir iddia da eklenmesin. Bu yüzden [Home.vue](src/views/Home.vue),
[SiteFooter.vue](src/components/layout/SiteFooter.vue), [About.vue](src/views/About.vue) ve
[router/index.js](src/router/index.js)'deki "her sektör(den)/tüm sektör" ifadeleri kaldırılıp
sektör hiç anılmayan nötr bir dille değiştirildi (ör. "Convex, kuruluşlar için uçtan uca bir
AutoML platformu."; eyebrow "Her sektör için" → "Hız ve Denetlenebilirlik").

Anasayfadaki slogan H1'i kullanıcı isteğiyle başlık düzenine (Title Case) çevrildi: "Yarının
Kararını Bugün Kurun."

[Videos.vue](src/views/help/Videos.vue)'daki listenin en sonunda kalan, gerçek videosu olmayan
mock "Champion/challenger karşılaştırması" (module: 'Experiment Pipeline') kartı kaldırıldı —
liste artık "Modeli deploy etme ve application oluşturma" (henüz gerçek videosu olmayan tek
kalan mock kart) ile bitiyor.

## 13. Hakkımızda Sayfası — Galaksiya'nın Kendi Sitesinden Gerçek İçerik

`galaksiya.com/about-us` ziyaret edilip [About.vue](src/views/About.vue)'daki "Kim olduğumuz"
bölümü gerçek içerikle güncellendi. Galaksiya'nın kendi About Us sayfası, şirket adının
kökenini ("evrendeki her yıldız/gezegen/hücrenin birbirine bağlanarak tek bir bütün oluşturması
— Galaksiya") ve değerlerini (bütünlük, uyum, çalışan/ürün/müşterilerin birbirine bağlı bir ağ
olarak görülmesi) anlatıyor. Bu anlatım Türkçeleştirilip Convex bağlamına bağlandı; doğrudan
alıntı (15 kelimenin altında, tırnak + kaynak ile) eklendi: "we position all our employees,
products, solutions, and customers as members of a network" — Galaksiya, "About Us".

## 14. Yardım Merkezi Ana Sayfası — Blog Kartı Stiline Geçiş

[Help.vue](src/views/help/Help.vue)'daki 4 kısayol (Başlangıç Kılavuzu, Dokümantasyon, Video
Eğitimler, Sürüm Notları), ikon kutusu + başlık + açıklama düzeninden [Blog.vue](src/views/Blog.vue)'daki
blog kartı düzenine çevrildi: `Badge` (kategori etiketi) + başlık + açıklama + alt satırda
meta bilgisi ("5 adım", "4 modül", "19 video", "3 sürüm") ve "İncele →" bağlantısı — Blog
sayfasındaki tag + başlık + özet + tarih/okuma-süresi + "Devamını oku" düzeniyle birebir aynı
yapı. Arama kutusu ve SSS akordiyon bölümü değişmedi; sadece üstteki kısayol kartları
"blog tarzı"na çevrildi. Diğer Yardım Merkezi alt sayfaları (Dokümantasyon'un sidebar+panel
düzeni, Sürüm Notları'nın zaten timeline/article düzeni, Başlangıç Kılavuzu'nun numaralı adım
listesi) kendi içeriklerine daha uygun oldukları için değiştirilmedi.

## 15. Video Eğitimler Kartları — Blog Gönderisi Gibi Açıklamalı

Kullanıcı, Video Eğitimler'deki her video kartının da bir blog gönderisi gibi davranmasını
istedi (kısa bir açıklama/özet taşımasını). Videos.vue'daki (o an `src/views/help/Videos.vue`
konumundaydı — bkz. bölüm 16, sonradan taşındı) 19 video öğesinin (mock "Modeli deploy etme..."
kartı dahil) hepsine, o videonun/adımın ne anlattığını özetleyen bir cümlelik `description`
alanı eklendi; template'te bu açıklama, Blog kartlarındaki özet metniyle aynı stilde
(`text-xs leading-relaxed text-darker-gray`) başlığın altına yerleştirildi. Gerçek videosu
olan kartlara ayrıca Blog'daki "Devamını oku" bağlantısına karşılık gelen bir "İzle →" satırı
eklendi (mock, videosu olmayan kartta bu satır görünmüyor — zaten "Yakında" rozeti var,
yanıltıcı bir CTA eklenmedi).

## 16. Video Eğitimler — Yardım Merkezi'nden Çıkarılıp Kaynaklar'a (Blog'un Yanına) Taşındı

Kullanıcı, Video Eğitimler'in Yardım Merkezi'nin bir alt sayfası olarak değil, Blog gibi
bağımsız bir "Kaynaklar" bölümü olarak konumlanmasını istedi. Yapılan değişiklikler:
- Dosya taşındı: `src/views/help/Videos.vue` → [src/views/Videos.vue](src/views/Videos.vue)
  (artık Blog.vue, References.vue, CaseStudies.vue ile aynı seviyede — `src/views` kökünde).
- Route taşındı: `/yardim/videolar` (name: `help-videos`) → `/videolar` (name: `videos`),
  [router/index.js](src/router/index.js)'de Vaka Çalışmaları rotasının hemen ardına eklendi.
- [nav.js](src/router/nav.js): "Video Eğitimler" `helpLinks`'ten çıkarılıp `resourceLinks`'e
  (Kaynaklar dropdown'ı — Referanslar, Vaka Çalışmaları, Blog ile birlikte) eklendi.
- [searchIndex.js](src/content/searchIndex.js): "Video Eğitimler" artık `helpPages` yerine
  kendi `videoPages` dizisinde, arama sonuçlarında kategorisi "Yardım Merkezi" değil
  "Video Eğitimler" olarak görünüyor.
- [Help.vue](src/views/help/Help.vue): "Video Eğitimler" kısayol kartı kaldırıldı, kart grid'i
  4'ten 3 koluna düşürüldü, arama kutusunun üstündeki açıklama metninden "video eğitimlerde"
  ifadesi çıkarıldı.
- Videos.vue'nun kendi PageHero eyebrow'u "Yardım Merkezi · Video Eğitimler" → sadece
  "Video Eğitimler" oldu (Blog.vue'nun eyebrow="Blog" konvansiyonuyla tutarlı).

## 17. Video Eğitimler — Her Video Yardım Merkezi İçinde Bir Blog Yazısına Dönüştü (Bölüm 16'yı Geçersiz Kılar)

Kullanıcı bölüm 16'daki taşımayı geri istedi: video eğitimlerin Yardım Merkezi'nin **dışına**
çıkmaması, ama her videonun kendi başına bir blog yazısı gibi davranması gerekiyordu — yazıya
tıklanınca o adımın ne yaptığını anlatan bir metin, metnin altında da videonun izlenebildiği bir
sayfa. Bölüm 14–16'da yapılan "blog tarzı liste" ve "Kaynaklar'a taşıma" denemeleri bu isteği
karşılamadığı için tamamen geri alındı ve Blog/BlogPost mimarisiyle aynı desende yeniden kuruldu:

- **Yeni içerik dosyası:** [src/content/videoGuides.js](src/content/videoGuides.js) — 19 video
  eğitiminin tek kaynağı. Her öğe `slug`, `title`, `module`, `thumbnailLabel`, `description`
  (kısa özet), `videoUrl` (gerçek videosu olmayan tek adım — "deployment" — için `null`), ve
  `body` (2-3 paragraflık yazılı anlatım dizisi) taşıyor.
- **Liste sayfası** [src/views/help/Videos.vue](src/views/help/Videos.vue) `/yardim/videolar`'da
  kalmaya devam ediyor; artık her kart `videoGuides`'tan geliyor ve tıklanınca kendi detay
  sayfasına gidiyor (modal/lightbox kaldırıldı).
- **Yeni detay sayfası:** [src/views/help/VideoPost.vue](src/views/help/VideoPost.vue)
  (`/yardim/videolar/:slug`) — BlogPost.vue ile aynı iskelet: üstte "Video Eğitimlere dön" linki
  ve modül rozeti, ardından `guide.body`'deki paragraflar, en altta gerçek videosu olan adımlar
  için native `<video controls>` oynatıcı (videosu olmayan adımda "yakında eklenecek" notu).
- **Router:** [router/index.js](src/router/index.js)'e `help-video-post` route'u ve
  `dynamicFrom: 'videoGuide'` ile başlık/description'ı `videoGuides.js`'ten türeten bir
  `afterEach` dalı eklendi.
- **nav.js / searchIndex.js / Help.vue** bölüm 16'da yapılan taşıma tamamen geri alındı:
  "Video Eğitimler" tekrar `helpLinks`'te, arama sonuçlarında yine `videoGuides`'tan üretilen
  kendi girişleriyle (`category: 'Video Eğitimler'`, `path: /yardim/videolar/:slug`), Help.vue'da
  kısayol kartı ve 4 kolonlu grid eski haline döndü.
- Yanlışlıkla oluşturulan üst seviye `src/views/Videos.vue` silindi.

Sonuç: kullanıcının verdiği örnek tam olarak çalışıyor — "Dataset Yükleme" blog'una girilince
önce dataset'in nasıl yüklendiği yazıyla anlatılıyor, yazının altında da o adımın ekran kaydı
izlenebiliyor.

*(Not: Bu bölümün ardından "Video Eğitimler" başlığını/listeleme sayfasını kaldırıp videoları
Help.vue'ya gömen bir deneme yapıldı, ardından kullanıcı bu son işlemi geri almak isteyip
"Video Eğitimler" diye bir başlık olabilir dediği için tamamen bu bölümdeki (17) hâline geri
döndürüldü — `/yardim/videolar` listeleme sayfası, kısayol kartı ve tüm başlıklar duruyor.)*

## 18. Video Metinleri — Gerçek Video İçeriğiyle Eşleştirme

Kullanıcı, video eğitimlerdeki yazılı anlatımların (`description` + `body`) gerçekten o videoda
gösterilenle örtüşmesini istedi. Videolar orijinal olarak sadece dosya adı/başlığa bakılarak
yazılmıştı; bazı paragraflar videoda hiç gösterilmeyen adımları anlatıyordu (örn. "giriş"
videosunda "ilk projenizi oluşturma" iddiası — video aslında sadece login ekranından "Genel
Bakış" (Statistics Overview) panosuna geçişi gösteriyor).

Yapılan çalışma: `ffmpeg` ile [src/assets/videos](src/assets/videos) altındaki 18 gerçek `.webm`
dosyasının her birinden birden fazla kare (video süresine göre 3-12 kare) çıkarılıp incelendi,
gerçekte hangi ekranların/diyalogların gösterildiği tespit edildi ve
[src/content/videoGuides.js](src/content/videoGuides.js) içindeki ilgili 17 girişin (`deployment`
hariç — o adımın videosu yok, metni değişmedi) `description` ve `body` alanları buna göre
yeniden yazıldı. Önemli düzeltmeler:
- **giris**: "ilk proje oluşturma" iddiası kaldırıldı; video aslında login + Statistics Overview
  panosunu (departman/proje filtreleri, özet metrik kartları, son deneyler listesi) gösteriyor.
- **proje / portfoy / kullanim-senaryosu**: bunların sol menüde ayrı ayrı ekranlar olduğu
  varsayılmıştı; gerçekte hepsi "Projects" ekranındaki **Projects / Portfolio / Use Case**
  sekmeleri. Metinler bu sekme yapısına ve gerçekte gösterilen "Department Assignment" akışına
  göre düzeltildi.
- **experiment-pipeline**: jenerik "feature engineering + eğitim" anlatımı, videoda görülen tam
  adım listesiyle (Data Preparation, Data Exploration, Feature Engineering alt adımları, Feature
  Selection alt adımları, Pipeline Summary, Model/Model Running canlı yüzde göstergesi, Interpret
  Model, Tune Model) değiştirildi.
- **score-card**: "Score Card Generation" modalının gerçek seçenekleri (Automatic/Custom
  Generation), Target Score/Odds/PDO parametreleri ve özellik bazlı skor tablosu eklendi.
- **application**: "onaylı modele bağlı canlı uç nokta" iddiası kaldırıldı; video sadece
  Model Governance'ın Applications listesinden isim + proje seçerek application oluşturmayı
  gösteriyor (isim kuralları: azami 20 karakter, sadece harf/rakam, ilk karakter rakam olamaz).
- **mg-audit-log**: "otomatik adım/parametre kaydı" iddiası kaldırıldı; gerçek akış Audit
  State (Pass/Fail/Reviewing/Cancelled) seçimi + dosya yükleme + geçmiş audit dosyaları listesi.
- **veri-ornekleme (data-sample)**: "örnekleme yöntemi seçme" iddiası kaldırıldı; gerçekte tek
  tıkla oluşturulan bir örnek, dataset'in "2 Versions" etiketiyle yeni bir versiyonu oluyor.
- **custom-model**: akış, gerçekte görülen Custom Models listesi (durum: In Progress) →
  Experiments listesindeki Train/Test Score'lu deney kaydı → Model Results sayfası üzerinden
  anlatılacak şekilde yeniden yazıldı.
- **mg-test-sonuclari / mg-model-indirme / mg-model-build**: bu üç kısa video sadece Model
  Governance'ta deneyi arayıp Actions menüsündeki bir simgeye ulaşmayı gösteriyor; metinler
  görülmeyen diyalog detayları iddia etmeyecek şekilde sadeleştirildi.
- **dataset-yukleme / veri-gorsellestirme / mg-deney-arama / mg-interpret / mg-prediction**:
  genel akış zaten doğruydu, ekranlardaki gerçek alan adlarıyla (örn. "Distribution Plots For
  Numeric/Category Columns", "Correlation Matrix", "Predict With Dataset" penceresi) daha
  kesin hale getirildi.
