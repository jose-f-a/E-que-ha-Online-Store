import axios from "axios";
const jwt = require("jsonwebtoken");
const state = {
    listaArtigos: [],
    login: null,
    total: 0.0,
};

const getters = {
    getAll: (state) => {
        return [
            state.openMenuLateral,
            state.login,
            state.loginDialog,
            state.signupDialog,
            state.openCarrinho,
        ];
    },
    getArtigos: (state) => {
        return state.listaArtigos;
    },
    getTotal: (state) => {
        return state.total;
    },
};
const actions = {
    async loadArtigos({ commit, rootState }) {
        //Verificar se tem login com o store da appbar
        if (rootState.appbar.login) {
            //se sim ir buscar a bd e guardar no store
            //Verificar se tem no localstore artigos, comprar com a bd e adicionar os que falta
            const { userid } = jwt.decode(localStorage.getItem("token"));
            const options = {
                method: "GET",
                url: "http://localhost:3342/api/get-carrinho",
                params: { userid: userid },
            };

            await axios
                .request(options)
                .then(async function(response) {
                    //Colocar o que se tem no localstore e bd juntos
                    const local = JSON.parse(localStorage.getItem("carrinho"));
                    if (response.data.produtos.length > 0) {
                        var artigosAdd = response.data.produtos;
                        if (local && local.length > 0) {
                            local.forEach((localEl) => {
                                var notAdd = false;
                                response.data.produtos.forEach((dbEl) => {
                                    if (dbEl.produtoid === localEl.produtoid) {
                                        notAdd = true;
                                    }
                                });

                                if (!notAdd) {
                                    artigosAdd.push(localEl);
                                }
                            });

                            //Se adicionou algo do store, vai atualizar a db
                            const options2 = {
                                method: "POST",
                                url: "http://localhost:3342/api/set-carrinho",
                                headers: { "Content-Type": "application/json" },
                                data: {
                                    userid: 1,
                                    produtos: artigosAdd,
                                },
                            };

                            axios
                                .request(options2)
                                .then(function(response2) {
                                    console.log(response2.data);
                                })
                                .catch(function(error) {
                                    console.error(error);
                                });
                        }
                        commit("setListaArtigos", artigosAdd);
                    } else {
                        if (local) {
                            commit("setListaArtigos", local);
                        } else {
                            commit("setListaArtigos", []);
                        }
                    }
                    //Sempre que tiver login limpa o local
                    localStorage.removeItem("carrinho");

                    //localStorage.setItem('carrinho', JSON.stringify('[{"produtoid":18,"quantidade":8,"preco":"9","nome":"VÅGSJÖN-Cinza"},{"produtoid":19,"quantidade":8,"preco":"9","nome":"VÅGSJÖN-Roxo"},{"produtoid":16,"quantidade":13,"preco":"9","nome":"VÅGSJÖN-Branco"}]'));
                })
                .catch(function(error) {
                    console.error(error);
                });
        } else {
            //se não, ir ao local e guarar no store
            console.log("tou a ler o storgae");

            const artigos = JSON.parse(localStorage.getItem("carrinho"));
            console.log(artigos);
            commit("setListaArtigos", artigos);
        }
    },
    adicionarProduto({ rootState, state }, artigo) {
        //Adicionar o artigo na db e no store
        console.log(state.listaArtigos);
        if (state.listaArtigos && state.listaArtigos.length > 0) {
            var exist = false;
            state.listaArtigos.forEach((element) => {
                if (element.produtoid == artigo.produtoid) {
                    element.quantidade = artigo.quantidade;
                    exist = true;
                }
            });
            if (!exist) {
                state.listaArtigos.push(artigo);
            }
        } else {
            state.listaArtigos = [artigo];
        }

        if (rootState.appbar.login) {
            //se sim ir guarda na bd
            const options = {
                method: "POST",
                url: "http://localhost:3342/api/set-carrinho",
                headers: { "Content-Type": "application/json" },
                data: {
                    userid: 1,
                    produtos: state.listaArtigos,
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
        } else {
            //se não, guarda na local
            localStorage.setItem("carrinho", JSON.stringify(state.listaArtigos));
        }
    },
    removerDB() {
        localStorage.removeItem("carrinho");
        const { userid } = jwt.decode(localStorage.getItem("token"));
        const options = {
            method: "POST",
            url: "http://localhost:3342/api/set-carrinho",
            headers: { "Content-Type": "application/json" },
            data: {
                userid: userid,
                produtos: [],
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
    alterarMaisArtigo({ commit, state, rootState }, id) {
        //Alterar artigo no store
        commit("alterarMaisQuantidade", id);

        if (rootState.appbar.login) {
            //se sim ir guarda na bd
            const options = {
                method: "POST",
                url: "http://localhost:3342/api/set-carrinho",
                headers: { "Content-Type": "application/json" },
                data: {
                    userid: 1,
                    produtos: state.listaArtigos,
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
        } else {
            //se não, guarda na local
            localStorage.setItem("carrinho", JSON.stringify(state.listaArtigos));
        }
        //Verificar se tem login com o store da appbar
        //se sim alterar o artgigo no store e na bd
        //se não, alterar o artigo no store e guardar no localstore
    },
    alterarMenosArtigo({ commit, state, rootState }, id) {
        //Alterar artigo no store
        commit("alterarMenosQuantidade", id);

        if (rootState.appbar.login) {
            //se sim ir guarda na bd
            const options = {
                method: "POST",
                url: "http://localhost:3342/api/set-carrinho",
                headers: { "Content-Type": "application/json" },
                data: {
                    userid: 1,
                    produtos: state.listaArtigos,
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
        } else {
            //se não, guarda na local
            localStorage.setItem("carrinho", JSON.stringify(state.listaArtigos));
        }
    },
    totalCompra({ state }) {
        setTimeout(function() {
            state.total = 0;
            state.listaArtigos.forEach((artigo) => {
                state.total += artigo.quantidade * artigo.preco;
            });
        }, 1000);
    },
};

const mutations = {
    setListaArtigos(state, artigos) {
        state.listaArtigos = artigos;
    },
    alterarMenosQuantidade(state, id) {
        var position = 0;
        var elRemove = -1;

        state.listaArtigos.forEach((element) => {
            if (element.produtoid == id) {
                element.quantidade = element.quantidade - 1;
                //se a quantidade for 0 remove do carrinho
                if (element.quantidade == 0) {
                    elRemove = position;
                }
                state.total = state.total - element.preco;
            }
            position++;
        });

        if (elRemove > -1) {
            state.listaArtigos.splice(elRemove, 1);
        }
    },
    alterarMaisQuantidade(state, id) {
        state.total = 0;
        state.listaArtigos.forEach((element) => {
            if (element.produtoid == id) {
                element.quantidade = element.quantidade + 1;
                //se a quantidade for 0 remove do carrinho
            }
            state.total += element.quantidade * element.preco;
        });
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