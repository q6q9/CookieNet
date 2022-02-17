import { createStore } from "vuex";
import type { SelfUser } from "@/models/SelfUser";

export default createStore({
  state: {
    user: null as SelfUser | null,
  },
  getters: {},
  mutations: {
    setUser(state, user: SelfUser | null) {
      state.user = user;
    },
  },
  actions: {},
});
