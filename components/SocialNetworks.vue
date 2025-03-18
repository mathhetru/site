<template>
  <div class="footer-RS-container">
    <NuxtLink
      href="https://www.instagram.com/mathilde.hetru/"
      target="_blank"
      class="footer-RS__link"
    >
      <font-awesome-icon class="footer-RS__icon" :icon="faInstagram" />
      <!-- <span>mathilde.hetru</span> -->
    </NuxtLink>

    <NuxtLink
      href="https://github.com/mathhetru"
      target="_blank"
      class="footer-RS__link"
    >
      <font-awesome-icon class="footer-RS__icon" :icon="faGithub" />
      <!-- <span>mathhetru</span> -->
    </NuxtLink>

    <NuxtLink
      href="https://www.linkedin.com/in/mathildehetru/"
      target="_blank"
      class="footer-RS__link"
    >
      <font-awesome-icon class="footer-RS__icon" :icon="faLinkedin" />
      <!-- <span>Mathilde Hétru</span> -->
    </NuxtLink>

    <NuxtLink
      href="https://www.pinterest.fr/mathildehetru"
      target="_blank"
      class="footer-RS__link"
    >
      <font-awesome-icon class="footer-RS__icon" :icon="faPinterest" />
      <!-- <span>Mathilde Hétru</span> -->
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
