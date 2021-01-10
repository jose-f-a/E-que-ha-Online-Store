//import axios from "axios";

const state = {
    step: 1,
    artigos: [],
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

};

const actions = {

};

const mutations = {
    setStep(state, val) {
        state.step = val
    },

};

export default {
    getters,
    actions,
    mutations,
    state,
    namespaced: true,
};