<template>
  <header class="flex justify-between items-center my-10 mx-auto px-10 width">
    <NuxtLink to="/">
      <img
        class="header__img"
        src="~/assets/Mathilde-Hetru-Logo.webp"
        alt="Logo Mathilde Hétru"
      />
    </NuxtLink>
    <nav class="w-7/12 lg:flex items-center justify-center hidden">
      <NuxtLink class="line" to="/portfolio">
        <p class="line__text">portfolio</p>
        <div class="line__change"></div>
      </NuxtLink>
      <Button
        @click="toggleServices"
        aria-haspopup="true"
        aria-controls="overlay_menu"
        :aria-expanded="isMenuOpen"
        class="line"
        type="button"
      >
        <p class="line__text">
          services
          <font-awesome-icon class="ml-2 relative" :icon="arrowDirection" />
        </p>
        <div class="line__change"></div>
      </Button>
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
      <NuxtLink class="line" to="/about">
        <p class="line__text">qui suis-je ?</p>
        <div class="line__change"></div>
      </NuxtLink>
      <a
        class="line"
        href="https://www.etsy.com/fr/shop/MathildeHetruArt"
        target="_blank"
      >
        <p class="line__text">Boutique en ligne</p>
        <div class="line__change"></div>
      </a>
    </nav>
    <NuxtLink class="button-blue" to="/contact">
      <p class="button-blue__text">Me contacter</p>
      <div class="button-blue__change"></div>
    </NuxtLink>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Menu from "primevue/menu";
import Button from "primevue/button";

const menuRef = ref();
const isMenuOpen = ref(false);

const items = ref([
  { label: "Développement web", route: "/services-dev-web" },
  { label: "Graphisme print et digital", route: "/services-graphic-design" },
  { label: "Illustration", route: "/services-illustration" },
]);

const arrowDirection = computed(() =>
  isMenuOpen.value ? faAngleUp : faAngleDown
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
