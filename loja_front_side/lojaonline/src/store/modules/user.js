import axios from "axios";
import jwt from "jsonwebtoken";

const state = {
  user: null,
  login: null,
  listaCompras: null,
};

const getters = {
  getUser: (state) => {
    return state.user;
  },
  getLogin: (state) => {
    return state.login;
  },
  getListaComrpras: (state) => {
    return state.listaCompras;
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
      axios
        .request(options)
        .then((response) => {
          if (response.data.message) commit("setLogin", true);
        })
        .catch((error) => {
          commit("setLogin", false);
          console.error(error);
        });
    } else {
      commit("setLogin", false);
    }
  },

  loadListCompras({ commit }, valor) {
    if (valor == 1) {
      const options = {
        method: "POST",
        url: "http://localhost:3342/api/getPendingCompras",
        headers: { "Content-Type": "application/json" },
        data: {
          userid: user.userid,
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
          userid: user.userid,
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
    if (val) {
      state.user = jwt.decode(localStorage.getItem("token"));
    }
  },
  setListaCompras(state, val) {
    state.listaCompras = val;
  },
};

export default {
  getters,
  actions,
  mutations,
  state,
  namespaced: true,
};
