import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export const BASE_URL = "*/";

export const API_URL = BASE_URL + "api/";

const API = axios.create({
    withCredentials: false,
    baseURL: API_URL
});

// if troubles with headers

// API.defaults.headers.common["Accept"] = "application/json";
// API.defaults.headers.common["Content-Type"] = "application/json";

// axios interceptors
/*
API.interceptors.request.use(
    config => {
        const tokenSupport = localStorage.getItem("support-token");
        if (tokenSupport) {
            config.headers.common["Authorization"] = "Bearer " + tokenSupport;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

API.interceptors.response.use(
    response => {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        if (error.response.status === 401) {
            store.commit("oauth/AUTH_LOGOUT");
        }
        if (error.response.status === 403) {
            store.commit("oauth/REDIRECT");
        }
        if (error.response.status >= 400 && error.response.status < 600) {
            return Promise.reject(error.response);
        }
    }
);
 */


export default API;
