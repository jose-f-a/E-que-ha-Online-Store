import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import appbar from "./modules/appbar";
import carrinho from "./modules/carrinho";
import compra from "./modules/compra";
import user from "./modules/user";
import admin from "./modules/admin";
import pesquisa from "./modules/pesquisa";
import categoria from "./modules/categoria";
import homepage from "./modules/homepage";

export default new Vuex.Store({
  modules: {
    appbar,
    carrinho,
    compra,
    user,
    admin,
    pesquisa,
    categoria,
    homepage,
  },
});
