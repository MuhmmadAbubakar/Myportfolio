export const languages = [
  { code: 'en', label: 'English', path: '/', locale: 'en_US' },
  { code: 'ur', label: 'اردو', path: '/ur/', locale: 'ur_PK' },
  { code: 'es', label: 'Español', path: '/es/', locale: 'es_ES' },
  { code: 'ja', label: '日本語', path: '/ja/', locale: 'ja_JP' },
] as const

export type Language = (typeof languages)[number]['code']
export interface Copy {
  title: string
  description: string
  name: string
  skip: string
  home: string
  navigation: string
  language: string
  nav: {
    expertise: string
    experience: string
    testimonials: string
    about: string
    contact: string
  }
  hero: {
    eyebrow: string
    greeting: string
    lineOne: string
    lineTwo: string
    description: string
    primary: string
    secondary: string
    scroll: string
  }
  workflow: {
    label: string
    title: string
    steps: { title: string; detail: string }[]
    note: string
  }
  companies: string
  expertise: {
    label: string
    heading: string
    intro: string
    items: { title: string; text: string; tags: string[] }[]
  }
  experience: {
    label: string
    heading: string
    intro: string
    roleLabel: string
    items: { company: string; role: string; duration?: string; text: string; tags: string[] }[]
  }
  testimonials: {
    label: string
    heading: string
    intro: string
    average: string
    averageLabel: string
    count: string
    client: string
  }
  about: {
    label: string
    heading: string
    paragraphs: string[]
    focusLabel: string
    focus: string[]
    github: string
    githubText: string
    githubLink: string
  }
  contact: { label: string; heading: string; text: string; action: string; email: string }
  footer: { socials: string; linkedinUnavailable: string }
  notFound: { title: string; text: string; back: string }
}

/** Client reviews supplied by Abubakar, Nov 20. Shown in English in every language; no reviewer names were supplied, so they are presented as client reviews. */
export const testimonialQuotes = [
  'Great assistance. Thank you Abubakar.',
  "Abubakar was great, he worked with me to identify the issue clearly and although he wasn't able to fix it, he escalated the issue for me to hopefully find someone who can fix it. Thanks",
  'Abubakar was able to explain why my Assigned user were going to my mastermind email account and the consequences of changing the email address. It enabling me to make an informed decision.',
  'Abubakar was very friendly and assisted me quickly with my request!',
  "Yes, Sir, I'm very grateful that they are there to help because I was struggling with this for a while, so I'm thankful that they will take care of it for me. I guess now I will have to learn to do it for myself so I can teach my clients to do it if I have to, but I'm so glad that they're working that out for me. Thanks.",
  'I really appreciate that Abubakar asked if there was anything else I needed before signing off.',
  'Abubakar was extremely helpful, answering every question and providing information to help me resolve my issue.',
  "Abubakar was really patient and awesome! I have been trying to resolve this issue since 10/21 and he took time to understand my need and assist me. As a result, I do not have to manually update my client's website. Thank you.",
  'Abubakar gave me steps to try and solve my problem. However, because I could not find a phone number available in my area to purchase, I am not sure if the steps will work. I am giving 5 stars because of the customer support that was provided.',
  "Today, I just don't have the words of appreciation. For my Mastermind team support. There are exceptionally phenomenal. An absolutely a blessing. Following right along. With Daddy, Tony, Uncle Dean's. Mission and purpose, and that's what I love. I'm right with you?",
]

