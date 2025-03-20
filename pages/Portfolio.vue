<template>
  <Building />
</template>

<script setup lang="ts">
import Building from "~/components/Building.vue";

useHead({
  title: "Mes projets - Mathilde Hétru",
  meta: [
    {
      name: "description",
      content:
        "Découvrez mon portfolio en illustration, graphisme et développement web. Un aperçu de mes réalisations et de mon univers créatif.",
    },
    { property: "og:url", content: "https://www.mathildehetru.com/portfolio" },
    { property: "og:title", content: "Mon portfolio - Mathilde Hétru" },
    {
      property: "og:description",
      content:
        "Explorez mon portfolio et découvrez mes créations en illustration, graphisme et développement web !",
    },
  ],
});
</script>
