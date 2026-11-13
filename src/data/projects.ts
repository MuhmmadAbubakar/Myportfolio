import type { Language } from './i18n'

export const movieProject = {
  title: 'Hash Movies',
  url: 'https://hash-movies.netlify.app/',
  image: '/screenshots/hash-movies.jpg',
}

interface ProjectCopy {
  nav: string
  label: string
  heading: string
  intro: string
  movie: { category: string; description: string; imageAlt: string; action: string; tags: string[] }
  mortgage: {
    category: string
    description: string
    action: string
    tags: string[]
    illustration: string
    dashboard: string
    agency: string
    accounts: string
    workflows: string
  }
}

export const projectCopy: Record<Language, ProjectCopy> = {
  en: {
    nav: 'Projects',
    label: '01 / SELECTED WORK',
    heading: 'A closer look at my work.',
    intro: 'A movie discovery website and hands-on work in the GoHighLevel ecosystem.',
    movie: {
      category: 'WEB DEVELOPMENT',
      description:
        'A movie discovery website with search, trending and top-rated films, trailers, and a directory to explore by genre or year.',
      imageAlt:
        'Hash Movies homepage with movie search, a featured film, and a trending movies section.',
      action: 'Visit website',
      tags: ['Movie discovery', 'Search', 'TMDB API'],
    },
    mortgage: {
      category: 'GOHIGHLEVEL / CRM',
      description:
        'GoHighLevel work for o1e Mortgage. The agency dashboard represents the platform environment behind this experience.',
      action: 'View experience',
      tags: ['GoHighLevel', 'Agency dashboard', 'CRM'],
      illustration: 'Dashboard illustration',
      dashboard: 'Agency Dashboard',
      agency: 'Agency workspace',
      accounts: 'Sub-accounts',
      workflows: 'Workflows',
    },
  },
  ur: {
    nav: 'پروجیکٹس',
    label: '۰۱ / منتخب کام',
    heading: 'میرے کام پر ایک نظر۔',
    intro: 'فلمیں تلاش کرنے کی ویب سائٹ اور GoHighLevel کے شعبے میں عملی تجربہ۔',
    movie: {
      category: 'ویب ڈویلپمنٹ',
      description:
        'فلمیں دریافت کرنے کی ویب سائٹ، جس میں تلاش، مقبول اور اعلیٰ درجہ بندی والی فلمیں، ٹریلرز اور صنف یا سال کے مطابق براؤزنگ شامل ہے۔',
      imageAlt:
        'Hash Movies کا ابتدائی صفحہ، جس میں فلموں کی تلاش، ایک نمایاں فلم اور مقبول فلموں کا حصہ دکھایا گیا ہے۔',
      action: 'ویب سائٹ دیکھیں',
      tags: ['فلموں کی تلاش', 'سرچ', 'TMDB API'],
    },
    mortgage: {
      category: 'GOHIGHLEVEL / سی آر ایم',
      description:
        'o1e Mortgage کے لیے GoHighLevel پر کام۔ ایجنسی ڈیش بورڈ اس تجربے سے متعلق پلیٹ فارم کے ماحول کی نمائندگی کرتا ہے۔',
      action: 'تجربہ دیکھیں',
      tags: ['GoHighLevel', 'ایجنسی ڈیش بورڈ', 'سی آر ایم'],
      illustration: 'ڈیش بورڈ کی تمثیلی تصویر',
      dashboard: 'ایجنسی ڈیش بورڈ',
      agency: 'ایجنسی ورک اسپیس',
      accounts: 'ذیلی اکاؤنٹس',
      workflows: 'ورک فلوز',
    },
  },
  es: {
    nav: 'Proyectos',
    label: '01 / TRABAJOS DESTACADOS',
    heading: 'Mi trabajo, más de cerca.',
    intro:
      'Un sitio para descubrir películas y experiencia práctica en el ecosistema de GoHighLevel.',
    movie: {
      category: 'DESARROLLO WEB',
      description:
        'Un sitio para descubrir películas con búsqueda, tendencias, títulos mejor valorados, tráileres y un directorio por género o año.',
      imageAlt:
        'Página de inicio de Hash Movies con búsqueda, una película destacada y una sección de tendencias.',
      action: 'Visitar sitio web',
      tags: ['Descubrir películas', 'Búsqueda', 'API de TMDB'],
    },
    mortgage: {
      category: 'GOHIGHLEVEL / CRM',
      description:
        'Trabajo con GoHighLevel para o1e Mortgage. El panel de agencia representa el entorno de la plataforma utilizado en esta experiencia.',
      action: 'Ver experiencia',
      tags: ['GoHighLevel', 'Panel de agencia', 'CRM'],
      illustration: 'Ilustración del panel',
      dashboard: 'Panel de agencia',
      agency: 'Espacio de la agencia',
      accounts: 'Subcuentas',
      workflows: 'Flujos de trabajo',
    },
  },
  ja: {
    nav: '制作・実務',
    label: '01 / 制作・実務紹介',
    heading: '取り組みを、もっと具体的に。',
    intro: '映画を探すWebサイトと、GoHighLevelの実務経験をご紹介します。',
    movie: {
      category: 'WEB開発',
      description:
        '検索、トレンド、高評価の作品、予告編、ジャンル別・公開年別の一覧から映画を探せるWebサイトです。',
      imageAlt: '映画検索、注目作品、トレンド映画の一覧を表示したHash Moviesのホームページ。',
      action: 'サイトを見る',
      tags: ['映画検索', '検索機能', 'TMDB API'],
    },
    mortgage: {
      category: 'GOHIGHLEVEL / CRM',
      description:
        'o1e MortgageでのGoHighLevel関連業務。エージェンシーダッシュボードは、その実務で使用するプラットフォーム環境を表しています。',
      action: '実務経験を見る',
      tags: ['GoHighLevel', '管理ダッシュボード', 'CRM'],
      illustration: 'ダッシュボードのイメージ',
      dashboard: '管理ダッシュボード',
      agency: 'エージェンシー環境',
      accounts: 'サブアカウント',
      workflows: 'ワークフロー',
    },
  },
}
