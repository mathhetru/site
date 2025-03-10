<template>
  <header class="flex justify-between items-center my-10 mx-auto px-10 width">
    <NuxtLink to="/">
      <img
        class="header__img"
        src="~/assets/Mathilde-Hetru-Logo.png"
        alt="Logo Mathilde Hétru"
      />
    </NuxtLink>
    <nav class="w-7/12 lg:flex items-center justify-center hidden">
      <NuxtLink class="line" to="/portfolio">
        <p class="line__text">portfolio</p>
        <div class="line__change"></div>
      </NuxtLink>
      <!-- <NuxtLink class="line" to="/skills">
        <p class="line__text">compétences</p>
        <div class="line__change"></div>
      </NuxtLink> -->
      <!-- <div @click="handleClickCollapsible" class="line">
        <p class="line__text">
          services
          <font-awesome-icon class="ml-2 relative" :icon="arrowDirection()" />
        </p>
        <div class="line__change"></div>
      </div>
      <div v-if="openModalLinks">
        <div class="nav-collapsible">
          <NuxtLink class="nav-collapsible__link" to="/services-dev-web">
            <p class="nav-collapsible__text">developpement web</p>
            <div class="nav-collapsible__change"></div>
          </NuxtLink>
          <NuxtLink class="nav-collapsible__link" to="/services-graphic-design">
            <p class="nav-collapsible__text">graphisme print</p>
            <div class="nav-collapsible__change"></div>
          </NuxtLink>
          <NuxtLink class="nav-collapsible__link" to="/services-illustration">
            <p class="nav-collapsible__text">illustration</p>
            <div class="nav-collapsible__change"></div>
          </NuxtLink>
        </div>
      </div> -->
      <UDropdown
        :items="items"
        :popper="{ placement: 'bottom-start' }"
        :ui="{
          strategy: 'override',
          color: {
            white: {
              solid: 'bg-white dark:bg-gray-900',
            },
          },
        }"
      >
        <div @click="handleClickCollapsible" class="line">
          <p class="line__text">
            services
            <font-awesome-icon class="ml-2 relative" :icon="arrowDirection()" />
          </p>
          <div class="line__change"></div>
        </div>
        <template #item="{ item }">
          <p class="nav-collapsible__text">{{ item.label }}</p>
          <div class="nav-collapsible__change"></div>
        </template>
      </UDropdown>
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
import { ref } from "vue";
import { fas } from "@fortawesome/free-solid-svg-icons";

const openModalLinks = ref(false);
const items = [
  [
    {
      label: "developpement web",
      to: "/services-dev-web",
      class: "nav-collapsible__link",
      ui: {
        strategy: "override",
        color: {
          white: {
            solid: "bg-white dark:bg-gray-900",
          },
        },
      },
    },
    {
      label: "graphisme print",
      to: "/services-graphic-design",
      class: "nav-collapsible__link",
    },
    {
      label: "illustration",
      to: "/services-illustration",
      class: "nav-collapsible__link",
    },
  ],
];

const arrowDirection = () => {
  return openModalLinks.value ? fas.faAngleUp : fas.faAngleDown;
};

const handleClickCollapsible = () => {
  openModalLinks.value = !openModalLinks.value;
};

const closeModalLinks = () => {
  openModalLinks.value = false;
};
</script>
