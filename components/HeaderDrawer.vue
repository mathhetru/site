<template>
  <div>
    <Drawer v-model:visible="visible" header="Right Drawer" position="right">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </Drawer>
    <Button @click="drawerOpen()">
      <font-awesome-icon
        class="button-blue__text"
        :icon="faArrowLeft"
      />
      <div class="button-blue__change"></div>
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Drawer from "primevue/drawer";
import Button from "primevue/button";

const visible = ref(false);

const drawerOpen = () => {
  visible.value = !visible.value;
};
</script>
