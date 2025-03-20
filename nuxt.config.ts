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
        { hid: 'description', name: 'description', content: 'Mathilde Hétru, développeuse web et mobile, graphiste et artiste illustratrice freelance depuis 2015 à Lille. Designs, illustrations et sites web personnalisés qui boostent votre image.' },
        { name: 'author', content: 'Mathilde Hétru' },
        { name: 'keywords', content: 'illustratrice, graphiste, développeuse front-end, design, web, freelance, création visuelle, illustration, lille' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:image', content: '/images/Mathilde-Hetru-Logo.webp' },

      ],
      link: [
        { rel: 'icon', type: 'image/webp+xml', href: '/images/Mathilde-Hetru-Logo.webp' }
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
  modules: ["nuxt-security", '@primevue/nuxt-module', '@pinia/nuxt', '@nuxt/image'],
  primevue: {
    options: {
      theme: {
        preset: 'none'
      }
    }
  },
});

