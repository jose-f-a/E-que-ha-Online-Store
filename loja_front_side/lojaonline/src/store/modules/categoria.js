import axios from "axios";

const state = {
  listaArtigos: null,
  artigosVisiveis: null,
  paginas: null,
  loading: null,
};

const getters = {
  getListaArtigos: (state) => {
    return state.listaArtigos;
  },
  getPaginas: (state) => {
    return state.paginas;
  },
  getArigosVisiveis: (state) => {
    return state.artigosVisiveis;
  },
  getLoading: (state) => {
    return state.loading;
  },
};

const actions = {
  loadListArtigos({ commit }, id) {
    //commit("setLoading", true)
    const options = {
      method: "GET",
      url: "http://localhost:3342/api/get-artigos-categoria",
      params: { id: id },
    };

    axios
      .request(options)
      .then(function(res) {
        console.log(res.data);
        if (res.data.mensagem) {
          commit("setListaArtigos", []);
          commit("setArtigosVisiveis", 1);
        } else {
          commit("setListaArtigos", res.data);
          commit("setArtigosVisiveis", 1);
        }
      })
      .catch(function(error) {
        console.error(error);
      });
  },
};

const mutations = {
  setListaArtigos(state, val) {
    state.listaArtigos = val;
  },
  setArtigosVisiveis(state, pagina) {
    state.paginas = Math.ceil(state.listaArtigos.length / 12);
    state.artigosVisiveis = state.listaArtigos.slice(
      (pagina - 1) * 12,
      pagina * 12
    );
  },
};

export default {
  getters,
  actions,
  mutations,
  state,
  namespaced: true,
};
