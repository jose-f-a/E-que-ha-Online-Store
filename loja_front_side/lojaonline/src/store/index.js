import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import appbar from "./modules/appbar";
import carrinho from "./modules/carrinho"
export default new Vuex.Store({
    modules: {
        appbar,
        carrinho
    },
});