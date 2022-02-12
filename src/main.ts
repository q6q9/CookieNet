import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/scss/bootstrap.scss";
import store from "@/store/store";
import VueCookies from "vue3-cookies";
import axios from "axios";

axios.defaults.headers.common["Accept"] = "application/json";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueCookies);

app.mount("#app");
