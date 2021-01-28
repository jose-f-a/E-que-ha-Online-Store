import axios from "axios";
import jwt from "jsonwebtoken";

const state = {
    user: null,
    login: false,
    listaCompras: null,
    compraDialog: false,
    comprasVisiveis: null,
    paginas: null,
    loading: null,
    selectedCompra: null,
    showPerfil: true,
    showCompras: false,
    snackbar: false,
    timeout: 2000,
};

const getters = {
    getSnackbar: (state) => {
        return state.snackbar
    },
    getTimeout: (state) => {
        return state.timeout
    },
    getUser: (state) => {
        return state.user;
    },
    getShowPerfil: (state) => {

        return state.showPerfil
    },
    getShowCompras: (state) => {

        return state.showCompras
    },
    getLogin: (state) => {
        return state.login;
    },
    getListaCompras: (state) => {
        return state.listaCompras;
    },

    getCompraDialog: (state) => {
        return state.compraDialog;
    },
    getPaginas: (state) => {
        return state.paginas;
    },
    getComprasVisiveis: (state) => {
        return state.comprasVisiveis;
    },
    getLoading: (state) => {
        return state.loading;
    },
    getSelectedCompra: (state) => {
        return state.selectedCompra
    },
};

const actions = {
    verifySession({ commit }) {
        if (localStorage.getItem("token")) {
            const options = {
                method: "POST",
                url: "http://localhost:3342/api/sessionValidation",
                headers: { "Content-Type": "application/json" },
                data: {
                    token: localStorage.getItem("token"),
                },
            };
            return axios
                .request(options)
                .then((response) => {
                    if (!response.data.isadmin) {
                        commit("setLogin", true);
                        //commit("setUser", jwt.decode(localStorage.getItem("token")));
                    }
                })
                .catch((error) => {
                    commit("setLogin", false);
                    console.error(error);
                });
        } else {
            commit("setLogin", false);
        }
    },

    loadListCompras({ commit, state }, valor) {
        commit("setLoading", true)
        commit("setUser", jwt.decode(localStorage.getItem("token")))
        if (valor == 1) {
            const options = {
                method: "POST",
                url: "http://localhost:3342/api/getPendingCompras",
                headers: { "Content-Type": "application/json" },
                data: {
                    userid: state.user.userid,
                },
            };
            axios
                .request(options)
                .then((res) => {
                    commit("setListaCompras", res.data);
                    commit("setComprasVisiveis", 1)
                    commit("setLoading", false)
                })
                .catch((err) => {
                    console.log(err);
                });
        } else if (valor == 2) {
            const options = {
                method: "POST",
                url: "http://localhost:3342/api/getFinishedCompras",
                headers: { "Content-Type": "application/json" },
                data: {
                    userid: state.user.userid,
                },
            };
            axios
                .request(options)
                .then((res) => {
                    console.log(res)
                    commit("setListaCompras", res.data);
                    commit("setComprasVisiveis", 1)
                    commit("setLoading", false)
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            commit("setListaCompras", null);
        }
    },
};

const mutations = {
    setUser(state, val) {
        state.user = val;
    },
    setSnackbar: (state, val) => {
        state.snackbar = val
    },
    setTimeout: (state, val) => {
        state.timeout = val
    },
    setShowPerfil: (state, val) => {

        state.showPerfil = val
    },
    setShowCompras: (state, val) => {

        state.showCompras = val
    },
    setLoading: (state, val) => {
        state.loading = val;
    },
    setSelectedCompra: (state, val) => {
        state.selectedCompra = val
        console.log(val)
    },
    setLogin(state, val) {
        state.login = val;
        console.log('setou User')
        console.log(state.login);
        if (val) {
            state.user = jwt.decode(localStorage.getItem("token"));
        }
    },
    setListaCompras(state, val) {
        state.listaCompras = val;
    },
    setComprasVisiveis(state, pagina) {
        state.paginas = Math.ceil(state.listaCompras.length / 6)
        state.comprasVisiveis = state.listaCompras.slice((pagina - 1) * 6, pagina * 6)
    },
    setCompraDialog(state, val) {
        state.compraDialog = val;
    },
    changeCompraDialog(state) {

        state.compraDialog = !state.compraDialog;
    },
};

export default {
    getters,
    actions,
    mutations,
    state,
    namespaced: true,
};