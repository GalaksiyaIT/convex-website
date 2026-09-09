// Dokümantasyon sayfasının (Documentation.vue) ve site geneli aramanın ortak veri
// kaynağı — modül modül kılavuz başlıkları burada tanımlı.
export const docsGuides = [
  {
    icon: 'upload',
    title: 'Dataset Yükleme',
    guides: [
      'CSV ile veri yükleme',
      'Veritabanı bağlantısı kurma',
      'Şema doğrulama hataları ve çözümleri',
      'Dataset birleştirme (merge)',
    ],
  },
  {
    icon: 'layers',
    title: 'Experiment Kurulumu',
    guides: [
      'Yeni deney oluşturma',
      'Feature selection adımları',
      'Feature engineering: WOE/binning, encoding, ölçekleme',
      'Çoklu algoritma ile eğitim başlatma',
    ],
  },
  {
    icon: 'eye',
    title: 'Governance Kullanımı',
    guides: [
      'Model yorumlama (Interpret) ekranı',
      'Onay akışı tanımlama',
      'Model kartı oluşturma',
      'Prediction izleme ve drift takibi',
    ],
  },
  {
    icon: 'rocket',
    title: 'Application Oluşturma',
    guides: [
      'Modeli deploy etme',
      'Application (skorlama ekranı) tanımlama',
      'API ile entegrasyon',
      'Champion/challenger geçişi',
    ],
  },
]
