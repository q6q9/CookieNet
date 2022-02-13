import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/scss/bootstrap.scss";
import store from "@/store/store";
import VueCookies, { useCookies } from "vue3-cookies";
import axios from "axios";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueCookies);

app.mount("#app");

axios.defaults.headers.common["Accept"] = "application/json";

const usingCookies = useCookies();
const authToken = usingCookies.cookies.get("authToken");
if (authToken) {
  store.commit("setAuthToken", authToken);
}
