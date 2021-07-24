/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import axios from 'axios';

const state = () => ({
  apiUrl: 'http://localhost:3000/api/',
  categories: [],
  posts: [],
});

const mutations = {
  setCategories(state, categories) {
    state.categories = categories;
  },

  setPosts(state, posts) {
    state.posts = posts;
  },

  addPost(state, post) {
    state.posts.push(post);
  },
};

const actions = {
  async getCategories({ commit, state }) {
    try {
      const categories = await axios.get(`${state.apiUrl}category`);

      commit('setCategories', categories);
    } catch (error) {
      console.log(error);
    }
  },

  async getPosts({ commit, state }) {
    try {
      const posts = await axios.get(`${state.apiUrl}post`);

      commit('addPosts', posts);
    } catch (error) {
      console.log(error);
    }
  },

  async getPostsByCategory({ commit, state }, categoryId) {
    try {
      const posts = await axios.get(`${state.apiUrl}bycategory/${categoryId}`);

      commit('setPosts', posts);
    } catch (error) {
      console.log(error);
    }
  },

  async getPost({ commit, state }, postId) {
    try {
      const post = await axios.get(`${state.apiUrl}post${postId}`);

      commit('setPosts', [post]);
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
