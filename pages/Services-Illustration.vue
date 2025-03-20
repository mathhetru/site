<template>
  <Building />
</template>

<script setup lang="ts">
import Building from "~/components/Building.vue";

useHead({
  title: "Services illustration - Mathilde Hétru",
  meta: [
    {
      name: "description",
      content:
        "Apportez une touche unique à tes projets avec des illustrations sur mesure ! Je crée des visuels originaux pour l’édition, la communication et le web.",
    },
    {
      property: "og:url",
      content: "https://www.mathildehetru.com/services-illustration",
    },
    {
      property: "og:title",
      content: "Services illustration - Mathilde Hétru",
    },
    {
      property: "og:description",
      content:
        "Illustratrice freelance, je réalise des créations visuelles uniques pour donner du caractère à tes projets. Découvrez mon univers et travaillons ensemble !",
    },
  ],
});
</script>
