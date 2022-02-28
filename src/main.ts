import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/scss/bootstrap.scss";
import store from "@/store/store";
import VueCookies from "vue3-cookies";
import AuthService from "@/services/AuthService";
import AxiosService from "@/services/AxiosService";
import RouterService from "@/services/RouterService";

const axiosService = new AxiosService();
axiosService.init();

const authService = new AuthService();
authService.execAfterFirstUserLoad(function () {
  const routerService = new RouterService();
  routerService.init();
});
authService.loadUserFromCookies();

const app = createApp(App);

app.config.globalProperties.$auth = authService;

app.use(router);
app.use(store);
app.use(VueCookies);

app.mount("#app");
