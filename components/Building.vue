<template>
  <div class="building">
    <p class="building__text">🚧 En cours de construction ! 🚧</p>
  </div>
</template>

<style lang="scss">
@use "../assets/styles/utils/colors";
@use "../assets/styles/utils/fonts";


.building {
  width: 100%;
  height: 31.25rem;
  &__text {
    display: block;
    padding: 20rem 0;
    text-align: center;
    font-family: fonts.$patrick-hand;
    font-size: 2rem;
  }
}
</style>
