//import axios from "axios";

const state = {
    step: 1,
    artigos: [{ produtoid: 16, quantidade: 4, preco: 9, nome: 'VÅGSJÖN' },
        { produtoid: 17, quantidade: 4, preco: 9, nome: 'VÅGSJÖN' },
        { produtoid: 18, quantidade: 4, preco: 9, nome: 'VÅGSJÖN' },
        { produtoid: 19, quantidade: 4, preco: 9, nome: 'VÅGSJÖN' }
    ],
    morada: null,
    pagamento: null,
};

const getters = {
    // getAll: (state) => state.data
    getAll: (state) => {
        return [state.openMenuLateral, state.login, state.loginDialog, state.signupDialog, state.openCarrinho]
    },
    getStep: (state) => {
        return state.step
    },
    getArtigos: (state) => {
        return state.artigos
    },

};

const actions = {

};

const mutations = {
    setStep(state, val) {
        state.step = val
    },
    setArtigos(state, val) {
        state.artigos = val
    },
    setMaisQuantidade(state, val) {
        state.artigos.forEach(artigo => {
            if (artigo.produtoid == val) {
                artigo.quantidade = artigo.quantidade + 1
            }
        });
    },
    setMenosQuantidade(state, val) {
        state.artigos.forEach(artigo => {
            if (artigo.produtoid == val) {
                artigo.quantidade = artigo.quantidade - 1
            }
        });
    }

};

export default {
    getters,
    actions,
    mutations,
    state,
    namespaced: true,
};