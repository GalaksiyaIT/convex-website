// Dokümantasyon sayfasının (Documentation.vue) ve site geneli aramanın ortak veri
// kaynağı — modül modül kılavuz başlıkları burada tanımlı. `video`: ilgili Video Eğitim'in
// slug'ı (content/videoGuides.js); başlık o videonun yazılı anlatımına bağlanır.
export const docsGuides = [
  {
    icon: 'upload',
    title: 'Veri Yönetimi',
    guides: [
      { title: 'CSV ile veri yükleme', video: 'tanitim-01-veri' },
      { title: 'Veritabanından veri alma ve senkronizasyon', video: 'tanitim-01-veri' },
      { title: 'Veri setlerini birleştirme ve poligon', video: 'tanitim-01-veri' },
      { title: 'Sürümleme, örnekleme ve sentetik veri', video: 'tanitim-01-veri' },
      { title: 'Portföy oluşturma', video: 'portfoy-yonetimi' },
    ],
  },
  {
    icon: 'layers',
    title: 'Experiment Kurulumu',
    guides: [
      { title: 'Yeni deney oluşturma ve başlatma', video: 'deney-olusturma' },
      { title: 'Problem tanımı ve veri keşfi', video: 'problem-ve-veri-kesfi' },
      { title: 'Aykırı değer tespiti (Outlier Detection)', video: 'outlier-detection' },
      { title: 'Feature engineering ve feature selection', video: 'tanitim-02-deney' },
      { title: 'Çoklu algoritma ile eğitim ve sonuçlar', video: 'tanitim-02-deney' },
    ],
  },
  {
    icon: 'cpu',
    title: 'Özel Modeller',
    guides: [
      { title: 'Dış modeli getirme ve sürümleme', video: 'tanitim-03-ozel-modeller' },
      { title: 'Retrain, Retest ve kök modelle karşılaştırma', video: 'tanitim-03-ozel-modeller' },
    ],
  },
  {
    icon: 'eye',
    title: 'Governance Kullanımı',
    guides: [
      { title: 'Model yorumlama (Interpret) ekranı', video: 'tanitim-04-model-yonetisimi' },
      { title: 'Model Report ve Validation Report', video: 'tanitim-04-model-yonetisimi' },
      { title: 'Model Audit Log ile onay kaydı', video: 'tanitim-04-model-yonetisimi' },
      { title: 'Score Card üretimi', video: 'tanitim-04-model-yonetisimi' },
      { title: 'Model Flow ve zamanlayıcı', video: 'tanitim-04-model-yonetisimi' },
    ],
  },
  {
    icon: 'rocket',
    title: 'Deployment ve Application',
    guides: [
      { title: 'Application oluşturma ve Build', video: 'tanitim-04-model-yonetisimi' },
      { title: 'Modeli deploy etme ve çıktı seçenekleri', video: 'tanitim-05-dagitim' },
      { title: 'Model Monitoring ve uyarılar', video: 'tanitim-05-dagitim' },
      { title: 'REST API ile entegrasyon', video: 'tanitim-05-dagitim' },
      { title: 'Champion/challenger karşılaştırması', video: 'tanitim-03-ozel-modeller' },
      { title: 'Batch skorlama', video: 'tanitim-06-batch' },
    ],
  },
]
