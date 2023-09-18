// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  site: {
    url: process.env.APP_URL,
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@pinia/nuxt',
    '@dargmuesli/nuxt-cookie-control',
    'vue3-carousel-nuxt',
    'nuxt-gtag',
    'nuxt-simple-sitemap'
  ],

  gtag: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },

  googleFonts: {
    families: {
      'Open Sans': [100, 300, 500, 700, 900],
    },
    outputDir: 'assets',
    fontsDir: 'fonts',
    stylePath: 'css/google-fonts.css'
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: '~/config/tailwind.js'
  },

  sitemap: {
    debug: true,
  },

  cookieControl: {
    cookies: {
      necessary: [],
      optional: [
        {
          id: 'analytical',
          description: {
            cs: 'Analytické cookies nám umožňují měření výkonu našeho webu a našich reklamních kampaní.',
            en: 'Analytical cookies allow us to measure the performance of our website and our advertising campaigns.',
            de: 'Analytische Cookies ermöglichen es uns, die Leistung unserer Website und unserer Werbekampagnen zu messen.',
            sk: 'Analytické cookies nám umožňujú meranie výkonu nášho webu a našich reklamných kampaní.',
            pl: 'Analityczne pliki cookie pozwalają nam mierzyć wydajność naszej strony internetowej i naszych kampanii reklamowych.',
            ru: 'Аналитические файлы cookie позволяют нам измерять эффективность нашего веб-сайта и наших рекламных кампаний.',
            hu: 'Az analitikai cookie-k lehetővé teszik weboldalunk és hirdetési kampányaink teljesítményének mérését.'
          },
          name: {
            cs: 'Analytické cookie',
            en: 'Analytical cookies',
            de: 'Analytische cookies',
            sk: 'Analytické cookie',
            pl: 'Analityczne pliki cookie',
            ru: 'Аналитические куки',
            hu: 'Analitikai sütik'
          },
        },
        {
          id: 'marketing',
          description: {
            cs: 'Reklamní cookies slouží nám nebo naši partneři k tomu, abychom vám mohli zobrazit vhodný obsah nebo reklamu jak na našich stránkách, tak na stránkách třetích subjektů.',
            en: 'Advertising cookies are used by us or our partners so that we can display suitable content or advertisements both on our website and on the websites of third parties.',
            de: 'Werbe-Cookies werden von uns oder unseren Partnern verwendet, damit wir sowohl auf unserer Website als auch auf den Websites Dritter passende Inhalte oder Werbung anzeigen können.',
            sk: 'Reklamné cookies slúžia nám alebo naši partneri na to, aby sme vám mohli zobraziť vhodný obsah alebo reklamu ako na našich stránkach, tak na stránkach tretích subjektov.',
            pl: 'Reklamowe pliki cookie są wykorzystywane przez nas lub naszych partnerów, abyśmy mogli wyświetlać odpowiednie treści lub reklamy zarówno na naszej stronie internetowej, jak i na stronach osób trzecich.',
            ru: 'Рекламные файлы cookie используются нами или нашими партнерами, чтобы мы могли отображать подходящий контент или рекламу как на нашем веб-сайте, так и на веб-сайтах третьих лиц.',
            hu: 'A reklámsütiket mi vagy partnereink használjuk, hogy megfelelő tartalmat vagy hirdetéseket jeleníthessünk meg weboldalunkon és harmadik felek weboldalain egyaránt.'
          },
          name: {
            cs: 'Reklamní cookie',
            en: 'Advertising cookies',
            de: 'Werbe-Cookies',
            sk: 'Reklamné cookie',
            pl: 'Reklamowe pliki cookie',
            ru: 'Рекламные куки',
            hu: 'Reklámsütik'
          },
        },
        {
          id: 'personalized',
          description: {
            cs: 'Používáme cookies a další technologie, abychom přizpůsobili náš obchod potřebám a zájmům našich zákazníků a připravili tak pro vás co nepříjemnější zážitek.',
            en: 'We also use cookies and other technologies to tailor our business to the needs and interests of our customers and prepare an exceptional shopping experience for you.',
            de: 'Wir verwenden Cookies und andere Technologien auch, um unser Geschäft auf die Bedürfnisse und Interessen unserer Kunden auszurichten und Ihnen ein außergewöhnliches Einkaufserlebnis zu bereiten.',
            sk: 'Používame cookies a ďalšie technológie, aby sme prispôsobili náš obchod potrebám a záujmom našich zákazníkov a pripravili tak pre vás čo nepríjemnejší zážitok.',
            pl: 'Używamy również plików cookie i innych technologii, aby dostosować naszą działalność do potrzeb i zainteresowań naszych klientów oraz przygotować dla Ciebie wyjątkowe wrażenia zakupowe.',
            ru: 'Мы также используем файлы cookie и другие технологии, чтобы адаптировать наш бизнес к потребностям и интересам наших клиентов и подготовить для вас исключительный опыт покупок.',
            hu: 'Cookie-kat és egyéb technológiákat is használunk, hogy üzletünket ügyfeleink igényeihez és érdekeihez igazítsuk, és kivételes vásárlási élményt készítsünk Önnek.'
          },
          name: {
            cs: 'Funkční cookie',
            en: 'Personalized cookies',
            de: 'Personalisierte Cookies',
            sk: 'Funkčné cookie',
            pl: 'Spersonalizowane pliki cookie',
            ru: 'Персонализированные файлы cookie',
            hu: 'Személyre szabott sütik'
          },
        },
      ]
    },
    isControlButtonEnabled: true,
    isIframeBlocked: true,
    locales: ['cs', 'en'],
  },

  i18n: {
    locales: ['cs', 'en'],
    defaultLocale: 'cs',
    vueI18n: './config/i18n.config.ts',
    customRoutes: 'config',
    pages: {
      'test-router/index': {
        en: '/english-test-router',
      },
      'clanky/index': {
        en: '/articles',
      },
      'clanky/[slug]/index': {
        en: '/articles/:slug',
      },
      'clanky/page/[number]': {
        en: '/articles/page/:number',
      },
      'clanky/tag/[slug]': {
        en: '/articles/tag/:slug',
      },
      'clanky/kategorie/[slug]/index': {
        en: '/articles/category/:slug',
      },
      'clanky/kategorie/[slug]/page/[number]': {
        en: '/articles/category/:slug/page/:number',
      },
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    }
  },

  image: {
    domains: ['localhost', 'localhost:8000', '127.0.0.1', '127.0.0.1:8000', process.env.APP_URL],
  },

  runtimeConfig: {
    public: {
      baseUrl: process.env.APP_URL,
      serverUrl: process.env.API_URL,
      accessToken:  process.env.API_ACCESS_TOKEN,
      recaptcha: {
        siteKey: process.env.RECAPTCHA_SITE_KEY
      },
      mailchimp: {
        apiKey: process.env.MAILCHIMP_API_KEY,
        audience: process.env.MAILCHIMP_AUDIENCE_ID
      }
    },

  },

  routeRules: {
    '/api/**': {
      proxy: { to: process.env.API_URL + "/api/**" },
    },

    '/sanctum/**': {
      proxy: { to: process.env.API_URL + "/sanctum/**" },
    },

    '/mailchimp/**': {
      proxy: { to: "https://" + process.env.MAILCHIMP_SERVER + ".api.mailchimp.com/3.0/**" },
    },

    '/**': {
      swr: true,
    },
  }


})