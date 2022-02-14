import { createStore } from "vuex";
import type { User } from "@/models/User";

export default createStore({
  state: {
    user: {} as User | null,
  },
  getters: {},
  mutations: {
    logOut(state) {
      state.user = null;
    },
    setUser(state, user: User) {
      state.user = user;
    },
  },
  actions: {},
});
