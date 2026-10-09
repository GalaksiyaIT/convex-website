// Video Eğitimler için tek kaynak: her video, kendi yazılı kılavuzuyla bir "blog gönderisi"
// gibi davranır (bkz. Videos.vue listeleme sayfası + VideoPost.vue detay sayfası). Süre,
// ilgili sayfada video metadata'sından otomatik hesaplanır (bu dosyada tutulmaz).
import girisVideoUrl from '@/assets/videos/giris.webm'
import datasetVideoUrl from '@/assets/videos/dataset-yukleme.webm'
import veriGorsellestirmeVideoUrl from '@/assets/videos/veri-gorsellestirme.webm'
import dataSampleVideoUrl from '@/assets/videos/data-sample.webm'
import projectVideoUrl from '@/assets/videos/project.webm'
import portfolioVideoUrl from '@/assets/videos/portfolio.webm'
import useCaseVideoUrl from '@/assets/videos/use-case.webm'
import experimentPipelineVideoUrl from '@/assets/videos/experiment-pipeline.webm'
import scorecardVideoUrl from '@/assets/videos/scorecard.webm'
import applicationVideoUrl from '@/assets/videos/application.webm'
import mgDeneyAramaVideoUrl from '@/assets/videos/mg-deney-arama-model-reports.webm'
import mgInterpretVideoUrl from '@/assets/videos/mg-interpret.webm'
import mgTestSonuclariVideoUrl from '@/assets/videos/mg-test-sonuclari-indirme.webm'
import mgModelIndirmeVideoUrl from '@/assets/videos/mg-model-nesnesi-indirme.webm'
import mgAuditLogVideoUrl from '@/assets/videos/mg-audit-log.webm'
import mgModelBuildVideoUrl from '@/assets/videos/mg-model-build.webm'
import mgPredictionVideoUrl from '@/assets/videos/mg-yeni-dataset-prediction.webm'
import customModelVideoUrl from '@/assets/videos/custom-model.webm'
import { iremVideoGuides } from '@/content/iremVideoGuides'

