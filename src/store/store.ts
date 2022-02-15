import { createStore } from "vuex";
import type { User } from "@/models/User";

export default createStore({
  state: {
    user: null as User | null,
  },
  getters: {},
  mutations: {
    setUser(state, user: User | null) {
      state.user = user;
    },
  },
  actions: {},
});
