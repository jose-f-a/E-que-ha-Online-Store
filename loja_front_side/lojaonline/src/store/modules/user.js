import axios from "axios";
import jwt from "jsonwebtoken";

const state = {
  user: null,
  login: null,
  listaCompras: null,
  compraDialog: false,
};

const getters = {
  getUser: (state) => {
    return state.user;
  },
  getLogin: (state) => {
    return state.login;
  },
  getListaCompras: (state) => {
    return state.listaCompras;
  },
  getCompraDialog: (state) => {
    return state.compraDialog;
  },
};

const actions = {
  verifySession({ commit }) {
    if (localStorage.getItem("token")) {
      const options = {
        method: "POST",
        url: "http://localhost:3342/api/sessionValidation",
        headers: { "Content-Type": "application/json" },
        data: {
          token: localStorage.getItem("token"),
        },
      };
      return axios
        .request(options)
        .then((response) => {
          if (response.data.message) {
            console.log("verificar session");
            commit("setLogin", true);
            // commit("setUser", jwt.decode(localStorage.getItem("token")));
          }
        })
        .catch((error) => {
          commit("setLogin", false);
          console.error(error);
        });
    } else {
      commit("setLogin", false);
    }
  },

  loadListCompras({ commit, state }, valor) {
    console.log("aaaaa");
    if (valor == 1) {
      const options = {
        method: "POST",
        url: "http://localhost:3342/api/getPendingCompras",
        headers: { "Content-Type": "application/json" },
        data: {
          userid: state.user.userid,
        },
      };
      axios
        .request(options)
        .then((res) => {
          console.log(res.data);
          commit("setListaCompras", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (valor == 2) {
      const options = {
        method: "POST",
        url: "http://localhost:3342/api/getFinishedCompras",
        headers: { "Content-Type": "application/json" },
        data: {
          userid: state.user.userid,
        },
      };
      axios
        .request(options)
        .then((res) => {
          console.log(res.data);
          commit("setListaCompras", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      commit("setListaCompras", null);
    }
  },
};

const mutations = {
  setUser(state, val) {
    state.user = val;
  },
  setLogin(state, val) {
    state.login = val;
    console.log(state.login);
    if (val) {
      state.user = jwt.decode(localStorage.getItem("token"));
    }
  },
  setListaCompras(state, val) {
    state.listaCompras = val;
  },
  setCompraDialog(state, val) {
    state.compraDialog = val;
  },
  changeCompraDialog(state) {
    state.compraDialog = !state.compraDialog;
  },
};

export default {
  getters,
  actions,
  mutations,
  state,
  namespaced: true,
};
