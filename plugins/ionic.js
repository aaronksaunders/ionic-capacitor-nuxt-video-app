import { IonicVue } from "@ionic/vue";
export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with nuxtApp
  nuxtApp.vueApp.use(IonicVue);
});