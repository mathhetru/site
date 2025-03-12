<template>
  <header id="header" class="header width">
    <NuxtLink to="/">
      <img
        class="header__img"
        src="~/assets/Mathilde-Hetru-Logo.png"
        alt="Logo Mathilde Hétru"
      />
    </NuxtLink>
    <nav class="header-nav hidden-on-mobile ">
      <NuxtLink class="link-line" to="/portfolio">
        <p class="link-line__text">Portfolio</p>
        <div class="link-line__change"></div>
      </NuxtLink>
      <button
        @click="toggleServices"
        aria-haspopup="true"
        aria-controls="overlay_menu"
        :aria-expanded="isMenuOpen"
        class="link-line"
        type="button"
      >
        <p class="link-line__text">
          Services
          <font-awesome-icon class="link-line__icon" :icon="arrowDirection" />
        </p>
        <div class="link-line__change"></div>
      </button>
      <Menu
        ref="menuRef"
        id="overlay_menu"
        :model="items"
        class="nav-collapsible"
        :popup="true"
        @hide="menuClose()"
        @show="menuOpen()"
      >
        <template #item="{ item }">
          <NuxtLink
            v-if="item.route"
            :to="item.route"
            class="nav-collapsible__link"
          >
            <p class="nav-collapsible__text">{{ item.label }}</p>
            <div class="nav-collapsible__change"></div>
          </NuxtLink>
        </template>
      </Menu>
      <NuxtLink class="link-line" to="/about">
        <p class="link-line__text">Qui suis-je ?</p>
        <div class="link-line__change"></div>
      </NuxtLink>
      <NuxtLink
        class="link-line"
        href="https://www.etsy.com/fr/shop/MathildeHetruArt"
        target="_blank"
      >
        <p class="link-line__text">Boutique en ligne</p>
        <div class="link-line__change"></div>
      </NuxtLink>
    </nav>
    <ButtonContact class="hidden-on-mobile" />
    <button class="button-drawer hidden-on-large" @click="drawerOpen()">
      <font-awesome-icon class="button-drawer__text" :icon="faArrowLeft" />
      <div class="button-drawer__change"></div>
    </button>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { faArrowLeft, faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import buttonContact from "./ButtonContact.vue";
import { useSiteStore } from "../stores/site.store";
import Menu from "primevue/menu";

const menuRef = ref();
const isMenuOpen = ref(false);

const store = useSiteStore();

const drawerOpen = () => {
  store.isOpenDrawer = !store.isOpenDrawer;
};

const items = ref([
  { label: "Développement web", route: "/services-dev-web" },
  { label: "Graphisme print et digital", route: "/services-graphic-design" },
  { label: "Illustration", route: "/services-illustration" },
]);

const arrowDirection = computed(() =>
  isMenuOpen.value ? faAngleUp : faAngleDown,
);

const toggleServices = (event: Event) => {
  if (menuRef.value) {
    menuRef.value.toggle(event);
  }
};

const menuOpen = () => {
  isMenuOpen.value = true;
};

const menuClose = () => {
  isMenuOpen.value = false;
};
</script>
