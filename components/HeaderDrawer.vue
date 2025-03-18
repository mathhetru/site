<template>
  <div>
    <Drawer
      v-model:visible="store.isOpenDrawer"
      position="right"
      class="drawer"
    >
      <div class="drawer-header">
        <span class="drawer-header-prenom">Mathilde</span><br />
        <span class="drawer-header-nom">Hétru</span><br />
        <br />
        <span class="drawer-header-baseline">
        Developpeuse web<br />
        Graphiste print et digital<br />
        Illustratrice<br />
        <br />
        Freelance depuis 2015
        </span>
      </div>
      <div class="gray-line"></div>
      <nav class="drawer-nav">
        <NuxtLink class="link-line link-drawer-line" to="/portfolio">
          <p class="link-line__text link-drawer-line__text">portfolio</p>
          <div class="link-line__change"></div>
        </NuxtLink>
        <NuxtLink class="link-line link-drawer-line" to="/about">
          <p class="link-line__text link-drawer-line__text">qui suis-je ?</p>
          <div class="link-line__change"></div>
        </NuxtLink>
        <div class="gray-line"></div>
        <div class="drawer-nav__container">
          <p class="drawer-nav__text">
            Services
            <font-awesome-icon class="link-line__icon" :icon="faAngleDown" />
          </p>
          <NuxtLink class="link-line link-drawer-line" to="/services-dev-web">
            <p class="link-line__text link-drawer-line__text">
              Développement web
            </p>
            <div class="link-line__change"></div>
          </NuxtLink>
          <NuxtLink
            class="link-line link-drawer-line"
            to="/services-graphic-design"
          >
            <p class="link-line__text link-drawer-line__text">
              Graphisme print et digital
            </p>
            <div class="link-line__change"></div>
          </NuxtLink>
          <NuxtLink
            class="link-line link-drawer-line"
            to="/services-illustration"
          >
            <p class="link-line__text link-drawer-line__text">Illustration</p>
            <div class="link-line__change"></div>
          </NuxtLink>
        </div>
        <div class="gray-line"></div>
        <NuxtLink
          class="link-line link-drawer-line"
          href="https://www.etsy.com/fr/shop/MathildeHetruArt"
          target="_blank"
        >
          <p class="link-line__text link-drawer-line__text">
            Boutique en ligne
          </p>
          <!-- TODO ajouter fleche -->
          <div class="link-line__change"></div>
        </NuxtLink>
      </nav>
      <ButtonContact />
    </Drawer>
  </div>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Drawer from "primevue/drawer";
import { useSiteStore } from "../stores/site.store";
import ButtonContact from "./ButtonContact.vue";

const store = useSiteStore();

const route = useRoute();

watch(
  () => route.path,
  (newPath, oldPath) => {
    store.isOpenDrawer = false;
  },
  { immediate: true },
);
</script>
