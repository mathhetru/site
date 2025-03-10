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
      <div @click="handleClickCollapsible" class="line">
        <p class="line__text">
          services
          <font-awesome-icon
            class="ml-2 relative"
            :icon="['fas', arrowDirection()]"
          />
        </p>
        <div class="line__change"></div>
        <div v-if="open" class="nav__collapsible">
          <NuxtLink class="nav__collapsible__link" to="/services-dev-web">
            <p class="nav__collapsible__text">developpement web</p>
            <div class="nav__collapsible__change"></div>
          </NuxtLink>
          <NuxtLink
            class="nav__collapsible__link"
            to="/services-graphic-design"
          >
            <p class="nav__collapsible__text">graphisme print</p>
            <div class="nav__collapsible__change"></div>
          </NuxtLink>
          <NuxtLink class="nav__collapsible__link" to="/services-illustration">
            <p class="nav__collapsible__text">illustration</p>
            <div class="nav__collapsible__change"></div>
          </NuxtLink>
        </div>
      </div>
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

const open = ref(false);

const arrowDirection = () => {
  return open.value ? "angle-up" : "angle-down";
};

const handleClickCollapsible = () => {
  open.value = !open.value;
};
</script>
