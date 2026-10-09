// Büyük harfli etiketler (eyebrow vb.) için: sayfa dili Türkçe olduğundan CSS `uppercase`
// İngilizce terimlerdeki "i" harfini de "İ" yapıyor (EXPERİMENT PİPELİNE). Metni önceden
// büyütüyoruz: listedeki İngilizce ürün terimleri İngilizce kurala, geri kalanı Türkçe kurala göre.
const ENGLISH_TERMS = new Set([
  'experiment',
  'experiments',
  'pipeline',
  'deployment',
  'application',
  'applications',
  'outlier',
  'detection',
  'engineering',
  'selection',
  'feature',
  'interpret',
  'audit',
  'prediction',
  'synthetic',
  'monitoring',
  'custom',
  'models',
  'model',
  'batch',
  'flow',
  'governance',
  'automl',
  'score',
  'card',
  'build',
  'report',
  'validation',
  'data',
  'set',
  'sets',
  'process',
  'results',
  'running',
  'retrain',
  'challenger',
  'champion',
  'logs',
])

export function caps(text = '') {
  return text
    .split(/([^A-Za-zÇĞİÖŞÜçğıöşü]+)/)
    .map((w) => w.toLocaleUpperCase(ENGLISH_TERMS.has(w.toLowerCase()) ? 'en' : 'tr'))
    .join('')
}
