<template>
  <NuxtImg
    class="footer__wave"
    src="/images/waves/wave-darkblue-up.svg"
    alt="wave dark blue Mathilde Hétru"
    preload
  />
  <footer id="footer">
    <div class="footer-container">
      <div class="footer-RS-newsletter">
        <div class="footer-RS">
          <p class="footer-title">Suis-moi sur les réseaux</p>
          <SocialNetworks />
          <NuxtLink
            href="mailto:hello@mathildehetru.com"
            class="footer__mail"
            aria-label="Lien vers mail"
          >
            hello@mathildehetru.com
          </NuxtLink>
        </div>
        <div class="footer-newsletter">
          <p class="footer-title">Inscris-toi à la newsletter</p>
          <span class="footer-newsletter__sentence"
            >Je t’envoie une anecdote illustrée par mois. Pas de spam, juste du
            smile par mail ! ✨
          </span>
          <Newsletter />
        </div>
      </div>
      <div class="footer-legals">
        <p class="footer-legals__sentence">
          {{ date }} - Tous droits réservés - Les images, les illustrations et
          le contenu de ce site ne sont pas libres de droits.
        </p>
        <div class="footer-legals-container">
          <NuxtLink
            class="footer-legals__link"
            to="/politique-confidentialite"
            external
            >Politique de confidentialité
          </NuxtLink>
          <NuxtLink class="footer-legals__link" to="/CGV" external
            >CGV</NuxtLink
          >
          <NuxtLink class="footer-legals__link" to="/mentions-legales" external
            >Mentions légales</NuxtLink
          >
        </div>
      </div>
      <p class="footer-sentence">
        Site web conçu sur-mesure, entièrement codé avec mes 10 doigts.<br />
        Sous le capot : Nuxt.js, Node.js, Pinia, Netlify, PrimeVue... Et du jus
        de cervelle !
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Newsletter from "./../components/Newsletter.vue";
import SocialNetworks from "./SocialNetworks.vue";

const date = new Date().getFullYear();
</script>
