// Blog içeriğinin tek kaynağı — hem liste (Blog.vue) hem detay (BlogPost.vue)
// sayfası buradan besleniyor ki yazı sonundaki ürün sayfası linki tutarlı kalsın.
export const blogPosts = [
  {
    slug: 'automl-kredi-skorlama-tamamlar-mi',
    tag: 'AutoML',
    title: 'AutoML kredi skorlama modelinin yerini alır mı, yoksa tamamlar mı?',
    excerpt:
      'Geleneksel scorecard yöntemleri ile AutoML tabanlı modellerin güçlü yönlerini karşılaştırıyor, ikisini bir arada kullanmanın pratik yollarını ele alıyoruz.',
    date: '2026-08-12',
    readTime: '6 dk',
    body: [
      'Geleneksel scorecard yöntemleri, yıllardır kredi skorlama süreçlerinin omurgasını oluşturuyor: açıklanabilir, denetime yatkın ve iş birimlerinin güvendiği bir yöntem. AutoML tabanlı modeller ise daha yüksek ayrım gücü sunabiliyor, ama bu güç genelde açıklanabilirlikten ödün vermeden elde edilmek isteniyor.',
      'Pratikte en verimli yaklaşım, ikisini birbirinin yerine değil, birbirini tamamlayacak şekilde kullanmak. Scorecard, mevcut süreçlerin ve regülasyon beklentilerinin referans noktası olarak kalırken; AutoML modeli champion/challenger yaklaşımıyla yan yana test edilip, ayrım gücü kanıtlandıkça kademeli olarak devreye alınabilir.',
      'Bu geçişin en kritik adımı, iki modelin de aynı denetim standardından geçmesi: hangi değişkenin skoru nasıl etkilediğinin açık olması, ve model onayının izlenebilir bir akıştan geçmesi.',
    ],
    relatedTo: '/urun/experiment-pipeline',
    relatedLabel: 'Experiment Pipeline ile champion/challenger karşılaştırmasını inceleyin',
  },
  {
    slug: 'model-risk-yonetiminde-denetim-izi',
    tag: 'Model Risk Yönetimi',
    title: 'Model risk yönetiminde denetim izi neden en az doğruluk kadar önemli?',
    excerpt:
      'Bir modelin performansı kadar, o performansın nasıl elde edildiğinin de izlenebilir olması gerekiyor. Regülatörlerin baktığı üç temel kritere göz atıyoruz.',
    date: '2026-07-28',
    readTime: '5 dk',
    body: [
      'Bir risk modelinin Gini katsayısı ne kadar yüksek olursa olsun, o skorun nasıl üretildiği açıklanamıyorsa model denetim sürecinden geçemez. Regülatörler ve iç denetim ekipleri üç şeye bakar: modelin hangi veriyle eğitildiği, hangi değişkenlerin karara ne kadar katkı sağladığı, ve modelin kim tarafından, ne zaman onaylandığı.',
      'Bu üç bilginin manuel olarak bir araya getirilmesi haftalar sürebilir. Denetim izinin sistemin doğal bir parçası olması — her deneyin otomatik sürümlenmesi, her onayın kayıt altına alınması — bu süreci günler yerine saatlere indirir.',
    ],
    relatedTo: '/urun/model-governance',
    relatedLabel: 'Model Governance modülünün denetim izini nasıl tuttuğunu görün',
  },
  {
    slug: 'woe-binning-yeniden-bakis',
    tag: 'Feature Engineering',
    title: 'WOE/binning tekniklerine yeniden bakış: ne zaman hâlâ en iyi seçim?',
    excerpt:
      'Karmaşık makine öğrenmesi modellerinin yaygınlaşmasıyla WOE/binning yöntemleri gözden düşmüş gibi görünse de, açıklanabilirlik gerektiren senaryolarda hâlâ güçlü bir araç.',
    date: '2026-07-10',
    readTime: '7 dk',
    body: [
      'WOE (Weight of Evidence) ve binning, kredi skorlama modellerinde onlarca yıldır kullanılan, her aralığın skora katkısını doğrudan okunabilir kılan tekniklerdir. Karmaşık ağaç tabanlı modellerin yaygınlaşmasıyla bu yöntemler "eski" olarak görülse de, özellikle regülasyon gereksinimi yüksek senaryolarda hâlâ tercih ediliyor.',
      "Pratik öneri: WOE/binning'i tamamen terk etmek yerine, feature engineering adımında bir seçenek olarak tutup, hangi değişkenlerin bu şekilde ele alınacağına veri ve regülasyon gereksinimine göre karar vermek.",
    ],
    relatedTo: '/urun/experiment-pipeline',
    relatedLabel: "Experiment Pipeline'daki feature engineering adımlarını inceleyin",
  },
  {
    slug: 'kredi-risk-modellerinde-aciklanabilirlik',
    tag: 'Regülasyon',
    title: 'Kredi risk modellerinde açıklanabilirlik: regülatörün beklediği nedir?',
    excerpt:
      'SHAP gibi yorumlama tekniklerinin regülasyon süreçlerinde nasıl kullanılabileceğini ve model dokümantasyonunda nelerin yer alması gerektiğini özetliyoruz.',
    date: '2026-06-22',
    readTime: '6 dk',
    body: [
      'Regülatörler bir kredi risk modelini değerlendirirken genelde üç soruya cevap arar: model hangi verilerle eğitildi, her değişkenin skora katkısı nedir, ve model zaman içinde nasıl izleniyor. SHAP tabanlı katkı analizleri, bu ikinci soruya her bir tahmin için ayrı ayrı, sayısal bir cevap verebilir.',
      'Model dokümantasyonunun (model kartının) bu üç soruyu otomatik olarak, güncel veriyle yanıtlaması; her yeni model sürümünde bu dokümantasyonun manuel olarak yeniden hazırlanması ihtiyacını ortadan kaldırır.',
    ],
    relatedTo: '/urun/model-governance',
    relatedLabel: "Model Governance'ın yorumlama ekranını inceleyin",
  },
]
