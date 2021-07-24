/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import axios from 'axios';

const state = () => ({
  apiUrl: 'http://localhost:3000/api/post',
  posts: [],
});

const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },

  addPost(state, post) {
    state.posts.push(post);
  },

  updatePost(state, post) {
    state.posts.splice(
      state.posts.findIndex(({ id }) => id === post.id),
      1,
      post,
    );
  },

  deletePost(state, id) {
    state.posts.splice(
      state.posts.findIndex((c) => c.id === id),
      1,
    );
  },
};

const actions = {
  async getPosts({ commit, state }) {
    try {
      const posts = await axios.get(state.apiUrl);

      commit('setPosts', posts);
    } catch (error) {
      console.log(error);
    }
  },

  async getPost({ commit, state }, postId) {
    try {
      const post = await axios.get(`${state.apiUrl}/${postId}`);

      commit('addPost', post);
    } catch (error) {
      console.log(error);
    }
  },

  async addPost({ commit, state }, post) {
    try {
      const addedPost = await axios.post(state.apiUrl, post);

      commit('addPost', addedPost);
    } catch (error) {
      console.log(error);
    }
  },

  async updatePost({ commit, state }, { id, ...post }) {
    try {
      await axios.put(`${state.apiUrl}/${id}`, post);

      commit('updatePost', { id, ...post });
    } catch (error) {
      console.log(error);
    }
  },

  async deletePost({ commit, state }, postId) {
    try {
      await axios.delete(`${state.apiUrl}/${postId}`);

      commit('deletePost', postId);
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
