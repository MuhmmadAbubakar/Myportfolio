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
  movie: { category: string; description: string; story: string; imageAlt: string; action: string; tags: string[] }
  mortgage: {
    category: string
    description: string
    story: string
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
    story: string
    action: string
    tags: string[]
    illustration: string
  }
  report: {
    category: string
    description: string
    story: string
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
        'A movie discovery website with search, trending and top-rated films, ratings pulled straight from TMDB, and trailers through YouTube.',
      story:
        'I built this one from scratch. I added my TMDB API key, so the site pulls each movie’s score straight from TMDB, and the trailers play through YouTube right on the site. Search, trending films, top rated, and browsing by genre or year, all in one place.',
      imageAlt:
        'Hash Movies homepage with movie search, a featured film, and a trending movies section.',
      action: 'Visit website',
      tags: ['Movie discovery', 'Search', 'TMDB API'],
    },
    mortgage: {
      category: 'GOHIGHLEVEL / CRM',
      description:
        'Work for o1e Mortgage, a loan provider. We built an app called Encompass that pulls the data in and shows each user’s stats on the dashboard.',
      story:
        'o1e Mortgage gives loans to people, and I work with them on their platform. We built an app called Encompass that pulls the data in and shows it on the dashboard, the stats about each user, so the team can see where everything stands.',
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
        'An AI agent I run locally with Ollama and Qwen3 5.2B. It connects to your WhatsApp, and when you message it, it looks through its library for the right answer.',
      story:
        'Hermes runs on my own machine with Ollama and Qwen3 5.2B. It connects to WhatsApp as a user, so when you message it, it looks through its library and finds the right answer for you.',
      action: 'See AI skills',
      tags: ['Ollama', 'Qwen3 5.2B', 'AI agent'],
      illustration: 'Terminal illustration',
    },
    report: {
      category: 'POWER AUTOMATE / MICROSOFT TEAMS',
      description:
        'Built for Hashturn. A Power Automate workflow in Microsoft Teams that manages clock in and out and time-off requests, and sends each end-of-day form to the channel.',
      story:
        'I built this for Hashturn. It runs in Microsoft Teams, where the shifts manage clock in and clock out along with time-off requests. In Power Automate, the end-of-day form collects what each person fills in and sends it out in the channel.',
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
        'فلموں کی تلاش کی ویب سائٹ، جس میں تلاش، مقبول اور اعلیٰ درجہ بندی والی فلمیں، TMDB سے براہ راست لی گئی ریٹنگز، اور YouTube کے ذریعے ٹریلرز شامل ہیں۔',
      story:
        'میں نے یہ سائٹ شروع سے بنائی ہے۔ میں نے اپنی TMDB API key شامل کی، اس لیے سائٹ ہر فلم کا اسکور سیدھا TMDB سے لیتی ہے، اور ٹریلرز YouTube کے ذریعے سائٹ پر ہی چلتے ہیں۔ تلاش، مقبول فلمیں، اعلیٰ درجہ بندی، اور صنف یا سال کے مطابق براؤزنگ، سب ایک جگہ۔',
      imageAlt:
        'Hash Movies کا ابتدائی صفحہ، جس میں فلموں کی تلاش، ایک نمایاں فلم اور مقبول فلموں کا حصہ دکھایا گیا ہے۔',
      action: 'ویب سائٹ دیکھیں',
      tags: ['فلموں کی تلاش', 'سرچ', 'TMDB API'],
    },
    mortgage: {
      category: 'GOHIGHLEVEL / سی آر ایم',
      description:
        'o1e Mortgage کے لیے کام، جو لوگوں کو قرض دیتا ہے۔ ہم نے Encompass نام کی ایک ایپ بنائی جو ڈیٹا کھینچ کر لاتی ہے اور ہر صارف کے اعداد و شمار ڈیش بورڈ پر دکھاتی ہے۔',
      story:
        'o1e Mortgage لوگوں کو قرض دیتا ہے، اور میں ان کے پلیٹ فارم پر ان کے ساتھ کام کرتا ہوں۔ ہم نے Encompass نام کی ایک ایپ بنائی جو ڈیٹا کھینچ کر ڈیش بورڈ پر دکھاتی ہے، ہر صارف کے اعداد و شمار، تاکہ ٹیم دیکھ سکے کہ سب کچھ کہاں کھڑا ہے۔',
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
        'ایک اے آئی ایجنٹ جسے میں Ollama اور Qwen3 5.2B کے ساتھ مقامی طور پر چلاتا ہوں۔ یہ آپ کے WhatsApp سے جڑتا ہے، اور جب آپ اسے پیغام بھیجتے ہیں تو یہ اپنی لائبریری میں درست جواب تلاش کرتا ہے۔',
      story:
        'Hermes میری اپنی مشین پر Ollama اور Qwen3 5.2B کے ساتھ چلتا ہے۔ یہ WhatsApp سے ایک صارف کے طور پر جڑتا ہے، اس لیے جب آپ اسے پیغام بھیجتے ہیں تو یہ اپنی لائبریری میں دیکھتا ہے اور آپ کے لیے درست جواب تلاش کرتا ہے۔',
      action: 'اے آئی سکلز دیکھیں',
      tags: ['Ollama', 'Qwen3 5.2B', 'اے آئی ایجنٹ'],
      illustration: 'ٹرمینل کی تمثیلی تصویر',
    },
    report: {
      category: 'POWER AUTOMATE / MICROSOFT TEAMS',
      description:
        'Hashturn کے لیے بنایا گیا۔ Microsoft Teams میں ایک Power Automate ورک فلو جو کلاک ان اور کلاک آؤٹ اور چھٹی کی درخواستوں کو سنبھالتا ہے، اور دن کے آخر کا ہر فارم چینل میں بھیج دیتا ہے۔',
      story:
        'میں نے یہ Hashturn کے لیے بنایا ہے۔ یہ Microsoft Teams میں چلتا ہے، جہاں شفٹیں کلاک ان اور کلاک آؤٹ کے ساتھ ساتھ چھٹی کی درخواستوں کو بھی سنبھالتی ہیں۔ Power Automate میں، دن کے آخر کا فارم ہر شخص کی بھری ہوئی معلومات جمع کرتا ہے اور اسے چینل میں بھیج دیتا ہے۔',
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
        'Un sitio para descubrir películas con búsqueda, tendencias, títulos mejor valorados, valoraciones sacadas directamente de TMDB y tráileres a través de YouTube.',
      story:
        'Este lo construí desde cero. Añadí mi clave de la API de TMDB, así que el sitio saca la puntuación de cada película directamente de TMDB, y los tráileres se reproducen a través de YouTube dentro del propio sitio. Búsqueda, películas en tendencia, las mejor valoradas y navegación por género o año, todo en un solo lugar.',
      imageAlt:
        'Página de inicio de Hash Movies con búsqueda, una película destacada y una sección de tendencias.',
      action: 'Visitar sitio web',
      tags: ['Descubrir películas', 'Búsqueda', 'API de TMDB'],
    },
    mortgage: {
      category: 'GOHIGHLEVEL / CRM',
      description:
        'Trabajo para o1e Mortgage, una empresa que concede préstamos. Creamos una aplicación llamada Encompass que recoge los datos y muestra las estadísticas de cada usuario en el panel.',
      story:
        'o1e Mortgage concede préstamos a la gente, y yo trabajo con ellos en su plataforma. Creamos una aplicación llamada Encompass que recoge los datos y los muestra en el panel, las estadísticas de cada usuario, para que el equipo vea en qué punto está todo.',
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
        'Un agente de IA que ejecuto en local con Ollama y Qwen3 5.2B. Se conecta a tu WhatsApp y, cuando le escribes, busca en su biblioteca la respuesta adecuada.',
      story:
        'Hermes corre en mi propio ordenador con Ollama y Qwen3 5.2B. Se conecta a WhatsApp como un usuario, así que cuando le escribes, busca en su biblioteca y encuentra la respuesta adecuada para ti.',
      action: 'Ver habilidades de IA',
      tags: ['Ollama', 'Qwen3 5.2B', 'Agente de IA'],
      illustration: 'Ilustración de terminal',
    },
    report: {
      category: 'POWER AUTOMATE / MICROSOFT TEAMS',
      description:
        'Creado para Hashturn. Un flujo de Power Automate en Microsoft Teams que gestiona las entradas y salidas y las solicitudes de días libres, y envía cada formulario de fin de día al canal.',
      story:
        'Esto lo construí para Hashturn. Funciona en Microsoft Teams, donde los turnos gestionan las entradas y salidas junto con las solicitudes de días libres. En Power Automate, el formulario de fin de día recoge lo que rellena cada persona y lo envía al canal.',
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
        '検索、トレンド、高評価の作品、TMDBから直接取得した評価、YouTube経由の予告編を備えた映画検索サイトです。',
      story:
        'これはゼロから作りました。TMDBのAPIキーを追加したので、各映画のスコアはTMDBから直接取得され、予告編はYouTube経由でサイト内で再生されます。検索、トレンド作品、高評価作品、ジャンル別・公開年別の一覧がすべて一か所にあります。',
      imageAlt: '映画検索、注目作品、トレンド映画の一覧を表示したHash Moviesのホームページ。',
      action: 'サイトを見る',
      tags: ['映画検索', '検索機能', 'TMDB API'],
    },
    mortgage: {
      category: 'GOHIGHLEVEL / CRM',
      description:
        'ローンを提供するo1e Mortgageでの仕事です。Encompassというアプリを作り、データを取り込んで各ユーザーの統計をダッシュボードに表示しています。',
      story:
        'o1e Mortgageは人々にローンを提供する会社で、私はそのプラットフォームで一緒に仕事をしています。Encompassというアプリを作り、データを取り込んでダッシュボードに表示し、各ユーザーの統計が見られるようにしました。チームは全体の状況をひと目で把握できます。',
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
        'OllamaとQwen3 5.2Bでローカルに動かしているAIエージェントです。WhatsAppに接続し、メッセージを送るとライブラリの中から適切な答えを探してくれます。',
      story:
        'HermesはOllamaとQwen3 5.2Bを使い、自分のPCで動いています。WhatsAppにユーザーとして接続するので、メッセージを送るとライブラリを探して、あなたに合った答えを見つけてくれます。',
      action: 'AIスキルを見る',
      tags: ['Ollama', 'Qwen3 5.2B', 'AIエージェント'],
      illustration: 'ターミナルのイメージ',
    },
    report: {
      category: 'POWER AUTOMATE / MICROSOFT TEAMS',
      description:
        'Hashturn向けに作りました。Microsoft Teamsで動くPower Automateのワークフローで、出退勤と休暇の申請を管理し、終業時のフォームをチャネルに送信します。',
      story:
        'これはHashturn向けに作りました。Microsoft Teamsで動き、シフトで出退勤と休暇の申請を管理しています。Power Automateでは、終業時のフォームが各自の入力を集めてチャネルに送信します。',
      action: '実務経験を見る',
      tags: ['Power Automate', 'Microsoft Teams', 'Microsoft Forms'],
      illustration: 'フローのイメージ',
    },
  },
}
