<script setup lang="ts">
import ContactForm from "./../components/ContactForm.vue";
</script>

<template>
  <div id="contact">
    <section class="section-contact">
      <h1 class="section-contact__title">Contactez-moi</h1>
      <div class="section-contact__line"></div>
      <p class="section-contact__text">
        Du crayon au code, je donne vie à vos projets. <br />
        Un projet ? Une idée ? Ou juste un coucou.
      </p>
    </section>
    <div>
      <img
        class="section-contact__wave"
        src="~/assets/waves/wave-blue-down.svg"
        alt="wave"
      />
    </div>

    <ContactForm />
  </div>
</template>
