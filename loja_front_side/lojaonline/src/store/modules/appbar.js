import axios from "axios";
import jwt from 'jsonwebtoken';

const state = {
    openMenuLateral: false,
    login: false,
    loginDialog: null,
    signupDialog: null,
    openCarrinho: false,
    user: null,
};

const getters = {
    // getAll: (state) => state.data
    getAll: (state) => {
        return [state.openMenuLateral, state.login, state.loginDialog, state.signupDialog, state.openCarrinho]
    },
    getLogin: (state) => {
        return state.login
    },
    getLoginDialog: (state) => {
        return state.loginDialog
    },
    getSignupDialog: (state) => {
        return state.signupDialog
    },
    getOpenCarrinho: (state) => {
        return state.openCarrinho
    },
    getOpenMenuLateral: (state) => {
        return state.openMenuLateral
    },
    getUser: (state) => { 
        return state.user;
    }
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
            axios
                .request(options)
                .then(response => {
                    if (response.data.message)
                        commit('setLogin', true);
                })
                .catch(error => {
                    commit('setLogin', false)
                    console.error(error);
                });
        } else {
            commit('setLogin', false)
        }
    },
    removeUser: ({ commit }, uuid) => commit("remove", uuid),
};

const mutations = {
    setLogin(state, val) {
        state.login = val;
        if (val) {
            state.user = jwt.decode(localStorage.getItem("token"));
        }
    },
    setOpenCarrinho(state, val) {
        state.openCarrinho = val
    },
    changeOpenCarrinho(state) {
        state.openCarrinho = !state.openCarrinho
    },
    setOpenMenuLateral(state, val) {
        state.openMenuLateral = val
    },
    changeOpenMenuLateral(state) {
        state.openMenuLateral = !state.openMenuLateral
    },
    setShowLoginDialog(state, val) {
        state.loginDialog = val
    },
    changeShowLoginDialog(state) {
        state.loginDialog = !state.loginDialog;
    },
    setShowSignupDialog(state, val) {
        state.signupDialog = val;
    },
    changeShowSignupDialog(state) {
        state.signupDialog = !state.signupDialog;
    },
};

export default {
    getters,
    actions,
    mutations,
    state,
    namespaced: true,
};