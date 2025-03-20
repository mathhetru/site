<template>
  <Building />
</template>

<script setup lang="ts">
import Building from "~/components/Building.vue";

useHead({
  title: "Services developpement web - Mathilde Hétru",
  meta: [
    {
      name: "description",
      content:
        "Vous cherchez un site web performant et esthétique ? Spécialisée en développement front-end, je conçois des interfaces modernes et optimisées pour une expérience utilisateur fluide.",
    },
    { property: "og:url", content: "https://www.mathildehetru.com/services-dev-web" },
    { property: "og:title", content: "Services developpement web - Mathilde Hétru" },
    {
      property: "og:description",
      content:
        "Développement web sur mesure : création de sites modernes, performants et adaptés à vos besoins. Contacte-moi pour donner vie à ton projet digital !",
    },
  ],
});
</script>