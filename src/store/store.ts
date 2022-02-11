import { createStore } from "vuex";

export default createStore({
  state: {
    isAuth: false,
    user: {
      name: "CookaaUser"
    },
  },
  getters: {
    getUser(state) {
      return state.isAuth ? state.user : {name: "CookaGuest"};
    },
  },
  mutations: {
    logOut(state) {
      state.isAuth = false;
    },
    logIn(state) {
      state.isAuth = true;
    },
    signUp(state) {
      state.isAuth = true;
    },
  },
  actions: {},
});
