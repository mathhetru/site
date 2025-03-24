<script setup lang="ts">
import Header from "./components/Header.vue";
import HeaderDrawer from "./components/HeaderDrawer.vue";
import Footer from "./components/Footer.vue";
import ScrollTop from 'primevue/scrolltop';
// TODO cookies gestion
</script>

<template>
  <div>
    <ScrollTop />
    <Header></Header>
    <HeaderDrawer></HeaderDrawer>
    <NuxtPage />
    <Footer></Footer>
  </div>
</template>
