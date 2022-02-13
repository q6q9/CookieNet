import { createStore } from "vuex";
import type { IState } from "@/store/IState";

const state: IState = {
  isAuth: false,
  authToken: null,
};

export default createStore({
  state: state,
  getters: {},
  mutations: {
    setAuthToken(state, token) {
      state.authToken = token;
      state.isAuth = true;
    },
    logOut(state) {
      state.isAuth = false;
      state.authToken = null;
    },
  },
  actions: {},
});
