<template>
  <img
    class="footer__wave"
    src="~/assets/waves/wave-darkblue-up.svg"
    alt="wave"
  />
  <footer id="footer">
    <div class="footer-container">
      <div class="footer-RS-newsletter">
        <div class="footer-RS">
          <p class="footer-title">Retrouve mes réseaux</p>
          <SocialNetworks />
        </div>
        <div class="footer-newsletter">
          <p class="footer-title">Inscris-toi à la newsletter</p>
          <span class="footer-newsletter__sentence"
            >Je t’envoie une anecdote illustrée par mois.<br />
            Pas de spam, pas de blabla. Juste du smile par mail ! ✨
          </span>
          <Newsletter />
        </div>
      </div>
      <div class="footer-legals">
        <p class="footer-legals__sentence">{{ date }} - Tous droits réservés</p>
        <div class="footer-legals__link">
          <NuxtLink to="/mentions-legales">mentions légales</NuxtLink>
          <NuxtLink to="/CGV">CGV</NuxtLink>
          <!-- //TODO faire page de confidentialité -->
          <!-- <NuxtLink to="/politiques-de-confidentialite">Politique de confidentialité
          </NuxtLink> -->
        </div>
      </div>
      <p class="footer-sentence">
        Site web conçu sur-mesure, entièrement codé avec mes 10 doigts.<br />
        Sous le capot : Nuxt.js, Node.js, Pinia, Netlify, PrimeVue. Et du jus de
        cervelle !<br />
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Newsletter from "./../components/Newsletter.vue";
import SocialNetworks from "./SocialNetworks.vue";

const date = new Date().getFullYear();
</script>
