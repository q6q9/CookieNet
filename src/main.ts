import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/scss/bootstrap.scss";
import store from "@/store/store";
import VueCookies from "vue3-cookies";
import axios from "axios";
import AuthService from "@/services/AuthService";

axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.baseURL = "https://cookie-net-back.herokuapp.com"; //import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = false;

const app = createApp(App);

app.config.globalProperties.$auth = new AuthService();
app.config.globalProperties.$auth.loadUserFromCookies();

app.use(router);
app.use(store);
app.use(VueCookies);

app.mount("#app");
