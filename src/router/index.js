import { watch } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { getBlogPosts } from '@/content/blogPosts'
import { getVideoGuides } from '@/content/videoGuides'
import { locale, t } from '@/i18n'

const Home = () => import('@/views/Home.vue')
const Product = () => import('@/views/product/Product.vue')
const DataManagement = () => import('@/views/product/DataManagement.vue')
const ExperimentPipeline = () => import('@/views/product/ExperimentPipeline.vue')
const CustomModels = () => import('@/views/product/CustomModels.vue')
const ModelGovernance = () => import('@/views/product/ModelGovernance.vue')
const Deployment = () => import('@/views/product/Deployment.vue')
const Extensions = () => import('@/views/product/Extensions.vue')
const Solutions = () => import('@/views/Solutions.vue')
const WhyConvex = () => import('@/views/WhyConvex.vue')
const Security = () => import('@/views/Security.vue')
const Blog = () => import('@/views/Blog.vue')
const BlogPost = () => import('@/views/BlogPost.vue')
const References = () => import('@/views/References.vue')
const CaseStudies = () => import('@/views/CaseStudies.vue')
const About = () => import('@/views/About.vue')
const Contact = () => import('@/views/Contact.vue')
const ContactThankYou = () => import('@/views/ContactThankYou.vue')

const Help = () => import('@/views/help/Help.vue')
const GettingStarted = () => import('@/views/help/GettingStarted.vue')
const Documentation = () => import('@/views/help/Documentation.vue')
const Videos = () => import('@/views/help/Videos.vue')
const VideoPost = () => import('@/views/help/VideoPost.vue')
const ReleaseNotes = () => import('@/views/help/ReleaseNotes.vue')
const Support = () => import('@/views/help/Support.vue')

const Privacy = () => import('@/views/legal/Privacy.vue')
const Kvkk = () => import('@/views/legal/Kvkk.vue')
const Terms = () => import('@/views/legal/Terms.vue')
const Cookies = () => import('@/views/legal/Cookies.vue')

const NotFound = () => import('@/views/NotFound.vue')

