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
  ],


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
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    }
  },

  image: {
    domains: ['localhost', 'localhost:8000', '127.0.0.1', '127.0.0.1:8000', process.env.API_SOURCE_URL],
  },


  runtimeConfig: {
    public: {
      baseUrl: process.env.API_SOURCE_URL,
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
      proxy: { to: "http://localhost:8000/api/**" },
    },

    '/sanctum/**': {
      proxy: { to: "http://localhost:8000/sanctum/**" },
    },

    '/mailchimp/**': {
      proxy: { to: "https://" + process.env.MAILCHIMP_SERVER + ".api.mailchimp.com/3.0/**" },
    }
  }


})