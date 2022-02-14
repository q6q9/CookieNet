import store from "@/store/store";
import { useCookies } from "vue3-cookies";
import type { User } from "@/models/User";
import axios from "axios";

export default class AuthService {
  static loadUserFromCookies(): void {
    const usingCookies = useCookies();
    const token = usingCookies.cookies.get("authToken");

    console.log(token);
    if (token) this.setUserByAuthToken(token);
  }

  static setAuthTokenInCookies(token: string): void {
    const usingCookies = useCookies();
    usingCookies.cookies.set("authToken", token);
  }

  static setUserByAuthToken(token: string): void {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;

    axios.get<User>("/users/self").then((response) => {
      console.log(response.data);
      store.commit("setUser", response.data);
    });
  }

  static user(): User | null {
    return store.state.user;
  }
}