// Eski (ilk) video seti: dosyalar ve detay sayfaları korunur, /yardim/videolar listesinde şimdilik gösterilmez.
const legacyVideoGuides = [
  {
    slug: 'giris',
    title: "Convex'e giriş ve Genel Bakış panosu",
    module: 'Giriş',
    thumbnailLabel: 'Giriş',
    description:
      'Platforma giriş yaptığınızda karşınıza çıkan Genel Bakış panosu, kurumdaki tüm model çalışmalarının özetini tek ekranda sunar.',
    videoUrl: girisVideoUrl,
    body: [
      'Convex, kullanıcı adı ve şifrenizle güvenli bir girişle başlar. Giriş sonrası açılan Genel Bakış (Statistics Overview) panosu, platformdaki tüm modülleri sol menüden erişilebilir kılarken kurumun AutoML faaliyetlerinin anlık bir özetini sunar.',
      'Departman ve proje filtreleriyle bu görünüm tüm kurum genelinde veya tek bir ekip/projeye özel olarak daraltılabilir; proje sayısı, deney sayısı, üretilen ve canlıdaki model sayısı, dataset sayısı gibi metrikler yönetim ekiplerine kurumun model portföyü üzerinde anlık görünürlük sağlar.',
      'Panonun alt kısmındaki son deneyler ve sentetik veri deneyleri listesi, ekiplerin güncel çalışmalarını tek bakışta takip etmesini sağlayarak raporlama ve koordinasyon ihtiyacını azaltır.',
    ],
    steps: [
      { time: 0, text: 'Kullanıcı adı ve şifreyle güvenli giriş' },
      { time: 3.1, text: 'Genel Bakış panosu açılır; tüm modüller sol menüden erişilebilir.' },
    ],
  },
  {
    slug: 'dataset-yukleme',
    title: 'Dataset yükleme ve şema doğrulama',
    module: 'Dataset',
    thumbnailLabel: 'Dataset Yükleme',
    description:
      'Data Sets modülü, model geliştirme sürecinin ilk ve en kritik adımı olan veri yüklemeyi güvenli ve izlenebilir hale getirir.',
    videoUrl: datasetVideoUrl,
    body: [
      "Bir model geliştirme sürecinin temeli, doğru ve izlenebilir bir veri kaynağıyla başlar. Data Sets ekranındaki 'New Data Set' butonuyla önce kaynağı seçersiniz — bu örnekte 'File From Disk' ile bilgisayarınızdan bir CSV dosyası yükleyeceksiniz. Ardından dosyanızı seçer, ayırıcı (separator) karakterini ve dosya formatını belirler, dataset'e anlamlı bir ad verirsiniz.",
      "'Preview' özelliği, veriyi yüklemeden önce sütunları ve ilk satırları görüntülemenize imkân tanır; bu, hatalı veya eksik bir dosyanın sisteme girmeden fark edilmesini sağlayan basit ama kritik bir kontrol noktasıdır.",
      "'Upload' ile başlatılan yükleme, ekranın üst kısmındaki bir bildirimle takip edilir; işlem tamamlanana kadar devam ettiğini gösterir ve bittiğinde bildirim otomatik olarak kaybolur.",
      'Yükleme tamamlandığında dataset; boyutu, satır/sütun sayısı ve oluşturulma tarihiyle birlikte Data Sets listesinde kayıt altına alınır — kurumdaki tüm veri varlıklarının tek, denetlenebilir bir envanterde tutulmasını sağlar.',
    ],
    steps: [
      { time: 0, text: "Convex'e giriş yapılır ve Genel Bakış panosu açılır." },
      {
        time: 4.0,
        text: "Data Sets ekranında 'New Data Set' tıklanır ve veri kaynağı olarak 'File From Disk' seçilir.",
      },
      {
        time: 6.5,
        text: 'Bilgisayardan CSV dosyası seçilir; dataset adı ve ayırıcı (separator) karakteri girilir.',
      },
      {
        time: 12.5,
        text: "'Preview' ile sütunlar ve ilk satırlar yüklemeden önce kontrol edilir.",
      },
      {
        time: 16.5,
        text: "'Upload' başlatılır; ilerleme yüzdesi ekranın üstündeki bildirimle izlenir.",
      },
      {
        time: 23.75,
        text: 'Yükleme tamamlanır; dataset, boyutu ve satır/sütun sayısıyla listeye eklenir.',
      },
    ],
  },
  {
    slug: 'veri-gorsellestirme',
    title: 'Veri görselleştirme',
    module: 'Dataset',
    thumbnailLabel: 'Veri Görselleştirme',
    description: 'Kod yazmadan veriyi tanımak, modelleme kararlarının kalitesini doğrudan etkiler.',
    videoUrl: veriGorsellestirmeVideoUrl,
    body: [
      'Data Sets listesindeki bir dataset için görselleştirme özelliği, veri bilimi ekiplerinin ayrı bir araca geçmeden veriyi tanımasını sağlar; sütun bazında otomatik oluşturulan grafikler tek bir pencerede sunulur.',
      "Sayısal sütunlar 'Distribution Plots for Numeric Columns' altında histogramlarla, kategorik sütunlar 'Distribution Plots for Category Columns' altında sıklık grafikleriyle incelenir — dengesizlikler ve aykırı değerler modelleme öncesinde fark edilir.",
      "'Correlation Matrix' sekmesi, sütunlar arasındaki ilişkiyi tek bir tabloda özetleyerek hangi değişkenlerin birbirine bağımlı olduğunu ortaya koyar; bu içgörüler sonraki feature engineering kararlarının temelini oluşturur.",
    ],
    steps: [
      { time: 0, text: 'Data Sets listesinde arama kutusuna dataset adını yazarak filtreleyin' },
      { time: 8.26, text: "Üç nokta menüsünden 'Visualize Dataset' seçilir" },
      { time: 11.26, text: 'Sayısal sütunlar histogram ve violin plot grafikleriyle incelenir' },
      { time: 16.26, text: "Kategorik sütunlar 'Count Plots' ile sıklık grafikleriyle incelenir" },
      {
        time: 20.61,
        text: "'Correlation Matrix' sekmesi sütunlar arası ilişkiyi tek tabloda özetler",
      },
      { time: 24.61, text: 'Dataset, versiyonlar üzerinden CSV olarak dışa aktarılabilir' },
    ],
  },
  {
    slug: 'veri-ornekleme',
    title: 'Veri örnekleme',
    module: 'Dataset',
    thumbnailLabel: 'Veri Örnekleme',
    description:
      'Büyük veri setleriyle çalışan ekiplerin her deneyi tam veriyle çalıştırmasına gerek kalmaz.',
    videoUrl: dataSampleVideoUrl,
    body: [
      "Yüz binlerce veya milyonlarca satırlık dataset'lerde her deneyi tam veriyle çalıştırmak, hem zaman hem de işlem gücü açısından maliyetlidir. Data Sets listesindeki örnekleme (sampling) özelliği, bir dataset'ten tek işlemle temsili bir alt küme oluşturur.",
      "Oluşturulan örnek, orijinal dataset'in ayrı bir kopyası değil, '2 Versions' etiketiyle görünen yeni bir versiyonudur — böylece orijinal veri korunurken, daha küçük ve hızlı çalışılabilir bir versiyon üzerinde iterasyon yapılabilir.",
      'Bu yaklaşım özellikle deney ve model geliştirme aşamasında hız kazandırır; nihai model gerektiğinde tam veri üzerinde yeniden doğrulanabilir.',
    ],
    steps: [
      { time: 0, text: 'Data Sets listesinde arama kutusuna dataset adını yazarak filtreleyin' },
      { time: 7.8, text: "Üç nokta menüsünden 'Create Sampling' seçilir" },
      { time: 11.8, text: 'Örnek boyutu (Sample Size) ve hedef sütun (Target Name) belirlenir' },
      {
        time: 15.5,
        text: "Oluşturulan örnek, orijinal veriyi koruyarak '2 Versions' etiketiyle yeni bir versiyon olur",
      },
    ],
  },
  {
    slug: 'proje',
    title: 'Proje oluşturma ve yönetimi',
    module: 'Proje',
    thumbnailLabel: 'Proje',
    description:
      'Projeler, ilişkili veri ve deneyleri tek bir çalışma alanında toplayan temel organizasyon birimidir.',
    videoUrl: projectVideoUrl,
    body: [
      "Projects ekranı — üstündeki Projects, Portfolio ve Use Case sekmeleriyle — kurumdaki tüm çalışma alanlarının yönetildiği merkezi noktadır. Yeni bir proje oluştururken adını, bağlı olacağı Portfolio ve Use Case'i ve kısa bir açıklamayı tanımlarsınız.",
      'Her proje için Department Assignment ile erişim kontrolü uygulanabilir: hangi departmanların (kendi kurumunuz veya iş ortaklarınız) o projeyi görebileceği, Available Departments / Assigned Departments listeleri arasında belirlenir. Bu ekranı görme ve düzenleme yetkisi yalnızca admin kullanıcılarla sınırlıdır.',
      'Bu yapı, büyüyen bir kurumda çok sayıda ekip aynı platformu kullanırken veri ve model erişiminin kontrollü kalmasını, projelerin doğru kişilerin görünürlüğünde yönetilmesini sağlar.',
    ],
    steps: [
      {
        time: 0.0,
        text: 'Projects ekranı, kurumdaki tüm çalışma alanlarının yönetildiği merkezi noktadır.',
      },
      {
        time: 3.2,
        text: "Yeni proje oluştururken adını, Portfolyosunu, Use Case'ini ve açıklamasını tanımlarsınız.",
      },
      {
        time: 8.5,
        text: 'Her proje için Department Assignment ile erişim kontrolü uygulanabilir.',
      },
      {
        time: 14.0,
        text: 'Hangi departmanların projeyi görebileceği burada belirlenir; yetki yalnızca admin kullanıcılarındadır.',
      },
      {
        time: 19.9,
        text: 'Bu yapı, büyüyen bir kurumda proje ve model erişiminin kontrollü kalmasını sağlar.',
      },
    ],
  },
  {
    slug: 'portfoy',
    title: 'Portföy yönetimi',
    module: 'Portföy',
    thumbnailLabel: 'Portföy',
    description:
      'Portföyler, projeleri ortak bir iş alanı altında toplayarak yönetim raporlamasını kolaylaştırır.',
    videoUrl: portfolioVideoUrl,
    body: [
      'Projects ekranındaki Portfolio sekmesi, kurumdaki tüm portföyleri listeler — Retail, Corporate, SME, Agriculture gibi hazır tanımlı örnekler, kurumun iş kolu yapısını platforma taşımanın bir yoludur.',
      "'New Portfolio' ile kendi iş kollarınıza özel yeni bir portföy tanımlanabilir; projeler oluşturulurken bu portföy seçilerek aynı grup altında toplanabilir.",
      'Bu gruplama, birden çok projeyi tek bir iş alanı çerçevesinde izlemek isteyen yönetim ve risk ekipleri için raporlamayı basitleştirir.',
    ],
    steps: [
      {
        time: 3.067,
        text: 'Portfolio sekmesi, kurumdaki tüm portföyleri listeler — Retail, Corporate, SME, Agriculture gibi hazır örnekler yer alır.',
      },
      {
        time: 7.634,
        text: "'New Portfolio' ile kendi iş kolunuza özel bir portföy tanımlayıp projelerde seçebilirsiniz.",
      },
      {
        time: 12.401,
        text: 'Bu gruplama, birden çok projeyi tek bir iş alanı altında izlemeyi ve raporlamayı kolaylaştırır.',
      },
    ],
  },
  {
    slug: 'kullanim-senaryosu',
    title: 'Kullanım senaryosu tanımlama',
    module: 'Kullanım Senaryosu',
    thumbnailLabel: 'Kullanım Senaryosu',
    description:
      'Kullanım senaryoları, her modelin hangi iş problemine hizmet ettiğini kayıt altına alır.',
    videoUrl: useCaseVideoUrl,
    body: [
      'Projects ekranındaki Use Case sekmesi, kurumda tanımlı kullanım senaryolarını (örneğin Marketing, Collections, Acquisition) listeler — her biri bir iş probleminin karşılığıdır.',
      "'New Use Case' ile yeni bir senaryo tanımlanıp projeler oluşturulurken bu senaryoya bağlanabilir; böylece her proje ve model, hangi iş ihtiyacına hizmet ettiği bilgisiyle etiketlenmiş olur.",
      "Bu bağlam, özellikle Model Governance ve denetim süreçlerinde 'bu model neden var, hangi kararı destekliyor' sorusuna doğrudan ve tutarlı bir cevap sağlar.",
    ],
    steps: [
      {
        time: 3.133,
        text: 'Use Case sekmesi, kurumda tanımlı senaryoları listeler — Marketing, Collections, Acquisition gibi örnekler yer alır.',
      },
      {
        time: 7.767,
        text: "'New Use Case' ile yeni bir senaryo tanımlayıp projelerde bu senaryoya bağlanabilirsiniz.",
      },
      {
        time: 12.2,
        text: 'Bu bağlam, Model Governance ve denetim süreçlerinde modelin hangi ihtiyacı desteklediğini gösterir.',
      },
    ],
  },
  {
    slug: 'experiment-pipeline',
    title: 'Experiment Pipeline ile ilk deneyinizi kurma',
    module: 'Experiment Pipeline',
    thumbnailLabel: 'Experiment Pipeline',
    description:
      'Experiment Pipeline, veri hazırlamadan model eğitimine kadar tüm süreci tek ve izlenebilir bir akışta birleştirir.',
    videoUrl: experimentPipelineVideoUrl,
    body: [
      'Bir deney başlatıldığında sol menüde tüm pipeline adımları sırayla görünür ve deney bu adımlar arasında ilerletilir. Bu yapı, veri bilimcinin farklı araçlar arasında geçiş yapmasına gerek bırakmadan; veri temizleme, özellik mühendisliği ve model seçimi kararlarını aynı ekranda, aynı veri üzerinde almasını sağlar.',
      'Data Preparation ve Data Exploration adımlarında dataset pipeline\'a bağlanır ve ham veri üzerinde ilk inceleme yapılır. Feature Engineering aşaması ise altı alt adıma ayrılır: Basic Transformation ile sütun adları ve veri tipleri düzenlenir; Outlier Detection ile aykırı değerler tespit edilir; Feature Generation ile mevcut sütunlardan yeni özellikler türetilir; Missing Value Imputation ile eksik değerler sütun tipine göre (kategorik sütunlarda "Most Frequent Value", sayısal sütunlarda "Mean"/"Median"/"Constant" gibi yöntemlerle) doldurulur; Encoding kategorik verileri sayısala çevirir; Scaling ise sayısal sütunları aynı ölçeğe getirir.',
      'Feature Selection aşamasında, modele hangi özelliklerin dahil edileceği çok sayıda istatistiksel yöntemle daraltılır: Missing Value Threshold ve Single Unique Value Filter zayıf/bilgi taşımayan sütunları eler; Variance Threshold ve Correlation Based Filtering düşük varyanslı veya birbiriyle çok ilişkili sütunları çıkarır; VIF Analysis çok değişkenli korelasyonu (multicollinearity) kontrol eder; Feature Importance Reduction, Univariate Gini Filtering, Stepwise Elimination ve Recursive Feature Elimination ise özellikleri model performansına katkılarına göre eleyerek en güçlü değişken kümesini bulmayı hedefler.',
      "Pipeline Summary adımı, o ana kadar uygulanan tüm dönüşüm ve seçim kararlarının konsolide bir özetini sunar — eğitime geçmeden önce son bir kontrol noktasıdır. Model adımında bir veya birden fazla algoritma yapılandırılıp (Model Configuration) eğitime gönderilir (Model Running); eğitim süreci canlı bir ilerleme göstergesi ve log ekranıyla takip edilir, %100'e ulaştığında sonuçlara geçilir.",
      'Eğitim tamamlandıktan sonra Interpret Model adımı, modelin hangi değişkenlere ve nasıl karar verdiğini görselleştirirken; Tune Model adımı, seçilen algoritmanın hiperparametrelerini iyileştirerek performansı son bir kez artırma imkânı verir.',
    ],
    steps: [
      {
        time: 0,
        text: 'Yeni Deney Oluşturuluyor: Proje ve veri seti seçilip yeni bir deney başlatılıyor; oturum kuyruğa alınıp hazır hale geliyor.',
      },
      {
        time: 40.8,
        text: "Data Preparation: Veri seti pipeline'a bağlanıyor; hedef değişken ve train/test oranı gibi problem tipi ayarları yapılıyor.",
      },
      {
        time: 54.8,
        text: 'Data Exploration: Ham veri üzerinde ilk istatistiksel inceleme yapılıyor.',
      },
      {
        time: 63.8,
        text: 'Feature Engineering: Outlier Detection — Sayısal sütunlardaki aykırı değerler kutu grafikleriyle (boxplot) tespit ediliyor.',
      },
      {
        time: 103.0,
        text: 'Feature Engineering: Feature Generation — Binning gibi yöntemlerle mevcut sütunlardan yeni özellikler türetiliyor.',
      },
      {
        time: 121.0,
        text: 'Feature Engineering: Basic Transformation — Sütun adları düzenleniyor ve veri tipleri dönüştürülüyor.',
      },
      {
        time: 135.4,
        text: 'Feature Engineering: Scaling — Sayısal sütunlar seçilen yöntemle aynı ölçeğe getiriliyor.',
      },
      {
        time: 155.0,
        text: 'Feature Engineering: Missing Value Imputation — Eksik değerler, sütun tipine uygun yöntemlerle dolduruluyor.',
      },
      {
        time: 167.8,
        text: 'Feature Engineering: Encoding — Kategorik veriler sayısal forma çevriliyor.',
      },
      {
        time: 196.6,
        text: "Feature Selection: Missing Value Threshold — Eksik değer oranı yüksek sütunlar aranıp seçiliyor ve pipeline'dan çıkarılıyor.",
      },
      {
        time: 261.0,
        text: 'Pipeline Summary & Model Configuration — Pipeline özeti gözden geçirilip model eğitimi için yapılandırma tamamlanıyor.',
      },
      {
        time: 274.0,
        text: 'Model Running: Model Eğitiliyor — LightGBM modeli seçilen veriyle eğitiliyor; ilerleme ve loglar canlı olarak izleniyor.',
      },
      {
        time: 377.1,
        text: 'Interpret Model & Tune Model — Eğitim tamamlandıktan sonra model yorumlama ve hiperparametre ayarlama adımlarına geçiliyor.',
      },
    ],
  },
  {
    slug: 'score-card',
    title: 'Skorlama Kartı (Score Card)',
    module: 'Score Card',
    thumbnailLabel: 'Score Card',
    description:
      'Skorlama kartı, istatistiksel bir modeli iş birimlerinin doğrudan kullanabileceği bir karar aracına dönüştürür.',
    videoUrl: scorecardVideoUrl,
    body: [
      'Model Governance üzerinden bir deney seçilip skorlama kartı oluşturma başlatıldığında, Automatic Generation (model kalibrasyonuna göre otomatik) veya Custom Score Card (kendi kriterlerinize göre manuel) seçeneklerinden biri izlenebilir.',
      'Oluşturulan kart; Target Score, Target Odds ve PDO gibi kalibrasyon parametreleriyle birlikte her özelliği aralıklara bölerek Score, Coefficient, WOE, Population % ve Event Rate değerlerini sunar — teknik olmayan ekiplerin de güvenle kullanabileceği bir formatta.',
      'Kart, Export Card veya Send Score Card Email ile paylaşılabilir; bu, risk politikalarının ve karar eşiklerinin kurum içinde tutarlı biçimde uygulanmasını kolaylaştırır.',
    ],
    steps: [
      { time: 0, text: "Convex'e giriş yapılır ve Genel Bakış panosu açılır." },
      { time: 3.53, text: "Model Governance'ta deney adına göre arama yapılır." },
      { time: 7.0, text: 'Score Card seçilir; Automatic Generation ile devam edilir.' },
      { time: 11.0, text: 'Target Score, Target Odds ve PDO değerleriyle kart oluşturulur.' },
      { time: 15.27, text: 'Kart; Score, Coefficient, WOE, Population % ve Event Rate sunar.' },
      { time: 19.67, text: 'Export Card ve Send Score Card Email ile kart paylaşılır.' },
    ],
  },
  {
    slug: 'application',
    title: 'Application oluşturma',
    module: 'Application',
    thumbnailLabel: 'Application',
    description:
      'Application, onaylanan bir modelin gerçek iş süreçlerine bağlandığı üretim uç noktasıdır.',
    videoUrl: applicationVideoUrl,
    body: [
      "Model Governance'ın Applications ekranı, kurumda tanımlı tüm production uç noktalarını (application'ları) listeler. 'Create New Application' ile yeni bir application; bağlı olacağı proje ve kısa bir açıklamayla tanımlanır.",
      'Application adlandırması net kurallara bağlıdır (azami 20 karakter, sadece harf ve rakam, ilk karakter rakam olamaz) — bu, üretim ortamındaki adlandırma tutarlılığını korur.',
      'Application oluşturulduktan sonra modelleri buraya bağlama adımı Deployment ekranında devam eder; bu ayrım, model geliştirme ile üretime alma sorumluluklarını ayrı tutan kurumlar için önemlidir.',
    ],
    steps: [
      { time: 0, text: "Convex'e giriş yapılır ve Genel Bakış panosu açılır." },
      {
        time: 3.53,
        text: "Model Governance > Applications ekranında tanımlı tüm application'lar listelenir.",
      },
      {
        time: 9.13,
        text: 'Application adı girilir; azami 20 karakter, sadece harf ve rakam kullanılabilir.',
      },
      { time: 14.6, text: 'Bağlı olacağı proje seçilir ve kısa bir açıklama girilir.' },
      { time: 18.53, text: "'Create' ile application oluşturulur ve listeye eklenir." },
    ],
  },
  {
    slug: 'mg-deney-arama',
    title: 'Model Governance – Deney Arama ve Model Reports',
    module: 'Model Governance',
    thumbnailLabel: 'Deney Arama',
    description:
      "Model Governance'taki arama ve raporlama araçları, geçmiş çalışmaların hesap verebilirliğini sağlar.",
    videoUrl: mgDeneyAramaVideoUrl,
    body: [
      'Kurumda biriken çok sayıda deney arasında ilgili olanı bulmak, model governance sürecinin ilk adımıdır. Model Governance ekranındaki arama kutusu, deney adına göre anında filtreleme yapar.',
      'İlgili deney bulunduğunda, Actions menüsünden Generate Model Report ile o deneye ait resmi bir model raporu üretilebilir veya Send Model Report Email ile ilgili kişilere doğrudan iletilebilir.',
      'Bu akış, denetim ve risk komitesi taleplerine hızlı yanıt verebilmek için deney geçmişinin her zaman erişilebilir ve raporlanabilir olmasını sağlar.',
    ],
    steps: [
      { time: 0, text: "Convex'e giriş yapılır ve Genel Bakış panosu açılır." },
      {
        time: 3.6,
        text: 'Model Governance ekranındaki arama kutusu, deney adına göre anında filtreleme yapar.',
      },
      {
        time: 6.1,
        text: 'İlgili deney bulunur; satırdaki Actions menüsünden Generate Model Report seçilir.',
      },
      {
        time: 8.6,
        text: 'Açılan pencerede Generate Model Report ile resmi rapor üretilir veya Send Model Report Email ile ilgili kişilere iletilir.',
      },
    ],
  },
  {
    slug: 'mg-interpret',
    title:
      'Model Governance – Interpret: Summary Plot, Correlation Graph, Reason Plot, Summary Table',
    module: 'Model Governance',
    thumbnailLabel: 'Interpret',
    description:
      'Interpret ekranı, bir modelin neden o kararı verdiğini kanıtlanabilir hale getirir.',
    videoUrl: mgInterpretVideoUrl,
    body: [
      "Model Governance'ta bir deney için Show Interpret seçildiğinde, modelin karar mekanizmasını görselleştiren Interpret ekranı açılır.",
      'Summary Plot her değişkenin genel etkisini büyüklük ve yönle gösterirken, Correlation Graph değişkenler arası ilişkileri; Reason Plot ise tek bir tahminin arkasındaki gerekçeyi ortaya koyar.',
      'Summary Table bu bulguları sayısal olarak özetler — bu dört görünüm birlikte, regülatöre veya iç denetime sunulacak model dokümantasyonunun teknik omurgasını oluşturur.',
    ],
    steps: [
      { time: 0, text: "Convex'e giriş yapılır ve Genel Bakış panosu açılır." },
      {
        time: 4.0,
        text: "Model Governance'ta ilgili deney bulunur; satırdaki Interpret simgesi tıklanır.",
      },
      {
        time: 9.0,
        text: 'Interpret raporu arka planda hazırlanır; hazır olduğunda bildirim gösterilir ve sonuçlar yüklenir.',
      },
      {
        time: 14.0,
        text: 'Summary Plot, her değişkenin model tahminine etkisini büyüklük ve yönle gösterir.',
      },
      {
        time: 18.0,
        text: 'Correlation Graph sekmesinden bir değişken seçilerek diğer değişkenlerle ilişkisi incelenebilir.',
      },
      {
        time: 21.35,
        text: 'Reason Plot sekmesinde bir gözlem numarası girilip Apply ile o tahminin gerekçesi görüntülenebilir.',
      },
    ],
  },
  {
    slug: 'mg-test-sonuclari',
    title: 'Model Governance – Test Sonuçlarını İndirme',
    module: 'Model Governance',
    thumbnailLabel: 'Test Sonuçları',
    description:
      'Test sonuçlarının kurumsal paylaşımı, modelin bağımsız olarak doğrulanabilmesini sağlar.',
    videoUrl: mgTestSonuclariVideoUrl,
    body: [
      'Bir modelin üretime alınmadan önce hangi performansı gösterdiğini kanıtlamak, risk komitesi ve denetim ekipleriyle paylaşılan somut bir çıktı gerektirir.',
      'Model Governance ekranında ilgili deney adına göre bulunduktan sonra, Actions menüsünden test sonuçlarını indirme seçeneğine erişilir.',
      'İndirilen çıktı, modelin resmî onay ve denetim dosyasının bir parçası olarak kurum içi arşivde saklanabilir.',
    ],
    steps: [
      { time: 0, text: "Convex'e giriş yapılır ve Genel Bakış panosu açılır." },
      { time: 3.53, text: 'Model Governance ekranında deney adına göre arama yapılır.' },
      { time: 7.53, text: 'Actions menüsünden test sonuçları indirme seçeneğine erişilir.' },
    ],
  },
  {
    slug: 'mg-model-indirme',
    title: 'Model Governance – Model Nesnesini İndirme',
    module: 'Model Governance',
    thumbnailLabel: 'Model İndirme',
    description:
      'Eğitilen model nesnesini dışa aktarma, Convex dışındaki ortamlarla uyumluluğu ve arşivlemeyi mümkün kılar.',
    videoUrl: mgModelIndirmeVideoUrl,
    body: [
      'Bazı kurumlar, eğitilen modeli test ortamlarında veya on-premise sistemlerde de çalıştırmak ister. Model Governance ekranında ilgili deney bulunduğunda, Actions menüsünden model nesnesi indirilebilir.',
      'Bu özellik, modelin Convex dışında bağımsız olarak çalıştırılmasını veya uzun süreli arşivleme politikalarına uygun şekilde saklanmasını sağlar.',
      'Böylece model geliştirme platformdan bağımsız kalmaz, ama kurumun altyapı tercihleriyle de sınırlanmaz.',
    ],
    steps: [
      { time: 0, text: "Convex'e giriş yapılır ve Genel Bakış panosu açılır." },
      { time: 4.08, text: 'Model Governance ekranında deney adına göre arama yapılır.' },
      { time: 8.08, text: 'Actions menüsünden model nesnesi indirme seçeneğine erişilir.' },
    ],
  },
  {
    slug: 'mg-audit-log',
    title: 'Model Governance – Model Audit Log Oluşturma ve Doğrulama',
    module: 'Model Governance',
    thumbnailLabel: 'Audit Log',
    description:
      'Audit log, bir modelin denetim sürecini kayıt altına alarak regülasyon gereksinimlerini karşılar.',
    videoUrl: mgAuditLogVideoUrl,
    body: [
      "Regülasyona tabi kurumlarda her model kararının bir denetim izi taşıması gerekir. Model Governance'ta bir deney için açılan Model Audit Log penceresi, Pass, Fail, Reviewing veya Cancelled durumlarından birinin seçilmesini sağlar.",
      'Denetimi destekleyen bir dosya (örneğin bir inceleme raporu) yüklenerek kayda eklenir; bu belge, kararın gerekçesini kalıcı olarak belgeler.',
      'Pencerenin altında, o deney için birikmiş tüm önceki audit kayıtları tarih ve kullanıcı bilgisiyle listelenir — bu, BDDK/Basel gibi çerçevelerin beklediği izlenebilirlik gereksinimini doğrudan karşılar.',
    ],
    steps: [
      { time: 0, text: "Convex'e giriş yapılır ve Genel Bakış panosu açılır." },
      { time: 3.2, text: 'İlgili deney, Model Governance ekranındaki arama kutusuyla bulunur.' },
      {
        time: 5.5,
        text: 'Actions menüsünden Model Audit Log açılır; Fail seçilip destekleyici dosya eklenir.',
      },
      {
        time: 7.0,
        text: 'Yüklenen dosya, önceki audit kayıtlarıyla birlikte tarih ve kullanıcı bilgisiyle listelenir.',
      },
    ],
  },
  {
    slug: 'mg-model-build',
    title: 'Model Governance – Model Build İşlemi',
    module: 'Model Governance',
    thumbnailLabel: 'Model Build',
    description: 'Build işlemi, onaylanan bir deneyi canlıya alınmaya hazır bir modele dönüştürür.',
    videoUrl: mgModelBuildVideoUrl,
    body: [
      "Bir model onay sürecinden geçtikten sonra üretime alınabilmesi için build edilmesi gerekir. Model Governance'ta ilgili deney bulunup Actions menüsünden model build işlemi başlatılır.",
      'Build süreci, modelin gerekli tüm bağımlılıklarla birlikte paketlenmesini sağlar; bu paket, farklı ortamlarda tutarlı şekilde çalışabilecek şekilde hazırlanır.',
      "Build tamamlandığında model, Deployment ekranından bir application'a bağlanmaya hazır hâle gelir — governance ile üretime alma adımları arasındaki köprü bu şekilde kurulur.",
    ],
    steps: [
      { time: 0, text: "Convex'e giriş yapılır ve Genel Bakış panosu açılır." },
      {
        time: 3.0,
        text: "İlgili deney Model Governance'ta bulunur; Deployment Status'un boş olması modelin henüz build edilmediğini gösterir.",
      },
    ],
  },
  {
    slug: 'mg-prediction',
    title: 'Model Governance – Yeni Dataset ile Prediction',
    module: 'Model Governance',
    thumbnailLabel: 'Prediction',
    description:
      'Predictions ekranı, canlıdaki bir modeli yeni verilerle çalıştırarak tekrarlanan skorlama süreçlerini otomatikleştirir.',
    videoUrl: mgPredictionVideoUrl,
    body: [
      'Bir modelin gerçek değeri, düzenli olarak güncel veriyle çalıştırılabilmesiyle ortaya çıkar. Predictions ekranındaki Make New Prediction akışı, bir dataset ve versiyonunu seçerek modeli yeni veriyle çalıştırmayı sağlar.',
      'Validation Test anahtarı, tahmini bir doğrulama koşusu olarak işaretlemeyi sağlarken; Distributed experiment seçeneği, büyük veri hacimlerinde işlemi dağıtık modda çalıştırarak süreyi kısaltır.',
      'Başlatılan tahmin Predictions listesinde durumu (In Progress → Success) ile izlenir ve tamamlandığında sonuçlar indirilebilir — bu akış, aylık portföy taraması gibi periyodik skorlama süreçlerini standart bir işleme dönüştürür.',
    ],
    steps: [
      { time: 0, text: "Convex'e giriş yapılır ve Genel Bakış panosu açılır." },
      { time: 3.3, text: 'Model Governance ekranında ilgili deney adı aranır ve deney bulunur.' },
      {
        time: 4.5,
        text: "'Make New Prediction' ile Predict With Dataset penceresi açılır; dataset ve versiyonu seçilir.",
      },
      {
        time: 8.28,
        text: "Validation Test etkinleştirilir ve 'Continue' ile tahmin işlemi başlatılır.",
      },
      {
        time: 13.68,
        text: "Yeni tahmin listede 'In Progress' durumuyla izlenir; tamamlandığında sonuçlar indirilebilir hale gelir.",
      },
    ],
  },
  {
    slug: 'custom-model',
    title: 'Custom Model: oluşturma, yeniden eğitme ve yeniden test etme',
    module: 'Custom Model',
    thumbnailLabel: 'Custom Model',
    description:
      "Custom Models, kurumun mevcut model yatırımlarını Convex'in governance ve izleme yeteneklerine dahil eder.",
    videoUrl: customModelVideoUrl,
    body: [
      'Her kurumun, farklı ortamlarda geliştirilmiş ve hâlihazırda kullanımda olan modelleri vardır. Custom Models ekranındaki New Model akışı, bu modelleri ilgili dataset ile birlikte platforma taşımayı sağlar.',
      "İçe aktarılan model işlenirken listede 'In Progress' durumunda görünür; tamamlandığında Experiments ekranında Train Score ve Test Score gibi performans metrikleriyle bir deney kaydı olarak yer alır.",
      "Model güncel veriyle yeniden eğitilip test edildiğinde yeni bir versiyon oluşur ve sonuçlar karşılaştırılabilir — bu sayede kurum, mevcut model altyapısını sıfırdan kurmadan Convex'in denetim ve izleme yeteneklerinden faydalanabilir.",
    ],
    steps: [
      { time: 0, text: 'Custom Models ekranına gidilir.' },
      {
        time: 4.8,
        text: "'New Model' ile model dosyası yüklenir; proje, dataset, versiyon ve hedef sütun seçilir.",
      },
      {
        time: 13.08,
        text: "İçe aktarılan model listede 'In Progress' durumunda görünür; işlem tamamlanınca durum 'Ready' olur.",
      },
      {
        time: 21.12,
        text: "Modeli yeniden eğitmek için 'Retrain Model' açılır; dataset ve Cross Validation girilerek işlem başlatılır.",
      },
      {
        time: 28.32,
        text: 'Yeniden eğitilen deneyin kaydında Train Score ve Test Score değerleri oluşur; adımlar log üzerinden izlenebilir.',
      },
      {
        time: 37.62,
        text: 'Model tekrar güncellendiğinde yeni bir versiyon daha oluşur; tüm versiyonların sonuçları listede karşılaştırılabilir.',
      },
      {
        time: 45.27,
        text: "'Model Logs' ile eğitim adımları, 'Display Model Results' ile MAE, RMSE, R² ve MAPE gibi performans metrikleri incelenebilir.",
      },
    ],
  },
  {
    slug: 'deployment',
    title: 'Modeli deploy etme ve application oluşturma',
    module: 'Deployment',
    thumbnailLabel: null,
    description:
      'Deployment, onaylanan bir modelin gerçek iş süreçlerine bağlanarak değer üretmeye başladığı son adımdır.',
    videoUrl: null,
    duration: '5:54',
    body: [
      'Bir model, Model Governance sürecinden onaylı olarak çıktıktan sonra Deployment ekranından seçilip canlıya alınır.',
      "Ardından bir application'a bağlanarak API üzerinden gerçek zamanlı veya toplu (batch) skorlama için kurumun mevcut sistemlerine entegre edilebilir hale gelir.",
    ],
  },
]

// Listede yalnız İrem sesli yeni set (akış sırasıyla) görünür; eski set `hidden: true` ile gizlenir.
export const videoGuides = [
  ...iremVideoGuides,
  ...legacyVideoGuides.map((v) => ({ ...v, hidden: true })),
]
