import axios from "axios";

const state = {
  artigos: [],
};

const getters = {
  getArtigos: (state) => {
    return state.artigos;
  },
};

const actions = {
  //
};

const mutations = {
  setArtigos(state, val) {
    state.artigos = val;
  },
};

export default {
  getters,
  actions,
  mutations,
  state,
  namespaced: true,
};
