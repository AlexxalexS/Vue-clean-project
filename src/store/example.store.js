import {API_URL} from "@/boot/api";

const state = {
    // messages: [],
};

const getters = {};

const actions = {
    /*
    loadMessages({ commit }, data) {
        return new Promise((resolve, reject) => {
            API_URL.get(data)
                .then(response => {
                    commit("SET_MESSAGES", response.data.data);
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
     */
};

const mutations = {
    /*
        SET_MESSAGES(state, payload) {
            state.messages = payload;
        }
     */
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
