<template>
  <div class="footer-RS-container">
    <NuxtLink
      href="https://www.instagram.com/mathilde.hetru/"
      target="_blank"
      class="footer-RS__link"
      aria-label="Lien vers compte instagram"
    >
      <font-awesome-icon class="footer-RS__icon" :icon="faInstagram" />
    </NuxtLink>

    <NuxtLink
      href="https://github.com/mathhetru"
      target="_blank"
      class="footer-RS__link"
      aria-label="Lien vers compte github"
    >
      <font-awesome-icon class="footer-RS__icon" :icon="faGithub" />
    </NuxtLink>

    <NuxtLink
      href="https://www.linkedin.com/in/mathildehetru/"
      target="_blank"
      class="footer-RS__link"
      aria-label="Lien vers compte linkedin"
    >
      <font-awesome-icon class="footer-RS__icon" :icon="faLinkedin" />
    </NuxtLink>

    <NuxtLink
      href="https://www.pinterest.fr/mathildehetru"
      target="_blank"
      class="footer-RS__link"
      aria-label="Lien vers compte pinterest"
    >
      <font-awesome-icon class="footer-RS__icon" :icon="faPinterest" />
    </NuxtLink>


  </div>
</template>

<script setup lang="ts">
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
</script>
