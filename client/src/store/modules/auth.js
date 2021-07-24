/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import axios from 'axios';

const state = () => ({
  session: {
    apiUrl: 'http://localhost:3000/api/auth/',
    logged: false,
    token: '',
  },
});

const getters = {
  logged: ({ session }) => session.logged,
  token: ({ session }) => session.token,
};

const mutations = {
  setSession(state, { logged, token }) {
    state.session = { logged, token };
  },
};

const actions = {
  async login({ commit, state }, data) {
    try {
      const { token } = await axios.post(`${state.apiUrl}login`, data);

      commit('setSession', { logged: true, token });
    } catch (error) {
      console.log(error);
    }
  },

  async logout({ commit, state }) {
    try {
      await axios.post(`${state.apiUrl}logout`, {});

      commit('setSession', { logged: false, token: '' });
    } catch (error) {
      console.log(error);
    }
  },

  async register({ commit, state }, data) {
    try {
      const { token } = await axios.post(`${state.apiUrl}register`, data);

      commit('setState', { logged: true, token });
    } catch (error) {
      console.log(error);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
