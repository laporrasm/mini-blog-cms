<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="onSubmit">
      <input type="text" required placeholder="username" v-model="username">

      <input type="password" required placeholder="password" v-model="password">

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',

  data: () => ({
    username: '',
    password: '',
  }),

  methods: {
    ...mapActions('auth', ['login']),

    async onSubmit() {
      await this.login({
        username: this.username,
        password: this.password,
      });

      this.$router.push('/admin');
    },
  },
};
</script>

<style>

</style>
