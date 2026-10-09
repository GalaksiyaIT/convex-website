// İrem sesli (ElevenLabs) yeni video seti — akış sırasına göre. Kaynak: convex-test/video (convex-reklam-videosu skill'i).
import iremTanitimFilmiUrl from '@/assets/videos/irem/tanitim-filmi.webm'
import iremTanitim01VeriUrl from '@/assets/videos/irem/tanitim-01-veri.webm'
import iremPortfoyYonetimiUrl from '@/assets/videos/irem/portfoy-yonetimi.webm'
import iremTanitim02DeneyUrl from '@/assets/videos/irem/tanitim-02-deney.webm'
import iremDeneyOlusturmaUrl from '@/assets/videos/irem/deney-olusturma.webm'
import iremProblemVeVeriKesfiUrl from '@/assets/videos/irem/problem-ve-veri-kesfi.webm'
import iremOutlierDetectionUrl from '@/assets/videos/irem/outlier-detection.webm'
import iremTanitim03OzelModellerUrl from '@/assets/videos/irem/tanitim-03-ozel-modeller.webm'
import iremTanitim04ModelYonetisimiUrl from '@/assets/videos/irem/tanitim-04-model-yonetisimi.webm'
import iremTanitim05DagitimUrl from '@/assets/videos/irem/tanitim-05-dagitim.webm'
import iremTanitim06BatchUrl from '@/assets/videos/irem/tanitim-06-batch.webm'
import iremTanitimFilmiPoster from '@/assets/posters/tanitim-filmi.jpg'
import iremTanitim01VeriPoster from '@/assets/posters/tanitim-01-veri.jpg'
import iremPortfoyYonetimiPoster from '@/assets/posters/portfoy-yonetimi.jpg'
import iremTanitim02DeneyPoster from '@/assets/posters/tanitim-02-deney.jpg'
import iremDeneyOlusturmaPoster from '@/assets/posters/deney-olusturma.jpg'
import iremProblemVeVeriKesfiPoster from '@/assets/posters/problem-ve-veri-kesfi.jpg'
import iremOutlierDetectionPoster from '@/assets/posters/outlier-detection.jpg'
import iremTanitim03OzelModellerPoster from '@/assets/posters/tanitim-03-ozel-modeller.jpg'
import iremTanitim04ModelYonetisimiPoster from '@/assets/posters/tanitim-04-model-yonetisimi.jpg'
import iremTanitim05DagitimPoster from '@/assets/posters/tanitim-05-dagitim.jpg'
import iremTanitim06BatchPoster from '@/assets/posters/tanitim-06-batch.jpg'

