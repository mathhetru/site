<template>
  <footer>
    <p>&copy; {{ date }} - Tous droits réservés</p>
  </footer>
</template>

<script setup lang="ts">
const date = new Date().getFullYear();
</script>
