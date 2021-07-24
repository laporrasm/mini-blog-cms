<template>
  <div>
    <button @click="onLogout">Logout</button>
    <h1>Admin</h1>

    <div>
      <article v-for="post in posts" :key="post.id">
        <h2>{{ post.postTitle }}</h2>
        <p>{{ post.postDesc }}</p>
      </article>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Admin',

  methods: {
    ...mapActions('post', ['getPosts']),

    ...mapActions('auth', ['logout']),

    async onLogout() {
      await this.logout();

      this.$router.push('logout');
    },
  },
};
</script>

<style>

</style>
