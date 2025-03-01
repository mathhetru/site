// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  modules: ["@dargmuesli/nuxt-cookie-control", "@nuxtjs/tailwindcss"],
  cookieControl: {
    barPosition: "bottom-full",
    colors: {
      barBackground: "#000",
      barButtonBackground: "#fff",
      barButtonColor: "#000",
      barButtonHoverBackground: "#333",
      barButtonHoverColor: "#fff",
      barTextColor: "#fff",
    },
    cookieExpiryOffsetMs: 1000 * 60 * 60 * 24 * 365,
    cookieNameCookiesEnabledIds: "cookieControl_cookiesEnabledIds",
    cookieNameIsConsentGiven: "cookieControl_consentGiven",
    cookies: {
      necessary: [
        {
          id: "necessary_cookies",
          name: {
            fr: "Cookies nécessaires",
            id: "Necessary Cookies",
            en: "Necessary Cookies",
          },
          isPreselected: false,
          src: "https://example.com/cookie-control/cookie-control.js",
          targetCookieIds: ["cookieControl_consentGiven"],
        },
      ],
      optional: [
        {
          id: "analytics_cookies",
          name: { fr: "Cookies analytiques", en: "Analytics Cookies" },
          src: "https://example.com/cookie-control/cookie-control.js",
          targetCookieIds: ["cookieControl_consentGiven"],
        },
      ],
    },
    isAcceptNecessaryButtonEnabled: true,
    isControlButtonEnabled: true,
    isCookieIdVisible: true,
    isCssEnabled: true,
    isCssPonyfillEnabled: true,
    isDashInDescriptionEnabled: true,
    isIframeBlocked: true,
    isModalForced: true,
    locales: ["fr", "en"],
    localeTexts: {
      en: {
        accept: "Accept",
        acceptAll: "Accept all",
        bannerDescription:
          "This website uses cookies to ensure you get the best experience on our website.",
        bannerTitle: "Cookie control",
        close: "Close",
        cookiesFunctional: "Functional cookies",
        cookiesNecessary: "Necessary cookies",
        cookiesOptional: "Optional cookies",
        iframeBlocked: "Please enable cookies to see this content.",
        decline: "Decline",
        declineAll: "Decline all",
        here: "here",
        manageCookies: "Manage cookies",
        save: "Save",
        settingsUnsaved: "Your settings have not been saved.",
      },
      fr: {
        accept: "Accepter",
        acceptAll: "Tout accepter",
        bannerDescription:
          "Ce site utilise des cookies pour vous garantir la meilleure expérience sur notre site.",
        bannerTitle: "Contrôle des cookies",
        close: "Fermer",
        cookiesFunctional: "Cookies fonctionnels",
        cookiesNecessary: "Cookies nécessaires",
        cookiesOptional: "Cookies optionnels",
        iframeBlocked: "Veuillez activer les cookies pour voir ce contenu.",
        decline: "Refuser",
        declineAll: "Tout refuser",
        here: "ici",
        manageCookies: "Gérer les cookies",
        save: "Enregistrer",
        settingsUnsaved: "Vos paramètres n'ont pas été enregistrés.",
      },
    },
  },
});
