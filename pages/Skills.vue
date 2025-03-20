<template>
  <Building />
</template>

<script setup lang="ts">
import Building from "~/components/Building.vue";

useHead({
  title: "Mes diverses compétences - Mathilde Hétru",
  meta: [
    {
      name: "description",
      content:
        "Découvrez mes compétences en illustration, graphisme et développement web. Un savoir-faire polyvalent pour des projets créatifs et sur mesure.",
    },
    {
      property: "og:url",
      content: "https://www.mathildehetru.com/skills",
    },
    {
      property: "og:title",
      content: "Mes diverses compétences - Mathilde Hétru",
    },
    {
      property: "og:description",
      content:
        "Illustration, graphisme, développement web : explorez mes compétences et mon expertise pour donner vie à vos projets.",
    },
  ],
});
</script>