export const iremVideoGuides = [
  {
    slug: 'tanitim-filmi',
    title: 'Convex tanıtım filmi',
    module: 'Tanıtım',
    thumbnailLabel: 'Tanıtım Filmi',
    description:
      "Veriden canlıdaki modele kadar Convex'in tüm yetenekleri tek bir filmde: veri, deney, özel modeller, yönetişim, dağıtım ve batch skorlama.",
    videoUrl: iremTanitimFilmiUrl,
    posterUrl: iremTanitimFilmiPoster,
    body: [
      'Verinizdeki değeri açığa çıkarın. Convex; veriden canlıdaki modele kadar her şey, tek platformda. Verilerinizi ister CSV dosyasından, ister doğrudan veritabanınızdan saniyeler içinde alın. Veritabanı kaynaklı veri setlerinizi tek tuşla senkronize edin (Sync Dataset); modelleriniz hep en güncel veriyle çalışsın. Bölge ve konum bilgilerinizi poligon olarak ekleyin (point in polygon), coğrafi veriyi de analizlerinize katın. Farklı kaynaklardan gelen verileri birleştirin (Merged dataset), hepsini tek bir veri setinde toplayın.',
      'Sentetik Veri Yönetimi (Synthetic Data Management) ile kendi verinizden CTGAN ya da CART kullanarak gerçekçi sentetik veri üretin. Gizlilik, fayda ve benzerlik puanlarıyla kaliteyi ölçün; Evolution Report ile orijinal veriyle karşılaştırın. Sentetik veriler dahil her değişiklik yeni bir sürüm olur; deneylerinizde hemen kullanın, hangi modelin hangi veriyle eğitildiğini her zaman bilin. Büyük verilerden hedef değişkeninize göre örneklem alın (Create Sampling), denemelerinizi hızlandırın. Dağılımlar, kategorik grafikler ve korelasyon matrisiyle verinizi tek tıkla tanıyın (Visualize Dataset). Çalışmalarınızı portföy ve kullanım senaryolarına (Portfolio, Use Case) göre düzenleyin, projeleri ekiplerinize atayın (Department Assignment).',
      "Deneyler'de (Experiments), tek satır kod yazmadan uçtan uca bir makine öğrenmesi iş akışı kurun. Sınıflandırma, regresyon ya da kümeleme (Classification, Regression, Clustering); problem tipinizi seçin, hedef değişkeninizi belirleyin. Veri Dengesi Kontrolü (Control of Data Balance) ile Oversampling, Undersampling ya da Class Weight seçin; az görülen sınıflar gözden kaçmasın. Data Exploration'da her sütunun istatistiklerini tek bakışta görün. Feature Engineering ile ham veriyi güçlü değişkenlere dönüştürün; Basic Transformation ile veri tiplerini tek tıkla değiştirin. Outlier Detection ile aykırı değerleri Z-Score gibi yöntemlerle bulup temizleyin.",
      "Feature Generation ile Adaptive Binning, Fixed Width Binning ya da kendi formülünüzle yeni değişkenler üretin. Missing Value Imputation ile eksik değerleri en sık değer ya da sabit bir değerle doldurun. Encoding ile kategorik verileri One-Hot ya da Label Encoding ile sayıya çevirin. Scaling ile değerleri Min Max, Standard, Robust ya da Mean Normalization yöntemleriyle ölçekleyin. Feature Selection'da dokuz yöntemle en anlamlı değişkenleri seçin; korelasyondan VIF Analysis'e, Univariate Gini'den Recursive Feature Elimination'a. Her adımda iş akışınızı izleyin; Pipeline Summary'de yaptığınız her şeyi tek ekranda görün.",
      "Uygulanan adımları geri alın (Revert) ya da iş akışını sıfırlayın (Reset pipeline); denemek serbest. Dağıtık eğitimi (Distributed experiment) tek anahtarla açın; büyük veriyi birden fazla makineye bölün. Model Configuration'da Logistic Regression'dan LightGBM'e, CatBoost'tan XGBoost'a algoritmanızı seçin, parametrelerini ayarlayın. Model Running ile eğitimi başlatın, ilerlemeyi ve kayıtları canlı izleyin. Interpret Model ile modelleri karşılaştırın; ROC eğrisi ve değişken önemiyle her kararı anlayın. Tune Model ile Auto Optimize ya da Grid Search kullanarak modelinize ince ayar yapın.",
      "Başka yerde eğittiğiniz modelleri de Özel Modeller (Custom Models) ile Convex'e getirin. Özel modelleriniz de sürümlenir (Create Version); her sürümü ayrı ayrı takip edin. Retrain ile modelinizi yeni veriyle yeniden eğitin, Retest ile güncel veride sınayın. Yeniden eğitimden sonra yeni modeli kök modelle yan yana karşılaştırın (Compare with Root Model); metrikler, değişken önemi ve SHAP değerleri tek ekranda.",
      "Model Yönetişimi: her model şeffaf, denetlenebilir ve kontrolünüzde. Model raporunu (Model Report) tek tıkla Word belgesi olarak alın; doğrulama raporunu (Validation Report) ekranda inceleyin, isterseniz PDF olarak e-postayla gönderin. Validation Report'ta T-testi, binom testi, stabilite, bootstrap ve skor dağılımı analizleriyle modelinizi doğrulayın. Yorumlama (Interpret) ekranında SHAP özet grafiği, korelasyon ve gerekçe grafikleriyle modelin her kararını açıklayın. Modelin arkasındaki iş akışını (Pipeline) adım adım görün. Lojistik regresyon modellerinde formülü (Equation) açıkça görün.",
      'Kredi modellerinizden skor kartını (Score Card) otomatik üretin, tek tıkla dışa aktarın. Eğitimin tüm kayıtlarına (Logs) her an ulaşın. Denetim kaydıyla (Model Audit Log) modelin onay durumunu ve belgelerini tek yerde saklayın. Test sonuçlarını CSV (Download Test Results), model nesnesini zip (Download Model Object) olarak indirin. Yeni bir veri setiyle (Make Prediction With New Dataset), canlıya almadan hemen toplu tahmin alın. Model Akışı (Model Flow) ile birden fazla modeli birbirine bağlayın, kendi karar akışınızı kurun.',
      'Zamanlayıcı (Scheduler) ile modelleriniz düzenli aralıklarla kendiliğinden yeniden eğitilsin. Short akışta önceki kuralların sonuçları aynen uygulanır; Long akışta kurallar yeni veride yeniden çalışır. Build ile modelinizi canlıya hazır bir pakete dönüştürün. Uygulamalar (Applications) ile modellerinizi iş ihtiyaçlarınıza göre toplayın, canlıya hazırlayın.',
      "Altyapı (Infrastructure) sekmesinde yeni ortamlarınızı kendiniz ekleyin. Model Dağıtımı'nda (Model Deployment) modelinizi dilediğiniz ortama tek tıkla alın. Tahminle birlikte ham veriyi (Raw Data) ve değişkenlerin modele girmeden önceki hâllerini (Intermediate Variables) de alın. Skor kartı sonuçları (Score Card) ve SHAP değerleri (SHAP Values) de aynı yanıtta. Otomatik İzleme'yi (Auto Monitoring) açın; izleme profilleriyle (Monitoring Profiles) eşik değerlerini siz belirleyin. Eşik aşıldığında uyarı e-postası (Alert Emails) alın, düzenli raporlarla (Scheduled Report Emails) her şey gözünüzün önünde.",
      "Canlıdaki modelin Model Report'unda performans, PSI, dağılımlar, SHAP ve veri kalitesini tek yerden izleyin. Tek bir REST isteğiyle tahmininiz ve açıklaması saniyeler içinde hazır.",
      'Batch ile verileri veritabanından okuyun, modelden geçirin, sonuçları yine veritabanına yazın. Akışı (Batch DAG) kendiniz kurun; ister elle tetikleyin, ister zamanlanmış olarak çalıştırın. Convex. Veriden karara, tek platform.',
    ],
    steps: [
      { time: 0, text: 'Verinizdeki değeri açığa çıkarın.' },
      { time: 3.5, text: 'Convex; veriden canlıdaki modele kadar her şey, tek platformda.' },
      {
        time: 9.5,
        text: 'Verilerinizi ister CSV dosyasından, ister doğrudan veritabanınızdan saniyeler içinde alın.',
      },
      {
        time: 17,
        text: 'Veritabanı kaynaklı veri setlerinizi tek tuşla senkronize edin (Sync Dataset); modelleriniz hep en güncel veriyle çalışsın.',
      },
      {
        time: 25,
        text: 'Bölge ve konum bilgilerinizi poligon olarak ekleyin (point in polygon), coğrafi veriyi de analizlerinize katın.',
      },
      {
        time: 33,
        text: 'Farklı kaynaklardan gelen verileri birleştirin (Merged dataset), hepsini tek bir veri setinde toplayın.',
      },
      {
        time: 39,
        text: 'Sentetik Veri Yönetimi (Synthetic Data Management) ile kendi verinizden CTGAN ya da CART kullanarak gerçekçi sentetik veri üretin.',
      },
      {
        time: 47.5,
        text: 'Gizlilik, fayda ve benzerlik puanlarıyla kaliteyi ölçün; Evolution Report ile orijinal veriyle karşılaştırın.',
      },
      {
        time: 55.5,
        text: 'Sentetik veriler dahil her değişiklik yeni bir sürüm olur; deneylerinizde hemen kullanın, hangi modelin hangi veriyle eğitildiğini her zaman bilin.',
      },
      {
        time: 65.5,
        text: 'Büyük verilerden hedef değişkeninize göre örneklem alın (Create Sampling), denemelerinizi hızlandırın.',
      },
      {
        time: 71.5,
        text: 'Dağılımlar, kategorik grafikler ve korelasyon matrisiyle verinizi tek tıkla tanıyın (Visualize Dataset).',
      },
      {
        time: 78,
        text: 'Çalışmalarınızı portföy ve kullanım senaryolarına (Portfolio, Use Case) göre düzenleyin, projeleri ekiplerinize atayın (Department Assignment).',
      },
      {
        time: 87.5,
        text: "Deneyler'de (Experiments), tek satır kod yazmadan uçtan uca bir makine öğrenmesi iş akışı kurun.",
      },
      {
        time: 94,
        text: 'Sınıflandırma, regresyon ya da kümeleme (Classification, Regression, Clustering); problem tipinizi seçin, hedef değişkeninizi belirleyin.',
      },
      {
        time: 101.5,
        text: 'Veri Dengesi Kontrolü (Control of Data Balance) ile Oversampling, Undersampling ya da Class Weight seçin; az görülen sınıflar gözden kaçmasın.',
      },
      { time: 110.5, text: "Data Exploration'da her sütunun istatistiklerini tek bakışta görün." },
      {
        time: 116,
        text: 'Feature Engineering ile ham veriyi güçlü değişkenlere dönüştürün; Basic Transformation ile veri tiplerini tek tıkla değiştirin.',
      },
      {
        time: 125,
        text: 'Outlier Detection ile aykırı değerleri Z-Score gibi yöntemlerle bulup temizleyin.',
      },
      {
        time: 131.5,
        text: 'Feature Generation ile Adaptive Binning, Fixed Width Binning ya da kendi formülünüzle yeni değişkenler üretin.',
      },
      {
        time: 139,
        text: 'Missing Value Imputation ile eksik değerleri en sık değer ya da sabit bir değerle doldurun.',
      },
      {
        time: 146,
        text: 'Encoding ile kategorik verileri One-Hot ya da Label Encoding ile sayıya çevirin.',
      },
      {
        time: 152.5,
        text: 'Scaling ile değerleri Min Max, Standard, Robust ya da Mean Normalization yöntemleriyle ölçekleyin.',
      },
      {
        time: 160.5,
        text: "Feature Selection'da dokuz yöntemle en anlamlı değişkenleri seçin; korelasyondan VIF Analysis'e, Univariate Gini'den Recursive Feature Elimination'a.",
      },
      {
        time: 172,
        text: "Her adımda iş akışınızı izleyin; Pipeline Summary'de yaptığınız her şeyi tek ekranda görün.",
      },
      {
        time: 179,
        text: 'Uygulanan adımları geri alın (Revert) ya da iş akışını sıfırlayın (Reset pipeline); denemek serbest.',
      },
      {
        time: 185,
        text: 'Dağıtık eğitimi (Distributed experiment) tek anahtarla açın; büyük veriyi birden fazla makineye bölün.',
      },
      {
        time: 191,
        text: "Model Configuration'da Logistic Regression'dan LightGBM'e, CatBoost'tan XGBoost'a algoritmanızı seçin, parametrelerini ayarlayın.",
      },
      {
        time: 201,
        text: 'Model Running ile eğitimi başlatın, ilerlemeyi ve kayıtları canlı izleyin.',
      },
      {
        time: 208,
        text: 'Interpret Model ile modelleri karşılaştırın; ROC eğrisi ve değişken önemiyle her kararı anlayın.',
      },
      {
        time: 216,
        text: 'Tune Model ile Auto Optimize ya da Grid Search kullanarak modelinize ince ayar yapın.',
      },
      {
        time: 225,
        text: "Başka yerde eğittiğiniz modelleri de Özel Modeller (Custom Models) ile Convex'e getirin.",
      },
      {
        time: 230,
        text: 'Özel modelleriniz de sürümlenir (Create Version); her sürümü ayrı ayrı takip edin.',
      },
      {
        time: 235.5,
        text: 'Retrain ile modelinizi yeni veriyle yeniden eğitin, Retest ile güncel veride sınayın.',
      },
      {
        time: 242.5,
        text: 'Yeniden eğitimden sonra yeni modeli kök modelle yan yana karşılaştırın (Compare with Root Model); metrikler, değişken önemi ve SHAP değerleri tek ekranda.',
      },
      { time: 252, text: 'Model Yönetişimi: her model şeffaf, denetlenebilir ve kontrolünüzde.' },
      {
        time: 258,
        text: 'Model raporunu (Model Report) tek tıkla Word belgesi olarak alın; doğrulama raporunu (Validation Report) ekranda inceleyin, isterseniz PDF olarak e-postayla gönderin.',
      },
      {
        time: 263.5,
        text: "Validation Report'ta T-testi, binom testi, stabilite, bootstrap ve skor dağılımı analizleriyle modelinizi doğrulayın.",
      },
      {
        time: 273,
        text: 'Yorumlama (Interpret) ekranında SHAP özet grafiği, korelasyon ve gerekçe grafikleriyle modelin her kararını açıklayın.',
      },
      { time: 281, text: 'Modelin arkasındaki iş akışını (Pipeline) adım adım görün.' },
      { time: 285.5, text: 'Lojistik regresyon modellerinde formülü (Equation) açıkça görün.' },
      {
        time: 290,
        text: 'Kredi modellerinizden skor kartını (Score Card) otomatik üretin, tek tıkla dışa aktarın.',
      },
      { time: 296, text: 'Eğitimin tüm kayıtlarına (Logs) her an ulaşın.' },
      {
        time: 300,
        text: 'Denetim kaydıyla (Model Audit Log) modelin onay durumunu ve belgelerini tek yerde saklayın.',
      },
      {
        time: 305.5,
        text: 'Test sonuçlarını CSV (Download Test Results), model nesnesini zip (Download Model Object) olarak indirin.',
      },
      {
        time: 311.5,
        text: 'Yeni bir veri setiyle (Make Prediction With New Dataset), canlıya almadan hemen toplu tahmin alın.',
      },
      {
        time: 316.5,
        text: 'Model Akışı (Model Flow) ile birden fazla modeli birbirine bağlayın, kendi karar akışınızı kurun.',
      },
      {
        time: 322.5,
        text: 'Zamanlayıcı (Scheduler) ile modelleriniz düzenli aralıklarla kendiliğinden yeniden eğitilsin.',
      },
      {
        time: 328.5,
        text: 'Short akışta önceki kuralların sonuçları aynen uygulanır; Long akışta kurallar yeni veride yeniden çalışır.',
      },
      { time: 337, text: 'Build ile modelinizi canlıya hazır bir pakete dönüştürün.' },
      {
        time: 342,
        text: 'Uygulamalar (Applications) ile modellerinizi iş ihtiyaçlarınıza göre toplayın, canlıya hazırlayın.',
      },
      {
        time: 351,
        text: 'Altyapı (Infrastructure) sekmesinde yeni ortamlarınızı kendiniz ekleyin.',
      },
      {
        time: 356,
        text: "Model Dağıtımı'nda (Model Deployment) modelinizi dilediğiniz ortama tek tıkla alın.",
      },
      {
        time: 361,
        text: 'Tahminle birlikte ham veriyi (Raw Data) ve değişkenlerin modele girmeden önceki hâllerini (Intermediate Variables) de alın.',
      },
      {
        time: 367.5,
        text: 'Skor kartı sonuçları (Score Card) ve SHAP değerleri (SHAP Values) de aynı yanıtta.',
      },
      {
        time: 372,
        text: "Otomatik İzleme'yi (Auto Monitoring) açın; izleme profilleriyle (Monitoring Profiles) eşik değerlerini siz belirleyin.",
      },
      {
        time: 378,
        text: 'Eşik aşıldığında uyarı e-postası (Alert Emails) alın, düzenli raporlarla (Scheduled Report Emails) her şey gözünüzün önünde.',
      },
      {
        time: 384.5,
        text: "Canlıdaki modelin Model Report'unda performans, PSI, dağılımlar, SHAP ve veri kalitesini tek yerden izleyin.",
      },
      {
        time: 393.5,
        text: 'Tek bir REST isteğiyle tahmininiz ve açıklaması saniyeler içinde hazır.',
      },
      {
        time: 401.5,
        text: 'Batch ile verileri veritabanından okuyun, modelden geçirin, sonuçları yine veritabanına yazın.',
      },
      {
        time: 408.5,
        text: 'Akışı (Batch DAG) kendiniz kurun; ister elle tetikleyin, ister zamanlanmış olarak çalıştırın.',
      },
    ],
  },
  {
    slug: 'tanitim-01-veri',
    // Genel tanıtımın bölümü: Yardım Merkezi listesinde gösterilmez, ürün sayfasında gömülü.
    hidden: true,
    title: 'Veri: yükleme, birleştirme, sentetik veri ve sürümleme',
    module: 'Tanıtım · Veri',
    thumbnailLabel: '01 · Veri',
    description:
      'CSV ya da veritabanından veri alma, senkronizasyon, poligon birleştirme, sentetik veri ve sürümleme özellikleri.',
    videoUrl: iremTanitim01VeriUrl,
    posterUrl: iremTanitim01VeriPoster,
    body: [
      'Verinizdeki değeri açığa çıkarın. Convex; veriden canlıdaki modele kadar her şey, tek platformda. Verilerinizi ister CSV dosyasından, ister doğrudan veritabanınızdan saniyeler içinde alın. Veritabanı kaynaklı veri setlerinizi tek tuşla senkronize edin (Sync Dataset); modelleriniz hep en güncel veriyle çalışsın.',
      'Bölge ve konum bilgilerinizi poligon olarak ekleyin (point in polygon), coğrafi veriyi de analizlerinize katın. Farklı kaynaklardan gelen verileri birleştirin (Merged dataset), hepsini tek bir veri setinde toplayın. Sentetik Veri Yönetimi (Synthetic Data Management) ile kendi verinizden CTGAN ya da CART kullanarak gerçekçi sentetik veri üretin. Gizlilik, fayda ve benzerlik puanlarıyla kaliteyi ölçün; Evolution Report ile orijinal veriyle karşılaştırın.',
      'Sentetik veriler dahil her değişiklik yeni bir sürüm olur; deneylerinizde hemen kullanın, hangi modelin hangi veriyle eğitildiğini her zaman bilin. Büyük verilerden hedef değişkeninize göre örneklem alın (Create Sampling), denemelerinizi hızlandırın. Dağılımlar, kategorik grafikler ve korelasyon matrisiyle verinizi tek tıkla tanıyın (Visualize Dataset). Çalışmalarınızı portföy ve kullanım senaryolarına (Portfolio, Use Case) göre düzenleyin, projeleri ekiplerinize atayın (Department Assignment).',
      'Convex. Veriden karara, tek platform.',
    ],
    steps: [
      { time: 0, text: 'Verinizdeki değeri açığa çıkarın.' },
      { time: 3.5, text: 'Convex; veriden canlıdaki modele kadar her şey, tek platformda.' },
      {
        time: 9.5,
        text: 'Verilerinizi ister CSV dosyasından, ister doğrudan veritabanınızdan saniyeler içinde alın.',
      },
      {
        time: 17,
        text: 'Veritabanı kaynaklı veri setlerinizi tek tuşla senkronize edin (Sync Dataset); modelleriniz hep en güncel veriyle çalışsın.',
      },
      {
        time: 25,
        text: 'Bölge ve konum bilgilerinizi poligon olarak ekleyin (point in polygon), coğrafi veriyi de analizlerinize katın.',
      },
      {
        time: 33,
        text: 'Farklı kaynaklardan gelen verileri birleştirin (Merged dataset), hepsini tek bir veri setinde toplayın.',
      },
      {
        time: 39,
        text: 'Sentetik Veri Yönetimi (Synthetic Data Management) ile kendi verinizden CTGAN ya da CART kullanarak gerçekçi sentetik veri üretin.',
      },
      {
        time: 47.5,
        text: 'Gizlilik, fayda ve benzerlik puanlarıyla kaliteyi ölçün; Evolution Report ile orijinal veriyle karşılaştırın.',
      },
      {
        time: 55.5,
        text: 'Sentetik veriler dahil her değişiklik yeni bir sürüm olur; deneylerinizde hemen kullanın, hangi modelin hangi veriyle eğitildiğini her zaman bilin.',
      },
      {
        time: 65.5,
        text: 'Büyük verilerden hedef değişkeninize göre örneklem alın (Create Sampling), denemelerinizi hızlandırın.',
      },
      {
        time: 71.5,
        text: 'Dağılımlar, kategorik grafikler ve korelasyon matrisiyle verinizi tek tıkla tanıyın (Visualize Dataset).',
      },
      {
        time: 78,
        text: 'Çalışmalarınızı portföy ve kullanım senaryolarına (Portfolio, Use Case) göre düzenleyin, projeleri ekiplerinize atayın (Department Assignment).',
      },
    ],
  },
  {
    slug: 'portfoy-yonetimi',
    title: 'Portföy oluşturma',
    module: 'Portföy',
    thumbnailLabel: 'Portföy',
    description:
      'Projelerinizi portföylerle düzenleyin: yeni portföy oluşturma ve listede doğrulama adım adım.',
    videoUrl: iremPortfoyYonetimiUrl,
    posterUrl: iremPortfoyYonetimiPoster,
    body: [
      'Projelerinizi portföylerle düzenleyin. Projeler (Projects) ekranında Portföy (Portfolio) sekmesine geçin. Tek tıkla yeni bir portföy oluşturun. Portföyün adını ve açıklamasını girin.',
      'Kaydedin, portföyünüz hazır. Yeni portföyünüz adı ve açıklamasıyla listede. Kimin oluşturduğu da kayıt altında. Convex ile verinizi değere dönüştürün.',
    ],
    steps: [
      { time: 0, text: 'Projelerinizi portföylerle düzenleyin.' },
      { time: 3.5, text: 'Projeler (Projects) ekranında Portföy (Portfolio) sekmesine geçin.' },
      { time: 7.5, text: 'Tek tıkla yeni bir portföy oluşturun.' },
      { time: 11, text: 'Portföyün adını ve açıklamasını girin.' },
      { time: 15.5, text: 'Kaydedin, portföyünüz hazır.' },
      { time: 19, text: 'Yeni portföyünüz adı ve açıklamasıyla listede.' },
      { time: 23, text: 'Kimin oluşturduğu da kayıt altında.' },
    ],
  },
  {
    slug: 'tanitim-02-deney',
    // Genel tanıtımın bölümü: Yardım Merkezi listesinde gösterilmez, ürün sayfasında gömülü.
    hidden: true,
    title: 'Deney: kodsuz makine öğrenmesi iş akışı',
    module: 'Tanıtım · Deney',
    thumbnailLabel: '02 · Deney',
    description:
      'Problem tanımından feature engineering ve seçimine, model eğitiminden yorumlama ve ince ayara kadar uçtan uca iş akışı.',
    videoUrl: iremTanitim02DeneyUrl,
    posterUrl: iremTanitim02DeneyPoster,
    body: [
      "Deneyler'de (Experiments), tek satır kod yazmadan uçtan uca bir makine öğrenmesi iş akışı kurun. Sınıflandırma, regresyon ya da kümeleme (Classification, Regression, Clustering); problem tipinizi seçin, hedef değişkeninizi belirleyin. Veri Dengesi Kontrolü (Control of Data Balance) ile Oversampling, Undersampling ya da Class Weight seçin; az görülen sınıflar gözden kaçmasın. Data Exploration'da her sütunun istatistiklerini tek bakışta görün.",
      'Feature Engineering ile ham veriyi güçlü değişkenlere dönüştürün; Basic Transformation ile veri tiplerini tek tıkla değiştirin. Outlier Detection ile aykırı değerleri Z-Score gibi yöntemlerle bulup temizleyin. Feature Generation ile Adaptive Binning, Fixed Width Binning ya da kendi formülünüzle yeni değişkenler üretin. Missing Value Imputation ile eksik değerleri en sık değer ya da sabit bir değerle doldurun.',
      "Encoding ile kategorik verileri One-Hot ya da Label Encoding ile sayıya çevirin. Scaling ile değerleri Min Max, Standard, Robust ya da Mean Normalization yöntemleriyle ölçekleyin. Feature Selection'da dokuz yöntemle en anlamlı değişkenleri seçin; korelasyondan VIF Analysis'e, Univariate Gini'den Recursive Feature Elimination'a. Her adımda iş akışınızı izleyin; Pipeline Summary'de yaptığınız her şeyi tek ekranda görün.",
      "Uygulanan adımları geri alın (Revert) ya da iş akışını sıfırlayın (Reset pipeline); denemek serbest. Dağıtık eğitimi (Distributed experiment) tek anahtarla açın; büyük veriyi birden fazla makineye bölün. Model Configuration'da Logistic Regression'dan LightGBM'e, CatBoost'tan XGBoost'a algoritmanızı seçin, parametrelerini ayarlayın. Model Running ile eğitimi başlatın, ilerlemeyi ve kayıtları canlı izleyin.",
      'Interpret Model ile modelleri karşılaştırın; ROC eğrisi ve değişken önemiyle her kararı anlayın. Tune Model ile Auto Optimize ya da Grid Search kullanarak modelinize ince ayar yapın. Convex. Veriden karara, tek platform.',
    ],
    steps: [
      {
        time: 2.5,
        text: "Deneyler'de (Experiments), tek satır kod yazmadan uçtan uca bir makine öğrenmesi iş akışı kurun.",
      },
      {
        time: 9,
        text: 'Sınıflandırma, regresyon ya da kümeleme (Classification, Regression, Clustering); problem tipinizi seçin, hedef değişkeninizi belirleyin.',
      },
      {
        time: 16.5,
        text: 'Veri Dengesi Kontrolü (Control of Data Balance) ile Oversampling, Undersampling ya da Class Weight seçin; az görülen sınıflar gözden kaçmasın.',
      },
      { time: 25.5, text: "Data Exploration'da her sütunun istatistiklerini tek bakışta görün." },
      {
        time: 31,
        text: 'Feature Engineering ile ham veriyi güçlü değişkenlere dönüştürün; Basic Transformation ile veri tiplerini tek tıkla değiştirin.',
      },
      {
        time: 40,
        text: 'Outlier Detection ile aykırı değerleri Z-Score gibi yöntemlerle bulup temizleyin.',
      },
      {
        time: 46.5,
        text: 'Feature Generation ile Adaptive Binning, Fixed Width Binning ya da kendi formülünüzle yeni değişkenler üretin.',
      },
      {
        time: 54,
        text: 'Missing Value Imputation ile eksik değerleri en sık değer ya da sabit bir değerle doldurun.',
      },
      {
        time: 61,
        text: 'Encoding ile kategorik verileri One-Hot ya da Label Encoding ile sayıya çevirin.',
      },
      {
        time: 67.5,
        text: 'Scaling ile değerleri Min Max, Standard, Robust ya da Mean Normalization yöntemleriyle ölçekleyin.',
      },
      {
        time: 75.5,
        text: "Feature Selection'da dokuz yöntemle en anlamlı değişkenleri seçin; korelasyondan VIF Analysis'e, Univariate Gini'den Recursive Feature Elimination'a.",
      },
      {
        time: 87,
        text: "Her adımda iş akışınızı izleyin; Pipeline Summary'de yaptığınız her şeyi tek ekranda görün.",
      },
      {
        time: 94,
        text: 'Uygulanan adımları geri alın (Revert) ya da iş akışını sıfırlayın (Reset pipeline); denemek serbest.',
      },
      {
        time: 100,
        text: 'Dağıtık eğitimi (Distributed experiment) tek anahtarla açın; büyük veriyi birden fazla makineye bölün.',
      },
      {
        time: 106,
        text: "Model Configuration'da Logistic Regression'dan LightGBM'e, CatBoost'tan XGBoost'a algoritmanızı seçin, parametrelerini ayarlayın.",
      },
      {
        time: 116,
        text: 'Model Running ile eğitimi başlatın, ilerlemeyi ve kayıtları canlı izleyin.',
      },
      {
        time: 123,
        text: 'Interpret Model ile modelleri karşılaştırın; ROC eğrisi ve değişken önemiyle her kararı anlayın.',
      },
      {
        time: 131,
        text: 'Tune Model ile Auto Optimize ya da Grid Search kullanarak modelinize ince ayar yapın.',
      },
    ],
  },
  {
    slug: 'deney-olusturma',
    title: 'Deney oluşturma ve başlatma',
    module: 'Deney',
    thumbnailLabel: 'Deney Oluşturma',
    description:
      'Projenizde yeni bir deney oluşturun, veri setini seçin ve iş akışını saniyeler içinde başlatın.',
    videoUrl: iremDeneyOlusturmaUrl,
    posterUrl: iremDeneyOlusturmaPoster,
    next: 'problem-ve-veri-kesfi',
    body: [
      "Convex'te ilk deneyinizi saniyeler içinde başlatın. Projenizi açın. Deney Oluştur (Create Experiment) ile deneyinize bir ad verin. Veri setini ve sürümünü seçin.",
      'Deneyiniz oluşturuldu. Deney Kurulumunu Başlat (Start Experiment Setup) ile ortamı hazırlayın. Kısa süre içinde deney hazır. Deneyi Başlat (Start Experiment) ile iş akışı açılır.',
    ],
    steps: [
      { time: 0, text: "Convex'te ilk deneyinizi saniyeler içinde başlatın." },
      { time: 4.5, text: 'Projenizi açın.' },
      { time: 8, text: 'Deney Oluştur (Create Experiment) ile deneyinize bir ad verin.' },
      { time: 12, text: 'Veri setini ve sürümünü seçin.' },
      { time: 16.5, text: 'Deneyiniz oluşturuldu.' },
      {
        time: 19.5,
        text: 'Deney Kurulumunu Başlat (Start Experiment Setup) ile ortamı hazırlayın.',
      },
      { time: 24.5, text: 'Kısa süre içinde deney hazır.' },
      { time: 28, text: 'Deneyi Başlat (Start Experiment) ile iş akışı açılır.' },
    ],
  },
  {
    slug: 'problem-ve-veri-kesfi',
    title: 'Problem tanımı ve veri keşfi',
    module: 'Deney',
    thumbnailLabel: 'Problem ve Keşif',
    description:
      'Problem tipini ve hedef değişkeni belirleyin, Data Exploration ile sütun istatistiklerini inceleyin.',
    videoUrl: iremProblemVeVeriKesfiUrl,
    posterUrl: iremProblemVeVeriKesfiPoster,
    next: 'outlier-detection',
    body: [
      "Önce problemi tanımlayın, sonra verinizi tanıyın. Data Preparation ekranında problem tipi sınıflandırma (Classification). Hedef değişken olarak temerrüt göstergesi PD'yi seçin. Data Exploration, tüm sütunların istatistiklerini tek tabloda sunar.",
      'Eksik değer, ortalama ve dağılım bilgileri bir bakışta.',
    ],
    steps: [
      { time: 0, text: 'Önce problemi tanımlayın, sonra verinizi tanıyın.' },
      {
        time: 4.5,
        text: 'Data Preparation ekranında problem tipi sınıflandırma (Classification).',
      },
      { time: 9, text: "Hedef değişken olarak temerrüt göstergesi PD'yi seçin." },
      { time: 14, text: 'Data Exploration, tüm sütunların istatistiklerini tek tabloda sunar.' },
      { time: 19.5, text: 'Eksik değer, ortalama ve dağılım bilgileri bir bakışta.' },
    ],
  },
  {
    slug: 'outlier-detection',
    title: 'Aykırı değer tespiti (Outlier Detection)',
    module: 'Deney',
    thumbnailLabel: 'Outlier Detection',
    description:
      'Sayısal sütunlardaki aykırı değerleri Z-Score ile tespit edip tek tıkla temizleyin.',
    videoUrl: iremOutlierDetectionUrl,
    posterUrl: iremOutlierDetectionPoster,
    comingNext: 'Feature Generation',
    body: [
      'Aykırı değerleri saniyeler içinde bulun ve temizleyin. Outlier Detection, sayısal sütunları kutu grafiğiyle gösterir. Analiz edilecek sütunları seçin. Z-Score yöntemiyle aykırı değerleri tek tıkla tespit edin.',
      'Sonuçları inceleyin, aykırı kayıtları kaldırın.',
    ],
    steps: [
      { time: 0, text: 'Aykırı değerleri saniyeler içinde bulun ve temizleyin.' },
      { time: 4.5, text: 'Outlier Detection, sayısal sütunları kutu grafiğiyle gösterir.' },
      { time: 9.5, text: 'Analiz edilecek sütunları seçin.' },
      { time: 15, text: 'Z-Score yöntemiyle aykırı değerleri tek tıkla tespit edin.' },
      { time: 20, text: 'Sonuçları inceleyin, aykırı kayıtları kaldırın.' },
    ],
  },
  {
    slug: 'tanitim-03-ozel-modeller',
    // Genel tanıtımın bölümü: Yardım Merkezi listesinde gösterilmez, ürün sayfasında gömülü.
    hidden: true,
    title: 'Özel modeller: getir, sürümle, yeniden eğit',
    module: 'Tanıtım · Özel Modeller',
    thumbnailLabel: '03 · Özel Modeller',
    description:
      "Dışarıda eğitilmiş modelleri Convex'e getirme, sürümleme, Retrain/Retest ve kök modelle karşılaştırma.",
    videoUrl: iremTanitim03OzelModellerUrl,
    posterUrl: iremTanitim03OzelModellerPoster,
    body: [
      "Başka yerde eğittiğiniz modelleri de Özel Modeller (Custom Models) ile Convex'e getirin. Özel modelleriniz de sürümlenir (Create Version); her sürümü ayrı ayrı takip edin. Retrain ile modelinizi yeni veriyle yeniden eğitin, Retest ile güncel veride sınayın. Yeniden eğitimden sonra yeni modeli kök modelle yan yana karşılaştırın (Compare with Root Model); metrikler, değişken önemi ve SHAP değerleri tek ekranda.",
      'Convex. Veriden karara, tek platform.',
    ],
    steps: [
      {
        time: 2.5,
        text: "Başka yerde eğittiğiniz modelleri de Özel Modeller (Custom Models) ile Convex'e getirin.",
      },
      {
        time: 7.5,
        text: 'Özel modelleriniz de sürümlenir (Create Version); her sürümü ayrı ayrı takip edin.',
      },
      {
        time: 13,
        text: 'Retrain ile modelinizi yeni veriyle yeniden eğitin, Retest ile güncel veride sınayın.',
      },
      {
        time: 20,
        text: 'Yeniden eğitimden sonra yeni modeli kök modelle yan yana karşılaştırın (Compare with Root Model); metrikler, değişken önemi ve SHAP değerleri tek ekranda.',
      },
    ],
  },
  {
    slug: 'tanitim-04-model-yonetisimi',
    // Genel tanıtımın bölümü: Yardım Merkezi listesinde gösterilmez, ürün sayfasında gömülü.
    hidden: true,
    title: 'Model yönetişimi',
    module: 'Tanıtım · Model Yönetişimi',
    thumbnailLabel: '04 · Model Yönetişimi',
    description:
      'Raporlar, doğrulama, yorumlama, skor kartı, denetim kaydı, model akışı, zamanlayıcı ve build — şeffaf ve denetlenebilir modeller.',
    videoUrl: iremTanitim04ModelYonetisimiUrl,
    posterUrl: iremTanitim04ModelYonetisimiPoster,
    body: [
      "Model Yönetişimi: her model şeffaf, denetlenebilir ve kontrolünüzde. Model raporunu (Model Report) tek tıkla Word belgesi olarak alın; doğrulama raporunu (Validation Report) ekranda inceleyin, isterseniz PDF olarak e-postayla gönderin. Validation Report'ta T-testi, binom testi, stabilite, bootstrap ve skor dağılımı analizleriyle modelinizi doğrulayın. Yorumlama (Interpret) ekranında SHAP özet grafiği, korelasyon ve gerekçe grafikleriyle modelin her kararını açıklayın.",
      'Modelin arkasındaki iş akışını (Pipeline) adım adım görün. Lojistik regresyon modellerinde formülü (Equation) açıkça görün. Kredi modellerinizden skor kartını (Score Card) otomatik üretin, tek tıkla dışa aktarın. Eğitimin tüm kayıtlarına (Logs) her an ulaşın.',
      'Denetim kaydıyla (Model Audit Log) modelin onay durumunu ve belgelerini tek yerde saklayın. Test sonuçlarını CSV (Download Test Results), model nesnesini zip (Download Model Object) olarak indirin. Yeni bir veri setiyle (Make Prediction With New Dataset), canlıya almadan hemen toplu tahmin alın. Model Akışı (Model Flow) ile birden fazla modeli birbirine bağlayın, kendi karar akışınızı kurun.',
      'Zamanlayıcı (Scheduler) ile modelleriniz düzenli aralıklarla kendiliğinden yeniden eğitilsin. Short akışta önceki kuralların sonuçları aynen uygulanır; Long akışta kurallar yeni veride yeniden çalışır. Build ile modelinizi canlıya hazır bir pakete dönüştürün. Uygulamalar (Applications) ile modellerinizi iş ihtiyaçlarınıza göre toplayın, canlıya hazırlayın.',
      'Convex. Veriden karara, tek platform.',
    ],
    steps: [
      { time: 0, text: 'Model Yönetişimi: her model şeffaf, denetlenebilir ve kontrolünüzde.' },
      {
        time: 6,
        text: 'Model raporunu (Model Report) tek tıkla Word belgesi olarak alın; doğrulama raporunu (Validation Report) ekranda inceleyin, isterseniz PDF olarak e-postayla gönderin.',
      },
      {
        time: 11.5,
        text: "Validation Report'ta T-testi, binom testi, stabilite, bootstrap ve skor dağılımı analizleriyle modelinizi doğrulayın.",
      },
      {
        time: 21,
        text: 'Yorumlama (Interpret) ekranında SHAP özet grafiği, korelasyon ve gerekçe grafikleriyle modelin her kararını açıklayın.',
      },
      { time: 29, text: 'Modelin arkasındaki iş akışını (Pipeline) adım adım görün.' },
      { time: 33.5, text: 'Lojistik regresyon modellerinde formülü (Equation) açıkça görün.' },
      {
        time: 38,
        text: 'Kredi modellerinizden skor kartını (Score Card) otomatik üretin, tek tıkla dışa aktarın.',
      },
      { time: 44, text: 'Eğitimin tüm kayıtlarına (Logs) her an ulaşın.' },
      {
        time: 48,
        text: 'Denetim kaydıyla (Model Audit Log) modelin onay durumunu ve belgelerini tek yerde saklayın.',
      },
      {
        time: 53.5,
        text: 'Test sonuçlarını CSV (Download Test Results), model nesnesini zip (Download Model Object) olarak indirin.',
      },
      {
        time: 59.5,
        text: 'Yeni bir veri setiyle (Make Prediction With New Dataset), canlıya almadan hemen toplu tahmin alın.',
      },
      {
        time: 64.5,
        text: 'Model Akışı (Model Flow) ile birden fazla modeli birbirine bağlayın, kendi karar akışınızı kurun.',
      },
      {
        time: 70.5,
        text: 'Zamanlayıcı (Scheduler) ile modelleriniz düzenli aralıklarla kendiliğinden yeniden eğitilsin.',
      },
      {
        time: 76.5,
        text: 'Short akışta önceki kuralların sonuçları aynen uygulanır; Long akışta kurallar yeni veride yeniden çalışır.',
      },
      { time: 85, text: 'Build ile modelinizi canlıya hazır bir pakete dönüştürün.' },
      {
        time: 90,
        text: 'Uygulamalar (Applications) ile modellerinizi iş ihtiyaçlarınıza göre toplayın, canlıya hazırlayın.',
      },
    ],
  },
  {
    slug: 'tanitim-05-dagitim',
    // Genel tanıtımın bölümü: Yardım Merkezi listesinde gösterilmez, ürün sayfasında gömülü.
    hidden: true,
    title: 'Altyapı ve model dağıtımı',
    module: 'Tanıtım · Dağıtım',
    thumbnailLabel: '05 · Dağıtım',
    description:
      'Ortam ekleme, tek tıkla dağıtım, çıktı seçenekleri, otomatik izleme, Model Report ve REST API.',
    videoUrl: iremTanitim05DagitimUrl,
    posterUrl: iremTanitim05DagitimPoster,
    body: [
      "Altyapı (Infrastructure) sekmesinde yeni ortamlarınızı kendiniz ekleyin. Model Dağıtımı'nda (Model Deployment) modelinizi dilediğiniz ortama tek tıkla alın. Tahminle birlikte ham veriyi (Raw Data) ve değişkenlerin modele girmeden önceki hâllerini (Intermediate Variables) de alın. Skor kartı sonuçları (Score Card) ve SHAP değerleri (SHAP Values) de aynı yanıtta.",
      "Otomatik İzleme'yi (Auto Monitoring) açın; izleme profilleriyle (Monitoring Profiles) eşik değerlerini siz belirleyin. Eşik aşıldığında uyarı e-postası (Alert Emails) alın, düzenli raporlarla (Scheduled Report Emails) her şey gözünüzün önünde. Canlıdaki modelin Model Report'unda performans, PSI, dağılımlar, SHAP ve veri kalitesini tek yerden izleyin. Tek bir REST isteğiyle tahmininiz ve açıklaması saniyeler içinde hazır.",
      'Convex. Veriden karara, tek platform.',
    ],
    steps: [
      {
        time: 2.5,
        text: 'Altyapı (Infrastructure) sekmesinde yeni ortamlarınızı kendiniz ekleyin.',
      },
      {
        time: 7.5,
        text: "Model Dağıtımı'nda (Model Deployment) modelinizi dilediğiniz ortama tek tıkla alın.",
      },
      {
        time: 12.5,
        text: 'Tahminle birlikte ham veriyi (Raw Data) ve değişkenlerin modele girmeden önceki hâllerini (Intermediate Variables) de alın.',
      },
      {
        time: 19,
        text: 'Skor kartı sonuçları (Score Card) ve SHAP değerleri (SHAP Values) de aynı yanıtta.',
      },
      {
        time: 23.5,
        text: "Otomatik İzleme'yi (Auto Monitoring) açın; izleme profilleriyle (Monitoring Profiles) eşik değerlerini siz belirleyin.",
      },
      {
        time: 29.5,
        text: 'Eşik aşıldığında uyarı e-postası (Alert Emails) alın, düzenli raporlarla (Scheduled Report Emails) her şey gözünüzün önünde.',
      },
      {
        time: 36,
        text: "Canlıdaki modelin Model Report'unda performans, PSI, dağılımlar, SHAP ve veri kalitesini tek yerden izleyin.",
      },
      { time: 45, text: 'Tek bir REST isteğiyle tahmininiz ve açıklaması saniyeler içinde hazır.' },
    ],
  },
  {
    slug: 'tanitim-06-batch',
    // Genel tanıtımın bölümü: Yardım Merkezi listesinde gösterilmez, ürün sayfasında gömülü.
    hidden: true,
    title: 'Batch skorlama',
    module: 'Tanıtım · Batch',
    thumbnailLabel: '06 · Batch',
    description:
      'Veritabanından okuyup modelden geçirerek sonuçları yine veritabanına yazan toplu skorlama akışları.',
    videoUrl: iremTanitim06BatchUrl,
    posterUrl: iremTanitim06BatchPoster,
    body: [
      'Batch ile verileri veritabanından okuyun, modelden geçirin, sonuçları yine veritabanına yazın. Akışı (Batch DAG) kendiniz kurun; ister elle tetikleyin, ister zamanlanmış olarak çalıştırın. Convex. Veriden karara, tek platform.',
    ],
    steps: [
      {
        time: 2.5,
        text: 'Batch ile verileri veritabanından okuyun, modelden geçirin, sonuçları yine veritabanına yazın.',
      },
      {
        time: 9.5,
        text: 'Akışı (Batch DAG) kendiniz kurun; ister elle tetikleyin, ister zamanlanmış olarak çalıştırın.',
      },
    ],
  },
]
