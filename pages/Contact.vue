<template>
  <div id="contact">
    <section class="section-contact">
      <h1 class="section-contact__title">Contacte-moi !</h1>
      <div class="section-contact__line"></div>
      <p class="section-contact__text">
        Du crayon au code, je donne vie à vos projets. <br />
        Un projet ? Une idée ? Ou juste un coucou. <br />
        Laisse ton message ! J'y répondrai au plus vite.
      </p>
    </section>
    <NuxtImg
      src="images/waves/wave-blue-down.svg"
      width="100%"
      height="100%"
      alt="wave blue"
      preload
    />
    <ContactForm />
  </div>
</template>

<script setup lang="ts">
import ContactForm from "./../components/ContactForm.vue";
</script>
