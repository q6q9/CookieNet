import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SignUpView from "../views/SignUpView.vue";
import UsersView from "../views/UsersView.vue";
import SelfView from "../views/SelfView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "CookieNet",
      },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: {
        title: "Sign in exist account",
        requiresNoAuth: true,
      },
    },
    {
      path: "/sign-up",
      name: "signUp",
      component: SignUpView,
      meta: {
        title: "Sign Up",
        requiresNoAuth: true,
      },
    },
    {
      path: "/users",
      name: "users",
      component: UsersView,
      meta: {
        title: "Users",
        requiresAuth: true,
      },
    },
    {
      path: "/self",
      name: "self",
      component: SelfView,
      meta: {
        title: "Profile",
        requiresAuth: true,
      },
    },
  ],
});

export default router;
