// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/image',
    'vue3-carousel-nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-gtag'
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
    }
  }


})