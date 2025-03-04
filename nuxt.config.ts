// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      title: 'Mathilde Hétru',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Mathilde Hétru, développeuse web et mobile, graphiste et artiste illustratrice à Lille. Designs, illustrations et sites web personnalisés qui boostent votre image.' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/HRNet.svg' }
      ]
    }
  },
  css: ["@/assets/styles/style.scss"],
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
  modules: ["@nuxtjs/tailwindcss"],
});
