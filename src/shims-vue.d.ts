import { Store } from "@/store"; // path to store file
import { VueCookies } from "vue3-cookies/dist/interfaces";
import AuthService from "@/services/AuthService";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store;
    $cookies: VueCookies;
    $auth: AuthService;
  }
}