export const translations: Record<Language, Copy> = {
  en: {
    title: 'Abubakar Mughal — Web Developer & Automation Expert',
    description:
      'Abubakar Mughal’s portfolio. Web development, RPA automation, and GoHighLevel expertise, with experience at Hashturn, o1e Mortgage, and HL Pro Tools.',
    name: 'Abubakar Mughal',
    skip: 'Skip to content',
    home: 'Home',
    navigation: 'Main navigation',
    language: 'Choose language',
    nav: {
      expertise: 'Expertise',
      experience: 'Experience',
      testimonials: 'Testimonials',
      about: 'About',
      contact: 'Let’s talk',
    },
    hero: {
      eyebrow: 'WEB DEVELOPER · AUTOMATION EXPERT',
      greeting: 'Hello, I’m Abubakar Mughal.',
      lineOne: 'Thoughtful websites.',
      lineTwo: 'Smarter workflows.',
      description:
        'I bring websites, automation, and GoHighLevel together to help businesses work better. From the first interaction to the work behind the scenes.',
      primary: 'Explore my work',
      secondary: 'Get in touch',
      scroll: 'A little more about what I do',
    },
    workflow: {
      label: 'THE WAY I THINK',
      title: 'Connect the dots.',
      steps: [
        { title: 'Build', detail: 'Websites that connect' },
        { title: 'Integrate', detail: 'Systems that work together' },
        { title: 'Automate', detail: 'Less repetitive work' },
      ],
      note: 'Good technology makes work feel simpler.',
    },
    companies: 'EXPERIENCE ACROSS',
    expertise: {
      label: '02 / EXPERTISE',
      heading: 'Where I can help.',
      intro:
        'The website is just the beginning. I connect the experience with the systems that support it.',
      items: [
        {
          title: 'Website development',
          text: 'Thoughtful, responsive websites with clear structure and an experience that feels right on every screen.',
          tags: ['Web development', 'Responsive design'],
        },
        {
          title: 'RPA & automation',
          text: 'Practical automation for repetitive tasks, connecting steps and giving people more room to focus.',
          tags: ['RPA', 'Workflow automation'],
        },
        {
          title: 'GoHighLevel & support',
          text: 'Hands-on HighLevel experience and technical problem-solving to help keep business systems working smoothly.',
          tags: ['GoHighLevel', 'Technical support'],
        },
        {
          title: 'Agentic AI',
          text: 'AI agents that take on multi-step work — drafting, following up, and updating systems — with clear guardrails and human oversight.',
          tags: ['Agentic AI', 'AI agents'],
        },
      ],
    },
    experience: {
      label: '03 / EXPERIENCE',
      heading: 'The work behind the skills.',
      intro: 'Experience in website development, automation, and the HighLevel ecosystem.',
      roleLabel: 'ROLE',
      items: [
        {
          company: 'Hashturn',
          role: 'Senior Website Developer & RPA Automation Expert',
          text: 'Website development, robotic process automation, and agentic AI, with a focus on practical digital experiences and more efficient workflows.',
          tags: ['Website development', 'RPA automation', 'Agentic AI'],
        },
        {
          company: 'o1e Mortgage',
          role: 'Agency Admin',
          duration: '8 months',
          text: 'Agency Admin for o1e Mortgage on GoHighLevel, applying hands-on platform knowledge in a mortgage business environment.',
          tags: ['GoHighLevel', 'CRM'],
        },
        {
          company: 'HL Pro Tools',
          role: 'Technical Expert',
          text: 'Technical expertise in the HighLevel ecosystem, with a focus on understanding issues and helping people navigate their tools.',
          tags: ['Technical support', 'HighLevel'],
        },
      ],
    },
    testimonials: {
      label: '04 / TESTIMONIALS',
      heading: 'What clients say.',
      intro: 'Ten client reviews — every one 5 out of 5.',
      average: '5.0',
      averageLabel: 'Average rating',
      count: '10 client reviews',
      client: 'Client review',
    },
    about: {
      label: '05 / ABOUT',
      heading: 'A builder at heart.\nA problem-solver by nature.',
      paragraphs: [
        'I’m Abubakar Mughal, a website developer and RPA automation expert. My work connects what people see on screen with the processes that happen behind it.',
        'My experience with Hashturn, o1e Mortgage, and HL Pro Tools brings together web development, GoHighLevel, and technical problem-solving. I care about making technology useful, understandable, and easier to work with.',
      ],
      focusLabel: 'MY FOCUS',
      focus: [
        'Clear, usable web experiences',
        'Connected business workflows',
        'Practical technical solutions',
      ],
      github: 'A closer look at the code.',
      githubText: 'Explore my repositories and development work on GitHub.',
      githubLink: 'Visit my GitHub',
    },
    contact: {
      label: '06 / CONTACT',
      heading: 'Let’s build something\nthat works for you.',
      text: 'Have a website, an automation idea, or a HighLevel challenge in mind? Tell me about it.',
      action: 'Start a conversation',
      email: 'Email me',
    },
    footer: {
      socials: 'Social profiles',
      linkedinUnavailable: 'LinkedIn — profile link coming soon',
    },
    notFound: {
      title: 'This page took a wrong turn.',
      text: 'The page you’re looking for isn’t here. Let’s get you back to the portfolio.',
      back: 'Back to home',
    },
  },
  ur: {
    title: 'ابوبکر مغل — ویب ڈویلپر اور آٹومیشن ماہر',
    description:
      'ابوبکر مغل کا پورٹ فولیو۔ ویب ڈویلپمنٹ، آر پی اے آٹومیشن اور GoHighLevel میں مہارت، Hashturn، o1e Mortgage اور HL Pro Tools کے ساتھ کام کا تجربہ۔',
    name: 'ابوبکر مغل',
    skip: 'اصل مواد پر جائیں',
    home: 'ابتدائی صفحہ',
    navigation: 'مرکزی نیویگیشن',
    language: 'زبان منتخب کریں',
    nav: {
      expertise: 'مہارتیں',
      experience: 'تجربہ',
      testimonials: 'آراء',
      about: 'میرے بارے میں',
      contact: 'رابطہ کریں',
    },
    hero: {
      eyebrow: 'ویب ڈویلپر · آٹومیشن ماہر',
      greeting: 'السلام علیکم، میں ابوبکر مغل ہوں۔',
      lineOne: 'بہتر ویب سائٹس۔',
      lineTwo: 'آسان کام کے طریقے۔',
      description:
        'میں ویب سائٹس، آٹومیشن اور GoHighLevel کو یکجا کرتا ہوں تاکہ کاروبار بہتر انداز میں کام کر سکیں۔ پہلے رابطے سے لے کر پس منظر میں ہونے والے کام تک۔',
      primary: 'میرا کام دیکھیں',
      secondary: 'رابطہ کریں',
      scroll: 'میرے کام کے بارے میں مزید جانیں',
    },
    workflow: {
      label: 'میرا اندازِ فکر',
      title: 'ہر قدم کو جوڑیں۔',
      steps: [
        { title: 'تعمیر', detail: 'لوگوں کو جوڑنے والی ویب سائٹس' },
        { title: 'انضمام', detail: 'مل کر کام کرنے والے سسٹمز' },
        { title: 'آٹومیشن', detail: 'بار بار کے کام میں کمی' },
      ],
      note: 'اچھی ٹیکنالوجی کام کو آسان بناتی ہے۔',
    },
    companies: 'ان اداروں کے ساتھ کام کا تجربہ',
    expertise: {
      label: '۰۲ / مہارتیں',
      heading: 'میں کہاں مدد کر سکتا ہوں۔',
      intro:
        'ویب سائٹ تو صرف آغاز ہے۔ میں صارف کے تجربے کو اس کے پیچھے کام کرنے والے سسٹمز سے جوڑتا ہوں۔',
      items: [
        {
          title: 'ویب سائٹ ڈویلپمنٹ',
          text: 'واضح ساخت اور آسان استعمال والی ویب سائٹس، جو ہر اسکرین پر اچھا تجربہ فراہم کریں۔',
          tags: ['ویب ڈویلپمنٹ', 'ریسپانسیو ڈیزائن'],
        },
        {
          title: 'آر پی اے اور آٹومیشن',
          text: 'بار بار کیے جانے والے کاموں کی عملی آٹومیشن، تاکہ لوگ اہم کاموں پر زیادہ توجہ دے سکیں۔',
          tags: ['آر پی اے', 'ورک فلو آٹومیشن'],
        },
        {
          title: 'GoHighLevel اور معاونت',
          text: 'HighLevel کا عملی تجربہ اور تکنیکی مسائل کا حل، تاکہ کاروباری سسٹمز بہتر انداز میں چلتے رہیں۔',
          tags: ['GoHighLevel', 'تکنیکی معاونت'],
        },
        {
          title: 'ایجنٹک اے آئی',
          text: 'ایسے اے آئی ایجنٹس جو کئی مراحل والا کام سنبھالیں — مسودے تیار کرنا، فالو اپ اور سسٹمز کو اپ ڈیٹ کرنا — واضح حدود اور انسانی نگرانی کے ساتھ۔',
          tags: ['ایجنٹک اے آئی', 'اے آئی ایجنٹس'],
        },
      ],
    },
    experience: {
      label: '۰۳ / تجربہ',
      heading: 'مہارتوں کے پیچھے کا تجربہ۔',
      intro: 'ویب ڈویلپمنٹ، آٹومیشن اور HighLevel کے شعبوں میں کام کا تجربہ۔',
      roleLabel: 'ذمہ داری',
      items: [
        {
          company: 'Hashturn',
          role: 'سینئر ویب سائٹ ڈویلپر اور آر پی اے آٹومیشن ماہر',
          text: 'ویب سائٹ ڈویلپمنٹ، روبوٹک پروسیس آٹومیشن اور ایجنٹک اے آئی، بہتر ڈیجیٹل تجربات اور مؤثر کام کے طریقوں پر توجہ کے ساتھ۔',
          tags: ['ویب سائٹ ڈویلپمنٹ', 'آر پی اے آٹومیشن', 'ایجنٹک اے آئی'],
        },
        {
          company: 'o1e Mortgage',
          role: 'ایجنسی ایڈمن',
          duration: '8 ماہ',
          text: 'o1e Mortgage میں GoHighLevel پر ایجنسی ایڈمن، مارگیج کاروبار کے ماحول میں پلیٹ فارم کے عملی علم کا استعمال کرتے ہوئے۔',
          tags: ['GoHighLevel', 'سی آر ایم'],
        },
        {
          company: 'HL Pro Tools',
          role: 'تکنیکی ماہر',
          text: 'HighLevel کے شعبے میں تکنیکی مہارت، مسائل کو سمجھنے اور لوگوں کو ان کے ٹولز استعمال کرنے میں مدد دینے پر توجہ۔',
          tags: ['تکنیکی معاونت', 'HighLevel'],
        },
      ],
    },
    testimonials: {
      label: '۰۴ / آراء',
      heading: 'کلائنٹس کیا کہتے ہیں۔',
      intro: 'دس کلائنٹ جائزے — ہر ایک 5 میں سے 5۔',
      average: '5.0',
      averageLabel: 'اوسط درجہ بندی',
      count: '10 کلائنٹ جائزے',
      client: 'کلائنٹ کا جائزہ',
    },
    about: {
      label: '۰۵ / میرے بارے میں',
      heading: 'تعمیر کا شوق۔\nمسائل حل کرنے کا جذبہ۔',
      paragraphs: [
        'میں ابوبکر مغل ہوں، ویب سائٹ ڈویلپر اور آر پی اے آٹومیشن ماہر۔ میرا کام اسکرین پر نظر آنے والے تجربے کو پس منظر میں چلنے والے عمل سے جوڑتا ہے۔',
        'Hashturn، o1e Mortgage اور HL Pro Tools کے ساتھ میرا تجربہ ویب ڈویلپمنٹ، GoHighLevel اور تکنیکی مسائل کے حل کا امتزاج ہے۔ میری توجہ ٹیکنالوجی کو مفید، قابلِ فہم اور آسان بنانے پر ہے۔',
      ],
      focusLabel: 'میری توجہ',
      focus: ['واضح اور آسان ویب تجربات', 'باہم مربوط کاروباری عمل', 'عملی تکنیکی حل'],
      github: 'میرے کوڈ پر ایک نظر۔',
      githubText: 'GitHub پر میری ریپوزٹریز اور ڈویلپمنٹ کے کام کو دیکھیں۔',
      githubLink: 'میرا GitHub دیکھیں',
    },
    contact: {
      label: '۰۶ / رابطہ',
      heading: 'آئیں کچھ ایسا بنائیں\nجو آپ کے کام آئے۔',
      text: 'ویب سائٹ، آٹومیشن کا خیال یا HighLevel کا کوئی مسئلہ؟ مجھے اس کے بارے میں بتائیں۔',
      action: 'بات شروع کریں',
      email: 'ای میل کریں',
    },
    footer: {
      socials: 'سوشل پروفائلز',
      linkedinUnavailable: 'LinkedIn — پروفائل کا لنک جلد شامل ہوگا',
    },
    notFound: {
      title: 'یہ صفحہ نہیں مل سکا۔',
      text: 'آپ کا مطلوبہ صفحہ یہاں موجود نہیں ہے۔ پورٹ فولیو کے ابتدائی صفحے پر واپس جائیں۔',
      back: 'ابتدائی صفحے پر جائیں',
    },
  },
  es: {
    title: 'Abubakar Mughal — Desarrollador web y experto en automatización',
    description:
      'Portafolio de Abubakar Mughal. Desarrollo web, automatización RPA y GoHighLevel, con experiencia en Hashturn, o1e Mortgage y HL Pro Tools.',
    name: 'Abubakar Mughal',
    skip: 'Saltar al contenido',
    home: 'Inicio',
    navigation: 'Navegación principal',
    language: 'Elegir idioma',
    nav: {
      expertise: 'Especialidades',
      experience: 'Experiencia',
      testimonials: 'Testimonios',
      about: 'Sobre mí',
      contact: 'Hablemos',
    },
    hero: {
      eyebrow: 'DESARROLLADOR WEB · EXPERTO EN AUTOMATIZACIÓN',
      greeting: 'Hola, soy Abubakar Mughal.',
      lineOne: 'Webs bien pensadas.',
      lineTwo: 'Procesos más ágiles.',
      description:
        'Conecto sitios web, automatización y GoHighLevel para ayudar a las empresas a trabajar mejor. Desde la primera interacción hasta los procesos internos.',
      primary: 'Explora mi trabajo',
      secondary: 'Contacta conmigo',
      scroll: 'Un poco más sobre lo que hago',
    },
    workflow: {
      label: 'MI FORMA DE PENSAR',
      title: 'Conectar cada pieza.',
      steps: [
        { title: 'Crear', detail: 'Sitios web que conectan' },
        { title: 'Integrar', detail: 'Sistemas que trabajan juntos' },
        { title: 'Automatizar', detail: 'Menos tareas repetitivas' },
      ],
      note: 'La buena tecnología simplifica el trabajo.',
    },
    companies: 'EXPERIENCIA EN',
    expertise: {
      label: '02 / ESPECIALIDADES',
      heading: 'Cómo puedo ayudarte.',
      intro:
        'El sitio web es solo el principio. Conecto la experiencia con los sistemas que la hacen posible.',
      items: [
        {
          title: 'Desarrollo web',
          text: 'Sitios web adaptables, con una estructura clara y una experiencia cuidada en cualquier pantalla.',
          tags: ['Desarrollo web', 'Diseño adaptable'],
        },
        {
          title: 'RPA y automatización',
          text: 'Automatización práctica de tareas repetitivas para conectar procesos y dedicar más tiempo a lo importante.',
          tags: ['RPA', 'Automatización de procesos'],
        },
        {
          title: 'GoHighLevel y soporte',
          text: 'Experiencia práctica con HighLevel y resolución de problemas técnicos para mantener los sistemas en marcha.',
          tags: ['GoHighLevel', 'Soporte técnico'],
        },
        {
          title: 'IA agéntica',
          text: 'Agentes de IA que se encargan de trabajos de varios pasos — redactar, hacer seguimiento y actualizar sistemas — con límites claros y supervisión humana.',
          tags: ['IA agéntica', 'Agentes de IA'],
        },
      ],
    },
    experience: {
      label: '03 / EXPERIENCIA',
      heading: 'La práctica detrás de las habilidades.',
      intro: 'Experiencia en desarrollo web, automatización y el ecosistema de HighLevel.',
      roleLabel: 'PUESTO',
      items: [
        {
          company: 'Hashturn',
          role: 'Desarrollador web sénior y experto en automatización RPA',
          text: 'Desarrollo web, automatización robótica de procesos e IA agéntica, con atención a experiencias digitales útiles y flujos de trabajo más eficientes.',
          tags: ['Desarrollo web', 'Automatización RPA', 'IA agéntica'],
        },
        {
          company: 'o1e Mortgage',
          role: 'Administrador de agencia',
          duration: '8 meses',
          text: 'Administrador de agencia para o1e Mortgage en GoHighLevel, aplicando conocimientos prácticos de la plataforma en el sector hipotecario.',
          tags: ['GoHighLevel', 'CRM'],
        },
        {
          company: 'HL Pro Tools',
          role: 'Experto técnico',
          text: 'Experiencia técnica en el ecosistema de HighLevel, centrada en comprender los problemas y ayudar a las personas a utilizar sus herramientas.',
          tags: ['Soporte técnico', 'HighLevel'],
        },
      ],
    },
    testimonials: {
      label: '04 / TESTIMONIOS',
      heading: 'Lo que dicen los clientes.',
      intro: 'Diez reseñas de clientes; todas de 5 sobre 5.',
      average: '5.0',
      averageLabel: 'Valoración media',
      count: '10 reseñas de clientes',
      client: 'Reseña de cliente',
    },
    about: {
      label: '05 / SOBRE MÍ',
      heading: 'Vocación de crear.\nPasión por resolver.',
      paragraphs: [
        'Soy Abubakar Mughal, desarrollador web y experto en automatización RPA. Mi trabajo conecta lo que las personas ven en pantalla con los procesos que lo hacen posible.',
        'Mi experiencia en Hashturn, o1e Mortgage y HL Pro Tools combina desarrollo web, GoHighLevel y resolución de problemas técnicos. Me importa que la tecnología sea útil, comprensible y fácil de usar.',
      ],
      focusLabel: 'MI ENFOQUE',
      focus: [
        'Experiencias web claras y accesibles',
        'Procesos de negocio conectados',
        'Soluciones técnicas prácticas',
      ],
      github: 'Una mirada al código.',
      githubText: 'Explora mis repositorios y mi trabajo de desarrollo en GitHub.',
      githubLink: 'Visita mi GitHub',
    },
    contact: {
      label: '06 / CONTACTO',
      heading: 'Creemos algo\nque funcione para ti.',
      text: '¿Tienes en mente un sitio web, una automatización o un reto con HighLevel? Cuéntamelo.',
      action: 'Inicia una conversación',
      email: 'Escríbeme',
    },
    footer: {
      socials: 'Perfiles sociales',
      linkedinUnavailable: 'LinkedIn — enlace al perfil próximamente',
    },
    notFound: {
      title: 'Esta página se perdió en el camino.',
      text: 'La página que buscas no está aquí. Volvamos al portafolio.',
      back: 'Volver al inicio',
    },
  },
  ja: {
    title: 'アブバカル・ムガル — Web開発・自動化エキスパート',
    description:
      'アブバカル・ムガルのポートフォリオ。Web開発、RPA自動化、GoHighLevelを専門とし、Hashturn、o1e Mortgage、HL Pro Toolsでの経験を紹介します。',
    name: 'アブバカル・ムガル',
    skip: '本文へ移動',
    home: 'ホーム',
    navigation: 'メインナビゲーション',
    language: '言語を選択',
    nav: {
      expertise: '専門分野',
      experience: '経験',
      testimonials: 'お客様の声',
      about: '自己紹介',
      contact: 'お問い合わせ',
    },
    hero: {
      eyebrow: 'WEB開発 · 自動化エキスパート',
      greeting: 'こんにちは、アブバカル・ムガルです。',
      lineOne: '使いやすいWebサイト。',
      lineTwo: 'もっと効率的な仕事。',
      description:
        'Webサイト、自動化、GoHighLevelをつなぎ、ビジネスがより円滑に動く仕組みをつくります。最初の接点から、その裏側の業務まで。',
      primary: '制作・実務を見る',
      secondary: 'お問い合わせ',
      scroll: '私の仕事について',
    },
    workflow: {
      label: '大切にしている考え方',
      title: '仕組みをつなぐ。',
      steps: [
        { title: 'つくる', detail: '人とつながるWebサイト' },
        { title: '連携する', detail: 'ともに動くシステム' },
        { title: '自動化する', detail: '繰り返し作業を減らす' },
      ],
      note: '良い技術は、仕事をシンプルにする。',
    },
    companies: 'これまでに携わった企業',
    expertise: {
      label: '02 / 専門分野',
      heading: 'お手伝いできること。',
      intro: 'Webサイトは始まりにすぎません。使う人の体験と、それを支える仕組みをつなぎます。',
      items: [
        {
          title: 'Webサイト開発',
          text: 'わかりやすい構成と、どの画面でも快適に使える体験を大切にしたレスポンシブなWebサイトをつくります。',
          tags: ['Web開発', 'レスポンシブデザイン'],
        },
        {
          title: 'RPA・業務自動化',
          text: '繰り返し作業を実用的な仕組みで自動化。工程をつなぎ、大切な仕事に集中できる環境を目指します。',
          tags: ['RPA', 'ワークフロー自動化'],
        },
        {
          title: 'GoHighLevel・技術サポート',
          text: 'HighLevelの実務経験と技術的な問題解決を通じて、ビジネスシステムの円滑な運用を支えます。',
          tags: ['GoHighLevel', '技術サポート'],
        },
        {
          title: 'エージェンティックAI',
          text: '下書き、フォローアップ、システム更新など、複数ステップの業務を担うAIエージェント。明確なルールと人の確認のもとで運用します。',
          tags: ['エージェンティックAI', 'AIエージェント'],
        },
      ],
    },
    experience: {
      label: '03 / 経験',
      heading: 'スキルを支える実務経験。',
      intro: 'Web開発、自動化、HighLevelの分野で積み重ねた経験。',
      roleLabel: '役割',
      items: [
        {
          company: 'Hashturn',
          role: 'シニアWeb開発者・RPA自動化エキスパート',
          text: 'Webサイト開発、RPA、エージェンティックAIを組み合わせ、実用的なデジタル体験と効率的なワークフローに取り組む。',
          tags: ['Webサイト開発', 'RPA自動化', 'エージェンティックAI'],
        },
        {
          company: 'o1e Mortgage',
          role: 'エージェンシー管理者',
          duration: '8か月',
          text: 'o1e MortgageのGoHighLevelにおけるエージェンシー管理者として、住宅ローン事業の現場でプラットフォームの知識を活かしました。',
          tags: ['GoHighLevel', 'CRM'],
        },
        {
          company: 'HL Pro Tools',
          role: 'テクニカルエキスパート',
          text: 'HighLevelに関する技術的な専門知識を活かし、問題の理解とツールの活用をサポート。',
          tags: ['技術サポート', 'HighLevel'],
        },
      ],
    },
    testimonials: {
      label: '04 / お客様の声',
      heading: 'お客様の声。',
      intro: '10件のクライアントレビュー。すべて5点満点中5点。',
      average: '5.0',
      averageLabel: '平均評価',
      count: '10件のクライアントレビュー',
      client: 'クライアントレビュー',
    },
    about: {
      label: '05 / 自己紹介',
      heading: 'つくることが好き。\n解決することが得意。',
      paragraphs: [
        'アブバカル・ムガルです。Webサイト開発とRPA自動化を専門としています。画面に見える体験と、その裏で動く業務プロセスをつなぐことが私の仕事です。',
        'Hashturn、o1e Mortgage、HL Pro Toolsでの経験を通じて、Web開発、GoHighLevel、技術的な問題解決に携わってきました。技術を役立つものに、わかりやすく、扱いやすくすることを大切にしています。',
      ],
      focusLabel: '重視していること',
      focus: ['わかりやすく使いやすいWeb体験', 'つながる業務フロー', '実用的な技術ソリューション'],
      github: 'コードを、もう少し詳しく。',
      githubText: 'GitHubでリポジトリや開発の取り組みをご覧いただけます。',
      githubLink: 'GitHubを見る',
    },
    contact: {
      label: '06 / お問い合わせ',
      heading: 'あなたの仕事に役立つものを、\n一緒につくりましょう。',
      text: 'Webサイト、自動化のアイデア、HighLevelのお困りごと。まずはお聞かせください。',
      action: 'メールで相談する',
      email: 'メールアドレス',
    },
    footer: {
      socials: 'ソーシャルプロフィール',
      linkedinUnavailable: 'LinkedIn — プロフィールリンクは準備中です',
    },
    notFound: {
      title: 'ページが見つかりません。',
      text: 'お探しのページはここにはありません。ポートフォリオのトップへお戻りください。',
      back: 'ホームへ戻る',
    },
  },
}
