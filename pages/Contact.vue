<template>
  <div id="contact">
    <section class="section-blue">
      <h1 class="section-blue__title">Contacte-moi !</h1>
      <div class="section-blue__line"></div>
      <p class="section-blue__text">
        Du crayon au code, je donne vie à vos projets. <br />
        Un projet ? Une idée ? Ou juste un coucou. <br />
        Laisse ton message ! J'y répondrai au plus vite.
      </p>
    </section>
    <NuxtImg
      src="images/waves/wave-blue-down.svg"
      alt="wave blue Mathilde Hétru"
      preload
    />
    <ContactForm />
  </div>
</template>

<script setup lang="ts">
import ContactForm from "./../components/ContactForm.vue";

useHead({
  title: "Contacte-moi - Mathilde Hétru",
  meta: [
    {
      name: "description",
      content:
        "Contacte-moi pour tes projets en illustration, graphisme print et développement web. Échangeons sur tes besoins et trouvons ensemble la meilleure solution créative.",
    },
    { property: "og:url", content: "https://www.mathildehetru.com/contact" },
    { property: "og:title", content: "Contacte-moi - Mathilde Hétru" },
    {
      property: "og:description",
      content:
        "Graphiste, illustratrice et développeuse front-end, je t'accompagne dans tes projets créatifs. Contacte-moi pour en parler !",
    },
  ],
});
</script>
