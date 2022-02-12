import { createStore } from "vuex";

export default createStore({
  state: {
    isAuth: false,
    authToken: null,
  },
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
