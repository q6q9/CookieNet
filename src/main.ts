import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/scss/bootstrap.scss";
import store from "@/store/store";
import VueCookies from "vue3-cookies";
import axios from "axios";
import AuthService from "@/services/AuthService";

axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

AuthService.loadUserFromCookies();

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueCookies);

app.mount("#app");
