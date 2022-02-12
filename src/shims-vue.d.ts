import { Store } from "@/store"; // path to store file
import { VueCookies } from "vue3-cookies/dist/interfaces";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store;
    $cookies: VueCookies;
  }
}
