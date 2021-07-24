/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import axios from 'axios';

const state = () => ({
  apiUrl: 'http://localhost:3000/api/category',
  categories: [],
});

const mutations = {
  setCategories(state, categories) {
    state.categories = categories;
  },

  addCategory(state, category) {
    state.categories.push(category);
  },

  updateCategory(state, category) {
    state.categories.splice(
      state.categories.findIndex(({ id }) => id === category.id),
      1,
      category,
    );
  },

  deleteCategory(state, id) {
    state.categories.splice(
      state.categories.findIndex((c) => c.id === id),
      1,
    );
  },
};

const actions = {
  async getCategories({ commit, state }) {
    try {
      const categories = await axios.get(state.apiUrl);

      commit('setCategories', categories);
    } catch (error) {
      console.log(error);
    }
  },

  async getCategory({ commit, state }, categoryId) {
    try {
      const category = await axios.get(`${state.apiUrl}/${categoryId}`);

      commit('addCategory', [category]);
    } catch (error) {
      console.log(error);
    }
  },

  async addCategory({ commit, state }, category) {
    try {
      const addedCategory = await axios.post(state.apiUrl, category);

      commit('addCategory', addedCategory);
    } catch (error) {
      console.log(error);
    }
  },

  async updateCategory({ commit, state }, { id, ...category }) {
    try {
      await axios.put(`${state.apiUrl}/${id}`, category);

      commit('updateCategory', { id, ...category });
    } catch (error) {
      console.log(error);
    }
  },

  async deleteCategory({ commit, state }, categoryId) {
    try {
      await axios.delete(`${state.apiUrl}/${categoryId}`);

      commit('deleteCategory', categoryId);
    } catch (error) {
      console.log(error);
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
