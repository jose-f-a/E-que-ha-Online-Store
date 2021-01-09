import axios from "axios";
const jwt = require('jsonwebtoken');
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
            //Verificar se tem no localstore artigos, comprar com a bd e adicionar os que falta

            /* ISTO AQUI VAI SE MUDAR PARA O ID DO STORE*/
            const { userid } = jwt.decode(localStorage.getItem('token'))
                /* -------------------------------------------- */

            const options = {
                method: 'GET',
                url: 'http://localhost:3342/api/get-carrinho',
                params: { userid: userid }
            };

            axios.request(options).then(function(response) {

                //Colocar o que se tem no localstore e bd juntos
                const local = JSON.parse(localStorage.getItem('carrinho'))
                if (response.data.produtos.length > 0) {
                    var artigosAdd = response.data.produtos
                    if (local && local.length > 0) {
                        local.forEach(localEl => {
                            var notAdd = false;
                            response.data.produtos.forEach(dbEl => {
                                if (dbEl.produtoid === localEl.produtoid) {
                                    notAdd = true
                                }
                            });

                            if (!notAdd) {
                                artigosAdd.push(localEl)
                            }
                        });
                    }
                    commit('setListaArtigos', artigosAdd)

                } else {
                    commit('setListaArtigos', JSON.stringify())
                }
                //Sempre que tiver login limpa o local
                //localStorage.removeItem('carrinho');
                console.log(response.data.produtos)
                    //localStorage.setItem('carrinho', JSON.stringify('[{"produtoid":18,"quantidade":8,"preco":"9","nome":"VÅGSJÖN-Cinza"},{"produtoid":19,"quantidade":8,"preco":"9","nome":"VÅGSJÖN-Roxo"},{"produtoid":16,"quantidade":13,"preco":"9","nome":"VÅGSJÖN-Branco"}]'));

            }).catch(function(error) {
                console.error(error);
            });

        } else {
            //se não, ir ao local e guarar no store
            console.log('tou a ler o storgae')

            const artigos = JSON.parse(localStorage.getItem('carrinho'))
            console.log(artigos)
            commit('setListaArtigos', artigos)


        }


        /* NÃO ME ESQUECER QUANDO FAÇO LOGIN CARREGAR O CARRINHO DA BD E ACRESCENTAR, CASO NÃO EXISTAM, OS ARTIGOS QUE ESTEJAM NA LOCAL STORE E APAGAR A LOCAL STORE */
    },
    removerDB() {
        console.log('eee')
        const options = {
            method: 'POST',
            url: 'http://localhost:3342/api/set-carrinho',
            headers: { 'Content-Type': 'application/json' },
            data: {
                userid: 1,
                produtos: []
            }
        };

        axios.request(options).then(function(response) {
            console.log(response.data);
        }).catch(function(error) {
            console.error(error);
        });

    },
    alterarMaisArtigo({ commit, state, rootState }, id) {
        //Alterar artigo no store
        commit('alterarMaisQuantidade', id)

        if (rootState.appbar.login) {
            //se sim ir guarda na bd
            const options = {
                method: 'POST',
                url: 'http://localhost:3342/api/set-carrinho',
                headers: { 'Content-Type': 'application/json' },
                data: {
                    userid: 1,
                    produtos: state.listaArtigos
                }
            };

            axios.request(options).then(function(response) {
                console.log(response.data);
            }).catch(function(error) {
                console.error(error);
            });

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
            const options = {
                method: 'POST',
                url: 'http://localhost:3342/api/set-carrinho',
                headers: { 'Content-Type': 'application/json' },
                data: {
                    userid: 1,
                    produtos: state.listaArtigos
                }
            };

            axios.request(options).then(function(response) {
                console.log(response.data);
            }).catch(function(error) {
                console.error(error);
            });

        } else {
            //se não, guarda na local
            localStorage.setItem('carrinho', JSON.stringify(state.listaArtigos));

        }
    },
};

const mutations = {
    setListaArtigos(state, artigos) {
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