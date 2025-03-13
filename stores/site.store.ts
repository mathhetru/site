import { defineStore } from "pinia";
import { ref } from "vue";

export const useSiteStore = defineStore('site', () => {
  const name = ref<string>('Mathilde Hétru');
  const isOpenDrawer = ref<boolean>(false);

  return { name, isOpenDrawer }
})