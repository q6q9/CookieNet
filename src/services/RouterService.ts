import router from "@/router";
import AuthService from "@/services/AuthService";

export default class RouterService {
  static authService = new AuthService();

  init(): void {
    router.beforeEach((to, from, next) => {
      if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!RouterService.authService.check()) {
          router.push("/login");
        }
      }

      if (to.matched.some((record) => record.meta.requiresNoAuth)) {
        if (RouterService.authService.check()) {
          router.push("/");
        }
      }

      next();
    });
  }
}
