<template>
  <Building />
</template>

<script setup lang="ts">
import Building from "~/components/Building.vue";

useHead({
  title: "À propos - Mathilde Hétru",
  meta: [
    {
      name: "description",
      content:
        "Découvrez mon parcours en tant qu'illustratrice, graphiste et développeuse front-end. Passionnée par la création visuelle et le web, je mets mon expertise à votre service.",
    },
    { property: "og:url", content: "https://www.mathildehetru.com/about-me" },
    { property: "og:title", content: "À propos - Mathilde Hétru" },
    {
      property: "og:description",
      content:
        "Mon parcours en tant qu'illustratrice, graphiste et développeuse front-end.",
    },
  ],
});
</script>
