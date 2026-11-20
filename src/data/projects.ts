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
  hermes: {
    category: string
    description: string
    action: string
    tags: string[]
    illustration: string
  }
  report: {
    category: string
    description: string
    action: string
    tags: string[]
    illustration: string
  }
}

export const projectCopy: Record<Language, ProjectCopy> = {
  en: {
    nav: 'Projects',
    label: '03 / SELECTED WORK',
    heading: 'A closer look at my work.',
    intro: 'A movie discovery website, hands-on work in the GoHighLevel ecosystem, a local AI agent I run on my own machine, and a Power Automate system in Microsoft Teams.',
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
    hermes: {
      category: 'LOCAL AI AGENT',
      description:
        'An AI agent I run locally on my own machine with Ollama and Qwen3 5.2B. It browses, runs code, works with files and does research, with 21 tools and 52 skills.',
      action: 'See AI skills',
      tags: ['Ollama', 'Qwen3 5.2B', 'AI agent'],
      illustration: 'Terminal illustration',
    },
    report: {
      category: 'POWER AUTOMATE / MICROSOFT TEAMS',
      description:
        "A Power Automate workflow in Microsoft Teams that keeps the team's records in one place. When someone fills out the end-of-day form, the report goes straight to the team's private channel with HR, and time-off requests are managed in the same place.",
      action: 'See experience',
      tags: ['Power Automate', 'Microsoft Teams', 'Microsoft Forms'],
      illustration: 'Flow illustration',
    },
  },
  ur: {
    nav: 'پروجیکٹس',
    label: '۰۳ / منتخب کام',
    heading: 'میرے کام پر ایک نظر۔',
    intro: 'فلمیں تلاش کرنے کی ویب سائٹ، GoHighLevel کے شعبے میں عملی تجربہ، ایک لوکل اے آئی ایجنٹ جسے میں اپنی مشین پر چلاتا ہوں، اور Microsoft Teams میں ایک Power Automate سسٹم۔',
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
    hermes: {
      category: 'لوکل اے آئی ایجنٹ',
      description:
        'ایک اے آئی ایجنٹ جسے میں Ollama اور Qwen3 5.2B کے ساتھ اپنی مشین پر مقامی طور پر چلاتا ہوں۔ یہ براؤز کرتا ہے، کوڈ چلاتا ہے، فائلوں کے ساتھ کام کرتا ہے اور تحقیق کرتا ہے، اور اس میں 21 ٹولز اور 52 سکلز ہیں۔',
      action: 'اے آئی سکلز دیکھیں',
      tags: ['Ollama', 'Qwen3 5.2B', 'اے آئی ایجنٹ'],
      illustration: 'ٹرمینل کی تمثیلی تصویر',
    },
    report: {
      category: 'POWER AUTOMATE / MICROSOFT TEAMS',
      description:
        'Microsoft Teams میں ایک Power Automate ورک فلو جو ٹیم کا سارا ریکارڈ ایک جگہ رکھتا ہے۔ جب کوئی دن کے آخر کا فارم بھرتا ہے تو رپورٹ سیدھی HR کے ساتھ ٹیم کے نجی چینل میں چلی جاتی ہے، اور چھٹی کی درخواستیں بھی اسی جگہ سنبھالی جاتی ہیں۔',
      action: 'تجربہ دیکھیں',
      tags: ['Power Automate', 'Microsoft Teams', 'Microsoft Forms'],
      illustration: 'فلو کی تمثیلی تصویر',
    },
  },
  es: {
    nav: 'Proyectos',
    label: '03 / TRABAJOS DESTACADOS',
    heading: 'Mi trabajo, más de cerca.',
    intro:
      'Un sitio para descubrir películas, experiencia práctica en el ecosistema de GoHighLevel, un agente de IA local que ejecuto en mi propio ordenador y un sistema de Power Automate en Microsoft Teams.',
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
    hermes: {
      category: 'AGENTE DE IA LOCAL',
      description:
        'Un agente de IA que ejecuto en local en mi propio ordenador con Ollama y Qwen3 5.2B. Navega, ejecuta código, trabaja con archivos e investiga, con 21 herramientas y 52 habilidades.',
      action: 'Ver habilidades de IA',
      tags: ['Ollama', 'Qwen3 5.2B', 'Agente de IA'],
      illustration: 'Ilustración de terminal',
    },
    report: {
      category: 'POWER AUTOMATE / MICROSOFT TEAMS',
      description:
        'Un flujo de Power Automate en Microsoft Teams que guarda los registros del equipo en un solo lugar. Cuando alguien rellena el formulario de fin de día, el informe llega directo al canal privado del equipo con RR. HH., y las solicitudes de días libres se gestionan en el mismo lugar.',
      action: 'Ver experiencia',
      tags: ['Power Automate', 'Microsoft Teams', 'Microsoft Forms'],
      illustration: 'Ilustración del flujo',
    },
  },
  ja: {
    nav: '制作・実務',
    label: '03 / 制作・実務紹介',
    heading: '取り組みを、もっと具体的に。',
    intro: '映画を探すWebサイト、GoHighLevelでの実務経験、自分のPCでローカルに動かしているAIエージェント、そしてMicrosoft TeamsでのPower Automateシステムをご紹介します。',
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
    hermes: {
      category: 'ローカルAIエージェント',
      description:
        'OllamaとQwen3 5.2Bを使い、自分のPCでローカルに動かしているAIエージェントです。Webの閲覧、コードの実行、ファイル操作、リサーチを行い、21のツールと52のスキルを備えています。',
      action: 'AIスキルを見る',
      tags: ['Ollama', 'Qwen3 5.2B', 'AIエージェント'],
      illustration: 'ターミナルのイメージ',
    },
    report: {
      category: 'POWER AUTOMATE / MICROSOFT TEAMS',
      description:
        'Microsoft Teamsで動くPower Automateのワークフローで、チームの記録を一か所にまとめています。誰かが終業時のフォームを送信すると、レポートはHRと共有するチームのプライベートチャネルに直接届き、休暇の申請も同じ場所で管理できます。',
      action: '実務経験を見る',
      tags: ['Power Automate', 'Microsoft Teams', 'Microsoft Forms'],
      illustration: 'フローのイメージ',
    },
  },
}
