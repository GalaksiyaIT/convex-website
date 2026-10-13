// İngilizce (Matilda, Eleven v4) sesli videolar: dosya, kapak ve adım zamanları (slug bazında).
// Üretim: convex-test/video/ingilizce (storyboard_en.json + en_derle.sh + site_hazirla.py).

import enTanitimFilmiVideo from '@/assets/videos/en/product-film.webm'
import enTanitimFilmiPoster from '@/assets/posters/en/product-film.jpg'
import enTanitim01VeriVideo from '@/assets/videos/en/intro-data.webm'
import enTanitim01VeriPoster from '@/assets/posters/en/intro-data.jpg'
import enPortfoyYonetimiVideo from '@/assets/videos/en/creating-a-portfolio.webm'
import enPortfoyYonetimiPoster from '@/assets/posters/en/creating-a-portfolio.jpg'
import enTanitim02DeneyVideo from '@/assets/videos/en/intro-experiments.webm'
import enTanitim02DeneyPoster from '@/assets/posters/en/intro-experiments.jpg'
import enDeneyOlusturmaVideo from '@/assets/videos/en/creating-an-experiment.webm'
import enDeneyOlusturmaPoster from '@/assets/posters/en/creating-an-experiment.jpg'
import enProblemVeVeriKesfiVideo from '@/assets/videos/en/problem-and-data-exploration.webm'
import enProblemVeVeriKesfiPoster from '@/assets/posters/en/problem-and-data-exploration.jpg'
import enOutlierDetectionVideo from '@/assets/videos/en/outlier-detection.webm'
import enOutlierDetectionPoster from '@/assets/posters/en/outlier-detection.jpg'
import enTanitim03OzelModellerVideo from '@/assets/videos/en/intro-custom-models.webm'
import enTanitim03OzelModellerPoster from '@/assets/posters/en/intro-custom-models.jpg'
import enTanitim04ModelYonetisimiVideo from '@/assets/videos/en/intro-model-governance.webm'
import enTanitim04ModelYonetisimiPoster from '@/assets/posters/en/intro-model-governance.jpg'
import enTanitim05DagitimVideo from '@/assets/videos/en/intro-deployment.webm'
import enTanitim05DagitimPoster from '@/assets/posters/en/intro-deployment.jpg'
import enTanitim06BatchVideo from '@/assets/videos/en/intro-batch.webm'
import enTanitim06BatchPoster from '@/assets/posters/en/intro-batch.jpg'
import enHizliBakisVideo from '@/assets/videos/en/quick-look.webm'
import enHizliBakisPoster from '@/assets/posters/en/quick-look.jpg'

export const videoMediaEn = {
  'product-film': {
    videoUrl: enTanitimFilmiVideo,
    posterUrl: enTanitimFilmiPoster,
    stepTimes: [
      0.0, 3.5, 10.5, 17.5, 25.0, 33.0, 39.0, 48.0, 57.5, 69.0, 75.0, 82.5, 92.0, 99.5, 107.5,
      117.0, 123.0, 132.5, 139.0, 147.5, 155.0, 162.5, 170.5, 183.0, 190.5, 196.5, 203.5, 214.5,
      221.5, 229.5, 238.5, 244.0, 250.0, 257.0, 267.5, 275.0, 284.5, 295.0, 304.0, 308.5, 313.0,
      319.5, 323.5, 330.0, 335.5, 341.5, 347.5, 353.5, 363.5, 368.5, 377.0, 382.0, 388.0, 396.5,
      401.5, 407.5, 415.0, 424.5, 433.0, 441.0,
    ],
  },
  'intro-data': {
    videoUrl: enTanitim01VeriVideo,
    posterUrl: enTanitim01VeriPoster,
    stepTimes: [0.0, 3.5, 10.5, 17.5, 25.0, 33.0, 39.0, 48.0, 57.5, 69.0, 75.0, 82.5],
  },
  'creating-a-portfolio': {
    videoUrl: enPortfoyYonetimiVideo,
    posterUrl: enPortfoyYonetimiPoster,
    stepTimes: [0.0, 4.0, 8.5, 12.5, 17.0, 20.5, 26.0],
  },
  'intro-experiments': {
    videoUrl: enTanitim02DeneyVideo,
    posterUrl: enTanitim02DeneyPoster,
    stepTimes: [
      2.5, 10.0, 18.0, 27.5, 33.5, 43.0, 49.5, 58.0, 65.5, 73.0, 81.0, 93.5, 101.0, 107.0, 114.0,
      125.0, 132.0, 140.0,
    ],
  },
  'creating-an-experiment': {
    videoUrl: enDeneyOlusturmaVideo,
    posterUrl: enDeneyOlusturmaPoster,
    stepTimes: [0.0, 5.0, 8.5, 13.0, 17.5, 21.0, 26.0, 30.5],
  },
  'problem-and-data-exploration': {
    videoUrl: enProblemVeVeriKesfiVideo,
    posterUrl: enProblemVeVeriKesfiPoster,
    stepTimes: [0.0, 5.0, 10.5, 16.0, 22.0],
  },
  'outlier-detection': {
    videoUrl: enOutlierDetectionVideo,
    posterUrl: enOutlierDetectionPoster,
    stepTimes: [0.0, 4.5, 10.0, 15.5, 20.5],
  },
  'intro-custom-models': {
    videoUrl: enTanitim03OzelModellerVideo,
    posterUrl: enTanitim03OzelModellerPoster,
    stepTimes: [2.5, 8.0, 14.0, 21.0],
  },
  'intro-model-governance': {
    videoUrl: enTanitim04ModelYonetisimiVideo,
    posterUrl: enTanitim04ModelYonetisimiPoster,
    stepTimes: [
      0.0, 7.5, 17.0, 27.5, 36.5, 41.0, 45.5, 52.0, 56.0, 62.5, 68.0, 74.0, 80.0, 86.0, 96.0, 101.0,
    ],
  },
  'intro-deployment': {
    videoUrl: enTanitim05DagitimVideo,
    posterUrl: enTanitim05DagitimPoster,
    stepTimes: [2.5, 7.5, 13.5, 22.0, 27.0, 33.0, 40.5, 50.0],
  },
  'intro-batch': {
    videoUrl: enTanitim06BatchVideo,
    posterUrl: enTanitim06BatchPoster,
    stepTimes: [2.5, 10.5],
  },
}

// Ana sayfadaki sessiz hızlı bakış döngüsü (İngilizce ekran yazılı).
export const quickLookEn = { videoUrl: enHizliBakisVideo, posterUrl: enHizliBakisPoster }
