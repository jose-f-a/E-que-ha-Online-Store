import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import appbar from "./modules/appbar";
import user from "./modules/user";

export default new Vuex.Store({
  modules: {
    appbar,
    user,
  },
});
