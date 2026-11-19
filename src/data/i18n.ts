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
    skills: string
    contact: string
  }
  hero: {
    eyebrow: string
    greeting: string
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
  skills: {
    label: string
    heading: string
    intro: string
    groups: { title: string; text: string; tags: string[] }[]
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
    average: string
    averageLabel: string
    count: string
    client: string
    seeMore: string
    seeLess: string
  }
  about: {
    label: string
    paragraphs: string[]
    focusLabel: string
    focus: string[]
    github: string
    githubText: string
    githubLink: string
  }
  contact: { label: string; heading: string; text: string; action: string; email: string }
  footer: { socials: string; linkedinUnavailable: string }
  theme: { toLight: string; toDark: string }
  notFound: { title: string; text: string; back: string }
}

/** Client reviews supplied by Abubakar, Nov 20. Shown in English in every language; no reviewer names were supplied, so they are presented as client reviews. */
export const testimonialQuotes = [
  'Abubakar was extremely helpful, answering every question and providing information to help me resolve my issue.',
  "Abubakar was really patient and awesome! I have been trying to resolve this issue since 10/21 and he took time to understand my need and assist me. As a result, I do not have to manually update my client's website. Thank you.",
  'Abubakar was very friendly and assisted me quickly with my request!',
  'Abubakar was able to explain why my Assigned user were going to my mastermind email account and the consequences of changing the email address. It enabling me to make an informed decision.',
  'Great assistance. Thank you Abubakar.',
  "Abubakar was great, he worked with me to identify the issue clearly and although he wasn't able to fix it, he escalated the issue for me to hopefully find someone who can fix it. Thanks",
  "Yes, Sir, I'm very grateful that they are there to help because I was struggling with this for a while, so I'm thankful that they will take care of it for me. I guess now I will have to learn to do it for myself so I can teach my clients to do it if I have to, but I'm so glad that they're working that out for me. Thanks.",
  'I really appreciate that Abubakar asked if there was anything else I needed before signing off.',
  'Abubakar gave me steps to try and solve my problem. However, because I could not find a phone number available in my area to purchase, I am not sure if the steps will work. I am giving 5 stars because of the customer support that was provided.',
  "Today, I just don't have the words of appreciation. For my Mastermind team support. There are exceptionally phenomenal. An absolutely a blessing. Following right along. With Daddy, Tony, Uncle Dean's. Mission and purpose, and that's what I love. I'm right with you?",
]

