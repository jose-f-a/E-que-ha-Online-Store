import axios from "axios";
import jwt from "jsonwebtoken";

const state = {
    login: false,
    loginDialog: true,
};

const getters = {
    // getAll: (state) => state.data
    getAll: (state) => {
        return [
            state.openMenuLateral,
            state.login,
            state.loginDialog,
            state.signupDialog,
            state.openCarrinho,
        ];
    },
    getLogin: (state) => {
        return state.login;
    },
    getLoginDialog: (state) => {
        return state.loginDialog;
    },

};

const actions = {
    verifySession({ commit }) {
        if (localStorage.getItem("tokenAdmin")) {
            const options = {
                method: "POST",
                url: "http://localhost:3342/api/sessionValidation",
                headers: { "Content-Type": "application/json" },
                data: {
                    token: localStorage.getItem("tokenAdmin"),
                },
            };
            axios
                .request(options)
                .then((response) => {
                    if (response.data.isadmin) {
                        commit("setLogin", true)
                        commit('setShowLoginDialog', false)
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
};

const mutations = {
    setLogin(state, val) {
        state.login = val;
        if (val) {
            state.user = jwt.decode(localStorage.getItem("token"));
        }
    },
    setShowLoginDialog(state, val) {
        state.loginDialog = val;
    },
    changeShowLoginDialog(state) {
        state.loginDialog = !state.loginDialog;
    },
};

export default {
    getters,
    actions,
    mutations,
    state,
    namespaced: true,
};