//import axios from "axios";

const state = {
    listaArtigos: [],
    login: null
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
    loadArtigos({ commit, rootState }) {

        //Verificar se tem login com o store da appbar

        if (rootState.appbar.login) {
            //se sim ir buscar a bd e guardar no store

        } else {
            //se não, ir ao local e guarar no store
            const artigos = JSON.parse(localStorage.getItem('carrinho'))
            console.log(artigos)
            commit('setListaArtigos', artigos)
                //localStorage.setItem('carrinho', JSON.stringify(state.listaArtigos));

        }


        /* NÃO ME ESQUECER QUANDO FAÇO LOGIN CARREGAR O CARRINHO DA BD E ACRESCENTAR, CASO NÃO EXISTAM, OS ARTIGOS QUE ESTEJAM NA LOCAL STORE E APAGAR A LOCAL STORE */
    },
    alterarMaisArtigo({ commit, state, rootState }, id) {
        //Alterar artigo no store
        commit('alterarMaisQuantidade', id)

        if (rootState.appbar.login) {
            //se sim ir guarda na bd

        } else {
            //se não, guarda na local
            localStorage.setItem('carrinho', JSON.stringify(state.listaArtigos));

        }
        //Verificar se tem login com o store da appbar
        //se sim alterar o artgigo no store e na bd
        //se não, alterar o artigo no store e guardar no localstore
    },
    alterarMenosArtigo({ commit, state, rootState }, id) {
        //Alterar artigo no store
        commit('alterarMenosQuantidade', id)

        if (rootState.appbar.login) {
            //se sim ir guarda na bd

        } else {
            //se não, guarda na local
            localStorage.setItem('carrinho', JSON.stringify(state.listaArtigos));

        }
    },
};

const mutations = {
    setListaArtigos(state, artigos) {
        console.log(artigos)
        state.listaArtigos = artigos
    },
    alterarMenosQuantidade(state, id) {

        var position = 0;
        var elRemove = -1;
        state.listaArtigos.forEach(element => {
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

            state.listaArtigos.splice(elRemove, 1)
        }

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