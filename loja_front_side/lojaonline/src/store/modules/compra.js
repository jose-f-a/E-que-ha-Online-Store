import axios from "axios";

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
    updateDadosArtigos({ commit, state }) {
        console.log('dentro')

        const options = {
            method: 'POST',
            url: 'http://localhost:3342/api/get-artigos-actuais',
            headers: { 'Content-Type': 'application/json' },
            data: {
                artigos: state.artigos
            }
        };

        axios.request(options).then(function(response) {
            console.log(response.data)
            commit('setArtigos', response.data)
        }).catch(function(error) {
            console.error(error);
        });
    }
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