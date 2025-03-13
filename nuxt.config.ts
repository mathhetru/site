// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      title: 'Mathilde Hétru - Dev web, graphiste, illustratrice freelance',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Mathilde Hétru, développeuse web et mobile, graphiste et artiste illustratrice freelance depuis 2015. Designs, illustrations et sites web personnalisés qui boostent votre image.' },
      ],
      link: [
        { rel: 'icon', type: 'image/png+xml', href: '/Mathilde-Hetru-Logo.png' }
      ]
    }
  },
  css: ["@/assets/styles/style.scss", '@fortawesome/fontawesome-svg-core/styles.css'],
  compatibilityDate: "2025-01-27",
  devtools: { enabled: true },
  runtimeConfig: {
    mailService: process.env.NUXT_MAIL_SERVICE,
    mailHost: process.env.NUXT_MAIL_HOST,
    mailUsername: process.env.NUXT_MAIL_USERNAME,
    mailPassword: process.env.NUXT_MAIL_PASSWORD,
    apiSecret: process.env.NUXT_MAIL_API_KEY,
    apiBase: process.env.NUXT_MAIL_API,
  },
  typescript: {
    typeCheck: true,
    strict: false,
  },
  modules: ["nuxt-security", '@primevue/nuxt-module', '@pinia/nuxt'],
  primevue: {
    options: {
      theme: {
        preset: 'none'
      }
    }
  },
});
