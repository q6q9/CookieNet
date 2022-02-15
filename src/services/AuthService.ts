import store from "@/store/store";
import { useCookies } from "vue3-cookies";
import type { User } from "@/models/User";
import axios from "axios";

export default class AuthService {
  /*static*/ loadUserFromCookies(): void {
    const usingCookies = useCookies();
    const token = usingCookies.cookies.get("authToken");

    if (token) this.setUserByAuthToken(token);
  }

  /*static*/ setAuthTokenInCookies(token: string): void {
    const usingCookies = useCookies();
    usingCookies.cookies.set("authToken", token);
  }

  /*static*/ setUserByAuthToken(token: string): void {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;

    axios.get<User>("/users/self").then((response) => {
      store.commit("setUser", response.data);
    });
  }

  /*static*/ logOut(): void {
    store.commit("setUser", null);

    const usingCookies = useCookies();
    usingCookies.cookies.remove("authToken");
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  /*static*/ user(property?: string): any {
    const user = store.state.user;

    if (user === null) return null;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (property) return user[property];

    return store.state.user;
  }
}
