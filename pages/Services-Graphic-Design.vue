<template>
  <Building />
</template>

<script setup lang="ts">
import Building from "~/components/Building.vue";

useHead({
  title: "Services graphisme web et digital - Mathilde Hétru",
  meta: [
    {
      name: "description",
      content:
        "Besoin d’un design percutant pour vos supports de communication ? Je crée des visuels uniques et impactants pour donner vie à ton image de marque.",
    },
    {
      property: "og:url",
      content: "https://www.mathildehetru.com/services-graphic-design",
    },
    {
      property: "og:title",
      content: "Services graphisme web et digital - Mathilde Hétru",
    },
    {
      property: "og:description",
      content:
        "Graphiste freelance, je conçois des visuels attractifs et professionnels pour vos supports print et digitaux. Contacte-moi pour sublimer ta communication !",
    },
  ],
});
</script>
