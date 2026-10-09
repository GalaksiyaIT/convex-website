import { createRouter, createWebHistory } from 'vue-router'
import { blogPosts } from '@/content/blogPosts'
import { videoGuides } from '@/content/videoGuides'

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
const DEFAULT_DESCRIPTION =
  "Convex; model geliştirme, risk modelleme ve model governance'ı tek platformda birleştiren AutoML platformudur."

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
        title: 'AutoML ve Model Risk Yönetimi',
        description: DEFAULT_DESCRIPTION,
      },
    },

    {
      path: '/urun',
      name: 'product',
      component: Product,
      meta: {
        title: 'Ürün',
        description: 'Veri yüklemekten deploy’a kadar uçtan uca AutoML akışı.',
      },
    },
    {
      path: '/urun/veri-yonetimi',
      name: 'data-management',
      component: DataManagement,
      meta: {
        title: 'Veri Yönetimi',
        description:
          'Dosyadan ya da veritabanından veri alın, birleştirin, sürümleyin ve sentetik veri üretin.',
      },
    },
    {
      path: '/urun/experiment-pipeline',
      name: 'experiment-pipeline',
      component: ExperimentPipeline,
      meta: {
        title: 'Experiment Pipeline',
        description: 'Veri hazırlama, feature engineering ve model eğitimini tek akışta yürütün.',
      },
    },
    {
      path: '/urun/ozel-modeller',
      name: 'custom-models',
      component: CustomModels,
      meta: {
        title: 'Özel Modeller',
        description:
          'Dışarıda eğitilmiş modelleri getirin, sürümleyin, yeniden eğitin ve karşılaştırın.',
      },
    },
    {
      path: '/urun/model-governance',
      name: 'model-governance',
      component: ModelGovernance,
      meta: {
        title: 'Model Governance',
        description:
          'Modeli yorumlayın, raporlayın, denetim kaydını tutun ve yeniden eğitimi yönetin.',
      },
    },
    {
      path: '/urun/deployment',
      name: 'deployment',
      component: Deployment,
      meta: {
        title: 'Deployment & Application',
        description: 'Modeli canlıya alın, izleyin, REST API ve batch ile skorlayın.',
      },
    },
    {
      path: '/urun/eklentiler',
      name: 'extensions',
      component: Extensions,
      meta: {
        title: 'Eklentiler',
        description: 'Hangi veri kaynaklarına ve algoritma paketlerine bağlanabildiğinizi görün.',
      },
    },

    {
      path: '/cozumler',
      name: 'solutions',
      component: Solutions,
      meta: {
        title: 'Çözümler',
        description: 'Tahmin modelleme, risk modelleme ve model denetimi senaryoları.',
      },
    },
    {
      path: '/neden-convex',
      name: 'why-convex',
      component: WhyConvex,
      meta: {
        title: 'Neden Convex',
        description: 'Karar vermeden önce sorulacak sorulara doğrudan cevaplar.',
      },
    },
    {
      path: '/guvenlik',
      name: 'security',
      component: Security,
      meta: {
        title: 'Güvenlik & Uyumluluk',
        description: 'Veri saklama, on-prem/cloud seçenekleri, KVKK uyumu.',
      },
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
      meta: {
        title: 'Blog',
        description: 'AutoML, model risk yönetimi ve regülasyon üzerine yazılar.',
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
        title: 'Referanslar',
        description: 'Convex kullanan ekiplerden kısa alıntılar.',
      },
    },
    {
      path: '/vaka-calismalari',
      name: 'case-studies',
      component: CaseStudies,
      meta: {
        title: 'Vaka Çalışmaları',
        description: 'Mevcut müşterilerin elde ettiği somut, ölçülebilir sonuçlar.',
      },
    },
    {
      path: '/hakkimizda',
      name: 'about',
      component: About,
      meta: {
        title: 'Hakkımızda',
        description: "Convex, Galaksiya'nın AutoML ürünüdür.",
      },
    },
    {
      path: '/iletisim',
      name: 'contact',
      component: Contact,
      meta: {
        title: 'İletişim / Demo Talebi',
        description: 'Formu doldurun, ekibimiz genellikle 1 iş günü içinde dönüş yapar.',
      },
    },
    {
      path: '/iletisim/tesekkur',
      name: 'contact-thank-you',
      component: ContactThankYou,
      meta: {
        title: 'Talebiniz Alındı',
        description:
          'Demo talebiniz bize ulaştı; ekibimiz genellikle 1 iş günü içinde size dönüş yapar.',
      },
    },

    {
      path: '/yardim',
      name: 'help',
      component: Help,
      meta: {
        title: 'Yardım Merkezi',
        description: 'Arama kutusu ve SSS ile giriş noktası.',
      },
    },
    {
      path: '/yardim/baslangic',
      name: 'help-getting-started',
      component: GettingStarted,
      meta: {
        title: 'Başlangıç Kılavuzu',
        description: 'İlk gün izlenecek kurulum ve temel kullanım adımları.',
      },
    },
    {
      path: '/yardim/dokumantasyon',
      name: 'help-docs',
      component: Documentation,
      meta: {
        title: 'Dokümantasyon',
        description: 'Modül modül kullanım kılavuzları.',
      },
    },
    {
      path: '/yardim/videolar',
      name: 'help-videos',
      component: Videos,
      meta: {
        title: 'Video Eğitimler',
        description: 'Adım adım yazılı kılavuzlar ve ekran kayıtları.',
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
        title: 'Sürüm Notları',
        description: 'Yeni özellik ve iyileştirme duyuruları.',
      },
    },
    {
      path: '/yardim/destek',
      name: 'help-support',
      component: Support,
      meta: {
        title: 'Destek Talebi',
        description: 'Ekibimize doğrudan ulaşın.',
      },
    },

    {
      path: '/gizlilik-politikasi',
      name: 'privacy',
      component: Privacy,
      meta: {
        title: 'Gizlilik Politikası',
        description:
          'Convex web sitesinde kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu.',
      },
    },
    {
      path: '/kvkk-aydinlatma-metni',
      name: 'kvkk',
      component: Kvkk,
      meta: {
        title: 'KVKK Aydınlatma Metni',
        description:
          '6698 sayılı KVKK kapsamında kişisel verilerin işlenmesine ilişkin aydınlatma metni.',
      },
    },
    {
      path: '/kullanim-sartlari',
      name: 'terms',
      component: Terms,
      meta: {
        title: 'Kullanım Şartları',
        description: 'Convex web sitesinin kullanımına ilişkin şartlar ve koşullar.',
      },
    },
    {
      path: '/cerez-politikasi',
      name: 'cookies',
      component: Cookies,
      meta: {
        title: 'Çerez Politikası',
        description:
          'Convex web sitesinde kullanılan çerezler ve tercihlerinizi nasıl yönetebileceğiniz.',
      },
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
      meta: { title: 'Sayfa Bulunamadı', description: DEFAULT_DESCRIPTION },
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

router.afterEach((to) => {
  let title = to.meta?.title
  let description = to.meta?.description ?? DEFAULT_DESCRIPTION

  if (to.meta?.dynamicFrom === 'blogPost') {
    const post = blogPosts.find((p) => p.slug === to.params.slug)
    title = post?.title ?? 'Blog'
    description = post?.excerpt ?? DEFAULT_DESCRIPTION
  }

  if (to.meta?.dynamicFrom === 'videoGuide') {
    const guide = videoGuides.find((v) => v.slug === to.params.slug)
    title = guide?.title ?? 'Video Eğitimler'
    description = guide?.description ?? DEFAULT_DESCRIPTION
  }

  document.title = title ? `${title} · ${SITE_NAME}` : SITE_NAME
  setMetaTag('description', description)
})

export default router
