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

const routerService = new RouterService();
routerService.init();

const app = createApp(App);

app.config.globalProperties.$auth = new AuthService();
app.config.globalProperties.$auth.loadUserFromCookies();

app.use(router);
app.use(store);
app.use(VueCookies);

app.mount("#app");
