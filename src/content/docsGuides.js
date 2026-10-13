// Dokümantasyon sayfasının (Documentation.vue) ve site geneli aramanın ortak veri
// kaynağı — modül modül kılavuz başlıkları burada tanımlı. `video`: ilgili Video Eğitim'in
// slug'ı (content/videoGuides.js); başlık o videonun yazılı anlatımına bağlanır.
import { docsGuidesEn } from '@/content/en/docsGuides'

const docsGuidesTr = [
  {
    icon: 'upload',
    title: 'Veri Yönetimi',
    guides: [
      { title: 'CSV ile veri yükleme', video: 'intro-data' },
      { title: 'Veritabanından veri alma ve senkronizasyon', video: 'intro-data' },
      { title: 'Veri setlerini birleştirme ve poligon', video: 'intro-data' },
      { title: 'Sürümleme, örnekleme ve sentetik veri', video: 'intro-data' },
      { title: 'Portföy oluşturma', video: 'creating-a-portfolio' },
    ],
  },
  {
    icon: 'layers',
    title: 'Experiment Kurulumu',
    guides: [
      { title: 'Yeni deney oluşturma ve başlatma', video: 'creating-an-experiment' },
      { title: 'Problem tanımı ve veri keşfi', video: 'problem-and-data-exploration' },
      { title: 'Aykırı değer tespiti (Outlier Detection)', video: 'outlier-detection' },
      { title: 'Feature engineering ve feature selection', video: 'intro-experiments' },
      { title: 'Çoklu algoritma ile eğitim ve sonuçlar', video: 'intro-experiments' },
    ],
  },
  {
    icon: 'cpu',
    title: 'Özel Modeller',
    guides: [
      { title: 'Dış modeli getirme ve sürümleme', video: 'intro-custom-models' },
      { title: 'Retrain, Retest ve kök modelle karşılaştırma', video: 'intro-custom-models' },
    ],
  },
  {
    icon: 'eye',
    title: 'Governance Kullanımı',
    guides: [
      { title: 'Model yorumlama (Interpret) ekranı', video: 'intro-model-governance' },
      { title: 'Model Report ve Validation Report', video: 'intro-model-governance' },
      { title: 'Model Audit Log ile onay kaydı', video: 'intro-model-governance' },
      { title: 'Score Card üretimi', video: 'intro-model-governance' },
      { title: 'Model Flow ve zamanlayıcı', video: 'intro-model-governance' },
    ],
  },
  {
    icon: 'rocket',
    title: 'Deployment ve Application',
    guides: [
      { title: 'Application oluşturma ve Build', video: 'intro-model-governance' },
      { title: 'Modeli deploy etme ve çıktı seçenekleri', video: 'intro-deployment' },
      { title: 'Model Monitoring ve uyarılar', video: 'intro-deployment' },
      { title: 'REST API ile entegrasyon', video: 'intro-deployment' },
      { title: 'Champion/challenger karşılaştırması', video: 'intro-custom-models' },
      { title: 'Batch skorlama', video: 'intro-batch' },
    ],
  },
]

// İngilizce başlıklar aynı sırayla content/en/docsGuides.js'te.
const docsGuidesEnMerged = docsGuidesTr.map((mod, i) => ({
  ...mod,
  title: docsGuidesEn[i]?.title ?? mod.title,
  guides: mod.guides.map((g, j) => ({ ...g, title: docsGuidesEn[i]?.guides?.[j] ?? g.title })),
}))

export function getDocsGuides(locale) {
  return locale === 'tr' ? docsGuidesTr : docsGuidesEnMerged
}
