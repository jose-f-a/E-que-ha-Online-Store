import axios from "axios";

const state = {
    artigos: [],
    artigosMelhorAvaliados: [],
    artigosTrending: [],
    artigosSugeridos: [],
};

const getters = {
    getArtigos: (state) => {
        return state.artigos;
    },
    getArtigosMelhorAvaliados: (state) => {
        return state.artigosMelhorAvaliados;
    },
    getArtigosTrending: (state) => {
        return state.artigosTrending;
    },
    getArtigosSugeridos: (state) => {
        return state.artigosSugeridos;
    },
};

const actions = {
    loadArtigos({ commit }) {
        const options = {
            method: "GET",
            url: "http://localhost:3342/api/getArtigo",
            headers: { "Content-Type": "application/json" },
        };

        axios
            .request(options)
            .then((res) => {
                commit("setArtigos", res.data);
                console.log(res);
            })
            .catch((err) => console.log(err));
    },
    loadArtigosMelhorClassificados({ commit }) {

        const options = {
            method: "GET",
            url: "http://localhost:3342/api/getArtigosMelhorRating",
        };

        axios
            .request(options)
            .then((res) => {


                commit("setArtigosMelhorAvaliados", res.data);
            })
            .catch((err) => console.log(err));
    },
    loadArtigosTrending({ commit }) {
        const options = {
            method: "GET",
            url: "http://localhost:3342/api/getArtigo",
            headers: { "Content-Type": "application/json" },
        };

        axios
            .request(options)
            .then((res) => {
                const arr = res.data;
                // Shuffle array
                const shuffled = arr.sort(() => 0.5 - Math.random());
                // Get sub-array of first n elements after shuffled
                let selected = shuffled.slice(0, 10);

                commit("setArtigosTrending", selected);
            })
            .catch((err) => console.log(err));
    },
    loadArtigosSugeridos({ commit }) {
        const options = {
            method: "GET",
            url: "http://localhost:3342/api/getArtigo",
            headers: { "Content-Type": "application/json" },
        };

        axios
            .request(options)
            .then((res) => {
                const arr = res.data;
                // Shuffle array
                const shuffled = arr.sort(() => 0.5 - Math.random());
                // Get sub-array of first n elements after shuffled
                let selected = shuffled.slice(0, 10);

                commit("setArtigosSugeridos", selected);
            })
            .catch((err) => console.log(err));
    },
};

const mutations = {
    setArtigos(state, val) {
        state.artigos = val;
    },
    setArtigosMelhorAvaliados(state, val) {
        state.artigosMelhorAvaliados = val;
    },
    setArtigosTrending(state, val) {
        state.artigosTrending = val;
    },
    setArtigosSugeridos(state, val) {
        state.artigosSugeridos = val;
    },
};

export default {
    getters,
    actions,
    mutations,
    state,
    namespaced: true,
};