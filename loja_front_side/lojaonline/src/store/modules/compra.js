import axios from "axios";
const jwt = require("jsonwebtoken");

const state = {
  step: 1,
  artigos: [],
  moradas: [],
  isCompra: false,
  morada: null,
  pagamento: null,
  loading: null,
  total: 0.0,
};

const getters = {
  // getAll: (state) => state.data
  getAll: (state) => {
    return [
      state.openMenuLateral,
      state.login,
      state.loginDialog,
      state.signupDialog,
      state.openCarrinho,
    ];
  },
  getStep: (state) => {
    return state.step;
  },
  getisCompra: (state) => {
    return state.isCompra;
  },
  getArtigos: (state) => {
    return state.artigos;
  },
  getMorada: (state) => {
    return state.morada;
  },
  getMoradas: (state) => {
    return state.moradas;
  },
  getMetodoPagamento: (state) => {
    return state.pagamento;
  },
  getLoading: (state) => {
    return state.loading;
  },
  getTotal: (state) => {
    return state.total;
  },
};

const actions = {
  getArtigosDoCarrinho({ commit, rootState }) {
    commit("setCompra", true);
    commit("setLoading", true);

    setTimeout(function() {
      commit("setArtigos", rootState.carrinho.listaArtigos);
      commit("setLoading", false);
    }, 3000);
  },

  updateDadosArtigos({ commit, state }) {
    console.log("dentro");
    const options = {
      method: "POST",
      url: "http://localhost:3342/api/get-artigos-actuais",
      headers: { "Content-Type": "application/json" },
      data: {
        artigos: state.artigos,
      },
    };

    axios
      .request(options)
      .then(function(response) {
        console.log(response.data);
        commit("setArtigos", response.data);
      })
      .catch(function(error) {
        console.error(error);
      });
  },

  getMoradasDB({ commit }) {
    const options = {
      method: "GET",
      url: "http://localhost:3342/api/get-user-morada",
      params: { userid: "1" },
    };

    axios
      .request(options)
      .then(function(response) {
        if (response.data.length > 1) {
          commit("setMoradas", response.data);
        } else {
          commit("setMoradas", [response.data]);
        }
      })
      .catch(function(error) {
        console.error(error);
      });
  },

  criarCompra({ state }) {
    const { userid } = jwt.decode(localStorage.getItem("token"));

    const options = {
      method: "POST",
      url: "http://localhost:3342/api/comprar",
      headers: { "Content-Type": "application/json" },
      data: {
        userid: userid,
        moradaid: state.morada.moradaid,
        pagamentoid: state.pagamento,
        artigos: state.artigos,
      },
    };

    axios
      .request(options)
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.error(error);
      });
  },
};

const mutations = {
  setCompra(state, val) {
    state.isCompra = val;
  },
  setStep(state, val) {
    state.step = val;
  },
  setArtigos(state, val) {
    state.artigos = val;
    state.total = 0;
    state.artigos.forEach((artigo) => {
      state.total += +(artigo.quantidade * artigo.preco).toFixed(2);
    });
  },
  setMaisQuantidade(state, val) {
    state.total = 0;

    state.artigos.forEach((artigo) => {
      if (artigo.produtoid == val) {
        artigo.quantidade = artigo.quantidade + 1;
      }
      state.total += +(artigo.quantidade * artigo.preco).toFixed(2);
    });
    state.total = state.total.toFixed(2);
  },
  setMenosQuantidade(state, id) {
    var position = 0;
    var elRemove = -1;
    state.total = 0;
    state.artigos.forEach((artigo) => {
      if (artigo.produtoid == id) {
        artigo.quantidade = artigo.quantidade - 1;
        //se a quantidade for 0 remove do carrinho

        if (artigo.quantidade == 0) {
          elRemove = position;
        }
      }
      state.total += +(artigo.quantidade * artigo.preco).toFixed(2);
      position++;
    });

    if (elRemove > -1) {
      state.artigos.splice(elRemove, 1);
    }
    state.total = state.total.toFixed(2);
  },
  setMorada(state, val) {
    state.morada = val;
  },
  setMoradas(state, val) {
    state.moradas = val;
  },
  setMetodoPagamento(state, val) {
    state.pagamento = val;
  },
  setLoading: (state, val) => {
    state.loading = val;
  },
  setTotal: (state, val) => {
    state.total = val;
  },
};

export default {
  getters,
  actions,
  mutations,
  state,
  namespaced: true,
};
