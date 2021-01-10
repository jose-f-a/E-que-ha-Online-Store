import axios from "axios";

const state = {
    step: 1,
    artigos: [{ produtoid: 16, quantidade: 4, preco: 9, nome: 'VÅGSJÖN' },
        { produtoid: 17, quantidade: 4, preco: 9, nome: 'VÅGSJÖN' },
        { produtoid: 18, quantidade: 4, preco: 9, nome: 'VÅGSJÖN' },
        { produtoid: 19, quantidade: 4, preco: 9, nome: 'VÅGSJÖN' }
    ],
    moradas: [],
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
    getMorada: (state) => {
        return state.morada
    },
    getMoradas: (state) => {
        return state.moradas
    },
    getMetodoPagamento: (state) => {
        return state.pagamento
    }

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
    },
    getMoradasDB({ commit }) {
        console.log('dsadsad')
        const options = {
            method: 'GET',
            url: 'http://localhost:3342/api/get-user-morada',
            params: { userid: '1' }
        };

        axios.request(options).then(function(response) {
            if (response.data.length > 1) {
                commit('setMoradas', response.data)
            } else {
                commit('setMoradas', [response.data])
            }
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
    setMenosQuantidade(state, id) {
        var position = 0;
        var elRemove = -1;

        state.artigos.forEach(element => {
            if (element.produtoid == id) {
                element.quantidade = element.quantidade - 1
                    //se a quantidade for 0 remove do carrinho

                if (element.quantidade == 0) {

                    elRemove = position

                }
            }
            position++
        });

        if (elRemove > -1) {

            state.artigos.splice(elRemove, 1)
        }
    },
    setMorada(state, val) {

        state.morada = val
    },
    setMoradas(state, val) {
        state.moradas = val
    },
    setMetodoPagamento(state, val) {
        state.pagamento = val
    }
};

export default {
    getters,
    actions,
    mutations,
    state,
    namespaced: true,
};