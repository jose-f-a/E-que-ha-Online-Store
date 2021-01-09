//import axios from "axios";

const state = {
    listaArtigos: [],
};

const getters = {
    // getAll: (state) => state.data
    getAll: (state) => {
        return [state.openMenuLateral, state.login, state.loginDialog, state.signupDialog, state.openCarrinho]
    },
    getArtigos: (state) => {
        console.log('asdasd')
        return state.listaArtigos
    },

};

const actions = {
    loadArtigos({ commit }) {
        commit('setListaArtigos')
            //Verificar se tem login com o store da appbar
            //se sim ir buscar a bd e guardar no store
            //se não, ir ao local e guarar no store

        /* NÃO ME ESQUECER QUANDO FAÇO LOGIN CARREGAR O CARRINHO DA BD E ACRESCENTAR, CASO NÃO EXISTAM, OS ARTIGOS QUE ESTEJAM NA LOCAL STORE E APAGAR A LOCAL STORE */
    },
    alterarMaisArtigo({ commit }, id) {
        //Alterar artigo no store
        commit('alterarMaisQuantidade', id)


        //Verificar se tem login com o store da appbar
        //se sim alterar o artgigo no store e na bd
        //se não, alterar o artigo no store e guardar no localstore
    },
    alterarMenosArtigo({ commit }, id) {
        //Alterar artigo no store
        commit('alterarMenosQuantidade', id)


        //Verificar se tem login com o store da appbar
        //se sim alterar o artgigo no store e na bd
        //se não, alterar o artigo no store e guardar no localstore
    },
    removeUser: ({ commit }, uuid) => commit("remove", uuid),
};

const mutations = {
    setListaArtigos(state) {
        state.listaArtigos = [{ produtoid: 1, nome: "EWQeqwe", quantidade: 3, preco: 10.0 }, { produtoid: 2, nome: "Weqw", quantidade: 3, preco: 10.0 }, { produtoid: 3, nome: "wqe", quantidade: 3, preco: 10.0 }, { produtoid: 4, nome: "eqwe", quantidade: 3, preco: 10.0 }]
    },
    alterarMenosQuantidade(state, id) {

        var position = 0;

        state.listaArtigos.forEach(element => {
            position++
            if (element.produtoid == id) {
                element.quantidade = element.quantidade - 1
                    //se a quantidade for 0 remove do carrinho
                if (element.quantidade == 0) {
                    state.listaArtigos.splice(element, position)
                }
            }
            position++
        });

    },
    alterarMaisQuantidade(state, id) {

        state.listaArtigos.forEach(element => {

            if (element.produtoid == id) {
                element.quantidade = element.quantidade + 1
                    //se a quantidade for 0 remove do carrinho   
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