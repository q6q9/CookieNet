import store from "@/store/store";
import { useCookies } from "vue3-cookies";
import type { SelfUser } from "@/models/SelfUser";
import axios from "axios";

export default class AuthService {
  // eslint-disable-next-line @typescript-eslint/ban-types
  public subscriberFunctionsOnAuth: Function[];

  private _isLoaded: boolean;

  constructor() {
    this.subscriberFunctionsOnAuth = [];
    this._isLoaded = false;
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  execAfterFirstUserLoad(func: Function): void {
    if (this._isLoaded) {
      func();
    }
    this.subscriberFunctionsOnAuth.push(func);
  }

  loadUserFromCookies(): void {
    const usingCookies = useCookies();
    const token = usingCookies.cookies.get("authToken");

    if (token) {
      this.setUserByAuthToken(token);
    } else {
      if (!this._isLoaded) {
        this._isLoaded = true;
        this.execSubscribers();
      }
    }
  }

  setAuthTokenInCookies(token: string): void {
    const usingCookies = useCookies();
    usingCookies.cookies.set("authToken", token);
  }

  setUserByAuthToken(token: string): void {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    axios
      .get<SelfUser>("/users/self")
      .then((response) => {
        store.commit("setUser", response.data);

        if (!this._isLoaded) {
          this._isLoaded = true;
          this.execSubscribers();
        }
      })
      .catch((err) => console.log(err));
  }

  logOut(): void {
    store.commit("setUser", null);
    delete axios.defaults.headers.common["Authorization"];
    const usingCookies = useCookies();
    usingCookies.cookies.remove("authToken");
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user(property?: string): any {
    const user = store.state.user;

    if (user === null) return null;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (property) return user[property];

    return store.state.user;
  }

  check(): boolean {
    return !!this.user();
  }

  private execSubscribers(): void {
    this.subscriberFunctionsOnAuth.forEach((func) => func());
  }
}