const SITE_NAME = 'Convex'
const DEFAULT_DESCRIPTION = {
  en: 'Convex is an AutoML platform that brings model development, risk modeling and model governance together on a single platform.',
  tr: "Convex; model geliştirme, risk modelleme ve model governance'ı tek platformda birleştiren AutoML platformudur.",
}

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: { en: 'AutoML and Model Risk Management', tr: 'AutoML ve Model Risk Yönetimi' },
        description: DEFAULT_DESCRIPTION,
      },
    },

    {
      path: '/urun',
      name: 'product',
      component: Product,
      meta: {
        title: { en: 'Product', tr: 'Ürün' },
        description: {
          en: 'An end-to-end AutoML workflow, from data upload to deployment.',
          tr: 'Veri yüklemekten deploy’a kadar uçtan uca AutoML akışı.',
        },
      },
    },
    {
      path: '/urun/veri-yonetimi',
      name: 'data-management',
      component: DataManagement,
      meta: {
        title: { en: 'Data Management', tr: 'Veri Yönetimi' },
        description: {
          en: 'Ingest data from files or databases, merge and version it, and generate synthetic data.',
          tr: 'Dosyadan ya da veritabanından veri alın, birleştirin, sürümleyin ve sentetik veri üretin.',
        },
      },
    },
    {
      path: '/urun/experiment-pipeline',
      name: 'experiment-pipeline',
      component: ExperimentPipeline,
      meta: {
        title: { en: 'Experiment Pipeline', tr: 'Experiment Pipeline' },
        description: {
          en: 'Run data preparation, feature engineering and model training in a single flow.',
          tr: 'Veri hazırlama, feature engineering ve model eğitimini tek akışta yürütün.',
        },
      },
    },
    {
      path: '/urun/ozel-modeller',
      name: 'custom-models',
      component: CustomModels,
      meta: {
        title: { en: 'Custom Models', tr: 'Özel Modeller' },
        description: {
          en: 'Bring in externally trained models, version, retrain and compare them.',
          tr: 'Dışarıda eğitilmiş modelleri getirin, sürümleyin, yeniden eğitin ve karşılaştırın.',
        },
      },
    },
    {
      path: '/urun/model-governance',
      name: 'model-governance',
      component: ModelGovernance,
      meta: {
        title: { en: 'Model Governance', tr: 'Model Governance' },
        description: {
          en: 'Interpret and report on models, keep an audit log and manage retraining.',
          tr: 'Modeli yorumlayın, raporlayın, denetim kaydını tutun ve yeniden eğitimi yönetin.',
        },
      },
    },
    {
      path: '/urun/deployment',
      name: 'deployment',
      component: Deployment,
      meta: {
        title: { en: 'Deployment & Application', tr: 'Deployment & Application' },
        description: {
          en: 'Take models live, monitor them, and score via REST API and batch.',
          tr: 'Modeli canlıya alın, izleyin, REST API ve batch ile skorlayın.',
        },
      },
    },
    {
      path: '/urun/eklentiler',
      name: 'extensions',
      component: Extensions,
      meta: {
        title: { en: 'Extensions', tr: 'Eklentiler' },
        description: {
          en: 'See which data sources and algorithm packages you can connect to.',
          tr: 'Hangi veri kaynaklarına ve algoritma paketlerine bağlanabildiğinizi görün.',
        },
      },
    },

    {
      path: '/cozumler',
      name: 'solutions',
      component: Solutions,
      meta: {
        title: { en: 'Solutions', tr: 'Çözümler' },
        description: {
          en: 'Predictive modeling, risk modeling and model audit scenarios.',
          tr: 'Tahmin modelleme, risk modelleme ve model denetimi senaryoları.',
        },
      },
    },
    {
      path: '/neden-convex',
      name: 'why-convex',
      component: WhyConvex,
      meta: {
        title: { en: 'Why Convex', tr: 'Neden Convex' },
        description: {
          en: 'Straight answers to the questions to ask before you decide.',
          tr: 'Karar vermeden önce sorulacak sorulara doğrudan cevaplar.',
        },
      },
    },
    {
      path: '/guvenlik',
      name: 'security',
      component: Security,
      meta: {
        title: { en: 'Security & Compliance', tr: 'Güvenlik & Uyumluluk' },
        description: {
          en: 'Data retention, on-prem/cloud options, KVKK compliance.',
          tr: 'Veri saklama, on-prem/cloud seçenekleri, KVKK uyumu.',
        },
      },
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
      meta: {
        title: { en: 'Blog', tr: 'Blog' },
        description: {
          en: 'Articles on AutoML, model risk management and regulation.',
          tr: 'AutoML, model risk yönetimi ve regülasyon üzerine yazılar.',
        },
      },
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: BlogPost,
      meta: {
        // Başlık/description, afterEach hook'unda ilgili yazının kendi
        // içeriğinden (blogPosts.js) türetiliyor.
        dynamicFrom: 'blogPost',
      },
    },
    {
      path: '/referanslar',
      name: 'references',
      component: References,
      meta: {
        title: { en: 'References', tr: 'Referanslar' },
        description: {
          en: 'Short quotes from teams using Convex.',
          tr: 'Convex kullanan ekiplerden kısa alıntılar.',
        },
      },
    },
    {
      path: '/vaka-calismalari',
      name: 'case-studies',
      component: CaseStudies,
      meta: {
        title: { en: 'Case Studies', tr: 'Vaka Çalışmaları' },
        description: {
          en: 'Concrete, measurable results achieved by existing customers.',
          tr: 'Mevcut müşterilerin elde ettiği somut, ölçülebilir sonuçlar.',
        },
      },
    },
    {
      path: '/hakkimizda',
      name: 'about',
      component: About,
      meta: {
        title: { en: 'About Us', tr: 'Hakkımızda' },
        description: {
          en: "Convex is Galaksiya's AutoML product.",
          tr: "Convex, Galaksiya'nın AutoML ürünüdür.",
        },
      },
    },
    {
      path: '/iletisim',
      name: 'contact',
      component: Contact,
      meta: {
        title: { en: 'Contact / Request a Demo', tr: 'İletişim / Demo Talebi' },
        description: {
          en: 'Fill in the form; our team usually responds within 1 business day.',
          tr: 'Formu doldurun, ekibimiz genellikle 1 iş günü içinde dönüş yapar.',
        },
      },
    },
    {
      path: '/iletisim/tesekkur',
      name: 'contact-thank-you',
      component: ContactThankYou,
      meta: {
        title: { en: 'Request Received', tr: 'Talebiniz Alındı' },
        description: {
          en: "We've received your demo request; our team usually responds within 1 business day.",
          tr: 'Demo talebiniz bize ulaştı; ekibimiz genellikle 1 iş günü içinde size dönüş yapar.',
        },
      },
    },

    {
      path: '/yardim',
      name: 'help',
      component: Help,
      meta: {
        title: { en: 'Help Center', tr: 'Yardım Merkezi' },
        description: {
          en: 'Your starting point, with search and FAQ.',
          tr: 'Arama kutusu ve SSS ile giriş noktası.',
        },
      },
    },
    {
      path: '/yardim/baslangic',
      name: 'help-getting-started',
      component: GettingStarted,
      meta: {
        title: { en: 'Getting Started', tr: 'Başlangıç Kılavuzu' },
        description: {
          en: 'Setup and basic usage steps for your first day.',
          tr: 'İlk gün izlenecek kurulum ve temel kullanım adımları.',
        },
      },
    },
    {
      path: '/yardim/dokumantasyon',
      name: 'help-docs',
      component: Documentation,
      meta: {
        title: { en: 'Documentation', tr: 'Dokümantasyon' },
        description: {
          en: 'Usage guides, module by module.',
          tr: 'Modül modül kullanım kılavuzları.',
        },
      },
    },
    {
      path: '/yardim/videolar',
      name: 'help-videos',
      component: Videos,
      meta: {
        title: { en: 'Video Tutorials', tr: 'Video Eğitimler' },
        description: {
          en: 'Step-by-step written guides and screen recordings.',
          tr: 'Adım adım yazılı kılavuzlar ve ekran kayıtları.',
        },
      },
    },
    {
      path: '/yardim/videolar/:slug',
      name: 'help-video-post',
      component: VideoPost,
      meta: {
        dynamicFrom: 'videoGuide',
      },
    },
    {
      path: '/yardim/surum-notlari',
      name: 'help-release-notes',
      component: ReleaseNotes,
      meta: {
        title: { en: 'Release Notes', tr: 'Sürüm Notları' },
        description: {
          en: 'Announcements of new features and improvements.',
          tr: 'Yeni özellik ve iyileştirme duyuruları.',
        },
      },
    },
    {
      path: '/yardim/destek',
      name: 'help-support',
      component: Support,
      meta: {
        title: { en: 'Support Request', tr: 'Destek Talebi' },
        description: { en: 'Reach our team directly.', tr: 'Ekibimize doğrudan ulaşın.' },
      },
    },

    {
      path: '/gizlilik-politikasi',
      name: 'privacy',
      component: Privacy,
      meta: {
        title: { en: 'Privacy Policy', tr: 'Gizlilik Politikası' },
        description: {
          en: 'How your personal data is collected, used and protected on the Convex website.',
          tr: 'Convex web sitesinde kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu.',
        },
      },
    },
    {
      path: '/kvkk-aydinlatma-metni',
      name: 'kvkk',
      component: Kvkk,
      meta: {
        title: { en: 'KVKK Privacy Notice', tr: 'KVKK Aydınlatma Metni' },
        description: {
          en: 'Privacy notice on the processing of personal data under Turkish Personal Data Protection Law No. 6698 (KVKK).',
          tr: '6698 sayılı KVKK kapsamında kişisel verilerin işlenmesine ilişkin aydınlatma metni.',
        },
      },
    },
    {
      path: '/kullanim-sartlari',
      name: 'terms',
      component: Terms,
      meta: {
        title: { en: 'Terms of Use', tr: 'Kullanım Şartları' },
        description: {
          en: 'Terms and conditions for using the Convex website.',
          tr: 'Convex web sitesinin kullanımına ilişkin şartlar ve koşullar.',
        },
      },
    },
    {
      path: '/cerez-politikasi',
      name: 'cookies',
      component: Cookies,
      meta: {
        title: { en: 'Cookie Policy', tr: 'Çerez Politikası' },
        description: {
          en: 'Cookies used on the Convex website and how to manage your preferences.',
          tr: 'Convex web sitesinde kullanılan çerezler ve tercihlerinizi nasıl yönetebileceğiniz.',
        },
      },
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
      meta: {
        title: { en: 'Page Not Found', tr: 'Sayfa Bulunamadı' },
        description: DEFAULT_DESCRIPTION,
      },
    },
  ],
})

function setMetaTag(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function applyRouteMeta(to) {
  let title = t(to.meta?.title)
  let description = t(to.meta?.description ?? DEFAULT_DESCRIPTION)

  if (to.meta?.dynamicFrom === 'blogPost') {
    const post = getBlogPosts(locale.value).find((p) => p.slug === to.params.slug)
    title = post?.title ?? 'Blog'
    description = post?.excerpt ?? t(DEFAULT_DESCRIPTION)
  }

  if (to.meta?.dynamicFrom === 'videoGuide') {
    const guide = getVideoGuides(locale.value).find((v) => v.slug === to.params.slug)
    title = guide?.title ?? t({ en: 'Video Tutorials', tr: 'Video Eğitimler' })
    description = guide?.description ?? t(DEFAULT_DESCRIPTION)
  }

  document.title = title ? `${title} · ${SITE_NAME}` : SITE_NAME
  setMetaTag('description', description)
}

router.afterEach((to) => applyRouteMeta(to))

// Dil değiştiğinde aynı sayfanın başlığını/description'ını yeni dilde yeniden yaz.
watch(locale, () => applyRouteMeta(router.currentRoute.value))

export default router
