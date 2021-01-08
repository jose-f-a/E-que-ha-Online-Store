//import axios from "axios";

const state = {
    listaArtigos: [{ produtoid: 1, nome: "EWQeqwe", quatidade: 3 }, { produtoid: 1, nome: "Weqw", quatidade: 3 }, { produtoid: 1, nome: "wqe", quatidade: 3 }, { produtoid: 1, nome: "eqwe", quatidade: 3 }],
};

const getters = {
    // getAll: (state) => state.data
    getAll: (state) => {
        return [state.openMenuLateral, state.login, state.loginDialog, state.signupDialog, state.openCarrinho]
    },
    getArtigos: (state) => {
        return state.listaArtigos
    },

};

const actions = {
    /*loadArtigos({ commit }) {
        //Verificar se tem login com o store da appbar
        //se sim ir buscar a bd e guardar no store
        //se não, ir ao local e guarar no store

        /* NÃO ME ESQUECER QUANDO FAÇO LOGIN CARREGAR O CARRINHO DA BD E ACRESCENTAR, CASO NÃO EXISTAM, OS ARTIGOS QUE ESTEJAM NA LOCAL STORE E APAGAR A LOCAL STORE */
    /*},*/
    /*alterarArtigo({ commit }, id, qtd) {
        //Verificar se tem login com o store da appbar
        //se sim alterar o artgigo no store e na bd
        //se não, alterar o artigo no store e guardar no localstore
    },*/
    removeUser: ({ commit }, uuid) => commit("remove", uuid),
};

const mutations = {

};

export default {
    getters,
    actions,
    mutations,
    state,
    namespaced: true,
};