export const translations: Record<Language, Copy> = {
  en: {
    title: 'Abubakar Mughal: Web Developer & Automation Expert',
    description:
      'Abubakar Mughal’s portfolio. Web developer and automation expert: websites and web apps, GoHighLevel, CRM, workflows and AI agents, with experience at Hashturn, o1e Mortgage, and HL Pro Tools.',
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
      skills: 'Skills',
      contact: 'Let’s talk',
    },
    hero: {
      eyebrow: 'WEB DEVELOPMENT · AUTOMATION · AI',
      greeting: 'Hello, I’m Abubakar Mughal.',
      description:
        'I build websites and web apps that look good and work well. I also set up automation and AI that follow up, book appointments, and keep business systems clean. GoHighLevel is one of the platforms I work with every day.',
      primary: 'Explore my work',
      secondary: 'Get in touch',
      scroll: 'A little more about what I do',
    },
    workflow: {
      label: 'THE WAY I THINK',
      title: 'Connect the dots.',
      steps: [
        { title: 'Build', detail: 'Websites and workflows that follow up and book' },
        { title: 'Integrate', detail: 'AI agents that answer and update records' },
        { title: 'Automate', detail: 'Systems that stay clean and don’t break' },
      ],
      note: 'Good systems follow up and book, and they stay clean without extra work.',
    },
    companies: 'EXPERIENCE ACROSS',
    expertise: {
      label: '04 / EXPERTISE',
      heading: 'Where I can help.',
      intro:
        'I work across websites, automation and AI. I build the site, set up the systems, and keep everything running.',
      items: [
        {
          title: 'Website development',
          text: 'Websites that look good and work well on every screen, with a clear structure people can follow.',
          tags: ['Web development', 'Responsive design'],
        },
        {
          title: 'RPA & automation',
          text: 'I automate the repetitive tasks, connect the steps, and give people their time back for the work that matters.',
          tags: ['RPA', 'Workflow automation'],
        },
        {
          title: 'GoHighLevel & support',
          text: 'Hands-on GoHighLevel work: CRM, pipelines, calendars and workflows, plus technical support that keeps business systems working smoothly.',
          tags: ['GoHighLevel', 'CRM', 'Workflows'],
        },
        {
          title: 'Agentic AI',
          text: 'AI agents I set up and tune to take on multi-step work. They draft, follow up and update the CRM, and I check their work.',
          tags: ['Agentic AI', 'AI agents'],
        },
      ],
    },    skills: {
      label: '02 / SKILLS',
      heading: 'What I work with.',
      intro: 'Six areas cover most of my work. Websites first, then the systems and AI that keep them running.',
      groups: [
        {
          title: 'Web Development',
          text: 'Websites and web apps that look good, load fast and work well on every screen.',
          tags: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Astro', 'Responsive design'],
        },
        {
          title: 'GoHighLevel',
          text: 'CRM, pipelines and calendars, plus workflows and AI automation inside GoHighLevel.',
          tags: ['GoHighLevel', 'CRM', 'Pipelines', 'Calendars', 'Workflows', 'AI automation'],
        },
        {
          title: 'AI Agents & Automation',
          text: 'Agentic AI and automation that take on multi-step work, so people spend less time on repetitive tasks.',
          tags: ['Agentic AI', 'AI agents', 'Hermes', 'Grok', 'Muse AI', 'Automation', 'RPA'],
        },
        {
          title: 'Game Development',
          text: 'Building interactive games and playful experiences on the web.',
          tags: ['Game development', 'Interactive games', 'Web games'],
        },
        {
          title: 'Next.js & React',
          text: 'Modern web apps built with Next.js and React, with blog posts, project pages and more than one language.',
          tags: ['Next.js', 'React', 'TypeScript'],
        },
        {
          title: 'E-commerce Development',
          text: 'Online stores and shopping experiences, with product listings and search that help people find what they want.',
          tags: ['E-commerce', 'Online stores', 'Product search'],
        },
      ],
    },

    experience: {
      label: '05 / EXPERIENCE',
      heading: 'The work behind the skills.',
      intro: 'Hands-on web development, CRM and AI automation work across Hashturn, o1e Mortgage, and HL Pro Tools.',
      roleLabel: 'ROLE',
      items: [
        {
          company: 'Hashturn',
          role: 'Senior Website Developer & RPA Automation Expert',
          text: 'Senior role at Hashturn: website development, RPA automation, and agentic AI. I build and fix GoHighLevel workflows, work the CRM and pipelines, and set up and tune AI automation so follow-ups and bookings happen reliably.',
          tags: ['GoHighLevel', 'Workflows', 'RPA automation', 'Agentic AI'],
        },
        {
          company: 'o1e Mortgage',
          role: 'Agency Admin',
          duration: '8 months',
          text: 'Agency Admin for o1e Mortgage on GoHighLevel for 8 months: managing the CRM, pipelines and sub-accounts, building and fixing workflows, and keeping follow-ups, calendars and conversations in order.',
          tags: ['GoHighLevel', 'CRM', 'Workflows'],
        },
        {
          company: 'HL Pro Tools',
          role: 'Technical Expert',
          text: 'Technical Expert in the HighLevel ecosystem: helping people understand issues, fix workflows, and get the most from their GoHighLevel setup.',
          tags: ['Technical support', 'HighLevel'],
        },
      ],
    },
    testimonials: {
      label: '06 / TESTIMONIALS',
      heading: 'What clients say.',
      average: '5.0',
      averageLabel: 'Average rating',
      count: '10 client reviews',
      client: 'Client review',
      seeMore: 'See more',
      seeLess: 'See less',
    },
    about: {
      label: '01 / ABOUT',
      paragraphs: [
        'I’m Abubakar Mughal, and I build websites and web apps for a living. I make sites that look good, load fast and work well on every screen. I also set up automation and AI that follow up, book appointments, answer people and keep records tidy. If something breaks, I track down the problem and fix it.',
        'I do this as a Senior at Hashturn, as Agency Admin at o1e Mortgage on GoHighLevel for 8 months, and as a Technical Expert at HL Pro Tools. GoHighLevel is one platform I work with every day, alongside websites, RPA and AI agents.',
      ],
      focusLabel: 'MY FOCUS',
      focus: [
        'Websites and web apps that work on every screen',
        'Automation and AI agents, set up, tuned and checked by me',
        "Workflows that follow up, book and don't break",
      ],
      github: 'A closer look at the code.',
      githubText: 'You can see my repositories and development work on GitHub.',
      githubLink: 'Visit my GitHub',
    },
    contact: {
      label: '07 / CONTACT',
      heading: 'Let’s build something\nthat works for you.',
      text: 'Have a website, a workflow, or an AI automation idea in mind? Tell me about it.',
      action: 'Start a conversation',
      email: 'Email me',
    },
    footer: {
      socials: 'Social profiles',
      linkedinUnavailable: 'LinkedIn profile link coming soon',
    },
    theme: {
      toLight: 'Switch to light theme',
      toDark: 'Switch to dark theme',
    },
    notFound: {
      title: 'This page took a wrong turn.',
      text: 'The page you’re looking for isn’t here. Let’s get you back to the portfolio.',
      back: 'Back to home',
    },
  },
  ur: {
    title: 'ابوبکر مغل: ویب ڈویلپر اور آٹومیشن ماہر',
    description:
      'ابوبکر مغل کا پورٹ فولیو۔ ویب ڈویلپر اور آٹومیشن ماہر: ویب سائٹس اور ویب ایپس، GoHighLevel، سی آر ایم، ورک فلو اور اے آئی ایجنٹس، اور Hashturn، o1e Mortgage اور HL Pro Tools کے ساتھ کام کا تجربہ۔',
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
      skills: 'ہنر',
      contact: 'رابطہ کریں',
    },
    hero: {
      eyebrow: 'ویب ڈویلپمنٹ · آٹومیشن · اے آئی',
      greeting: 'السلام علیکم، میں ابوبکر مغل ہوں۔',
      description:
        'میں ایسی ویب سائٹس اور ویب ایپس بناتا ہوں جو اچھی لگیں اور اچھا کام کریں۔ میں ایسی آٹومیشن اور اے آئی بھی ترتیب دیتا ہوں جو فالو اپ کرے، اپائنٹمنٹ بک کرے اور کاروباری سسٹمز کو صاف رکھے۔ GoHighLevel ان پلیٹ فارمز میں سے ایک ہے جن پر میں ہر روز کام کرتا ہوں۔',
      primary: 'میرا کام دیکھیں',
      secondary: 'رابطہ کریں',
      scroll: 'میرے کام کے بارے میں مزید جانیں',
    },
    workflow: {
      label: 'میرا اندازِ فکر',
      title: 'ہر قدم کو جوڑیں۔',
      steps: [
        { title: 'تعمیر', detail: 'ویب سائٹس اور ورک فلو جو فالو اپ اور بکنگ کریں' },
        { title: 'انضمام', detail: 'اے آئی ایجنٹس جو جواب دیں اور ریکارڈ اپ ڈیٹ کریں' },
        { title: 'آٹومیشن', detail: 'صاف ستھرے سسٹمز جو خراب نہ ہوں' },
      ],
      note: 'اچھے سسٹمز فالو اپ کرتے ہیں، بکنگ کرتے ہیں اور بغیر اضافی کام کے صاف رہتے ہیں۔',
    },
    companies: 'ان اداروں کے ساتھ کام کا تجربہ',
    expertise: {
      label: '۰۴ / مہارتیں',
      heading: 'میں کہاں مدد کر سکتا ہوں۔',
      intro:
        'میں ویب سائٹس، آٹومیشن اور اے آئی پر کام کرتا ہوں۔ میں سائٹ بناتا ہوں، سسٹمز ترتیب دیتا ہوں اور سب کچھ چلتا رہتا ہے۔',
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
          text: 'GoHighLevel کا عملی کام: سی آر ایم، پائپ لائنز، کیلنڈرز اور ورک فلو، اور تکنیکی معاونت جو کاروباری سسٹمز کو رواں رکھے۔',
          tags: ['GoHighLevel', 'سی آر ایم', 'ورک فلو'],
        },
        {
          title: 'ایجنٹک اے آئی',
          text: 'ایسے اے آئی ایجنٹس جنہیں میں ترتیب دے کر کئی مراحل والا کام سونپتا ہوں۔ وہ مسودے تیار کرتے ہیں، فالو اپ کرتے ہیں اور سی آر ایم اپ ڈیٹ کرتے ہیں، اور میں ان کے کام پر نظر رکھتا ہوں۔',
          tags: ['ایجنٹک اے آئی', 'اے آئی ایجنٹس'],
        },
      ],
    },    skills: {
      label: '۰۲ / ہنر',
      heading: 'میرے کام کے شعبے۔',
      intro: 'میرے کام کے چھ اہم شعبے ہیں۔ پہلے ویب سائٹس، پھر وہ سسٹمز اور اے آئی جو انہیں چلاتے ہیں۔',
      groups: [
        {
          title: 'ویب ڈویلپمنٹ',
          text: 'ایسی ویب سائٹس اور ویب ایپس جو اچھی لگیں، تیزی سے لوڈ ہوں اور ہر اسکرین پر اچھا کام کریں۔',
          tags: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Astro', 'Responsive design'],
        },
        {
          title: 'GoHighLevel',
          text: 'سی آر ایم، پائپ لائنز اور کیلنڈرز، اور GoHighLevel کے اندر ورک فلو اور اے آئی آٹومیشن۔',
          tags: ['GoHighLevel', 'CRM', 'Pipelines', 'Calendars', 'Workflows', 'AI automation'],
        },
        {
          title: 'اے آئی ایجنٹس اور آٹومیشن',
          text: 'ایجنٹک اے آئی اور آٹومیشن جو کئی مراحل والا کام سنبھالے، تاکہ لوگ بار بار والے کاموں پر کم وقت لگائیں۔',
          tags: ['Agentic AI', 'AI agents', 'Hermes', 'Grok', 'Muse AI', 'Automation', 'RPA'],
        },
        {
          title: 'گیم ڈویلپمنٹ',
          text: 'ویب پر انٹرایکٹو گیمز اور دلچسپ تجربات بنانا۔',
          tags: ['Game development', 'Interactive games', 'Web games'],
        },
        {
          title: 'Next.js اور React',
          text: 'Next.js اور React سے بنی جدید ویب ایپس، جن میں بلاگ پوسٹس، پروجیکٹ صفحات اور ایک سے زیادہ زبانیں شامل ہیں۔',
          tags: ['Next.js', 'React', 'TypeScript'],
        },
        {
          title: 'ای کامرس ڈویلپمنٹ',
          text: 'آن لائن اسٹورز اور خریداری کا تجربہ، پروڈکٹ لسٹنگ اور سرچ کے ساتھ۔',
          tags: ['E-commerce', 'Online stores', 'Product search'],
        },
      ],
    },

    experience: {
      label: '۰۵ / تجربہ',
      heading: 'مہارتوں کے پیچھے کا تجربہ۔',
      intro: 'Hashturn، o1e Mortgage اور HL Pro Tools میں ویب ڈویلپمنٹ، سی آر ایم اور اے آئی آٹومیشن کا عملی تجربہ۔',
      roleLabel: 'ذمہ داری',
      items: [
        {
          company: 'Hashturn',
          role: 'سینئر ویب سائٹ ڈویلپر اور آر پی اے آٹومیشن ماہر',
          text: 'Hashturn میں سینئر ذمہ داری: ویب سائٹ ڈویلپمنٹ، آر پی اے آٹومیشن اور ایجنٹک اے آئی۔ میں GoHighLevel ورک فلو بناتا اور درست کرتا ہوں، سی آر ایم اور پائپ لائنز پر کام کرتا ہوں اور اے آئی آٹومیشن ترتیب دیتا ہوں، تاکہ فالو اپ اور بکنگ قابلِ اعتماد انداز میں ہوں۔',
          tags: ['GoHighLevel', 'ورک فلو', 'آر پی اے آٹومیشن', 'ایجنٹک اے آئی'],
        },
        {
          company: 'o1e Mortgage',
          role: 'ایجنسی ایڈمن',
          duration: '8 ماہ',
          text: 'o1e Mortgage میں 8 ماہ تک GoHighLevel پر ایجنسی ایڈمن: سی آر ایم، پائپ لائنز اور سب اکاؤنٹس کا انتظام، ورک فلو بنانا اور درست کرنا، اور فالو اپ، کیلنڈرز اور گفتگو کو ترتیب میں رکھنا۔',
          tags: ['GoHighLevel', 'سی آر ایم', 'ورک فلو'],
        },
        {
          company: 'HL Pro Tools',
          role: 'تکنیکی ماہر',
          text: 'HighLevel کے شعبے میں تکنیکی ماہر: لوگوں کو مسائل سمجھنے، ورک فلو درست کرنے اور اپنے GoHighLevel سیٹ اپ سے زیادہ سے زیادہ فائدہ اٹھانے میں مدد۔',
          tags: ['تکنیکی معاونت', 'HighLevel'],
        },
      ],
    },
    testimonials: {
      label: '۰۶ / آراء',
      heading: 'کلائنٹس کیا کہتے ہیں۔',
      average: '5.0',
      averageLabel: 'اوسط درجہ بندی',
      count: '10 کلائنٹ جائزے',
      client: 'کلائنٹ کا جائزہ',
      seeMore: 'مزید دیکھیں',
      seeLess: 'کم دیکھیں',
    },
    about: {
      label: '۰۱ / میرے بارے میں',
      paragraphs: [
        'میں ابوبکر مغل ہوں، اور میں ویب سائٹس اور ویب ایپس بناتا ہوں۔ میں ایسی سائٹس بناتا ہوں جو اچھی لگیں، تیزی سے لوڈ ہوں اور ہر اسکرین پر اچھا کام کریں۔ میں ایسی آٹومیشن اور اے آئی بھی ترتیب دیتا ہوں جو فالو اپ کرے، اپائنٹمنٹ بک کرے، لوگوں کو جواب دے اور ریکارڈ صاف رکھے۔ اگر کچھ خراب ہو جائے تو میں مسئلہ تلاش کر کے اسے درست کرتا ہوں۔',
        'یہ کام میں Hashturn میں سینئر کے طور پر، o1e Mortgage میں GoHighLevel پر 8 ماہ تک ایجنسی ایڈمن کے طور پر، اور HL Pro Tools میں تکنیکی ماہر کے طور پر کرتا ہوں۔ GoHighLevel ان پلیٹ فارمز میں سے ایک ہے جن پر میں ہر روز کام کرتا ہوں، ویب سائٹس، آر پی اے اور اے آئی ایجنٹس کے ساتھ ساتھ۔',
      ],
      focusLabel: 'میری توجہ',
      focus: ['ویب سائٹس اور ویب ایپس جو ہر اسکرین پر کام کریں', 'آٹومیشن اور اے آئی ایجنٹس، سیٹ اپ، ترتیب اور میری نگرانی میں', 'ورک فلو جو فالو اپ کریں، بکنگ کریں اور خراب نہ ہوں'],
      github: 'میرے کوڈ پر ایک نظر۔',
      githubText: 'GitHub پر میری ریپوزٹریز اور ڈویلپمنٹ کے کام کو دیکھیں۔',
      githubLink: 'میرا GitHub دیکھیں',
    },
    contact: {
      label: '۰۷ / رابطہ',
      heading: 'آئیں کچھ ایسا بنائیں\nجو آپ کے کام آئے۔',
      text: 'ویب سائٹ، ورک فلو یا اے آئی آٹومیشن کا کوئی خیال ہے؟ مجھے اس کے بارے میں بتائیں۔',
      action: 'بات شروع کریں',
      email: 'ای میل کریں',
    },
    footer: {
      socials: 'سوشل پروفائلز',
      linkedinUnavailable: 'LinkedIn پروفائل کا لنک جلد شامل ہوگا',
    },
    theme: {
      toLight: 'ہلکی تھیم پر جائیں',
      toDark: 'گہری تھیم پر جائیں',
    },
    notFound: {
      title: 'یہ صفحہ نہیں مل سکا۔',
      text: 'آپ کا مطلوبہ صفحہ یہاں موجود نہیں ہے۔ پورٹ فولیو کے ابتدائی صفحے پر واپس جائیں۔',
      back: 'ابتدائی صفحے پر جائیں',
    },
  },
  es: {
    title: 'Abubakar Mughal: Desarrollador web y experto en automatización',
    description:
      'Portafolio de Abubakar Mughal. Desarrollador web y experto en automatización: sitios web y aplicaciones web, GoHighLevel, CRM, flujos de trabajo y agentes de IA, con experiencia en Hashturn, o1e Mortgage y HL Pro Tools.',
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
      skills: 'Habilidades',
      contact: 'Hablemos',
    },
    hero: {
      eyebrow: 'DESARROLLO WEB · AUTOMATIZACIÓN · IA',
      greeting: 'Hola, soy Abubakar Mughal.',
      description:
        'Creo sitios web y aplicaciones web con buen aspecto y buen funcionamiento. También configuro automatización e IA que hacen seguimiento, reservan citas y mantienen los sistemas en orden. GoHighLevel es una de las plataformas con las que trabajo cada día.',
      primary: 'Explora mi trabajo',
      secondary: 'Contacta conmigo',
      scroll: 'Un poco más sobre lo que hago',
    },
    workflow: {
      label: 'MI FORMA DE PENSAR',
      title: 'Conectar cada pieza.',
      steps: [
        { title: 'Crear', detail: 'Sitios web y flujos que hacen seguimiento y reservan' },
        { title: 'Integrar', detail: 'Agentes de IA que responden y actualizan registros' },
        { title: 'Automatizar', detail: 'Sistemas ordenados que no se rompen' },
      ],
      note: 'Los buenos sistemas hacen seguimiento, reservan y se mantienen en orden, sin trabajo extra.',
    },
    companies: 'EXPERIENCIA EN',
    expertise: {
      label: '04 / ESPECIALIDADES',
      heading: 'Cómo puedo ayudarte.',
      intro:
        'Trabajo en webs, automatización e IA. Creo el sitio, configuro los sistemas y mantengo todo funcionando.',
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
          text: 'Trabajo práctico con GoHighLevel: CRM, pipelines, calendarios y flujos de trabajo, además de soporte técnico para que los sistemas sigan funcionando.',
          tags: ['GoHighLevel', 'CRM', 'Flujos de trabajo'],
        },
        {
          title: 'IA agéntica',
          text: 'Agentes de IA que configuro y ajusto para encargarse de trabajos de varios pasos. Redactan, hacen seguimiento y actualizan el CRM, y yo reviso su trabajo.',
          tags: ['IA agéntica', 'Agentes de IA'],
        },
      ],
    },    skills: {
      label: '02 / HABILIDADES',
      heading: 'Con lo que trabajo.',
      intro: 'Seis áreas cubren la mayor parte de mi trabajo: primero las webs, y luego los sistemas y la IA que las mantienen en marcha.',
      groups: [
        {
          title: 'Desarrollo web',
          text: 'Sitios web y aplicaciones web con buen aspecto, carga rápida y buen funcionamiento en cualquier pantalla.',
          tags: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Astro', 'Responsive design'],
        },
        {
          title: 'GoHighLevel',
          text: 'CRM, pipelines y calendarios, además de flujos de trabajo y automatización con IA dentro de GoHighLevel.',
          tags: ['GoHighLevel', 'CRM', 'Pipelines', 'Calendars', 'Workflows', 'AI automation'],
        },
        {
          title: 'Agentes de IA y automatización',
          text: 'IA agéntica y automatización que se encargan de trabajos de varios pasos, para dedicar menos tiempo a las tareas repetitivas.',
          tags: ['Agentic AI', 'AI agents', 'Hermes', 'Grok', 'Muse AI', 'Automation', 'RPA'],
        },
        {
          title: 'Desarrollo de videojuegos',
          text: 'Creación de videojuegos interactivos y experiencias lúdicas en la web.',
          tags: ['Game development', 'Interactive games', 'Web games'],
        },
        {
          title: 'Next.js y React',
          text: 'Aplicaciones web modernas con Next.js y React, con entradas de blog, páginas de proyectos y más de un idioma.',
          tags: ['Next.js', 'React', 'TypeScript'],
        },
        {
          title: 'Desarrollo de comercio electrónico',
          text: 'Tiendas en línea y experiencias de compra, con catálogo de productos y búsqueda.',
          tags: ['E-commerce', 'Online stores', 'Product search'],
        },
      ],
    },

    experience: {
      label: '05 / EXPERIENCIA',
      heading: 'La práctica detrás de las habilidades.',
      intro: 'Trabajo práctico en desarrollo web, CRM y automatización con IA en Hashturn, o1e Mortgage y HL Pro Tools.',
      roleLabel: 'PUESTO',
      items: [
        {
          company: 'Hashturn',
          role: 'Desarrollador web sénior y experto en automatización RPA',
          text: 'Puesto sénior en Hashturn: desarrollo web, automatización RPA e IA agéntica. Creo y corrijo flujos de trabajo en GoHighLevel, trabajo el CRM y los pipelines, y configuro y ajusto la automatización con IA para que los seguimientos y las reservas funcionen con fiabilidad.',
          tags: ['GoHighLevel', 'Flujos de trabajo', 'Automatización RPA', 'IA agéntica'],
        },
        {
          company: 'o1e Mortgage',
          role: 'Administrador de agencia',
          duration: '8 meses',
          text: 'Administrador de agencia para o1e Mortgage en GoHighLevel durante 8 meses: gestión del CRM, los pipelines y las subcuentas, creación y corrección de flujos de trabajo, y orden en los seguimientos, calendarios y conversaciones.',
          tags: ['GoHighLevel', 'CRM', 'Flujos de trabajo'],
        },
        {
          company: 'HL Pro Tools',
          role: 'Experto técnico',
          text: 'Experto técnico en el ecosistema de HighLevel: ayudo a las personas a entender los problemas, corregir flujos de trabajo y sacar más provecho de su configuración de GoHighLevel.',
          tags: ['Soporte técnico', 'HighLevel'],
        },
      ],
    },
    testimonials: {
      label: '06 / TESTIMONIOS',
      heading: 'Lo que dicen los clientes.',
      average: '5.0',
      averageLabel: 'Valoración media',
      count: '10 reseñas de clientes',
      client: 'Reseña de cliente',
      seeMore: 'Ver más',
      seeLess: 'Ver menos',
    },
    about: {
      label: '01 / SOBRE MÍ',
      paragraphs: [
        'Soy Abubakar Mughal y me dedico a crear sitios web y aplicaciones web. Hago sitios con buen aspecto, carga rápida y buen funcionamiento en cualquier pantalla. También configuro automatización e IA que hacen seguimiento, reservan citas, responden a las personas y mantienen los registros en orden. Si algo se rompe, busco el problema y lo corrijo.',
        'Hago este trabajo como sénior en Hashturn, como administrador de agencia en o1e Mortgage en GoHighLevel durante 8 meses y como experto técnico en HL Pro Tools. GoHighLevel es una de las plataformas con las que trabajo cada día, junto con las webs, la RPA y los agentes de IA.',
      ],
      focusLabel: 'MI ENFOQUE',
      focus: [
        'Sitios web y aplicaciones web que funcionan en cualquier pantalla',
        'Automatización y agentes de IA: configuración, ajuste y supervisión',
        'Flujos de trabajo que hacen seguimiento, reservan y no se rompen',
      ],
      github: 'Una mirada al código.',
      githubText: 'Explora mis repositorios y mi trabajo de desarrollo en GitHub.',
      githubLink: 'Visita mi GitHub',
    },
    contact: {
      label: '07 / CONTACTO',
      heading: 'Creemos algo\nque funcione para ti.',
      text: '¿Tienes en mente un sitio web, un flujo de trabajo o una idea de automatización con IA? Cuéntamelo.',
      action: 'Inicia una conversación',
      email: 'Escríbeme',
    },
    footer: {
      socials: 'Perfiles sociales',
      linkedinUnavailable: 'Enlace a LinkedIn próximamente',
    },
    theme: {
      toLight: 'Cambiar al tema claro',
      toDark: 'Cambiar al tema oscuro',
    },
    notFound: {
      title: 'Esta página se perdió en el camino.',
      text: 'La página que buscas no está aquí. Volvamos al portafolio.',
      back: 'Volver al inicio',
    },
  },
  ja: {
    title: 'アブバカル・ムガル：Web開発者・自動化エキスパート',
    description:
      'アブバカル・ムガルのポートフォリオ。Web開発者・自動化エキスパートとして、WebサイトとWebアプリ、GoHighLevel、CRM、ワークフロー、AIエージェントを担当。Hashturn、o1e Mortgage、HL Pro Toolsでの経験を紹介します。',
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
      skills: 'スキル',
      contact: 'お問い合わせ',
    },
    hero: {
      eyebrow: 'Web開発 · 自動化 · AI',
      greeting: 'こんにちは、アブバカル・ムガルです。',
      description:
        '見た目が良く、快適に使えるWebサイトとWebアプリをつくります。フォローアップや予約を行い、ビジネスシステムを整理する自動化とAIも設定します。GoHighLevelは、毎日使っているプラットフォームのひとつです。',
      primary: '制作・実務を見る',
      secondary: 'お問い合わせ',
      scroll: '私の仕事について',
    },
    workflow: {
      label: '大切にしている考え方',
      title: '仕組みをつなぐ。',
      steps: [
        { title: 'つくる', detail: 'フォローアップと予約を行うWebサイトとワークフロー' },
        { title: '連携する', detail: '応答して記録を更新するAIエージェント' },
        { title: '自動化する', detail: '壊れない、整理されたシステム' },
      ],
      note: '良いシステムはフォローアップし、予約し、整理された状態を保ちます。余計な手間なく。',
    },
    companies: 'これまでに携わった企業',
    expertise: {
      label: '04 / 専門分野',
      heading: 'お手伝いできること。',
      intro: 'Webサイト、自動化、AIを横断して仕事をしています。サイトをつくり、仕組みを設定し、すべてが動き続けるよう維持します。',
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
          text: 'GoHighLevelの実務、CRM、パイプライン、カレンダー、ワークフローと、ビジネスシステムを円滑に保つ技術サポート。',
          tags: ['GoHighLevel', 'CRM', 'ワークフロー'],
        },
        {
          title: 'エージェンティックAI',
          text: '設定と調整を行ったAIエージェントが、下書き、フォローアップ、CRM更新など複数ステップの業務を担います。私がその仕事を確認しながら運用します。',
          tags: ['エージェンティックAI', 'AIエージェント'],
        },
      ],
    },    skills: {
      label: '02 / スキル',
      heading: '得意なこと。',
      intro: '私の仕事のほとんどは、この6つの分野です。まずWebサイト、そしてそれを支える仕組みとAI。',
      groups: [
        {
          title: 'Web開発',
          text: '見た目が良く、速く読み込まれ、どの画面でも快適に使えるWebサイトとWebアプリ。',
          tags: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Astro', 'Responsive design'],
        },
        {
          title: 'GoHighLevel',
          text: 'CRM、パイプライン、カレンダー、そしてGoHighLevel内のワークフローとAI自動化。',
          tags: ['GoHighLevel', 'CRM', 'Pipelines', 'Calendars', 'Workflows', 'AI automation'],
        },
        {
          title: 'AIエージェントと自動化',
          text: '複数ステップの業務を担うエージェンティックAIと自動化で、繰り返し作業の負担を減らします。',
          tags: ['Agentic AI', 'AI agents', 'Hermes', 'Grok', 'Muse AI', 'Automation', 'RPA'],
        },
        {
          title: 'ゲーム開発',
          text: 'Web上で楽しめるインタラクティブなゲームや体験をつくります。',
          tags: ['Game development', 'Interactive games', 'Web games'],
        },
        {
          title: 'Next.jsとReact',
          text: 'Next.jsとReactでつくるモダンなWebアプリ。ブログ記事、プロジェクトページ、多言語対応を含みます。',
          tags: ['Next.js', 'React', 'TypeScript'],
        },
        {
          title: 'ECサイト開発',
          text: 'オンラインストアとショッピング体験。商品一覧と検索で、欲しいものを見つけやすくします。',
          tags: ['E-commerce', 'Online stores', 'Product search'],
        },
      ],
    },

    experience: {
      label: '05 / 経験',
      heading: 'スキルを支える実務経験。',
      intro: 'Hashturn、o1e Mortgage、HL Pro ToolsでのWeb開発、CRM、AI自動化の実務経験。',
      roleLabel: '役割',
      items: [
        {
          company: 'Hashturn',
          role: 'シニアWeb開発者・RPA自動化エキスパート',
          text: 'Hashturnでのシニア職。Webサイト開発、RPA自動化、エージェンティックAIを担当し、GoHighLevelのワークフローを構築・修正し、CRMとパイプラインを運用し、フォローアップと予約が確実に行われるようAI自動化を設定・調整しました。',
          tags: ['GoHighLevel', 'ワークフロー', 'RPA自動化', 'エージェンティックAI'],
        },
        {
          company: 'o1e Mortgage',
          role: 'エージェンシー管理者',
          duration: '8か月',
          text: 'o1e MortgageのGoHighLevelにおけるエージェンシー管理者として8か月。CRM、パイプライン、サブアカウントを管理し、ワークフローを構築・修正し、フォローアップ、カレンダー、会話を整理しました。',
          tags: ['GoHighLevel', 'CRM', 'ワークフロー'],
        },
        {
          company: 'HL Pro Tools',
          role: 'テクニカルエキスパート',
          text: 'HighLevelのテクニカルエキスパートとして、問題の理解、ワークフローの修正、GoHighLevelの活用をサポート。',
          tags: ['技術サポート', 'HighLevel'],
        },
      ],
    },
    testimonials: {
      label: '06 / お客様の声',
      heading: 'お客様の声。',
      average: '5.0',
      averageLabel: '平均評価',
      count: '10件のクライアントレビュー',
      client: 'クライアントレビュー',
      seeMore: 'もっと見る',
      seeLess: '閉じる',
    },
    about: {
      label: '01 / 自己紹介',
      paragraphs: [
        'アブバカル・ムガルです。WebサイトとWebアプリをつくっています。見た目が良く、速く読み込まれ、どの画面でも快適に使えるサイトをつくります。フォローアップや予約を行い、人に答え、記録を整理する自動化とAIも設定しています。何かが壊れたときは、原因を調べて修正します。',
        'この仕事を、Hashturnのシニア、o1e MortgageのGoHighLevelエージェンシー管理者（8か月）、HL Pro Toolsのテクニカルエキスパートとして行っています。GoHighLevelは毎日使っているプラットフォームのひとつで、Webサイト、RPA、AIエージェントと並ぶ仕事です。',
      ],
      focusLabel: '重視していること',
      focus: ['どの画面でも使えるWebサイトとWebアプリ', '自動化とAIエージェントの設定、調整、監督', 'フォローアップし、予約し、壊れないワークフロー'],
      github: 'コードを、もう少し詳しく。',
      githubText: 'GitHubでリポジトリや開発の取り組みをご覧いただけます。',
      githubLink: 'GitHubを見る',
    },
    contact: {
      label: '07 / お問い合わせ',
      heading: 'あなたの仕事に役立つものを、\n一緒につくりましょう。',
      text: 'Webサイト、ワークフロー、AI自動化のアイデアがあれば、ぜひお聞かせください。',
      action: 'メールで相談する',
      email: 'メールアドレス',
    },
    footer: {
      socials: 'ソーシャルプロフィール',
      linkedinUnavailable: 'LinkedInのプロフィールリンクは準備中です',
    },
    theme: {
      toLight: 'ライトテーマに切り替える',
      toDark: 'ダークテーマに切り替える',
    },
    notFound: {
      title: 'ページが見つかりません。',
      text: 'お探しのページはここにはありません。ポートフォリオのトップへお戻りください。',
      back: 'ホームへ戻る',
    },
  },
}
