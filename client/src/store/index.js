import Vue from 'vue';
import Vuex from 'vuex';

import home from './modules/home';
import category from './modules/category';
import post from './modules/post';
import auth from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    home,
    auth,
    category,
    post,
  },
});
